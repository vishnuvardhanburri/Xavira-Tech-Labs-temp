import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, ShieldCheck, ExternalLink, CheckCircle2, Terminal, ArrowRight } from 'lucide-react';

type BookingOption = '15min' | '30min';

export default function InteractiveBooking() {
  const [activeOption, setActiveOption] = useState<BookingOption>('15min');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const options = {
    '15min': {
      url: "https://cal.com/vishnuvardhanburri/15min",
      title: "Diagnostic Consult",
      duration: "15 Minutes",
      audience: "SREs, CTOs, Tech Leads",
      pitch: "Discuss memory isolation anomalies, cloud spend leak audits, or high-throughput co-routine bottlenecks directly with Vishnu Vardhan Burri.",
      deliverables: [
        {
          title: "Interactive Architecture Sweep",
          desc: "Rapid code-level tracing and garbage compaction diagnostic reviews."
        },
        {
          title: "Scale Bottleneck Pinpointing",
          desc: "Direct analysis of lock contention patterns and memory leak sources."
        },
        {
          title: "Actionable Remediation Roadmap",
          desc: "Tailored recommendations to deploy lock-free buffers or spot instances."
        }
      ]
    },
    '30min': {
      url: "https://cal.com/vishnuvardhanburri/30min",
      title: "Deep Architecture Briefing",
      duration: "30 Minutes",
      audience: "CTOs, VPs of Engineering, Directors",
      pitch: "A comprehensive platform engineering teardown. Deep dive into custom pointer layout, Garbage Collector sweeping limits, or multi-node scale architectures.",
      deliverables: [
        {
          title: "Full-Stack System Teardown",
          desc: "Deep-dive analysis of latency profiles, CPU cache lines, and NUMA thrashing."
        },
        {
          title: "Heap Contention Mapping",
          desc: "Granular walkthrough of Escape Paths and allocations bypassing lock pools."
        },
        {
          title: "Strategic Execution Blueprint",
          desc: "Complete architectural roadmap for multi-million QPS scaling and high reliability."
        }
      ]
    }
  };

  const current = options[activeOption];

  const handleOptionChange = (opt: BookingOption) => {
    if (opt !== activeOption) {
      setIframeLoaded(false);
      setActiveOption(opt);
    }
  };

  return (
    <div id="booking-view-container" className="max-w-5xl mx-auto space-y-10 font-sans select-none text-white">
      
      {/* Header and Pitch */}
      <div className="border-b border-zinc-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-[#040c1e]/60 border border-[#1e2d4a]/80 rounded px-3 py-1 text-[10px] font-mono font-medium text-cyan-400 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>[ ADVISORY INGRESS GATEWAY ]</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="font-display text-2xl sm:text-4xl font-light text-white tracking-widest uppercase">
              Schedule Diagnostic
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Secure a direct consult with <span className="text-white font-medium">Vishnu Vardhan Burri</span> (Chief Systems Director). Select the preferred slot duration below to customize the advisory footprint.
            </p>
          </div>

          {/* Option Selector Toggle */}
          <div className="inline-flex bg-zinc-950/80 border border-zinc-900 rounded p-1">
            <button
              onClick={() => handleOptionChange('15min')}
              className={`px-4 py-1.5 rounded text-[10px] font-mono tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                activeOption === '15min'
                  ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-500/20 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
              }`}
            >
              15-Min Diagnostic
            </button>
            <button
              onClick={() => handleOptionChange('30min')}
              className={`px-4 py-1.5 rounded text-[10px] font-mono tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                activeOption === '30min'
                  ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-500/20 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
              }`}
            >
              30-Min Briefing
            </button>
          </div>
        </div>

        {/* Action Button */}
        <a
          href={current.url}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start md:self-end bg-[#040c1e] hover:bg-[#061533] border border-[#0f1d3a] hover:border-cyan-400/40 text-white rounded-lg py-3 px-6 font-mono text-[10px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer group shrink-0"
        >
          <span>Open scheduler in new tab</span>
          <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
        </a>
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Connection Details / Metadata */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          <div className="bg-[#030712]/60 border border-zinc-900 rounded-lg p-6 space-y-6 relative overflow-hidden flex-1 flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block">
                  // ADVISORY SPECS & DELIVERABLES
                </span>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                  {current.title}
                </h3>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                  {current.pitch}
                </p>
              </div>

              <div className="space-y-4 font-sans text-xs">
                {current.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="block font-semibold text-zinc-200">{del.title}</span>
                      <span className="text-[11px] text-zinc-400 font-light">{del.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-5 mt-6 space-y-3 font-mono text-[10px]">
              <div className="flex justify-between">
                <span className="text-zinc-500">FORMAT:</span>
                <span className="text-zinc-300 font-medium">1:1 Secure Video Call</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">DURATION:</span>
                <span className="text-cyan-400 font-bold">{current.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">AUDIENCE:</span>
                <span className="text-zinc-300">{current.audience}</span>
              </div>
            </div>
          </div>

          {/* Secure gateway notice */}
          <div className="bg-zinc-950/40 border border-zinc-900/60 rounded-lg p-5 space-y-3 font-mono text-[9px] text-zinc-500 leading-normal">
            <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
              <Terminal className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="font-bold tracking-wider">[CONNECTION STATUS]</span>
            </div>
            <p>
              Telemetry tunnels established securely. All booking schedules are synchronized instantly with Vishnu's sovereign calendar registers. Zero telemetry logs are leaked outside the sandbox.
            </p>
          </div>
        </div>

        {/* Right Column: Embedded Cal.com Scheduler Iframe */}
        <div className="lg:col-span-8 bg-[#030712]/60 border border-zinc-900 rounded-lg overflow-hidden flex flex-col h-[640px] relative">
          
          {/* Top telemetry status bar */}
          <div className="bg-[#040c1e]/40 border-b border-zinc-900 px-5 py-3 flex items-center justify-between font-mono text-[9px] text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${iframeLoaded ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
              <span className="uppercase tracking-wider">
                {iframeLoaded ? 'CAL.COM SECURE TUNNEL ONLINE' : 'ESTABLISHING CAL.COM SECURE TUNNEL...'}
              </span>
            </div>
            <span className="text-zinc-500 lowercase font-mono">
              {current.url.replace("https://", "")}
            </span>
          </div>

          {/* Cal.com Iframe */}
          <div className="flex-1 w-full h-full relative bg-zinc-950/20">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 z-10 bg-zinc-950/40">
                <div className="w-6 h-6 border-2 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
                <span className="font-mono text-[10px] text-zinc-500 tracking-wider">LOADING SECURE SCHEDULER</span>
              </div>
            )}
            <iframe
              key={activeOption}
              src={`${current.url}?embed=true`}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="camera; microphone; clipboard-write;"
              onLoad={() => setIframeLoaded(true)}
              className="w-full h-full"
            />
          </div>

        </div>

      </div>

    </div>
  );
}

