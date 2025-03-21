import Image from "next/image";

import AboutUs from "@/assets/images/about-us.png";

export default function Section2() {
  return (
    <section className="bg-primary-l1/50 py-0 px-6 md:px-16 flex flex-col  md:flex-row items-center gap-8 justify-center h-screen" id="about">
      <div className="max-w-lg text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="w-14 h-[2px] bg-primary-n1"></div>
          <p className="text-lg font-semibold bg-gradient-to-r from-[#01c994] to-black bg-clip-text text-transparent">
            Get to Know Us
          </p>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          TENTANG <span className="text-primary-n1">BETULIN</span> – SOLUSI
          CERDAS DAN TEPAT UNTUK KENDARAAN LISTRIK ANDA
        </h2>
        <p className="text-gray-600 mt-4">
          BETULIN hadir sebagai bagian dari ekosistem kendaraan listrik di
          Indonesia dengan komitmen untuk mendukung keberlanjutan, efisiensi,
          dan kemudahan bagi pengguna kendaraan listrik.
        </p>
      </div>
      <div className="flex justify-center">
        <Image src={AboutUs} alt="" width={350} height={350} />
      </div>
    </section>
  );
}
