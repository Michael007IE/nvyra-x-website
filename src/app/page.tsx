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
      <header className="relative z-50 flex items-end justify-between mx-auto w-full" style={{ width: '1393px', height: '84px' }}>
        
        {/* Logo Section */}
        <div className="flex-none">
          <BrandLogo />
        </div>

        {/* Menu & Auth Container */}
        <div className="flex items-center justify-end gap-[26px]" style={{ width: '973px', height: '80px' }}>
          
          {/* Menu Links */}
          <nav className="hidden xl:flex items-center gap-[26px]">
            {['About us', 'Blackwell', 'Velora', 'Sustainability', 'Pricing', 'Sentinel'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="font-normal underline text-center hover:text-white transition-colors"
                style={{ 
                  fontFamily: 'Jost',
                  fontSize: '20px',
                  lineHeight: '29px',
                  color: 'rgba(255, 254, 254, 0.9)'
                }}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons Group */}
          <div className="flex items-center relative" style={{ width: '240px', height: '38.94px' }}>
            {/* Contact Us */}
            <Link 
              href="#" 
              className="flex items-center justify-center border border-[#565656] hover:bg-white/10 transition-colors"
              style={{ width: '87.42px', height: '38.94px', borderWidth: '0.794702px' }}
            >
              <span style={{ fontFamily: 'Jost', fontSize: '15.894px', lineHeight: '23px', fontWeight: 400 }} className="text-white text-center">Contact us</span>
            </Link>

            {/* Login */}
            <Link 
              href="/login" 
              className="flex items-center justify-center border border-[#565656] hover:bg-white/10 transition-colors"
              style={{ width: '76.29px', height: '38.94px', borderWidth: '0.794702px' }}
            >
              <span style={{ fontFamily: 'Jost', fontSize: '15.894px', lineHeight: '23px', fontWeight: 400 }} className="text-white text-center">Login</span>
            </Link>

            {/* Sign Up */}
            <Link 
              href="/signup" 
              className="flex items-center justify-center border border-[#565656] hover:bg-blue-700 transition-colors"
              style={{ 
                width: '76.29px', 
                height: '38.94px', 
                borderWidth: '0.794702px',
                backgroundColor: '#002BFF' 
              }}
            >
              <span style={{ fontFamily: 'Jost', fontSize: '15.894px', lineHeight: '23px', fontWeight: 400 }} className="text-white text-center">Sign up</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-32 px-4 text-center">
        <h1 
          className="font-light text-white mb-16 drop-shadow-2xl"
          style={{ 
            fontFamily: 'Jost',
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