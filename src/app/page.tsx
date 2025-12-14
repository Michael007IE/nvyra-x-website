import Image from "next/image";
import Link from "next/link";
import BrandLogo from "@/components/ui/brand-logo";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-hidden">
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
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Navbar Container */}
      <header className="relative z-50 flex items-end justify-between px-8 mx-auto w-full max-w-[1440px]" style={{ height: '84px' }}>
        
        {/* Logo Section */}
        <div className="flex-none">
          <BrandLogo />
        </div>

        {/* Navigation & Actions Container */}
        <div className="flex items-center justify-end gap-[26px] flex-grow pb-4">
          
          {/* Menu Links */}
          <nav className="hidden xl:flex items-center gap-[26px]">
            {['About us', 'Blackwell', 'Velora', 'Sustainability', 'Pricing', 'Sentinel'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="font-normal text-[20px] leading-[29px] underline text-center"
                style={{ color: 'rgba(255, 254, 254, 0.9)' }}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons Group */}
          <div className="flex items-center gap-[8px] ml-8">
            {/* Contact Us */}
            <Link 
              href="#" 
              className="flex items-center justify-center border border-[#565656]"
              style={{ width: '87.42px', height: '38.94px', borderWidth: '0.79px' }}
            >
              <span className="text-[15.89px] leading-[23px] text-white">Contact us</span>
            </Link>

            {/* Login */}
            <Link 
              href="/login" 
              className="flex items-center justify-center border border-[#565656]"
              style={{ width: '76.29px', height: '38.94px', borderWidth: '0.79px' }}
            >
              <span className="text-[15.89px] leading-[23px] text-white">Login</span>
            </Link>

            {/* Sign Up */}
            <Link 
              href="/signup" 
              className="flex items-center justify-center border border-[#565656]"
              style={{ 
                width: '76.29px', 
                height: '38.94px', 
                borderWidth: '0.79px',
                backgroundColor: '#002BFF' 
              }}
            >
              <span className="text-[15.89px] leading-[23px] text-white">Sign up</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-32 px-4 text-center">
        <h1 
          className="font-light text-white mb-16 drop-shadow-2xl"
          style={{ 
            fontSize: '64.9px', 
            letterSpacing: '0.05em',
            lineHeight: '1.2'
          }}
        >
          The AI infrastructure that brings <br />
          <span className="italic">clarity</span> to complexity.
        </h1>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="/signup"
            className="flex items-center justify-center px-10 py-3.5 text-lg font-normal text-white transition-all hover:scale-105"
            style={{ backgroundColor: '#002BFF' }}
          >
            Get started
          </Link>
          
          <button className="rounded-full border border-white px-10 py-3.5 text-lg font-normal text-white hover:bg-white/10 transition-all hover:scale-105">
            Contact us
          </button>
        </div>
      </main>
    </div>
  );
}
