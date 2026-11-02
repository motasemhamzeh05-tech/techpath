const requestLimits = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 8;

function isAllowed(ip) {
  const now = Date.now();

  for (const [key, value] of requestLimits) {
    if (now - value.start > WINDOW_MS) {
      requestLimits.delete(key);
    }
  }

  const entry = requestLimits.get(ip);

  if (!entry || now - entry.start > WINDOW_MS) {
    requestLimits.set(ip, { start: now, count: 1 });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  return true;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "طريقة الطلب غير مدعومة."
    });
  }

  const forwardedFor = req.headers["x-forwarded-for"];
  const ip = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : (forwardedFor || "unknown").split(",")[0].trim();

  if (!isAllowed(ip)) {
    return res.status(429).json({
      error: "وصلت للحد المؤقت للأسئلة. حاول مرة ثانية لاحقًا."
    });
  }

  const body = req.body || {};
  const question =
    typeof body.question === "string"
      ? body.question.trim()
      : "";

  const language =
    typeof body.language === "string"
      ? body.language.trim().slice(0, 80)
      : "";

  if (!question || question.length > 700) {
    return res.status(400).json({
      error: "اكتب سؤالًا من 1 إلى 700 حرف."
    });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(503).json({
      error: "المساعد الذكي غير مفعّل بعد. يلزم إعداد خدمة الذكاء الاصطناعي."
    });
  }

  const instructions = `
أنت مساعد تعليمي في موقع TechPath لتعليم البرمجة باللغة العربية.

أجب بالعربية الواضحة والمبسطة، وبأسلوب مناسب للمبتدئين.
إذا تم تحديد لغة برمجة، فاعتبر السؤال عنها ما لم يذكر المستخدم لغة أخرى.
أجب عن الأسئلة المتعلقة بلغة البرمجة واستخداماتها وتعلمها والأخطاء البرمجية
والأمثلة والاختلافات بين اللغات.

إذا كان السؤال لا يحدد اللغة بوضوح، اطلب من المستخدم تحديدها.
استخدم أمثلة قصيرة وصحيحة عند الحاجة، واشرح ما يفعله الكود.
إذا لم تكن متأكدًا من معلومة، وضح عدم اليقين ولا تخترع إجابة.
لا تدّعِ أنك شغّلت الكود أو اختبرت البرنامج.
إذا كان السؤال خارج موضوع البرمجة، وجّه المستخدم بلطف إلى أسئلة البرمجة.

اجعل الإجابة واضحة ومختصرة قدر الإمكان، عادةً أقل من 250 كلمة.
استخدم نصًا عاديًا، وتجنب جداول Markdown.
`;

  const input = `
اللغة المحددة في الموقع: ${language || "لم يحدد المستخدم لغة بعد"}

سؤال الزائر:
${question}
`;

  try {
    const apiResponse = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-5-mini",          instructions,
          input,
          max_output_tokens: 450,
          store: false
        })
      }
    );

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      console.error("AI request failed:", data.error?.message);
      return res.status(502).json({
        error: "لم نتمكن من توليد الإجابة. تحقق من إعدادات خدمة الذكاء الاصطناعي."
      });
    }

    const answer = (data.output || [])
      .flatMap((item) => item.content || [])
      .filter((part) => part.type === "output_text")
      .map((part) => part.text)
      .join("\n")
      .trim();

    if (!answer) {
      return res.status(502).json({
        error: "لم تصل إجابة صالحة. حاول مرة أخرى."
      });
    }

    return res.status(200).json({ answer });
  } catch (error) {
    console.error("AI connection failed:", error.message);

    return res.status(502).json({
      error: "تعذر الاتصال بخدمة الإجابات. حاول مرة أخرى لاحقًا."
    });
  }
}