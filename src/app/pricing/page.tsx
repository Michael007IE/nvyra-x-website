"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, Zap, Diamond, CircleDashed, Sparkles } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-[family-name:var(--font-jost)] overflow-x-hidden selection:bg-blue-500/30">
      {/* Background Effect - Blue Nebula */}
      <div className="absolute top-0 left-0 right-0 h-[800px] z-0 pointer-events-none">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765571908582.png?width=8000&height=8000&resize=contain"
          alt="Pricing Background"
          fill
          className="object-cover object-top opacity-100"
          priority
        />
      </div>
      
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 max-w-[1440px] mx-auto w-full">
        <div className="flex items-center gap-3">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765567223502.png"
            alt="Nvyra X Logo"
            width={42}
            height={42}
            className="object-contain"
          />
          <Link href="/" className="text-xl font-normal text-white tracking-[0.05em] font-[family-name:var(--font-jost)]">Nvyra X</Link>
        </div>

        <div className="hidden items-center gap-10 md:flex">
          <Link href="#" className="text-white text-[15px] font-light hover:text-white/80 transition-colors border-b border-transparent hover:border-white/20 pb-0.5">
            About us
          </Link>
          <Link href="#" className="text-white text-[15px] font-light hover:text-white/80 transition-colors border-b border-transparent hover:border-white/20 pb-0.5">
            Blackwell
          </Link>
          <Link href="#" className="text-white text-[15px] font-light hover:text-white/80 transition-colors border-b border-transparent hover:border-white/20 pb-0.5">
            Velora
          </Link>
          <Link href="#" className="text-white text-[15px] font-light hover:text-white/80 transition-colors border-b border-transparent hover:border-white/20 pb-0.5">
            Sustainability
          </Link>
          <Link href="/pricing" className="text-white text-[15px] font-normal border-b border-white pb-0.5">
            Pricing
          </Link>
          <Link href="#" className="text-white text-[15px] font-light hover:text-white/80 transition-colors border-b border-transparent hover:border-white/20 pb-0.5">
            Sentinel
          </Link>
        </div>

        <div className="flex items-center">
          <button className="bg-black border border-white/15 px-5 py-2 text-[13px] text-white hover:bg-white/5 transition-colors tracking-wide font-light">
            Contact us
          </button>
          <Link 
            href="/login"
            className="bg-black border-y border-r border-white/15 px-5 py-2 text-[13px] text-white hover:bg-white/5 transition-colors tracking-wide font-light"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="bg-[#002BFF] border border-[#002BFF] px-5 py-2 text-[13px] text-white hover:bg-[#0022cc] transition-colors tracking-wide font-medium"
          >
            Sign up
          </Link>
        </div>
      </nav>

      <main className="relative z-10 px-6 pt-16 pb-20 max-w-[1200px] mx-auto">
        {/* Header Content */}
        <div className="mb-28 mt-8">
          <h1 className="text-[56px] leading-tight font-light mb-8 tracking-wide font-[family-name:var(--font-jost)]">Pricing</h1>
          <p className="text-[22px] text-white/90 max-w-2xl leading-relaxed font-light font-[family-name:var(--font-jost)]">
            With Nvyra, you always pay for what you use and<br />
            nothing more. You never pay for idle resources —<br />
            just actual compute time, by the second.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          
          {/* Standard Card */}
          <div className="flex flex-col h-full group">
            <div className="mb-8">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-8 bg-black">
                <CircleDashed className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl font-normal mb-6 font-[family-name:var(--font-jost)]">Standard</h2>
              <p className="text-white/70 text-[18.2px] font-[family-name:var(--font-geist)] leading-relaxed h-20 font-normal">
                Best for small, fast-moving teams, essential<br />tools to unlock growth.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-baseline gap-1">
                <span className="text-[27.17px] font-semibold font-[family-name:var(--font-geist)]">€0</span>
                <span className="text-white/80 text-[18.12px] font-semibold font-[family-name:var(--font-geist)] ml-1">/month</span>
              </div>
            </div>

            <div className="flex-grow space-y-5 mb-14">
              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-white mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white/90">Access to Basic Models</span>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-white mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white/90">No credit card required</span>
              </div>
            </div>

            <button className="w-[204px] h-[48px] rounded-full bg-white/10 shadow-[inset_4.5px_5.7px_6.8px_rgba(255,255,255,0.4)] flex items-center justify-center transition-all text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white mx-auto md:mx-0 mt-auto hover:bg-white/20">
              Get started
            </button>
          </div>

          {/* Pro Card */}
          <div className="flex flex-col h-full relative group">
            <div className="absolute top-[-10px] right-0">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-[#1A1A1A] backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 fill-white text-white" />
                <span className="text-xs font-medium uppercase tracking-wide">Popular</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-8 bg-black">
                <Zap className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl font-normal mb-6 font-[family-name:var(--font-jost)]">Pro</h2>
              <p className="text-white/70 text-[18.2px] font-[family-name:var(--font-geist)] leading-relaxed h-20 font-normal">
                Ideal for growing businesses, access advanced<br />AI models, API integrations, and priority<br />support.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-baseline gap-1">
                <span className="text-[27.17px] font-semibold font-[family-name:var(--font-geist)]">€9</span>
                <span className="text-white/80 text-[18.12px] font-semibold font-[family-name:var(--font-geist)] ml-1">/month</span>
              </div>
            </div>

            <div className="flex-grow space-y-5 mb-14">
              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-white mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white/90">3x Usage of Free Tier</span>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-white mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white/90">Acess to our most advanced models</span>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-white mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white/90">Limited <span className="opacity-50 italic">beta</span> access to Velora</span>
              </div>
            </div>

            <button className="w-[204px] h-[48px] rounded-full bg-white/10 shadow-[inset_4.5px_5.7px_6.8px_rgba(255,255,255,0.4)] flex items-center justify-center transition-all text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white mx-auto md:mx-0 mt-auto hover:bg-white/20">
              Get started
            </button>
          </div>

          {/* Ultra Card */}
          <div className="flex flex-col h-full group">
            <div className="mb-8">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-8 bg-black">
                <Diamond className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl font-normal mb-6 font-[family-name:var(--font-jost)]">Ultra</h2>
              <p className="text-white/70 text-[18.2px] font-[family-name:var(--font-geist)] leading-relaxed h-20 font-normal">
                Built for scale, custom solutions, dedicated<br />infrastructure, and strategic AI guidance.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-baseline gap-1">
                <span className="text-[27.17px] font-semibold font-[family-name:var(--font-geist)]">€21</span>
                <span className="text-white/80 text-[18.12px] font-semibold font-[family-name:var(--font-geist)] ml-1">/month</span>
              </div>
            </div>

            <div className="flex-grow space-y-5 mb-14">
              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-white mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white/90">12x usage of free tier</span>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-white mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white/90">Highest levels of access to Velora</span>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-white mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white/90">Priority access</span>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-white mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white/90">Run on state of the art data center GPU's</span>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-white mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white/90">Up to 53x faster than standard version</span>
              </div>
            </div>

            <button className="w-[204px] h-[48px] rounded-full bg-white/10 shadow-[inset_4.5px_5.7px_6.8px_rgba(255,255,255,0.4)] flex items-center justify-center transition-all text-[16.98px] font-normal font-[family-name:var(--font-geist)] text-white mx-auto md:mx-0 mt-auto hover:bg-white/20">
              Get started
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}