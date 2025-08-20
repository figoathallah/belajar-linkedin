"use client";

import { useState } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Mirza S.",
      role: "Data Analyst",
      quote: `Berasa banget manfaatnya ikut kelas ini. Gak hanya bikin
        profil LinkedIn saya lebih profesional, tapi juga menambah
        banyak ilmu baru terkait jurusan yang saya minat.`,
      img: "globe.svg",
    },
    {
      name: "Sara K.",
      role: "Financial Analyst",
      quote: `Seru ikut kelas di Belajar LinkedIn, bisa bonding sama temen baru 
      sekalian bangun relasi buat masuk dunia kerja. Mentor-mentornya juga mantep, pokoknya the best!`,
      img: "vercel.svg",
    },
    {
      name: "Satono Diamond",
      role: "Triple Crown Champion",
      quote: `Umazing!`,
      img: "vercel.svg",
    },
  ];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative w-11/12 sm:w-full max-w-sm mx-auto overflow-hidden bg-blue-200 border border-gray-200 rounded-lg shadow-sm">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="w-full flex-shrink-0 p-4">
            <div className="flex flex-col items-center pb-6">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={t.img}
                alt={t.name}
              />

              <blockquote className="text-sm lg:text-base italic font-semibold text-gray-900 pb-6 text-center">
                <svg
                  className="w-6 h-6 lg:w-8 lg:h-8 text-gray-700 mb-4 mx-auto"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <p>{t.quote}</p>
              </blockquote>

              <h5 className="mb-1 text-xl font-semibold text-gray-900">
                {t.name}
              </h5>
              <span className="text-sm text-gray-700">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute bottom-0 left-3 -translate-y-1/2 bg-white/70 text-gray-900 rounded-full px-2 p-2 shadow-md"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute bottom-0 right-3 -translate-y-1/2 bg-white/70 text-gray-900 rounded-full px-2 p-2 shadow-md"
      >
        ▶
      </button>
    </div>
  );
}
