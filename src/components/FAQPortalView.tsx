import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Database, 
  ShieldAlert, 
  FileText, 
  Terminal, 
  Handshake, 
  Sparkles,
  HelpCircle,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { FAQS_100 } from '../data/faqs';
import { FAQItem } from '../types';

interface FAQPortalViewProps {
  activeFaq: string | null;
  setActiveFaq: (id: string | null) => void;
}

export default function FAQPortalView({ activeFaq, setActiveFaq }: FAQPortalViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories list
  const categories = useMemo(() => {
    return ['All', 'Architecture & Concurrency', 'Security & Sovereignty', 'Due Diligence & Audits', 'Technology Stack', 'Engagement & Partnerships'];
  }, []);

  // Category Icon helper
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Architecture & Concurrency':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'Security & Sovereignty':
        return <ShieldAlert className="w-4 h-4 text-purple-400" />;
      case 'Due Diligence & Audits':
        return <FileText className="w-4 h-4 text-amber-400" />;
      case 'Technology Stack':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'Engagement & Partnerships':
        return <Handshake className="w-4 h-4 text-blue-400" />;
      default:
        return <HelpCircle className="w-4 h-4 text-zinc-400" />;
    }
  };

  // Filter and search FAQs
  const filteredFaqs = useMemo(() => {
    return FAQS_100.filter(faq => {
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-10" id="faq-portal-root">
      
      {/* Header */}
      <div className="space-y-4 border-b border-zinc-900 pb-8 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 px-2.5 py-1 rounded uppercase tracking-widest inline-flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              [ACTIVE ENTERPRISE KNOWLEDGE BASE]
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-light text-white tracking-widest uppercase">
              Operational FAQ Portal
            </h1>
          </div>
          <div className="flex items-center sm:justify-end gap-2 text-zinc-500 font-mono text-[10px]">
            <span className="text-zinc-400 font-bold">{filteredFaqs.length}</span> / {FAQS_100.length} VERIFIED ANSWERS ACTIVE
          </div>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed font-light max-w-2xl">
          Direct answers on our comparative engagement models, technical specialties, and sovereign operational perimeters. Use the filter controls or live search to isolate systems-specific documentation.
        </p>
      </div>

      {/* Controls Container (Search + Categories) */}
      <div className="space-y-6">
        {/* Search Input */}
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-zinc-500 absolute left-4" />
          <input
            id="faq-search-input"
            type="text"
            placeholder="Search FAQ by topic, keyword, database name, or stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-950/70 border border-zinc-900 rounded-lg px-5 py-4 pl-12 text-xs sm:text-sm font-mono text-white outline-none focus:border-cyan-500/40 focus:bg-zinc-950 transition-all placeholder:text-zinc-600 shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 text-[10px] font-mono text-zinc-500 hover:text-white uppercase tracking-wider px-2 py-1 bg-zinc-900 rounded border border-zinc-800 transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Badges */}
        <div className="flex flex-wrap gap-2 pt-1 border-b border-zinc-900/60 pb-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md font-mono text-[10px] tracking-wider uppercase transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-cyan-950/30 border border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                    : 'bg-zinc-950/50 border border-zinc-900 text-zinc-500 hover:border-zinc-800 hover:text-zinc-300'
                }`}
              >
                {cat !== 'All' && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <motion.div 
                  key={faq.id}
                  layout="position"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className={`bg-zinc-950 border rounded-lg overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.04)] bg-zinc-950' 
                      : 'border-zinc-900/80 hover:border-zinc-800 hover:bg-zinc-950/80 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full text-left px-5 py-5 sm:px-6 flex items-center justify-between gap-4 font-display font-medium text-white hover:bg-zinc-900/20 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-0.5 shrink-0 flex items-center justify-center">
                        {getCategoryIcon(faq.category)}
                      </span>
                      <span className="text-xs sm:text-sm tracking-wide font-bold uppercase text-zinc-100 leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <span className={`text-zinc-500 shrink-0 p-1 rounded-md bg-zinc-900/50 border border-zinc-800/40 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400 border-cyan-500/20' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                      >
                        <div className="border-t border-zinc-900 bg-[#07080d]/40">
                          <div className="px-5 py-6 sm:px-12 text-xs sm:text-[13px] leading-relaxed text-zinc-300 space-y-4 font-sans font-light">
                            <div className="prose prose-invert max-w-none text-zinc-300 font-light leading-relaxed">
                              {faq.answer.split('\n\n').map((para, pIdx) => (
                                <p key={pIdx} className="last:mb-0 mb-3">{para}</p>
                              ))}
                            </div>
                            
                            {/* Metadata line */}
                            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-900/80 pt-4 mt-4 font-mono text-[9px] text-zinc-500">
                              <span className="flex items-center gap-1.5 uppercase">
                                <Filter className="w-3 h-3 text-zinc-600" />
                                CATEGORY: <strong className="text-zinc-400 font-bold">{faq.category}</strong>
                              </span>
                              <span className="flex items-center gap-1 uppercase">
                                <CheckCircle2 className="w-3 h-3 text-cyan-500/50" />
                                STATUS: VERIFIED SCHEMATIC
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 border border-dashed border-zinc-900 rounded-xl bg-zinc-950/20"
            >
              <div className="text-zinc-600 font-mono text-xs uppercase tracking-widest mb-2">
                [NO SCHEMATICS MATCH QUERY]
              </div>
              <p className="text-zinc-500 text-xs font-light max-w-md mx-auto">
                No verified operational answers match your search term "{searchQuery}". Try filtering by a general category above, or searching with tags like "Rust", "audit", or "database".
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
