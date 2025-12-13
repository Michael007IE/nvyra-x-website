"use client";

import { 
  SiOpenai,
  SiNvidia,
  SiTurso
} from "react-icons/si";

const logos = [
  { 
    name: "NVIDIA", 
    Icon: SiNvidia, 
    text: "NVIDIA",
    font: "rajdhani"
  },
  { 
    name: "OpenAI", 
    Icon: SiOpenai, 
    text: "OpenAI",
    font: "space-grotesk"
  },
  { 
    name: "Cohere", 
    text: "Cohere",
    font: "space-grotesk",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    )
  },
  { 
    name: "Pinecone", 
    text: "Pinecone",
    font: "space-grotesk",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M13.983 2.908a2 2 0 0 0-3.966 0l-1.063 8.504a7.5 7.5 0 1 0 6.092 0l-1.063-8.504z"/>
      </svg>
    )
  },
  { 
    name: "Cleanlab", 
    text: "Cleanlab",
    font: "space-grotesk",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
      </svg>
    )
  },
  { 
    name: "Turso", 
    Icon: SiTurso, 
    text: "Turso",
    font: "space-grotesk"
  },
  { 
    name: "Google", 
    text: "Google",
    font: "inter"
  },
];

export function LogoCarousel() {
  const getFontClass = (font: string) => {
    switch(font) {
      case "rajdhani":
        return "font-[family-name:var(--font-rajdhani)] font-bold tracking-wide";
      case "inter":
        return "font-[family-name:var(--font-inter)] font-medium tracking-tight";
      case "space-grotesk":
      default:
        return "font-[family-name:var(--font-space-grotesk)] font-medium tracking-tight";
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-black/40 backdrop-blur-sm" 
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee-scroll gap-24 w-max items-center">
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center gap-3 opacity-90 hover:opacity-100 transition-opacity"
          >
            <div className="flex items-center gap-3 text-white">
              {logo.Icon && <logo.Icon className="w-6 h-6" />}
              {logo.icon && logo.icon}
              <span className={`text-[22px] ${getFontClass(logo.font)}`}>{logo.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}