import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  company: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  content: z.string().min(10).max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "taiki.inoue@arboris.jp";

    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Arboris Contact <onboarding@resend.dev>",
          to: [toEmail],
          subject: `【お問い合わせ】${data.company} ${data.name}様より`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0A192F; border-bottom: 2px solid #64FFDA; padding-bottom: 8px;">
                新しいお問い合わせ
              </h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                <tr>
                  <td style="padding: 10px; background: #f5f5f5; width: 120px; font-weight: bold;">会社名</td>
                  <td style="padding: 10px;">${data.company}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">お名前</td>
                  <td style="padding: 10px;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">メール</td>
                  <td style="padding: 10px;">${data.email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: #f5f5f5; font-weight: bold; vertical-align: top;">ご相談内容</td>
                  <td style="padding: 10px; white-space: pre-wrap;">${data.content}</td>
                </tr>
              </table>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("[Resend Error]", err);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
      }
    } else {
      console.log("[Contact Form Submission]", {
        company: data.company,
        name: data.name,
        email: data.email,
        content: data.content,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API Error]", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", details: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
