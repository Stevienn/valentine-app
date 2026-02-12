"use client";

import Hearts from "../components/hearts";

import Header from "../components/Header";
import Link from "next/link";

export default function page7() {
  return (
    <div className="bg-fuchsia-100 ">
      <Hearts />
      <Header />
      <div className="flex flex-col items-center justify-center py-[70px] px-[30px]">
        <h1 className="font-barriecito text-[35px] mb-[20px] text-red-600">
          Wahh, ada gitar nich hehehehe 🤔🤔💭💭
        </h1>
        <h2 className="font-outfit text-[20px] text-center">
          Di valentine tahun ini aku juga ingin remaster fingerstyle gitar aku,
          lagu yang kamu sukai sepanjang masa, hehehe. Karena waktu aku kirim
          dulu, aku masih macet macet, yang sekarang udah mendingan lah
          hehehehe. OH IYA, dan ada lagu yang khususssss buat kamu aku
          nyanyikan, HEHEHE (JANGAN PLAY DULU SEBELUM INTERAKSI YAH !!!)
          ❤️❤️❤️❤️
        </h2>
        <h2 className="font-outfit text-[30px] mt-[10px] mb-[20px] text-red-700">
          SEMOGA SUKAAA !!! ❤️❤️❤️❤️
        </h2>

        <div className="my-[10px] max-w-[1200px] flex flex-col justify-center items-center">
          <video
            src="/music/INTERAKSI.mp4"
            controls
            className="w-[720px] rounded-xl"
          />
          <p className="font-outfit text-[17px] mt-[10px] mx-[10px] flex items-center">
            Play yang atass duluu ya sayanggg interaksii, hehehe, kalau sudahhh,
            play yang selanjutnya lagu dikhususkan untuk kamuuu ❤️❤️
          </p>
        </div>

        <div className="my-[10px] max-w-[1200px] flex flex-col justify-center items-center">
          <video
            src="/music/forvalentineayangcompress.mp4"
            controls
            className="w-[720px] rounded-xl"
          />
          <p className="font-outfit text-[17px] mt-[10px] mx-[10px] flex items-center">
            INTINYA JANGAN PLAY VIDEO INI DULU SEBELUM INTERAKSI !!! JANGAN
            MELANGGAR !!! Hehehehe kalau sudah dengar, maaf kalau fals, aku
            sudah berusaha semaksimal mungkin 😭😭 ❤️
          </p>
        </div>

        <h1 className="font-barriecito text-[35px] my-[20px] mx-[100px] text-red-600">
          Sudah play semua??? semoga kamu salbrut yaaa xixixi, iya maap kalau ga
          salbrut aku ga jago HUHUHUHU, Yukkk kita next lagiii, kira kira ada
          apa yaa??? ❤️❤️❤️❤️
        </h1>

        <div className="mt-[20px] gap-10 flex">
          <Link href="/page6">
            <button className="rounded-full bg-red-600 px-5 font-outfit py-3 text-[20px] text-white text-2xl transition cursor-pointer hover:bg-red-800">
              ⬅️ Back 💕
            </button>
          </Link>
          <Link href="/page8">
            <button className="rounded-full bg-pink-500 px-5 font-outfit py-3 text-[20px] text-white text-2xl cursor-pointer transition hover:bg-pink-600">
              💕 Next ➡️
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
