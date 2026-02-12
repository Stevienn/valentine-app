import Image from "next/image";
import Hearts from "./components/hearts";
import StartModal from "./components/StartModal";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-fuchsia-100 ">
      <StartModal />
      <Hearts />
      <Header />
      <div className="flex flex-col items-center justify-center py-[70px] px-[30px]">
        <h1 className="font-barriecito text-[35px] mb-[20px] text-red-600 fade-in-left">
          Happy Valentine Day my dear cutie Cheiiiyoooooo ❤️❤️❤️
        </h1>
        <Image
          src="/samoyed.png"
          width={300}
          height={100}
          alt="samoyed"
          className="fade-in-right delay-500"
        />
        <h1 className="font-outfit text-[20px] mt-[30px] fade-in-left delay-1000">
          Kalo di tahun lalu aku pas valentine kasih kamu bucket bunga dan
          cokelat, di tahun ini karena kita ldr, aku cuma bisa kasih ini, tapi
          ini aku kerjakan semaksimal dan sekiyowo mungkin hanya buat kamuu ❤️
        </h1>
        <h1 className="font-outfit text-[30px] mt-[30px] text-red-600 fade-in-right delay-1000">
          Will you still be my Valentine this year and next year and forever ???
        </h1>
        <div className="mt-[20px] gap-10 flex fade-in-right delay-1000">
          <Link href="/page2">
            <button className="rounded-full bg-red-600 px-5 py-3 text-[20px] text-white text-2xl transition hover:bg-red-800">
              Yess !!!
            </button>
          </Link>

          <Link href="/page2">
            <button className="rounded-full bg-pink-500 px-5 py-3 text-[20px] text-white text-2xl transition hover:bg-pink-600">
              Of course YESSS !!!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
