import chimpLogo from './assets/chimpchat-logo.jpg';
import { Sparkles, MessageSquare, ArrowRight, Zap, Shield, CheckCircle2 } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark bg-grid-pattern text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-brand-yellow selection:text-black">
      {/* Top subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-yellow/10 blur-[130px] rounded-full pointer-events-none" />

      <main className="relative z-10 max-w-3xl w-full text-center space-y-8 glass-card p-8 md:p-12 rounded-3xl border border-brand-border shadow-2xl">
        {/* Logo Badge */}
        <div className="inline-flex items-center gap-3 bg-brand-surface border border-brand-border px-4 py-2 rounded-full">
          <img 
            src={chimpLogo} 
            alt="ChimpChat Logo" 
            className="w-8 h-8 rounded-full border border-brand-yellow/40 object-cover shadow-yellow-glow" 
          />
          <span className="text-xs md:text-sm font-semibold tracking-wide text-brand-yellow flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> ChimpChat Architecture Ready
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Automate Your Business with <span className="text-brand-yellow drop-shadow-[0_0_20px_rgba(255,229,0,0.35)]">ChimpChat</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-muted max-w-xl mx-auto leading-relaxed">
            AI-powered social media automation built to turn comments & DMs into loyal customers 24/7.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
          <div className="bg-brand-surface/70 border border-brand-border/60 p-4 rounded-2xl hover:border-brand-yellow/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-sm">Instant DM Replies</h3>
            <p className="text-xs text-brand-muted mt-1">2-second responses to Instagram DMs and inquiries.</p>
          </div>

          <div className="bg-brand-surface/70 border border-brand-border/60 p-4 rounded-2xl hover:border-brand-yellow/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow mb-3">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-sm">Comment to DM</h3>
            <p className="text-xs text-brand-muted mt-1">Auto-reply & send discount links when followers comment.</p>
          </div>

          <div className="bg-brand-surface/70 border border-brand-border/60 p-4 rounded-2xl hover:border-brand-yellow/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-sm">AI Agent Support</h3>
            <p className="text-xs text-brand-muted mt-1">Understands product questions and closes sales 24/7.</p>
          </div>
        </div>

        {/* Status Callout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-border/50 text-sm text-brand-muted">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
            <span>Phase 1 Setup: React + Vite + Tailwind + Branding</span>
          </div>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-bold px-6 py-2.5 rounded-xl shadow-yellow-glow transition-all hover:scale-[1.02] active:scale-[0.98]">
            Next: Navbar Component <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
