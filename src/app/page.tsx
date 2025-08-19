"use client";

export default function Home() {
  return (
    <html>
      <body>
        <div className="text-center pb-6 py-4">
          <h1
            style={{ animation: "fadeIn 2s ease-out forwards" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance text-white pb-3"
          >
            Unlock your career potential with LinkedIn.
          </h1>
          <h2
            style={{
              opacity: 0,
              animation: "fadeIn 2s ease-out 1s forwards",
            }}
            className="text-base text-balance text-white italic"
          >
            Belajar personal branding & networking agar lebih cepat dapat kerja.
          </h2>
        </div>
        <div className="mt-2 flex items-center justify-center pb-6">
          <a
            href="#"
            className="rounded-md bg-emerald-400/90 px-5 py-3 text-xl font-semibold text-white shadow-xs hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Join the class
          </a>
        </div>
      </body>
    </html>
  );
}
