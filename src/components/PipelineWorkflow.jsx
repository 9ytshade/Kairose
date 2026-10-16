import React, { useState } from 'react';
import { WORKFLOW_STAGES } from '../data/portfolioData';
import { Terminal, CheckCircle2 } from 'lucide-react';

export default function PipelineWorkflow() {
  const [selectedStage, setSelectedStage] = useState(0);

  return (
    <section id="pipeline" className="py-24 px-4 sm:px-6 lg:px-8 bg-obsidian border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Two-Tone Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-7 rounded-full aurora-gradient-bg" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              The Production Pipeline
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            <span className="text-white block font-extrabold">From Seed to Screen.</span>
            <span className="text-zinc-500 block font-semibold mt-1">
              How raw diffusion models become broadcast-ready cinema.
            </span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-fog max-w-2xl font-light leading-relaxed">
            AI filmmaking and commercial direction requires more than entering a prompt. It demands fine-tuned character LoRAs, 
            mathematical camera motion control, sub-pixel neural restoration, and Hollywood audio mastering.
          </p>
        </div>

        {/* 4 Interactive Stages Grid (Fixes Screenshot 2: Properly Fitted Badges & Refined Non-Shouty Colors) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STAGES.map((stage, idx) => {
            const isSelected = selectedStage === idx;
            return (
              <div
                key={stage.step}
                onClick={() => setSelectedStage(idx)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected 
                    ? 'bg-surface-2 border-white/40 shadow-xl scale-[1.02]' 
                    : 'bg-surface-1 border-white/5 hover:border-white/20 hover:bg-surface-2/60'
                }`}
              >
                <div>
                  {/* Step Monogram + Properly Fitted Metric Badge (No Wrap Overflow, Refined Subtle Tone) */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="font-mono text-3xl font-extrabold text-zinc-600">
                      {stage.step}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-surface-3/90 border border-white/10 text-zinc-200 font-medium whitespace-nowrap shadow-sm">
                      {stage.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1.5">
                    {stage.title}
                  </h3>
                  
                  <p className="text-xs font-mono text-zinc-400 mb-3">
                    {stage.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {stage.description}
                  </p>
                </div>

                {/* Bottom Tools Badges */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="text-[11px] font-mono text-zinc-500 mb-2 uppercase">STACK INTEGRATION</div>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-black/60 border border-white/10 text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stage Live Execution Snippet Banner */}
        <div className="mt-8 rounded-2xl bg-surface-1 border border-white/10 p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-surface-2 border border-white/10 flex items-center justify-center shrink-0">
              <Terminal className="w-5 h-5 text-zinc-300" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 block uppercase">
                Active Execution Snippet // Stage {WORKFLOW_STAGES[selectedStage].step}
              </span>
              <p className="text-xs sm:text-sm font-mono text-white mt-0.5">
                {WORKFLOW_STAGES[selectedStage].codeSnippet}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 shrink-0 bg-surface-2 px-3 py-1.5 rounded-lg border border-white/5">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />
            <span>Studio Quality Delivery</span>
          </div>
        </div>

      </div>
    </section>
  );
}
