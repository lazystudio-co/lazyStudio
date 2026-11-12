import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        {
          success: false,
          error: "Missing RESEND_API_KEY environment variable",
        },
        { status: 500 },
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const body = await req.json();
    const { name, email, phone, services, message, budget } = body;

    // Optional MySQL save (won't block email delivery if local database is offline)
    try {
      if (db && typeof db.query === "function") {
        await db.query(
          "INSERT INTO contacts (name, email, phone, message, budget) VALUES (?, ?, ?, ?, ?)",
          [name, email, phone, message, budget],
        );
      }
    } catch (dbError) {
      console.warn("MySQL storage skipped:", dbError?.message);
    }

    const servicesList =
      Array.isArray(services) && services.length > 0
        ? services.join(", ")
        : "None selected";

    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL || `"LazyStudio <contact@lazystudio.co>`,
      to: process.env.CONTACT_TO_EMAIL || "lazystudio.org@gmail.com",
      replyTo: email,
      subject: `New Inquiry ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 12px;">
          <h2 style="color: #111; margin-top: 0;">New Project</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p><strong>Name / Company:</strong> ${name || "N/A"}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email || "N/A"}</a></p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Services:</strong> ${servicesList}</p>
          <p><strong>Budget:</strong> ${budget || "N/A"}</p>
          <div style="margin-top: 16px; padding: 16px; background-color: #f9f9f9; border-radius: 8px;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap; margin-top: 8px; color: #333;">${message || "No message provided."}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json(
        { success: false, error: error.message },
        { status: 400 },
      );
    }

    return Response.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      {
        success: false,
        error: error?.message || "Unexpected server error",
      },
      { status: 500 },
    );
  }
}
