import React from 'react';
import Image from 'next/image';

export default function BrandLogo() {
  return (
    <div className="relative w-[401px] h-[84px] flex items-center px-[35px] py-[3px]">
      {/* Logo Image */}
      <div className="relative w-[75.2px] h-[69.62px] flex-none">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765699752917.png?width=8000&height=8000&resize=contain"
          alt="Nvyra X Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Text "Nvyra X" */}
      <span 
        className="font-sans text-white text-center flex items-center"
        style={{ 
          width: '166px',
          height: '29px',
          fontFamily: 'Jost',
          fontWeight: 400,
          fontSize: '32px',
          lineHeight: '46px',
          marginLeft: '20px' // Adjust spacing to ensure it fits the 401px container appropriately if needed, or rely on flex gap
        }}
      >
        Nvyra X
      </span>
    </div>
  );
}