"use client";

import Image from "next/image";

const logos = [
  { 
    name: "NVIDIA", 
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644219258.png",
    text: "NVIDIA"
  },
  { 
    name: "OpenAI", 
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644165158.png",
    text: "OpenAI"
  },
  { 
    name: "Cohere", 
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644227432.png",
    text: "Cohere"
  },
  { 
    name: "Pinecone", 
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644240075.png",
    text: "Pinecone"
  },
  { 
    name: "Cleanlab", 
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644246389.png",
    text: "Cleanlab"
  },
  { 
    name: "Turso", 
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644253269.png",
    text: "Turso"
  },
  { 
    name: "Google", 
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644261798.png",
    text: "Google"
  },
  { 
    name: "Vercel", 
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644296745.png",
    text: "Vercel"
  },
];

export function LogoCarousel() {
  return (
    <div 
      className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-black/40 backdrop-blur-sm" 
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee-scroll gap-16 w-max items-center">
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center gap-3 opacity-90 hover:opacity-100 transition-opacity"
          >
            <div className="relative h-6 w-6 flex-shrink-0">
              <Image 
                src={logo.imageUrl} 
                alt={logo.name}
                width={24}
                height={24}
                className="object-contain w-full h-full brightness-0 invert"
              />
            </div>
            <span className="text-white text-[20px] font-medium tracking-tight font-[family-name:var(--font-space-grotesk)] whitespace-nowrap">
              {logo.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}