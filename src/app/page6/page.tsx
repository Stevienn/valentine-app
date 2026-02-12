"use client";

import Hearts from "../components/hearts";

import Header from "../components/Header";
import Link from "next/link";
import FadeInOnScroll from "../components/FadeInScroll";

export default function page5() {
  return (
    <div className="bg-fuchsia-100 ">
      <Hearts />
      <Header />
      <div className="flex flex-col items-center justify-center py-[70px] px-[30px] ">
        <h1 className="font-barriecito text-[35px] mb-[20px] text-red-600 fade-in-left">
          Nahhh sekarang, ada apa lagii yaaa 🤔🤔💭💭
        </h1>
        <h2 className="font-outfit text-[20px] text-center fade-in-left">
          Kamuu ingat kann ada beberapa video edit yang aku buat kann?? Nahhh
          video edit yang super kiyowo itu aku tampilkan saja yahhh, mengingat
          momen momen kitahh hehehe ❤️❤️❤️❤️
        </h2>
        <h2 className="font-outfit text-[30px] mt-[10px] mb-[20px] text-red-700 fade-in-right">
          VIDEO EDIT BY STIPY
        </h2>

        <div className="flex my-[10px] max-w-[1200px] fade-in-left delay-300">
          <video
            src="/videos/videoedit.mp4"
            controls
            className="w-[320px] max-w-sm rounded-xl"
          />
          <p className="font-outfit text-[17px] mx-[10px] flex items-center">
            Ini video yang aku buat saat valentine tahun laluuuu hehehehe, masih
            ingatt tidakkk !!! Tahun lalu aku bikin video ini dan date sama kamu
            dan bucket bunga dan cokelat. Tahun ini aku cuma bisa bikin website
            karena ga ketemu :(( Tapi semoga kamu suka dengan website ini huhuhu
            ❤️
          </p>
        </div>

        <div className="flex my-[10px] max-w-[1200px] fade-in-right delay-700">
          <p className="font-outfit text-[17px] mx-[10px] flex items-center">
            Ini aku bikin video karena lagu dan konten ini lagi viral dimana
            mana di ig maupun di tiktok wkwkwk 😭😭, Jadinya aku fomo dan ikut
            ikutan bikin video kitah yang ini hehehehe ❤️❤️❤️❤️
          </p>
          <video
            src="/videos/videoedit2.mp4"
            controls
            className="w-[320px] max-w-sm rounded-xl"
          />
        </div>

        <FadeInOnScroll direction="left">
          <div className="flex my-[10px] max-w-[1200px]">
            <video
              src="/videos/videoedit3.mp4"
              controls
              className="w-[320px] max-w-sm rounded-xl"
            />
            <p className="font-outfit text-[17px] mx-[10px] flex items-center">
              Yang ini jedag jedug doang 😭😭😭😭😭😭😭😭. Yang ini alay banget
              bisa di skip aja kalau gamau ditonton 😭😭😭😭😭😭😭😭
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="right">
          <div className="flex my-[10px] max-w-[1200px]">
            <p className="font-outfit text-[17px] mx-[10px] flex items-center">
              Inii editan kiyowo juga niichhhh ! Aku buat saat beberapa bulan
              kita ketemu for the first time, karena kamu super kiyowo hehehehe
              (GILAA UDAH I LOVE YOU I LOVE YOU ANNN 😭😭😭😭) ❤️❤️❤️❤️
            </p>
            <video
              src="/videos/videoedit4.mp4"
              controls
              className="w-[320px] max-w-sm rounded-xl"
            />
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="left">
          <div className="flex my-[10px] max-w-[1200px]">
            <video
              src="/videos/videoedit5.mp4"
              controls
              className="w-[320px] max-w-sm rounded-xl"
            />
            <p className="font-outfit text-[17px] mx-[10px] flex items-center">
              Nahhh kalau yang ini editan paling keren paling kiyowo bahkan
              editan ini satu satunya yang aku post di short yt dan banyak yang
              nonton 😭😭😭😭😭😭
            </p>
          </div>
        </FadeInOnScroll>

        <h1 className="font-barriecito text-[35px] my-[20px] mx-[100px] text-red-600">
          Hehehe super kiyowo kiyowo semua kan editannyaaa !! Xixixixixi ! Ayok
          kita lanjutkan perjalanan kita dengan menekan tombol next XIXIXIXI
          ❤️❤️❤️❤️
        </h1>

        <div className="mt-[20px] gap-10 flex">
          <Link href="/page5">
            <button className="rounded-full bg-red-600 px-5 font-outfit py-3 text-[20px] text-white text-2xl transition cursor-pointer hover:bg-red-800">
              ⬅️ Back 💕
            </button>
          </Link>
          <Link href="/page7">
            <button className="rounded-full bg-pink-500 px-5 font-outfit py-3 text-[20px] text-white text-2xl cursor-pointer transition hover:bg-pink-600">
              💕 Next ➡️
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
