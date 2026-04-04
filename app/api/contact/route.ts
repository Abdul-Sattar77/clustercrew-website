// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const WHATSAPP_NUMBER = "923190453945";

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !service || service === "default" || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    // ── Debug: check env vars are loaded ──
    console.log("GMAIL_USER loaded:", !!process.env.GMAIL_USER);
    console.log("GMAIL_PASS loaded:", !!process.env.GMAIL_PASS);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ── Verify connection before sending ──
    await transporter.verify();
    console.log("SMTP connection verified ✅");

    await transporter.sendMail({
      from: `"ClusterCrew Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `🚀 New Inquiry: ${service} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 32px; background: #0f172a; color: #fff; border-radius: 16px;">
          <div style="background: #facc15; color: #000; padding: 8px 16px; border-radius: 8px; display: inline-block; font-weight: 900; font-size: 12px; letter-spacing: 2px; margin-bottom: 24px;">
            NEW INQUIRY
          </div>
          <h2 style="margin: 0 0 4px; font-size: 28px; font-weight: 900;">${name}</h2>
          <p style="color: #94a3b8; margin: 0 0 4px; font-size: 14px;">📧 ${email}</p>
          <p style="color: #facc15; font-weight: 700; margin: 0 0 24px;">🛠 ${service}</p>
          <div style="background: #1e293b; padding: 20px; border-radius: 12px; margin-bottom: 28px;">
            <p style="margin: 0; line-height: 1.8; color: #cbd5e1; font-size: 15px;">
              ${message.replace(/\n/g, "<br/>")}
            </p>
          </div>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="mailto:${email}?subject=Re: Your inquiry about ${service}"
               style="background: #facc15; color: #000; padding: 12px 24px; border-radius: 10px; text-decoration: none; font-weight: 900; font-size: 13px; display: inline-block;">
              ✉️ Reply via Email
            </a>
            <a href="https://wa.me/${WHATSAPP_NUMBER}"
               style="background: #25D366; color: #fff; padding: 12px 24px; border-radius: 10px; text-decoration: none; font-weight: 900; font-size: 13px; display: inline-block;">
              💬 Reply on WhatsApp
            </a>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully ✅");
    return NextResponse.json({ success: true });

  } catch (err: any) {
    // ── Print full error details ──
    console.error("=== MAIL ERROR ===");
    console.error("Message:", err.message);
    console.error("Code:", err.code);
    console.error("Response:", err.response);
    console.error("Full error:", err);
    console.error("==================");

    return NextResponse.json(
      { error: "Failed to send", detail: err.message },
      { status: 500 }
    );
  }
}