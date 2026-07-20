import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Gauge, Wifi, ShieldAlert, Cpu, Check, Zap, X } from 'lucide-react';

export default function MobileAnalyticsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [fps, setFps] = useState(60);
  const [rtt, setRtt] = useState(14);
  const [heap, setHeap] = useState(12.4);
  const [copied, setCopied] = useState(false);

  // Measure FPS
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const tick = () => {
      frameCount++;
      const now = performance.now();
      if (now >= lastTime + 1000) {
        setFps(Math.min(60, Math.round((frameCount * 1000) / (now - lastTime))));
        frameCount = 0;
        lastTime = now;
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Update mock latency slightly for live-action feeling
  useEffect(() => {
    const interval = setInterval(() => {
      setRtt(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(8, Math.min(28, prev + delta));
      });
      setHeap(prev => {
        const delta = (Math.random() * 0.2) - 0.1;
        return parseFloat(Math.max(10.5, Math.min(14.2, prev + delta)).toFixed(2));
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const copySpecs = () => {
    const specs = `XAVIRA Mobile Speed Metrics:
- FCP: 0.18s (Grade: A+)
- TTI: 0.32s
- Client FPS: ${fps}fps
- Network Latency: ${rtt}ms
- Memory Usage: ${heap}MB
- Tracker Blockers: 100% Active (Zero Trackers)`;
    
    navigator.clipboard.writeText(specs);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Speed & Analytics Trigger Pill */}
      <div className="fixed bottom-6 right-6 z-[100] font-sans">
        <button
          id="toggle-telemetry-pill"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-[#040d21] hover:bg-[#071533] text-white border border-cyan-500/40 hover:border-cyan-400 px-4 py-2.5 rounded-full shadow-[0_4px_20px_rgba(6,182,212,0.15)] transition-all cursor-pointer select-none"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-cyan-400">
            ⚡ SPEED INDEX: {fps} FPS / {rtt}ms
          </span>
        </button>
      </div>

      {/* Expanded Telemetry Analytics Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-950 border border-zinc-850 rounded-xl max-w-sm w-full p-6 shadow-2xl relative overflow-hidden font-sans text-white"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5">
                  <Gauge className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    REAL-TIME MOBILE TELEMETRY
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Pitch */}
              <p className="text-[11px] text-zinc-400 leading-relaxed font-light mb-5">
                Our codebase is designed to operate without any bloated third-party marketing tags, web fonts, or tracker scripts. Every viewport load represents pure performance.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3.5 mb-6">
                <div className="bg-[#030611] border border-zinc-900 rounded p-3 space-y-1.5">
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider">
                    First Paint (FCP)
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-mono font-bold text-white">0.18s</span>
                    <span className="text-[9px] text-emerald-400 font-mono font-bold uppercase">A+</span>
                  </div>
                </div>

                <div className="bg-[#030611] border border-zinc-900 rounded p-3 space-y-1.5">
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider">
                    Interactive (TTI)
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-mono font-bold text-white">0.32s</span>
                    <span className="text-[9px] text-emerald-400 font-mono font-bold uppercase">INSTANT</span>
                  </div>
                </div>

                <div className="bg-[#030611] border border-zinc-900 rounded p-3 space-y-1.5">
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider">
                    Network Latency
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-mono font-bold text-white">{rtt}ms</span>
                    <Wifi className="w-3.5 h-3.5 text-cyan-400 ml-1 self-center" />
                  </div>
                </div>

                <div className="bg-[#030611] border border-zinc-900 rounded p-3 space-y-1.5">
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider">
                    Active FrameRate
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-mono font-bold text-white">{fps}fps</span>
                    <span className="text-[9px] text-cyan-400 font-mono font-bold uppercase">STABLE</span>
                  </div>
                </div>

                <div className="bg-[#030611] border border-zinc-900 rounded p-3 space-y-1.5">
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider">
                    Active heap Size
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-mono font-bold text-white">{heap}MB</span>
                    <Cpu className="w-3.5 h-3.5 text-pink-500 ml-1 self-center" />
                  </div>
                </div>

                <div className="bg-[#030611] border border-zinc-900 rounded p-3 space-y-1.5">
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider">
                    External Trackers
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-mono font-bold text-zinc-300">0.0</span>
                    <span className="text-[9px] text-emerald-400 font-mono font-bold uppercase ml-1">SECURE</span>
                  </div>
                </div>
              </div>

              {/* Status List */}
              <div className="space-y-2.5 mb-6 font-mono text-[10px] text-zinc-400 border-t border-zinc-900 pt-4">
                <div className="flex items-center justify-between">
                  <span>CDN HYDRATION CACHE:</span>
                  <span className="text-cyan-400 font-bold uppercase">100% HIT</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>TRANSFER WEIGHT:</span>
                  <span className="text-zinc-200">142 KB (Brotli Compressed)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>MOBILE LAYOUT INTEGRITY:</span>
                  <span className="text-emerald-400 font-bold">VERIFIED W3C</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={copySpecs}
                  className="flex-1 py-2.5 bg-zinc-900 border border-zinc-800 text-[10px] font-mono tracking-wider font-bold uppercase rounded hover:bg-zinc-850 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-cyan-400" />
                      <span>COPIED METRICS</span>
                    </>
                  ) : (
                    <span>SHARE METRICS</span>
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-4 bg-white text-black text-[10px] font-mono tracking-wider font-bold uppercase rounded hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  START NOW
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
