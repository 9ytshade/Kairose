import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';
import { CREATOR_INFO, PORTFOLIO_ITEMS } from '../data/portfolioData';

export default function Hero({ onOpenProject, onOpenInquiry }) {
  // Grab the 5 video reels
  const reels = PORTFOLIO_ITEMS.filter(item => item.videoUrl).slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHoveringReel, setIsHoveringReel] = useState(false);
  const videoRef = useRef(null);

  const activeReel = reels[currentIndex] || reels[0];

  // Auto-slide every 3 seconds unless hovering
  useEffect(() => {
    if (isHoveringReel) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reels.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isHoveringReel, reels.length]);

  // Restart video playback when slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [currentIndex]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + reels.length) % reels.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % reels.length);
  };

  const togglePlay = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-obsidian overflow-hidden flex flex-col justify-center">
      {/* Subtle Aurora Ambient Radiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-aurora-glow pointer-events-none blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Top Telemetry & Aurora Spectrum Fragment */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-white/10 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
              <span className="text-white font-semibold">AI COMMERCIAL ADS CREATOR</span> // KAIROSE REEL DIRECTING
            </span>
          </div>

          {/* Langbase Aurora Fragmented Bars */}
          <div className="flex items-center gap-1.5" title="Neural Spectrum Output">
            <div className="h-2 w-7 rounded-full aurora-gradient-bg" />
            <div className="h-2 w-14 rounded-full aurora-gradient-bg opacity-80" />
            <div className="h-2 w-5 rounded-full aurora-gradient-bg opacity-50" />
            <div className="h-2 w-10 rounded-full aurora-gradient-bg opacity-90" />
          </div>
        </div>

        {/* Morphic Two-Tone Headline System */}
        <div className="max-w-4xl mb-10">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.02] uppercase">
            {/* Line 1: White Statement */}
            <span className="text-white block font-extrabold tracking-tight">
              KAIROSE
            </span>
            {/* Line 2: Muted Context Echo with Commercial Ads Creator included */}
            <span className="text-zinc-500 block font-semibold text-2xl sm:text-4xl md:text-5xl normal-case tracking-normal mt-2">
              AI filmmaker, commercial ads creator & visual director.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-fog max-w-2xl font-normal leading-relaxed">
            Crafting viral high-end commercials, luxury brand films, and narrative cinema 
            with cutting-edge AI and artistic direction.
          </p>

          {/* Dual CTAs (Achromatic Pills) */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold bg-bone text-obsidian hover:bg-white active:scale-95 transition-all shadow-subtle group"
            >
              <span>Explore Selected Works</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold bg-surface-1 border border-white/15 text-bone hover:border-white/30 hover:bg-surface-2 transition-all shadow-subtle group"
            >
              <span>Initiate Project</span>
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Krea Cinema Viewport Carousel (5 Auto-Sliding Reels with Manual Arrows) */}
        <div 
          className="relative mt-4 group"
          onMouseEnter={() => setIsHoveringReel(true)}
          onMouseLeave={() => setIsHoveringReel(false)}
        >
          {/* Outer Ambient Backlight Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-sky-500/10 to-pink-500/10 rounded-2xl sm:rounded-3xl blur-xl opacity-40 group-hover:opacity-65 transition-opacity" />

          {/* Cinema Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-surface-1 border border-white/15 shadow-2xl">
            
            {/* Console Frame Header Bar */}
            <div className="bg-surface-1/95 px-5 py-3 border-b border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <span className="text-xs text-zinc-200 font-semibold tracking-wider ml-1">
                  {activeReel.title}
                </span>
              </div>

              {/* Progress & Indicator Pills */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  {reels.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/25 hover:bg-white/50'
                      }`}
                      aria-label={`Slide to reel ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Video Container with Aspect Ratio */}
            <div className="relative aspect-video w-full bg-obsidian overflow-hidden">
              <video
                key={activeReel.id}
                ref={videoRef}
                src={activeReel.videoUrl}
                poster={activeReel.posterUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-85 pointer-events-none" />

              {/* Manual Left & Right Arrow Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 z-20 shadow-xl"
                aria-label="Previous reel"
                title="Previous Reel"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 z-20 shadow-xl"
                aria-label="Next reel"
                title="Next Reel"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Floating Bottom Reel Overlays */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
                <div className="max-w-xl">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {activeReel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-light">
                    {activeReel.subtitle}
                  </p>
                </div>

                {/* Player Controls & Action Button */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={togglePlay}
                    className="p-3 rounded-full bg-black/75 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all active:scale-95"
                    title={isPlaying ? "Pause Video" : "Play Video"}
                    aria-label="Toggle play"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-3 rounded-full bg-black/75 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all active:scale-95"
                    title={isMuted ? "Unmute Audio" : "Mute Audio"}
                    aria-label="Toggle mute"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>

                  <button
                    onClick={onOpenInquiry}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-obsidian hover:bg-zinc-200 text-xs sm:text-sm font-semibold backdrop-blur-md transition-all active:scale-95 shadow-lg"
                  >
                    <span>Initiate Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Telemetry Stats Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {CREATOR_INFO.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-surface-1 border border-white/5 hover:border-white/15 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-zinc-200 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mt-1.5">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-500 font-mono mt-1 line-clamp-1">
                {stat.hint}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
