import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, Cpu, Code2, Layers, Check, 
  HelpCircle, ChevronDown, Sparkles, Scale, Info, Globe, ShieldAlert
} from 'lucide-react';

interface Principle {
  id: string;
  category: 'principles' | 'standards' | 'process';
  title: string;
  tagline: string;
  metric: string;
  description: string;
  evidence: string[];
}

const TRUST_DATA: Principle[] = [
  {
    id: 'human-excellence',
    category: 'principles',
    title: 'Sovereign Human Excellence',
    tagline: 'Refusal of automated generative AI slop and unverified code bots.',
    metric: '100% HUMAN AUTHORSHIP',
    description: 'We reject high-volume, low-quality automated code generation. Code produced by automated bots often contains silent, non-obvious race conditions, memory leakage, and structural debt. Every single line of code we deliver is entirely human-authored, peer-reviewed, and mathematically reasoned.',
    evidence: [
      'No reliance on open-source code copilots for critical state machines',
      'Full mathematical reasoning of lock-free concurrency queues',
      'Rigorous manual review of low-level memory layout limits'
    ]
  },
  {
    id: 'db-tuning',
    category: 'principles',
    title: 'Zero-Latency Database Isolation',
    tagline: 'Deep low-level database tuning and query state separation.',
    metric: '42%+ LATENCY SAVINGS',
    description: 'We isolate database transaction boundaries, index hot paths manually, and refactor slow subqueries. We ensure high-throughput platforms operate at maximum database efficiency without expensive over-provisioning.',
    evidence: [
      'Strict execution plan auditing under simulated peak loads',
      'Elimination of database lock escalation loops',
      'Implementation of lock-free read-replicas for analytics queries'
    ]
  },
  {
    id: 'iso-standards',
    category: 'standards',
    title: 'ISO 27001 & SOC 2 Alignments',
    tagline: 'Continuous information security systems and auditable trace logs.',
    metric: 'MILITARY-GRADE SECURITY',
    description: 'Our diagnostic methods and internal engineering systems comply with rigorous global safety and integrity metrics. All client systems are audited within air-gapped terminal sandboxes.',
    evidence: [
      'Full air-gapped sandboxing of code telemetry during intelligence audits',
      'Zero-tracker, zero-pixel local footprint policies for client sovereignty',
      'Bilateral NDAs applied immediately prior to repository handovers'
    ]
  },
  {
    id: 'airgap-diag',
    category: 'standards',
    title: 'Air-Gapped Diagnostic Isolation',
    tagline: 'Complete sandboxing of customer intellectual property.',
    metric: 'ZERO INTERNET ACCESS',
    description: 'When auditing high-value systems, we process repositories and environment configurations within strict isolated environments that have zero external network egress.',
    evidence: [
      'Prevention of source code metadata leakage',
      'Local deterministic static profiling execution engines',
      'Instant post-audit diagnostic sandbox shredding and clearance'
    ]
  },
  {
    id: 'process-sow',
    category: 'process',
    title: 'SOW Milestone Commitments',
    tagline: 'Strict Statements of Work and clear accountability barriers.',
    metric: '100% FEE TRANSPARENCY',
    description: 'Every phase of our strategic partnership is governed by clear, pre-defined milestones. We avoid speculative retainer scopes, keeping ourselves fully accountable for direct deliverables.',
    evidence: [
      'Granular hourly and daily task reporting sent weekly',
      'Strict liability caps limited directly to the Statement of Work fee value',
      'Fast-track dispute resolution via confidential LCIA arbitration'
    ]
  },
  {
    id: 'director-channel',
    category: 'process',
    title: 'Chief Director Channel Access',
    tagline: 'Bypassing account managers to talk directly to systems masters.',
    metric: 'DIRECT EXECUTIVE INGRESS',
    description: 'We do not employ non-technical account managers or coordinators. Clients communicate directly with our Chief Systems Director, ensuring instant technical alignment and zero communications lag.',
    evidence: [
      'Immediate technical feedback on production incidents',
      'No translation layers between business goals and database schemas',
      'Direct system scoping from the initial consultation call'
    ]
  }
];

export default function TrustSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'principles' | 'standards' | 'process'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredData = TRUST_DATA.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="trust-section" className="py-24 border-t border-zinc-900/80 bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Heading */}
        <div className="text-center space-y-4">
          <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block font-bold">
            [ SYSTEM_INTEGRITY_PROTECTION ]
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-light text-white tracking-widest uppercase">
            Trust Charter & Operations
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            In an era of generic automated code bots, we publish our operational standards and structural principles. Inspect our commitments to software craft and mutual safety.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
          {(['all', 'principles', 'standards', 'process'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedId(null);
              }}
              className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider rounded border transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-black border-white font-bold'
                  : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat === 'all' ? '1. Complete Charter' : cat === 'principles' ? '2. Core Principles' : cat === 'standards' ? '3. Quality Standards' : '4. Working Process'}
            </button>
          ))}
        </div>

        {/* Accordion / Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {filteredData.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-[#02050e]/90 border rounded-lg transition-all duration-300 relative group overflow-hidden ${
                  isExpanded 
                    ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.06)]' 
                    : 'border-zinc-900 hover:border-zinc-800'
                }`}
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 left-0 right-0 h-[1.5px] transition-colors ${
                  isExpanded ? 'bg-cyan-400' : 'bg-transparent group-hover:bg-zinc-850'
                }`} />

                {/* Card Content Header */}
                <div 
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="p-6 cursor-pointer select-none space-y-3"
                >
                  <div className="flex justify-between items-start gap-4">
                    <span className="font-mono text-[9px] text-cyan-400 uppercase font-semibold bg-cyan-950/25 border border-cyan-500/20 px-2 py-0.5 rounded tracking-wider">
                      {item.metric}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-cyan-400' : 'group-hover:text-zinc-350'}`} />
                  </div>

                  <div>
                    <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light mt-1.5 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                {/* Expandable Body */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-zinc-900 bg-[#030713]/40"
                    >
                      <div className="p-6 pt-5 space-y-4">
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                          {item.description}
                        </p>

                        <div className="space-y-2.5">
                          <span className="block text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                            Guaranteed Compliance Evidence:
                          </span>
                          <ul className="space-y-2 text-xs text-zinc-400 font-light">
                            {item.evidence.map((ev, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                <span>{ev}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
