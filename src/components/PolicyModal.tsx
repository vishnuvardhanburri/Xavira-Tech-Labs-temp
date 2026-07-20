import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, X, FileText, Scale, Eye, ShieldCheck, Check, Info, ArrowDown, ChevronRight } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms' | 'sovereign' | 'governance';
}

interface Section {
  id: string;
  title: string;
  tag: string;
}

const TAB_SECTIONS: Record<'privacy' | 'terms' | 'sovereign' | 'governance', Section[]> = {
  privacy: [
    { id: 'zero-tracker', title: 'Zero-Tracker Architecture', tag: '01' },
    { id: 'code-security', title: 'Source Code Security & Sandboxing', tag: '02' },
    { id: 'no-leakage', title: 'No Generative AI Leakage', tag: '03' },
    { id: 'confidentiality', title: 'Mutual Confidentiality By Default', tag: '04' },
  ],
  terms: [
    { id: 'liability-caps', title: 'Strict Liability Caps', tag: '01' },
    { id: 'no-warranty', title: 'No Warranty On Legacy Code', tag: '02' },
    { id: 'sre-sla', title: 'SRE SLA Operational Limits', tag: '03' },
    { id: 'jurisdiction', title: 'Governing Jurisdiction', tag: '04' },
  ],
  sovereign: [
    { id: 'no-delegation', title: 'No Delegation to Off-Shore', tag: '01' },
    { id: 'ai-resistance', title: 'AI Halled Resistance Guarantee', tag: '02' },
    { id: 'standards', title: 'Compliance & Accreditation Standards', tag: '03' },
  ],
  governance: [
    { id: 'engagement-transparency', title: 'Terms of Engagement & Transparency', tag: '01' },
    { id: 'limitation-liability', title: 'Strict Limitation of Liability', tag: '02' },
    { id: 'dispute-resolution', title: 'Efficient Dispute Resolution Protocol', tag: '03' },
    { id: 'regulatory-responsibility', title: 'Regulatory & Environmental Responsibility', tag: '04' },
  ],
};

export default function PolicyModal({ isOpen, onClose, initialTab = 'privacy' }: PolicyModalProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'sovereign' | 'governance'>(initialTab);
  const [agreed, setAgreed] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      // Prevent body scroll when open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialTab]);

  // Handle active section outline update on tab switches
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    const currentSections = TAB_SECTIONS[activeTab];
    if (currentSections && currentSections.length > 0) {
      setActiveSectionId(currentSections[0].id);
    }
  }, [activeTab]);

  // Scroll spy effect to check current visible element in viewport
  const handleScroll = () => {
    const container = contentRef.current;
    if (!container) return;

    const sections = container.querySelectorAll('[data-section]');
    let currentActiveId = '';
    
    const containerBounds = container.getBoundingClientRect();
    const triggerPoint = containerBounds.top + 80; // offset for detection near top boundary

    for (let i = 0; i < sections.length; i++) {
      const sectionEl = sections[i] as HTMLElement;
      const rect = sectionEl.getBoundingClientRect();
      
      if (rect.top <= triggerPoint) {
        currentActiveId = sectionEl.getAttribute('data-section') || '';
      }
    }

    // Default to first section if we haven't scrolled down enough
    if (!currentActiveId && TAB_SECTIONS[activeTab].length > 0) {
      currentActiveId = TAB_SECTIONS[activeTab][0].id;
    }

    if (currentActiveId && currentActiveId !== activeSectionId) {
      setActiveSectionId(currentActiveId);
    }
  };

  // Scroll trigger handler when a sidebar element is clicked
  const scrollToSection = (id: string) => {
    const container = contentRef.current;
    if (!container) return;

    const targetEl = container.querySelector(`[data-section="${id}"]`);
    if (targetEl) {
      const containerScrollTop = container.scrollTop;
      const targetRect = targetEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      const targetOffsetTop = targetRect.top - containerRect.top + containerScrollTop;
      
      container.scrollTo({
        top: targetOffsetTop - 15,
        behavior: 'smooth'
      });
      
      setActiveSectionId(id);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            className="relative w-full max-w-4xl h-[85vh] bg-[#02050e] border border-zinc-850 rounded-lg shadow-2xl flex flex-col overflow-hidden text-white font-sans"
          >
            {/* Top Cyan Border Indicator */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-[#1e2d4a] to-cyan-400" />

            {/* Header */}
            <div className="px-6 py-5 border-b border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <div>
                  <h2 className="text-sm font-mono uppercase tracking-widest font-bold text-white">
                    LEGAL SECURITY & GOVERNANCE COMPLIANCE
                  </h2>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase">
                    XAVIRA TECHNICAL AUDIT PROTECTION SYSTEMS
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-zinc-500 hover:text-white border border-transparent hover:border-zinc-800 rounded transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tab Selectors */}
            <div className="bg-[#030713] border-b border-zinc-900 px-6 flex overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`py-3.5 px-4 font-mono text-xs uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'privacy'
                    ? 'border-cyan-500 text-cyan-400 bg-cyan-950/10 font-bold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>1. Privacy & Data Sovereignty</span>
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`py-3.5 px-4 font-mono text-xs uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'terms'
                    ? 'border-cyan-500 text-cyan-400 bg-cyan-950/10 font-bold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>2. Terms of Engagement & Liability</span>
              </button>
              <button
                onClick={() => setActiveTab('sovereign')}
                className={`py-3.5 px-4 font-mono text-xs uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'sovereign'
                    ? 'border-cyan-500 text-cyan-400 bg-cyan-950/10 font-bold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>3. Sovereignty & AI Guardrails</span>
              </button>
              <button
                onClick={() => setActiveTab('governance')}
                className={`py-3.5 px-4 font-mono text-xs uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'governance'
                    ? 'border-cyan-500 text-cyan-400 bg-cyan-950/10 font-bold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <Scale className="w-3.5 h-3.5 text-cyan-500" />
                <span>4. Corporate Governance</span>
              </button>
            </div>

            {/* Split Sidebar + Content Workspace */}
            <div className="flex-1 flex overflow-hidden">
              
              {/* Left Sidebar Outline Selector (Scroll Spy Controller) */}
              <div className="w-64 border-r border-zinc-900 bg-[#030612]/50 p-5 hidden md:flex flex-col gap-4 select-none shrink-0">
                <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-2.5 flex items-center justify-between">
                  <span>DOCUMENT SECTIONS</span>
                  <span className="animate-pulse text-cyan-400">● LIVE</span>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  {TAB_SECTIONS[activeTab].map((section) => {
                    const isActive = activeSectionId === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`group flex items-start gap-3 px-3 py-2.5 rounded text-left transition-all duration-150 border focus:outline-none cursor-pointer ${
                          isActive
                            ? 'bg-cyan-950/20 border-cyan-500/30 text-cyan-400 font-medium shadow-[inset_0_1px_3px_rgba(6,182,212,0.05)]'
                            : 'bg-transparent border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30'
                        }`}
                      >
                        <span className={`font-mono text-[9px] tracking-wider px-1.5 py-0.5 rounded shrink-0 transition-colors ${
                          isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-zinc-900 text-zinc-600 group-hover:text-zinc-400'
                        }`}>
                          {section.tag}
                        </span>
                        <span className="text-[11px] font-mono leading-tight tracking-wide">{section.title}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="pt-3 border-t border-zinc-900 text-[9px] font-mono text-zinc-600 space-y-1">
                  <div className="flex justify-between">
                    <span>INDEXED FOR SEO</span>
                    <span className="text-cyan-500/60">PASS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RELIABILITY LEVEL</span>
                    <span className="text-emerald-500">100%</span>
                  </div>
                </div>
              </div>

              {/* Right Scrollable Content Pane */}
              <div 
                ref={contentRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light scrollbar-thin scrollbar-thumb-zinc-900 scroll-smooth"
              >
                {activeTab === 'privacy' && (
                  <div className="space-y-10">
                    <div className="bg-[#040c1e]/60 border border-cyan-500/10 rounded-lg p-4 space-y-2">
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                        <span>Data Sovereignty Promise</span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        We operate on a zero-telemetry, zero-tracker, zero-leak footprint. Our business is evaluating code reliability and system performance, not collecting behavior profiles.
                      </p>
                    </div>

                    <div className="space-y-8">
                      <div data-section="zero-tracker" className="space-y-3 pt-2">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">01 //</span>
                          <span>Zero-Tracker Architecture</span>
                        </h3>
                        <p>
                          This platform uses absolute local states and raw server-side delivery. We do not integrate third-party tracking pixels, marketing cookies, or external analytics systems. Your visit, your identity, and your network telemetry remain entirely sovereign to you.
                        </p>
                      </div>

                      <div data-section="code-security" className="space-y-3 pt-4">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">02 //</span>
                          <span>Source Code Security & Sandboxing</span>
                        </h3>
                        <p>
                          During any Engineering Intelligence Audit or active diagnostic review, client source code and configuration maps are processed within heavily sandboxed, air-gapped terminal environments. 
                          No code, secrets, API keys, or IP addresses are stored beyond the direct duration of the audit session.
                        </p>
                      </div>

                      <div data-section="no-leakage" className="space-y-3 pt-4">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">03 //</span>
                          <span>No Generative AI Leakage</span>
                        </h3>
                        <p>
                          We explicitly guarantee that your code repositories, design diagrams, database schemas, and intellectual assets are never fed into open-source or commercial AI Large Language Models for training. All analysis is executed using deterministic, local static profiling engines.
                        </p>
                      </div>

                      <div data-section="confidentiality" className="space-y-3 pt-4">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">04 //</span>
                          <span>Mutual Confidentiality By Default</span>
                        </h3>
                        <p>
                          Before a single file or repository link is transferred, a robust mutual NDA applies to all communication. We protect your vulnerabilities, memory footprint data, and cost metrics with the same level of strict secrecy that governs sovereign infrastructure.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'terms' && (
                  <div className="space-y-10">
                    <div className="bg-rose-950/20 border border-rose-500/20 rounded-lg p-4 space-y-2">
                      <div className="flex items-center gap-2 text-rose-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                        <ShieldAlert className="w-4 h-4 text-rose-400" />
                        <span>LEGALLY SAFEGUARDS & MUTUAL MITIGATION</span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        Our terms are designed to guarantee absolute safety and professional predictability, eliminating commercial risks or infinite liability loop traps.
                      </p>
                    </div>

                    <div className="space-y-8">
                      <div data-section="liability-caps" className="space-y-3 pt-2">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">01 //</span>
                          <span>Strict Liability Caps</span>
                        </h3>
                        <p>
                          To ensure perfect commercial safety, the total cumulative liability of XAVIRA Technologies for any claim, negligence, performance breach, or system recommendation is strictly capped at the direct fees paid under the associated engagement (e.g., £100 for Discovery, £5,000 for Audits, or up to £25,000 for full Transformation scopes). We carry comprehensive professional indemnity coverage.
                        </p>
                      </div>

                      <div data-section="no-warranty" className="space-y-3 pt-4">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">02 //</span>
                          <span>No Warranty On Legacy Code</span>
                        </h3>
                        <p>
                          We identify performance bottlenecks, memory leaks, and concurrency locks in your existing codebase. However, we cannot warrant that your legacy infrastructure, unvetted third-party packages, or cloud provider operations are free from pre-existing structural defects.
                        </p>
                      </div>

                      <div data-section="sre-sla" className="space-y-3 pt-4">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">03 //</span>
                          <span>SRE SLA Operational Limits</span>
                        </h3>
                        <p>
                          Our 24-Hour Guaranteed SLA applies to operational issues, anomaly resolution, and critical incident responses reported during standard working day business hours (9:00 AM to 6:00 PM local hub time). SRE emergency operations beyond business hours are subject to agreed system-complexity multipliers.
                        </p>
                      </div>

                      <div data-section="jurisdiction" className="space-y-3 pt-4">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">04 //</span>
                          <span>Governing Jurisdiction</span>
                        </h3>
                        <p>
                          These Terms of Engagement are governed by the laws of England and Wales, Singapore, or the State of New York, depending on the client's corporate headquarters hub. Any disputes shall be resolved through fast-track confidential binding arbitration.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'sovereign' && (
                  <div className="space-y-10">
                    <div className="bg-[#030a1c] border border-cyan-500/20 rounded-lg p-4 space-y-2">
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                        <span>Sovereign Human Excellence</span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        We protect systems against AI hallucinations, security regressions, and automated structural debt.
                      </p>
                    </div>

                    <div className="space-y-8">
                      <div data-section="no-delegation" className="space-y-3 pt-2">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">01 //</span>
                          <span>No Delegation to Off-Shore</span>
                        </h3>
                        <p>
                          Your platform audits and refactoring tasks are performed exclusively by experienced, vetted Principal Systems Architects. We do not subcontract work to off-shore development factories or deploy unvetted junior trainees to handle production architecture.
                        </p>
                      </div>

                      <div data-section="ai-resistance" className="space-y-3 pt-4">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">02 //</span>
                          <span>AI Halled Resistance Guarantee</span>
                        </h3>
                        <p>
                          We reject high-volume, low-quality AI code generation. Code produced by automated bots often contains silent, non-obvious race conditions, memory leakage, and structural debt. Every single line of code we deliver is entirely human-authored, reviewed, and mathematically reasoned.
                        </p>
                      </div>

                      <div data-section="standards" className="space-y-3 pt-4">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">03 //</span>
                          <span>Compliance & Accreditation Standards</span>
                        </h3>
                        <p>
                          Our systems and procedures align closely with ISO 27001 (Information Security Management) and SOC 2 Type II controls. We comply with GDPR, CCPA, and PDPA requirements for data processing and storage.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'governance' && (
                  <div className="space-y-10">
                    <div className="bg-[#030a1c] border border-cyan-500/20 rounded-lg p-4 space-y-2">
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                        <Scale className="w-4 h-4 text-cyan-400" />
                        <span>Corporate Governance Framework</span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        We operate with the highest standards of corporate governance, accountability, and regulatory compliance. Our engagements are structured to guarantee transparent progress, defined milestones, and mutual legal protection.
                      </p>
                    </div>

                    <div className="space-y-8">
                      <div data-section="engagement-transparency" className="space-y-3 pt-2">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">01 //</span>
                          <span>Terms of Engagement & Transparency</span>
                        </h3>
                        <p>
                          XAVIRA operates strictly under a professional Statements of Work (SOW) paradigm. All diagnostic briefs, Intelligence Audits, and full-scale Transformation or SRE sprints require predefined and mutually executed contract scopes. We guarantee transparent hourly/monthly allocations with granular task breakdowns updated weekly.
                        </p>
                      </div>

                      <div data-section="limitation-liability" className="space-y-3 pt-4">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">02 //</span>
                          <span>Strict Limitation of Liability</span>
                        </h3>
                        <p>
                          To maintain professional viability, XAVIRA Technologies enforces a strict bilateral limitation of liability. Our cumulative legal liability for any service, advisory report, custom code refactoring, or infrastructure execution is strictly capped at the direct fee value paid by the client under the active Statement of Work. In no event shall either party be liable for any indirect, consequential, or speculative commercial losses.
                        </p>
                      </div>

                      <div data-section="dispute-resolution" className="space-y-3 pt-4">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">03 //</span>
                          <span>Efficient Dispute Resolution Protocol</span>
                        </h3>
                        <p>
                          We believe that professional disagreements are best resolved through direct and transparent communication. Should any operational dispute arise during an engagement, the parties agree to a 14-day formal executive negotiation window. If unresolved, disputes shall be referred to and finally settled by fast-track confidential binding arbitration under the rules of the London Court of International Arbitration (LCIA) or a mutually agreed equivalent tribunal, rather than costly litigation.
                        </p>
                      </div>

                      <div data-section="regulatory-responsibility" className="space-y-3 pt-4">
                        <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <span className="text-cyan-400 font-mono text-[11px]">04 //</span>
                          <span>Regulatory & Environmental Responsibility</span>
                        </h3>
                        <p>
                          XAVIRA is committed to clean cloud architectures that minimise carbon footprints and computational waste. We actively design systems to conform with data sovereignty frameworks (GDPR, UK Data Protection Act) and ensure that all computational environments satisfy strict carbon-neutral cloud objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Panel Actions */}
            <div className="bg-[#030611] px-6 py-4 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shrink-0">
              <label className="flex items-center gap-3 select-none cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="rounded border-zinc-850 bg-zinc-950 text-cyan-500 focus:ring-0 w-4 h-4 cursor-pointer"
                />
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                  I ACKNOWLEDGE AND ACCEPT THESE PROTECTIVE POLICIES
                </span>
              </label>

              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-800 text-[10px] font-mono tracking-wider font-bold uppercase rounded transition-colors cursor-pointer"
                >
                  Close View
                </button>
                <button
                  onClick={() => {
                    if (agreed) {
                      onClose();
                    } else {
                      alert("Please acknowledge the policies before confirming.");
                    }
                  }}
                  disabled={!agreed}
                  className={`px-5 py-2 font-mono text-[10px] tracking-wider font-bold uppercase rounded transition-all cursor-pointer ${
                    agreed
                      ? 'bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'bg-zinc-850 text-zinc-500 cursor-not-allowed'
                  }`}
                >
                  CONFIRM POLICY ALIGNMENT
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
