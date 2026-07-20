import { BrowserRouter, useNavigate, useLocation, Routes, Route, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { 
  Search, ShieldAlert, Cpu, Database, Mail, ExternalLink, Copy, Check, 
  Terminal, Globe, BookOpen, Clock, RefreshCw, Layers, Sparkles, Phone,
  FileText, Landmark, Key, Server
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_COMPANIES_RESEARCH_DATA, AllCompanyResearch } from '../data/allCompaniesResearch';
import { pushStateAndNotify } from '../utils/router';

interface ResearchIndexViewProps {
  onBackToHome: () => void;
  onBookAdvisory: () => void;
}

// Generate a clean slug for URL routing
export const getCompanySlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\.com$/i, '-com')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

export default function ResearchIndexView({ onBackToHome, onBookAdvisory }: ResearchIndexViewProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCompany, setSelectedCompany] = useState<AllCompanyResearch | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [copiedSlug, setCopiedSlug] = useState(false);
  const [isCopiedText, setIsCopiedText] = useState<string | null>(null);

  // Dynamic SEO and title management are handled globally in App.tsx to ensure consistency and prevent duplicates.

  // Read URL on mount or back button to support deep link-like state
  useEffect(() => {
    const handleUrlChange = () => {
      const path = location.pathname;
      if (path.startsWith('/research/')) {
        const slug = path.replace('/research/', '');
        const found = ALL_COMPANIES_RESEARCH_DATA.find(c => getCompanySlug(c.name) === slug);
        if (found) {
          setSelectedCompany(found);
        } else {
          setSelectedCompany(null);
        }
      } else {
        setSelectedCompany(null);
      }
    };

    handleUrlChange();
    
    
  }, [location.pathname]);

  // Set URL on select
  const handleSelectCompany = (company: AllCompanyResearch | null) => {
    if (company) {
      const slug = getCompanySlug(company.name);
      navigate(`/research/${slug}`);
      setSelectedCompany(company);
    } else {
      navigate('/research-index');
      setSelectedCompany(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter unique sectors
  const sectors = ['all', ...Array.from(new Set(ALL_COMPANIES_RESEARCH_DATA.map(c => {
    // Simplify or clean sector names for filter pills
    if (c.sector.toLowerCase().includes('cyber')) return 'Cybersecurity';
    if (c.sector.toLowerCase().includes('fin')) return 'FinTech';
    if (c.sector.toLowerCase().includes('health')) return 'HealthTech';
    if (c.sector.toLowerCase().includes('ai')) return 'Artificial Intelligence';
    if (c.sector.toLowerCase().includes('dev')) return 'DevTools';
    return c.sector;
  })))].slice(0, 7);

  // Filter companies
  const filteredCompanies = ALL_COMPANIES_RESEARCH_DATA.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          company.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          company.techStack.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedSector === 'all') return matchesSearch;
    
    const companySec = company.sector.toLowerCase();
    if (selectedSector === 'Cybersecurity') return matchesSearch && companySec.includes('cyber');
    if (selectedSector === 'FinTech') return matchesSearch && companySec.includes('fin');
    if (selectedSector === 'HealthTech') return matchesSearch && companySec.includes('health');
    if (selectedSector === 'Artificial Intelligence') return matchesSearch && companySec.includes('ai');
    if (selectedSector === 'DevTools') return matchesSearch && companySec.includes('dev');
    
    return matchesSearch && company.sector === selectedSector;
  });

  const handleCopyEndpoint = (slug: string) => {
    const fullUrl = `https://www.xaviratechlabs.com/research/${slug}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedSlug(true);
    setTimeout(() => setCopiedSlug(false), 2000);
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setIsCopiedText(id);
    setTimeout(() => setIsCopiedText(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-white min-h-screen">
      
      {/* HEADER SECTION FOR THE CTO */}
      <div className="border-b border-zinc-900 pb-8 mb-12 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-[0.3em] block font-bold">
              // SECURE RECONNAISSANCE CORE
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-light text-white tracking-widest uppercase">
              CTO Research Directory
            </h1>
            <p className="text-sm text-zinc-400 max-w-2xl font-light leading-relaxed">
              Continuous, passive architectural scanning and vulnerability hypothesis matrix mapping across 104 sovereign technology and infrastructure systems.
            </p>
          </div>
          <button 
            onClick={onBackToHome}
            className="px-5 py-2.5 bg-zinc-950 border border-zinc-900 text-xs font-mono tracking-wider hover:border-zinc-700 transition-all rounded text-zinc-400 hover:text-white cursor-pointer"
          >
            ← BACK TO HUB
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!selectedCompany ? (
          /* ========================================================================= */
          /* 1. DIRECTORY LIST VIEW (104 Targets)                                     */
          /* ========================================================================= */
          <motion.div
            key="directory-list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            {/* SEARCH AND FILTERS */}
            <div className="flex flex-col lg:flex-row gap-4 items-stretch justify-between bg-zinc-950/40 p-4 border border-zinc-900 rounded-lg">
              {/* Search box */}
              <div className="relative flex-grow flex items-center max-w-xl">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5" />
                <input
                  type="text"
                  placeholder="Filter 104 targets by name, core technologies, scaling risk parameters..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/60 border border-zinc-900 rounded px-4 py-3 pl-10 text-xs font-mono text-white outline-none focus:border-cyan-500/50 transition-all placeholder:text-zinc-600"
                />
              </div>

              {/* Quick stats badge */}
              <div className="flex items-center gap-3 self-end lg:self-center font-mono text-xs">
                <span className="text-zinc-500">ACTIVE CHANNELS:</span>
                <span className="bg-cyan-950/20 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded font-bold glow-text-cyan">
                  {filteredCompanies.length} / 104 TARGETS SHOWING
                </span>
              </div>
            </div>

            {/* SECTOR FILTER PILLS */}
            <div className="flex flex-wrap gap-2 pb-2">
              {sectors.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`px-3 py-1.5 text-xs font-mono rounded transition-all cursor-pointer ${
                    selectedSector === sec
                      ? 'bg-white text-black font-semibold border border-white'
                      : 'bg-zinc-950 text-zinc-500 border border-zinc-900 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {sec === 'all' ? 'ALL SECTORS' : sec.toUpperCase()}
                </button>
              ))}
            </div>

            {/* DIRECTORY GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCompanies.map((company, index) => {
                const slug = getCompanySlug(company.name);
                return (
                  <div
                    key={index}
                    onClick={() => handleSelectCompany(company)}
                    className="bg-[#030611]/80 border border-zinc-900 hover:border-cyan-500/40 p-5 rounded-lg transition-all duration-200 group cursor-pointer relative overflow-hidden hover:shadow-[0_4px_20px_rgba(6,182,212,0.03)]"
                  >
                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-cyan-500/30 transition-all" />
                    
                    <div className="space-y-4">
                      {/* Company meta */}
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-zinc-500 font-bold">
                          [TARGET_ID: {String(index + 1).padStart(3, '0')}]
                        </span>
                        <span className="text-zinc-400 bg-zinc-900 border border-zinc-850 px-2 py-0.5 rounded">
                          {company.geography}
                        </span>
                      </div>

                      {/* Name and Sector */}
                      <div className="space-y-1">
                        <h3 className="font-display text-lg font-bold text-white tracking-wide uppercase group-hover:text-cyan-400 transition-colors">
                          {company.name}
                        </h3>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/20 border border-cyan-500/10 px-2 py-0.5 rounded font-bold uppercase tracking-wider block w-fit">
                          {company.sector}
                        </span>
                      </div>

                      {/* Primary Scaling Risk */}
                      <div className="space-y-1.5 border-t border-zinc-900/60 pt-3">
                        <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                          // Identified Bottleneck Vector:
                        </span>
                        <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-light">
                          {company.scalingRisks}
                        </p>
                      </div>

                      {/* Bottom row: secure navigation link */}
                      <div className="pt-2 border-t border-zinc-900/60 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                        <span className="truncate max-w-[150px]">
                          {company.website}
                        </span>
                        <span className="text-zinc-300 group-hover:text-cyan-400 flex items-center gap-1 transition-colors font-semibold">
                          OPEN DEEP-DIVE →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* IF NO TARGETS FOUND */}
            {filteredCompanies.length === 0 && (
              <div className="text-center py-16 border border-dashed border-zinc-900 rounded-lg bg-zinc-950/20">
                <ShieldAlert className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
                <span className="block font-mono text-xs text-zinc-400 uppercase tracking-wider">No diagnostic profiles match your query</span>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedSector('all'); }}
                  className="mt-4 px-4 py-2 bg-zinc-900 text-zinc-300 text-xs font-mono rounded hover:text-white transition-all border border-zinc-850"
                >
                  RESET SEARCH
                </button>
              </div>
            )}
          </motion.div>
        ) : (
          /* ========================================================================= */
          /* 2. DEDICATED COMPANY DETAIL VIEW (/research/{{CompanySlug}})              */
          /* ========================================================================= */
          <motion.div
            key="company-detail"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            {/* BREADCRUMB / BACK NAVIGATION */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleSelectCompany(null)}
                className="font-mono text-xs text-zinc-500 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
              >
                ← BACK TO TARGET DIRECTORY
              </button>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[9px] text-zinc-500 tracking-wider">SYSTEM SECURE CHANNEL ON</span>
              </div>
            </div>

            {/* SIMULATED CTO BROWSER BARS WITH ENDPOINT */}
            <div className="bg-[#030611] border border-zinc-900 rounded-lg overflow-hidden shadow-xl">
              {/* Fake Chrome Address Bar */}
              <div className="bg-zinc-950 px-4 py-3 border-b border-zinc-900 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                </div>
                
                {/* Secure URL Bar */}
                <div className="flex-grow max-w-3xl bg-black border border-zinc-900 rounded px-4 py-1.5 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2 truncate">
                    <Globe className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                    <span className="text-zinc-600 font-medium">https://</span>
                    <span className="text-zinc-300">www.xaviratechlabs.com</span>
                    <span className="text-zinc-500">/research/</span>
                    <span className="text-cyan-400 font-semibold">{getCompanySlug(selectedCompany.name)}</span>
                  </div>
                  <button
                    onClick={() => handleCopyEndpoint(getCompanySlug(selectedCompany.name))}
                    title="Copy Secure Link"
                    className="p-1 hover:text-white hover:bg-zinc-900 rounded transition-colors"
                  >
                    {copiedSlug ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-500" />}
                  </button>
                </div>

                <div className="hidden sm:block text-[9px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-900 border border-zinc-850 px-2.5 py-1 rounded">
                  [CTO DIRECT ACCESS]
                </div>
              </div>

              {/* REPORT METADATA HUB */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* Header Profile Title */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-zinc-900 pb-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-display text-2xl sm:text-4xl font-extralight text-white tracking-widest uppercase">
                        {selectedCompany.name}
                      </h2>
                      <span className="font-mono text-[10px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded uppercase tracking-wider font-bold">
                        {selectedCompany.geography}
                      </span>
                      <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950/20 border border-cyan-500/20 px-2.5 py-1 rounded uppercase tracking-wider font-bold">
                        {selectedCompany.sector}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-zinc-400 max-w-3xl font-light leading-relaxed">
                      Deep Architecture Audit, Code Quality Scanning, and Sovereign System Security Assessment Report.
                    </p>
                  </div>

                  {/* Core Status Summary Card */}
                  <div className="bg-black/40 border border-zinc-900 p-4 rounded-lg min-w-[200px] font-mono text-xs space-y-2.5">
                    <div className="flex justify-between border-b border-zinc-900 pb-1.5 text-zinc-500">
                      <span>Status:</span>
                      <span className="text-emerald-400 font-bold uppercase">Sovereign active</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-1.5 text-zinc-500">
                      <span>Priority score:</span>
                      <span className="text-cyan-400 font-bold">{selectedCompany.priorityScore1to10 || 10}/10</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-1.5 text-zinc-500">
                      <span>Risk classification:</span>
                      <span className="text-rose-500 font-bold uppercase">{selectedCompany.technicalRiskCategory || "Diagnostic-Led"}</span>
                    </div>
                    <div className="flex justify-between text-zinc-500">
                      <span>Total raised:</span>
                      <span className="text-white font-bold">{selectedCompany.totalRaised}</span>
                    </div>
                  </div>
                </div>

                {/* TWO COLUMN GRID ANALYSIS */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* LEFT COLUMN: DIAGNOSTIC BLUEPRINTS (Core info) */}
                  <div className="lg:col-span-8 space-y-8">
                    
                    {/* BOTTLE-NECK IDENTIFICATION PANEL */}
                    <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-lg space-y-4">
                      <div className="flex items-center gap-2 text-rose-500 font-mono text-xs font-bold uppercase tracking-widest">
                        <ShieldAlert className="w-4 h-4" />
                        <span>[CRITICAL SCALING BOTTLE-NECKS & PERFORMANCE RISKS]</span>
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-300 font-light">
                        {selectedCompany.scalingRisks}
                      </p>
                      <div className="pt-3 border-t border-zinc-900/60 flex flex-wrap gap-4 text-[11px] font-mono text-zinc-500">
                        <span>LIFECYCLE SEVERITY: <strong className="text-rose-400 uppercase">{selectedCompany.painPointSeverity || "CRITICAL"}</strong></span>
                      </div>
                    </div>

                    {/* DYNAMIC Playbook & Strategy Recommendation */}
                    <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-lg space-y-5">
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest">
                        <Terminal className="w-4 h-4" />
                        <span>[RECOMMENDED REMEDIATION PLAYBOOK]</span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-xs font-mono border-b border-zinc-900 pb-2 text-zinc-400">
                          <span>RECOMMENDED ROUTE:</span>
                          <span className="text-white font-bold uppercase">{selectedCompany.recommendedPlaybook || "Diagnostic Playbook"}</span>
                        </div>
                        
                        <p className="text-xs text-zinc-400 leading-relaxed font-light">
                          Our principal team recommends mounting a non-disruptive static code analyzer to map out precise file-lock bottlenecks, recursive event overhead, and database concurrency deadlocks across your microservices mesh.
                        </p>
                        
                        {/* Playbook checklist items */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-300 bg-black/40 p-4 rounded-lg border border-zinc-900">
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-400 font-bold select-none">[✓]</span>
                            <span>Query Isolators</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-400 font-bold select-none">[✓]</span>
                            <span>Memory Heap Diagnostics</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-400 font-bold select-none">[✓]</span>
                            <span>Non-Blocking Routines</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-400 font-bold select-none">[✓]</span>
                            <span>Secure API Gateways</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* TECH STACK ANALYZER */}
                    <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-lg space-y-4">
                      <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs font-bold uppercase tracking-widest">
                        <Cpu className="w-4 h-4" />
                        <span>[CORE ARCHITECTURAL STACK & LANGUAGES]</span>
                      </div>
                      
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        Analyzed microservice stack elements mapped from active public repository headers, client telemetry traces, and infrastructure announcements.
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {selectedCompany.techStack.split(',').map((tech, i) => (
                          <span key={i} className="text-xs font-mono bg-[#030611] text-zinc-300 px-3 py-1.5 border border-zinc-900 rounded">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* RIGHT COLUMN: EXECUTIVE INTEL & ACTION (CTO focus) */}
                  <div className="lg:col-span-4 space-y-6">
                    
                    {/* KEY REPRESENTATIVES PANEL */}
                    <div className="bg-zinc-950/40 border border-zinc-900 p-6 rounded-lg space-y-4">
                      <span className="block font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">
                        // Key Representatives:
                      </span>

                      <div className="space-y-4 font-mono text-xs">
                        {/* CEO */}
                        {selectedCompany.ceo && (
                          <div className="border-b border-zinc-900 pb-3">
                            <span className="text-zinc-500 block text-[10px] uppercase">Chief Executive Officer</span>
                            <span className="text-white font-bold block">{selectedCompany.ceo}</span>
                          </div>
                        )}

                        {/* CTO */}
                        {selectedCompany.cto && selectedCompany.cto !== "N/A" && (
                          <div className="border-b border-zinc-900 pb-3">
                            <span className="text-zinc-500 block text-[10px] uppercase">Chief Technology Officer</span>
                            <span className="text-cyan-400 font-bold block">{selectedCompany.cto}</span>
                          </div>
                        )}

                        {/* VP Engineering */}
                        {selectedCompany.vpEngineering && selectedCompany.vpEngineering !== "N/A" && (
                          <div className="border-b border-zinc-900 pb-3">
                            <span className="text-zinc-500 block text-[10px] uppercase">VP of Engineering</span>
                            <span className="text-white font-bold block">{selectedCompany.vpEngineering}</span>
                          </div>
                        )}

                        {/* SECURE DIRECT MAIL */}
                        {selectedCompany.email && (
                          <div className="bg-black/60 border border-zinc-900 p-3 rounded flex items-center justify-between gap-3">
                            <div className="truncate">
                              <span className="text-zinc-500 block text-[9px] uppercase">Secured Email Contact</span>
                              <span className="text-zinc-300 text-xs block truncate" title={selectedCompany.email}>
                                {selectedCompany.email}
                              </span>
                            </div>
                            <button
                              onClick={() => handleCopyText(selectedCompany.email, 'email')}
                              className="p-1.5 hover:text-white rounded transition-colors"
                              title="Copy Contact Mail"
                            >
                              {isCopiedText === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-zinc-500" />}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* SITEMAP / EXTERNAL RESOURCE LINKS */}
                    <div className="bg-zinc-950/40 border border-zinc-900 p-6 rounded-lg space-y-4 font-mono text-xs">
                      <span className="block text-zinc-500 uppercase tracking-widest block text-[10px] font-bold">
                        // Verified Corporate Linkages:
                      </span>

                      <div className="space-y-2">
                        <a
                          href={`https://${selectedCompany.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2.5 bg-black hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-700 rounded transition-all text-zinc-400 hover:text-white group"
                        >
                          <span>VISIT SITE ({selectedCompany.website})</span>
                          <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                        </a>
                      </div>
                    </div>

                    {/* DEDICATED CONSULTATION CALL GATEWAY FOR THIS TARGET */}
                    <div className="bg-gradient-to-b from-cyan-950/10 to-transparent border border-cyan-500/20 p-6 rounded-lg space-y-4">
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] text-cyan-400 tracking-widest block font-bold uppercase">// CTO SECURED GATEWAY</span>
                        <h4 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                          Scoping Call Alignment
                        </h4>
                      </div>
                      
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        Book a secure, non-binding scoping alignment regarding {selectedCompany.name}'s architecture, system scale bottlenecks, or cost-saving engineering.
                      </p>

                      <button
                        onClick={onBookAdvisory}
                        className="w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-zinc-950 hover:from-cyan-500 hover:to-cyan-400 font-mono font-bold text-xs uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 glow-cyan cursor-pointer"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Book 1-on-1 CTO Call</span>
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
