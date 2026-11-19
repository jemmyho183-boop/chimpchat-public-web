import { useState, useEffect } from 'react';
import chimpLogo from '../assets/chimpchat-logo.jpg';
import { 
  ArrowRight, 
  Sparkles, 
  Play, 
  CheckCircle, 
  MessageSquare, 
  Zap, 
  TrendingUp, 
  Instagram, 
  ShieldCheck,
  Heart,
  ShoppingBag
} from 'lucide-react';

type Scenario = 'comment' | 'story' | 'ai-faq';

export default function Hero() {
  const [activeScenario, setActiveScenario] = useState<Scenario>('comment');
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(1);

  // Auto-play the simulated chat sequence
  useEffect(() => {
    setStep(1);
    setIsTyping(true);

    const timer1 = setTimeout(() => {
      setIsTyping(false);
      setStep(2);
    }, 1200);

    const timer2 = setTimeout(() => {
      setIsTyping(true);
    }, 2200);

    const timer3 = setTimeout(() => {
      setIsTyping(false);
      setStep(3);
    }, 3400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [activeScenario]);

  return (
    <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-yellow/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-[350px] h-[350px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-brand-yellow/30 bg-brand-surface/80 shadow-yellow-glow animate-float">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
            </span>
            <span className="text-xs md:text-sm font-bold text-slate-200">
              Introducing <span className="text-brand-yellow">ChimpChat AI 2.0</span>
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-brand-muted hidden sm:inline">Faster & Smarter than ManyChat</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-yellow" />
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Turn Every Instagram DM & Comment Into{' '}
            <span className="relative inline-block text-brand-yellow">
              Revenue
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 250 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 9.5C65 3.5 175 3.5 247.5 9.5" stroke="#FFE500" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{' '}
            on Pure Autopilot.
          </h1>

          <p className="text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Your business shouldn't have to be online 24/7. ChimpChat automatically responds to DMs, converts post comments into instant checkouts, and engages new followers in seconds.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-extrabold text-base px-8 py-4 rounded-2xl shadow-yellow-glow hover:shadow-yellow-glow-lg transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 glass-card hover:bg-white/[0.08] text-white font-semibold text-base px-7 py-4 rounded-2xl border border-brand-border hover:border-brand-yellow/30 transition-all"
            >
              <div className="w-6 h-6 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                <Play className="w-3.5 h-3.5 fill-brand-yellow" />
              </div>
              <span>Watch 90-Sec Demo</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-brand-muted pt-2">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-yellow" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-yellow" />
              <span>100% Official Meta & Instagram API Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-brand-yellow" />
              <span>2-Minute Instant Setup</span>
            </div>
          </div>
        </div>

        {/* Interactive Live Simulation Showpiece */}
        <div className="mt-14 max-w-5xl mx-auto">
          
          {/* Scenario Selector Tabs */}
          <div className="flex items-center justify-center gap-2 p-1.5 glass-card rounded-2xl max-w-md mx-auto mb-6 border border-brand-border">
            <button
              onClick={() => setActiveScenario('comment')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activeScenario === 'comment'
                  ? 'bg-brand-yellow text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Comment to DM</span>
            </button>
            <button
              onClick={() => setActiveScenario('story')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activeScenario === 'story'
                  ? 'bg-brand-yellow text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Story Reply Bot</span>
            </button>
            <button
              onClick={() => setActiveScenario('ai-faq')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activeScenario === 'ai-faq'
                  ? 'bg-brand-yellow text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Sales Agent</span>
            </button>
          </div>

          {/* Device Mockup Shell */}
          <div className="relative mx-auto rounded-[32px] p-3 sm:p-5 glass-card border border-white/10 shadow-2xl bg-gradient-to-b from-[#141720] to-[#0D0F14]">
            
            {/* Top Device Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 px-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-500 ml-2 font-mono hidden sm:inline">
                  live_automation_preview.flow
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/20 px-3 py-1 rounded-full text-xs font-semibold text-brand-yellow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Simulated Latency: 0.8s</span>
              </div>
            </div>

            {/* Split Screen Simulation: Post Trigger on Left, Live DM Result on Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              
              {/* Left Column: The Social Trigger (Comment / Story / Follow) */}
              <div className="bg-brand-dark/80 rounded-2xl p-4 sm:p-5 border border-brand-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Instagram className="w-4 h-4 text-pink-500" />
                      1. Customer Social Action
                    </span>
                    <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                      Trigger Event
                    </span>
                  </div>

                  {activeScenario === 'comment' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-xs text-white">
                          KP
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">krupa.parmar</p>
                          <p className="text-xs text-slate-400">Commented on your Reel: "Fall Collection Drop"</p>
                        </div>
                      </div>

                      {/* Comment Box */}
                      <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-sm">
                        <p className="text-white font-medium">"Love this jacket! What is the price and how do I buy? 🔥"</p>
                      </div>

                      {/* Automated Public Comment Reply */}
                      <div className="pl-4 border-l-2 border-brand-yellow/50 mt-3 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-brand-yellow font-bold">
                          <img src={chimpLogo} alt="ChimpChat" className="w-4 h-4 rounded-full" />
                          <span>ChimpChat Auto-Reply (0.6s):</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          "Hey Krupa! Sent the direct link & 20% discount code to your DMs! Check your requests 📥✨"
                        </p>
                      </div>
                    </div>
                  )}

                  {activeScenario === 'story' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-xs text-white">
                          RD
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">rohit.dev</p>
                          <p className="text-xs text-slate-400">Replied to your Instagram Story</p>
                        </div>
                      </div>

                      <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-sm">
                        <p className="text-white font-medium">"LINK"</p>
                      </div>

                      <div className="pl-4 border-l-2 border-brand-yellow/50 mt-3 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-brand-yellow font-bold">
                          <Zap className="w-3.5 h-3.5" />
                          <span>Trigger Detected: Keyword "LINK"</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          Instantly routed to VIP Discount Automation Pipeline.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeScenario === 'ai-faq' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-xs text-white">
                          SM
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">siddharth_m</p>
                          <p className="text-xs text-slate-400">Sent a Direct Message</p>
                        </div>
                      </div>

                      <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-sm">
                        <p className="text-white font-medium">"Do you ship internationally to Canada, and how long does it take?"</p>
                      </div>

                      <div className="pl-4 border-l-2 border-brand-yellow/50 mt-3 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-brand-yellow font-bold">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>AI Agent Analysis:</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          Identified intent: Shipping FAQ • Context: Canadian Orders.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Engine: ChimpChat Neural Flow</span>
                  <span className="text-emerald-400 font-semibold">Status: Active 🟢</span>
                </div>
              </div>

              {/* Right Column: Instant Automated Instagram DM */}
              <div className="bg-gradient-to-b from-[#161822] to-[#10121A] rounded-2xl p-4 sm:p-5 border border-brand-border flex flex-col justify-between shadow-inner">
                <div>
                  {/* Instagram DM Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                    <div className="flex items-center gap-2">
                      <img src={chimpLogo} alt="Bot Avatar" className="w-7 h-7 rounded-full border border-brand-yellow/40" />
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-white">yourbrand.official</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="text-[10px] text-slate-400">Automated by ChimpChat</span>
                      </div>
                    </div>
                    <span className="text-xs text-brand-yellow font-mono font-bold">2s response</span>
                  </div>

                  {/* Message Stream */}
                  <div className="space-y-3 min-h-[170px]">
                    {step >= 1 && (
                      <div className="flex items-start gap-2">
                        <img src={chimpLogo} alt="" className="w-6 h-6 rounded-full mt-1 flex-shrink-0" />
                        <div className="bg-brand-surface rounded-2xl rounded-tl-sm p-3 text-xs text-slate-200 border border-white/5 max-w-[85%] leading-relaxed">
                          {activeScenario === 'comment' && "Hey Krupa! 👋 Saw your comment on our new drop! Here is your private 20% discount code:"}
                          {activeScenario === 'story' && "Hey Rohit! 🚀 Here is the exclusive link you requested from our story:"}
                          {activeScenario === 'ai-faq' && "Hello Siddharth! 👋 Yes, we ship to Canada via DHL Express! Standard transit time is 3–5 business days."}
                        </div>
                      </div>
                    )}

                    {step >= 2 && (
                      <div className="ml-8 bg-brand-surface/90 border border-brand-yellow/30 rounded-2xl p-3 max-w-[85%] shadow-lg space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ShoppingBag className="w-4 h-4 text-brand-yellow" />
                            <span className="text-xs font-bold text-white">Cyber Utility Jacket</span>
                          </div>
                          <span className="text-xs font-bold text-brand-yellow">$79.20</span>
                        </div>
                        <p className="text-[11px] text-slate-400">Coupon applied: <span className="font-mono text-brand-yellow font-bold">CHIMP20</span> (Save $19.80)</p>
                        <button className="w-full py-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black text-xs font-extrabold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5">
                          <span>Complete Checkout Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {isTyping && (
                      <div className="ml-8 inline-flex items-center gap-1 bg-brand-surface px-3 py-1.5 rounded-full border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                      </div>
                    )}

                    {step >= 3 && (
                      <div className="flex justify-end">
                        <div className="bg-brand-yellow text-black font-semibold text-xs px-3.5 py-2 rounded-2xl rounded-tr-sm flex items-center gap-1 shadow-sm">
                          <span>Just placed the order! Thanks a lot 🙏</span>
                          <Heart className="w-3.5 h-3.5 fill-black" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Conversion Impact Tag */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <TrendingUp className="w-4 h-4" />
                    <span>Result: +$79.20 Revenue Recorded</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Zero manual effort</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Real Metrics Banner Under Hero */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-4 rounded-2xl border border-brand-border text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-yellow font-mono">2.1s</p>
            <p className="text-xs text-brand-muted mt-1 font-medium">Average Response Time</p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-brand-border text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">10M+</p>
            <p className="text-xs text-brand-muted mt-1 font-medium">Social DMs Automated</p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-brand-border text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-yellow font-mono">3.4x</p>
            <p className="text-xs text-brand-muted mt-1 font-medium">Higher Conversion Rate</p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-brand-border text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">99.8%</p>
            <p className="text-xs text-brand-muted mt-1 font-medium">Customer Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
}
