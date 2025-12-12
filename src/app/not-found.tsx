"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765566761862.png?width=8000&height=8000&resize=contain')`,
          opacity: 0.8, // Slightly darker to make text pop if needed
        }}
      />

      {/* Navbar (Same as Home) */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/nvyra-logo.png"
            alt="Nvyra X Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-xl font-medium text-white tracking-[0.05em]">
            Nvyra X
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#"
            className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity"
          >
            About us
          </Link>
          <Link
            href="#"
            className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity"
          >
            Blackwell
          </Link>
          <Link
            href="#"
            className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity"
          >
            Velora
          </Link>
          <Link
            href="#"
            className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity"
          >
            Sustainability
          </Link>
          <Link
            href="#"
            className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity"
          >
            Sentinel
          </Link>
        </div>

        <div className="flex items-center">
          <button className="bg-black px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors tracking-[0.05em]">
            Contact us
          </button>
          <button className="bg-[#002BFF] px-4 py-2 text-sm text-white hover:bg-[#0022cc] transition-colors tracking-[0.05em]">
            Login
          </button>
          <button className="bg-[#002BFF] px-4 py-2 text-sm text-white hover:bg-[#0022cc] transition-colors tracking-[0.05em]">
            Sign up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center px-6">
        
        <div className="relative flex w-full max-w-5xl flex-col items-center justify-center md:items-start">
            
          {/* 404 & Hexagon Row */}
          <div className="relative flex w-full items-center justify-center md:justify-start">
            {/* 404 Text */}
            <h1 
                className="text-[180px] leading-none text-[#6e6e6e] opacity-80 md:text-[250px] lg:text-[350px]"
                style={{ 
                    fontFamily: "var(--font-nothing-you-could-do), cursive",
                    fontWeight: 400 
                }}
            >
              404
            </h1>

            {/* Hexagon (Positioned relative to 404 or absolutely) */}
            <div className="absolute right-[10%] top-1/2 hidden -translate-y-1/2 md:block lg:right-[20%]">
               <svg width="200" height="230" viewBox="0 0 200 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M100 0L186.603 50V150L100 200L13.3975 150V50L100 0Z" 
                    fill="black" 
                    fillOpacity="0.5"
                    stroke="#002BFF" 
                    strokeWidth="2"
                  />
                  <path 
                    d="M100 10L176.603 55V145L100 190L23.3975 145V55L100 10Z" 
                    stroke="#002BFF" 
                    strokeWidth="1"
                    className="opacity-50"
                  />
               </svg>
            </div>
          </div>

          {/* Message */}
          <div className="mt-4 md:-mt-10 md:pl-10">
            <h2 className="text-3xl font-light text-white md:text-5xl tracking-[0.02em]">
              Hmm, looks like this page is <br className="hidden md:block"/>
              missing
            </h2>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex items-center gap-6 md:pl-10">
            <Link href="/">
                <button 
                className="flex items-center justify-center rounded-full bg-white/5 border border-white/10 px-8 py-3 text-lg text-white backdrop-blur-sm transition-all hover:bg-white/10"
                style={{ 
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 400
                }}
                >
                Go Home
                </button>
            </Link>
            
            <button 
              className="flex items-center justify-center rounded-full border border-white px-8 py-3 text-lg text-white transition-all hover:bg-white/10"
              style={{ 
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 400
              }}
            >
              Contact us
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
