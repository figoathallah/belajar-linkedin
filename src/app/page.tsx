"use client";

export default function Home() {
  return (
    <html>
      <body>
        <main className="pt-20 flex-1 relative flex flex-col items-center justify-center text-center px-4">
          <img
            src="office-work-placeholder.jpg"
            alt="office illustration"
            className="absolute inset-0 w-full h-full opacity-20 object-cover object-[center_30%] pointer-events-none"
          />
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
              Belajar personal branding & networking agar lebih cepat dapat
              kerja.
            </h2>
          </div>
          <div className="mt-2 flex items-center justify-center pb-6">
            <a
              style={{
                opacity: 0,
                animation:
                  "fadeIn 2s ease-out 2s forwards, slideIn 1s ease-out 2s forwards",
              }}
              href="#"
              className="rounded-md bg-emerald-400/90 px-5 py-3 sm:text-xl text-lg font-semibold text-white shadow-xs hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Join the class
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
