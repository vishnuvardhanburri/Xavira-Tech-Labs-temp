import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, RotateCw, Briefcase, Bell, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CareersModal({ isOpen, onClose }: CareersModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('VALIDATION_ERROR: INVALID_EMAIL_FORMAT');
      return;
    }

    setError(null);
    setStatus('submitting');

    // Simulate enterprise api registration for careers list
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="careers-modal-overlay" className="fixed inset-0 z-[400] flex items-center justify-center p-4">
          {/* Backdrop with elegant blur */}
          <motion.div
            id="careers-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            id="careers-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg bg-[#090b11] border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] z-10 text-white"
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
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  [CORE ENGINEERING INGRESS]
                </span>
              </div>

              {/* Title & Polite message */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-light text-white tracking-wider uppercase leading-tight">
                  No Current Openings
                </h2>
                <div className="space-y-3 text-sm text-zinc-400 leading-relaxed font-light">
                  <p>
                    Thank you for your interest in joining XAVIRA. We maintain an extremely high-bar, distributed collective of database architects and systems directors.
                  </p>
                  <p className="border-l-2 border-cyan-500/30 pl-4 italic text-zinc-400">
                    "We are currently fully staffed across all core database clusters, hyper-concurrency systems, and telemetry queues."
                  </p>
                  <p>
                    While we do not have any open positions at this moment, we invite you to subscribe to our careers notification registry below. We will reach out immediately when new architectural seats become available.
                  </p>
                </div>
              </div>

              {/* Subscription Form */}
              <div className="border-t border-zinc-900/60 pt-6 space-y-4">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Bell className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase">Subscribe to Careers Registry</span>
                </div>

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-cyan-950/20 border border-cyan-500/20 rounded-lg p-5 text-center space-y-2.5"
                    >
                      <div className="flex items-center justify-center gap-2 text-cyan-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                          REGISTRATION_COMPLETE
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 font-mono">
                        {email}
                      </p>
                      <p className="text-[10px] text-zinc-500 font-sans font-light">
                        You have successfully registered. You will receive an immediate automated ping when an architectural opening is scheduled.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3"
                    >
                      <div className="relative flex items-center">
                        <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="systems-architect@enterprise.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError(null);
                          }}
                          disabled={status === 'submitting'}
                          className="w-full bg-zinc-950 border border-zinc-900 rounded-lg px-4 py-3 pl-10.5 text-xs font-mono text-white outline-none focus:border-cyan-500/40 transition-all placeholder:text-zinc-600 disabled:opacity-50"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-cyan-600 hover:bg-cyan-500 text-zinc-950 rounded-lg py-3 px-4 font-mono text-[10px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 disabled:opacity-50 group cursor-pointer"
                      >
                        {status === 'submitting' ? (
                          <>
                            <RotateCw className="w-3.5 h-3.5 animate-spin" />
                            <span>NOTIFYING QUEUE...</span>
                          </>
                        ) : (
                          <>
                            <span>SUBSCRIBE FOR OPENINGS</span>
                            <Send className="w-3 h-3 group-hover:translate-x-0.5 transition-all" />
                          </>
                        )}
                      </button>

                      {error && (
                        <p className="text-[10px] font-mono text-rose-500 mt-1">
                          {error}
                        </p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
