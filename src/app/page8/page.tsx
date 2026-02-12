"use client";

import Hearts from "../components/hearts";

import Header from "../components/Header";
import Link from "next/link";

export default function page8() {
  return (
    <div className="bg-fuchsia-100 ">
      <Hearts />
      <Header />
      <div className="flex flex-col items-center justify-center py-[70px] px-[30px] fade-in-left delay-700">
        <h1 className="font-barriecito text-[35px] mb-[20px] text-red-600">
          This song I presented for you ❤️❤️❤️❤️
        </h1>
        <h2 className="font-outfit text-[20px] text-center">
          Laguu yang sangat relateee huhuhuuu bagikuuu untuk muuu, BAGI KITAA
          YAAA !!!! HARUSNYA !!!! Liriknya untuk hubungan kita hehe ❤️
        </h2>
        <h2 className="font-outfit text-[30px] mt-[10px] text-red-700">
          Percayalah - Afgan ft. Raisa
        </h2>

        <div className="my-[10px] max-w-[1200px] flex flex-col justify-center items-center">
          <video
            src="/music/percayalah.mp4"
            controls
            className="w-[720px] rounded-xl"
          />
          <p className="font-outfit text-[20px] mx-[10px] mt-[10px] flex items-center">
            Selamanya kita akan bersama, takkan ada keraguan, percayalah ❤️❤️❤️
          </p>
        </div>

        <h1 className="font-barriecito text-[35px] my-[20px] mx-[100px] text-red-600">
          Perjalanan berakhir? Oh belumm !! Masih bisa next kok ! Jangan bosen
          bosen yaa !! xixixi
        </h1>

        <div className="mt-[20px] gap-10 flex">
          <Link href="/page7">
            <button className="rounded-full bg-red-600 px-5 font-outfit py-3 text-[20px] text-white text-2xl transition cursor-pointer hover:bg-red-800">
              ⬅️ Back 💕
            </button>
          </Link>
          <Link href="/page9">
            <button className="rounded-full bg-pink-500 px-5 font-outfit py-3 text-[20px] text-white text-2xl cursor-pointer transition hover:bg-pink-600">
              💕 Next ➡️
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
