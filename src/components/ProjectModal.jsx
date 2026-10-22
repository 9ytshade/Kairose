import React, { useEffect } from 'react';
import { X, ArrowRight, Film, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenInquiry }) {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    // Outer Backdrop: Clicking here closes modal; Soft transparent blur
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer overflow-y-auto"
    >
      {/* Modal Container: stopPropagation prevents click inside from closing */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col lg:flex-row rounded-2xl sm:rounded-3xl bg-surface-1 border border-white/15 overflow-hidden shadow-2xl cursor-default my-auto"
      >
        
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/75 hover:bg-black text-zinc-300 hover:text-white border border-white/15 backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-lg"
          aria-label="Close modal"
          title="Close (Esc)"
        >
          <X className="w-5 h-5 sm:w-6 h-6" />
        </button>

        {/* LEFT: Cinema Media Stage */}
        <div className="lg:w-3/5 bg-black flex flex-col justify-center items-center relative min-h-[280px] sm:min-h-[420px] lg:min-h-[560px] border-b lg:border-b-0 lg:border-r border-white/10">
          {project.category === 'video' || project.videoUrl ? (
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              <video
                src={project.videoUrl}
                poster={project.posterUrl}
                autoPlay
                loop
                controls
                playsInline
                className="max-h-[85vh] w-full object-contain"
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center p-4 bg-black">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="max-h-[85vh] max-w-full object-contain rounded-lg"
              />
            </div>
          )}

          {/* Bottom Video Spec Overlay */}
          <div className="absolute bottom-3 left-4 right-4 hidden sm:flex items-center justify-between text-xs font-mono text-zinc-300 bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
            <span>RES: 3840×2160 DCI • 4K</span>
            <span className="text-zinc-200 font-semibold">{project.badge}</span>
            <span>ASPECT: {project.aspectRatio}</span>
          </div>
        </div>

        {/* RIGHT: Project Information & Details (No prompt engineering jargon) */}
        <div className="lg:w-2/5 flex flex-col justify-between max-h-[50vh] lg:max-h-[92vh] overflow-y-auto bg-surface-1 text-bone p-6 sm:p-8 lg:p-10">
          
          <div className="space-y-6">
            {/* Header Info */}
            <div className="border-b border-white/10 pb-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-7 rounded-full aurora-gradient-bg" />
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  {project.client} • {project.year}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Project Story & Overview */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                PROJECT OVERVIEW
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {project.overview}
              </p>
            </div>

            {/* Production Specifications */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                PRODUCTION SPECS
              </span>
              
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-surface-2 border border-white/5">
                  <span className="text-zinc-500 block text-[11px] mb-0.5">CATEGORY</span>
                  <span className="text-white font-semibold capitalize">{project.category}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-2 border border-white/5">
                  <span className="text-zinc-500 block text-[11px] mb-0.5">RUNTIME</span>
                  <span className="text-white font-semibold">{project.duration}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-2 border border-white/5">
                  <span className="text-zinc-500 block text-[11px] mb-0.5">FORMAT</span>
                  <span className="text-white font-semibold">4K DCI • {project.aspectRatio}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-2 border border-white/5">
                  <span className="text-zinc-500 block text-[11px] mb-0.5">CLIENT</span>
                  <span className="text-white font-semibold">{project.client}</span>
                </div>
              </div>

              {/* Camera & Aesthetic Direction if available */}
              {project.telemetry?.camera && (
                <div className="rounded-xl bg-surface-2 border border-white/5 p-3.5">
                  <span className="text-[11px] font-mono text-zinc-500 block mb-1 uppercase">
                    VISUAL DIRECTION & OPTICS
                  </span>
                  <p className="text-xs font-mono text-zinc-300 leading-relaxed">
                    {project.telemetry.camera}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                if (onOpenInquiry) {
                  onOpenInquiry();
                } else {
                  onClose();
                }
              }}
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-bone text-obsidian hover:bg-white active:scale-95 font-semibold text-sm transition-all shadow-lg"
            >
              <span>Initiate Project Like This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
