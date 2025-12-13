"use client";

import Link from "next/link";
import Image from "next/image";
import { LogoCarousel } from "@/components/LogoCarousel";
import { IndustryCarousel } from "@/components/IndustryCarousel";
import { LeaderboardSection } from "@/components/LeaderboardSection";
import { FeatureGrid } from "@/components/FeatureGrid";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section - Full Screen */}
      <div className="relative h-screen w-full flex flex-col overflow-hidden">
        {/* Purple/Blue glowing rays background */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 blur-[150px] rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-purple-600/15 blur-[140px] rounded-full"></div>
          
          {/* Geometric rays/lines */}
          <svg className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="ray1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 0.4}} />
                <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 0}} />
              </linearGradient>
              <linearGradient id="ray2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 0}} />
              </linearGradient>
            </defs>
            <path d="M 0,200 Q 400,400 800,100 L 800,0 L 0,0 Z" fill="url(#ray1)" />
            <path d="M 1920,300 Q 1400,500 1000,200 L 1920,0 Z" fill="url(#ray2)" />
            <ellipse cx="50%" cy="40%" rx="35%" ry="45%" fill="none" stroke="url(#ray1)" strokeWidth="2" opacity="0.3" />
            <ellipse cx="50%" cy="40%" rx="42%" ry="52%" fill="none" stroke="url(#ray2)" strokeWidth="1.5" opacity="0.2" />
          </svg>
        </div>

        <nav className="relative z-10 flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765567223502.png"
                alt="Nvyra X Logo Icon"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-medium text-white tracking-wide">Nvyra X</span>
          </div>

          <div className="hidden items-center gap-10 md:flex">
            <Link href="#" className="text-white/80 text-base hover:text-white transition-colors">
              About us
            </Link>
            <Link href="#" className="text-white/80 text-base hover:text-white transition-colors">
              Blackwell
            </Link>
            <Link href="#" className="text-white/80 text-base hover:text-white transition-colors">
              Velora
            </Link>
            <Link href="#" className="text-white/80 text-base hover:text-white transition-colors">
              Sustainability
            </Link>
            <Link href="/pricing" className="text-white/80 text-base hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-white/80 text-base hover:text-white transition-colors">
              Sentinel
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/contact"
              className="px-6 py-2 text-sm font-normal text-white border border-white/40 rounded-md hover:bg-white/5 transition-colors"
            >
              Contact us
            </Link>
            <Link 
              href="/login"
              className="px-6 py-2 text-sm font-normal text-white border border-white/40 rounded-md hover:bg-white/5 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="px-6 py-2 text-sm font-normal text-white bg-[#3b82f6] hover:bg-[#2563eb] rounded-md transition-colors"
            >
              Sign up
            </Link>
          </div>
        </nav>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center -mt-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem] font-light text-white tracking-tight leading-[1.1] mb-6">
              The AI infrastructure that brings<br />
              <span className="italic font-light">clarity</span> to complexity.
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 mt-12">
            <button className="relative px-10 py-3.5 rounded-full bg-transparent text-white text-base font-normal border-2 border-purple-500 hover:bg-purple-500/10 transition-all overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10">Get started</span>
            </button>
            <button className="px-10 py-3.5 rounded-full bg-transparent border-2 border-white text-white text-base font-normal hover:bg-white/10 transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </div>
      
      {/* Rest of the content below the fold */}
      <main className="relative z-10 bg-black">
        {/* Industry Risk Section */}
        <section className="py-32 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Synthetic media is the <span className="text-red-500">single greatest risk</span> to digital trust.
            </h2>
            <p className="text-xl text-gray-400">
              As generative AI scales, so does the sophistication of disinformation. 
              Nvyra X provides the immune system for the internet.
            </p>
          </div>
        </section>

        <LogoCarousel />
        <IndustryCarousel />
        <LeaderboardSection />
        <FeatureGrid />
      </main>
    </div>
  );
}