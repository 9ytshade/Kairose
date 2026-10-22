import React, { useState } from 'react';
import { Send, CheckCircle2, X } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';

export default function InquirySection({ isOpenModal, onCloseModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Commercial AI Ads & Campaign',
    budget: '$5,000 - $15,000',
    timeline: 'Within 1-2 Months',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const projectTypes = [
    'Commercial AI Ads & Campaign',
    'AI Film & Narrative Direction',
    'Music Video & Audio Visualizer',
    'Haute Couture / Editorial Stills',
    'Custom Brand Character LoRA',
    'Creative Advisory & Speaking'
  ];

  const content = (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-surface-2 border border-white/10 text-xs font-mono text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-zinc-400 animate-ping" />
          <span>DIRECTOR'S INQUIRY CONSOLE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          <span className="text-white block font-extrabold">Initiate a Production.</span>
          <span className="text-zinc-500 block font-semibold mt-1">Let's craft your next visual reality.</span>
        </h2>
        <p className="mt-3 text-sm text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
          Currently accepting select commercial campaigns, AI ads, and narrative film collaborations. 
          Average response time: &lt; 24 hours.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-3xl bg-surface-1 border border-white/15 p-8 sm:p-12 text-center animate-in zoom-in-95 duration-200 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Transmission Received
          </h3>
          <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. Kairose will review your brief and respond with project availability and initial production scope within 24 hours.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => {
                setSubmitted(false);
                if (onCloseModal) onCloseModal();
              }}
              className="px-7 py-3 rounded-full bg-bone text-obsidian text-xs sm:text-sm font-semibold hover:bg-white transition-all shadow-md active:scale-95"
            >
              Close Console
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="rounded-3xl bg-surface-1 border border-white/10 p-6 sm:p-10 space-y-6 shadow-2xl">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                Your Name / Lead
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="e.g. Helena Vance"
                className="w-full px-4 py-3 rounded-xl bg-surface-0 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                Work Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="e.g. helena@studio.com"
                className="w-full px-4 py-3 rounded-xl bg-surface-0 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                Brand / Agency / Organization
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                placeholder="e.g. A24 Films / Sony Music"
                className="w-full px-4 py-3 rounded-xl bg-surface-0 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                Project Category
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-surface-0 border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 transition-colors cursor-pointer"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-surface-1 text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
              Project Brief & Vision
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Tell us about the narrative, commercial goals, timeline, deliverables, or desired aesthetic..."
              className="w-full px-4 py-3 rounded-xl bg-surface-0 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-500">
              DIRECT INBOX: <a href={`mailto:${CREATOR_INFO.socials.email}`} className="text-zinc-300 hover:text-white underline">{CREATOR_INFO.socials.email}</a>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-bone text-obsidian hover:bg-white active:scale-95 text-xs sm:text-sm font-bold transition-all shadow-md"
            >
              <span>Transmit Project Brief</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

        </form>
      )}
    </div>
  );

  // If used as a Modal popup
  if (isOpenModal) {
    return (
      <div 
        onClick={onCloseModal}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/60 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer overflow-y-auto"
      >
        <div 
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-surface-1 border border-white/15 p-6 sm:p-10 shadow-2xl cursor-default my-auto"
        >
          <button
            onClick={onCloseModal}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-black/75 hover:bg-black text-zinc-400 hover:text-white border border-white/10 transition-all hover:scale-105 active:scale-95 shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          {content}
        </div>
      </div>
    );
  }

  // If rendered as page section: uniform bg-obsidian
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-obsidian border-t border-white/5 relative">
      {content}
    </section>
  );
}
