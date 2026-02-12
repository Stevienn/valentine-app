import Image from "next/image";
import Hearts from "../components/hearts";

import Header from "../components/Header";
import Link from "next/link";
import FadeInOnScroll from "../components/FadeInScroll";

export default function page2() {
  return (
    <div className="bg-fuchsia-100 ">
      <Hearts />
      <Header />
      <div className="flex flex-col items-center justify-center py-[70px] px-[30px]">
        <h1 className="font-barriecito text-[35px] mb-[20px] text-red-600 fade-in-right">
          Yayyy !! Always be my valentine forever yaaa ! ❤️❤️
        </h1>
        <h2 className="font-outfit text-[20px] text-center fade-in-right">
          Terimakasih banyakk cheii udah selalu baikk sama akuu, meski akhir
          akhir ini.... ada.... Okay lanjuttt !! Meski begitu cinta aku padamu
          gapernah kurangg kokk sayangg !! Aku bersyukur masih punya kamu dalam
          hidupku, dan juga bersyukur sudah punya banyakkkkk kenangan manis
          bersama kamu !!
        </h2>
        <h2 className="font-outfit text-[30px] mt-[10px] mb-[20px] text-red-700 fade-in-right">
          Nahhh ini ada beberapa foto favorit akuu dari kenangan yang pernah
          kita laluiii xixixi
        </h2>
        <div className="flex my-[10px] max-w-[1200px] fade-in-left delay-300">
          <Image src="/images/favone.jpg" width={300} height={100} alt="fav1" />
          <p className="font-outfit text-[17px] mx-[10px] flex items-center">
            Ini disaat kita pergi ke IKEA, dan ini salah satu favorit akuu !!
            Just look at youu !! Very cute, and so innocent 🥺❤️
          </p>
        </div>

        <div className="flex my-[10px] max-w-[1200px] fade-in-right delay-500">
          <p className="font-outfit text-[17px] mx-[10px] flex items-center">
            Ini disaat valentine tahun laluuu, xixixi ga kerasa yahh udah
            setahun ! Ini dimana aku kasih kamu bunga dan cokelat bucket ituu
            dan kamu pertama kali dapet ini dan sangat senang hingga di post
            hehe ❤️
          </p>
          <Image src="/images/fav2.png" width={300} height={100} alt="fav2" />
        </div>

        <FadeInOnScroll direction="left">
          <div className="flex my-[10px] max-w-[1200px]">
            <Image src="/images/fav3.jpg" width={300} height={100} alt="fav1" />
            <p className="font-outfit text-[17px] mx-[10px] flex items-center">
              Ini disaat kita pergi ke lembang park and zoo !! Murahh dan sangat
              worth itt xixixi. Kamu disini kaya bocil lucu ngeliatin harimau
              dan lion hehe, salah satu moment favorite aku jugakk ❤️
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="right">
          <div className="flex my-[10px] max-w-[1200px] fade-in-right delay-500">
            <p className="font-outfit text-[17px] mx-[10px] flex items-center">
              Ini disaat kamu ultahhh dan aku tembakk kamuuu xixixi (sehari
              sebelum sih tapi yaudah lah ya). Reaksi kamuu itu lohhh, membuat
              usaha aku bisa terbayarr dengan melihat kamuu menerima hadiah dari
              akuu. Dan aku bersyukur kamu terima aku, hehe ❤️
            </p>
            <Image
              src="/images/fav4-1.jpg"
              width={300}
              height={100}
              alt="fav4"
            />
            <Image
              src="/images/fav4-2.jpg"
              width={300}
              height={100}
              alt="fav4"
            />
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="left">
          <div className="flex my-[10px] max-w-[1200px]">
            <Image src="/images/fav5.jpg" width={300} height={100} alt="fav1" />
            <p className="font-outfit text-[17px] mx-[10px] flex items-center">
              CANTIK BANGET INI SIH FIXXXX !!!!!! Disaat kita jalan jalan ke
              braga terus sesi fotosut INI FOTO PAVORIT AKU !!!!! ❤️
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="right">
          <div className="flex my-[10px] max-w-[1200px] ">
            <p className="font-outfit text-[17px] mx-[10px] flex items-center">
              Ini juga lucu bangett dan seruu bangettt !!! Disini kamu lagi
              cantik cantik cantik cantikkknyaaaaaa, di hari hari biasa imut
              cantik menggemaskan dan cantik tapi di hari yang ini cantiknya
              kebangetan KYAAAAA ! Apalagi pas pasang helmet itu lucu bangettt
              kiyowoo xixixi ❤️
            </p>
            <Image
              src="/images/fav6.jpeg"
              width={300}
              height={100}
              alt="fav6"
            />
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="left">
          <div className="flex my-[10px] max-w-[1200px]">
            <Image
              src="/images/fav7.jpeg"
              width={300}
              height={100}
              alt="fav1"
            />
            <p className="font-outfit text-[17px] mx-[10px] flex items-center">
              Ini AKHIRNYA KITA UDAH BISA PUBLISH DI GMS !! Terimakasih Cheii,
              makasih bangett udah seaktif itu biar kita di publish, dan maafin
              aku kalau aku emang kurang reachout reachout di gms (tapi waktu
              itu aku langsung mau ood kan sama ester hehehe) Makasii banyakk
              sayanggg pliss jangan tinggalin aku :( ❤️
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="right">
          <div className="flex my-[10px] max-w-[1200px] ">
            <p className="font-outfit text-[17px] mx-[10px] flex items-center">
              Ini dimana hari yang akhirnya ditunggu tunggu datang juga ! Dimana
              kita mau christmas barenggg !! Kita ke kathedral dan ke
              summarecon, yang paling seru di summarecon !! ❤️
            </p>
            <Image
              src="/images/fav8-1.jpeg"
              width={300}
              height={100}
              alt="fav6"
            />
            <Image
              src="/images/fav8-2.jpeg"
              width={300}
              height={100}
              alt="fav6"
            />
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="left">
          <div className="flex my-[10px] max-w-[1200px]">
            <Image
              src="/images/fav9.jpeg"
              width={300}
              height={100}
              alt="fav1"
            />
            <p className="font-outfit text-[17px] mx-[10px] flex items-center">
              DAN INIII FOTO PAVORIT AKU SELAMA LAMA LAMANYA KARENA DISINI KAMU
              CHEIYOOO CANTIK BANGETTT UDAH KAYA ARTIS KOREAAA GO YON JONGGG
              LEWATTTTTTTTTTTTTTTTT!!!! MUWAH ❤️
            </p>
          </div>
        </FadeInOnScroll>

        <h1 className="font-barriecito text-[35px] my-[20px] mx-[100px] text-red-600">
          Sebenernyaa masih banyak lagi foto foto favorit aku, tapi ga mungkin
          bisa aku masukin semua karena banyak banget yahh 😭😭
        </h1>

        <div className="mt-[20px] gap-10 flex">
          <Link href="/">
            <button className="rounded-full bg-red-600 px-5 font-outfit py-3 text-[20px] text-white text-2xl transition cursor-pointer hover:bg-red-800">
              ⬅️ Back 💕
            </button>
          </Link>
          <Link href="/page3">
            <button className="rounded-full bg-pink-500 px-5 font-outfit py-3 text-[20px] text-white text-2xl cursor-pointer transition hover:bg-pink-600">
              💕 Next ➡️
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
