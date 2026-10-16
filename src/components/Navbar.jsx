import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import KairoseLogo from './KairoseLogo';

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Featured Work', href: '#gallery' },
    { label: 'Pipeline & Stack', href: '#pipeline' },
    { label: 'Prompt Sandbox', href: '#playground' },
    { label: 'About & Services', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      {/* Top Floating Console Dock */}
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 border ${
        isScrolled 
          ? 'bg-obsidian/90 backdrop-blur-md border-white/10 shadow-2xl py-3 px-5 sm:px-7' 
          : 'bg-console/80 backdrop-blur-sm border-white/5 py-3.5 px-5 sm:px-7'
      } flex items-center justify-between relative`}>
        
        {/* Left: Brand Logo (Kairose Emblem + Wordmark) */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <KairoseLogo size="md" />
          </a>
        </div>

        {/* Center: Desktop Navigation Links (Properly Centered with Larger, Highly Readable Typography) */}
        <nav className="hidden lg:flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2 bg-surface-1/70 border border-white/5 rounded-full px-2 py-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-fog hover:text-white hover:bg-surface-2 rounded-full transition-all tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Initiate Project Pill CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 bg-bone text-obsidian hover:bg-white active:scale-95 shadow-md"
          >
            <span>Initiate Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-surface-2 text-fog hover:text-white border border-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-surface-1 border border-white/10 p-5 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-fog hover:text-white hover:bg-surface-2 transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 opacity-60" />
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between px-2 text-sm font-mono text-zinc-400">
              <span>London / Global Remote</span>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="text-white font-semibold hover:underline"
              >
                Book Commission →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
