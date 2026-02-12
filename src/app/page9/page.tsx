"use client";

import Hearts from "../components/hearts";

import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";

export default function page9() {
  return (
    <div className="bg-fuchsia-100 ">
      <Hearts />
      <Header />
      <div className="flex flex-col items-center justify-center py-[70px] px-[30px] fade-in-right">
        <h1 className="font-barriecito text-[35px] mb-[20px] text-red-600">
          Pesan pesan untukmu, dari stipy, hehe ! ❤️
        </h1>
        <h2 className="font-outfit text-[20px] text-center">
          Jangan lupa di play lagi ya music backgroundnya !! Biar makin romantis
          hehe
        </h2>
        <div className="my-[10px] max-w-[1200px] flex flex-col justify-center items-center">
          <Image src="/images/cutecouple.png" width={300} height={100} alt="" />
          <p className="font-outfit text-[20px] mx-[10px] mt-[10px] flex items-center">
            Sayangkuu, cintakuuu. Makasihh yaa !! Udah masih mau menjadi
            valentine aku di tahun inii... huhuhu, meski banyak sekali rintangan
            dan ternyata banyak sekali kesalahan aku yang ternyata selama ini
            aku lakukan, kamu masih mau menjadi pacar akuu.. Akuu tauu kamu
            pasti sempat capek, energi kekuras terus, nangis nangisan, ovt,
            bahkan sampe trauma. Maafin stipy semuanya, meski begitu, stipy
            bakal tetap pegang omongan stipy. Janji janji manis yang stipy
            omongin akan selalu stipy ingat, yaitu akan selalu mencintaimu di
            masa masa apapun. Karena kamulah yang stipy ingini untuk menjadi
            teman hidup stipy. Stipy tidak akan selalu lupa akan omongan stipy.
            My love is unconditional for you ❤️❤️❤️ Aku juga sangattttttttt
            bersyukur dan berterimakasih karena setelah semua itu, chei masih
            ingin bersama dengan stipy, masih memberikan stipy kesempatan terus
            menerus, masih ingin menjadi pacar stipy. Seperti lirik lagu yang
            tadi afgan ya, hehehe, walau mungkin terlalu cepat bagi kita berdua
            untuk mengatakan selamanya kita akan bersama, tapi tetap percayalah
            ❤️❤️. Mungkin aku ga sempurna, tetapi aku selalu mau belajar menjadi
            lebih baik bareng kamu. I LOVE YOU THIS VALENTINE AND IN THE NEXT
            NEXT NEXT EVERY OTHER VALENTINE !!! ❤️❤️
          </p>
        </div>

        <h1 className="font-barriecito text-[35px] my-[20px] mx-[100px] text-red-600">
          Kayanya perjalanan kita udah hampir mau habis nihhh !! Kita next dulu
          yuu !!
        </h1>

        <div className="mt-[20px] gap-10 flex">
          <Link href="/page8">
            <button className="rounded-full bg-red-600 px-5 font-outfit py-3 text-[20px] text-white text-2xl transition cursor-pointer hover:bg-red-800">
              ⬅️ Back 💕
            </button>
          </Link>
          <Link href="/page10">
            <button className="rounded-full bg-pink-500 px-5 font-outfit py-3 text-[20px] text-white text-2xl cursor-pointer transition hover:bg-pink-600">
              💕 Next ➡️
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
