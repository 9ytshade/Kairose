import React from 'react';
import { PARTNERS_AND_RECOGNITION } from '../data/portfolioData';

export default function TrustStrip() {
  return (
    <section className="py-12 border-y border-white/5 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
            Selected Collaborations, Film Fests & Model Partnerships
          </span>
        </div>

        {/* Monochrome Logos / Brands Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {PARTNERS_AND_RECOGNITION.map((partner, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center cursor-default transition-all duration-300"
            >
              <span className="text-sm sm:text-base font-bold font-mono tracking-tighter text-zinc-400 group-hover:text-white transition-colors">
                {partner.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                {partner.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
