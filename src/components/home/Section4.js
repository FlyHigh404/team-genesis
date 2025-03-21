"use-client";

import { ChevronUp, ChevronDown, Star } from "lucide-react";
import { useState } from "react";
import UserImage from "@/assets/images/user1.png";
import Section4Asset from "@/assets/images/peoplewhy.png";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Sadrah Zefanya",
    time: "1 minggu lalu",
    rating: 5,
    review:
      "Keluhan dari pelanggan direspon dengan cepat dan ramah walaupun pelanggan tidak mengerti banyak hal tentang kendaraan listrik, terima kasih BETULIN.",
    image: UserImage,
  },
  {
    id: 2,
    name: "Putu Anggi",
    time: "2 hari lalu",
    rating: 5,
    review:
      "Awalnya motor listrik saya sering mati sendiri saat digunakan. Mekanik di sini langsung menemukan masalahnya, ada kabel yang kurang putus di dalam.",
    image: UserImage,
  },
  {
    id: 3,
    name: "Rendi Panca",
    time: "1 minggu lalu",
    rating: 5,
    review:
      "Mekaniknya sangat profesional dan paham betul tentang motor listrik...",
    image: UserImage,
  },
];

export default function Section4() {
  const [startIndex, setStartIndex] = useState(0);

  const nextReview = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section
      className="bg-primary-l1/50 dark:bg-primary-d4/50 py-8 px-6 md:px-16 flex flex-col justify-center md:flex-row items-center gap-8"
      id="testimonials"
    >
      {/* Bagian Kiri - Judul dan Deskripsi */}
      <div className="max-w-lg mx-auto md:mx-0 flex flex-col items-center md:items-start gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-16 h-[2px] bg-primary-n1"></div>
            <p className="text-lg font-semibold bg-gradient-to-r from-[#01c994] to-foreground-1 bg-clip-text text-transparent">
              What do they think?
            </p>
          </div>
          <h2 className="text-3xl font-bold text-foreground-1 mt-2">
            ULASAN DARI MEREKA YANG SUDAH PUAS LEBIH DULU KARENA
            <span className="text-primary-n1"> PAKAI BETULIN</span>
          </h2>
          <p className="text-foreground-2 mt-4">
            Kami percaya bahwa kepuasan pengguna adalah ukuran keberhasilan
            kami. Betulin membantu pemilik kendaraan listrik dalam mengatasi
            tantangan sehari-hari.
          </p>
        </div>
        <div>
          <Image
            src={Section4Asset}
            alt="What they think"
            width={300}
            height={200}
            className="mx-auto md:mx-0 rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative w-[380px]">
            <div className="flex flex-col gap-3 transition-all duration-300">
              {reviews
                .map((_, i) => reviews[(startIndex + i) % reviews.length]) // Loop secara infinite
                .slice(0, 3)
                .map((review, index) => (
                  <div
                    key={review.id}
                    className={`relative rounded-2xl p-4 shadow-md transition-all duration-300 ${
                      index === 1
                        ? "scale-105 shadow-lg bg-icon-service-1 text-white"
                        : "bg-white scale-100 text-gray-900"
                    }`}
                  >
                    <Image
                      src={UserImage}
                      alt={review.name}
                      width={40}
                      height={40}
                      className="absolute top-2 left-2 w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-11 ">
                      <h4 className="font-semibold">{review.name}</h4>
                      <span
                        className={`text-xs ${
                          index === 1 ? "text-gray-200" : "text-gray-500"
                        }`}
                      ></span>
                      <span
                        className={`text-xs ${
                          index === 1 ? "text-gray-200" : "text-gray-500"
                        }`}
                      >
                        {review.time}
                      </span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            index === 1
                              ? "text-yellow-300 fill-yellow-300"
                              : "text-yellow-500 fill-yellow-500"
                          }`}
                        />
                      ))}
                    </div>
                    <p
                      className={`${
                        index === 1 ? "text-white" : "text-gray-600"
                      } text-sm`}
                    >
                      {review.review}
                    </p>
                  </div>
                ))}
            </div>
            {/* Tombol Navigasi */}
            <div className="absolute top-1/2 right-[-40px] flex flex-col gap-2 -translate-y-1/2">
              <button
                className="p-2 bg-white shadow-md rounded-full transition 
                hover:bg-primary-n1  active:bg-primary-n2"
                onClick={prevReview}
              >
                <ChevronUp
                  size={24}
                  className="transition-all text-black group-hover:text-white"
                />
              </button>
              <button
                className="p-2 bg-white shadow-md rounded-full transition 
               hover:bg-primary-n1  active:bg-primary-n2"
                onClick={nextReview}
              >
                <ChevronDown
                  size={24}
                  className="transition-all text-black group-hover:text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
