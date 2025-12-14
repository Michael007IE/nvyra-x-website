import React from 'react';

export default function BrandLogo() {
  return (
    <div className="relative w-[150px] h-[84px] flex items-center">
      {/* Geometric Shapes Container */}
      <div className="relative w-[100px] h-full">
        {/* Polygon 6 - Blue Border, Rotated */}
        <div 
          className="absolute border border-[#325FC2] bg-black"
          style={{
            width: '63.06px',
            height: '55.18px',
            left: '0px', 
            bottom: '15px',
            transform: 'rotate(15deg)',
            zIndex: 1
          }}
        />
        
        {/* Polygon 5 - White Border */}
        <div 
          className="absolute border-[0.54px] border-white bg-black"
          style={{
            width: '54.64px',
            height: '53.55px',
            left: '15px', 
            top: '15px',
            zIndex: 2
          }}
        />
      </div>

      {/* Text */}
      <span 
        className="font-sans text-[32px] leading-[46px] text-white whitespace-nowrap -ml-2 relative z-10"
        style={{ fontWeight: 400 }}
      >
        Nvyra X
      </span>
    </div>
  );
}
