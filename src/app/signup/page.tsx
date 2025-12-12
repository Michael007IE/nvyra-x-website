"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Apple } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765566761862.png?width=8000&height=8000&resize=contain')`,
          opacity: 0.5,
        }}
      />
      
      <div className="relative z-10 w-full max-w-md bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765567223502.png"
              alt="Nvyra X Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <span className="text-2xl font-medium text-white tracking-[0.05em]">Nvyra X</span>
          </div>
          <p className="text-xs text-center text-white/70 max-w-[280px] leading-relaxed">
            Industry leading Disinformation and Deepfake Detection on the login page
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm text-white/80 ml-1">Email</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#002BFF] transition-colors"
            />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-sm text-white/80 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#002BFF] transition-colors"
            />
          </div>

          <button 
            type="button"
            className="w-full bg-[#002BFF] hover:bg-[#0022cc] text-white font-medium py-3 rounded-lg transition-colors mt-2 tracking-wide"
          >
            Sign up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-white/60">
            Already have an account?{" "}
            <Link href="#" className="text-[#002BFF] hover:underline">
              Log in here
            </Link>
          </p>
        </div>

        <div className="mt-8">
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-x-0 h-[1px] bg-white/10"></div>
            <span className="relative bg-black px-4 text-xs text-white/50 uppercase tracking-widest">Or continue with</span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button className="flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 p-3 rounded-lg transition-colors group">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </button>
            <button className="flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 p-3 rounded-lg transition-colors text-white">
              <Apple className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 p-3 rounded-lg transition-colors text-white">
              <Github className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
