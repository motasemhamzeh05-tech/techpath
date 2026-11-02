
export default async function handler(req, res) {
    res.setHeader("Cache-Control", "no-store");
  
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      return res.status(405).json({
        message: "Method not allowed"
      });
    }
  
    try {
      const root = "https://api.onlinecompiler.io/api/v2/piston";
  
      const response = await fetch(`${root}/runtimes`, {
        headers: {
          Accept: "application/json"
        },
        signal: AbortSignal.timeout(10000)
      });
  
      const data = await response.json().catch(() => null);
  
      if (!response.ok || !Array.isArray(data)) {
        return res.status(502).json({
          message: "تعذر جلب قائمة اللغات من OnlineCompiler."
        });
      }
  
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=300, stale-while-revalidate=600"
      );
  
      return res.status(200).json(data);
  
    } catch (error) {
      console.error("Runtime list failed:", error.message);
  
      return res.status(502).json({
        message: "خدمة تشغيل الأكواد غير متاحة حالياً."
      });
    }
  }
  