"use client";

import { 
  SiNvidia,
  SiWorkday,
  SiMicrosoft,
  SiOpenai,
  SiAsana
} from "react-icons/si";
import Image from "next/image";

const logos = [
  { name: "NVIDIA", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619108017.png" },
  { name: "Workday", Icon: SiWorkday },
  { name: "L'Oreal", url: "https://upload.wikimedia.org/wikipedia/commons/9/9c/L%27Or%C3%A9al_logo.svg" },
  { name: "Microsoft", Icon: SiMicrosoft },
  { name: "OpenAI", Icon: SiOpenai, spinning: true },
  { name: "Cohere", url: "https://asset.brandfetch.io/idA-3cy22V/id8R3IVcIe.svg" },
  { name: "Asana", Icon: SiAsana },
  { name: "Pinecone", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619263979.png" },
  { name: "Cleanlab", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619345547.png" },
];

export function LogoCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-12" style={{
      backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      backgroundColor: '#000'
    }}>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee-scroll gap-20 w-max">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-center ${logo.spinning ? 'animate-spin-slow' : ''}`}
            style={{ minWidth: '120px', height: '48px' }}
          >
            {logo.Icon ? (
              <logo.Icon className="h-10 w-auto text-white opacity-90 hover:opacity-100 transition-opacity" />
            ) : (
              <div className="relative w-28 h-10 flex items-center justify-center">
                <Image 
                  src={logo.url!} 
                  alt={logo.name}
                  width={112}
                  height={40}
                  className="object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}