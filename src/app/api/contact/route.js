import { db } from "@/lib/db";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message, budget } = await req.json();

    // Save to MySQL
    await db.query(
      "INSERT INTO contacts (name, email, phone, message, budget) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, message, budget],
    );

    // Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: name,
      text: `
New Order Recieved:

Name: ${name}
Email: ${email}
Phone: ${phone}
Budget: ${budget}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: error.message });
  }
}
