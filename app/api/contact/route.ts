import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { json } from "stream/consumers";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, country } = body;

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim() || !service?.trim()) {
      return NextResponse.json(
        { error: "Name, email, service and message are required." },
        { status: 400 }
      );
    }

    const recipients = [
      process.env.CONTACT_EMAIL_1,
      process.env.CONTACT_EMAIL_2,
    ].filter(Boolean) as string[];

    if (recipients.length === 0) {
      console.error("[contact] No recipient emails configured.");
      return NextResponse.json(
        { error: "Server misconfiguration. Please try again later." },
        { status: 500 }
      );
    }

    const receipt = await resend.emails.send({
      from: process.env.FROM_EMAIL ?? "onboarding@resend.dev",
      to: recipients,
      subject: `New Enquiry — ${service} | ${name}`,
      html: emailTemplate({ name, email, phone, service, message, country }),
    });

    return NextResponse.json(
      { 
        success: true,
        from: process.env.FROM_EMAIL ?? "onboarding@resend.dev",
      to: recipients,
      replyTo: email,
      subject: `New Enquiry — ${service} | ${name}`,
      receipt : JSON.stringify(receipt)

      });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

function emailTemplate({
  name,
  email,
  phone,
  service,
  message,
  country,
}: {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  country?: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
          style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a56db 0%,#0e9f6e 100%);padding:36px 40px;">
              <h1 style="margin:0 0 4px;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">
                New Student Enquiry
              </h1>
              <p style="margin:0;color:rgba(255,255,255,0.75);font-size:13px;">
                Global Unity Education — Contact Form Submission
              </p>
            </td>
          </tr>

          <!-- Service badge -->
          <tr>
            <td style="padding:24px 40px 0;">
              <span style="display:inline-block;background:#eff6ff;color:#1a56db;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;padding:5px 14px;border-radius:100px;border:1px solid #bfdbfe;">
                ${service}
              </span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:24px 40px 36px;">

              <p style="margin:0 0 20px;color:#6b7280;font-size:14px;line-height:1.6;">
                A new enquiry has been submitted via the website contact form.
              </p>

              <!-- Details table -->
              <table width="100%" cellpadding="0" cellspacing="0"
                style="border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
                ${row("Full Name", name)}
                ${row("Email", `<a href="mailto:${email}" style="color:#1a56db;text-decoration:none;">${email}</a>`)}
                ${phone ? row("Phone", phone) : ""}
                ${country ? row("Country", `🌍 ${country}`) : ""}
                ${row("Service", service)}
              </table>

              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                <tr>
                  <td style="background:#f9fafb;border-left:4px solid #1a56db;border-radius:0 10px 10px 0;padding:16px 20px;">
                    <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;">
                      Message
                    </p>
                    <p style="margin:0;font-size:14px;color:#111827;line-height:1.75;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your ${service} Enquiry — Global Unity Education"
                      style="display:inline-block;background:#1a56db;color:#ffffff;text-decoration:none;padding:13px 32px;border-radius:10px;font-size:14px;font-weight:700;">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:18px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#9ca3af;line-height:1.6;">
                Sent automatically from the Global Unity Education contact form.<br/>
                Use the button above to reply directly to the enquirer.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;background:#fafafa;width:35%;vertical-align:top;">
        <span style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.07em;">
          ${label}
        </span>
      </td>
      <td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;vertical-align:top;">
        <span style="font-size:14px;color:#111827;font-weight:500;">${value}</span>
      </td>
    </tr>
  `;
}