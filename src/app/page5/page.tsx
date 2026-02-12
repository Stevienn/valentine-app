"use client";

import Hearts from "../components/hearts";

import Header from "../components/Header";
import Link from "next/link";

export default function page5() {
  return (
    <div className="bg-fuchsia-100 ">
      <Hearts />
      <Header />
      <div className="flex flex-col items-center justify-center py-[70px] px-[30px]">
        <h1 className="font-barriecito text-[35px] mb-[20px] text-red-600">
          Udah tak terasa kita berada di halaman 5 nich ... ❤️
        </h1>
        <h2 className="font-outfit text-[20px] text-center">
          Disini aku mau reminiscing lagi konten konten yang udah kita buattt,
          yang kiyowoo, dan yang paling aku sukaaa hehee ❤️❤️
        </h2>
        <h2 className="font-outfit text-[30px] mt-[10px] mb-[20px] text-red-700">
          KONTEN KONTEN TIKTOK
        </h2>

        <div className="flex my-[10px] max-w-[1200px]">
          <video
            src="/videos/videocontent.mp4"
            controls
            className="w-[320px] max-w-sm rounded-xl"
          />
          <p className="font-outfit text-[17px] mx-[10px] flex items-center">
            Ini video konten tiktokkk pas di summareconn setelah kita pergi
            natalan bareng disanaa xixixi ❤️❤️
          </p>
        </div>

        <div className="flex my-[10px] max-w-[1200px]">
          <p className="font-outfit text-[17px] mx-[10px] flex items-center">
            Ini juga samaa !! Video konten yang kiyowoo pas banget pas natalan,
            habis dari natalan di summareconn xixixi (pegel sekali yang ini
            karena diulang ulang terus WKWKWK) 😭😭😭😭
          </p>
          <video
            src="/videos/videocontent2.mp4"
            controls
            className="w-[320px] max-w-sm rounded-xl"
          />
        </div>

        <div className="flex my-[10px] max-w-[1200px]">
          <video
            src="/videos/videocontent3.mp4"
            controls
            className="w-[320px] max-w-sm rounded-xl"
          />
          <p className="font-outfit text-[17px] mx-[10px] flex items-center">
            Ini video konten tiktokkk kitaa yang pas di IKEA !! Yang kita share
            ke khiel dan jovina dan akhirnya keciduk karena story instagram
            😭😭😭😭😭😭😭😭. Disini padahal baru beberapa bertemu tapi chei
            udah nyaman gitu ke akuhh liat aja dia nyender lucu bangettttt
            xixixixi
          </p>
        </div>

        <div className="flex my-[10px] max-w-[1200px]">
          <p className="font-outfit text-[17px] mx-[10px] flex items-center">
            Konten yang inii, pas aku masih di landmarkk, dan setelah kita bikin
            konten konten di braga ituu. Kita bikin konten yang sama, karena
            yang di braga kurang baguss wkwkw, ini yang versi bagusss
            (sebenernya ada 2 konten yang ini tapi aku lebih suka yang ini xixi)
            ❤️❤️❤️❤️
          </p>
          <video
            src="/videos/videocontent4.mp4"
            controls
            className="w-[320px] max-w-sm rounded-xl"
          />
        </div>

        <div className="flex my-[10px] max-w-[1200px]">
          <video
            src="/videos/videocontent5.mp4"
            controls
            className="w-[320px] max-w-sm rounded-xl"
          />
          <p className="font-outfit text-[17px] mx-[10px] flex items-center">
            INI VIDEO KONTEN KITA FOR THE FIRST TIME EVERRR !!!! Yang dimana
            kita date pertama kali di ciwalk untuk nonton !! Chei yang super
            kiyowo mengajak untuk mengonten barengg hehehe (kaku banget ya
            pergerakan aku 😭😭) Ini merupakan langkah awal dari konten konten
            yang lainnya WKWKWK
          </p>
        </div>

        <div className="flex my-[10px] max-w-[1200px]">
          <p className="font-outfit text-[17px] mx-[10px] flex items-center">
            Inii kita bikin konten pas habiss ibadah gmss !! dan kita berada di
            mako sebelah bip. Duduk duduk, nongki, minum sancha, ehhh chei yang
            super kiyowo ini mengajak untuk mengonten wkwkwk. (Filternya bagus
            banget bikin chei yang udah cantik makin CANTIK BANGETTT) ❤️❤️❤️❤️
          </p>
          <video
            src="/videos/videocontent6.mp4"
            controls
            className="w-[600px] max-w-sm rounded-xl"
          />
        </div>

        <div className="flex my-[10px] max-w-[1200px]">
          <video
            src="/videos/videocontent7.mp4"
            controls
            className="w-[600px] max-w-sm rounded-xl"
          />
          <p className="font-outfit text-[17px] mx-[10px] flex items-center">
            Yang inii konten di starbuckkss, disaat kitaa selesai bikin bricks
            barengg xixixi. Emang cheii ku yang super kiyowo ini tau aja ada
            kontenn konten baguss untuk kitahhh hehehe. Sering sering ngajak
            konten barennggg yaaaa !!!! ❤️❤️❤️❤️❤️❤️❤️❤️
          </p>
        </div>

        <h1 className="font-barriecito text-[35px] my-[20px] mx-[100px] text-red-600">
          Masih ada beberapa konten tiktok yang udah kita lakuinnn, tapi akuu
          mau highlightt yang bagus dan yangg akuu paling sukaaaa hehe ❤️❤️❤️❤️
        </h1>

        <div className="mt-[20px] gap-10 flex">
          <Link href="/page4">
            <button className="rounded-full bg-red-600 px-5 font-outfit py-3 text-[20px] text-white text-2xl transition cursor-pointer hover:bg-red-800">
              ⬅️ Back 💕
            </button>
          </Link>
          <Link href="/page6">
            <button className="rounded-full bg-pink-500 px-5 font-outfit py-3 text-[20px] text-white text-2xl cursor-pointer transition hover:bg-pink-600">
              💕 Next ➡️
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
