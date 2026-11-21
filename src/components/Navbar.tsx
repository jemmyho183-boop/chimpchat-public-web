import { useState, useEffect } from 'react';
import chimpLogo from '../assets/chimpchat-logo.jpg';
import { Menu, X, ArrowRight, ChevronDown, PhoneCall } from 'lucide-react';

interface NavLinkItem {
  name: string;
  href: string;
  badge?: string;
  hasDropdown?: boolean;
}

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

  const navLinks: NavLinkItem[] = [
    { name: 'Product', href: '#product', hasDropdown: true },
    { name: 'Solutions', href: '#solutions', hasDropdown: true },
    { name: 'Agencies', href: '#agencies' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#faq' },
  ];

  return (
    <>
      {/* Mailchimp Signature Top Announcement Banner */}
      <div className="bg-[#FFE01B] border-b border-[#241C15]/15 py-2 px-4 text-xs font-semibold text-[#241C15] text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 bg-[#241C15] text-[#FFE01B] px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
            AI 2.0
          </span>
          <span>Save up to 50% on ChimpChat with annual billing. Turn every DM into revenue.</span>
          <a 
            href="#pricing" 
            className="hidden sm:inline-flex items-center gap-1 font-bold underline ml-1 hover:text-[#007C89] transition-colors"
          >
            Claim 14-Day Free Access <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Mailchimp-Style Navigation Header */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-200 bg-[#F6F6F4] border-b ${
          scrolled ? 'border-[#241C15]/15 shadow-sm' : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="h-20 flex items-center justify-between">
            
            {/* Left: Brand Mascot & Logo */}
            <div className="flex items-center gap-8">
              <a href="#" className="flex items-center gap-3 group focus:outline-none">
                <img 
                  src={chimpLogo} 
                  alt="ChimpChat Mascot" 
                  className="w-10 h-10 rounded-xl object-cover border-2 border-[#241C15] shadow-mc-hard-sm group-hover:scale-105 transition-transform" 
                />
                <div className="flex items-baseline">
                  <span className="font-mc-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-[#241C15]">
                    Chimp<span className="italic font-normal">Chat</span>
                  </span>
                </div>
              </a>

              {/* Desktop Nav Items */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-3.5 py-2 text-sm font-semibold text-[#241C15] hover:text-[#007C89] rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-[#241C15]/60 mt-0.5" />
                    )}
                    {link.badge && (
                      <span className="text-[10px] font-black px-1.5 py-0.2 rounded-full bg-[#FFE01B] border border-[#241C15] text-[#241C15] ml-1">
                        {link.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Contact, Log In, and Signature Mailchimp Pill CTA */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:18003155939"
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-[#241C15]/80 hover:text-[#241C15] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#007C89]" />
                <span>Sales: +1 (800) 315-5939</span>
              </a>

              <a
                href="#login"
                className="text-sm font-bold text-[#241C15] hover:text-[#007C89] transition-colors px-2 py-1"
              >
                Log In
              </a>

              <a
                href="#pricing"
                className="mc-btn-primary px-6 py-2.5 text-sm shadow-mc-hard-sm hover:shadow-mc-hard"
              >
                <span>Sign Up Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="#pricing"
                className="mc-btn-primary px-4 py-1.5 text-xs shadow-mc-hard-sm"
              >
                Sign Up
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#241C15] hover:bg-[#241C15]/5 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#241C15]/15 bg-[#FFFFFF] px-5 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-semibold text-[#241C15] hover:text-[#007C89]"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#FFE01B] border border-[#241C15] text-[#241C15]">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#241C15]/10 flex flex-col gap-3">
              <a
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-[#241C15] font-bold text-sm"
              >
                Log In
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full mc-btn-primary py-3 text-sm shadow-mc-hard-sm"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
