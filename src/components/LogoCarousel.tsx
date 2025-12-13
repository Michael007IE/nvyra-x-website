"use client";

import { SiOpenai } from "react-icons/si";
import Image from "next/image";

const logos = [
  { name: "NVIDIA", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619108017.png", width: 140, height: 50 },
  { name: "Workday", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619041868.png", width: 140, height: 50 },
  { name: "L'Oreal", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619092894.png", width: 140, height: 50 },
  { name: "Microsoft", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619129644.png", width: 140, height: 50 },
  { name: "OpenAI", Icon: SiOpenai, spinning: true },
  { name: "Cohere", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619163138.png", width: 140, height: 50 },
  { name: "Asana", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619182088.png", width: 140, height: 50 },
  { name: "Pinecone", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619263979.png", width: 140, height: 50 },
  { name: "Cleanlab", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619345547.png", width: 140, height: 50 },
];

export function LogoCarousel() {
  return (
    <div 
      className="relative w-full overflow-hidden py-12 border-2 border-[#333333]" 
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
        backgroundColor: '#1a1a1a'
      }}
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee-scroll gap-16 w-max">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-center ${logo.spinning ? 'animate-spin-slow' : ''}`}
            style={{ minWidth: '160px', height: '60px' }}
          >
            {logo.Icon ? (
              <logo.Icon className="w-12 h-12 text-white" style={{ color: '#FFFFFF' }} />
            ) : (
              <div className="relative flex items-center justify-center" style={{ width: logo.width, height: logo.height }}>
                <Image 
                  src={logo.url!} 
                  alt={logo.name}
                  width={logo.width!}
                  height={logo.height!}
                  className="object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}