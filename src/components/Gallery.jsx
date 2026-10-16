import React, { useState, useRef } from 'react';
import { Terminal, ArrowUpRight, Sparkles, Film, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';

export default function Gallery({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const categories = [
    { id: 'all', label: 'All Artifacts' },
    { id: 'video', label: 'AI Video & Cinema' },
    { id: 'commercial', label: 'Commercial Campaigns' },
    { id: 'stills', label: 'Editorial & Stills' },
    { id: 'experimental', label: 'Sci-Fi Worldbuilding' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-obsidian relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Two-Tone Section Header & Evenly Spaced Category Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-7 rounded-full aurora-gradient-bg" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Selected Works Archive
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              <span className="text-white block font-extrabold">Selected Works.</span>
              <span className="text-zinc-500 block font-semibold mt-1">
                Commercial campaigns, cinema films & editorial frames.
              </span>
            </h2>
          </div>

          {/* Evenly Spaced Category Filter Tabs (Fixes Screenshot 1) */}
          <div className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-surface-1 border border-white/10 self-start lg:self-auto shadow-lg">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 select-none ${
                    isActive 
                      ? 'bg-bone text-obsidian shadow-md font-semibold scale-[1.02]' 
                      : 'text-fog hover:text-white hover:bg-surface-2'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <GalleryCard 
              key={item.id} 
              item={item} 
              onSelect={() => onSelectProject(item)}
              isHovered={hoveredId === item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            />
          ))}
        </div>

        {/* Bottom Metadata */}
        <div className="mt-16 text-center border-t border-white/5 pt-8">
          <p className="text-xs font-mono text-zinc-500">
            ALL WORKS DIRECTED, PROMPTED & ENGINEERED BY KAIROSE • 2024–2026 ARCHIVE
          </p>
        </div>

      </div>
    </section>
  );
}

function GalleryCard({ item, onSelect, isHovered, onMouseEnter, onMouseLeave }) {
  const videoRef = useRef(null);

  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onSelect}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-surface-1 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Media Canvas */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
        {item.category === 'video' || item.videoUrl ? (
          <video
            ref={videoRef}
            src={item.videoUrl}
            poster={item.posterUrl}
            muted
            loop
            playsInline
            autoPlay={isHovered}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <img
            src={item.imageUrl}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}

        {/* Vignette Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Floating Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-white">
            {item.telemetry.model.split('+')[0].trim()}
          </span>

          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-zinc-300">
            {item.duration}
          </span>
        </div>

        {/* Center Hover Action */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <div className="px-5 py-2.5 rounded-full bg-bone text-obsidian text-sm font-semibold flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
            <Terminal className="w-4.5 h-4.5 text-zinc-900" />
            <span>Open Cinema Inspector</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span className="text-zinc-200 font-medium">{item.client}</span>
          <span className="text-zinc-400">{item.views} VIEWS</span>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-surface-1 border-t border-white/5">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="text-lg font-bold text-white group-hover:text-bone tracking-tight transition-colors line-clamp-1">
              {item.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </div>

          <p className="text-xs font-medium text-zinc-400 line-clamp-1 mb-3">
            {item.subtitle}
          </p>

          <p className="text-xs text-zinc-400 font-mono line-clamp-2 leading-relaxed bg-black/50 p-2.5 rounded-lg border border-white/5">
            <span className="text-zinc-200 mr-1.5 font-bold">&gt;</span>
            {item.telemetry.prompt}
          </p>
        </div>

        {/* Card Telemetry Tags */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>RATIO: {item.aspectRatio}</span>
          <span>CFG: {item.telemetry.cfg}</span>
          <span className="text-zinc-300 font-medium">{item.badge}</span>
        </div>
      </div>
    </div>
  );
}
