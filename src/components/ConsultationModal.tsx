import React from 'react';
import { X, Calendar, MessageSquare, Shield, ArrowRight, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
  onSendInquiry: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  onBookCall,
  onSendInquiry
}: ConsultationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div id="consultation-modal-overlay" className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          {/* Backdrop with elegant blur */}
          <motion.div
            id="consultation-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            id="consultation-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-2xl bg-[#090b11] border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] z-10 text-white"
          >
            {/* Header cyber border accent */}
            <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-md text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Area */}
            <div className="p-8 space-y-6">
              
              {/* Badge */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 px-2.5 py-1 rounded uppercase font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                  [DIRECT EXECUTIVE INGRESS]
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h2 className="font-display text-2xl sm:text-3xl font-light text-white tracking-wider uppercase leading-tight">
                  Choose Consultation Pathway
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  To find and eliminate critical vulnerabilities, resolve memory leak cascades, or design custom sovereign microservice topologies, select your preferred engagement interface.
                </p>
              </div>

              {/* Path options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                
                {/* OPTION 1: BOOK A DIRECT CALL WITH CEO */}
                <div 
                  onClick={onBookCall}
                  className="bg-gradient-to-b from-[#0e1628]/85 to-[#050a14]/95 border border-cyan-500/30 hover:border-cyan-400 p-6 rounded-lg transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between hover:shadow-[0_4px_25px_rgba(6,182,212,0.1)] hover:translate-y-[-2px]"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl" />
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold tracking-wider text-white uppercase mb-1">
                        Book Call with CEO
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        Instantly reserve a 15 or 30-minute diagnostic briefing with our Chief Systems Director & CEO, Vishnu Vardhan Burri, to map your platform parameters.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center text-[10px] font-mono font-bold text-cyan-400 tracking-wider uppercase gap-1 group-hover:text-cyan-300 transition-colors">
                    <span>Reserve Time Slot</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* OPTION 2: SEND A SECURE MESSAGE */}
                <div 
                  onClick={onSendInquiry}
                  className="bg-zinc-950/40 border border-zinc-900 hover:border-zinc-700 p-6 rounded-lg transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between hover:shadow-[0_4px_25px_rgba(255,255,255,0.02)] hover:translate-y-[-2px]"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold tracking-wider text-zinc-300 uppercase mb-1 group-hover:text-white transition-colors">
                        Send Written Message
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed font-light">
                        Transmit your system specifications, cloud budget ceilings, or technical blockages securely to our principal auditing queue for rapid diagnostic response.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center text-[10px] font-mono font-bold text-zinc-400 tracking-wider uppercase gap-1 group-hover:text-white transition-colors">
                    <span>Submit Tech Brief</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>

              {/* Host / CEO Info Footnote */}
              <div className="p-4 bg-black/40 border border-zinc-900 rounded-lg flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-mono font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                  CEO
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Vishnu Vardhan Burri</span>
                    <span className="text-[9px] text-zinc-500 font-normal">// Chief Systems Director & Founder</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal font-light">
                    Direct architectural consultant vetted in top-tier distributed ledger consensus, cloud cost governance, and millisecond-level database queuing architectures.
                  </p>
                </div>
              </div>

              {/* Footer Trust Shield */}
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-550 border-t border-zinc-900/60 pt-4">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero marketing telemetry. Full NDA-backed legal protocols apply to all custom briefs.</span>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
