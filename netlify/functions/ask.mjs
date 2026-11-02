
export default async function handler(request, context) {
    if (request.method !== "POST") {
      return Response.json(
        { error: "طريقة الطلب غير مدعومة." },
        { status: 405 }
      );
    }
  
    let body;
  
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { error: "تعذر قراءة السؤال." },
        { status: 400 }
      );
    }
  
    const question =
      typeof body.question === "string" ? body.question.trim() : "";
  
    const language =
      typeof body.language === "string"
        ? body.language.trim().slice(0, 80)
        : "";
  
    if (!question || question.length > 700) {
      return Response.json(
        { error: "اكتب سؤالًا من 1 إلى 700 حرف." },
        { status: 400 }
      );
    }
  
    const apiKey = process.env.OPENAI_API_KEY;
  
    if (!apiKey) {
      return Response.json(
        { error: "المساعد الذكي غير مفعّل بعد." },
        { status: 503 }
      );
    }
  
    const instructions = `
  أنت مساعد تعليمي في موقع TechPath لتعليم البرمجة باللغة العربية.
  اشرح اللغات واستخداماتها ومميزاتها وطرق تعلمها والأخطاء البرمجية.
  قدم أمثلة قصيرة وصحيحة واشرحها للمبتدئين.
  إذا كان السؤال غير واضح، اطلب توضيحًا.
  لا تخترع معلومات، ولا تدع أنك اختبرت الكود.
  اجعل الإجابات واضحة ومختصرة، وبحد أقصى 250 كلمة تقريبًا.
  `;
  
    const input = `
  لغة البرمجة المحددة: ${language || "لم يتم تحديد لغة"}
  
  سؤال الزائر:
  ${question}
  `;
  
    try {
      const apiResponse = await fetch(
        "https://api.openai.com/v1/responses",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "gpt-5-mini",            instructions,
            input,
            max_output_tokens: 450,
            store: false
          })
        }
      );
  
      const data = await apiResponse.json();
  
      if (!apiResponse.ok) {
        console.error("AI request failed:", data.error?.message);
  
        return Response.json(
          { error: "تعذر الحصول على الإجابة. حاول مرة أخرى." },
          { status: 502 }
        );
      }
  
      const answer = (data.output || [])
        .flatMap((item) => item.content || [])
        .filter((part) => part.type === "output_text")
        .map((part) => part.text)
        .join("\n")
        .trim();
  
      if (!answer) {
        return Response.json(
          { error: "لم تصل إجابة صالحة." },
          { status: 502 }
        );
      }
  
      return Response.json({ answer });
    } catch (error) {
      console.error("AI connection failed:", error.message);
  
      return Response.json(
        { error: "تعذر الاتصال بخدمة الإجابات." },
        { status: 502 }
      );
    }
  }
  