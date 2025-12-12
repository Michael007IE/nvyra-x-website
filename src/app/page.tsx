"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765566761862.png?width=8000&height=8000&resize=contain')`,
        }}
      />

      <nav className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765567223502.png"
            alt="Nvyra X Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-xl font-medium text-white tracking-[0.05em]">Nvyra X</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#" className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity">
            About us
          </Link>
          <Link href="#" className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity">
            Blackwell
          </Link>
          <Link href="#" className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity">
            Velora
          </Link>
          <Link href="#" className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity">
            Sustainability
          </Link>
          <Link href="#" className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity">
            Pricing
          </Link>
          <Link href="#" className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity">
            Sentinel
          </Link>
        </div>

        <div className="flex items-center">
          <button className="bg-black border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors tracking-[0.05em]">
            Contact us
          </button>
          <Link 
            href="/login"
            className="bg-black border-y border-r border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors tracking-[0.05em]"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="bg-[#002BFF] border border-[#002BFF] px-4 py-2 text-sm text-white hover:bg-[#0022cc] transition-colors tracking-[0.05em]"
          >
            Sign up
          </Link>
        </div>
      </nav>

      <main className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white md:text-5xl lg:text-6xl tracking-[0.05em]">
            The AI infastructure that brings
          </h1>
          <h1 className="mt-2 text-4xl font-light text-white md:text-5xl lg:text-6xl tracking-[0.05em]">
            <span className="italic">clarity</span>{" "}
            <span className="not-italic">to complexity.</span>
          </h1>
        </div>

        <div className="mt-12 flex items-center gap-3">
          <div className="group relative p-[2px] rounded-full bg-gradient-to-r from-[#FF00FF] via-[#8000FF] to-[#002BFF]">
            <button 
              className="relative flex items-center justify-center bg-black rounded-full text-white transition-all hover:bg-black/90 tracking-[0.05em]"
              style={{ 
                fontFamily: "var(--font-space-grotesk)", 
                fontWeight: 400,
                width: '156px',
                height: '64px',
                fontSize: '22px'
              }}
            >
              Get started
            </button>
          </div>

          <button 
            className="bg-black border-[2.2px] border-white rounded-full text-white transition-colors hover:bg-white/10 tracking-[0.05em] flex items-center justify-center"
            style={{ 
              fontFamily: "var(--font-space-grotesk)", 
              fontWeight: 400,
              width: '156px',
              height: '64px',
              fontSize: '22px'
            }}
          >
            Contact us
          </button>
        </div>
      </main>
    </div>
  );
}