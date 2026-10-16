import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Terminal, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('prompt'); // 'prompt' | 'pipeline'

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const copyPromptToClipboard = (e) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(project.telemetry.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    // Outer Backdrop: Clicking here closes modal; Soft transparent blur so background shows through!
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

        {/* LEFT / TOP: Cinema Media Stage */}
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

          {/* Bottom Telemetry Overlay */}
          <div className="absolute bottom-3 left-4 right-4 hidden sm:flex items-center justify-between text-xs font-mono text-zinc-300 bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
            <span>RES: 3840×2160 DCI • 4K</span>
            <span className="text-zinc-200 font-semibold">{project.badge}</span>
            <span>ASPECT: {project.aspectRatio}</span>
          </div>
        </div>

        {/* RIGHT: Prompt Engineering Console */}
        <div className="lg:w-2/5 flex flex-col max-h-[50vh] lg:max-h-[92vh] overflow-y-auto bg-surface-1 text-bone p-6 sm:p-7 lg:p-8">
          
          {/* Header Info */}
          <div className="border-b border-white/10 pb-5 mb-5">
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

          {/* Inspector Tabs (Prompt / Pipeline) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-2 border border-white/10 mb-5">
            <button
              onClick={() => setActiveTab('prompt')}
              className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                activeTab === 'prompt' ? 'bg-bone text-obsidian font-bold shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Prompt Syntax</span>
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                activeTab === 'pipeline' ? 'bg-bone text-obsidian font-bold shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Pipeline (5 Steps)</span>
            </button>
          </div>

          {/* TAB 1: PROMPT SYNTAX */}
          {activeTab === 'prompt' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Telemetry Pills Strip */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-surface-2 border border-white/5">
                  <span className="text-zinc-500 block text-[11px] mb-0.5">MODEL ENGINE</span>
                  <span className="text-white font-semibold">{project.telemetry.model}</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-2 border border-white/5">
                  <span className="text-zinc-500 block text-[11px] mb-0.5">LATENT SEED</span>
                  <span className="text-white font-semibold">{project.telemetry.seed}</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-2 border border-white/5">
                  <span className="text-zinc-500 block text-[11px] mb-0.5">CFG / GUIDANCE</span>
                  <span className="text-white font-semibold">{project.telemetry.cfg}</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-2 border border-white/5">
                  <span className="text-zinc-500 block text-[11px] mb-0.5">MOTION SCORE</span>
                  <span className="text-white font-semibold">{project.telemetry.motionScore}</span>
                </div>
              </div>

              {/* Exact Prompt Box with Copy */}
              <div className="relative rounded-xl bg-surface-0 border border-white/10 p-4 group shadow-md">
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-300" />
                    <span className="text-xs font-mono text-zinc-300 font-semibold">POSITIVE PROMPT SYNTAX</span>
                  </div>

                  <button
                    onClick={copyPromptToClipboard}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-2 hover:bg-surface-3 border border-white/10 text-xs font-mono text-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs sm:text-sm font-mono text-zinc-200 leading-relaxed break-words select-all">
                  {project.telemetry.prompt}
                </p>
              </div>

              {/* Negative Prompt */}
              <div className="rounded-xl bg-surface-0/60 border border-white/5 p-3.5">
                <span className="text-[11px] font-mono text-zinc-500 block mb-1 uppercase">NEGATIVE SYNTAX</span>
                <p className="text-xs font-mono text-zinc-400 leading-normal">
                  {project.telemetry.negativePrompt}
                </p>
              </div>

              {/* Camera Rig & Optics */}
              <div className="rounded-xl bg-surface-2 border border-white/5 p-3.5">
                <span className="text-[11px] font-mono text-zinc-500 block mb-1 uppercase">CAMERA RIG & OPTICAL MOTION</span>
                <p className="text-xs font-mono text-white">
                  {project.telemetry.camera}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PIPELINE STEPS */}
          {activeTab === 'pipeline' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <p className="text-xs text-zinc-400 mb-3">
                Full production workflow from character LoRA training to 4K cinematic mastering:
              </p>
              {project.telemetry.pipelineSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-2 border border-white/5">
                  <span className="w-6 h-6 rounded-full bg-surface-3 border border-white/10 text-zinc-200 text-xs font-mono flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-xs text-zinc-300 leading-relaxed font-mono">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Overview Statement */}
          <div className="mt-6 pt-5 border-t border-white/10">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
              DIRECTOR'S LOG
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {project.overview}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
