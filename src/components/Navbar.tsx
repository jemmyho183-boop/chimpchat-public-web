import { useState, useEffect } from 'react';
import chimpLogo from '../assets/chimpchat-logo.jpg';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

interface NavLinkItem {
  name: string;
  href: string;
  badge?: string;
}

  const navLinks: NavLinkItem[] = [
    { name: 'Product', href: '#product' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Agencies', href: '#agencies' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-dark via-brand-surface to-brand-dark border-b border-brand-border py-2 px-4 text-xs font-medium text-slate-300 text-center relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 bg-brand-yellow/15 text-brand-yellow px-2 py-0.5 rounded-full text-[11px] font-bold">
            <Sparkles className="w-3 h-3" /> NEW
          </span>
          <span>Automated Social DMs, Comments & Conversations are now live with AI 2.0!</span>
          <a 
            href="#pricing" 
            className="hidden sm:inline-flex items-center gap-1 text-brand-yellow hover:underline font-semibold ml-1"
          >
            Claim 14-Day Free Access <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Sticky Floating Navbar */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="glass-nav rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-xl">
            
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative">
                <img 
                  src={chimpLogo} 
                  alt="ChimpChat Logo" 
                  className="w-10 h-10 rounded-xl object-cover border border-brand-yellow/30 group-hover:border-brand-yellow shadow-yellow-glow transition-all duration-300 group-hover:scale-105" 
                />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-brand-dark flex items-center justify-center" title="Systems Online" />
              </div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-slate-100 transition-colors">
                Chimp<span className="text-brand-yellow">Chat</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all flex items-center gap-1.5 group"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-brand-yellow text-black leading-tight shadow-sm">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#login"
                className="text-sm font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-all"
              >
                Log In
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-extrabold text-sm px-4 lg:px-5 py-2.5 rounded-xl shadow-yellow-glow hover:shadow-yellow-glow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="#pricing"
                className="bg-brand-yellow text-black font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm"
              >
                Start Free
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2">
            <div className="glass-card rounded-2xl p-5 border border-brand-border space-y-3 shadow-2xl backdrop-blur-2xl">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/[0.06] transition-colors"
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-yellow text-black">
                        {link.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-brand-border/60 flex flex-col gap-2">
                <a
                  href="#login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl text-slate-300 font-semibold text-sm hover:bg-white/[0.04]"
                >
                  Log In
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-bold py-3 rounded-xl shadow-yellow-glow text-sm"
                >
                  <span>Start 14-Day Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
