import React from 'react';
import { CREATOR_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import KairoseLogo from './KairoseLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 relative text-bone">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info with Custom Kairose Logo */}
          <div className="space-y-3">
            <KairoseLogo size="lg" />
            <p className="text-xs text-zinc-400 max-w-sm font-light leading-relaxed">
              {CREATOR_INFO.tagline} {CREATOR_INFO.subTagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-sm font-mono">
            <a
              href={CREATOR_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={CREATOR_INFO.socials.x}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              X / Twitter
            </a>
            <a
              href={CREATOR_INFO.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              YouTube
            </a>
            <a
              href={CREATOR_INFO.socials.runway}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Runway Studio
            </a>
            <a
              href={`mailto:${CREATOR_INFO.socials.email}`}
              className="text-zinc-200 hover:text-white underline font-semibold"
            >
              Direct Email
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-surface-1 hover:bg-surface-2 border border-white/10 text-zinc-300 hover:text-white transition-all hover:scale-105 active:scale-95 group shadow-md"
            aria-label="Back to top"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-6 rounded-full aurora-gradient-bg" />
            <span>KAIROSE DIRECTING ARCHIVE © 2024–2026</span>
          </div>

          <div className="flex items-center gap-4">
            <span>COMMERCIAL ADS • CINEMA • SYNTHETIC VISUALS</span>
            <span className="hidden sm:inline">•</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
