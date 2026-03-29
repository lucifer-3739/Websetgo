import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, service, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "Please fill out all required fields" },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables");
      return NextResponse.json(
        { message: "Email configuration error. Support team is not available right now." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `New Lead: ${firstName} ${lastName} - ${service || "Web Service"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #f97316;">New Contact Message from Websetgo</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 150px;">Name</td>
              <td style="padding: 10px; border: 1px solid #eee;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #f97316;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Interested In</td>
              <td style="padding: 10px; border: 1px solid #eee;">${service || "Not specified"}</td>
            </tr>
          </table>
          
          <h3 style="margin-top: 30px;">Message:</h3>
          <div style="padding: 15px; background: #f9f9f9; border-left: 4px solid #f97316; white-space: pre-wrap;">
            ${message}
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #888;">
            This email was sent from your Websetgo Contact Form.
          </p>
        </div>
      `,
    };

    // Send email to admin
    await transporter.sendMail(mailOptions);

    // Send auto-reply confirmation email to the user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `We've received your message, ${firstName}!`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #f97316; margin-top: 0;">Thank you for reaching out!</h2>
          <p style="font-size: 16px; line-height: 1.5;">Hi ${firstName},</p>
          <p style="font-size: 16px; line-height: 1.5;">We've successfully received your message and our team will get back to you within 24 hours.</p>
          <p style="font-size: 16px; line-height: 1.5;">Here is a copy of what you sent us:</p>
          <div style="padding: 15px; background: #f9f9f9; border-left: 4px solid #f97316; margin: 20px 0; font-style: italic; white-space: pre-wrap;">${message}</div>
          <p style="font-size: 16px; line-height: 1.5;">If you need immediate assistance, feel free to reply directly to this email.</p>
          <br/>
          <p style="font-size: 16px; margin-bottom: 5px;">Best regards,</p>
          <p style="font-size: 16px; font-weight: bold; color: #f97316; margin-top: 0;">The Websetgo Team</p>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
