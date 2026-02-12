import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const finalMessage = `
Hai sayang 💖 ini pesan otomatis dari website valentine Stipy !!,

Ini jawaban kamu:

✨ Momen Favorit Kamu:
${body.favoriteMoment}
---
✨ Momen Favorit Stipy:
Saat kita pergi ke lembang park and zoo, salah satu moment favorit aku dari semua momen momen favorit yang ada. Kita bersenang senang disana melihat banyak sekali animals, foto foto, jajan, jalan berdua, istirahat, nonton pertunjukan, woah !!

💌 Pesan & Kesan:
${body.message}
---
💌 Pesan & Kesan dari Stipy:
Sayangkuu, cintakuuu. Makasihh yaa !! Udah masih mau menjadi valentine aku di tahun inii... huhuhu, meski banyak sekali rintangan dan ternyata banyak sekali kesalahan aku yang ternyata selama ini aku lakukan, kamu masih mau menjadi pacar akuu.. Akuu tauu kamu pasti sempat capek, energi kekuras terus, nangis nangisan, ovt, bahkan sampe trauma. Maafin stipy semuanya, meski begitu, stipy bakal tetap pegang omongan stipy. Janji janji manis yang stipy omongin akan selalu stipy ingat, yaitu akan selalu mencintaimu di masa masa apapun. Karena kamulah yang stipy ingini untuk menjadi teman hidup stipy. Stipy tidak akan selalu lupa akan omongan stipy. My love is unconditional for you ❤️❤️❤️ Aku juga sangattttttttt bersyukur dan berterimakasih karena setelah semua itu, chei masih ingin bersama dengan stipy, masih memberikan stipy kesempatan terus menerus, masih ingin menjadi pacar stipy. Seperti lirik lagu yang tadi afgan ya, hehehe, walau mungkin terlalu cepat bagi kita berdua untuk mengatakan selamanya kita akan bersama, tapi tetap percayalah ❤️❤️. Mungkin aku ga sempurna, tetapi aku selalu mau belajar menjadi lebih baik bareng kamu. I LOVE YOU THIS VALENTINE AND IN THE NEXT NEXT NEXT EVERY OTHER VALENTINE !!! ❤️❤️

Terima kasih sudah isi semuanya. Pesan dan kesan tersebut telah terkirim ke Stipy !
Aku sayang banget sama kamu 🤍
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: ["stevenhartanto0603@gmail.com", "chiesamutiaravictoria@gmail.com"],
    subject: "Jawaban Valentine 💌",
    text: finalMessage,
  });

  return Response.json({ success: true });
}
