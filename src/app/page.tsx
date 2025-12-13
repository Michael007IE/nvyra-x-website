import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765566761862.png?width=8000&height=8000&resize=contain"
          alt="Background"
          fill
          className="object-cover opacity-90"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40 pointer-events-none" />
      </div>

      {/* Navbar */}
      <header className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity">
            Nvyra <span className="text-blue-500">X</span>
          </Link>
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
          <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white border border-transparent hover:border-white/20 px-4 py-2 rounded-full transition-all">Contact us</Link>
          <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white">Login</Link>
          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-20 px-4 text-center min-h-[70vh]">
        <h1 className="max-w-6xl text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-12 drop-shadow-2xl">
          The AI infrastructure that brings <br />
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">clarity</span> to complexity.
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-12 py-4 text-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105 active:scale-95">
            Get started
          </button>
          <button className="rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-12 py-4 text-lg font-medium text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
            Contact us
          </button>
        </div>
      </main>
    </div>
  );
}