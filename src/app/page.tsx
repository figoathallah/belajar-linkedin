"use client";

import Testimonials from "@/components/Testimonials";

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
        {/* FEATURES SECTION */}
        <div className="text-center pb-6 py-4">
          <h1 className="font-barlow text-3xl sm:text-4xl lg:text-5xl font-bold text-balance text-white pb-2">
            Key Benefits
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 py-5 pb-10 text-center">
            <div className="bg-blue-200 p-4 rounded-md text-gray-700">
              <div className="pb-4 flex justify-center">
                <svg
                  className="w-12 h-12 lg:w-20 lg:h-20 text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 22 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
                  />
                </svg>
              </div>
              <h2 className="font-barlow font-semibold text-lg sm:text-xl lg:text-2xl pb-3">
                Optimized LinkedIn Profile
              </h2>
              <p className="text-sm lg:text-lg">
                Ketahui beberapa cara praktis untuk membuat profil LinkedIn kamu
                lebih menarik di mata HRD!
              </p>
            </div>
            <div className="bg-indigo-200 p-4 rounded-md text-gray-700">
              <div className="pb-6 flex justify-center">
                <svg
                  className="w-12 h-12 lg:w-18 lg:h-18 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
                  <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
                </svg>
              </div>
              <h2 className="font-barlow font-semibold text-lg sm:text-xl lg:text-2xl pb-3">
                Job Hunting Strategies
              </h2>
              <p className="text-sm lg:text-lg">
                Pahami berbagai macam strategi yang paling ampuh dalam mencari
                pekerjaan impian kamu!
              </p>
            </div>
            <div className="bg-sky-200 p-4 rounded-md text-gray-700">
              <div className="pb-4.5 flex justify-center">
                <svg
                  className="w-12 h-12 lg:w-20 lg:h-20 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                  />
                </svg>
              </div>
              <h2 className="font-barlow font-semibold text-lg sm:text-xl lg:text-2xl pb-3">
                Networking Tips
              </h2>
              <p className="text-sm sm:text-base lg:text-lg">
                Dapatkan wawasan terkait cara membangun relasi yang cepat dan
                bermutu!
              </p>
            </div>
          </div>
        </div>
        {/* TESTIMONIALS SECTION */}
        <div className="text-center pb-5 py-4">
          <h1 className="font-barlow text-2xl sm:text-3xl lg:text-4xl font-bold text-balance text-white pb-6">
            What our users say
          </h1>
          <Testimonials />
        </div>
      </body>
    </html>
  );
}
