"use client";

export default function Home() {
  return (
    <html>
      <body>
        <main className="pt-20 flex-1 relative flex flex-col items-center justify-center text-center px-4 pb-6">
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
        <div className="text-center pb-6 py-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance text-white">
            Key Benefits
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 py-5 pb-10 text-center">
            <div className="bg-blue-200 p-4 rounded-md text-gray-700">
              <h2 className="font-barlow font-semibold text-lg sm:text-xl lg:text-2xl pb-3">
                Optimized LinkedIn Profile
              </h2>
              <p>
                Ketahui beberapa cara praktis untuk membuat profil LinkedIn kamu
                lebih menarik di mata HRD!
              </p>
            </div>
            <div className="bg-indigo-200 p-4 rounded-md text-gray-700">
              <h2 className="font-barlow font-semibold text-lg sm:text-xl lg:text-2xl pb-3">
                Job Hunting Strategies
              </h2>
              <p>
                Pahami berbagai macam strategi yang paling ampuh dalam mencari
                pekerjaan!
              </p>
            </div>
            <div className="bg-sky-200 p-4 rounded-md text-gray-700">
              <h2 className="font-barlow font-semibold text-lg sm:text-xl lg:text-2xl pb-3">
                Networking Tips
              </h2>
              <p>
                Dapatkan wawasan terkait cara membangun relasi yang cepat dan
                bermutu!
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
