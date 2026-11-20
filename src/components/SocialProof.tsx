import artisanPhoto from '../assets/story-artisan.jpg';
import { 
  Instagram, 
  Facebook,
  Twitter,
  MessageCircle,
  ShieldCheck, 
  Check, 
  ArrowRight,
  Sparkles,
  Inbox,
  Quote
} from 'lucide-react';

export default function SocialProof() {
  const supportedChannels = [
    {
      name: 'Instagram',
      icon: Instagram,
      iconColor: 'text-[#E04838]',
      badge: 'Meta Official API',
      features: ['Reel comment to instant DM', 'Story mention auto-reply', 'Live DM shopping & coupons', 'Zero shadowbans guarantee']
    },
    {
      name: 'Facebook',
      icon: Facebook,
      iconColor: 'text-[#007C89]',
      badge: 'Meta Graph API',
      features: ['Page post comment auto-DM', 'Click-to-Messenger ad routing', '24/7 automated FAQ resolution', 'Order status updates']
    },
    {
      name: 'WhatsApp Business',
      icon: MessageCircle,
      iconColor: 'text-[#008444]',
      badge: 'Cloud API',
      features: ['Interactive product catalogs', '2-way AI customer support', 'Targeted VIP broadcasts', 'Instant 1-tap reorders']
    },
    {
      name: 'Twitter / X',
      icon: Twitter,
      iconColor: 'text-[#241C15]',
      badge: 'X Official API',
      features: ['Tweet reply to instant DM', '@Mention automated rewards', 'Lead magnet PDF delivery', 'Direct Message conversational sales']
    }
  ];

  const superpowers = [
    {
      title: 'Instagram & Facebook Comment-to-DM',
      category: 'Lead Generation & Sales',
      icon: Instagram,
      iconBg: 'bg-[#FFE01B]',
      iconColor: 'text-[#241C15]',
      stat: '3.4x Higher Conversions',
      description: 'Stop telling followers to "check the link in bio". Automatically slide directly into their DMs with personal store links and discounts the second they comment on your Instagram Reels or Facebook posts.'
    },
    {
      name: 'Twitter (X) Mentions & Auto-DM Leads',
      title: 'Twitter (X) Mentions & Auto-DM',
      category: 'Viral Audience Growth',
      icon: Twitter,
      iconBg: 'bg-[#241C15]',
      iconColor: 'text-[#FFE01B]',
      stat: '88% Message Open Rate',
      description: 'Reward fans who reply to your tweets or tag your handle on X with immediate Direct Message delivery of coupon codes, exclusive guides, or product launch alerts.'
    },
    {
      title: 'WhatsApp Business Conversational Commerce',
      category: 'Direct Customer Revenue',
      icon: MessageCircle,
      iconBg: 'bg-[#008444]',
      iconColor: 'text-white',
      stat: '+$79 Avg Order Value',
      description: 'Sync your live store catalog into WhatsApp. Let customers browse product carousels, view sizing, and complete 1-tap checkouts without leaving the conversation.'
    },
    {
      title: 'Unified Inbox Across All 4 Channels',
      category: 'Team Collaboration & AI Support',
      icon: Inbox,
      iconBg: 'bg-[#007C89]',
      iconColor: 'text-white',
      stat: '85% Faster Support',
      description: 'Manage every Instagram DM, WhatsApp message, Facebook Messenger chat, and Twitter (X) conversation in one centralized workspace with intelligent AI assistance.'
    }
  ];

  const integrationLogos = [
    { name: 'Shopify', type: 'E-Commerce Sync', badge: '1-Click App' },
    { name: 'Stripe', type: 'In-Chat Payments', badge: 'Verified' },
    { name: 'Klaviyo', type: 'Email & SMS Sync', badge: 'Native' },
    { name: 'HubSpot', type: 'CRM Pipeline', badge: 'Live Sync' },
    { name: 'Meta & X APIs', type: 'Official TOS Partner', badge: '100% Compliant' },
    { name: 'Zapier & Make', type: '7,000+ Custom Apps', badge: 'Webhooks' },
  ];

  return (
    <section id="solutions" className="relative py-20 bg-[#FFFFFF] border-t border-b border-[#241C15]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Meta & X Partner Trust Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-12 border-b border-[#241C15]/10 text-center sm:text-left">
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <div className="w-10 h-10 rounded-xl bg-[#FFE01B] border-2 border-[#241C15] flex items-center justify-center text-[#241C15] shadow-mc-hard-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#241C15]">Official Meta Graph & Twitter (X) API Partner</p>
              <p className="text-[11px] text-[#241C15]/70">Zero shadowbans • Built strictly to Meta, Instagram & X developer terms of service</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-[#241C15]/80 mx-auto sm:mx-0">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#008444]" /> 12,000+ Active Brands
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#008444]" /> 150M+ Social DMs Automated
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#008444]" /> 99.98% Uptime SLA
            </span>
          </div>
        </div>

        {/* Section Header: The 4 Core Superpowers */}
        <div className="text-center max-w-3xl mx-auto mt-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FBEEDB] border border-[#241C15]/15 text-xs font-bold text-[#241C15]">
            <Sparkles className="w-3.5 h-3.5 text-[#007C89]" />
            <span>CORE AUTOMATION SUITE</span>
          </div>

          <h2 className="font-mc-serif text-3xl sm:text-5xl font-normal text-[#241C15] leading-tight">
            Everything your brand needs to turn social attention into <em className="italic underline decoration-[#FFE01B] decoration-4 underline-offset-4">paying customers</em>
          </h2>

          <p className="text-base sm:text-lg text-[#241C15]/75 leading-relaxed font-normal">
            Exclusively tailored for <b>Instagram, Facebook, WhatsApp, and Twitter (X)</b>. Four high-impact automation tools designed to generate revenue around the clock.
          </p>
        </div>

        {/* 4 Superpowers Grid (Clean Mailchimp Cards - No Repetitive Chat) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {superpowers.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F6F6F4] p-7 sm:p-8 rounded-3xl border-2 border-[#241C15] shadow-sm hover:shadow-mc-hard transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} border border-[#241C15] flex items-center justify-center ${item.iconColor} shadow-mc-hard-sm group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#241C15] bg-[#FFFFFF] border border-[#241C15]/20 px-3 py-1 rounded-full">
                      {item.stat}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#241C15]/50">
                      {item.category}
                    </span>
                    <h3 className="font-mc-serif text-2xl font-bold text-[#241C15] mt-0.5 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#241C15]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#241C15]/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#241C15] group-hover:underline">Explore this capability</span>
                  <ArrowRight className="w-4 h-4 text-[#241C15] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated 4 Supported Platforms Spotlight Grid */}
        <div className="mt-16 pt-12 border-t border-[#241C15]/10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="font-mc-serif text-2xl sm:text-3xl font-normal text-[#241C15]">
              Built exclusively for the <em className="italic underline decoration-[#FFE01B] decoration-4 underline-offset-4">Big 4 Social Channels</em>
            </h3>
            <p className="text-sm text-[#241C15]/75">
              100% official API integrations. We focus deeply on these four channels so your accounts remain secure, compliant, and lightning-fast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {supportedChannels.map((channel, idx) => {
              const ChannelIcon = channel.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] p-6 rounded-2xl border-2 border-[#241C15] shadow-mc-hard-sm hover:shadow-mc-hard transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F6F6F4] border border-[#241C15] flex items-center justify-center">
                        <ChannelIcon className={`w-5 h-5 ${channel.iconColor}`} />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFE01B] text-[#241C15] border border-[#241C15]">
                        {channel.badge}
                      </span>
                    </div>

                    <h4 className="font-mc-serif text-xl font-bold text-[#241C15] mb-3">
                      {channel.name}
                    </h4>

                    <ul className="space-y-2 text-xs text-[#241C15]/80">
                      {channel.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#008444] stroke-[3] mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#241C15]/10 text-[11px] font-bold text-[#007C89] flex items-center gap-1">
                    <span>Active 24/7 Automation</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real Customer Spotlight Story (Marcus Archer) */}
        <div className="mt-16 bg-[#FBEEDB] rounded-3xl p-6 sm:p-10 border-2 border-[#241C15] shadow-mc-hard-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Authentic Merchant Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-[#241C15] shadow-mc-hard">
                <img 
                  src={artisanPhoto} 
                  alt="Marcus Archer in his coffee roastery checking ChimpChat orders" 
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                />
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#FFE01B] border-2 border-[#241C15] px-3.5 py-1 rounded-full text-xs font-black text-[#241C15] shadow-mc-hard-sm flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Verified Brand Story</span>
              </div>
            </div>

            {/* Right: Big Editorial Quote & Metric */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 bg-[#FFFFFF] border border-[#241C15] px-3 py-1 rounded-full text-xs font-bold text-[#241C15]">
                <Quote className="w-3.5 h-3.5 text-[#007C89]" />
                <span>Customer Success Spotlight</span>
              </div>

              <blockquote className="font-mc-serif text-2xl sm:text-3xl text-[#241C15] font-normal leading-snug">
                "With ChimpChat, our Instagram DMs get answered in <em className="italic underline decoration-[#FFE01B] decoration-4 font-normal">under 2 seconds</em>. Our weekend coffee bean drops now sell out in minutes without answering the same question 50 times."
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#241C15]/15">
                <div>
                  <p className="font-bold text-[#241C15] text-sm">Marcus Archer</p>
                  <p className="text-xs text-[#241C15]/70">Founder, Archer Artisanal Roasters</p>
                </div>

                <div className="flex items-center gap-6">
                  <div>
                    <p className="font-mc-serif text-2xl font-bold text-[#241C15]">3.8x</p>
                    <p className="text-[10px] uppercase font-bold text-[#241C15]/60">Drop Conversion</p>
                  </div>
                  <div>
                    <p className="font-mc-serif text-2xl font-bold text-[#008444]">12 hrs</p>
                    <p className="text-[10px] uppercase font-bold text-[#241C15]/60">Saved / Week</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 1-Click Ecosystem Integrations Grid */}
        <div className="mt-20 pt-16 border-t border-[#241C15]/15">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="font-mc-serif text-2xl sm:text-4xl font-normal text-[#241C15]">
              Plugs into your existing stack in <em className="italic underline decoration-[#FFE01B] decoration-4 underline-offset-4">60 seconds</em>
            </h3>
            <p className="text-sm text-[#241C15]/75 font-normal">
              Connect your store, payments, and marketing tools with native 1-click integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrationLogos.map((item, index) => (
              <div
                key={index}
                className="bg-[#F6F6F4] p-5 rounded-2xl border border-[#241C15]/15 hover:border-[#241C15] transition-all flex items-center justify-between group shadow-sm hover:shadow-mc-hard-sm"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-[#241C15] group-hover:text-[#007C89] transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFFFFF] border border-[#241C15]/20 text-[#241C15]">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#241C15]/70">
                    {item.type}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#241C15]/20 flex items-center justify-center text-[#241C15] group-hover:bg-[#FFE01B] group-hover:border-[#241C15] transition-all flex-shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#241C15] hover:text-[#007C89] underline transition-colors"
            >
              <span>Explore all 100+ native social & e-commerce integrations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
