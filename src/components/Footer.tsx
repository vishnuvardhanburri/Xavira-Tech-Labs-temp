import { BrowserRouter, useNavigate, useLocation, Routes, Route, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface FooterProps {
  setActiveView: (view: string) => void;
  onOpenPolicy?: (tab: 'privacy' | 'terms' | 'sovereign' | 'governance') => void;
  onCareersClick?: () => void;
}

export default function Footer({ setActiveView, onOpenPolicy, onCareersClick }: FooterProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 5000);
    }
  };

  const handleNavigate = (view: string) => {
    setActiveView(view);
    if (view === 'research') {
      navigate('/research');
    } else {
      const path = window.location.pathname;
      if (path.startsWith('/research')) {
        navigate('/');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-transparent border-t border-[#0f1d3a] text-zinc-400 py-16 px-4 sm:px-6 lg:px-8 font-sans cyber-grid">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Pitch */}
          <div className="lg:col-span-2 space-y-6">
            <span 
              className="font-display text-2xl font-light tracking-[0.25em] text-white cursor-pointer"
              onClick={() => handleNavigate('home')}
            >
              XAVIRA
            </span>
            <p className="text-sm leading-relaxed max-w-sm text-zinc-300 font-light">
              XAVIRA Technologies is a premier Engineering Intelligence company. We evaluate engineering vulnerabilities, design sovereign architectures, and implement high-performance, resilient computing systems with uncompromising mecha-precision.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-300 bg-[#030815]/90 border border-[#0f1d3a]/60 px-3.5 py-2 rounded-md w-fit font-mono">
              <ShieldCheck className="w-4 h-4 text-cyan-500 animate-pulse" />
              <span>[ACTIVE] Global Sovereign Operations. ISO 27001 Audited.</span>
            </div>
          </div>

          {/* Column 2: Philosophy */}
          <div>
            <h4 className="font-display text-xs font-bold tracking-widest text-cyan-500 uppercase mb-4">[PHILOSOPHY]</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-white transition-colors text-zinc-400">
                  Why XAVIRA
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-white transition-colors text-zinc-400">
                  Our Core Principles
                </button>
              </li>
              <li>
                <a href="https://www.xaviratechlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-zinc-400 block text-left">
                  Director's Portfolio (xaviratechlabs.com)
                </a>
              </li>
              <li>
                <button onClick={() => handleNavigate('faq')} className="hover:text-white text-left transition-colors text-zinc-400">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onCareersClick?.()} className="hover:text-white text-left transition-colors text-zinc-400 font-medium text-cyan-400/95">
                  Careers & Openings
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Intelligence */}
          <div>
            <h4 className="font-display text-xs font-bold tracking-widest text-cyan-500 uppercase mb-4">[INTELLIGENCE]</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleNavigate('research')} className="hover:text-white transition-colors text-cyan-400 font-semibold flex items-center gap-1">
                  <span>Engineering Intelligence Library</span>
                  <span className="text-[9px] bg-cyan-950 px-1 py-0.2 rounded border border-cyan-800 text-cyan-400">NEW</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('packages')} className="hover:text-white transition-colors text-zinc-400">
                  Corporate Engagements
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('research-insights')} className="hover:text-white transition-colors text-zinc-400">
                  Whitepapers & Research
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('research-insights')} className="hover:text-white transition-colors text-zinc-400">
                  Executive Insights
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Hubs */}
          <div className="space-y-6">
            <div>
              <h4 className="font-display text-xs font-bold tracking-widest text-cyan-400 uppercase mb-1">EMEA_HUB</h4>
              <p className="text-[11px] leading-relaxed text-zinc-400 font-mono">
                XAVIRA Technologies Ltd.<br />
                85 Great Portland Street, Marylebone<br />
                London, W1W 7LT, United Kingdom
              </p>
            </div>
            <div>
              <h4 className="font-display text-xs font-bold tracking-widest text-cyan-400 uppercase mb-1">AMER_HUB</h4>
              <p className="text-[11px] leading-relaxed text-zinc-400 font-mono">
                XAVIRA Technologies Corp.<br />
                405 Lexington Avenue, Chrysler Building<br />
                New York, NY 10174, United States
              </p>
            </div>
            <div>
              <h4 className="font-display text-xs font-bold tracking-widest text-cyan-400 uppercase mb-1">APAC_HUB</h4>
              <p className="text-[11px] leading-relaxed text-zinc-400 font-mono">
                XAVIRA Technologies Pte. Ltd.<br />
                12 Marina Boulevard, Marina Bay Financial Centre<br />
                Singapore 018982
              </p>
            </div>
          </div>

        </div>

        {/* Middle Divider & Newsletter signup */}
        <div className="border-y border-[#0f1d3a]/60 py-12 mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="font-display text-lg font-black text-white mb-2 tracking-widest uppercase">ENGINEERING_INTELLIGENCE_BRIEFING</h3>
            <p className="text-sm text-zinc-400 font-light">
              Sign up for XAVIRA's monthly <strong className="text-cyan-400 font-semibold">Engineering Intelligence</strong> briefing. Periodic tactical whitepapers, engineering diagnostic reports, and deep-dives on distributed system scaling. No hype, strictly technical.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="w-full lg:max-w-md flex gap-2">
            <input
              type="email"
              required
              placeholder="enterprise@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[#020510]/90 border border-[#0f1d3a]/60 hover:border-cyan-500/40 text-white rounded px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 font-mono glow-cyan"
            />
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-500 text-zinc-950 border border-cyan-400 text-xs font-display font-black uppercase tracking-widest px-5 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap glow-cyan cursor-pointer"
            >
              {subscribed ? (
                <>
                  SUCCESS <Check className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  SUBSCRIBE <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Email Highlight */}
        <div className="bg-[#030815]/80 border border-[#0f1d3a]/60 p-6 rounded-lg mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 glow-cyan hover:border-cyan-500/30 transition-all duration-300">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-sm font-mono text-zinc-300">
              Corporate Ingress Active: <a href="mailto:hello@vishnuvardhanburri.in" className="underline hover:text-cyan-400 text-cyan-300 font-bold transition-colors">hello@vishnuvardhanburri.in</a>
            </p>
          </div>
          <a
            href="mailto:hello@vishnuvardhanburri.in?subject=XAVIRA%20Engineering%20Inquiry"
            className="px-6 py-3 bg-cyan-500 text-black text-xs font-display font-black uppercase tracking-widest rounded-lg hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 inline-block text-center glow-cyan"
          >
            Send Direct Mail
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono border-t border-zinc-900/60 pt-6">
          <p>© {new Date().getFullYear()} XAVIRA Technologies. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2.5">
            <button 
              onClick={() => onOpenPolicy?.('privacy')} 
              className="hover:text-white cursor-pointer transition-colors focus:outline-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenPolicy?.('terms')} 
              className="hover:text-white cursor-pointer transition-colors focus:outline-none"
            >
              Terms of Engagement
            </button>
            <button 
              onClick={() => onOpenPolicy?.('sovereign')} 
              className="hover:text-white cursor-pointer transition-colors focus:outline-none"
            >
              Sovereignty Compliance
            </button>
            <button 
              onClick={() => onOpenPolicy?.('governance')} 
              className="hover:text-white cursor-pointer transition-colors focus:outline-none font-bold text-cyan-400"
            >
              Corporate Governance
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
