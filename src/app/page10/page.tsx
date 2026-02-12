"use client";

import Hearts from "../components/hearts";

import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";

import { useAnswers } from "@/context/AnswerContext";
import { useState } from "react";

export default function page9() {
  const [modal, setIsModal] = useState(false);
  const [restart, setIsRestart] = useState(false);
  const { answers, updateAnswer } = useAnswers();

  const sendAll = async () => {
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answers),
    });

    alert("Jawaban berhasil dikirim 💌");
  };

  function StartModal() {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
        <div className="w-[420px] rounded-2xl bg-pink-50 px-6 py-8 text-center shadow-xl animate-[pop_0.4s_ease-out]">
          <h2 className="mb-2 text-xl font-semibold text-pink-700">
            Yahhhh, selesai juga akhirnyaa 💕
          </h2>
          <p className="mb-6 text-sm text-pink-600">
            Meskipun hadiah valentine tahun ini sudah selesaii, tapi kisah kita
            akan tetap terus berlanjutt kokk ! Ayo kita buat kenangan kenangan
            baru lagi hingga next valentine yaa !!! 🎶💕
          </p>
          <div className="flex gap-[20px] justify-center">
            <button
              className="rounded-full cursor-pointer bg-red-600 font-outfit px-5 py-2 text-sm font-medium text-white transition cursor-pointer hover:bg-red-800"
              onClick={() => setIsModal(false)}
            >
              Back ?
            </button>
            <button
              className="rounded-full bg-pink-500 px-5 py-2 text-sm font-medium text-white shadow-md transition hover:bg-pink-600 active:scale-95 cursor-pointer"
              onClick={() => {
                sendAll();
                setIsRestart(true);
              }}
            >
              Kirim 💌
            </button>
          </div>
        </div>
      </div>
    );
  }

  function RestartModal() {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
        <div className="w-[420px] rounded-2xl bg-pink-50 px-6 py-8 text-center shadow-xl animate-[pop_0.4s_ease-out]">
          <h2 className="mb-2 text-xl font-semibold text-pink-700">
            Terkirim !! 💌 💕
          </h2>
          <p className="mb-6 text-sm text-pink-600">
            Sekarang kamu udah bisa cek email kamu, wkwkwk kalo ada pesan baru
            artinya codingan aku berhasil (semoga berhasil 😭) !!! 🎶💕. Dan
            perjalanan ini sudah selesai... Kamu sudah bisa menutup website ini,
            tapi kalau kamu mau melihat lihat lagi, bolehh bangett !! Tinggal
            masuk linknya lagi atau klik tombol ini 💕
          </p>

          <Link href="/">
            <button className="rounded-full cursor-pointer bg-red-600 font-outfit px-5 py-2 text-sm font-medium text-white transition cursor-pointer hover:bg-red-800">
              ⬅️ Balik ke halaman pertama 💕
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-fuchsia-100 ">
      {modal && <StartModal />}
      {restart && <RestartModal />}
      <Hearts />
      <Header />
      <div className="flex flex-col items-center justify-center py-[70px] px-[30px]">
        <h1 className="font-barriecito text-[35px] mb-[20px] text-red-600">
          Closing (Sweet Ending) ❤️
        </h1>
        <h2 className="font-outfit text-[20px] text-center mb-[40px]">
          Once again, Happy Valentine my dear kiyowooo girlfriend, Cheiii !!!
          ❤️❤️❤️
        </h2>
        <div className="my-[10px] max-w-[1200px] flex justify-center">
          <Image src="/images/ending.webp" width={300} height={100} alt="" />
          <div className="mx-[20px]">
            <p className="font-outfit text-[18px] mx-[10px] mt-[10px] flex items-center">
              Sayangkuu, disini aku buatkan kotak yang besarrrr !!! Untuk kamu
              menaruh mungkin ada pesan dan kesan, ada yang ingin kamu
              sampaikan, yang banyakkkkk dan panjanggggg juga gapapa, kotak ini
              siap menampung kok, hehehe !! (bahkan kalau kotaknya ga cukup,
              kotak ini bisa di scroll WKWKWK)
            </p>
            <textarea
              value={answers.message}
              required
              onChange={(e) => updateAnswer("message", e.target.value)}
              placeholder="Tulis pesan, kesan, sesuatu yang ingin kamu sampaikan, semuanya, di sini 💌"
              className="w-[1000px] h-120 rounded-xl border border-pink-300 p-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        <h1 className="font-barriecito text-[35px] my-[20px] mx-[100px] text-red-600">
          Semua yang kamu sampaikan tadi, semuanya akan langsung kekirim, jadi
          tenang saja kalau kamu mungkin berpikir ini cuma gimmick, semuanya
          akan terkirim lewat email kita berdua ❤️
        </h1>

        <div className="mt-[20px] gap-10 flex">
          <Link href="/page9">
            <button className="rounded-full bg-red-600 px-5 font-outfit py-3 text-[20px] text-white text-2xl transition cursor-pointer hover:bg-red-800">
              ⬅️ Back 💕
            </button>
          </Link>
          <button
            className="rounded-full bg-pink-500 px-5 font-outfit py-3 text-[20px] text-white text-2xl cursor-pointer transition hover:bg-pink-600"
            onClick={() => setIsModal(true)}
          >
            💕 Selesai ? ✅
          </button>
        </div>
      </div>
    </div>
  );
}
