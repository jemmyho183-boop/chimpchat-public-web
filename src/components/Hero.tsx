import { useState, useEffect } from 'react';
import chimpLogo from '../assets/chimpchat-logo.jpg';
import { 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  Sparkles, 
  Star, 
  ShoppingBag, 
  Heart,
  TrendingUp,
  Instagram
} from 'lucide-react';

type Scenario = 'comment' | 'story' | 'ai-faq';

export default function Hero() {
  const [activeScenario, setActiveScenario] = useState<Scenario>('comment');
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    setStep(1);
    setIsTyping(true);

    const timer1 = setTimeout(() => {
      setIsTyping(false);
      setStep(2);
    }, 1100);

    const timer2 = setTimeout(() => {
      setIsTyping(true);
    }, 2000);

    const timer3 = setTimeout(() => {
      setIsTyping(false);
      setStep(3);
    }, 3100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [activeScenario]);

  return (
    <section id="product" className="relative pt-8 pb-20 md:pt-14 md:pb-28 bg-[#F6F6F4] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Top Pill Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#241C15] text-xs font-bold text-[#241C15] shadow-mc-hard-sm">
            <span className="w-2 h-2 rounded-full bg-[#008444]" />
            <span>ChimpChat AI 2.0 is now live</span>
            <span className="text-[#241C15]/40">•</span>
            <span className="underline decoration-[#FFE01B] decoration-2">See New Automation Engine</span>
            <ArrowRight className="w-3 h-3 text-[#241C15]" />
          </div>

          {/* Mailchimp Signature Editorial Serif Heading */}
          <h1 className="font-mc-serif text-4xl sm:text-6xl lg:text-[72px] font-normal text-[#241C15] leading-[1.08] tracking-tight">
            Turn social conversations into<br className="hidden sm:inline" />
            {' '}revenue <em className="italic font-normal underline decoration-[#FFE01B] decoration-[6px] underline-offset-8">that connects</em>
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-lg sm:text-xl text-[#241C15]/80 max-w-2xl mx-auto leading-relaxed font-normal">
            Never lose another customer to a slow reply. ChimpChat automatically answers inquiries in seconds, turns post comments into instant checkouts, and scales your business 24/7 with intelligent social automation.
          </p>

          {/* Mailchimp Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#pricing"
              className="w-full sm:w-auto mc-btn-primary px-8 py-4 text-base shadow-mc-hard-sm hover:shadow-mc-hard font-bold"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#solutions"
              className="w-full sm:w-auto mc-btn-outline px-8 py-4 text-base font-bold bg-[#FFFFFF]"
            >
              <span>Find the Right Plan</span>
            </a>
          </div>

          {/* Mailchimp Signature Social Proof Rating Block */}
          <div className="pt-4 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-[#241C15]">
              <div className="flex text-[#FFE01B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFE01B] text-[#241C15]" />
                ))}
              </div>
              <span className="font-bold text-sm ml-1">4.9 / 5</span>
              <span className="text-[#241C15]/70">— Based on <b>12,000+</b> reviews across</span>
            </div>

            {/* Review Badges */}
            <div className="flex items-center gap-6 text-xs font-bold text-[#241C15]/75">
              <span className="flex items-center gap-1.5 hover:text-[#241C15] transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#E04838]" /> Capterra
              </span>
              <span className="flex items-center gap-1.5 hover:text-[#241C15] transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#007C89]" /> TrustRadius
              </span>
              <span className="flex items-center gap-1.5 hover:text-[#241C15] transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#E04838]" /> G2 Crowd
              </span>
            </div>
          </div>
        </div>

        {/* Mailchimp-Style Interactive Feature Showcase Card */}
        <div className="mt-14 max-w-5xl mx-auto">
          
          {/* Scenario Selector Pills */}
          <div className="flex items-center justify-center gap-2 p-1.5 bg-[#FFFFFF] rounded-full max-w-md mx-auto mb-6 border border-[#241C15] shadow-mc-hard-sm">
            <button
              onClick={() => setActiveScenario('comment')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-bold rounded-full transition-all flex items-center justify-center gap-1.5 ${
                activeScenario === 'comment'
                  ? 'bg-[#FFE01B] text-[#241C15] border border-[#241C15]'
                  : 'text-[#241C15]/70 hover:text-[#241C15]'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Comment to DM</span>
            </button>
            <button
              onClick={() => setActiveScenario('story')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-bold rounded-full transition-all flex items-center justify-center gap-1.5 ${
                activeScenario === 'story'
                  ? 'bg-[#FFE01B] text-[#241C15] border border-[#241C15]'
                  : 'text-[#241C15]/70 hover:text-[#241C15]'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Story Reply Bot</span>
            </button>
            <button
              onClick={() => setActiveScenario('ai-faq')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-bold rounded-full transition-all flex items-center justify-center gap-1.5 ${
                activeScenario === 'ai-faq'
                  ? 'bg-[#FFE01B] text-[#241C15] border border-[#241C15]'
                  : 'text-[#241C15]/70 hover:text-[#241C15]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Sales Agent</span>
            </button>
          </div>

          {/* Mailchimp Signature White & Yellow Bordered Showcase Frame */}
          <div className="bg-[#FFFFFF] border-2 border-[#241C15] rounded-3xl p-5 sm:p-8 shadow-mc-hard-lg">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#241C15]/15 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E04838] border border-[#241C15]" />
                <span className="w-3 h-3 rounded-full bg-[#FFE01B] border border-[#241C15]" />
                <span className="w-3 h-3 rounded-full bg-[#008444] border border-[#241C15]" />
                <span className="text-xs font-mono font-bold text-[#241C15]/70 ml-2">
                  live_flow_preview: {activeScenario}
                </span>
              </div>
              
              <div className="inline-flex items-center gap-1.5 bg-[#FBEEDB] text-[#241C15] px-3 py-1 rounded-full text-xs font-bold border border-[#241C15]/20">
                <span className="w-2 h-2 rounded-full bg-[#008444] animate-pulse" />
                <span>Simulated Latency: 0.8s</span>
              </div>
            </div>

            {/* Split Screen Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column: Social Trigger */}
              <div className="bg-[#F6F6F4] rounded-2xl p-5 border border-[#241C15]/15 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-[#241C15] flex items-center gap-1.5">
                      <Instagram className="w-4 h-4 text-[#E04838]" />
                      1. Social Trigger Event
                    </span>
                    <span className="text-[11px] bg-[#FFE01B] text-[#241C15] border border-[#241C15] px-2 py-0.5 rounded-full font-bold">
                      Active Trigger
                    </span>
                  </div>

                  {activeScenario === 'comment' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E04838] text-white flex items-center justify-center font-bold text-xs border border-[#241C15]">
                          ED
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#241C15]">emma.davis</p>
                          <p className="text-xs text-[#241C15]/70">Commented on Reel: "Fall Drop Launch"</p>
                        </div>
                      </div>

                      <div className="bg-[#FFFFFF] rounded-xl p-3 border border-[#241C15]/20 text-sm shadow-sm">
                        <p className="text-[#241C15] font-medium">"Love this jacket! What is the price and how do I buy? 🔥"</p>
                      </div>

                      <div className="pl-4 border-l-2 border-[#241C15] mt-3 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-[#241C15] font-bold">
                          <img src={chimpLogo} alt="ChimpChat" className="w-4 h-4 rounded-full border border-[#241C15]" />
                          <span>ChimpChat Public Auto-Reply (0.6s):</span>
                        </div>
                        <p className="text-xs text-[#241C15]/80">
                          "Hey Emma! Sent the direct link & 20% discount code to your DMs! Check your requests 📥✨"
                        </p>
                      </div>
                    </div>
                  )}

                  {activeScenario === 'story' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#007C89] text-white flex items-center justify-center font-bold text-xs border border-[#241C15]">
                          AM
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#241C15]">alex.miller</p>
                          <p className="text-xs text-[#241C15]/70">Replied to your Instagram Story</p>
                        </div>
                      </div>

                      <div className="bg-[#FFFFFF] rounded-xl p-3 border border-[#241C15]/20 text-sm shadow-sm">
                        <p className="text-[#241C15] font-medium">"LINK"</p>
                      </div>

                      <div className="pl-4 border-l-2 border-[#241C15] mt-3 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-[#241C15] font-bold">
                          <Zap className="w-3.5 h-3.5 text-[#241C15]" />
                          <span>Trigger Detected: Keyword "LINK"</span>
                        </div>
                        <p className="text-xs text-[#241C15]/80">
                          Instantly routed to VIP Discount Automation Pipeline.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeScenario === 'ai-faq' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#008444] text-white flex items-center justify-center font-bold text-xs border border-[#241C15]">
                          DT
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#241C15]">david_turner</p>
                          <p className="text-xs text-[#241C15]/70">Sent a Direct Message</p>
                        </div>
                      </div>

                      <div className="bg-[#FFFFFF] rounded-xl p-3 border border-[#241C15]/20 text-sm shadow-sm">
                        <p className="text-[#241C15] font-medium">"Do you ship internationally to Canada, and how long does it take?"</p>
                      </div>

                      <div className="pl-4 border-l-2 border-[#241C15] mt-3 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-[#241C15] font-bold">
                          <Sparkles className="w-3.5 h-3.5 text-[#007C89]" />
                          <span>AI Agent Analysis:</span>
                        </div>
                        <p className="text-xs text-[#241C15]/80">
                          Intent: Shipping FAQ • Context: Canadian DHL Orders.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-[#241C15]/10 flex items-center justify-between text-xs text-[#241C15]/70 font-semibold">
                  <span>Engine: ChimpChat Social AI</span>
                  <span className="text-[#008444]">Connected 🟢</span>
                </div>
              </div>

              {/* Right Column: Automated DM Flow */}
              <div className="bg-[#FFFFFF] rounded-2xl p-5 border-2 border-[#241C15] flex flex-col justify-between shadow-mc-hard-sm">
                <div>
                  {/* Chat Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#241C15]/10 mb-4">
                    <div className="flex items-center gap-2">
                      <img src={chimpLogo} alt="Mascot" className="w-7 h-7 rounded-full border border-[#241C15]" />
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-[#241C15]">yourbrand.official</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#008444]" />
                        </div>
                        <span className="text-[10px] text-[#241C15]/60 font-medium">Automated by ChimpChat</span>
                      </div>
                    </div>
                    <span className="text-xs text-[#241C15] font-bold bg-[#FFE01B] px-2 py-0.5 rounded-full border border-[#241C15]">
                      2s response
                    </span>
                  </div>

                  {/* Message Stream */}
                  <div className="space-y-3 min-h-[170px]">
                    {step >= 1 && (
                      <div className="flex items-start gap-2">
                        <img src={chimpLogo} alt="" className="w-6 h-6 rounded-full mt-1 flex-shrink-0 border border-[#241C15]" />
                        <div className="bg-[#F6F6F4] rounded-2xl rounded-tl-sm p-3 text-xs text-[#241C15] border border-[#241C15]/10 max-w-[85%] leading-relaxed font-medium">
                          {activeScenario === 'comment' && "Hey Emma! 👋 Saw your comment on our new drop! Here is your private 20% discount code:"}
                          {activeScenario === 'story' && "Hey Alex! 🚀 Here is the exclusive VIP link you requested from our story:"}
                          {activeScenario === 'ai-faq' && "Hello David! 👋 Yes, we ship to Canada via DHL Express! Standard transit time is 3–5 business days."}
                        </div>
                      </div>
                    )}

                    {step >= 2 && (
                      <div className="ml-8 bg-[#FBEEDB] border border-[#241C15] rounded-2xl p-3 max-w-[85%] shadow-sm space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ShoppingBag className="w-4 h-4 text-[#241C15]" />
                            <span className="text-xs font-bold text-[#241C15]">Cyber Utility Jacket</span>
                          </div>
                          <span className="text-xs font-black text-[#241C15]">$79.20</span>
                        </div>
                        <p className="text-[11px] text-[#241C15]/80">Coupon applied: <span className="font-mono bg-[#FFFFFF] px-1 rounded border border-[#241C15]/20 font-bold">CHIMP20</span> (Save $19.80)</p>
                        <button className="w-full py-2 mc-btn-primary text-xs font-bold shadow-sm flex items-center justify-center gap-1.5">
                          <span>Complete Checkout Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {isTyping && (
                      <div className="ml-8 inline-flex items-center gap-1 bg-[#F6F6F4] px-3 py-1.5 rounded-full border border-[#241C15]/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#241C15] animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#241C15] animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#241C15] animate-bounce [animation-delay:0.4s]" />
                      </div>
                    )}

                    {step >= 3 && (
                      <div className="flex justify-end">
                        <div className="bg-[#FFE01B] text-[#241C15] border border-[#241C15] font-bold text-xs px-3.5 py-2 rounded-2xl rounded-tr-sm flex items-center gap-1 shadow-sm">
                          <span>Just placed the order! Thanks a lot 🙏</span>
                          <Heart className="w-3.5 h-3.5 fill-[#E04838] text-[#E04838]" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Conversion Impact Tag */}
                <div className="mt-4 pt-3 border-t border-[#241C15]/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[#008444] font-bold">
                    <TrendingUp className="w-4 h-4" />
                    <span>+$79.20 Revenue Recorded</span>
                  </div>
                  <span className="text-[11px] text-[#241C15]/60">Zero manual effort</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Mailchimp Metric Cards Grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="mc-card p-5 text-center">
            <p className="font-mc-serif text-3xl sm:text-4xl font-bold text-[#241C15]">2.1s</p>
            <p className="text-xs font-semibold text-[#241C15]/70 mt-1">Average Response Time</p>
          </div>
          <div className="mc-card p-5 text-center">
            <p className="font-mc-serif text-3xl sm:text-4xl font-bold text-[#241C15]">150M+</p>
            <p className="text-xs font-semibold text-[#241C15]/70 mt-1">Social DMs Automated</p>
          </div>
          <div className="mc-card p-5 text-center">
            <p className="font-mc-serif text-3xl sm:text-4xl font-bold text-[#241C15]">3.4x</p>
            <p className="text-xs font-semibold text-[#241C15]/70 mt-1">Higher Conversion Rate</p>
          </div>
          <div className="mc-card p-5 text-center">
            <p className="font-mc-serif text-3xl sm:text-4xl font-bold text-[#241C15]">99.8%</p>
            <p className="text-xs font-semibold text-[#241C15]/70 mt-1">Customer Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
}
