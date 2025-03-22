import Image from "next/image";

import AboutUs from "@/assets/images/about-us.png";

export default function Section2() {
  return (
    <section
      className="bg-primary-l1/50 dark:bg-primary-d4/50 py-6 px-6 sm:mt-36 md:mt-12 md:px-16 lg: flex flex-col  md:flex-row items-center gap-8 justify-center mt-5"
      id="about"
    >
      <div className="max-w-lg text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="w-14 h-[2px] bg-primary-n1"></div>
          <p className="text-lg font-semibold bg-gradient-to-r from-[#01c994] to-foreground-1 bg-clip-text text-transparent">
            Get to Know Us
          </p>
        </div>
        <h2 className="text-3xl font-bold text-foreground-1 mt-2">
          TENTANG <span className="text-primary-n1">BETULIN</span> – SOLUSI
          CERDAS DAN TEPAT UNTUK KENDARAAN LISTRIK ANDA
        </h2>
        <p className="text-foreground-2 mt-4">
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
