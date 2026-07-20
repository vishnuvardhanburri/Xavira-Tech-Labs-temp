import React, { useState, useEffect } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/caseStudies';
import { ShieldCheck, FileText, Activity, Layers, ArrowUpRight, ArrowLeft, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CaseStudiesViewProps {
  selectedId: string | null;
  onBackToHome: () => void;
  onBookAdvisory: () => void;
  onToggleFavorite?: (item: { id: string; type: 'case' | 'article'; title: string; categoryOrSector: string }) => void;
  favorites?: { id: string; type: 'case' | 'article'; title: string; categoryOrSector: string }[];
}

export default function CaseStudiesView({ 
  selectedId, 
  onBackToHome, 
  onBookAdvisory,
  onToggleFavorite,
  favorites = []
}: CaseStudiesViewProps) {
  const [activeId, setActiveId] = useState<string>(CASE_STUDIES[0].id);

  useEffect(() => {
    if (selectedId) {
      const exists = CASE_STUDIES.some(cs => cs.id === selectedId);
      if (exists) {
        setActiveId(selectedId);
      }
    }
  }, [selectedId]);

  const activeCase = CASE_STUDIES.find(cs => cs.id === activeId) || CASE_STUDIES[0];

  // Dynamic SEO structured schemas and document title manager
  useEffect(() => {
    if (!activeCase) return;

    // Save original title
    const originalTitle = document.title;
    document.title = `${activeCase.name} Case Study | XAVIRA`;

    // Helper to cleanup existing schemas
    const cleanup = () => {
      document.getElementById('seo-cases-org-schema')?.remove();
      document.getElementById('seo-cases-breadcrumb-schema')?.remove();
      document.getElementById('seo-cases-detail-schema')?.remove();
    };

    cleanup();

    // Organization Schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.id = 'seo-cases-org-schema';
    orgScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "XAVIRA Technologies",
      "url": "https://www.xaviratechlabs.com",
      "logo": "https://www.xaviratechlabs.com/logo.png",
      "description": "Sovereign Engineering Intelligence & Technical Due Diligence."
    });
    document.head.appendChild(orgScript);

    // Breadcrumb Schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'seo-cases-breadcrumb-schema';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "XAVIRA Home", "item": "https://www.xaviratechlabs.com" },
        { "@type": "ListItem", "position": 2, "name": "Technical Case Studies", "item": "https://www.xaviratechlabs.com/cases" },
        { "@type": "ListItem", "position": 3, "name": activeCase.name, "item": `https://www.xaviratechlabs.com/cases/${activeCase.id}` }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    // Detailed TechArticle / Case study schema
    const detailScript = document.createElement('script');
    detailScript.type = 'application/ld+json';
    detailScript.id = 'seo-cases-detail-schema';
    detailScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": `Case Study: ${activeCase.name}`,
      "description": `System intervention audit and scaling metric profiles. Ref: ${activeCase.ref}. Metric: ${activeCase.metric}.`,
      "author": {
        "@type": "Organization",
        "name": "XAVIRA Technologies"
      },
      "publisher": {
        "@type": "Organization",
        "name": "XAVIRA Technologies"
      }
    });
    document.head.appendChild(detailScript);

    return () => {
      document.title = originalTitle;
      cleanup();
    };
  }, [activeCase]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16 select-none font-sans">
      
      {/* Title Header */}
      <div className="border-b border-zinc-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#040c1e]/60 border border-[#1e2d4a]/80 rounded px-3 py-1 text-[10px] font-mono font-medium text-cyan-400 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>[ SYSTEM AUDIT REGISTERS ]</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-light text-white tracking-widest uppercase">
            Case Studies
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl font-light leading-relaxed">
            In this generation, don't believe anyone blindly. Examine the real data, review our deep technical case studies below, and start a call with us when you are ready to secure your platform's future.
          </p>
        </div>
        
        <button
          onClick={onBackToHome}
          className="self-start md:self-end font-mono text-xs text-zinc-500 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOMEPAGE</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: List of cases (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-3">
          <span className="block font-mono text-[9px] tracking-widest text-zinc-500 uppercase mb-2">
            // SELECT RECORDS
          </span>
          <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {CASE_STUDIES.map((cs) => {
              const isActive = cs.id === activeId;
              return (
                <button
                  key={cs.id}
                  onClick={() => setActiveId(cs.id)}
                  className={`w-full text-left p-4.5 rounded-lg border transition-all duration-300 flex items-center justify-between group cursor-pointer relative ${
                    isActive 
                      ? 'bg-[#030c1f]/80 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.05)]' 
                      : 'bg-[#030611]/40 border-zinc-900 hover:border-zinc-800'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`font-mono text-sm shrink-0 transition-transform ${isActive ? 'text-cyan-400 font-bold scale-110' : 'text-zinc-600'}`}>
                      {cs.symbol}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`block font-display text-xs font-bold uppercase tracking-wider transition-colors ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                          {cs.name}
                        </span>
                        <span className="bg-amber-950/35 border border-amber-500/25 text-amber-400 font-mono text-[8px] px-1.5 py-0.2 rounded font-semibold uppercase tracking-wider scale-90">
                          Illustrative
                        </span>
                      </div>
                      <span className="block text-[10px] font-mono text-zinc-500">
                        REF: {cs.ref}
                      </span>
                    </div>
                  </div>
                  
                  <span className={`font-mono text-[9px] font-semibold border px-2 py-0.5 rounded uppercase ${
                    isActive 
                      ? 'text-cyan-400 bg-cyan-950/20 border-cyan-500/20 glow-text-cyan' 
                      : 'text-zinc-500 border-zinc-900'
                  }`}>
                    {cs.metric.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed breakdowns (lg:col-span-8) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-[#030712]/60 border border-zinc-900 rounded-xl p-6 sm:p-8 lg:p-10 space-y-8 relative overflow-hidden"
            >
              {/* Background ambient accents */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/5 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

              {/* Detail Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase">
                      {activeCase.sector}
                    </span>
                    <span className="text-zinc-700">•</span>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">
                      REF: {activeCase.ref}
                    </span>
                    <span className="text-zinc-700">•</span>
                    <span className="bg-amber-950/40 border border-amber-500/20 text-amber-300 font-mono text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider animate-pulse">
                      Illustrative Example
                    </span>
                    <span className="text-zinc-700">•</span>
                    {(() => {
                      const isFavorited = favorites.some(f => f.id === activeCase.id);
                      return (
                        <button
                          onClick={() => onToggleFavorite?.({
                            id: activeCase.id,
                            type: 'case',
                            title: activeCase.name,
                            categoryOrSector: activeCase.sector
                          })}
                          className={`px-2.5 py-0.5 rounded-md border font-mono text-[9px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
                            isFavorited
                              ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-400'
                              : 'bg-zinc-950/80 border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-700'
                          }`}
                        >
                          <Bookmark className={`w-2.5 h-2.5 ${isFavorited ? 'fill-cyan-400/20 text-cyan-400' : ''}`} />
                          <span>{isFavorited ? "Saved" : "Save"}</span>
                        </button>
                      );
                    })()}
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-normal text-white tracking-widest uppercase flex items-center gap-2">
                    <span>{activeCase.symbol}</span>
                    <span>{activeCase.name}</span>
                  </h2>
                </div>
                
                <div className="bg-cyan-950/20 border border-cyan-500/20 rounded p-3 text-right">
                  <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-1">
                    VERIFIED OUTCOME
                  </span>
                  <span className="block font-mono text-sm sm:text-base text-cyan-400 font-black tracking-wider uppercase glow-text-cyan">
                    {activeCase.metric}
                  </span>
                </div>
              </div>

              {/* Challenge Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-zinc-400">
                  <FileText className="w-4 h-4 text-zinc-500" />
                  <h3 className="font-display text-xs font-bold tracking-widest uppercase text-white">
                    01 // CLIENT CHALLENGE
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  {activeCase.challenge}
                </p>
              </div>

              {/* Audit & Patch Process Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Layers className="w-4 h-4 text-zinc-500" />
                  <h3 className="font-display text-xs font-bold tracking-widest uppercase text-white">
                    02 // XAVIRA AUDITING PROTOCOLS & IMPLEMENTATION
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {activeCase.process.map((step, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded bg-zinc-950/40 border border-zinc-900/40 hover:border-zinc-900/80 transition-colors"
                    >
                      <span className="font-mono text-[11px] text-cyan-500 bg-cyan-950/20 border border-cyan-500/20 w-6 h-6 rounded flex items-center justify-center shrink-0 font-bold">
                        {idx + 1}
                      </span>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final Business Performance Metrics */}
              <div className="bg-[#040c1e]/30 border border-[#0f1d3a]/60 rounded-lg p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <h3 className="font-display text-xs font-bold tracking-widest uppercase text-cyan-400">
                    03 // BUSINESS PERFORMANCE METRICS ACHIEVED
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {activeCase.results}
                </p>
              </div>

              {/* CTA footer */}
              <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-mono text-[10px] text-zinc-500">
                  PROTOCOL VERSION: XAV-AUD-2026-V1
                </span>
                <button
                  onClick={onBookAdvisory}
                  className="w-full sm:w-auto bg-[#040c1e] hover:bg-[#061533] border border-[#0f1d3a] hover:border-cyan-400/40 text-white rounded-lg py-2.5 px-5 font-mono text-[10px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer group"
                >
                  <span>Book Advisory Session</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
