import { useState } from 'react';
import chimpLogo from '../assets/chimpchat-logo.jpg';
import heroPhoto from '../assets/hero-founder.jpg';
import { 
  ArrowRight, 
  Sparkles, 
  Star, 
  Heart,
  TrendingUp,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Clock,
  CheckCircle,
  ExternalLink,
  Shield,
  Layers
} from 'lucide-react';

type FlowType = 'reel-to-sale' | 'whatsapp-support' | 'twitter-lead';

export default function Hero() {
  const [activeFlow, setActiveFlow] = useState<FlowType>('reel-to-sale');

  return (
    <section id="product" className="relative pt-8 pb-20 md:pt-14 md:pb-28 bg-[#F6F6F4] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mailchimp Signature Split Layout: Left Copy, Right Authentic Editorial Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#241C15] text-xs font-bold text-[#241C15] shadow-mc-hard-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#008444] animate-pulse" />
              <span>ChimpChat AI 2.0 is live</span>
              <span className="text-[#241C15]/40">•</span>
              <span className="underline decoration-[#FFE01B] decoration-2">Social Commerce Engine</span>
              <ArrowRight className="w-3 h-3 text-[#241C15]" />
            </div>

            {/* Mailchimp Signature Editorial Serif Heading */}
            <h1 className="font-mc-serif text-4xl sm:text-6xl lg:text-[68px] font-normal text-[#241C15] leading-[1.08] tracking-tight">
              Turn social conversations into<br className="hidden sm:inline" />
              {' '}revenue <em className="italic font-normal underline decoration-[#FFE01B] decoration-[6px] underline-offset-8">that connects</em>
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-lg sm:text-xl text-[#241C15]/80 max-w-xl leading-relaxed font-normal">
              Never lose another customer to a slow reply. ChimpChat automatically answers inquiries in seconds, turns post comments into instant checkouts, and scales your business 24/7.
            </p>

            {/* The 4 Supported Platforms Badge Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#241C15]/60 mr-1">
                Built For:
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#241C15]/20 text-xs font-bold text-[#241C15] shadow-xs">
                <Instagram className="w-3.5 h-3.5 text-[#E04838]" />
                Instagram
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#241C15]/20 text-xs font-bold text-[#241C15] shadow-xs">
                <Facebook className="w-3.5 h-3.5 text-[#007C89]" />
                Facebook
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#241C15]/20 text-xs font-bold text-[#241C15] shadow-xs">
                <MessageCircle className="w-3.5 h-3.5 text-[#008444]" />
                WhatsApp
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#241C15]/20 text-xs font-bold text-[#241C15] shadow-xs">
                <Twitter className="w-3.5 h-3.5 text-[#241C15]" />
                Twitter (X)
              </span>
            </div>

            {/* Mailchimp Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
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

            {/* Mailchimp Social Proof Rating Block */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-[#241C15]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#FFE01B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFE01B] text-[#241C15]" />
                  ))}
                </div>
                <span className="font-bold text-sm ml-1">4.9 / 5</span>
              </div>
              <span className="text-[#241C15]/70">Based on <b>12,000+</b> reviews across:</span>
              <div className="flex items-center gap-4 font-bold text-[#241C15]/80">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#E04838]" /> Capterra
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#007C89]" /> TrustRadius
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#E04838]" /> G2
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Mailchimp Photo Card with Floating Stickers */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Photo Frame */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#241C15] shadow-mc-hard-lg bg-[#FFFFFF] group">
              <img 
                src={heroPhoto} 
                alt="Joyful boutique founder Elena Vance checking social orders on ChimpChat" 
                className="w-full h-[440px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Photo Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#241C15] p-3 rounded-2xl shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img src={chimpLogo} alt="" className="w-7 h-7 rounded-full border border-[#241C15]" />
                  <div>
                    <p className="text-xs font-bold text-[#241C15]">Elena Vance • Founder, Studio Sol</p>
                    <p className="text-[10px] text-[#241C15]/70">Automating 4,500+ monthly Instagram inquiries & sales</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-[#FFE01B] text-[#241C15] border border-[#241C15] px-2 py-0.5 rounded-full">
                  +240% Sales
                </span>
              </div>
            </div>

            {/* Floating Mailchimp Sticker 1: Comment Trigger (Top Left) */}
            <div className="absolute -top-5 -left-4 sm:-left-6 bg-[#FFFFFF] border-2 border-[#241C15] rounded-2xl p-3 shadow-mc-hard animate-float hidden sm:flex items-center gap-2.5 max-w-[240px]">
              <div className="w-8 h-8 rounded-xl bg-[#E04838] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-[#241C15]/60">Reel Comment</p>
                <p className="text-xs font-bold text-[#241C15] truncate">"Send me the link! 😍"</p>
              </div>
            </div>

            {/* Floating Mailchimp Sticker 2: Revenue Recorded (Right Bottom) */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#FFE01B] border-2 border-[#241C15] rounded-2xl p-3 shadow-mc-hard hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#241C15] text-[#FFE01B] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-[#241C15]">+$79.20 Captured</p>
                <p className="text-[10px] font-bold text-[#241C15]/80">Auto-DM Checkout in 0.8s</p>
              </div>
            </div>

          </div>

        </div>

        {/* HUMAN-DESIGNED PRODUCT SHOWCASE: Visual Automation Journey & Live Smartphone Output */}
        <div className="mt-24 pt-16 border-t border-[#241C15]/15 max-w-6xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FBEEDB] border border-[#241C15]/15 text-xs font-bold text-[#241C15]">
              <Layers className="w-3.5 h-3.5 text-[#007C89]" />
              <span>VISUAL SOCIAL AUTOMATION</span>
            </div>

            <h2 className="font-mc-serif text-3xl sm:text-5xl font-normal text-[#241C15] leading-tight">
              Automate customer journeys without losing the <em className="italic underline decoration-[#FFE01B] decoration-4 underline-offset-4">personal touch</em>
            </h2>

            <p className="text-base text-[#241C15]/75 font-normal max-w-2xl mx-auto">
              Build no-code flows that turn comments, story mentions, tweets, and DMs into instant conversions across Instagram, Facebook, WhatsApp, and Twitter (X).
            </p>
          </div>

          {/* Interactive Flow Presets Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveFlow('reel-to-sale')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 ${
                activeFlow === 'reel-to-sale'
                  ? 'bg-[#FFE01B] text-[#241C15] border-[#241C15] shadow-mc-hard-sm'
                  : 'bg-[#FFFFFF] text-[#241C15]/70 border-[#241C15]/20 hover:border-[#241C15] hover:text-[#241C15]'
              }`}
            >
              <Instagram className="w-4 h-4 text-[#E04838]" />
              <span>Instagram & Facebook: Reel & Post Comments</span>
            </button>

            <button
              onClick={() => setActiveFlow('whatsapp-support')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 ${
                activeFlow === 'whatsapp-support'
                  ? 'bg-[#FFE01B] text-[#241C15] border-[#241C15] shadow-mc-hard-sm'
                  : 'bg-[#FFFFFF] text-[#241C15]/70 border-[#241C15]/20 hover:border-[#241C15] hover:text-[#241C15]'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-[#008444]" />
              <span>WhatsApp Business: 2-Way Catalog & AI Support</span>
            </button>

            <button
              onClick={() => setActiveFlow('twitter-lead')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 ${
                activeFlow === 'twitter-lead'
                  ? 'bg-[#FFE01B] text-[#241C15] border-[#241C15] shadow-mc-hard-sm'
                  : 'bg-[#FFFFFF] text-[#241C15]/70 border-[#241C15]/20 hover:border-[#241C15] hover:text-[#241C15]'
              }`}
            >
              <Twitter className="w-4 h-4 text-[#241C15]" />
              <span>Twitter (X): Mentions & Lead Magnets</span>
            </button>
          </div>

          {/* Main Visual Showcase: Left Flow Builder Canvas, Right Mobile Phone Preview */}
          <div className="bg-[#FFFFFF] border-2 border-[#241C15] rounded-3xl p-6 sm:p-10 shadow-mc-hard-lg">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (7 cols): The Visual Automation Journey Canvas */}
              <div className="lg:col-span-7 space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#241C15]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#008444]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#241C15]/70">
                      Visual Workflow Editor
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#241C15]/60 bg-[#F6F6F4] px-2.5 py-0.5 rounded-full border border-[#241C15]/10">
                    Auto-trigger: &lt; 2 seconds
                  </span>
                </div>

                {/* Step 1: Trigger Node */}
                <div className="bg-[#F6F6F4] p-4 sm:p-5 rounded-2xl border-2 border-[#241C15] shadow-sm relative group hover:border-[#007C89] transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#E04838] uppercase tracking-wider flex items-center gap-1.5">
                      {activeFlow === 'reel-to-sale' && <Instagram className="w-3.5 h-3.5" />}
                      {activeFlow === 'whatsapp-support' && <MessageCircle className="w-3.5 h-3.5 text-[#008444]" />}
                      {activeFlow === 'twitter-lead' && <Twitter className="w-3.5 h-3.5 text-[#241C15]" />}
                      Step 1 • Audience Trigger
                    </span>
                    <span className="text-[10px] font-bold bg-[#FFE01B] text-[#241C15] border border-[#241C15] px-2 py-0.5 rounded-full">
                      Live Trigger
                    </span>
                  </div>

                  {activeFlow === 'reel-to-sale' && (
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#241C15]">When someone comments on your Instagram Reel or Facebook Post</p>
                      <p className="text-xs text-[#241C15]/70 font-mono bg-[#FFFFFF] p-2 rounded-lg border border-[#241C15]/10">
                        Condition: Comment contains <span className="font-bold text-[#241C15]">"PRICE"</span>, <span className="font-bold text-[#241C15]">"BUY"</span>, or <span className="font-bold text-[#241C15]">"LINK"</span>
                      </p>
                    </div>
                  )}

                  {activeFlow === 'whatsapp-support' && (
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#241C15]">When a customer messages your WhatsApp Business number</p>
                      <p className="text-xs text-[#241C15]/70 font-mono bg-[#FFFFFF] p-2 rounded-lg border border-[#241C15]/10">
                        AI Intent classifier: <span className="font-bold text-[#241C15]">Shipping & Returns FAQ</span>
                      </p>
                    </div>
                  )}

                  {activeFlow === 'twitter-lead' && (
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#241C15]">When someone replies or mentions your brand on Twitter (X)</p>
                      <p className="text-xs text-[#241C15]/70 font-mono bg-[#FFFFFF] p-2 rounded-lg border border-[#241C15]/10">
                        Keyword detected: <span className="font-bold text-[#241C15]">"GUIDE"</span>, <span className="font-bold text-[#241C15]">"PLAYBOOK"</span>, or <span className="font-bold text-[#241C15]">"FREE"</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-6 bg-[#241C15]/30 relative flex items-center justify-center">
                    <span className="absolute w-2 h-2 rounded-full bg-[#FFE01B] border border-[#241C15]" />
                  </div>
                </div>

                {/* Step 2: Intelligent Action Node */}
                <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border-2 border-[#241C15] shadow-mc-hard-sm relative hover:border-[#008444] transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#007C89] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Step 2 • ChimpChat AI Response
                    </span>
                    <span className="text-[10px] font-bold bg-[#008444] text-white px-2 py-0.5 rounded-full">
                      Instant Delivery
                    </span>
                  </div>

                  {activeFlow === 'reel-to-sale' && (
                    <div className="space-y-1.5">
                      <p className="text-sm font-bold text-[#241C15]">Send direct Instagram/Facebook message with personalized checkout card</p>
                      <p className="text-xs text-[#241C15]/70">
                        Auto-applies 20% coupon code <span className="font-mono font-bold text-[#241C15]">CHIMP20</span> and syncs live stock from your Shopify catalog.
                      </p>
                    </div>
                  )}

                  {activeFlow === 'whatsapp-support' && (
                    <div className="space-y-1.5">
                      <p className="text-sm font-bold text-[#241C15]">Answer naturally on WhatsApp using your custom store knowledge base</p>
                      <p className="text-xs text-[#241C15]/70">
                        Resolves 85% of tier-1 customer inquiries (shipping times, sizing, tracking) without human intervention.
                      </p>
                    </div>
                  )}

                  {activeFlow === 'twitter-lead' && (
                    <div className="space-y-1.5">
                      <p className="text-sm font-bold text-[#241C15]">Instant Twitter (X) Direct Message delivery + lead capture</p>
                      <p className="text-xs text-[#241C15]/70">
                        Sends direct download link in X DM and bi-directionally pushes subscriber to your Klaviyo list.
                      </p>
                    </div>
                  )}
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-6 bg-[#241C15]/30 relative flex items-center justify-center">
                    <span className="absolute w-2 h-2 rounded-full bg-[#FFE01B] border border-[#241C15]" />
                  </div>
                </div>

                {/* Step 3: Business Outcome Node */}
                <div className="bg-[#FBEEDB] p-4 sm:p-5 rounded-2xl border-2 border-[#241C15] shadow-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-[#008444] uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" /> Step 3 • Tracked Growth Outcome
                    </span>
                    <span className="text-xs font-black font-mc-serif text-[#241C15]">
                      {activeFlow === 'reel-to-sale' && "+$79.20 Revenue"}
                      {activeFlow === 'whatsapp-support' && "Solved in 1.4s"}
                      {activeFlow === 'twitter-lead' && "+1 New Lead"}
                    </span>
                  </div>

                  <p className="text-xs text-[#241C15]/80 font-medium">
                    {activeFlow === 'reel-to-sale' && "Customer completes 1-click checkout on your store. Order attribution recorded."}
                    {activeFlow === 'whatsapp-support' && "Customer inquiry resolved happily without support ticket backlog."}
                    {activeFlow === 'twitter-lead' && "Email verified and welcomed into your onboarding email sequence."}
                  </p>
                </div>

              </div>

              {/* Right Column (5 cols): Photorealistic Mobile Screen */}
              <div className="lg:col-span-5 flex justify-center">
                
                {/* Modern Smartphone Frame */}
                <div className="w-full max-w-[310px] sm:max-w-[330px] rounded-[36px] bg-[#FFFFFF] border-[3px] border-[#241C15] shadow-mc-hard-lg p-3.5 relative overflow-hidden">
                  
                  {/* Smartphone Top Speaker & Camera Island */}
                  <div className="flex justify-center mb-3">
                    <div className="w-20 h-4 bg-[#241C15] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#382C22] ml-auto mr-2" />
                    </div>
                  </div>

                  {/* Channel Direct Message Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#241C15]/10 mb-3 px-1">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <img src={chimpLogo} alt="" className="w-8 h-8 rounded-full border border-[#241C15] object-cover" />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#008444] border-2 border-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="text-xs font-bold text-[#241C15]">yourbrand</p>
                          <span className="w-3 h-3 rounded-full bg-[#007C89] text-white flex items-center justify-center text-[8px] font-bold">✓</span>
                        </div>
                        <p className="text-[10px] text-[#241C15]/60">Active now</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-[#FFE01B] text-[#241C15] border border-[#241C15] px-2 py-0.5 rounded-full flex items-center gap-1">
                      {activeFlow === 'reel-to-sale' && (
                        <>
                          <Instagram className="w-3 h-3" /> Instagram / FB
                        </>
                      )}
                      {activeFlow === 'whatsapp-support' && (
                        <>
                          <MessageCircle className="w-3 h-3 text-[#008444]" /> WhatsApp
                        </>
                      )}
                      {activeFlow === 'twitter-lead' && (
                        <>
                          <Twitter className="w-3 h-3 text-[#241C15]" /> Twitter (X)
                        </>
                      )}
                    </span>
                  </div>

                  {/* Conversation Feed */}
                  <div className="space-y-3 min-h-[280px] text-xs">
                    
                    {/* Context Tag */}
                    <div className="text-center">
                      <span className="text-[9px] font-semibold text-[#241C15]/50 uppercase tracking-wider bg-[#F6F6F4] px-2 py-1 rounded-full">
                        {activeFlow === 'reel-to-sale' && "In reply to your Reel"}
                        {activeFlow === 'whatsapp-support' && "WhatsApp Customer Chat"}
                        {activeFlow === 'twitter-lead' && "Tweet Reply / Mention"}
                      </span>
                    </div>

                    {/* Customer Message Bubble (Right) */}
                    <div className="flex justify-end">
                      <div className="bg-[#241C15] text-white px-3.5 py-2 rounded-2xl rounded-tr-sm max-w-[85%] leading-relaxed font-medium">
                        {activeFlow === 'reel-to-sale' && "Love this jacket! What is the price and how do I buy? 🔥"}
                        {activeFlow === 'whatsapp-support' && "Hey! Do you ship to Canada and how long does it take?"}
                        {activeFlow === 'twitter-lead' && "@yourbrand send me the free 2026 Social Playbook! 🙌"}
                      </div>
                    </div>

                    {/* Brand / ChimpChat Automated Reply (Left) */}
                    <div className="flex items-start gap-1.5">
                      <img src={chimpLogo} alt="" className="w-5 h-5 rounded-full border border-[#241C15] flex-shrink-0 mt-1" />
                      <div className="bg-[#F6F6F4] text-[#241C15] p-3 rounded-2xl rounded-tl-sm border border-[#241C15]/10 max-w-[88%] leading-relaxed space-y-2">
                        
                        {activeFlow === 'reel-to-sale' && (
                          <>
                            <p className="font-medium">
                              Hey Emma! 👋 Saw your comment on our new drop. Here is your private 20% discount code + direct checkout link:
                            </p>
                            
                            {/* Product Card Inside Instagram DM */}
                            <div className="bg-[#FFFFFF] border border-[#241C15]/20 rounded-xl p-2.5 space-y-1.5 shadow-sm">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-[#241C15] text-[11px]">Cyber Utility Jacket</span>
                                <span className="font-bold text-[#241C15] text-xs">$79.20</span>
                              </div>
                              <p className="text-[10px] text-[#241C15]/70">
                                Coupon <span className="font-mono font-bold bg-[#FFE01B] px-1 rounded text-[#241C15]">CHIMP20</span> applied
                              </p>
                              <a
                                href="#checkout"
                                className="w-full py-1.5 bg-[#241C15] text-[#FFE01B] text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 hover:bg-[#382C22] transition-colors"
                              >
                                <span>Shop Now on Store</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </>
                        )}

                        {activeFlow === 'whatsapp-support' && (
                          <>
                            <p className="font-medium">
                              Hello David! 👋 Yes, we ship to Canada via DHL Express! Standard delivery is 3–5 business days, with full tracking included.
                            </p>
                            <div className="bg-[#FFFFFF] border border-[#241C15]/15 rounded-lg p-2 text-[10px] text-[#241C15]/80 space-y-1">
                              <div className="flex items-center gap-1 text-[#008444] font-bold">
                                <CheckCircle className="w-3 h-3" /> Free shipping on orders over $60
                              </div>
                            </div>
                          </>
                        )}

                        {activeFlow === 'twitter-lead' && (
                          <>
                            <p className="font-medium">
                              Hey Alex! 🚀 Here is the exclusive 2026 Growth Playbook you requested directly in your X DMs:
                            </p>
                            <div className="bg-[#FFFFFF] border border-[#241C15]/20 rounded-xl p-2.5 space-y-1.5 shadow-sm">
                              <div className="flex items-center gap-2">
                                <span className="text-base">📄</span>
                                <div>
                                  <p className="font-bold text-[#241C15] text-[11px]">Social_Growth_Playbook.pdf</p>
                                  <p className="text-[10px] text-[#241C15]/60">4.2 MB • Free Access</p>
                                </div>
                              </div>
                              <button className="w-full py-1.5 bg-[#FFE01B] text-[#241C15] border border-[#241C15] text-[11px] font-bold rounded-lg flex items-center justify-center gap-1">
                                <span>Download Free Guide</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </>
                        )}

                      </div>
                    </div>

                    {/* Customer Reaction Confirmation (Right) */}
                    <div className="flex justify-end">
                      <div className="bg-[#FFE01B] border border-[#241C15] text-[#241C15] font-bold px-3 py-1.5 rounded-full text-[11px] flex items-center gap-1 shadow-sm">
                        {activeFlow === 'reel-to-sale' && (
                          <>
                            <span>Just ordered! Thank you 🙏</span>
                            <Heart className="w-3 h-3 fill-[#E04838] text-[#E04838]" />
                          </>
                        )}
                        {activeFlow === 'whatsapp-support' && (
                          <>
                            <span>Order placed on WhatsApp! 🚀</span>
                            <CheckCircle className="w-3 h-3 text-[#008444]" />
                          </>
                        )}
                        {activeFlow === 'twitter-lead' && (
                          <>
                            <span>Saved! You guys are fast ⚡</span>
                            <Sparkles className="w-3 h-3 text-[#241C15]" />
                          </>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Smartphone Bottom Home Bar */}
                  <div className="flex justify-center pt-3 pb-1 border-t border-[#241C15]/10 mt-3">
                    <div className="w-28 h-1 bg-[#241C15]/40 rounded-full" />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Three Mailchimp-Style Bottom Value Pillars (Replaces Generic Isolated Number Boxes) */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#241C15]/15 shadow-sm text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFE01B] border border-[#241C15] flex items-center justify-center text-[#241C15] flex-shrink-0 shadow-mc-hard-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#241C15] text-sm">2-Second Response Time</h4>
                <p className="text-xs text-[#241C15]/70 mt-1 leading-relaxed">
                  Respond while customer intent is hot. Turn impulse comments into immediate checkouts before they leave your page.
                </p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#241C15]/15 shadow-sm text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#007C89] border border-[#241C15] flex items-center justify-center text-white flex-shrink-0 shadow-mc-hard-sm">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#241C15] text-sm">3.4x Higher Conversion</h4>
                <p className="text-xs text-[#241C15]/70 mt-1 leading-relaxed">
                  Direct links and coupons sent in DMs generate up to 88% open rates and triple traditional website conversion.
                </p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#241C15]/15 shadow-sm text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#008444] border border-[#241C15] flex items-center justify-center text-white flex-shrink-0 shadow-mc-hard-sm">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#241C15] text-sm">Official Meta & X API Partner</h4>
                <p className="text-xs text-[#241C15]/70 mt-1 leading-relaxed">
                  Built exclusively on official Meta Graph & X (Twitter) APIs. No scrapers, 100% compliant with platform terms of service.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
