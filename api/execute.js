
export default async function handler(req, res) {
    res.setHeader("Cache-Control", "no-store");
  
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ message: "Method not allowed" });
    }
  
    const apiKey = process.env.ONLINECOMPILER_API_KEY;
  
    if (!apiKey) {
      return res.status(503).json({
        message: "لم يتم إعداد مفتاح OnlineCompiler على الخادم."
      });
    }
  
    const root = "https://api.onlinecompiler.io/api/v2/piston";
    const body = req.body || {};
  
    const language = String(body.language || "").trim();
    const version = String(body.version || "*").trim();
    const filename = String(body.filename || "main.txt");
    const code = typeof body.code === "string" ? body.code : "";
    const stdin = typeof body.stdin === "string" ? body.stdin : "";
  
    if (!language || !code.trim()) {
      return res.status(400).json({
        message: "اللغة والكود مطلوبان."
      });
    }
  
    if (code.length > 20000) {
      return res.status(413).json({
        message: "الكود يتجاوز الحد المسموح."
      });
    }
  
    if (stdin.length > 5000) {
      return res.status(413).json({
        message: "المدخلات تتجاوز الحد المسموح."
      });
    }
  
    if (!/^[A-Za-z0-9_.-]{1,80}$/.test(filename)) {
      return res.status(400).json({
        message: "اسم الملف غير صالح."
      });
    }
  
    if (
      !/^[A-Za-z0-9_+.#-]{1,40}$/.test(language) ||
      !/^[0-9A-Za-z.*+-]{1,40}$/.test(version)
    ) {
      return res.status(400).json({
        message: "تعريف اللغة أو إصدارها غير صالح."
      });
    }
  
    try {
      const runtimesResponse = await fetch(
        `${root}/runtimes`,
        {
          headers: { Accept: "application/json" },
          signal: AbortSignal.timeout(10000)
        }
      );
  
      const runtimes = await runtimesResponse.json().catch(() => []);
  
      const exists =
        Array.isArray(runtimes) &&
        runtimes.some(item =>
          String(item.language).toLowerCase() === language.toLowerCase()
        );
  
      if (!runtimesResponse.ok || !exists) {
        return res.status(400).json({
          message: "لغة التنفيذ غير مدعومة من خدمة التشغيل."
        });
      }
  
      const upstream = await fetch(
        `${root}/execute`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: apiKey
          },
          body: JSON.stringify({
            language,
            version,
            files: [
              {
                name: filename,
                content: code
              }
            ],
            stdin,
            args: [],
            run_timeout: 10000
          }),
          signal: AbortSignal.timeout(20000)
        }
      );
  
      const result = await upstream.json().catch(() => null);
  
      if (!upstream.ok || !result) {
        return res.status(upstream.status >= 400 && upstream.status < 500
          ? upstream.status
          : 502
        ).json({
          message: result?.message || "فشل خادم التشغيل في تنفيذ الكود."
        });
      }
  
      const run = result.run || {};
  
      for (const field of ["stdout", "stderr", "output"]) {
        if (typeof run[field] === "string") {
          run[field] = run[field].slice(0, 12000);
        }
      }
  
      return res.status(200).json({
        language: result.language || language,
        version: result.version || version,
        compile: {
          stdout: "",
          stderr: "",
          output: "",
          code: 0
        },
        run
      });
  
    } catch (error) {
      console.error("Code execution failed:", error.message);
  
      return res.status(502).json({
        message: "تعذر الاتصال بخدمة تشغيل الأكواد."
      });
    }
  }
  