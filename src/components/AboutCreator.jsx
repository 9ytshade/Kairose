import React from 'react';
import { CREATOR_INFO, SERVICE_PACKAGES } from '../data/portfolioData';
import { Check, Clock, ArrowRight } from 'lucide-react';

export default function AboutCreator({ onOpenInquiry }) {
  const toolsStack = [
    "Runway Gen-3 Alpha",
    "Midjourney v6.1",
    "Flux.1 Dev",
    "Luma Dream Machine",
    "Kling 1.5 Pro",
    "ComfyUI Nodes",
    "Kohya-ss (Custom LoRA)",
    "Topaz Video AI 4K",
    "ElevenLabs Foley",
    "Suno AI v3.5",
    "DaVinci Resolve Studio",
    "FilmConvert Nitrate"
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-obsidian border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Creator Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Creator Portrait (Cinematic Frame) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-surface-1 border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt={CREATOR_INFO.name}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-75" />

              {/* Monogram Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono text-zinc-400 block uppercase mb-1">
                  AI DIRECTOR & COMMERCIAL ADS CREATOR
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {CREATOR_INFO.name}
                </h3>
                <span className="text-xs font-mono text-zinc-400 mt-1 block">
                  {CREATOR_INFO.location} • {CREATOR_INFO.statusBadge}
                </span>
              </div>
            </div>

            {/* Aurora subtle edge accent */}
            <div className="absolute -bottom-3 -right-3 w-28 h-28 bg-aurora-glow blur-2xl opacity-40 pointer-events-none" />
          </div>

          {/* Philosophy & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-7 rounded-full aurora-gradient-bg" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Philosophy & Direction
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              <span className="text-white block font-extrabold">Sculpting in Latent Space.</span>
              <span className="text-zinc-500 block font-semibold mt-1">
                Bridging traditional film craft with generative frontier models.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              {CREATOR_INFO.bio}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
              With a background spanning traditional cinematography, commercial brand campaigns, and 
              deep generative model engineering, Kairose provides studios and agencies with complete end-to-end 
              synthetic productions that maintain character fidelity, flawless camera physics, and 
              compelling visual identities.
            </p>

            {/* Generative Tooling Stack */}
            <div className="pt-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                Production Stack & Custom Pipelines
              </span>
              <div className="flex flex-wrap gap-2">
                {toolsStack.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-surface-1 border border-white/10 text-zinc-300 hover:border-white/30 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Commercial Commission Packages */}
        <div className="border-t border-white/5 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-2 w-7 rounded-full aurora-gradient-bg" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Services & Partnerships
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Commission Capabilities.
            </h3>
            <p className="mt-2 text-sm text-zinc-400 font-light">
              Tailored production workflows for creative agencies, brands, record labels, and forward-looking publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SERVICE_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                  pkg.popular 
                    ? 'bg-surface-2 border-white/30 shadow-2xl scale-[1.02]' 
                    : 'bg-surface-1 border-white/5 hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-bone text-obsidian text-[11px] font-mono font-bold tracking-wider uppercase shadow-md">
                    Most Requested
                  </div>
                )}

                <div>
                  <div className="text-xs font-mono text-zinc-300 font-semibold uppercase mb-1.5">
                    {pkg.target}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white tracking-tight mb-3">
                    {pkg.title}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light">
                    {pkg.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-mono text-zinc-500 block uppercase">
                      DELIVERABLES INCLUDED
                    </span>
                    {pkg.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-zinc-500" />
                      Timeline
                    </span>
                    <span className="text-white font-medium">{pkg.timeline}</span>
                  </div>

                  <button
                    onClick={onOpenInquiry}
                    className={`w-full py-3 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 ${
                      pkg.popular 
                        ? 'bg-bone text-obsidian hover:bg-white shadow-md' 
                        : 'bg-surface-2 hover:bg-surface-3 text-bone border border-white/10'
                    }`}
                  >
                    <span>Request Scope & Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
