import Image from "next/image";
import Link from "next/link";
import { Hexagon } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765566761862.png?width=8000&height=8000&resize=contain"
          alt="Background"
          fill
          className="object-cover opacity-100"
          priority
          quality={100}
        />
      </div>

      {/* Navbar */}
      <header className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-3">
          <Hexagon className="h-8 w-8 text-blue-500 stroke-[1.5]" />
          <span className="text-xl font-normal tracking-wide">Nvyra X</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#" className="hover:text-white transition-colors">About us</Link>
          <Link href="#" className="hover:text-white transition-colors relative group">
            Blackwell
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#" className="hover:text-white transition-colors relative group">
            Velora
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#" className="hover:text-white transition-colors">Sustainability</Link>
          <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-white transition-colors">Sentinel</Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white hidden sm:block border border-transparent hover:border-white/20 px-4 py-2 rounded-full transition-all">Contact us</Link>
          <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white hidden sm:block">Login</Link>
          <Link
            href="#"
            className="rounded-none bg-[#0044ff] px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-32 px-4 text-center">
        <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-[1.1] mb-12">
          The AI infrastructure that brings <br />
          <span className="italic font-normal">clarity</span> to complexity.
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <button className="rounded-full border border-purple-500 bg-transparent px-10 py-3.5 text-lg font-medium text-white hover:bg-purple-500/10 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Get started
          </button>
          <button className="rounded-full border border-white bg-transparent px-10 py-3.5 text-lg font-medium text-white hover:bg-white/10 transition-colors">
            Contact us
          </button>
        </div>
      </main>
    </div>
  );
}