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
  Check, 
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
    { name: 'Instagram DMs & Reels', category: 'channel', badge: 'Official API', iconBg: 'bg-[#E04838]', description: 'Auto-reply to stories, reels, & incoming DMs' },
    { name: 'WhatsApp Business', category: 'channel', badge: 'Cloud API', iconBg: 'bg-[#008444]', description: 'Broadcasts & 2-way AI customer support' },
    { name: 'Shopify Store', category: 'ecommerce', badge: '1-Click Sync', iconBg: 'bg-[#007C89]', description: 'Real-time catalog sync & cart recovery' },
    { name: 'Facebook Messenger', category: 'channel', badge: 'Meta Verified', iconBg: 'bg-[#241C15]', description: 'Instant page comment-to-inbox routing' },
    { name: 'Stripe Payments', category: 'ecommerce', badge: 'Direct Checkout', iconBg: 'bg-[#A15D98]', description: 'In-chat 1-tap payment links' },
    { name: 'TikTok Messaging', category: 'channel', badge: 'Coming Soon', iconBg: 'bg-[#241C15]', description: 'Viral video comment lead generation' },
  ];

  const integrationsRow2: IntegrationItem[] = [
    { name: 'WooCommerce', category: 'ecommerce', badge: 'Plugin Ready', iconBg: 'bg-[#A15D98]', description: 'Sync orders, coupons, & inventory' },
    { name: 'Zapier & Make', category: 'tool', badge: '5,000+ Apps', iconBg: 'bg-[#FFE01B]', description: 'Connect webhooks & custom CRM flows' },
    { name: 'Klaviyo', category: 'tool', badge: 'SMS & Email', iconBg: 'bg-[#008444]', description: 'Bi-directional subscriber list sync' },
    { name: 'HubSpot CRM', category: 'tool', badge: 'Lead Scoring', iconBg: 'bg-[#E04838]', description: 'Push qualified social leads to sales pipeline' },
    { name: 'Google Sheets', category: 'tool', badge: 'Auto-Export', iconBg: 'bg-[#007C89]', description: 'Streamline lead capture spreadsheets' },
    { name: 'Meta Graph API', category: 'channel', badge: 'Tier-1 Security', iconBg: 'bg-[#241C15]', description: '100% compliant zero-ban architecture' },
  ];

  return (
    <section id="solutions" className="relative py-20 bg-[#FFFFFF] border-t border-b border-[#241C15]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FBEEDB] border border-[#241C15]/15 text-xs font-bold text-[#241C15]">
            <Sparkles className="w-3.5 h-3.5 text-[#007C89]" />
            <span>CONNECTED ECOSYSTEM & INTEGRATIONS</span>
          </div>
          
          <h2 className="font-mc-serif text-3xl sm:text-5xl font-normal text-[#241C15] leading-tight">
            Connects directly to where your<br />
            <em className="italic underline decoration-[#FFE01B] decoration-4 underline-offset-4">audience buys</em>
          </h2>

          <p className="text-base sm:text-lg text-[#241C15]/75 leading-relaxed font-normal">
            No brittle webhooks or complicated setups. ChimpChat connects with your Meta accounts, store catalog, and CRM in under 60 seconds with enterprise-grade stability.
          </p>

          {/* Mailchimp Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                activeTab === 'all'
                  ? 'bg-[#FFE01B] text-[#241C15] border-[#241C15] shadow-mc-hard-sm'
                  : 'bg-[#F6F6F4] text-[#241C15] border-[#241C15]/20 hover:border-[#241C15]'
              }`}
            >
              All Platforms
            </button>
            <button
              onClick={() => setActiveTab('channels')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border flex items-center gap-1.5 ${
                activeTab === 'channels'
                  ? 'bg-[#FFE01B] text-[#241C15] border-[#241C15] shadow-mc-hard-sm'
                  : 'bg-[#F6F6F4] text-[#241C15] border-[#241C15]/20 hover:border-[#241C15]'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Social Channels
            </button>
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border flex items-center gap-1.5 ${
                activeTab === 'ecommerce'
                  ? 'bg-[#FFE01B] text-[#241C15] border-[#241C15] shadow-mc-hard-sm'
                  : 'bg-[#F6F6F4] text-[#241C15] border-[#241C15]/20 hover:border-[#241C15]'
              }`}
            >
              <Store className="w-4 h-4" />
              E-Commerce Stores
            </button>
            <button
              onClick={() => setActiveTab('agencies')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border flex items-center gap-1.5 ${
                activeTab === 'agencies'
                  ? 'bg-[#FFE01B] text-[#241C15] border-[#241C15] shadow-mc-hard-sm'
                  : 'bg-[#F6F6F4] text-[#241C15] border-[#241C15]/20 hover:border-[#241C15]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Agencies & Teams
            </button>
          </div>
        </div>

        {/* Mailchimp Infinite Marquee Ticker Track 1 (Left Scrolling) */}
        <div className="relative mt-12 overflow-hidden py-2">
          <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...integrationsRow1, ...integrationsRow1].map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="w-72 bg-[#F6F6F4] p-4 rounded-2xl border border-[#241C15]/15 hover:border-[#241C15] transition-all group flex items-start gap-3.5 flex-shrink-0 cursor-default shadow-sm hover:shadow-mc-hard-sm"
              >
                <div className={`w-11 h-11 rounded-xl ${item.iconBg} ${item.iconBg.includes('yellow') ? 'text-[#241C15]' : 'text-white'} flex items-center justify-center flex-shrink-0 border border-[#241C15]`}>
                  {item.category === 'channel' && <Instagram className="w-5 h-5" />}
                  {item.category === 'ecommerce' && <ShoppingBag className="w-5 h-5" />}
                  {item.category === 'tool' && <Zap className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-[#241C15] truncate">
                      {item.name}
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFFFFF] border border-[#241C15]/30 text-[#241C15] flex-shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#241C15]/70 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mailchimp Infinite Marquee Ticker Track 2 (Right Scrolling) */}
        <div className="relative overflow-hidden py-2">
          <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 w-max animate-marqueeReverse hover:[animation-play-state:paused]">
            {[...integrationsRow2, ...integrationsRow2].map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="w-72 bg-[#F6F6F4] p-4 rounded-2xl border border-[#241C15]/15 hover:border-[#241C15] transition-all group flex items-start gap-3.5 flex-shrink-0 cursor-default shadow-sm hover:shadow-mc-hard-sm"
              >
                <div className={`w-11 h-11 rounded-xl ${item.iconBg} ${item.iconBg.includes('yellow') ? 'text-[#241C15]' : 'text-white'} flex items-center justify-center flex-shrink-0 border border-[#241C15]`}>
                  {item.category === 'channel' && <ShieldCheck className="w-5 h-5" />}
                  {item.category === 'ecommerce' && <CreditCard className="w-5 h-5" />}
                  {item.category === 'tool' && <Layers className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-[#241C15] truncate">
                      {item.name}
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFFFFF] border border-[#241C15]/30 text-[#241C15] flex-shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#241C15]/70 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mailchimp Solutions Grid: E-Commerce, Creators, Agencies */}
        <div id="agencies" className="mt-16 pt-12 border-t border-[#241C15]/15">
          <div className="text-center mb-10">
            <h3 className="font-mc-serif text-2xl sm:text-4xl font-normal text-[#241C15]">
              Built for every stage of your <em className="italic underline decoration-[#FFE01B] decoration-4 underline-offset-4">growth</em>
            </h3>
            <p className="text-sm text-[#241C15]/75 mt-2 max-w-xl mx-auto font-normal">
              Whether you are an ambitious e-commerce brand or an agency scaling dozens of client accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: D2C E-Commerce */}
            <div className="bg-[#F6F6F4] p-7 rounded-3xl border border-[#241C15]/15 hover:border-[#241C15] transition-all flex flex-col justify-between group shadow-sm hover:shadow-mc-hard">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE01B] border border-[#241C15] flex items-center justify-center text-[#241C15] mb-5 shadow-mc-hard-sm">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h4 className="font-mc-serif text-xl font-bold text-[#241C15] mb-2">E-Commerce & Brands</h4>
                <p className="text-xs text-[#241C15]/75 leading-relaxed mb-4">
                  Turn viral product reels, tagged stories, and post comments into instantaneous checkout links with full Shopify & Stripe integration.
                </p>
                <ul className="space-y-2 text-xs text-[#241C15]/85">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008444] stroke-[3]" />
                    <span>Real-time Shopify catalog inventory lookup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008444] stroke-[3]" />
                    <span>Automated discount coupons on Reel comments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008444] stroke-[3]" />
                    <span>Track direct ROI on every DM conversation</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#241C15]/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#008444]">+38% Cart Recovery</span>
                <ArrowRight className="w-4 h-4 text-[#241C15] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Creators & Coaches */}
            <div className="bg-[#F6F6F4] p-7 rounded-3xl border border-[#241C15]/15 hover:border-[#241C15] transition-all flex flex-col justify-between group shadow-sm hover:shadow-mc-hard">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#007C89] border border-[#241C15] flex items-center justify-center text-white mb-5 shadow-mc-hard-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-mc-serif text-xl font-bold text-[#241C15] mb-2">Creators & Coaches</h4>
                <p className="text-xs text-[#241C15]/75 leading-relaxed mb-4">
                  Scale your community without living in your DMs. Deliver lead magnets, course guides, and discovery calls automatically via comment & story triggers.
                </p>
                <ul className="space-y-2 text-xs text-[#241C15]/85">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008444] stroke-[3]" />
                    <span>Story reply auto-responder with instant freebies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008444] stroke-[3]" />
                    <span>AI qualification for 1-on-1 coaching bookings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008444] stroke-[3]" />
                    <span>Zero manual spreadsheet exporting needed</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#241C15]/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#241C15]">10x Lead Capture Rate</span>
                <ArrowRight className="w-4 h-4 text-[#241C15] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Growth & Marketing Agencies */}
            <div className="bg-[#F6F6F4] p-7 rounded-3xl border border-[#241C15]/15 hover:border-[#241C15] transition-all flex flex-col justify-between group shadow-sm hover:shadow-mc-hard">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E04838] border border-[#241C15] flex items-center justify-center text-white mb-5 shadow-mc-hard-sm">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="font-mc-serif text-xl font-bold text-[#241C15] mb-2">Marketing Agencies</h4>
                <p className="text-xs text-[#241C15]/75 leading-relaxed mb-4">
                  Manage dozens of client social channels under one unified dashboard, assign team roles, and export white-label performance reports.
                </p>
                <ul className="space-y-2 text-xs text-[#241C15]/85">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008444] stroke-[3]" />
                    <span>Multi-tenant client workspace segregation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008444] stroke-[3]" />
                    <span>One-click flow templates across client accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008444] stroke-[3]" />
                    <span>Partner rev-share program and dedicated SLA</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#241C15]/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#A15D98]">Agency Tier Available</span>
                <ArrowRight className="w-4 h-4 text-[#241C15] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>

        {/* Mailchimp Trust Banner */}
        <div className="mt-14 bg-[#FBEEDB] rounded-3xl p-6 sm:p-8 border border-[#241C15]/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFE01B] border border-[#241C15] flex items-center justify-center text-[#241C15] flex-shrink-0 shadow-mc-hard-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-mc-serif text-base sm:text-lg font-bold text-[#241C15]">100% Meta Graph API Verified Partner</p>
              <p className="text-xs sm:text-sm text-[#241C15]/75">Zero risk to your accounts. Compliant with Meta & Instagram terms of service.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-bold text-[#241C15]">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#008444]" />
              <span className="text-sm font-black font-mc-serif">150M+</span> DMs Sent
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#008444]" />
              <span>99.98% Uptime SLA</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
