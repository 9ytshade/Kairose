import React from 'react';

export default function KairoseLogo({ size = "md", showWordmark = true, className = "" }) {
  // Dimension mappings
  const emblemSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12"
  };

  const textSizes = {
    sm: "text-xs tracking-[0.2em]",
    md: "text-sm tracking-[0.24em]",
    lg: "text-lg tracking-[0.28em]"
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Bespoke Geometric Emblem combining K + R + S + O */}
      <div className={`relative ${emblemSizes[size]} rounded-xl bg-surface-2 border border-white/10 group-hover:border-white/30 flex items-center justify-center overflow-hidden transition-all duration-300 shadow-sm shrink-0`}>
        {/* Subtle Aurora Ambient Sheen on Hover */}
        <div className="absolute inset-0 bg-aurora-spectrum opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5 h-4/5 text-bone group-hover:text-white transition-colors"
        >
          {/* Subtle Outer Lens / Cinema Aperture Circle */}
          <circle 
            cx="20" 
            cy="20" 
            r="17" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            strokeDasharray="2 3"
            strokeOpacity="0.3"
          />

          {/* Monogram geometry: Vertical Stem of K & Stylized R/S Loop */}
          {/* Main vertical spine */}
          <path 
            d="M13 10V30" 
            stroke="currentColor" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
          />

          {/* Upper K-arm looping into the upper lobe of R & O */}
          <path 
            d="M14 20C18 20 25 19 25 14.5C25 10 19 10 14 10" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
          />

          {/* Lower diagonal leg of K transforming into the fluid S curve of Kairose */}
          <path 
            d="M17 19.5L25 30" 
            stroke="currentColor" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
          />

          {/* Center Prism Focal Core (Aurora Starlet / Lens Point) */}
          <circle 
            cx="20" 
            cy="20" 
            r="1.7" 
            fill="#c7b8f5" 
            className="group-hover:fill-white transition-colors"
          />
        </svg>
      </div>

      {/* Logotype Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span className={`font-mono font-bold text-bone group-hover:text-white uppercase transition-colors ${textSizes[size]}`}>
            KAIROSE
          </span>
        </div>
      )}
    </div>
  );
}
