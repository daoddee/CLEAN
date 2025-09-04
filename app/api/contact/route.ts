import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, postcode, message } = body || {};
    if (!name || !email || !phone) {
      return Response.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.TO_EMAIL || "info@cleanhomes.online";
    const subject = `New enquiry from ${name}`;
    const html = `
      <h2>New Website Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Postcode:</strong> ${postcode || "-"}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || "").replace(/\\n/g, "<br/>")}</p>
      <hr/>
      <p>Source: cleanhomes.online contact form</p>
    `;

    const from = "CleanHomes <no-reply@cleanhomes.online>";
    await resend.emails.send({ from, to, subject, html });

    return Response.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return Response.json({ ok: false, error: err?.message || "Email failed" }, { status: 500 });
  }
}
