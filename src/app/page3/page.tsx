import Image from "next/image";
import Hearts from "../components/hearts";
import Header from "../components/Header";
import Link from "next/link";
import FadeInOnScroll from "../components/FadeInScroll";

export default function page3() {
  return (
    <div className="bg-fuchsia-100 ">
      <Hearts />
      <Header />
      <div className="flex flex-col items-center justify-center py-[70px] px-[30px]">
        <h1 className="font-barriecito text-[35px] mb-[20px] text-red-600 fade-in-left">
          Sekarang ngapain yaaa kira kiraaa??? ❤️❤️
        </h1>
        <h2 className="font-outfit text-[20px] text-center fade-in-left">
          Nahhh ini adalah section video video. Aku masukin video video lucu
          dann favorit jugaaa hehehe, kenangan manis kitaa, kenangan favorit
          akuu
        </h2>
        <h2 className="font-outfit text-[30px] mt-[10px] mb-[20px] text-red-700 fade-in-left">
          DISCLAIMER : WAJIB DITONTON SEMUA !!! (Pause dulu musik backgroundnya
          ya 😭)
        </h2>
        <div className="flex my-[10px] max-w-[1200px] fade-in-right delay-300">
          <video
            src="/videos/video1.mp4"
            controls
            className="w-[320px] max-w-sm rounded-xl"
          />
          <p className="font-outfit text-[17px] ml-[40px] flex items-center">
            Ini saat kita pertama kalii main billiardd hehehe (dan pertama kali
            kamu main ke apart pulangnya xixi) kamu udah jagoo bangettttt
            cayankkk ❤️❤️❤️❤️
          </p>
        </div>

        <div className="flex my-[10px] max-w-[1200px] fade-in-left delay-700">
          <p className="font-outfit text-[17px] mr-[40px] flex items-center">
            Ini saat kita karaokeee !! Pertama kali karaoke di booth game master
            di yogya 😭😭. Suara kamu tuhh bagusssssss banget tapi kamu kadang
            kurang pede ajaa. Suara kamu tuh lembut selembut ituu jadi kalau
            nyanyi tuh baguss, and I'm addicted to your voice ❤️❤️❤️❤️
          </p>
          <video
            src="/videos/video2.mp4"
            controls
            className="w-[320px] max-w-sm rounded-xl"
          />
        </div>

        <FadeInOnScroll direction="right">
          <div className="flex my-[10px] max-w-[1200px]">
            <video
              src="/videos/video3.mp4"
              controls
              className="w-[320px] max-w-sm rounded-xl"
            />
            <p className="font-outfit text-[17px] ml-[40px] flex items-center">
              Ini kita pas ke lembang and zoo dan melihat harimau !!! Kamu bener
              bener lucu banget disiniii, keliatan sekali excitednya dari awal
              sampe akhirr !! Salah satu kenangan dan date favorite aku juga
              huhuhu, nanti kita ke zoo mana lagi yaaaa ❤️❤️❤️❤️
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="left">
          <div className="flex my-[10px] max-w-[1200px]">
            <p className="font-outfit text-[17px] mr-[40px] flex items-center">
              Waduhh, yang ini jangan sampe ketauan kalo kita nginep 😭😭. Tapi
              ini juga lucuu bangettt, aku ajak kamu duet karaoke dan kamu mauu
              asal disney 😭😭. Dan akhirnya kita nemu lagu bagus untuk
              diduetkan dan rekam dehhh (gatau berapa lama kita ulang ulang
              terus yaa 😭😭😭😭) Suara ketawa aku kaya ayam berkokok ya
              ❤️❤️❤️❤️
            </p>
            <video
              src="/videos/video4.mp4"
              controls
              className="w-[320px] max-w-sm rounded-xl"
            />
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="right">
          <div className="flex my-[10px] max-w-[1200px]">
            <video
              src="/videos/video5.mp4"
              controls
              className="w-[320px] max-w-sm rounded-xl"
            />
            <p className="font-outfit text-[17px] ml-[40px] flex items-center">
              Wahh ini kita pas double date kedua bersama putri dan kevin !!
              Kita bermain ice skatinggg dan kita juga pertama kali bermain ini
              kan 😭. Tapi kamu NATURAL GITU JAGONYA, dan kebalik kamu yang
              megangin aku 😭😭. Tapi aku paling ingat ada satu momen kamu yang
              salting pas kamu jatuh aku ikutan jatuh hehehehehe ❤️❤️❤️❤️
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="left">
          <div className="flex my-[10px] max-w-[1200px]">
            <p className="font-outfit text-[17px] mr-[40px] flex items-center">
              Nahhh yang ini, rekuesan kamu nii, mau ke taman bunga di lembangg.
              Sayangnya didalem gabisa foto foto pake kamera DSLR aku ya ! Parah
              bangettt !! Tapi gapapa, kamu tetap menikmatinya dan aku sangatlah
              senang hehehe (Ini juga pertama kali chei ke lembang pake motor
              dan sangat excited hehehe) ❤️❤️❤️❤️ LIAT LUCU BANGET DIAAAA HIKSSS
              MY PACARRR
            </p>
            <video
              src="/videos/video6.mp4"
              controls
              className="w-[320px] max-w-sm rounded-xl"
            />
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="right">
          <div className="flex my-[10px] max-w-[1200px]">
            <video
              src="/videos/video7.mp4"
              controls
              className="w-[320px] max-w-sm rounded-xl"
            />
            <p className="font-outfit text-[17px] ml-[40px] flex items-center">
              Kalo yang ini, disaat kita lagi main ke paskal, ehh ada wahana
              baruu gituu, bukan wahana sih tapi tempat rekreasi gituu, meski
              tempatnya kecil tapi kami sangatlah senang berfoto foto disana,
              dan juga ada wahana slide ituu yang seruu !! ❤️❤️❤️❤️
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="left">
          <div className="flex my-[10px] max-w-[1200px]">
            <p className="font-outfit text-[17px] mr-[40px] flex items-center">
              WKWKWKWK, ini pas kita lagi ke summarecon juga dan aku iseng rekam
              disaat kamu minta foto 😭😭. LUCU BANGET PACARKU DISINI SUMPAHHHH
              😭😭😭😭. Untung aku rekam bisa mengabadikan momen kiyowo chei
              iniiiii 😭😭😭😭😭😭
            </p>
            <video
              src="/videos/video8.mp4"
              controls
              className="w-[320px] max-w-sm rounded-xl"
            />
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="right">
          <div className="flex my-[10px] max-w-[1200px]">
            <video
              src="/videos/video9.mp4"
              controls
              className="w-[320px] max-w-sm rounded-xl"
            />
            <p className="font-outfit text-[17px] ml-[40px] flex items-center">
              This super kiyowoo dogg meet the super kiyowo girlllll xixixi !!
              Liat ekspresi cheii saat ngelus ngelus anjingnya, lucu bangettt
              😭😭. Ini adalah edisi membeli ikan tapi ingin bertemu dengan si
              samoyed ❤️❤️❤️❤️
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="left">
          <div className="flex my-[10px] max-w-[1200px]">
            <p className="font-outfit text-[17px] mr-[40px] flex items-center">
              OKE YANG INI BIKIN CAPTION SENDIRI YA 😭😭😭😭😭😭 LUCU BANGET
              KIKKKKKKK 😭😭😭😭😭😭. Ini dimana kita habis christmas date dan
              ceritanya mau ke mobil bikin konten tapi kaki dia sakit karena
              sepatunya huhuhu (aku sempet gendong dia lohhh xixixi)
            </p>
            <video
              src="/videos/video10.mp4"
              controls
              className="w-[320px] max-w-sm rounded-xl"
            />
          </div>
        </FadeInOnScroll>

        <h1 className="font-barriecito text-[35px] my-[20px] mx-[100px] text-red-600">
          Videonya juga 10 ajaa yaaa 😭😭 Meski video lebih sedikit dibanding
          foto foto jumlah totalnya, tapi sebenernya masih ada video video lucu
          yang ingin dimasukkan, tapi aku masukkan yang paling favorit ajaaa
          (JANGAN LUPA DI PLAY LAGI YA LAGUNYA WKWKWK)
        </h1>

        <div className="mt-[20px] gap-10 flex">
          <Link href="/page2">
            <button className="rounded-full bg-red-600 px-5 font-outfit py-3 text-[20px] text-white text-2xl transition cursor-pointer hover:bg-red-800">
              ⬅️ Back 💕
            </button>
          </Link>
          <Link href="/page4">
            <button className="rounded-full bg-pink-500 px-5 font-outfit py-3 text-[20px] text-white text-2xl transition cursor-pointer hover:bg-pink-600">
              💕 Next ➡️
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
