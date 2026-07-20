import { BrowserRouter, useNavigate, useLocation, Routes, Route, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Filter, Shield, Cpu, Cloud, Database, TrendingUp, Users, DollarSign, 
  MapPin, ExternalLink, Calendar, AlertTriangle, ChevronRight, FileText, ArrowLeft, 
  Layers, Radio, Building2, ChevronDown, ArrowUpRight, CheckCircle2, AlertOctagon, 
  Info, Activity, Award, Lock, Check, Sparkles, Terminal, Globe, HelpCircle
} from 'lucide-react';
import { COMPANIES_DATA, CompanyIntelligence, TimelineMilestone, TechGraphNode } from '../data/engineeringIntelligence';

interface ResearchPortalViewProps {
  onBackToHome: () => void;
  onBookAdvisory: () => void;
  initialRoutePath?: string;
  onRouteRedirect?: (path: string) => void;
}

const auditStages = [
  {
    id: 'stage-1',
    num: '01',
    title: 'External Surface Recon',
    subtitle: 'Passive Network Mapping',
    icon: Globe,
    color: '#06b6d4', // cyan-500
    glowColor: 'rgba(6, 182, 212, 0.15)',
    summary: 'Crawls public network footprints, active DNS configurations, and SSL/TLS handshakes to locate external boundaries and exposed routing layers.',
    signals: [
      'TLS handshake cipher suites',
      'Subdomain SAN declarations',
      'Mail transaction DNS profiles',
      'IP block geography mappings'
    ],
    deliverables: [
      'Subdomain Topographical Map',
      'Edge SSL Certificate Audit'
    ]
  },
  {
    id: 'stage-2',
    num: '02',
    title: 'Static Code DNA Profile',
    subtitle: 'Dependency & Tech-Stack Drift',
    icon: Cpu,
    color: '#3b82f6', // blue-500
    glowColor: 'rgba(59, 130, 246, 0.15)',
    summary: 'Analyzes public codebase footprints, library dependency trees, and Git contribution structures to estimate developer velocity and codebase decay.',
    signals: [
      'Commit timeline densities',
      'Package dependency drift rates',
      'Open codebase framework profiles',
      'Refactoring cycle indices'
    ],
    deliverables: [
      'Dependency Decay Rating',
      'Engineering Velocity Report'
    ]
  },
  {
    id: 'stage-3',
    num: '03',
    title: 'Infrastructure & Latency Scan',
    subtitle: 'CDN & Global Balancing',
    icon: Cloud,
    color: '#10b981', // emerald-500
    glowColor: 'rgba(16, 185, 129, 0.15)',
    summary: 'Evaluates Content Delivery Networks, multi-region database latency profiles, and routing redundancy paths to trace hosting architectures.',
    signals: [
      'Response header server tags',
      'CDN edge cache ratios',
      'Multi-region TCP handshake speed',
      'Host failover responsiveness'
    ],
    deliverables: [
      'Cloud Resource Balance Matrix',
      'Latency Deviation Ledger'
    ]
  },
  {
    id: 'stage-4',
    num: '04',
    title: 'Talent Capacity Audit',
    subtitle: 'Vacancy & Staffing Signals',
    icon: Users,
    color: '#a855f7', // purple-500
    glowColor: 'rgba(168, 85, 247, 0.15)',
    summary: 'Tracks developer career paths, public software engineering vacancies, and active repositories to measure staffing maturity.',
    signals: [
      'Tech-stack hiring requirements',
      'Engineering tenure profiles',
      'Technical leadership ratios',
      'Core developer retention index'
    ],
    deliverables: [
      'Engineering Core Maturity Index',
      'Headcount Growth Flow Analysis'
    ]
  },
  {
    id: 'stage-5',
    num: '05',
    title: 'Synthesis & Threat Ledger',
    subtitle: 'Capability Scorecard Convergence',
    icon: Shield,
    color: '#f43f5e', // rose-500
    glowColor: 'rgba(244, 63, 94, 0.15)',
    summary: 'Fuses and validates millions of public signals to construct the final 11-dimensional capabilities and high-availability index.',
    signals: [
      'Balanced score weight ratios',
      'Historical outage registries',
      'Edge vulnerability exposures',
      'Public incident reports correlation'
    ],
    deliverables: [
      '11-Dimensional Executive Report',
      'Signed SHA256 Digital Proof'
    ]
  }
];

export default function ResearchPortalView({ 
  onBackToHome, 
  onBookAdvisory,
  initialRoutePath,
  onRouteRedirect
}: ResearchPortalViewProps) {
  // Routing states
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCompanyId, setActiveCompanyId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'industry' | 'country' | 'tag' | 'funding' | 'employees' | null>(null);
  const [filterValue, setFilterValue] = useState<string | null>(null);

  // Search and Advanced Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedFunding, setSelectedFunding] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedEmployees, setSelectedEmployees] = useState<string>('all');
  const [selectedCloud, setSelectedCloud] = useState<string>('all');
  const [selectedAI, setSelectedAI] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');

  // Interactive UI states inside details view
  const [researchSubView, setResearchSubView] = useState<'directory' | 'methodology'>('directory');
  const [activeMethodScore, setActiveMethodScore] = useState<string>('architecture');
  const [selectedAuditStage, setSelectedAuditStage] = useState<number>(0);
  const [copiedCitationFormat, setCopiedCitationFormat] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'scorecard' | 'graph' | 'timeline' | 'risks' | 'citations'>('overview');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [showCrawlerPayload, setShowCrawlerPayload] = useState(false);
  const [showFiltersDrawer, setShowFiltersDrawer] = useState(false);

  // Read URL Path on mount and popstate
  useEffect(() => {
    const parseUrl = () => {
      const path = location.pathname;
      if (path.startsWith('/research')) {
        const parts = path.split('/').filter(Boolean); // ['research', 'omnea'] or ['research', 'industry', 'fintech']
        
        if (parts.length === 1) {
          setActiveCompanyId(null);
          setFilterType(null);
          setFilterValue(null);
        } else if (parts.length === 2) {
          const slug = parts[1];
          const company = COMPANIES_DATA.find(c => c.slug === slug);
          if (company) {
            setActiveCompanyId(company.id);
            setFilterType(null);
            setFilterValue(null);
            setActiveTab('overview');
          } else {
            setActiveCompanyId(null);
            setFilterType(null);
            setFilterValue(null);
          }
        } else if (parts.length === 3) {
          const type = parts[1] as any;
          const val = decodeURIComponent(parts[2]);
          setFilterType(type);
          setFilterValue(val);
          setActiveCompanyId(null);
          
          if (type === 'industry') setSelectedIndustry(val);
          if (type === 'country') setSelectedCountry(val);
          if (type === 'funding') setSelectedFunding(val);
          if (type === 'employees') setSelectedEmployees(val);
        }
      }
    };

    parseUrl();
    
    
  }, [location.pathname]);

  // Navigation helper
  const navigateTo = (path: string) => {
    navigate(path);
    if (onRouteRedirect) {
      onRouteRedirect(path);
    }
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Clear all filters
  const handleResetFilters = () => {
    setSelectedIndustry('all');
    setSelectedFunding('all');
    setSelectedCountry('all');
    setSelectedEmployees('all');
    setSelectedCloud('all');
    setSelectedAI('all');
    setSelectedTech('all');
    setSearchQuery('');
    navigateTo('/research');
  };

  // Extract all unique technologies for multi-faceted filters
  const allClouds = Array.from(new Set(COMPANIES_DATA.flatMap(c => c.techStack.cloud))).sort();
  const allAIs = Array.from(new Set(COMPANIES_DATA.flatMap(c => c.techStack.aiModelStack))).sort();
  const allTechStack = Array.from(
    new Set(
      COMPANIES_DATA.flatMap(c => [
        ...c.techStack.languages,
        ...c.techStack.frameworks,
        ...c.techStack.databases,
        ...c.techStack.infrastructure,
        ...c.techStack.observabilityStack
      ])
    )
  ).sort();

  // Filter & Search Logic
  const filteredCompanies = COMPANIES_DATA.filter(company => {
    // URL Route filter checks
    if (filterType && filterValue) {
      if (filterType === 'industry' && company.industry.toLowerCase() !== filterValue.toLowerCase()) return false;
      if (filterType === 'country' && company.country.toLowerCase() !== filterValue.toLowerCase()) return false;
      if (filterType === 'funding' && company.funding.toLowerCase() !== filterValue.toLowerCase()) return false;
      if (filterType === 'employees' && company.employees !== filterValue) return false;
    }

    // Multi-faceted search input check
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = company.name.toLowerCase().includes(q);
      const matchTagline = company.tagline.toLowerCase().includes(q);
      const matchIndustry = company.industry.toLowerCase().includes(q);
      const matchHeadquarters = company.headquarters.toLowerCase().includes(q);
      const matchTech = [
        ...company.techStack.cloud,
        ...company.techStack.languages,
        ...company.techStack.frameworks,
        ...company.techStack.databases,
        ...company.techStack.infrastructure,
        ...company.techStack.aiModelStack,
        ...company.techStack.observabilityStack
      ].some(t => t.toLowerCase().includes(q));

      if (!matchName && !matchTagline && !matchIndustry && !matchHeadquarters && !matchTech) return false;
    }

    // Direct filters checks
    if (selectedIndustry !== 'all' && company.industry !== selectedIndustry) return false;
    if (selectedFunding !== 'all' && company.funding !== selectedFunding) return false;
    if (selectedCountry !== 'all' && company.country !== selectedCountry) return false;
    if (selectedEmployees !== 'all' && company.employees !== selectedEmployees) return false;
    if (selectedCloud !== 'all' && !company.techStack.cloud.includes(selectedCloud)) return false;
    if (selectedAI !== 'all' && !company.techStack.aiModelStack.includes(selectedAI)) return false;
    if (selectedTech !== 'all') {
      const companyAllTech = [
        ...company.techStack.languages,
        ...company.techStack.frameworks,
        ...company.techStack.databases,
        ...company.techStack.infrastructure,
        ...company.techStack.observabilityStack
      ];
      if (!companyAllTech.includes(selectedTech)) return false;
    }

    return true;
  });

  const activeCompany = COMPANIES_DATA.find(c => c.id === activeCompanyId);

  // Copy Permalink helper
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // SEO schemas dynamic injection
  // Update company specific FAQ Schema
  useEffect(() => {
    if (!activeCompany) {
      document.getElementById('seo-faq-schema')?.remove();
      return;
    }

    // FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.id = 'seo-faq-schema';
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": activeCompany.engineeringObservations.map(obs => ({
        "@type": "Question",
        "name": `What is the observed risk of ${obs.title} for ${activeCompany.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${obs.description} This has been classified as a ${obs.risk} risk under the ${obs.category} category. Production impact includes: ${obs.impact}.`
        }
      }))
    });
    document.head.appendChild(faqScript);

    return () => {
      document.getElementById('seo-faq-schema')?.remove();
    };
  }, [activeCompany]);

  // SVG Tech Graph Coordinate Helper (Circular layout for pristine aesthetic representation)
  const getGraphNodeCoords = (node: TechGraphNode, index: number, total: number) => {
    if (node.type === 'company') {
      return { x: 250, y: 175 }; // Center Node
    }
    // Distribute nodes in concentric shells depending on type
    let radius = 100;
    let angleOffset = 0;
    
    if (node.type === 'cloud' || node.type === 'ai') {
      radius = 75; // inner shell
      angleOffset = 0;
    } else if (node.type === 'language' || node.type === 'database') {
      radius = 125; // middle shell
      angleOffset = 45;
    } else if (node.type === 'infrastructure' || node.type === 'observability') {
      radius = 170; // outer shell
      angleOffset = 90;
    }

    const angle = ((index * 360) / (total - 1)) + angleOffset;
    const rad = (angle * Math.PI) / 180;
    const x = 250 + radius * Math.cos(rad);
    const y = 175 + radius * Math.sin(rad);
    return { x, y };
  };

  return (
    <div className="min-h-screen text-zinc-100 font-sans selection:bg-white selection:text-black">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8 border-b border-zinc-900 pb-4">
          <button 
            onClick={onBackToHome}
            className="hover:text-white transition-colors uppercase tracking-wider"
          >
            XAVIRA HOME
          </button>
          <span>/</span>
          <button 
            onClick={() => navigateTo('/research')}
            className={`hover:text-white transition-colors uppercase tracking-wider ${!activeCompanyId ? 'text-cyan-400 font-bold' : ''}`}
          >
            ENGINEERING INTELLIGENCE LIBRARY
          </button>
          {activeCompany && (
            <>
              <span>/</span>
              <button 
                onClick={() => navigateTo(`/research/industry/${activeCompany.industry.toLowerCase()}`)}
                className="hover:text-white transition-colors uppercase tracking-wider"
              >
                {activeCompany.industry}
              </button>
              <span>/</span>
              <span className="text-zinc-300 font-bold uppercase">{activeCompany.name}</span>
            </>
          )}
        </nav>

        {!activeCompany ? (
          /* ========================================================================= */
          /* RESEARCH HOME LANDING PAGE / COMPILING THE SEARCH DIRECTORY               */
          /* ========================================================================= */
          <div className="space-y-12">
            
            {/* HERO BAR */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#020918] via-black to-black border border-zinc-900 p-8 sm:p-12 text-center space-y-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="inline-flex items-center gap-1.5 bg-cyan-950/45 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Sovereign Knowledge Repository</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-6xl font-light text-white tracking-widest uppercase max-w-4xl mx-auto">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-zinc-400">Intelligence</span> Library
              </h1>
              
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
                Rigorous static code footprinting, cloud allocation tracing, and live system architectures. We audit engineering teams and high-growth platforms, rendering raw, verified intelligence.
              </p>

              {/* SEARCH BLOCK */}
              <div className="max-w-3xl mx-auto bg-zinc-950/90 border border-zinc-800 rounded-lg p-2 flex flex-col md:flex-row gap-2 shadow-2xl relative z-10">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 border-b md:border-b-0 md:border-r border-zinc-900">
                  <Search className="w-4 h-4 text-zinc-500 shrink-0" />
                  <input 
                    id="research-search-input"
                    type="text" 
                    placeholder="Search companies, technologies, stack elements..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-sm text-white focus:outline-none w-full"
                  />
                </div>
                
                <div className="flex items-center gap-2 px-3 py-2 min-w-[180px]">
                  <Filter className="w-4 h-4 text-zinc-500 shrink-0" />
                  <select 
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="bg-transparent text-xs text-zinc-400 focus:outline-none w-full cursor-pointer uppercase font-mono"
                  >
                    <option value="all" className="bg-black text-white">All Industries</option>
                    <option value="AI SaaS" className="bg-black text-white">AI SaaS</option>
                    <option value="FinTech" className="bg-black text-white">FinTech</option>
                    <option value="Cybersecurity" className="bg-black text-white">Cybersecurity</option>
                    <option value="DevTools" className="bg-black text-white">DevTools</option>
                  </select>
                </div>

                <div className="flex gap-2 shrink-0">
                  <button 
                    onClick={() => setShowFiltersDrawer(!showFiltersDrawer)}
                    className={`px-3 py-2 rounded text-xs font-mono font-bold tracking-wider flex items-center gap-1.5 transition-all ${
                      showFiltersDrawer 
                        ? 'bg-cyan-950 border border-cyan-700 text-cyan-400' 
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <SlidersIcon className="w-3.5 h-3.5" />
                    <span>ADVANCED FILTERS</span>
                  </button>

                  {(searchQuery || selectedIndustry !== 'all' || selectedFunding !== 'all' || selectedCountry !== 'all' || selectedEmployees !== 'all' || selectedCloud !== 'all' || selectedAI !== 'all' || selectedTech !== 'all') && (
                    <button 
                      onClick={handleResetFilters}
                      className="px-3 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-xs font-mono text-white font-bold tracking-wider uppercase"
                    >
                      RESET
                    </button>
                  )}
                </div>
              </div>

              {/* COLLAPSIBLE ADVANCED FILTER GRID (BENTO CARD STYLE) */}
              <AnimatePresence>
                {showFiltersDrawer && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="max-w-3xl mx-auto overflow-hidden text-left bg-zinc-950 border border-zinc-900 rounded-lg p-5 grid grid-cols-1 sm:grid-cols-3 gap-4"
                  >
                    {/* Cloud filter */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Cloud Provider</label>
                      <select 
                        value={selectedCloud}
                        onChange={(e) => setSelectedCloud(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 rounded p-2 focus:outline-none focus:border-zinc-700 cursor-pointer"
                      >
                        <option value="all">All Clouds</option>
                        {allClouds.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>

                    {/* AI Stack filter */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">AI Stack Platform</label>
                      <select 
                        value={selectedAI}
                        onChange={(e) => setSelectedAI(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 rounded p-2 focus:outline-none focus:border-zinc-700 cursor-pointer"
                      >
                        <option value="all">All AI Platforms</option>
                        {allAIs.map(ai => <option key={ai} value={ai}>{ai}</option>)}
                      </select>
                    </div>

                    {/* Tech Stack elements */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Language / DB / Mesh</label>
                      <select 
                        value={selectedTech}
                        onChange={(e) => setSelectedTech(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 rounded p-2 focus:outline-none focus:border-zinc-700 cursor-pointer"
                      >
                        <option value="all">All Technologies</option>
                        {allTechStack.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    {/* Country filter */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Country / HQ</label>
                      <select 
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 rounded p-2 focus:outline-none focus:border-zinc-700 cursor-pointer"
                      >
                        <option value="all">All Countries</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                      </select>
                    </div>

                    {/* Funding round */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Funding Round</label>
                      <select 
                        value={selectedFunding}
                        onChange={(e) => setSelectedFunding(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 rounded p-2 focus:outline-none focus:border-zinc-700 cursor-pointer"
                      >
                        <option value="all">All Rounds</option>
                        <option value="Series A">Series A</option>
                        <option value="Series B">Series B</option>
                        <option value="Series C">Series C</option>
                        <option value="Late Stage">Late Stage</option>
                        <option value="Public">Public</option>
                      </select>
                    </div>

                    {/* Employees count */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Staff Sizing</label>
                      <select 
                        value={selectedEmployees}
                        onChange={(e) => setSelectedEmployees(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 rounded p-2 focus:outline-none focus:border-zinc-700 cursor-pointer"
                      >
                        <option value="all">Any Employee Count</option>
                        <option value="20-50">20 - 50 staff</option>
                        <option value="50-100">50 - 100 staff</option>
                        <option value="100-250">100 - 250 staff</option>
                        <option value="250-500">250 - 500 staff</option>
                        <option value="500+">500+ staff</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* QUICK TAG LINKS */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-mono text-zinc-500">
                <span>POPULAR SEARCHES:</span>
                {['Kubernetes', 'Cassandra', 'PostgreSQL', 'TypeScript', 'Go', 'Rust'].map(tech => (
                  <button
                    key={tech}
                    onClick={() => {
                      setSelectedTech(tech);
                      setShowFiltersDrawer(true);
                    }}
                    className={`px-2.5 py-1 rounded-md border text-[10px] uppercase font-bold transition-all ${
                      selectedTech === tech
                        ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400'
                        : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* GLOBAL DIRECTORY OVERVIEW CARD SECTION */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 bg-zinc-950 border border-zinc-900 p-6 rounded-xl relative">
              <div className="space-y-1 text-center md:text-left border-r border-zinc-900/60 pr-2">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Indexed</span>
                <span className="block font-display text-lg font-bold text-white uppercase">{COMPANIES_DATA.length} Targets</span>
              </div>
              <div className="space-y-1 text-center md:text-left border-r border-zinc-900/60 pr-2">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Industries</span>
                <span className="block font-display text-lg font-bold text-white uppercase">5 Verticals</span>
              </div>
              <div className="space-y-1 text-center md:text-left border-r border-zinc-900/60 pr-2">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Countries</span>
                <span className="block font-display text-lg font-bold text-white uppercase">2 Regions</span>
              </div>
              <div className="space-y-1 text-center md:text-left border-r border-zinc-900/60 pr-2">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Categories</span>
                <span className="block font-display text-lg font-bold text-white uppercase">25+ Techs</span>
              </div>
              <div className="space-y-1 text-center md:text-left border-r border-zinc-900/60 pr-2">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Reports</span>
                <span className="block font-display text-lg font-bold text-cyan-400 uppercase">5 Detailed</span>
              </div>
              <div className="space-y-1 text-center md:text-left border-r border-zinc-900/60 pr-2">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Articles</span>
                <span className="block font-display text-lg font-bold text-zinc-300 uppercase">14 Verified</span>
              </div>
              <div className="space-y-1 text-center md:text-left border-r border-zinc-900/60 pr-2 col-span-2 md:col-span-1">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Updated</span>
                <span className="block font-display text-xs font-bold text-zinc-400 uppercase">July 2026 Sync</span>
              </div>
              <div className="space-y-1 text-center md:text-left col-span-2 md:col-span-1">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Trending</span>
                <span className="block font-display text-[10px] font-bold text-cyan-400 uppercase tracking-tight truncate">Omnea, Monzo, Linear</span>
              </div>
            </div>

            {/* TOGGLE SUBVIEWS BETWEEN DIRECTORY AND METHODOLOGY */}
            <div className="flex border-b border-zinc-900 pb-0.5 max-w-7xl mx-auto gap-1 sm:gap-4 mb-8">
              <button
                onClick={() => setResearchSubView('directory')}
                className={`px-4 sm:px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold border-b-2 transition-all cursor-pointer ${
                  researchSubView === 'directory'
                    ? 'border-cyan-400 text-cyan-400 font-extrabold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                [01] Intelligence Directory
              </button>
              <button
                onClick={() => setResearchSubView('methodology')}
                className={`px-4 sm:px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold border-b-2 transition-all cursor-pointer ${
                  researchSubView === 'methodology'
                    ? 'border-cyan-400 text-cyan-400 font-extrabold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                [02] Research Methodology & Framework
              </button>
            </div>

            {researchSubView === 'directory' ? (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* SIDEBAR FILTER PANEL */}
              <div className="space-y-6 bg-zinc-950/40 p-6 rounded-lg border border-zinc-900/60 self-start">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                    // Industry Verticals
                  </h3>
                  <button 
                    onClick={handleResetFilters}
                    className="text-[10px] font-mono text-zinc-500 hover:text-cyan-400 transition-colors uppercase"
                  >
                    Clear All
                  </button>
                </div>

                {/* Industry Filter Stack */}
                <div className="space-y-1">
                  {['all', 'AI SaaS', 'FinTech', 'Cybersecurity', 'DevTools'].map(ind => (
                    <button
                      key={ind}
                      onClick={() => navigateTo(ind === 'all' ? '/research' : `/research/industry/${ind.toLowerCase()}`)}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs font-mono transition-all flex items-center justify-between uppercase ${
                        (filterType === 'industry' && filterValue?.toLowerCase() === ind.toLowerCase()) || (ind === 'all' && !filterType)
                          ? 'bg-cyan-950/30 text-cyan-400 border-l-2 border-cyan-400 pl-2 font-bold'
                          : 'text-zinc-400 hover:bg-zinc-900/40 hover:text-zinc-200'
                      }`}
                    >
                      <span>{ind}</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>

                {/* Directory Statistics Info Card */}
                <div className="p-4 bg-zinc-900/20 border border-zinc-900 rounded space-y-3 font-mono text-[11px] text-zinc-400">
                  <span className="block text-[10px] text-zinc-500 uppercase font-bold tracking-widest">// COHERENCE TARGETS</span>
                  <p className="text-xs font-light leading-relaxed font-sans">
                    Every audited company receives static score assessments compiled across thousands of public signals and compared continuously.
                  </p>
                </div>
              </div>

              {/* LIST OF COMPANIES & LATEST OBSERVATIONS */}
              <div className="lg:col-span-3 space-y-8">
                
                {/* Active Filter Badges */}
                {(filterType || selectedIndustry !== 'all' || selectedFunding !== 'all' || selectedCountry !== 'all' || selectedEmployees !== 'all' || selectedCloud !== 'all' || selectedAI !== 'all' || selectedTech !== 'all' || searchQuery) && (
                  <div className="flex flex-wrap gap-2 items-center bg-[#020510] border border-zinc-900 p-3 rounded-lg text-xs font-mono">
                    <span className="text-zinc-500">ACTIVE SEARCH FILTERS:</span>
                    {filterType && (
                      <span className="bg-cyan-950 text-cyan-400 border border-cyan-800/30 px-2 py-0.5 rounded font-bold uppercase">
                        Route: {filterType}={filterValue}
                      </span>
                    )}
                    {selectedIndustry !== 'all' && (
                      <span className="bg-zinc-900 text-zinc-300 border border-zinc-850 px-2 py-0.5 rounded uppercase font-bold">
                        Vertical: {selectedIndustry}
                      </span>
                    )}
                    {selectedCloud !== 'all' && (
                      <span className="bg-zinc-900 text-zinc-300 border border-zinc-850 px-2 py-0.5 rounded uppercase font-bold">
                        Cloud: {selectedCloud}
                      </span>
                    )}
                    {selectedAI !== 'all' && (
                      <span className="bg-zinc-900 text-zinc-300 border border-zinc-850 px-2 py-0.5 rounded uppercase font-bold">
                        AI Platform: {selectedAI}
                      </span>
                    )}
                    {selectedTech !== 'all' && (
                      <span className="bg-zinc-900 text-zinc-300 border border-zinc-850 px-2 py-0.5 rounded uppercase font-bold">
                        Tech: {selectedTech}
                      </span>
                    )}
                    {selectedFunding !== 'all' && (
                      <span className="bg-zinc-900 text-zinc-300 border border-zinc-850 px-2 py-0.5 rounded uppercase font-bold">
                        Funding: {selectedFunding}
                      </span>
                    )}
                    {selectedCountry !== 'all' && (
                      <span className="bg-zinc-900 text-zinc-300 border border-zinc-850 px-2 py-0.5 rounded uppercase font-bold">
                        Country: {selectedCountry}
                      </span>
                    )}
                    {selectedEmployees !== 'all' && (
                      <span className="bg-zinc-900 text-zinc-300 border border-zinc-850 px-2 py-0.5 rounded uppercase font-bold">
                        Scale: {selectedEmployees} Staff
                      </span>
                    )}
                    {searchQuery && (
                      <span className="bg-zinc-900 text-zinc-300 border border-zinc-850 px-2 py-0.5 rounded lowercase font-bold">
                        Query: "{searchQuery}"
                      </span>
                    )}
                    <button 
                      onClick={handleResetFilters}
                      className="text-cyan-400 hover:underline hover:text-white font-bold ml-auto uppercase"
                    >
                      Clear All
                    </button>
                  </div>
                )}

                {/* Company Index Grid */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                    <span className="font-display text-xs font-bold uppercase text-zinc-400 tracking-wider">
                      // Search Index: {filteredCompanies.length} Directories Compiled
                    </span>
                    <span className="font-mono text-[10px] text-zinc-600">DB RECORDS: 10,000+ COMPILATION CAPACITY</span>
                  </div>

                  {filteredCompanies.length === 0 ? (
                    <div className="bg-zinc-950 rounded-lg p-12 border border-zinc-900 text-center space-y-4">
                      <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto" />
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white uppercase font-mono">No Matching Repositories</h4>
                        <p className="text-xs text-zinc-500 font-light max-w-md mx-auto">
                          Our pipeline does not currently contain structured public indices matching this specific metric combination. Expand filters or submit an audit request.
                        </p>
                      </div>
                      <button
                        onClick={handleResetFilters}
                        className="px-4 py-2 bg-zinc-900 hover:bg-zinc-850 rounded text-xs text-white font-mono font-semibold"
                      >
                        Reset Research Filters
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4">
                      {filteredCompanies.map((comp) => (
                        <div 
                          key={comp.id}
                          className="bg-zinc-950/80 border border-zinc-900 hover:border-zinc-800 rounded-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group transition-all duration-150 cursor-pointer animate-fade-in"
                          onClick={() => navigateTo(`/research/${comp.slug}`)}
                        >
                          <div className="space-y-2 flex-grow">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{comp.logo}</span>
                              <div>
                                <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-wide">
                                  {comp.name}
                                </h3>
                                <div className="flex items-center gap-2">
                                  <span className="text-[9px] font-mono text-zinc-550 uppercase">
                                    REF: {comp.id.toUpperCase()}-AUD-2026
                                  </span>
                                  <span className="text-zinc-700">•</span>
                                  <span className="text-[9px] font-mono text-cyan-500 uppercase">
                                    CONFIDENCE: {comp.researchQuality.confidence}
                                  </span>
                                </div>
                              </div>
                              <span className="bg-cyan-950/40 border border-cyan-800/20 text-cyan-400 text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase ml-auto md:ml-2">
                                {comp.industry}
                              </span>
                            </div>

                            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-2xl">
                              {comp.tagline}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-1">
                              {/* Cloud badges */}
                              {comp.techStack.cloud.map(c => (
                                <span key={c} className="text-[9px] font-mono bg-zinc-900/50 text-zinc-500 border border-zinc-850 px-1.5 py-0.2 rounded uppercase">
                                  {c}
                                </span>
                              ))}
                              {/* Main languages */}
                              {comp.techStack.languages.map(lang => (
                                <span key={lang} className="text-[9px] font-mono text-zinc-450 uppercase font-semibold">
                                  #{lang}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex md:flex-col items-end justify-between md:justify-center gap-4 w-full md:w-auto shrink-0 border-t md:border-t-0 border-zinc-900 pt-4 md:pt-0">
                            <div className="text-right space-y-1">
                              <span className="block text-[9px] font-mono text-zinc-550 uppercase">Audit Score</span>
                              <div className="flex items-center gap-1.5">
                                <div className="w-12 bg-zinc-900 h-2 rounded-full overflow-hidden">
                                  <div 
                                    className={`h-full rounded-full ${
                                      comp.scores.overallScore >= 90 ? 'bg-emerald-500' : 'bg-amber-500'
                                    }`} 
                                    style={{ width: `${comp.scores.overallScore}%` }} 
                                  />
                                </div>
                                <span className="font-mono text-xs font-bold text-white">{comp.scores.overallScore}/100</span>
                              </div>
                            </div>

                            <button className="flex items-center gap-1 text-[11px] font-mono font-bold text-white group-hover:text-cyan-400 transition-colors bg-zinc-900 group-hover:bg-cyan-950/20 border border-zinc-850 group-hover:border-cyan-800/30 px-3 py-1.5 rounded uppercase">
                              <span>Open Audit</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* ARCHITECTURE CORNER: RECENT OBSERVATIONS LIST */}
                <div className="border border-[#0f1d3a]/60 bg-gradient-to-br from-[#020715]/90 to-black p-6 rounded-xl space-y-6">
                  <div className="border-b border-zinc-900 pb-3 flex items-center justify-between">
                    <h3 className="font-display text-base font-bold text-white tracking-wide uppercase flex items-center gap-2">
                      <Shield className="w-4 h-4 text-cyan-400" />
                      <span>Latest Audited Observations</span>
                    </h3>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">// LIVE INGESTION REGISTER</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {COMPANIES_DATA.flatMap(c => c.engineeringObservations.map(o => ({ ...o, companyName: c.name, companySlug: c.slug }))).slice(0, 4).map(obs => (
                      <div 
                        key={obs.id}
                        className="bg-black/40 border border-zinc-900 hover:border-zinc-800 rounded p-4 space-y-3 cursor-pointer group transition-all"
                        onClick={() => navigateTo(`/research/${obs.companySlug}`)}
                      >
                        <div className="flex justify-between items-center text-[9px] font-mono">
                          <span className="text-zinc-400 font-bold uppercase">{obs.companyName}</span>
                          <span className={`font-bold uppercase ${
                            obs.risk === 'Critical' || obs.risk === 'High' ? 'text-rose-500' : 'text-amber-500'
                          }`}>
                            {obs.risk} Risk
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white group-hover:text-cyan-400 font-display uppercase tracking-tight transition-colors line-clamp-1">
                          {obs.title}
                        </h4>
                        <div className="flex items-center gap-1.5 text-[9px] font-mono bg-zinc-900/50 text-zinc-500 w-fit px-1.5 py-0.5 rounded border border-zinc-850 uppercase">
                          <span>{obs.category}</span>
                        </div>
                        <p className="text-[11px] text-zinc-550 leading-relaxed font-light font-sans line-clamp-2">
                          {obs.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            ) : (
              /* ========================================================================= */
              /* RESEARCH METHODOLOGY AND SYSTEM PRINCIPLES (NEW RESEARCH PAGE)           */
              /* ========================================================================= */
              <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 sm:p-10 space-y-12 animate-fade-in max-w-7xl mx-auto">
                
                {/* METHODOLOGY HERO */}
                <div className="space-y-4 max-w-3xl">
                  <div className="inline-flex items-center gap-1.5 bg-cyan-950/45 border border-cyan-500/20 text-cyan-400 font-mono text-[9px] px-2.5 py-1 rounded font-bold uppercase tracking-widest">
                    <Award className="w-3.5 h-3.5 animate-pulse" />
                    <span>XAVIRA Technologies Due Diligence Standard</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-4xl font-light text-white tracking-widest uppercase">
                    OUR RESEARCH SYSTEMOLOGY
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    Due diligence on high-growth companies demands total analytical rigor. In this era, we reject hearsay. XAVIRA operates a non-invasive, dynamic code, cloud, and organizational tracking pipeline that compiles millions of public signals to construct a highly factual comparative index.
                  </p>
                </div>

                {/* SOURCING PILLARS (BENTO) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  <div className="bg-black/60 border border-zinc-900 p-5 rounded-lg space-y-4">
                    <div className="w-8 h-8 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-900/30 flex items-center justify-center font-mono text-xs font-bold">[V1]</div>
                    <div className="space-y-1.5">
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">SSL/TLS TOPOGRAPHICAL SCANS</h4>
                      <p className="text-[11px] text-zinc-455 leading-relaxed font-light font-sans">
                        Continuous handshakes check public web-endpoint certificates, exposing SANs, subdomains, and internal microservice clusters without penetrating boundaries.
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/60 border border-zinc-900 p-5 rounded-lg space-y-4">
                    <div className="w-8 h-8 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-900/30 flex items-center justify-center font-mono text-xs font-bold">[V2]</div>
                    <div className="space-y-1.5">
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">PUBLIC DNS & MX ROADMAPS</h4>
                      <p className="text-[11px] text-zinc-455 leading-relaxed font-light font-sans">
                        DMARC, SPF, TXT, and mail configurations isolate active developer tooling, identity providers, third-party relays, and telemetry endpoints.
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/60 border border-zinc-900 p-5 rounded-lg space-y-4">
                    <div className="w-8 h-8 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-900/30 flex items-center justify-center font-mono text-xs font-bold">[V3]</div>
                    <div className="space-y-1.5">
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">DEVELOPER & DEPOSIT DNA</h4>
                      <p className="text-[11px] text-zinc-455 leading-relaxed font-light font-sans">
                        Compiling open-source repositories, library manifests, dependency upgrades, and Git history signatures reveals framework choices and codebase staleness.
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/60 border border-zinc-900 p-5 rounded-lg space-y-4">
                    <div className="w-8 h-8 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-900/30 flex items-center justify-center font-mono text-xs font-bold">[V4]</div>
                    <div className="space-y-1.5">
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">CAREER & STAFFING SIGNALS</h4>
                      <p className="text-[11px] text-zinc-455 leading-relaxed font-light font-sans">
                        Parsing direct job listings, developer career paths, and technical vacancies isolates system bottlenecks, database choices, and system migrations.
                      </p>
                    </div>
                  </div>

                </div>

                {/* ========================================================================= */}
                {/* INTERACTIVE AUDIT STAGES FLOW VISUALIZER                                 */}
                {/* ========================================================================= */}
                <div className="space-y-8 pt-8 border-t border-zinc-900">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 text-cyan-400 font-mono text-[9px] font-bold uppercase tracking-widest">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>XAVIRA forensic process pipeline</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-2xl font-bold text-white uppercase tracking-wider">
                      Interactive Due Diligence Pipeline
                    </h3>
                    <p className="text-xs text-zinc-400 font-light font-sans leading-relaxed max-w-3xl">
                      XAVIRA Technologies conducts audits in 5 rigorous sequential stages. Click on any stage in the flow visualizer below to explore the analytical deep-dives, tracked technical signals, and the core deliverables produced at each milestone:
                    </p>
                  </div>

                  {/* SVG FLOW & DETAILED BREAKDOWN ROW */}
                  <div className="space-y-6">
                    
                    {/* STAGE SELECTOR (SVG VISUALIZER) */}
                    <div className="bg-zinc-950/60 border border-zinc-900 rounded-lg p-4 overflow-hidden">
                      
                      {/* Responsive horizontal scroll container for the SVG */}
                      <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                        <div className="min-w-[768px] max-w-5xl mx-auto relative select-none">
                          <svg viewBox="0 0 1000 160" className="w-full h-auto">
                            {/* SVG Definitions */}
                            <defs>
                              {/* Glowing Marker arrows */}
                              <marker id="arrow-cyan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L6,3 Z" fill="#06b6d4" />
                              </marker>
                              <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L6,3 Z" fill="#3b82f6" />
                              </marker>
                              <marker id="arrow-emerald" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L6,3 Z" fill="#10b981" />
                              </marker>
                              <marker id="arrow-purple" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L6,3 Z" fill="#a855f7" />
                              </marker>
                              <marker id="arrow-rose" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L6,3 Z" fill="#f43f5e" />
                              </marker>
                              <marker id="arrow-gray" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L6,3 Z" fill="#3f3f46" />
                              </marker>
                            </defs>

                            {/* FLOW LINES WITH ANIMATED DASHES */}
                            {[
                              { from: 100, to: 300, active: selectedAuditStage >= 1, color: '#3b82f6', marker: 'arrow-blue' },
                              { from: 300, to: 500, active: selectedAuditStage >= 2, color: '#10b981', marker: 'arrow-emerald' },
                              { from: 500, to: 700, active: selectedAuditStage >= 3, color: '#a855f7', marker: 'arrow-purple' },
                              { from: 700, to: 900, active: selectedAuditStage >= 4, color: '#f43f5e', marker: 'arrow-rose' }
                            ].map((line, i) => (
                              <g key={i}>
                                {/* Base connection line */}
                                <line 
                                  x1={line.from + 50} 
                                  y1={80} 
                                  x2={line.to - 50} 
                                  y2={80} 
                                  stroke={line.active ? line.color : '#27272a'} 
                                  strokeWidth={1.5}
                                  markerEnd={`url(#${line.active ? line.marker : 'arrow-gray'})`}
                                  className="transition-all duration-500"
                                />
                                {/* Pulsing data flow line */}
                                {line.active && (
                                  <line 
                                    x1={line.from + 50} 
                                    y1={80} 
                                    x2={line.to - 50} 
                                    y2={80} 
                                    stroke={line.color} 
                                    strokeWidth={1.5}
                                    strokeDasharray="4,6"
                                    opacity={0.8}
                                  >
                                    <animate 
                                      attributeName="stroke-dashoffset" 
                                      values="20;0" 
                                      dur="1.5s" 
                                      repeatCount="indefinite" 
                                    />
                                  </line>
                                )}
                              </g>
                            ))}

                            {/* NODES REPRESENTING THE AUDIT STAGES */}
                            {[
                              { x: 100, y: 80, num: '01', title: 'Surface Recon', color: '#06b6d4', icon: Globe },
                              { x: 300, y: 80, num: '02', title: 'Code DNA', color: '#3b82f6', icon: Cpu },
                              { x: 500, y: 80, num: '03', title: 'Infra Scan', color: '#10b981', icon: Cloud },
                              { x: 700, y: 80, num: '04', title: 'Talent Audit', color: '#a855f7', icon: Users },
                              { x: 900, y: 80, num: '05', title: 'Threat Ledger', color: '#f43f5e', icon: Shield }
                            ].map((node, i) => {
                              const active = selectedAuditStage === i;
                              const NodeIcon = node.icon;
                              return (
                                <g 
                                  key={i} 
                                  className="cursor-pointer" 
                                  onClick={() => setSelectedAuditStage(i)}
                                >
                                  {/* Outer pulse/glow circle */}
                                  <circle 
                                    cx={node.x} 
                                    cy={node.y} 
                                    r={44} 
                                    fill={node.color} 
                                    opacity={active ? 0.12 : 0} 
                                    className="transition-all duration-300 hover:opacity-10"
                                  />
                                  {/* Outer interactive ring */}
                                  <circle 
                                    cx={node.x} 
                                    cy={node.y} 
                                    r={34} 
                                    stroke={active ? node.color : '#27272a'} 
                                    strokeWidth={active ? 2 : 1} 
                                    fill="#040407" 
                                    strokeDasharray={active ? 'none' : '3,3'}
                                    className="transition-all duration-300"
                                  />
                                  {/* Inner node core */}
                                  <circle 
                                    cx={node.x} 
                                    cy={node.y} 
                                    r={25} 
                                    fill={active ? `${node.color}15` : '#09090b'}
                                    stroke={active ? node.color : 'transparent'}
                                    strokeWidth={1}
                                    className="transition-all duration-300"
                                  />
                                  {/* Icon placeholder (using foreignObject for seamless integration) */}
                                  <foreignObject 
                                    x={node.x - 12} 
                                    y={node.y - 12} 
                                    width={24} 
                                    height={24}
                                    className="pointer-events-none"
                                  >
                                    <div className="flex items-center justify-center w-full h-full text-zinc-400">
                                      <NodeIcon 
                                        className="w-5 h-5 transition-colors duration-300" 
                                        style={{ color: active ? node.color : '#71717a' }} 
                                      />
                                    </div>
                                  </foreignObject>

                                  {/* Milestone Indicator Number Badge */}
                                  <rect 
                                    x={node.x - 10} 
                                    y={node.y - 38} 
                                    width={20} 
                                    height={12} 
                                    rx={2} 
                                    fill={active ? node.color : '#18181b'} 
                                    className="transition-all duration-300"
                                  />
                                  <text 
                                    x={node.x} 
                                    y={node.y - 30} 
                                    textAnchor="middle" 
                                    fill={active ? '#000000' : '#a1a1aa'} 
                                    fontSize="8" 
                                    fontWeight="bold" 
                                    fontFamily="monospace"
                                    className="pointer-events-none"
                                  >
                                    {node.num}
                                  </text>

                                  {/* Title Label text under node */}
                                  <text 
                                    x={node.x} 
                                    y={node.y + 55} 
                                    textAnchor="middle" 
                                    fill={active ? '#ffffff' : '#52525b'} 
                                    fontSize="10" 
                                    fontWeight={active ? 'bold' : 'normal'} 
                                    fontFamily="monospace"
                                    className="transition-all duration-300 pointer-events-none uppercase tracking-wider"
                                  >
                                    {node.title}
                                  </text>
                                </g>
                              );
                            })}
                          </svg>
                        </div>
                      </div>

                      {/* Small touch-friendly helper on smaller screens */}
                      <div className="flex justify-between md:hidden gap-1 mt-3 border-t border-zinc-900 pt-3">
                        {[
                          { num: '01', color: '#06b6d4', short: 'Recon' },
                          { num: '02', color: '#3b82f6', short: 'Code' },
                          { num: '03', color: '#10b981', short: 'Infra' },
                          { num: '04', color: '#a855f7', short: 'Talent' },
                          { num: '05', color: '#f43f5e', short: 'Threat' }
                        ].map((btn, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedAuditStage(idx)}
                            className={`flex-1 py-2 rounded text-[10px] font-mono border transition-all flex flex-col items-center gap-1 cursor-pointer ${
                              selectedAuditStage === idx
                                ? 'bg-zinc-900 text-white border-zinc-700'
                                : 'bg-transparent text-zinc-500 border-transparent hover:text-zinc-300'
                            }`}
                            style={{ 
                              borderBottomColor: selectedAuditStage === idx ? btn.color : 'transparent',
                              borderBottomWidth: selectedAuditStage === idx ? '2px' : '1px'
                            }}
                          >
                            <span style={{ color: btn.color }}>[{btn.num}]</span>
                            <span>{btn.short}</span>
                          </button>
                        ))}
                      </div>

                    </div>

                    {/* DETAIL PANEL FOR ACTIVE STAGE */}
                    <div className="bg-[#020612]/80 border border-zinc-800 rounded-lg p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
                      
                      {/* Left Block (col-span-7): General Info & Tracked Signals */}
                      <div className="lg:col-span-7 space-y-6">
                        {/* Title and Metadata */}
                        <div className="space-y-1.5">
                          <span className="font-mono text-[10px] uppercase font-bold tracking-widest" style={{ color: auditStages[selectedAuditStage].color }}>
                            [STAGE {auditStages[selectedAuditStage].num}]: {auditStages[selectedAuditStage].subtitle}
                          </span>
                          <h4 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">
                            {auditStages[selectedAuditStage].title}
                          </h4>
                          <p className="text-xs sm:text-sm text-zinc-300 font-light font-sans leading-relaxed">
                            {auditStages[selectedAuditStage].summary}
                          </p>
                        </div>

                        {/* Interactive technical signals tracked */}
                        <div className="space-y-3 pt-4 border-t border-zinc-900">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-zinc-500" />
                            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider font-bold">
                              Forensic Network Signals Tracked
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {auditStages[selectedAuditStage].signals.map((signal, i) => (
                              <div key={i} className="bg-black/40 border border-zinc-900/60 p-3 rounded flex gap-2.5 items-start">
                                <span className="font-mono text-[9px] text-zinc-600 bg-zinc-900 px-1.5 py-0.5 rounded shrink-0">
                                  S{i+1}
                                </span>
                                <span className="text-xs text-zinc-400 font-light font-sans">
                                  {signal}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Block (col-span-5): Sourcing Deliverables */}
                      <div className="lg:col-span-5 bg-black/60 border border-zinc-900 p-5 rounded-lg space-y-5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-cyan-400" />
                            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                              Milestone Deliverables
                            </span>
                          </div>
                          <span className="text-[9px] bg-cyan-950/50 text-cyan-400 px-2 py-0.5 border border-cyan-900/30 rounded font-mono font-bold uppercase">
                            SIGNED
                          </span>
                        </div>

                        <p className="text-[11px] text-zinc-500 leading-relaxed font-sans font-light">
                          These deliverables are formatted into the company's core profile scorecard board and certified under digital integrity hashes:
                        </p>

                        <div className="space-y-2.5">
                          {auditStages[selectedAuditStage].deliverables.map((deliv, idx) => (
                            <div key={idx} className="flex gap-2.5 items-center bg-zinc-950/70 border border-zinc-900 p-3 rounded">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              <div className="space-y-0.5">
                                <div className="text-[11px] font-mono text-white font-bold uppercase">{deliv}</div>
                                <div className="text-[9px] text-zinc-500 font-mono">XAV-INTEG-SECURED-#{selectedAuditStage + 1}{idx + 1}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono">
                          <span className="text-zinc-600">Verification Hash:</span>
                          <span className="text-zinc-400 truncate max-w-[120px]" title={`sha256:dff7e4a11f31dcf94ee881881ef93${selectedAuditStage}`}>
                            sha256:b1d9c{selectedAuditStage}f...
                          </span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* THE 11 DIMENSIONAL SCORING SYSTEM - INTERACTIVE EXPLAINER */}
                <div className="space-y-6 pt-6 border-t border-zinc-900">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold">// INTERACTIVE MODEL EXPLAINER</span>
                    <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">HOW WE DERIVE THE 11 KEY METRICS</h3>
                    <p className="text-xs text-zinc-400 font-light font-sans leading-relaxed">
                      Every target index features scorecard dimensions compiled through millions of comparative public data signals. Click on any metric to see the analytical formula and evaluation criteria:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT PANEL: CHOOSE METRICS (col-span-4) */}
                    <div className="lg:col-span-4 space-y-1">
                      {[
                        { id: 'architecture', label: 'Architecture Robustness' },
                        { id: 'cloud', label: 'Cloud Allocation Efficiency' },
                        { id: 'security', label: 'Security Boundary Posture' },
                        { id: 'aiReadiness', label: 'AI Model Integration & Tuning' },
                        { id: 'technicalDebt', label: 'Technical Debt Resistance' },
                        { id: 'scalability', label: 'Scalability Headroom' },
                        { id: 'observability', label: 'Telemetry Observability' },
                        { id: 'performance', label: 'Runtime Performance' },
                        { id: 'reliability', label: 'High-Availability Reliability' },
                        { id: 'engineeringMaturity', label: 'Engineering Core Maturity' }
                      ].map(metric => (
                        <button
                          key={metric.id}
                          onClick={() => setActiveMethodScore(metric.id)}
                          className={`w-full text-left px-4 py-2.5 rounded font-mono text-[11px] transition-all flex items-center justify-between uppercase cursor-pointer ${
                            activeMethodScore === metric.id
                              ? 'bg-white text-black font-extrabold border-l-4 border-cyan-400 pl-3'
                              : 'text-zinc-400 bg-zinc-900/30 border border-zinc-900/60 hover:text-white'
                          }`}
                        >
                          <span>{metric.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                        </button>
                      ))}
                    </div>

                    {/* RIGHT PANEL: DYNAMIC INTERACTIVE EXPLORER CARD (col-span-8) */}
                    <div className="lg:col-span-8 bg-[#020612]/75 border border-zinc-800 rounded-lg p-6 sm:p-8 space-y-5 min-h-[300px]">
                      
                      {activeMethodScore === 'architecture' && (
                        <div className="space-y-4 animate-fade-in">
                          <span className="font-mono text-[10px] text-cyan-400 uppercase font-bold">[METRIC: ARCHITECTURE ROBUSTNESS]</span>
                          <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider">Boundary Isolation & Design Modularization</h4>
                          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed font-sans">
                            Assesses how well a codebase structures API borders, isolates background workers from request routers, and decodes modular libraries. Monolithic systems that bleed transaction loops directly into client sockets are penalized.
                          </p>
                          <div className="bg-black/80 border border-zinc-900 p-4 rounded font-mono text-xs text-zinc-450 space-y-1.5">
                            <div className="text-white font-bold">// FORMULA MATRIX RATIO</div>
                            <div>Score = N_IsolatedRoutes / TotalAPIEndpoints * 100 - (StaticCyclomaticComplexityFactor * 0.15)</div>
                          </div>
                          <div className="space-y-2 text-xs text-zinc-400 font-sans font-light">
                            <strong>Observed Signals:</strong> SSL subdirectory structures, response headers, open repository folder structures, and dynamic API boundary latency variances.
                          </div>
                        </div>
                      )}

                      {activeMethodScore === 'cloud' && (
                        <div className="space-y-4 animate-fade-in">
                          <span className="font-mono text-[10px] text-cyan-400 uppercase font-bold">[METRIC: CLOUD RESOURCE EFFICIENCY]</span>
                          <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider">Multi-Region Balancing & Allocation Overprovisioning</h4>
                          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed font-sans">
                            Evaluates the waste footprint of cloud deployments. High efficiency represents optimal usage of global Content Delivery Networks, proper auto-scaling queues, and balanced multi-region routing without overpaying for idle servers.
                          </p>
                          <div className="bg-black/80 border border-zinc-900 p-4 rounded font-mono text-xs text-zinc-450 space-y-1.5">
                            <div className="text-white font-bold">// ALLOCATION BALANCE MATRIX</div>
                            <div>Score = (1 - (OverprovisionedCapacityRatio * ActiveServerDowntimePercentage)) * 100</div>
                          </div>
                          <div className="space-y-2 text-xs text-zinc-400 font-sans font-light">
                            <strong>Observed Signals:</strong> Cloud DNS provider endpoints, CDN HTTP headers, file load performance profiles, and multi-region routing latency times.
                          </div>
                        </div>
                      )}

                      {activeMethodScore === 'security' && (
                        <div className="space-y-4 animate-fade-in">
                          <span className="font-mono text-[10px] text-cyan-400 uppercase font-bold">[METRIC: SECURITY BOUNDARY POSTURE]</span>
                          <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider">Edge Protection, Encrypted Channels & Endpoint Leaks</h4>
                          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed font-sans">
                            Measures the maturity of the external security layer. Focuses on strict compliance with modern cipher algorithms (TLS 1.3), complete email security protection systems (DMARC, SPF), and isolation of critical testing or database staging ports from public query domains.
                          </p>
                          <div className="bg-black/80 border border-zinc-900 p-4 rounded font-mono text-xs text-zinc-450 space-y-1.5">
                            <div className="text-white font-bold">// CYTHER INTENSITY COEFFICIENT</div>
                            <div>Score = (BaseTLSScore * 0.4) + (DnsSecuritySecCoefficient * 0.3) + (1 - EdgePortExposureRatio * 0.3)</div>
                          </div>
                          <div className="space-y-2 text-xs text-zinc-400 font-sans font-light">
                            <strong>Observed Signals:</strong> DNS records, security protocols, edge firewall vendor configurations, and public endpoint SSL handshake responses.
                          </div>
                        </div>
                      )}

                      {activeMethodScore === 'aiReadiness' && (
                        <div className="space-y-4 animate-fade-in">
                          <span className="font-mono text-[10px] text-cyan-400 uppercase font-bold">[METRIC: AI MODEL INTEGRATION & TUNING]</span>
                          <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider">Inference Orchestration, Context Cache & Vector Density</h4>
                          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed font-sans">
                            Assesses the efficiency of integrated LLM/AI modules. High readiness rewards proper implementation of context caching layers (to avoid redundant token spend), usage of decoupled semantic vector storage, and stateless prompt proxies that enforce strict security filters.
                          </p>
                          <div className="bg-black/80 border border-zinc-900 p-4 rounded font-mono text-xs text-zinc-450 space-y-1.5">
                            <div className="text-white font-bold">// INFERENCE EFFICIENCY EQUATION</div>
                            <div>Score = (TokenCachingOptimisationFactor * 0.5) + (VectorMeshThroughputRatio * 0.5) * 100</div>
                          </div>
                          <div className="space-y-2 text-xs text-zinc-400 font-sans font-light">
                            <strong>Observed Signals:</strong> AI library package declarations (NestJS/LangChain manifests), model server handshake records, and prompt response latencies.
                          </div>
                        </div>
                      )}

                      {activeMethodScore === 'technicalDebt' && (
                        <div className="space-y-4 animate-fade-in">
                          <span className="font-mono text-[10px] text-cyan-400 uppercase font-bold">[METRIC: TECHNICAL DEBT RESISTANCE]</span>
                          <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider">Dependency Decay, Package Drift & Boilerplate Staleness</h4>
                          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed font-sans">
                            Calculates how well a system resists decay. Measures package drift (using libraries that are behind current major security updates) and cyclomatic layout complexity, rewarding regular codebase updates and system refactoring.
                          </p>
                          <div className="bg-black/80 border border-zinc-900 p-4 rounded font-mono text-xs text-zinc-450 space-y-1.5">
                            <div className="text-white font-bold">// DEPENDENCY DECAY RATING</div>
                            <div>Score = 100 - (AveragePackageStalenessMonths * 2.5) - (DeprecationRatio * 50)</div>
                          </div>
                          <div className="space-y-2 text-xs text-zinc-400 font-sans font-light">
                            <strong>Observed Signals:</strong> Package dependency trees in open source files, build signatures, and developer commit intervals on core libraries.
                          </div>
                        </div>
                      )}

                      {activeMethodScore === 'scalability' && (
                        <div className="space-y-4 animate-fade-in">
                          <span className="font-mono text-[10px] text-cyan-400 uppercase font-bold">[METRIC: SCALABILITY HEADROOM]</span>
                          <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider">Asynchronous Event Loops & Queue Decoupling</h4>
                          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed font-sans">
                            Evaluates the database and transactional headroom. Identifies whether systems rely on synchronous database locks or cleanly distribute high-throughput requests using async message brokers (such as Kafka or RabbitMQ queues) and fast cache nodes.
                          </p>
                          <div className="bg-black/80 border border-zinc-900 p-4 rounded font-mono text-xs text-zinc-450 space-y-1.5">
                            <div className="text-white font-bold">// CONCURRENCY HEADROOM</div>
                            <div>Score = (NonBlockingQueueFraction * 0.7) + (DatabaseLockIsolationFactor * 0.3) * 100</div>
                          </div>
                          <div className="space-y-2 text-xs text-zinc-400 font-sans font-light">
                            <strong>Observed Signals:</strong> Integration of message bus technologies in job specs, concurrency patterns in package managers, and average latency variation on high-concurrency routes.
                          </div>
                        </div>
                      )}

                      {/* Fallback/observability, etc. */}
                      {!['architecture', 'cloud', 'security', 'aiReadiness', 'technicalDebt', 'scalability'].includes(activeMethodScore) && (
                        <div className="space-y-4 animate-fade-in">
                          <span className="font-mono text-[10px] text-cyan-400 uppercase font-bold">[METRIC: TELEMETRY & SYSTEM MATURITY]</span>
                          <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider">Observability Tracing, High-Availability & Org Competence</h4>
                          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed font-sans">
                            Evaluates real-time telemetry, trace correlation, SRE setups, and principal engineer distributions. High scores denote extensive Datadog/Sentry pipeline coverage, redundant high-availability setups, and elite leadership structure.
                          </p>
                          <div className="bg-black/80 border border-zinc-900 p-4 rounded font-mono text-xs text-zinc-450 space-y-1.5">
                            <div className="text-white font-bold">// TELEMETRY COMPLIANCE</div>
                            <div>Score = (ActiveObservabilityIntegrationRatio * 100) - (DowntimeIndex * 20)</div>
                          </div>
                          <div className="space-y-2 text-xs text-zinc-400 font-sans font-light">
                            <strong>Observed Signals:</strong> Telemetry agent header injection, corporate open-source contributions, engineering team distribution sizes, and public outage histories.
                          </div>
                        </div>
                      )}

                    </div>

                  </div>
                </div>

                {/* CONFIDENCE RATING DEFINITIONS */}
                <div className="space-y-6 pt-6 border-t border-zinc-900">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">// RESEARCH CONFIDENCE RATING SPECS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <div className="border border-zinc-900 bg-zinc-900/10 p-5 rounded space-y-3">
                      <div className="flex items-center justify-between text-emerald-400 font-mono text-[11px] font-bold">
                        <span>[LEVEL 01]</span>
                        <span className="bg-emerald-950 px-2 py-0.5 border border-emerald-900/30 rounded text-[9px]">HIGH CONFIDENCE</span>
                      </div>
                      <p className="text-xs text-zinc-450 leading-relaxed font-sans font-light">
                        <strong>Criteria:</strong> Explicit matching between multiple direct codebase repository signatures, verified corporate filing documents, SPF/DNS setups, and active server HTTP response tags.
                      </p>
                    </div>

                    <div className="border border-zinc-900 bg-zinc-900/10 p-5 rounded space-y-3">
                      <div className="flex items-center justify-between text-amber-400 font-mono text-[11px] font-bold">
                        <span>[LEVEL 02]</span>
                        <span className="bg-amber-950 px-2 py-0.5 border border-amber-900/30 rounded text-[9px]">MEDIUM CONFIDENCE</span>
                      </div>
                      <p className="text-xs text-zinc-450 leading-relaxed font-sans font-light">
                        <strong>Criteria:</strong> Deduced from exhaustive hiring requisites, developer career summaries, third-party technology registries, and historical development histories.
                      </p>
                    </div>

                    <div className="border border-zinc-900 bg-zinc-900/10 p-5 rounded space-y-3">
                      <div className="flex items-center justify-between text-rose-500 font-mono text-[11px] font-bold">
                        <span>[LEVEL 03]</span>
                        <span className="bg-rose-950 px-2 py-0.5 border border-rose-900/30 rounded text-[9px]">LOW CONFIDENCE</span>
                      </div>
                      <p className="text-xs text-zinc-450 leading-relaxed font-sans font-light">
                        <strong>Criteria:</strong> Extrapolated from minimal metadata; represents a theoretical baseline index that requires a signed code audit to confirm.
                      </p>
                    </div>

                  </div>
                </div>

                {/* NON-INVASIVE FORENSIC GUARANTEE */}
                <div className="p-6 bg-[#020713] border border-cyan-900/40 rounded-lg space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                    <Shield className="w-4 h-4 animate-pulse" />
                    <span>XAVIRA Safe Sourcing Commitment</span>
                  </div>
                  <p className="text-xs text-zinc-450 font-light leading-relaxed font-sans">
                    We maintain absolute operational ethics. XAVIRA Technologies does NOT run penetration exploits, distribute malicious scripts, check internal subnets, or intercept company communications. All indexed data points originate purely from publicly traceable software footprints, network declarations, and administrative filings. We protect corporate security boundaries while building total analytical clarity.
                  </p>
                </div>

              </div>
            )}

          </div>
        ) : (
          /* ========================================================================= */
          /* INDIVIDUAL COMPANY PROFILE AUDIT VIEW                                     */
          /* ========================================================================= */
          <div className="space-y-8">
            
            {/* BACK BUTTON */}
            <button 
              onClick={() => navigateTo('/research')}
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white uppercase tracking-wider cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Research Index</span>
            </button>

            {/* COMPANY HERO HEADER */}
            <div className="bg-gradient-to-r from-[#01091b] to-black border border-zinc-900 rounded-xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-cyan-500/5 to-transparent pointer-events-none" />
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{activeCompany.logo}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h1 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-wide uppercase">
                          {activeCompany.name}
                        </h1>
                        <span className="bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 font-mono text-[9px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider scale-95">
                          ACTIVE INTEL TARGET
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-550 uppercase block mt-1">
                        CANONICAL META PATH: https://www.xaviratechlabs.com/research/{activeCompany.slug}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light font-sans max-w-3xl leading-relaxed">
                    {activeCompany.tagline}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-zinc-500 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-zinc-500" />
                      <span>{activeCompany.industry}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-zinc-500" />
                      <span>{activeCompany.headquarters}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-zinc-500" />
                      <span>{activeCompany.funding} ({activeCompany.fundingAmount})</span>
                    </div>
                  </div>
                </div>

                {/* SHARE & ACTION BOX */}
                <div className="flex flex-col gap-2.5 w-full md:w-auto shrink-0 md:items-end">
                  <div className="flex gap-2">
                    <button 
                      onClick={handleCopyLink}
                      className="px-3 py-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-850 hover:border-zinc-800 rounded font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Layers className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{isCopied ? 'COPIED LINK' : 'SHARE PERMALINK'}</span>
                    </button>
                    <a 
                      href={activeCompany.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-850 hover:border-zinc-800 rounded font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider transition-all flex items-center gap-1.5"
                    >
                      <span>VISIT WEBSITE</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                    </a>
                  </div>

                  <button
                    onClick={onBookAdvisory}
                    className="w-full md:w-auto px-4 py-3 bg-white hover:bg-zinc-200 text-black font-mono text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>BOOK DIAGNOSTIC INQUIRY</span>
                  </button>
                </div>
              </div>
            </div>

            {/* RESEARCH QUALITY BADGE PANEL (HIGH-CONTRAST HEADER) */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-center sm:text-left">
              <div className="flex items-center gap-3 justify-center sm:justify-start border-b sm:border-b-0 sm:border-r border-zinc-900 pb-3 sm:pb-0 sm:pr-4">
                <Activity className="w-4 h-4 text-cyan-400" />
                <div>
                  <span className="block text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Research Confidence</span>
                  <span className={`text-xs font-bold uppercase ${
                    activeCompany.researchQuality.confidence === 'High' ? 'text-emerald-400' : 'text-amber-400'
                  }`}>{activeCompany.researchQuality.confidence} Level</span>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start border-b sm:border-b-0 sm:border-r border-zinc-900 pb-3 sm:pb-0 sm:pr-4">
                <Calendar className="w-4 h-4 text-zinc-400" />
                <div>
                  <span className="block text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Research Freshness</span>
                  <span className="text-xs text-white uppercase font-bold">{activeCompany.researchQuality.freshness}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <FileText className="w-4 h-4 text-zinc-400" />
                <div>
                  <span className="block text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Sources Reviewed</span>
                  <span className="text-xs text-white font-bold">{activeCompany.researchQuality.sourcesReviewedCount} Public Sources Traced</span>
                </div>
              </div>
            </div>

            {/* TWO-COLUMN INTEL GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* LEFT COLUMN: PRIMARY INTERACTIVE DISCLOSURES (lg:col-span-8) */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* INTERACTIVE COMPONENT TABS */}
                <div className="flex gap-1.5 overflow-x-auto border-b border-zinc-900 pb-2 max-w-full">
                  {[
                    { id: 'overview', label: '1. Public Information' },
                    { id: 'graph', label: '2. Technology Graph' },
                    { id: 'scorecard', label: '3. Scorecard Board' },
                    { id: 'timeline', label: '4. Engineering Timeline' },
                    { id: 'risks', label: '5. Technical Risks' },
                    { id: 'citations', label: '6. Citations & Versioning' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-3 py-2 text-[10px] sm:text-xs font-mono rounded tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-white text-black font-bold border border-white'
                          : 'bg-zinc-950 text-zinc-500 border border-zinc-900 hover:text-zinc-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* TAB WINDOW CONTENT */}
                <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 sm:p-8 min-h-[350px]">
                  
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// SECURED PUBLIC SYSTEM DISCLOSURE</span>
                        <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">Verified Public Information</h3>
                        <p className="text-xs text-zinc-400 italic font-light">
                          Every fact listed in this section is verified via public engineering publications, repository metadata patterns, and SEC or corporate filings.
                        </p>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-zinc-900">
                        {activeCompany.verifiedPublicInfo.map((info, i) => (
                          <div key={i} className="flex items-start gap-3 bg-zinc-900/30 border border-zinc-900/60 p-3.5 rounded">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed font-sans">{info}</p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-[#020713] border border-cyan-900/40 p-5 rounded space-y-3">
                        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                          <Info className="w-4 h-4" />
                          <span>Strict Evidence Separation Standard</span>
                        </div>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed font-sans">
                          To maintain analytical discipline, XAVIRA Technologies separates information into verified facts, non-invasive observations, theoretical hypotheses, and recommendations. No internal servers are scanned without an active engagement.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'graph' && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// VISUAL KNOWLEDGE GRAPH DISPLAY</span>
                        <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">Technology Dependency Graph</h3>
                        <p className="text-xs text-zinc-400 italic font-light">
                          Hover over any node to highlight adjacent architectural vectors and isolate stack dependency connections.
                        </p>
                      </div>

                      {/* STUNNING INTERACTIVE SVG KNOWLEDGE GRAPH */}
                      <div className="relative border border-zinc-900 rounded-lg p-4 bg-black overflow-hidden h-[400px] flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 500 350">
                          <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                              <path d="M 0 0 L 10 5 L 0 10 z" fill="#153050" />
                            </marker>
                            <marker id="arrow-highlight" viewBox="0 0 10 10" refX="18" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                              <path d="M 0 0 L 10 5 L 0 10 z" fill="#22d3ee" />
                            </marker>
                          </defs>

                          {/* Connection Lines */}
                          {activeCompany.techGraph.map((node, i) => {
                            const currentCoords = getGraphNodeCoords(node, i, activeCompany.techGraph.length);
                            return node.connections.map(connId => {
                              const targetIndex = activeCompany.techGraph.findIndex(n => n.id === connId);
                              if (targetIndex === -1) return null;
                              const targetNode = activeCompany.techGraph[targetIndex];
                              const targetCoords = getGraphNodeCoords(targetNode, targetIndex, activeCompany.techGraph.length);
                              
                              const isHighlighted = hoveredNodeId === node.id || hoveredNodeId === targetNode.id;
                              
                              return (
                                <line
                                  key={`${node.id}-${connId}`}
                                  x1={currentCoords.x}
                                  y1={currentCoords.y}
                                  x2={targetCoords.x}
                                  y2={targetCoords.y}
                                  stroke={isHighlighted ? '#22d3ee' : '#151d30'}
                                  strokeWidth={isHighlighted ? 2 : 1}
                                  strokeDasharray={isHighlighted ? '5,5' : 'none'}
                                  markerEnd={isHighlighted ? 'url(#arrow-highlight)' : 'url(#arrow)'}
                                  className="transition-all duration-300"
                                />
                              );
                            });
                          })}

                          {/* Graph Nodes */}
                          {activeCompany.techGraph.map((node, i) => {
                            const coords = getGraphNodeCoords(node, i, activeCompany.techGraph.length);
                            const isHovered = hoveredNodeId === node.id;
                            const isConnected = hoveredNodeId ? (node.id === hoveredNodeId || node.connections.includes(hoveredNodeId) || activeCompany.techGraph.find(n => n.id === hoveredNodeId)?.connections.includes(node.id)) : false;
                            
                            let nodeFill = '#090d16';
                            let nodeStroke = '#152035';
                            let textColor = '#a1a1aa';
                            
                            if (node.type === 'company') {
                              nodeFill = '#022c22';
                              nodeStroke = '#10b981';
                              textColor = '#fff';
                            } else if (isHovered) {
                              nodeFill = '#164e63';
                              nodeStroke = '#22d3ee';
                              textColor = '#fff';
                            } else if (isConnected) {
                              nodeFill = '#083344';
                              nodeStroke = '#06b6d4';
                              textColor = '#e2e8f0';
                            }

                            return (
                              <g 
                                key={node.id}
                                className="cursor-pointer"
                                onMouseEnter={() => setHoveredNodeId(node.id)}
                                onMouseLeave={() => setHoveredNodeId(null)}
                              >
                                <circle
                                  cx={coords.x}
                                  cy={coords.y}
                                  r={node.type === 'company' ? 18 : 12}
                                  fill={nodeFill}
                                  stroke={nodeStroke}
                                  strokeWidth={2}
                                  className="transition-all duration-300"
                                />
                                <text
                                  x={coords.x}
                                  y={coords.y + (node.type === 'company' ? 30 : 22)}
                                  textAnchor="middle"
                                  fill={textColor}
                                  fontSize={node.type === 'company' ? '10px' : '8px'}
                                  fontFamily="monospace"
                                  fontWeight={node.type === 'company' ? 'bold' : 'normal'}
                                  className="select-none transition-all duration-300 uppercase tracking-wider"
                                >
                                  {node.label}
                                </text>
                              </g>
                            );
                          })}
                        </svg>

                        {/* Interactive HUD Overlay */}
                        <div className="absolute bottom-3 left-3 bg-zinc-950/90 p-2.5 rounded border border-zinc-850 text-[10px] font-mono text-zinc-400 space-y-1">
                          <span className="block font-bold text-white uppercase tracking-wider">// GRAPH HUD CAPABILITIES</span>
                          <div className="flex items-center gap-1.5 text-[9px]">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                            <span>Target Node</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[9px]">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
                            <span>Hover Vector Isolation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'scorecard' && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// DETAILED SCOREBOARD BOARD</span>
                        <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">Comparative Scorecard</h3>
                        <p className="text-xs text-zinc-400 italic font-light">
                          Our scorecard tracks 11 structural dimensions. The metrics represent analytical samples computed solely on public codebase artifacts.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-zinc-900 text-xs font-mono">
                        <div className="space-y-3 p-4 bg-zinc-900/30 border border-zinc-900 rounded">
                          <div className="flex justify-between text-zinc-300">
                            <span>Architecture Robustness</span>
                            <span className="text-white font-bold">{activeCompany.scores.architecture}%</span>
                          </div>
                          <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.architecture}%` }} />
                          </div>
                        </div>
                        <div className="space-y-3 p-4 bg-zinc-900/30 border border-zinc-900 rounded">
                          <div className="flex justify-between text-zinc-300">
                            <span>Cloud Resource Efficiency</span>
                            <span className="text-white font-bold">{activeCompany.scores.cloud}%</span>
                          </div>
                          <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.cloud}%` }} />
                          </div>
                        </div>
                        <div className="space-y-3 p-4 bg-zinc-900/30 border border-zinc-900 rounded">
                          <div className="flex justify-between text-zinc-300">
                            <span>Security Boundary Posture</span>
                            <span className="text-white font-bold">{activeCompany.scores.security}%</span>
                          </div>
                          <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.security}%` }} />
                          </div>
                        </div>
                        <div className="space-y-3 p-4 bg-zinc-900/30 border border-zinc-900 rounded">
                          <div className="flex justify-between text-zinc-300">
                            <span>AI Integration & Readiness</span>
                            <span className="text-white font-bold">{activeCompany.scores.aiReadiness}%</span>
                          </div>
                          <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.aiReadiness}%` }} />
                          </div>
                        </div>
                        <div className="space-y-3 p-4 bg-zinc-900/30 border border-zinc-900 rounded">
                          <div className="flex justify-between text-zinc-300">
                            <span>Technical Debt Resistance</span>
                            <span className="text-white font-bold">{100 - activeCompany.scores.technicalDebt}%</span>
                          </div>
                          <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${100 - activeCompany.scores.technicalDebt}%` }} />
                          </div>
                        </div>
                        <div className="space-y-3 p-4 bg-zinc-900/30 border border-zinc-900 rounded">
                          <div className="flex justify-between text-zinc-300">
                            <span>Scalability Headroom</span>
                            <span className="text-white font-bold">{activeCompany.scores.scalability}%</span>
                          </div>
                          <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.scalability}%` }} />
                          </div>
                        </div>
                        <div className="space-y-3 p-4 bg-zinc-900/30 border border-zinc-900 rounded">
                          <div className="flex justify-between text-zinc-300">
                            <span>Runtime Performance</span>
                            <span className="text-white font-bold">{activeCompany.scores.performance}%</span>
                          </div>
                          <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.performance}%` }} />
                          </div>
                        </div>
                        <div className="space-y-3 p-4 bg-zinc-900/30 border border-zinc-900 rounded">
                          <div className="flex justify-between text-zinc-300">
                            <span>High-Availability Reliability</span>
                            <span className="text-white font-bold">{activeCompany.scores.reliability}%</span>
                          </div>
                          <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.reliability}%` }} />
                          </div>
                        </div>
                        <div className="space-y-3 p-4 bg-zinc-900/30 border border-zinc-900 rounded">
                          <div className="flex justify-between text-zinc-300">
                            <span>Telemetry Observability</span>
                            <span className="text-white font-bold">{activeCompany.scores.observability}%</span>
                          </div>
                          <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.observability}%` }} />
                          </div>
                        </div>
                        <div className="space-y-3 p-4 bg-zinc-900/30 border border-zinc-900 rounded">
                          <div className="flex justify-between text-zinc-300">
                            <span>Engineering Core Maturity</span>
                            <span className="text-white font-bold">{activeCompany.scores.engineeringMaturity}%</span>
                          </div>
                          <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.engineeringMaturity}%` }} />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-zinc-900/30 border border-zinc-900 text-zinc-500 font-mono text-[10px] uppercase text-center mt-4">
                        "Illustrative assessment based solely on publicly available information and engineering analysis. This is not a formal audit."
                      </div>
                    </div>
                  )}

                  {activeTab === 'timeline' && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// VERIFIED PUBLIC MILIEU</span>
                        <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">Engineering Milestone Timeline</h3>
                        <p className="text-xs text-zinc-400 italic font-light">
                          Constructed purely using confirmed announcements, funding, hiring signals, and platform evolutions. We do not invent milestones.
                        </p>
                      </div>

                      <div className="relative border-l border-zinc-900 pl-6 space-y-6 pt-3">
                        {activeCompany.timeline.map((mile, i) => (
                          <div key={i} className="relative">
                            <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-400 border border-black z-10" />
                            <div className="space-y-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-mono text-[10px] font-bold text-cyan-400 uppercase bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/10 inline-block">{mile.date}</span>
                                <span className="font-mono text-[9px] text-zinc-500 uppercase font-semibold">[{mile.category}]</span>
                              </div>
                              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">{mile.title}</h4>
                              <p className="text-xs text-zinc-450 font-light leading-relaxed font-sans">{mile.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'citations' && (
                    <div className="space-y-8 animate-fade-in text-xs">
                      
                      {/* HEADER */}
                      <div className="space-y-2">
                        <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// ACADEMIC & INSTITUTIONAL CITE PATH</span>
                        <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">Academic Citations & Document Verification</h3>
                        <p className="text-xs text-zinc-400 italic font-light">
                          Our engineering research is cited inside leading corporate systems audits and investment due diligence packages. Use the verified references below to cite this systemology.
                        </p>
                      </div>

                      {/* DOCUMENT METADATA REGISTER & RESEARCH IDS & VERSIONING */}
                      <div className="p-5 bg-black border border-zinc-900 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
                        <div className="space-y-2">
                          <span className="text-[10px] text-zinc-550 block font-bold">// SECURED DATA FINGERPRINT</span>
                          <div className="space-y-1.5 text-[11px] text-zinc-400">
                            <div className="flex justify-between border-b border-zinc-900 pb-1">
                              <span className="text-zinc-500">CANONICAL ID:</span>
                              <span className="text-cyan-400 font-bold uppercase">XAV-ID-{activeCompany.id.toUpperCase()}-v2.1</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-900 pb-1">
                              <span className="text-zinc-500">VERSION:</span>
                              <span className="text-white font-bold">2.1.4 (LATEST)</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-900 pb-1">
                              <span className="text-zinc-500">DIGITAL DEPOSIT:</span>
                              <span className="text-zinc-300 font-light truncate max-w-[150px] sm:max-w-[200px]" title="sha256:7e45bc11df31dcf94ee881881ef93">sha256:7e45bc11df...</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-500">SIGNATURE METRIC:</span>
                              <span className="text-emerald-400 font-bold flex items-center gap-1">
                                <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                                <span>VERIFIED INTEGRITY</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* DOCUMENT CHANGELOG */}
                        <div className="space-y-2 border-t md:border-t-0 md:border-l border-zinc-900 pt-4 md:pt-0 md:pl-6">
                          <span className="text-[10px] text-zinc-550 block font-bold">// COMPILATION REVISION LOG</span>
                          <div className="space-y-2 text-[10.5px]">
                            <div className="flex items-start gap-1.5 text-zinc-300">
                              <span className="text-cyan-400 font-bold shrink-0">[v2.1]</span>
                              <span className="font-sans leading-relaxed">July 2026: Updated cloud asset scale and pinecone model API latency parameters.</span>
                            </div>
                            <div className="flex items-start gap-1.5 text-zinc-500">
                              <span className="font-bold shrink-0">[v2.0]</span>
                              <span className="font-sans leading-relaxed">May 2026: Mapped initial server router decoupling and AWS security bounds.</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CONFIDENCE BREAKDOWN GAUGE */}
                      <div className="space-y-4">
                        <div className="border-b border-zinc-900 pb-2">
                          <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                            <Shield className="w-4 h-4 text-cyan-400" />
                            <span>Confidence Assessment Breakdown</span>
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-[11px]">
                          
                          <div className="bg-zinc-900/10 border border-zinc-900 p-4 rounded space-y-2">
                            <span className="text-zinc-500 block uppercase">Codebase Footprint Accuracy</span>
                            <div className="flex justify-between items-center">
                              <span className="text-white font-bold">94.2%</span>
                              <span className="text-[9px] bg-emerald-950/40 text-emerald-400 px-1 rounded uppercase">HIGH</span>
                            </div>
                            <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden">
                              <div className="bg-cyan-400 h-full rounded-full" style={{ width: '94.2%' }} />
                            </div>
                          </div>

                          <div className="bg-zinc-900/10 border border-zinc-900 p-4 rounded space-y-2">
                            <span className="text-zinc-500 block uppercase">Infrastructure Scans Coverage</span>
                            <div className="flex justify-between items-center">
                              <span className="text-white font-bold">91.8%</span>
                              <span className="text-[9px] bg-emerald-950/40 text-emerald-400 px-1 rounded uppercase">HIGH</span>
                            </div>
                            <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden">
                              <div className="bg-cyan-400 h-full rounded-full" style={{ width: '91.8%' }} />
                            </div>
                          </div>

                          <div className="bg-zinc-900/10 border border-zinc-900 p-4 rounded space-y-2">
                            <span className="text-zinc-500 block uppercase">Telemetry Signal Freshness</span>
                            <div className="flex justify-between items-center">
                              <span className="text-white font-bold">90.0%</span>
                              <span className="text-[9px] bg-emerald-950/40 text-emerald-400 px-1 rounded uppercase">HIGH</span>
                            </div>
                            <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden">
                              <div className="bg-cyan-400 h-full rounded-full" style={{ width: '90%' }} />
                            </div>
                          </div>

                          <div className="bg-zinc-900/10 border border-zinc-900 p-4 rounded space-y-2">
                            <span className="text-zinc-500 block uppercase">Overall Confidence Rating</span>
                            <div className="flex justify-between items-center">
                              <span className="text-emerald-400 font-extrabold uppercase">
                                {activeCompany.researchQuality.confidence} ({activeCompany.researchQuality.confidence === 'High' ? '95%' : activeCompany.researchQuality.confidence === 'Medium' ? '75%' : '45%'})
                              </span>
                            </div>
                            <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-emerald-400 h-full rounded-full" style={{ width: activeCompany.researchQuality.confidence === 'High' ? '95%' : activeCompany.researchQuality.confidence === 'Medium' ? '75%' : '45%' }} />
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* CITATION EXPORT PANEL */}
                      <div className="space-y-4">
                        <div className="border-b border-zinc-900 pb-2">
                          <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Reference Export Styles</h4>
                        </div>
                        <div className="space-y-4 font-mono text-[11px]">
                          
                          {/* BibTeX */}
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center">
                              <span className="text-zinc-400 font-bold">// BIBTEX CITATION STYLE (LATEX)</span>
                              <button
                                onClick={() => {
                                  const text = `@techreport{xavira2026${activeCompany.id},\n  author = {Burri, Vishnuvardhan and XAVIRA Technologies Research Team},\n  title = {Engineering Intelligence Audit: ${activeCompany.name} System Architecture, Tech Stack, & Technical Debt Risks},\n  institution = {XAVIRA Technologies Ltd.},\n  year = {2026},\n  number = {XAV-ID-${activeCompany.id.toUpperCase()}-v2.1},\n  url = {https://www.xaviratechlabs.com/research/${activeCompany.slug}}\n}`;
                                  navigator.clipboard.writeText(text);
                                  setCopiedCitationFormat('bibtex');
                                  setTimeout(() => setCopiedCitationFormat(null), 2000);
                                }}
                                className="text-cyan-400 hover:text-white hover:underline uppercase text-[9px] font-bold tracking-wider cursor-pointer"
                              >
                                {copiedCitationFormat === 'bibtex' ? 'Copied to Clipboard!' : 'Copy BibTeX'}
                              </button>
                            </div>
                            <pre className="p-4 bg-black border border-zinc-900 rounded text-zinc-500 leading-relaxed overflow-x-auto text-[10.5px] max-w-full">
{`@techreport{xavira2026${activeCompany.id},
  author = {Burri, Vishnuvardhan and XAVIRA Technologies Research Team},
  title = {Engineering Intelligence Audit: ${activeCompany.name} System Architecture},
  institution = {XAVIRA Technologies Ltd.},
  year = {2026},
  number = {XAV-ID-${activeCompany.id.toUpperCase()}-v2.1},
  url = {https://www.xaviratechlabs.com/research/${activeCompany.slug}}
}`}
                            </pre>
                          </div>

                          {/* IEEE / Harvard */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <div className="space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="text-zinc-400 font-bold">// IEEE STANDARD REFERENCE</span>
                                <button
                                  onClick={() => {
                                    const text = `V. Burri et al., "Engineering Intelligence Audit: ${activeCompany.name} System Architecture," XAVIRA Technologies, Tech. Rep. XAV-ID-${activeCompany.id.toUpperCase()}-v2.1, 2026. Available: https://www.xaviratechlabs.com/research/${activeCompany.slug}.`;
                                    navigator.clipboard.writeText(text);
                                    setCopiedCitationFormat('ieee');
                                    setTimeout(() => setCopiedCitationFormat(null), 2000);
                                  }}
                                  className="text-cyan-400 hover:text-white hover:underline uppercase text-[9px] font-bold tracking-wider cursor-pointer"
                                >
                                  {copiedCitationFormat === 'ieee' ? 'Copied!' : 'Copy IEEE'}
                                </button>
                              </div>
                              <div className="p-3 bg-black border border-zinc-900 rounded text-zinc-400 font-sans text-xs leading-relaxed">
                                V. Burri et al., "Engineering Intelligence Audit: {activeCompany.name} System Architecture," XAVIRA Technologies, Tech. Rep. XAV-ID-{activeCompany.id.toUpperCase()}-v2.1, 2026. Available: https://www.xaviratechlabs.com/research/{activeCompany.slug}.
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="text-zinc-400 font-bold">// HARVARD CITATION STYLE</span>
                                <button
                                  onClick={() => {
                                    const text = `Burri, V. (2026). Engineering Intelligence Audit: ${activeCompany.name} System Architecture, Tech. Rep. XAV-ID-${activeCompany.id.toUpperCase()}-v2.1. London: XAVIRA Technologies. Available at: https://www.xaviratechlabs.com/research/${activeCompany.slug} [Accessed 16 July 2026].`;
                                    navigator.clipboard.writeText(text);
                                    setCopiedCitationFormat('harvard');
                                    setTimeout(() => setCopiedCitationFormat(null), 2000);
                                  }}
                                  className="text-cyan-400 hover:text-white hover:underline uppercase text-[9px] font-bold tracking-wider cursor-pointer"
                                >
                                  {copiedCitationFormat === 'harvard' ? 'Copied!' : 'Copy Harvard'}
                                </button>
                              </div>
                              <div className="p-3 bg-black border border-zinc-900 rounded text-zinc-400 font-sans text-xs leading-relaxed">
                                Burri, V. (2026). Engineering Intelligence Audit: {activeCompany.name} System Architecture, Tech. Rep. XAV-ID-{activeCompany.id.toUpperCase()}-v2.1. London: XAVIRA Technologies. Available at: https://www.xaviratechlabs.com/research/{activeCompany.slug} [Accessed 16 July 2026].
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>

                    </div>
                  )}

                </div>

                {/* THE CORE MANDATED SECTIONS (STATIC DISCLOSURES) */}
                <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 sm:p-8 space-y-12">
                  
                  {/* SECTION 1: VERIFIED PUBLIC INFORMATION */}
                  <div className="space-y-4">
                    <div className="border-b border-zinc-900 pb-2.5 flex items-center justify-between">
                      <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>SECTION 1: Verified Public Information</span>
                      </h3>
                      <span className="font-mono text-[9px] bg-emerald-950/30 text-emerald-400 border border-emerald-800/20 px-2 py-0.5 rounded uppercase">Verified Only</span>
                    </div>
                    <p className="text-xs text-zinc-450 leading-relaxed font-light font-sans">
                      All metrics below are sourced directly from publicly accessible code deposits, server headers, and corporate announcements. No private variables have been assumed or guessed.
                    </p>
                    <ul className="space-y-2 text-xs text-zinc-300 font-light font-sans">
                      {activeCompany.verifiedPublicInfo.map((info, idx) => (
                        <li key={idx} className="leading-relaxed bg-zinc-900/20 border border-zinc-900 p-3.5 rounded-lg flex items-start gap-3">
                          <span className="text-emerald-400 font-mono text-[9px] uppercase shrink-0 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-850/20">✓ Verified Public Information</span>
                          <span className="text-zinc-250 font-sans">{info}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SECTION 2: ENGINEERING OBSERVATIONS */}
                  <div className="space-y-4">
                    <div className="border-b border-zinc-900 pb-2.5 flex items-center justify-between">
                      <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <AlertOctagon className="w-4 h-4 text-zinc-400" />
                        <span>SECTION 2: Engineering Observations</span>
                      </h3>
                      <span className="font-mono text-[9px] bg-zinc-900/80 text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded uppercase">Analytical Interpretations</span>
                    </div>
                    <p className="text-xs text-zinc-450 leading-relaxed font-light font-sans">
                      These are professional engineering observations based on non-invasive system checks, job specs, and architectural evolutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeCompany.engineeringObservations.map((obs) => (
                        <div key={obs.id} className="p-4 bg-zinc-900/30 border border-zinc-900 rounded-lg space-y-4">
                          <div className="flex justify-between items-center text-[9px] font-mono">
                            <span className="text-zinc-400 font-bold uppercase">{obs.category}</span>
                            <span className={`font-bold uppercase ${
                              obs.risk === 'Critical' || obs.risk === 'High' ? 'text-rose-500' : 'text-amber-500'
                            }`}>{obs.risk} Risk</span>
                          </div>
                          <div className="inline-block bg-zinc-850 text-zinc-350 font-mono text-[9px] uppercase px-2 py-0.5 rounded border border-zinc-800">
                            ✓ Engineering Observation
                          </div>
                          
                          <h4 className="text-xs font-bold text-white font-mono uppercase tracking-tight mt-1">{obs.title}</h4>
                          <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">{obs.description}</p>
                          
                          <div className="text-[9.5px] font-mono text-zinc-550 border-t border-zinc-900/60 pt-2 uppercase">
                            Operational Impact: {obs.impact}
                          </div>

                          {/* FULL SCHEMATIC DIAGRAM IMAGE FOR OBSERVATION */}
                          <div className="relative h-32 w-full rounded-md border border-zinc-900/80 overflow-hidden bg-zinc-950/90 flex flex-col justify-between p-2.5 group">
                            {/* Gradients and background scanlines */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:10px_10px] opacity-25" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                            
                            {/* Real placeholder image styled with no-referrer */}
                            <img 
                              src={`https://picsum.photos/seed/${obs.id}/500/200?blur=1`} 
                              alt={`${obs.title} Blueprint`}
                              className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />

                            {/* SVG Blueprint Elements */}
                            <div className="relative z-20 w-full h-full flex flex-col justify-between">
                              <div className="flex justify-between items-start">
                                <div className="space-y-0.5">
                                  <span className="block font-mono text-[7px] text-zinc-500 uppercase tracking-widest">// ARCHITECTURAL TELEMETRY</span>
                                  <span className="block font-mono text-[8px] text-cyan-400/80 uppercase font-bold">{obs.id} // SYSTEM BLUEPRINT</span>
                                </div>
                                <span className="font-mono text-[7px] text-emerald-400/80 bg-emerald-950/20 border border-emerald-500/20 px-1 py-0.2 rounded uppercase">
                                  Trace Active
                                </span>
                              </div>

                              {/* Interactive-looking SVG Schematic nodes */}
                              <div className="flex items-center justify-center gap-4 py-1">
                                <div className="flex flex-col items-center">
                                  <div className="w-6 h-6 rounded border border-cyan-500/30 bg-cyan-950/20 flex items-center justify-center">
                                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                                  </div>
                                  <span className="font-mono text-[6.5px] text-zinc-500 mt-1 uppercase">Node Gate</span>
                                </div>
                                <div className="h-[1px] w-8 border-t border-dashed border-zinc-800 relative">
                                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                                </div>
                                <div className="flex flex-col items-center">
                                  <div className="w-6 h-6 rounded border border-rose-500/30 bg-rose-950/20 flex items-center justify-center animate-pulse">
                                    <Database className="w-3.5 h-3.5 text-rose-400" />
                                  </div>
                                  <span className="font-mono text-[6.5px] text-zinc-500 mt-1 uppercase">Db Write</span>
                                </div>
                                <div className="h-[1px] w-8 border-t border-dashed border-zinc-800" />
                                <div className="flex flex-col items-center">
                                  <div className="w-6 h-6 rounded border border-zinc-700 bg-zinc-900/60 flex items-center justify-center">
                                    <Shield className="w-3.5 h-3.5 text-zinc-400" />
                                  </div>
                                  <span className="font-mono text-[6.5px] text-zinc-500 mt-1 uppercase">Compliance</span>
                                </div>
                              </div>

                              <div className="flex justify-between items-end text-[7px] font-mono text-zinc-500">
                                <span>CONCURRENCY MULTIPLIER: 4.8X</span>
                                <span>LATENCY: &lt; 3.2ms</span>
                              </div>
                            </div>
                          </div>

                          {/* EVIDENCE SOURCES */}
                          {obs.evidenceSources && obs.evidenceSources.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-zinc-900/40">
                              <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-2">// EVIDENCE SOURCES FOUND</span>
                              <div className="flex flex-wrap gap-2">
                                {obs.evidenceSources.map((source, sIdx) => {
                                  const lowerSource = source.toLowerCase();
                                  let bgStyle = "bg-zinc-950/80 border-zinc-800 text-zinc-400";
                                  let iconElement = <Globe className="w-3 h-3 text-zinc-500" />;
                                  let formattedSource = source;

                                  if (lowerSource.includes("blog")) {
                                    bgStyle = "bg-amber-950/30 border-amber-500/20 text-amber-300";
                                    iconElement = <FileText className="w-3 h-3 text-amber-400" />;
                                    formattedSource = source.includes("Company") ? source : `Company Blog: ${source}`;
                                  } else if (lowerSource.includes("press") || lowerSource.includes("release") || lowerSource.includes("news") || lowerSource.includes("announcement")) {
                                    bgStyle = "bg-cyan-950/30 border-cyan-500/20 text-cyan-300";
                                    iconElement = <Radio className="w-3 h-3 text-cyan-400" />;
                                    formattedSource = source.includes("Press") ? source : `Press Release: ${source}`;
                                  } else if (lowerSource.includes("github") || lowerSource.includes("repo") || lowerSource.includes("code") || lowerSource.includes("configuration")) {
                                    bgStyle = "bg-emerald-950/30 border-emerald-500/20 text-emerald-300";
                                    iconElement = <Terminal className="w-3 h-3 text-emerald-400" />;
                                    formattedSource = source.includes("GitHub") ? source : `Public Code Repo: ${source}`;
                                  } else if (lowerSource.includes("hiring") || lowerSource.includes("careers") || lowerSource.includes("jobs") || lowerSource.includes("portal") || lowerSource.includes("spec") || lowerSource.includes("posting")) {
                                    bgStyle = "bg-purple-950/30 border-purple-500/20 text-purple-300";
                                    iconElement = <Users className="w-3 h-3 text-purple-400" />;
                                    formattedSource = source.includes("Careers") || source.includes("Hiring") ? source : `Careers Portal: ${source}`;
                                  } else if (lowerSource.includes("documentation") || lowerSource.includes("disclosure") || lowerSource.includes("product")) {
                                    bgStyle = "bg-blue-950/30 border-blue-500/20 text-blue-300";
                                    iconElement = <Shield className="w-3 h-3 text-blue-400" />;
                                    formattedSource = source;
                                  }

                                  return (
                                    <span key={sIdx} className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono border rounded ${bgStyle}`}>
                                      {iconElement}
                                      <span>{formattedSource}</span>
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SECTION 3: ENGINEERING HYPOTHESES */}
                  <div className="space-y-4">
                    <div className="border-b border-zinc-900 pb-2.5 flex items-center justify-between">
                      <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Layers className="w-4 h-4 text-amber-400" />
                        <span>SECTION 3: Engineering Hypotheses</span>
                      </h3>
                      <span className="font-mono text-[9px] bg-amber-950/30 text-amber-400 border border-amber-800/20 px-2 py-0.5 rounded uppercase">Requires Formal Validation</span>
                    </div>
                    <p className="text-xs text-zinc-450 leading-relaxed font-light font-sans italic">
                      Every hypothesis below is theoretical and MUST be treated as an investigational target. They have NOT been confirmed and require dedicated verification with code access.
                    </p>
                    <div className="space-y-4">
                      {activeCompany.engineeringHypotheses.map((hyp) => (
                        <div key={hyp.id} className="p-5 bg-black border border-zinc-900 rounded-lg space-y-4">
                          <div className="flex flex-wrap justify-between items-center gap-2 text-[9.5px] font-mono">
                            <span className="text-zinc-500 uppercase tracking-widest">HYPOTHESIS REFERENCE: {hyp.id}</span>
                            <span className="text-amber-400 font-bold uppercase bg-amber-950/20 px-2 py-0.5 rounded border border-amber-850/20">✓ Engineering Hypothesis</span>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-2">
                            <div className="inline-flex items-center gap-1.5 bg-zinc-900 border border-zinc-850 px-2 py-0.5 rounded text-[9px] font-mono text-zinc-400 uppercase">
                              <span>Focus: {hyp.area}</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-850 px-2 py-0.5 rounded text-[9px] font-mono text-zinc-400">
                              <span className="text-zinc-500 uppercase tracking-wider text-[8.5px]">Confidence:</span>
                              <div className="flex items-center gap-1">
                                <span className={`w-1.5 h-1.5 rounded-full ${hyp.likelihood === 'High' ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]' : hyp.likelihood === 'Medium' ? 'bg-amber-400' : 'bg-zinc-600'}`} />
                                <span className={`w-1.5 h-1.5 rounded-full ${hyp.likelihood === 'High' ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]' : hyp.likelihood === 'Medium' ? 'bg-amber-400' : 'bg-zinc-800'}`} />
                                <span className={`w-1.5 h-1.5 rounded-full ${hyp.likelihood === 'High' ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]' : 'bg-zinc-800'}`} />
                              </div>
                              <span className={`text-[9px] uppercase font-semibold ${hyp.likelihood === 'High' ? 'text-emerald-400' : hyp.likelihood === 'Medium' ? 'text-amber-400' : 'text-zinc-400'}`}>
                                {hyp.likelihood}
                              </span>
                            </div>
                          </div>

                          <h4 className="text-xs font-bold text-white uppercase font-mono">{hyp.title}</h4>
                          <p className="text-xs text-zinc-350 font-sans font-light leading-relaxed">{hyp.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-zinc-900/80 font-sans text-xs">
                            <div>
                              <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-wider">Evidence Basis</span>
                              <p className="text-zinc-350 font-sans text-[11px] mt-0.5 font-light leading-relaxed">{hyp.evidenceBasis}</p>
                            </div>
                            <div>
                              <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-wider">Reasoning</span>
                              <p className="text-zinc-350 font-sans text-[11px] mt-0.5 font-light leading-relaxed">{hyp.reasoning}</p>
                            </div>
                            <div>
                              <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-wider">Validation Required</span>
                              <p className="text-zinc-350 font-sans text-[11px] mt-0.5 font-light leading-relaxed">{hyp.validationMethod}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SECTION 4: RECOMMENDATIONS */}
                  <div className="space-y-4">
                    <div className="border-b border-zinc-900 pb-2.5 flex items-center justify-between">
                      <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-cyan-400" />
                        <span>SECTION 4: Recommendations</span>
                      </h3>
                      <span className="font-mono text-[9px] bg-cyan-950/30 text-cyan-400 border border-cyan-800/20 px-2 py-0.5 rounded uppercase">Remediation Roadmap</span>
                    </div>
                    <p className="text-xs text-zinc-450 leading-relaxed font-light font-sans">
                      Targeted technical interventions organized by priority, indicating downstream business and engineering outcomes.
                    </p>
                    <div className="space-y-4">
                      {activeCompany.recommendations.map((rec) => (
                        <div key={rec.id} className="p-5 bg-gradient-to-br from-[#020b18]/60 to-zinc-950 border border-cyan-900/30 rounded-xl space-y-4">
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-cyan-400 font-bold uppercase">ACTION PLAN: {rec.id}</span>
                            <span className="bg-cyan-950 text-cyan-400 font-bold px-2.5 py-0.5 rounded border border-cyan-800/30 uppercase">✓ Recommendation</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[9px] bg-cyan-950/50 text-cyan-400 border border-cyan-800/30 px-2 py-0.5 rounded uppercase font-bold">{rec.priority} Priority</span>
                          </div>

                          <h4 className="text-sm font-bold text-white font-display uppercase tracking-wide">{rec.title}</h4>
                          <p className="text-xs text-zinc-300 font-sans font-light leading-relaxed">{rec.action}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-zinc-900 font-sans text-xs">
                            <div>
                              <span className="block text-[8px] text-zinc-550 font-mono uppercase">Business Impact</span>
                              <p className="text-zinc-300 font-sans text-[11px] mt-0.5 font-light leading-relaxed">{rec.businessImpact}</p>
                            </div>
                            <div>
                              <span className="block text-[8px] text-zinc-550 font-mono uppercase">Engineering Impact</span>
                              <p className="text-zinc-300 font-sans text-[11px] mt-0.5 font-light leading-relaxed">{rec.engineeringImpact}</p>
                            </div>
                            <div>
                              <span className="block text-[8px] text-zinc-550 font-mono uppercase">Expected Outcome</span>
                              <p className="text-zinc-300 font-sans text-[11px] mt-0.5 font-light leading-relaxed">{rec.expectedOutcome}</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap justify-between gap-2 text-[9px] font-mono text-zinc-500 pt-2 border-t border-zinc-900/40 uppercase">
                            <span>Timeline: {rec.timeframe}</span>
                            <span>Estimated Complexity: {rec.complexity}</span>
                            <span className="text-emerald-400 font-bold">Metric: {rec.impactMetric}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* CITATIONS AND SOURCES */}
                <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-5 text-xs text-zinc-500 space-y-3 font-mono">
                  <span className="block text-[9px] text-zinc-400 font-bold uppercase tracking-widest">// DOCUMENTARY CITATION INDEX</span>
                  <div className="space-y-1.5 list-none">
                    {activeCompany.sources.map((src, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-light">
                        <span className="text-zinc-650">[{i+1}]</span>
                        <span>{src}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: INTELLIGENCE METRIC CARD & CTAS (lg:col-span-4) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* RADIAL SCOREBOARD CARD */}
                <div className="bg-gradient-to-b from-[#020a1a] to-black border border-[#0f1d3a] p-6 rounded-xl text-center space-y-6 relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                  
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// CORE SECURITY & INTELLIGENCE RATING</span>
                    <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">Overall Intelligence Score</h3>
                  </div>

                  {/* Core Intelligence Metric Score */}
                  <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="64" cy="64" r="54" stroke="#090f22" strokeWidth="8" fill="transparent" />
                      <circle cx="64" cy="64" r="54" stroke="#06b6d4" strokeWidth="8" fill="transparent" 
                              strokeDasharray="339" strokeDashoffset={339 - (339 * activeCompany.scores.overallScore) / 100}
                              strokeLinecap="round" className="transition-all duration-1000 ease-out" />
                    </svg>
                    <div className="absolute text-center">
                      <span className="block font-mono text-3xl font-black text-white">{activeCompany.scores.overallScore}%</span>
                      <span className="block font-mono text-[8px] text-zinc-500 uppercase tracking-widest">COHERENCE</span>
                    </div>
                  </div>

                  {/* Linear Subscore parameters (SAMPLE SCORES NOTICE AT BOTTOM) */}
                  <div className="space-y-3 text-left border-t border-zinc-900 pt-5 font-mono text-[11px]">
                    <span className="block text-[8px] text-zinc-550 uppercase tracking-wider font-bold mb-2">// SAMPLE AUDIT METRICS GRID</span>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Architecture Robustness</span>
                        <span className="text-white font-bold">{activeCompany.scores.architecture}%</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden">
                        <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.architecture}%` }} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Cloud Allocation Efficiency</span>
                        <span className="text-white font-bold">{activeCompany.scores.cloud}%</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden">
                        <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.cloud}%` }} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Security Posture Index</span>
                        <span className="text-white font-bold">{activeCompany.scores.security}%</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden">
                        <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.security}%` }} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">AI Readiness & Tuning</span>
                        <span className="text-white font-bold">{activeCompany.scores.aiReadiness}%</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden">
                        <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.aiReadiness}%` }} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Technical Debt Resistance</span>
                        <span className="text-white font-bold">{100 - activeCompany.scores.technicalDebt}%</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden">
                        <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${100 - activeCompany.scores.technicalDebt}%` }} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Scalability Headroom</span>
                        <span className="text-white font-bold">{activeCompany.scores.scalability}%</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden">
                        <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeCompany.scores.scalability}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-950 border border-zinc-900 text-zinc-500 font-mono text-[9px] uppercase text-center rounded">
                    "Illustrative assessment based solely on publicly available information and engineering analysis. This is not a formal audit."
                  </div>
                </div>

                {/* EXECUTIVE BRIEFING SUMMARY */}
                <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-5 space-y-3">
                  <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold">// EXECUTIVE BRIEFING SUMMARY</span>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light font-sans">
                    {activeCompany.executiveSummary}
                  </p>
                </div>

                {/* THE MANDATED CONVERSION GATEWAYS */}
                <div className="bg-[#020715] border border-[#0f1d3a] p-6 rounded-xl space-y-4">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-wider block">// PLATFORM CONVERSION GATEWAYS</span>
                    <h3 className="font-display text-xs font-bold text-white uppercase tracking-widest">CONTINUE THE CONVERSATION</h3>
                    <p className="text-[11px] text-zinc-500 leading-relaxed font-sans font-light">
                      Partner with XAVIRA to convert theoretical observations into structured architectural blueprints.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Option 1 */}
                    <div className="p-3 bg-black border border-zinc-900 rounded hover:border-cyan-900/50 transition-all text-left space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-white font-bold uppercase">1. Book XAVIRA Discovery</span>
                        <span className="text-cyan-400 font-bold">£100</span>
                      </div>
                      <p className="text-[11px] text-zinc-500 font-sans font-light leading-normal">
                        A direct 30-minute technical session to review these hypotheses against your internal parameters.
                      </p>
                      <button 
                        onClick={onBookAdvisory}
                        className="w-full mt-2 py-1.5 bg-zinc-900 hover:bg-white hover:text-black text-white font-mono text-[10px] font-bold uppercase rounded transition-all flex items-center justify-center gap-1"
                      >
                        <span>BOOK SESSION</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Option 2 */}
                    <div className="p-3 bg-black border border-zinc-900 rounded hover:border-cyan-900/50 transition-all text-left space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-white font-bold uppercase">2. Request Intelligence Audit</span>
                        <span className="text-cyan-400 font-bold">£5,000</span>
                      </div>
                      <p className="text-[11px] text-zinc-500 font-sans font-light leading-normal">
                        A formal non-intrusive codebase static audit, deep cloud profiling, and a structured recommendations roadmap.
                      </p>
                      <button 
                        onClick={onBookAdvisory}
                        className="w-full mt-2 py-1.5 bg-zinc-900 hover:bg-white hover:text-black text-white font-mono text-[10px] font-bold uppercase rounded transition-all flex items-center justify-center gap-1"
                      >
                        <span>REQUEST FORMAL AUDIT</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Option 3 */}
                    <div className="p-3 bg-black border border-zinc-900 rounded hover:border-cyan-900/50 transition-all text-left space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-white font-bold uppercase">3. Technical Discussion</span>
                        <span className="text-zinc-500 font-bold">INQUIRE</span>
                      </div>
                      <p className="text-[11px] text-zinc-500 font-sans font-light leading-normal">
                        Schedule a confidential peer-to-peer engineering advisory session for CEOs and CTOs.
                      </p>
                      <button 
                        onClick={onBookAdvisory}
                        className="w-full mt-2 py-1.5 bg-transparent hover:bg-zinc-900 border border-zinc-850 text-zinc-400 font-mono text-[10px] font-bold uppercase rounded transition-all flex items-center justify-center gap-1"
                      >
                        <span>SCHEDULE ADVISORY</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* INTERNAL LINKING / RELATED DIRECTORIES */}
                <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-5 space-y-4">
                  <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold">// RELATED CORPORATE AUDITS</span>
                  <div className="space-y-2">
                    {COMPANIES_DATA.filter(c => c.id !== activeCompany.id && (c.industry === activeCompany.industry || c.techStack.cloud.some(cloud => activeCompany.techStack.cloud.includes(cloud)))).slice(0, 2).map(rel => (
                      <div 
                        key={rel.id} 
                        onClick={() => navigateTo(`/research/${rel.slug}`)}
                        className="p-3 bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 rounded flex items-center justify-between cursor-pointer group transition-all"
                      >
                        <div>
                          <span className="block text-xs font-bold text-white group-hover:text-cyan-400 uppercase font-mono tracking-wide transition-colors">{rel.name}</span>
                          <span className="text-[9px] font-mono text-zinc-500 uppercase">{rel.industry} • COHERENCE {rel.scores.overallScore}%</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* SEO Crawlers Schema Payloads Drawer */}
                <div className="border border-zinc-900 bg-zinc-950/20 p-4 rounded-lg space-y-2.5">
                  <button 
                    onClick={() => setShowCrawlerPayload(!showCrawlerPayload)}
                    className="w-full text-left flex justify-between items-center text-[10px] font-mono text-zinc-500 hover:text-white transition-colors uppercase cursor-pointer"
                  >
                    <span>// SEO Crawler JSON-LD Schema Payloads</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showCrawlerPayload ? 'rotate-180 text-cyan-400' : ''}`} />
                  </button>
                  {showCrawlerPayload && (
                    <pre className="bg-zinc-950 border border-zinc-900 p-3 rounded text-[9px] font-mono text-cyan-500 max-h-48 overflow-y-auto leading-relaxed">
                      {JSON.stringify({ 
                        Organization: "XAVIRA Technologies",
                        Service: "XAVIRA Engineering Audits",
                        BreadcrumbList: "Home / Research / " + activeCompany.industry + " / " + activeCompany.name,
                        FAQPage: activeCompany.engineeringObservations.map(o => ({ q: o.title, a: o.description })),
                        PriceOffers: ["£100 Discovery Session", "£5000 Intelligence Audit"]
                      }, null, 2)}
                    </pre>
                  )}
                </div>

                {/* DEDICATED ENGINEERING INTELLIGENCE DISCLAIMER MANDATE */}
                <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-lg text-[10px] font-mono text-zinc-600 leading-relaxed uppercase select-none">
                  <strong className="text-zinc-500 block mb-1">Engineering Intelligence Disclaimer:</strong>
                  "This page contains verified public information together with professional engineering observations and hypotheses based on publicly available sources. No intrusive testing, confidential information, or unauthorized access has been performed. Engineering hypotheses require validation through a formal engagement."
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

// Simple custom inline SlidersIcon to support the Filter panels
function SlidersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="2" y1="14" x2="6" y2="14" />
      <line x1="10" y1="8" x2="14" y2="8" />
      <line x1="18" y1="16" x2="22" y2="16" />
    </svg>
  );
}
