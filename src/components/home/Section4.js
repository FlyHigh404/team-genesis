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
      "Mekaniknya sangat profesional dan paham betul tentang motor listrik...",
    image: UserImage,
  },
  {
    id: 2,
    name: "Putu Anggi",
    time: "2 hari lalu",
    rating: 5,
    review: "Awalnya motor listrik saya sering mati sendiri saat digunakan...",
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
  {
    id: 4,
    name: "Rendi Panca",
    time: "1 minggu lalu",
    rating: 5,
    review:
      "Mekaniknya sangat profesional dan paham betul tentang motor listrik...",
    images: UserImage,
  },
];

export default function Section4() {
  const [startIndex, setStartIndex] = useState(0);

  const nextReview = () => {
    if (startIndex < reviews.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevReview = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 flex flex-col justify-center md:flex-row items-center gap-8">
      {/* Bagian Kiri - Judul dan Deskripsi */}
      <div className="max-w-lg mx-auto md:mx-0 flex flex-col items-center md:items-start gap-6">
        {/* Deskripsi dan Judul */}
        <div className="text-center md:text-left">
          {/* Garis dan teks gradient */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-[2px] bg-primary-n1"></div>
            <p className="text-lg font-semibold bg-gradient-to-r from-[#01c994] to-black bg-clip-text text-transparent">
              What do they think?
            </p>
          </div>

          {/* Judul dan Deskripsi */}
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            ULASAN DARI MEREKA YANG SUDAH PUAS LEBIH DULU KARENA{" "}
            <span className="text-primary-n1">PAKAI BETULIN</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Kami percaya bahwa kepuasan pengguna adalah ukuran keberhasilan
            kami. Betulin membantu pemilik kendaraan listrik dalam mengatasi
            tantangan sehari-hari.
          </p>
        </div>

        {/* Gambar tambahan */}
        <div>
          <Image
            src={Section4Asset}
            alt="What they think"
            width={300} // Sesuaikan ukuran gambar
            height={200} // Sesuaikan ukuran gambar
            className="mx-auto md:mx-0 rounded-lg"
          />
        </div>
      </div>

      {/* Bagian Kanan - Testimoni dengan Navigasi */}
      <div className="flex flex-col items-center">
        {/* Card Review */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative w-[380px]">
            {/* Card Container */}
            <div className="flex flex-col gap-3 transition-all duration-300">
              {reviews
                .slice(startIndex, startIndex + 3)
                .map((review, index) => (
                  <div
                    key={review.id}
                    className={`relative rounded-2xl p-4 shadow-md transition-all duration-300 ${
                      index === 1
                        ? "scale-105 shadow-lg bg-icon-service-1 "
                        : "bg-white scale-100"
                    }`}
                  >
                    {/* Foto di Pojok Kiri Atas */}
                    <Image
                      src={UserImage}
                      alt={review.name}
                      width={40}
                      height={40}
                      className="absolute top-2 left-2 w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-14">
                      <h4 className="font-semibold">{review.name}</h4>
                      <span className="text-xs text-gray-500">
                        {review.time}
                      </span>
                    </div>

                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{review.name}</h4>
                      <span className="text-xs text-gray-500">
                        {review.time}
                      </span>
                    </div>
                    {/* Rating */}
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">{review.review}</p>
                  </div>
                ))}
            </div>

            {/* Tombol Navigasi */}
            <div className="absolute top-1/2 right-[-40px] flex flex-col gap-2 -translate-y-1/2">
              <button
                className={`p-2 bg-white shadow-md rounded-full hover:bg-gray-200 transition ${
                  startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={prevReview}
                disabled={startIndex === 0}
              >
                <ChevronUp size={24} />
              </button>
              <button
                className={`p-2 bg-white shadow-md rounded-full hover:bg-gray-200 transition ${
                  startIndex >= reviews.length - 3
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={nextReview}
                disabled={startIndex >= reviews.length - 3}
              >
                <ChevronDown size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
