import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, X, Check } from 'lucide-react';

interface CookieConsentProps {
  onOpenPolicy?: (tab: 'privacy' | 'terms' | 'sovereign' | 'governance') => void;
}

export default function CookieConsent({ onOpenPolicy }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a selection
    const consent = localStorage.getItem('xavira-cookie-consent');
    if (!consent) {
      // Small delay before showing for an elegant entrance
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type: 'all' | 'essential') => {
    localStorage.setItem('xavira-cookie-consent', type);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[420px] bg-[#09090d]/95 backdrop-blur-md border border-cyan-500/20 rounded-xl p-5 sm:p-6 shadow-[0_15px_50px_rgba(0,0,0,0.85)] z-50 overflow-hidden"
        >
          {/* Subtle light leak decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/5 to-transparent pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 rounded">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                  [SECURITY & PRIVACY LAYER]
                </span>
              </div>
              <button
                onClick={() => handleAccept('essential')}
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="font-display text-sm font-black text-white uppercase tracking-widest flex items-center gap-1.5">
                WE VALUE YOUR TELEMETRY TRUST
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                We use secure, localized cookies and analytical tokens to optimise distributed application latency, monitor telemetry streams, and run secure threat validations. No tracking, purely technical.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <button
                onClick={() => handleAccept('all')}
                className="flex-1 px-4 py-2.5 text-[10px] font-display font-black tracking-widest uppercase bg-cyan-600 text-zinc-950 hover:bg-cyan-500 border border-cyan-400 transition-all rounded-lg flex items-center justify-center gap-1.5 glow-cyan cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                Accept All
              </button>
              <button
                onClick={() => handleAccept('essential')}
                className="flex-1 px-4 py-2.5 text-[10px] font-mono tracking-widest uppercase bg-zinc-950 border border-zinc-800 hover:border-zinc-750 text-zinc-400 hover:text-white transition-all rounded-lg cursor-pointer"
              >
                Essential Only
              </button>
            </div>
            
            <div className="flex items-center justify-between text-[8px] font-mono text-zinc-600 pt-1 border-t border-zinc-900">
              <span>*COMPLIANT WITH GDPR & CCPA SHIELDS</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => onOpenPolicy?.('privacy')}
                  className="hover:underline cursor-pointer text-zinc-500 hover:text-zinc-300 focus:outline-none bg-transparent border-none p-0"
                >
                  PRIVACY POLICY
                </button>
                <span>•</span>
                <button 
                  onClick={() => onOpenPolicy?.('terms')}
                  className="hover:underline cursor-pointer text-zinc-500 hover:text-zinc-300 focus:outline-none bg-transparent border-none p-0"
                >
                  TERMS OF ENGAGEMENT
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
