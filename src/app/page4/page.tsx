"use client";

import Image from "next/image";
import Hearts from "../components/hearts";

import Header from "../components/Header";
import Link from "next/link";

import { useAnswers } from "@/context/AnswerContext";

export default function page4() {
  const { answers, updateAnswer } = useAnswers();
  return (
    <div className="bg-fuchsia-100 ">
      <Hearts />
      <Header />
      <div className="flex flex-col items-center justify-center py-[70px] px-[30px]">
        <h1 className="font-barriecito text-[35px] mb-[20px] text-red-600">
          Tapiii momen kenangan yang paling aku sukaa apa yaaa kira kiraa ????
        </h1>
        <h2 className="font-outfit text-[20px] text-center">
          Jeng jeng jenggg !! SAAT KITAA PERGII KE LEMBANG PARK AND ZOO !! Bener
          bener kenangan favorit akuu ! Meskipun sebenernya setiap pertemuan
          merupakan kenangan manis, tapi gamungkin aku taru semua yaa 😭😭. Jadi
          aku pick 1 saja yang paling pavorit ❤️❤️
        </h2>
        <h2 className="font-outfit text-[30px] mt-[10px] mb-[20px] text-red-700">
          DOKUMENTASI
        </h2>
        <div className="flex my-[10px]">
          <Image src="/images/fav3.jpg" width={300} height={100} alt="fav1" />
          <Image src="/images/themostfav.jpg" width={300} height={100} alt="" />
          <Image
            src="/images/themostfav2.jpg"
            width={300}
            height={100}
            alt=""
          />
        </div>

        <div className="flex my-[10px]">
          <Image
            src="/images/themostfav3.jpg"
            width={300}
            height={100}
            alt=""
          />
          <Image
            src="/images/themostfav4.jpg"
            width={300}
            height={100}
            alt=""
          />
        </div>

        <h1 className="font-barriecito text-[35px] my-[20px] mx-[100px] text-red-600">
          Kalo momen pavorit kamu apa sayangggg???? Tuliskan di kolom komentarr
          yahhhhhh !!
        </h1>

        <textarea
          value={answers.favoriteMoment}
          required
          onChange={(e) => updateAnswer("favoriteMoment", e.target.value)}
          placeholder="Tulis momen favorit kamu di sini 💌"
          className="w-[1000px] h-40 rounded-xl border border-pink-300 p-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <div className="mt-[20px] gap-10 flex">
          <Link href="/page3">
            <button className="rounded-full bg-red-600 px-5 font-outfit py-3 text-[20px] text-white text-2xl transition cursor-pointer hover:bg-red-800">
              ⬅️ Back 💕
            </button>
          </Link>
          <Link href="/page5">
            <button className="rounded-full bg-pink-500 px-5 font-outfit py-3 text-[20px] text-white text-2xl cursor-pointer transition hover:bg-pink-600">
              💕 Next ➡️
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
