import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, RotateCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function NewsletterForm() {
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

    // Simulate enterprise api registration
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <div 
      id="newsletter-container"
      className="bg-[#030712]/60 border border-zinc-900 rounded-lg p-6 lg:p-8 space-y-6 relative overflow-hidden select-none"
    >
      {/* Visual background ambient accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-lg">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-[9px] tracking-widest text-cyan-400 uppercase">
              [INTELLIGENCE FEED]
            </span>
          </div>
          <h4 className="font-display text-base font-bold text-white tracking-widest uppercase">
            Subscribe to Sovereign Intelligence
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">
            Receive unbiased SRE engineering reviews, distributed system blueprints, and high-concurrency benchmarks straight to your terminal inbox. Zero marketing clutter.
          </p>
        </div>

        <div className="w-full md:max-w-xs shrink-0">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-cyan-950/20 border border-cyan-500/20 rounded p-4 text-center space-y-2"
              >
                <div className="flex items-center justify-center gap-2 text-cyan-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                    REGISTRATION_COMPLETE
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono break-all truncate max-w-full">
                  {email}
                </p>
                <span className="text-[9px] font-mono text-zinc-500 block">
                  VERIFIED BY XAVIRA OBSERVER
                </span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-2.5"
              >
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-zinc-500 absolute left-3" />
                  <input
                    type="email"
                    required
                    placeholder="architect@enterprise.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    disabled={status === 'submitting'}
                    className="w-full bg-zinc-950 border border-zinc-900 rounded px-3.5 py-2.5 pl-9.5 text-xs font-mono text-white outline-none focus:border-cyan-500/40 transition-all placeholder:text-zinc-600 disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#040c1e]/80 hover:bg-[#061533]/80 border border-[#0f1d3a]/80 hover:border-cyan-500/30 text-white rounded py-2.5 px-4 font-mono text-[10px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 disabled:opacity-50 group"
                >
                  {status === 'submitting' ? (
                    <>
                      <RotateCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                      <span>REGISTERING...</span>
                    </>
                  ) : (
                    <>
                      <span>ESTABLISH CONNECTION</span>
                      <Send className="w-3 h-3 text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    </>
                  )}
                </button>

                {error && (
                  <p className="text-[10px] font-mono text-red-400 mt-1">
                    {error}
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
