import { useState } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  ShoppingBag, 
  CreditCard, 
  Zap, 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  Store,
  Users
} from 'lucide-react';

interface IntegrationItem {
  name: string;
  category: 'channel' | 'ecommerce' | 'tool';
  badge: string;
  iconBg: string;
  description: string;
}

export default function SocialProof() {
  const [activeTab, setActiveTab] = useState<'all' | 'channels' | 'ecommerce' | 'agencies'>('all');

  const integrationsRow1: IntegrationItem[] = [
    { name: 'Instagram DM & Reels', category: 'channel', badge: 'Official API', iconBg: 'bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500', description: 'Auto-reply to stories, reels, & DMs' },
    { name: 'WhatsApp Business', category: 'channel', badge: 'Cloud API', iconBg: 'bg-emerald-600', description: 'Broadcasts & 2-way AI customer support' },
    { name: 'Shopify', category: 'ecommerce', badge: '1-Click Sync', iconBg: 'bg-lime-600', description: 'Real-time catalog sync & cart recovery' },
    { name: 'Facebook Messenger', category: 'channel', badge: 'Meta Verified', iconBg: 'bg-blue-600', description: 'Instant page comment-to-inbox routing' },
    { name: 'Stripe Payments', category: 'ecommerce', badge: 'Direct Checkout', iconBg: 'bg-indigo-600', description: 'In-chat 1-tap payment links' },
    { name: 'TikTok Messaging', category: 'channel', badge: 'Coming Soon', iconBg: 'bg-slate-900', description: 'Viral video comment lead generation' },
  ];

  const integrationsRow2: IntegrationItem[] = [
    { name: 'WooCommerce', category: 'ecommerce', badge: 'Plugin Ready', iconBg: 'bg-purple-700', description: 'Sync orders, coupons, & inventory' },
    { name: 'Zapier & Make', category: 'tool', badge: '5000+ Apps', iconBg: 'bg-amber-600', description: 'Connect webhooks & custom CRM flows' },
    { name: 'Klaviyo', category: 'tool', badge: 'SMS & Email', iconBg: 'bg-teal-700', description: 'Bi-directional subscriber list sync' },
    { name: 'HubSpot CRM', category: 'tool', badge: 'Lead Scoring', iconBg: 'bg-orange-600', description: 'Push qualified social leads to deals' },
    { name: 'Google Sheets', category: 'tool', badge: 'Auto-Export', iconBg: 'bg-emerald-700', description: 'Streamline lead capture spreadsheets' },
    { name: 'Meta Graph API', category: 'channel', badge: 'Tier-1 Security', iconBg: 'bg-blue-700', description: '100% compliant zero-ban architecture' },
  ];

  return (
    <section id="solutions" className="relative py-20 bg-brand-dark/90 border-t border-b border-brand-border/60 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-yellow/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-bold text-brand-yellow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECTED ECOSYSTEM & PLATFORMS</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Connects Directly to Where Your <span className="text-brand-yellow">Audience Buys</span>.
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            No messy webhooks or brittle workarounds. ChimpChat connects with your Meta accounts, store catalog, and CRM in under 60 seconds with enterprise-grade stability.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-brand-yellow text-black shadow-yellow-glow'
                  : 'glass-card text-slate-300 hover:text-white border border-brand-border'
              }`}
            >
              All Platforms
            </button>
            <button
              onClick={() => setActiveTab('channels')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'channels'
                  ? 'bg-brand-yellow text-black shadow-yellow-glow'
                  : 'glass-card text-slate-300 hover:text-white border border-brand-border'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Social & Messaging
            </button>
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'ecommerce'
                  ? 'bg-brand-yellow text-black shadow-yellow-glow'
                  : 'glass-card text-slate-300 hover:text-white border border-brand-border'
              }`}
            >
              <Store className="w-4 h-4" />
              E-Commerce Stores
            </button>
            <button
              onClick={() => setActiveTab('agencies')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'agencies'
                  ? 'bg-brand-yellow text-black shadow-yellow-glow'
                  : 'glass-card text-slate-300 hover:text-white border border-brand-border'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Agencies & Teams
            </button>
          </div>
        </div>

        {/* Infinite Marquee Ticker Track 1 (Left Scrolling) */}
        <div className="relative mt-12 overflow-hidden py-3">
          {/* Gradient Edge Masks for Smooth Fade */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...integrationsRow1, ...integrationsRow1].map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="w-72 glass-card p-4 rounded-2xl border border-white/5 hover:border-brand-yellow/40 transition-all group flex items-start gap-3.5 flex-shrink-0 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                  {item.category === 'channel' && <Instagram className="w-5 h-5" />}
                  {item.category === 'ecommerce' && <ShoppingBag className="w-5 h-5" />}
                  {item.category === 'tool' && <Zap className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-white truncate group-hover:text-brand-yellow transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-brand-surface border border-white/10 text-brand-yellow flex-shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-brand-muted line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Marquee Ticker Track 2 (Right Scrolling) */}
        <div className="relative overflow-hidden py-3">
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 w-max animate-marqueeReverse hover:[animation-play-state:paused]">
            {[...integrationsRow2, ...integrationsRow2].map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="w-72 glass-card p-4 rounded-2xl border border-white/5 hover:border-brand-yellow/40 transition-all group flex items-start gap-3.5 flex-shrink-0 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                  {item.category === 'channel' && <ShieldCheck className="w-5 h-5" />}
                  {item.category === 'ecommerce' && <CreditCard className="w-5 h-5" />}
                  {item.category === 'tool' && <Layers className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-white truncate group-hover:text-brand-yellow transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-brand-surface border border-white/10 text-brand-yellow flex-shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-brand-muted line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tailored Solutions Grid (D2C, Creators, Agencies) */}
        <div id="agencies" className="mt-16 pt-12 border-t border-brand-border/60">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Purpose-Built for Every Stage of <span className="text-brand-yellow">Social Growth</span>
            </h3>
            <p className="text-sm text-brand-muted mt-2 max-w-xl mx-auto">
              From individual creator launches to multi-brand agencies handling thousands of daily inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: D2C E-Commerce */}
            <div className="glass-card p-6 rounded-3xl border border-brand-border hover:border-brand-yellow/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow mb-5 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">E-Commerce & Retail Brands</h4>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  Turn viral product reels, outfit tags, and comments into instantaneous direct checkout links. Recover abandoned carts directly inside Instagram DMs.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>Real-time Shopify inventory lookup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>Automated discount codes on Reel comments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>Track direct ROI on every DM conversation</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-border/50 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400 font-mono">+38% Average Cart Recovery</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Creators & Coaches */}
            <div className="glass-card p-6 rounded-3xl border border-brand-border hover:border-brand-yellow/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow mb-5 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Creators, Coaches & Info-Products</h4>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  Scale your community without living in your DMs. Automatically deliver free PDFs, course sneak-peeks, and webinar invites when followers reply to stories.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>Story reply auto-responder with lead magnets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>AI qualification for 1-on-1 coaching calls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>Zero manual spreadsheet exporting</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-border/50 flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-yellow font-mono">10x Follower-to-Lead Rate</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Growth & Marketing Agencies */}
            <div className="glass-card p-6 rounded-3xl border border-brand-border hover:border-brand-yellow/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow mb-5 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Marketing & Social Agencies</h4>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  Deliver massive measurable client results. Manage 100+ social accounts under one master dashboard, assign team permissions, and export white-label reports.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>Multi-tenant client workspace segregation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>One-click template deployment across accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>Custom domain & agency partner revenue share</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-border/50 flex items-center justify-between">
                <span className="text-xs font-semibold text-purple-400 font-mono">Partner Program Available</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Official Compliance & Proof Banner */}
        <div className="mt-14 glass-card rounded-2xl p-6 border border-brand-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">100% Meta Official Graph API Compliant</p>
              <p className="text-xs text-brand-muted">Your account safety is guaranteed. Zero unofficial scrapers or risky bots.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-brand-muted">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-brand-yellow" />
              <span className="text-white font-bold font-mono">150M+</span> DMs Sent
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>99.98% Uptime SLA</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
