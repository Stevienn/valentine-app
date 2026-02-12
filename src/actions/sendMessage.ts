"use server";

import nodemailer from "nodemailer";

export async function sendMessage(formData: FormData) {
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Valentine Website 💖" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: "Pesan Valentine dari Website Stipy 💌",
    text: message,
  });
}
