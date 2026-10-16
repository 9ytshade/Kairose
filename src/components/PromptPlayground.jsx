import React, { useState } from 'react';
import { PROMPT_PLAYGROUND_PRESETS } from '../data/portfolioData';
import { Terminal, Copy, Check, Sparkles, Camera, SunMedium } from 'lucide-react';

export default function PromptPlayground() {
  const [selectedPreset, setSelectedPreset] = useState(PROMPT_PLAYGROUND_PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedPreset.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="py-24 px-4 sm:px-6 lg:px-8 bg-obsidian border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Two-Tone Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-7 rounded-full aurora-gradient-bg" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Interactive Latent Sandbox
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            <span className="text-white block font-extrabold">Prompt Engineering Lab.</span>
            <span className="text-zinc-500 block font-semibold mt-1">
              Test & inspect production recipes designed by Kairose.
            </span>
          </h2>
        </div>

        {/* Preset Selector Buttons (Clean pill row) */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          {PROMPT_PLAYGROUND_PRESETS.map((preset) => {
            const isSelected = selectedPreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setSelectedPreset(preset)}
                className={`px-5 py-2.5 rounded-xl text-sm font-mono font-medium transition-all ${
                  isSelected 
                    ? 'bg-bone text-obsidian font-bold shadow-lg scale-[1.02]' 
                    : 'bg-surface-1 border border-white/10 text-fog hover:text-white hover:bg-surface-2'
                }`}
              >
                {preset.name}
              </button>
            );
          })}
        </div>

        {/* Sandbox Console Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-2xl sm:rounded-3xl bg-surface-1 border border-white/10 p-5 sm:p-8 shadow-2xl">
          
          {/* Left Column: Output Stills Preview */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black border border-white/10 group shadow-lg">
              <img
                src={selectedPreset.outputImage}
                alt={selectedPreset.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-zinc-300 bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10">
                <span>{selectedPreset.name}</span>
                <span className="text-zinc-200 font-semibold">LATENT VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prompt Telemetry */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Parameters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-5">
                <div className="p-3.5 rounded-xl bg-surface-2 border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase mb-1">
                    <Sparkles className="w-4 h-4 text-zinc-300" />
                    <span>Engine Stack</span>
                  </div>
                  <span className="text-xs font-semibold text-white font-mono">{selectedPreset.model}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-2 border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase mb-1">
                    <Camera className="w-4 h-4 text-zinc-300" />
                    <span>Optics</span>
                  </div>
                  <span className="text-xs font-semibold text-white font-mono">{selectedPreset.camera}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-2 border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase mb-1">
                    <SunMedium className="w-4 h-4 text-zinc-300" />
                    <span>Lighting</span>
                  </div>
                  <span className="text-xs font-semibold text-white font-mono">{selectedPreset.lighting}</span>
                </div>
              </div>

              {/* Exact Prompt Box */}
              <div className="rounded-xl bg-surface-0 border border-white/10 p-4 sm:p-5 shadow-md">
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/10">
                  <span className="text-xs font-mono text-zinc-300 flex items-center gap-2 font-semibold">
                    <Terminal className="w-4.5 h-4.5 text-zinc-300" />
                    EXACT PROMPT SYNTAX
                  </span>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-2 hover:bg-surface-3 border border-white/10 text-xs font-mono text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-zinc-400" />
                        <span>Copy Syntax</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs sm:text-sm font-mono text-zinc-200 leading-relaxed break-words select-all">
                  {selectedPreset.prompt}
                </p>
              </div>
            </div>

            {/* Prompt Engineering Insight */}
            <div className="p-4.5 rounded-xl bg-surface-2/60 border border-white/5 text-xs text-zinc-400 leading-relaxed">
              <span className="text-white font-semibold block mb-1 font-mono text-xs">
                // DIRECTOR'S PROMPT NOTE
              </span>
              Notice the balance of physical camera optics (f-stop, lens mm, shutter motion) alongside atmospheric volumetric descriptors. This grounds generative diffusion models in real-world cinematography rules.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
