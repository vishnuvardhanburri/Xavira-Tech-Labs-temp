import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  ArrowUpRight, 
  Activity, 
  Cpu, 
  Server, 
  ShieldAlert, 
  Layers, 
  Clock, 
  TrendingUp, 
  HelpCircle, 
  Zap, 
  Sparkles,
  Search,
  Sliders,
  CheckCircle2,
  Lock,
  AlertOctagon,
  Radio,
  Globe,
  Users,
  Terminal,
  FileText,
  Shield,
  Database
} from 'lucide-react';
import { COMPANIES_DATA } from '../data/engineeringIntelligence';

interface EngineeringIntelligenceViewProps {
  onBackToHome: () => void;
  onBookAdvisory: () => void;
}

export default function EngineeringIntelligenceView({ onBackToHome, onBookAdvisory }: EngineeringIntelligenceViewProps) {
  // Target selective observation state
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>(COMPANIES_DATA[0]?.id || '');

  // SEO schemas dynamic injection for the Engineering Intelligence Console
  useEffect(() => {
    // Save original title
    const originalTitle = document.title;
    document.title = "Engineering Intelligence & Risk Simulator Console | XAVIRA";

    // Organization Schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.id = 'seo-intelligence-org-schema';
    orgScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "XAVIRA Technologies",
      "url": "https://www.xaviratechlabs.com",
      "logo": "https://www.xaviratechlabs.com/logo.png",
      "description": "Sovereign Engineering Intelligence & Technical Due Diligence.",
      "sameAs": [
        "https://github.com/xavira",
        "https://linkedin.com/company/xavira"
      ]
    });
    document.head.appendChild(orgScript);

    // Breadcrumbs Schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'seo-intelligence-breadcrumb-schema';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "XAVIRA Home", "item": "https://www.xaviratechlabs.com" },
        { "@type": "ListItem", "position": 2, "name": "Engineering Intelligence Console", "item": "https://www.xaviratechlabs.com/intelligence" }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    // SoftwareApplication / Tool Schema
    const toolScript = document.createElement('script');
    toolScript.type = 'application/ld+json';
    toolScript.id = 'seo-intelligence-tool-schema';
    toolScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "XAVIRA Architecture Health & Risk Simulator",
      "operatingSystem": "All",
      "applicationCategory": "DeveloperApplication",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD"
      },
      "description": "Simulate architecture health, security vulnerabilities, database load scaling bottlenecks, and legacy technical debt costs interactively.",
      "browserRequirements": "Requires JavaScript. Requires HTML5."
    });
    document.head.appendChild(toolScript);

    // FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.id = 'seo-intelligence-faq-schema';
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does XAVIRA calculate the Architecture Health Score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The health score is derived from weighted metrics including database concurrency scaling limits, static analysis of legacy technical debt lines, and automated integration/IaC unit testing coverage."
          }
        },
        {
          "@type": "Question",
          "name": "What is the estimated cost of legacy technical debt in software systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Legacy code elements introduce operational drag. Our simulator estimates the financial cost of this debt based on active code maintenance hours, developer remediation rates, and system stability impact parameters."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      document.title = originalTitle;
      document.getElementById('seo-intelligence-org-schema')?.remove();
      document.getElementById('seo-intelligence-breadcrumb-schema')?.remove();
      document.getElementById('seo-intelligence-tool-schema')?.remove();
      document.getElementById('seo-intelligence-faq-schema')?.remove();
    };
  }, []);

  // Simulator states
  const [dbScale, setDbScale] = useState<number>(45); // req/sec concurrency multiplier
  const [legacyDebt, setLegacyDebt] = useState<number>(60); // legacy lines of code percentage
  const [coverage, setCoverage] = useState<number>(75); // unit test/IaC coverage

  // Calculations for dynamic dashboard based on sliders
  const calculateScore = (base: number, dbImpact: number, debtImpact: number, covImpact: number) => {
    const score = base - (dbScale * dbImpact) - (legacyDebt * debtImpact) + (coverage * covImpact);
    return Math.min(100, Math.max(20, Math.round(score)));
  };

  const healthScore = calculateScore(85, 0.15, 0.35, 0.2);
  const architectureScore = calculateScore(90, 0.2, 0.4, 0.15);
  const securityScore = calculateScore(88, 0.05, 0.3, 0.25);
  const aiReadiness = calculateScore(75, 0.1, 0.25, 0.2);
  const cloudHealth = calculateScore(92, 0.25, 0.1, 0.25);
  const scalabilityScore = calculateScore(95, 0.35, 0.2, 0.1);
  const estimatedDebtCost = Math.round((legacyDebt * 4500) + (100 - coverage) * 1200);

  // Core explanation tabs
  const [activeTab, setActiveTab] = useState<'concept' | 'risk' | 'benefits'>('concept');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16 select-none font-sans">
      
      {/* Title Header */}
      <div className="border-b border-zinc-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#040c1e]/60 border border-[#1e2d4a]/80 rounded px-3 py-1 text-[10px] font-mono font-medium text-cyan-400 uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>[ SYSTEM METRICS INTELLIGENCE ]</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-light text-white tracking-widest uppercase">
            Engineering Intelligence
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl font-light leading-relaxed">
            The mathematical, unbiased truth of your software platforms. We move past anecdotal opinions to measure structural reliability, scalability capabilities, and architectural risk.
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

      {/* Narrative Section: Interactive Explanation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Tab selectors & Detailed copy */}
        <div className="lg:col-span-6 space-y-8">
          <div className="flex border-b border-zinc-900 gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab('concept')}
              className={`pb-3 px-2 font-mono text-[10px] font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'concept' ? 'text-cyan-400 border-b-2 border-cyan-500' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              01 // The Concept
            </button>
            <button
              onClick={() => setActiveTab('risk')}
              className={`pb-3 px-2 font-mono text-[10px] font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'risk' ? 'text-cyan-400 border-b-2 border-cyan-500' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              02 // Reducing Risk
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`pb-3 px-2 font-mono text-[10px] font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'benefits' ? 'text-cyan-400 border-b-2 border-cyan-500' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              03 // Business Benefits
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6 text-zinc-400 font-light text-sm leading-relaxed"
            >
              {activeTab === 'concept' && (
                <>
                  <h3 className="font-display text-xl text-white font-normal uppercase tracking-wider">
                    What is Engineering Intelligence?
                  </h3>
                  <p>
                    Historically, software development has been guided by subjective, anecdotal developer consensus. "We should refactor," "the database feels slow," or "the code is messy" are statements that fail to quantify risk for corporate leadership.
                  </p>
                  <p>
                    <strong className="text-zinc-200">Engineering Intelligence (EI)</strong> is the discipline of extracting, compiling, and analyzing deep telemetry, AST schema paths, database locking behaviors, and configuration states directly from the running environment. 
                  </p>
                  <p>
                    By looking at bytecode, static structures, memory allocation profiles, and runtime logs, we construct an <span className="text-cyan-400 font-medium">objective, mathematical scorecard</span> of your platform's operational limits.
                  </p>
                  <div className="p-4 bg-zinc-950/40 border border-zinc-900 rounded space-y-2">
                    <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// COGNITIVE STATEMENT</span>
                    <p className="text-xs text-zinc-300 italic">
                      "If you cannot measure your architecture's concurrent limits with exact mathematical telemetry, you are not managing platform risk — you are guessing."
                    </p>
                  </div>
                </>
              )}

              {activeTab === 'risk' && (
                <>
                  <h3 className="font-display text-xl text-white font-normal uppercase tracking-wider">
                    Reducing Critical Engineering Risks
                  </h3>
                  <p>
                    Engineering failure isn't a random lightning strike; it is an accumulation of structural bottlenecks. Systems collapse because unnoticed thread lock contentions, uncapped connection pools, and unindexed database queries cascade during peak user demand.
                  </p>
                  <p>
                    XAVIRA's Engineering Intelligence framework proactively intercepts and flags:
                  </p>
                  <ul className="space-y-3 pl-1 text-xs">
                    <li className="flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span><strong className="text-zinc-200">System State Corruption:</strong> Tracking race conditions in microservice communication models that corrupt ledger or audit data.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span><strong className="text-zinc-200">Scalability Starvation:</strong> Diagnosing heavy monolithic lock-contention holding database threads, resulting in connection pool starvation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong className="text-zinc-200">Configuration Drift Vulnerability:</strong> Identifying manual system modifications that invalidate disaster recovery procedures (RTO/RPO limits).</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === 'benefits' && (
                <>
                  <h3 className="font-display text-xl text-white font-normal uppercase tracking-wider">
                    Direct Business & Financial Benefits
                  </h3>
                  <p>
                    Engineering Intelligence changes the relationship between business executives and product engineering teams:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded border border-zinc-900 bg-zinc-950/40 space-y-1">
                      <span className="block font-mono text-[10px] text-cyan-400 font-bold uppercase">FOR CEOs & CFOs</span>
                      <p className="text-xs text-zinc-400">
                        Right-size cloud infrastructures to save an average 20-40% on monthly computing fees, and align feature roadmap investments with real platform capabilities.
                      </p>
                    </div>
                    <div className="p-4 rounded border border-zinc-900 bg-zinc-950/40 space-y-1">
                      <span className="block font-mono text-[10px] text-cyan-400 font-bold uppercase">FOR CTOs & VPs</span>
                      <p className="text-xs text-zinc-400">
                        Eliminate late-night deployment fear, secure deterministic sub-5ms latency paths, and gain concrete evidence to prioritize technical refactoring cycles.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500">
                    *Based on over 40+ audited architectures. Most enterprise scale-ups are over-provisioned in cloud networks by up to 150%, wasting hundreds of thousands of pounds in silent compute cycles.
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
          
          <div className="border-t border-zinc-900 pt-6">
            <button
              onClick={onBookAdvisory}
              className="w-full sm:w-auto bg-[#040c1e] hover:bg-[#061533] border border-[#1e2d4a] text-white font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Request Engineering Intelligence Audit</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Right: The Interactive EI Scorecard & Simulator Sandbox */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#030712]/60 border border-zinc-900 rounded-xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            {/* Aesthetic mesh overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
              <div className="space-y-1">
                <span className="block font-mono text-[8px] text-zinc-500 uppercase tracking-widest">// ACTIVE SCORECARD SIMULATOR</span>
                <h4 className="font-display text-sm font-medium text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span>Interactive System Sandbox</span>
                </h4>
              </div>
              <span className="font-mono text-[10px] text-cyan-400 font-bold bg-cyan-950/20 border border-cyan-500/20 px-2 py-0.5 rounded">
                SIMULATION LIVE
              </span>
            </div>

            {/* Simulated Sliders */}
            <div className="space-y-4 bg-zinc-950/40 p-4 rounded border border-zinc-900/60">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-mono text-zinc-400 font-medium">DB Write Concurrency (req/s)</span>
                  <span className="font-mono text-cyan-400 font-bold">{dbScale * 1000} req/s</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="150" 
                  value={dbScale}
                  onChange={(e) => setDbScale(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-1 bg-zinc-900 rounded-lg appearance-none"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-mono text-zinc-400 font-medium">Legacy Unmonitored Code (%)</span>
                  <span className="font-mono text-amber-500 font-bold">{legacyDebt}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={legacyDebt}
                  onChange={(e) => setLegacyDebt(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-1 bg-zinc-900 rounded-lg appearance-none"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-mono text-zinc-400 font-medium">IaC & Test Coverage (%)</span>
                  <span className="font-mono text-emerald-400 font-bold">{coverage}%</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={coverage}
                  onChange={(e) => setCoverage(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-1 bg-zinc-900 rounded-lg appearance-none"
                />
              </div>
            </div>

            {/* Live Computed Metrics */}
            <div className="space-y-4">
              <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                // MATHEMATICAL SIMULATION RESULTS (PREVIEW)
              </span>

              <div className="grid grid-cols-2 gap-3">
                {/* Score Cards */}
                <div className="p-3 bg-zinc-950/20 border border-zinc-900 rounded space-y-1.5">
                  <span className="block font-mono text-[8px] text-zinc-500 uppercase tracking-widest">ENGINEERING HEALTH</span>
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-xl font-bold ${healthScore > 80 ? 'text-cyan-400' : healthScore > 50 ? 'text-amber-400' : 'text-rose-500'}`}>
                      {healthScore}/100
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      {healthScore > 80 ? 'EXCELLENT' : healthScore > 50 ? 'MODERATE' : 'SEVERE RISK'}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-950/20 border border-zinc-900 rounded space-y-1.5">
                  <span className="block font-mono text-[8px] text-zinc-500 uppercase tracking-widest">ARCHITECTURE SCORE</span>
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-xl font-bold ${architectureScore > 80 ? 'text-cyan-400' : architectureScore > 50 ? 'text-amber-400' : 'text-rose-500'}`}>
                      {architectureScore}/100
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      {architectureScore > 80 ? 'SOLID' : 'DECOUPLE REQ'}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-950/20 border border-zinc-900 rounded space-y-1.5">
                  <span className="block font-mono text-[8px] text-zinc-500 uppercase tracking-widest">SECURITY SCORE</span>
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-xl font-bold ${securityScore > 80 ? 'text-cyan-400' : securityScore > 50 ? 'text-amber-400' : 'text-rose-500'}`}>
                      {securityScore}/100
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      {securityScore > 80 ? 'SAFE' : 'PATCH REQ'}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-950/20 border border-zinc-900 rounded space-y-1.5">
                  <span className="block font-mono text-[8px] text-zinc-500 uppercase tracking-widest">AI READINESS</span>
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-xl font-bold ${aiReadiness > 80 ? 'text-cyan-400' : aiReadiness > 50 ? 'text-amber-400' : 'text-rose-500'}`}>
                      {aiReadiness}/100
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      {aiReadiness > 80 ? 'READY' : 'MIGRATING'}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-950/20 border border-zinc-900 rounded space-y-1.5">
                  <span className="block font-mono text-[8px] text-zinc-500 uppercase tracking-widest">CLOUD HEALTH</span>
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-xl font-bold ${cloudHealth > 80 ? 'text-cyan-400' : cloudHealth > 50 ? 'text-amber-400' : 'text-rose-500'}`}>
                      {cloudHealth}/100
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      {cloudHealth > 80 ? 'OPTIMAL' : 'WASTING SPEND'}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-950/20 border border-zinc-900 rounded space-y-1.5">
                  <span className="block font-mono text-[8px] text-zinc-500 uppercase tracking-widest">SCALABILITY SCORE</span>
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-xl font-bold ${scalabilityScore > 80 ? 'text-cyan-400' : scalabilityScore > 50 ? 'text-amber-400' : 'text-rose-500'}`}>
                      {scalabilityScore}/100
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      {scalabilityScore > 80 ? '10X READY' : 'BOTTLENECKED'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Estimated financial leak */}
              <div className="bg-zinc-950/60 border border-zinc-900/80 rounded p-4 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="block font-mono text-[8px] text-zinc-500 uppercase tracking-widest">ESTIMATED TECHNICAL DEBT ANNUALLY</span>
                  <p className="text-xs text-zinc-300">Runaway costs caused by slower merging, outages, and code friction.</p>
                </div>
                <div className="text-right">
                  <span className="block font-mono text-xs text-zinc-500">ESTIMATED LOSS</span>
                  <span className={`block font-mono text-lg font-bold ${estimatedDebtCost > 150000 ? 'text-rose-500' : 'text-amber-400'}`}>
                    £{estimatedDebtCost.toLocaleString()} / yr
                  </span>
                </div>
              </div>

              {/* Advisory Trigger block */}
              <div className="text-center">
                <span className="inline-block font-mono text-[10px] text-zinc-500">
                  *This data is illustrative of common microservice audits.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Target Engineering Observations Feed */}
      {(() => {
        const selectedCompany = COMPANIES_DATA.find(c => c.id === selectedCompanyId) || COMPANIES_DATA[0];
        if (!selectedCompany) return null;
        return (
          <div className="border-t border-zinc-900 pt-16 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-900 pb-6">
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-widest">// TARGET SYSTEM RECONNAISSANCE</span>
                <h3 className="font-display text-xl text-white font-normal uppercase tracking-wider flex items-center gap-2">
                  <AlertOctagon className="w-5 h-5 text-zinc-400" />
                  <span>Engineering Observations Feed</span>
                </h3>
                <p className="text-xs text-zinc-450 max-w-xl font-light">
                  Deep intelligence extracted passive checking logs, hiring dynamics, and developer public postings. Select a corporate target to view.
                </p>
              </div>

              {/* Company Tabs Selector */}
              <div className="flex flex-wrap gap-1.5 bg-black/40 border border-zinc-900 p-1 rounded-lg">
                {COMPANIES_DATA.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCompanyId(c.id)}
                    className={`px-3 py-1.5 font-mono text-[10px] font-bold tracking-wider rounded transition-all cursor-pointer ${
                      selectedCompanyId === c.id 
                        ? 'bg-[#040c1e] text-cyan-400 border border-[#1e2d4a]' 
                        : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
                    }`}
                  >
                    {c.name.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedCompany.engineeringObservations.map((obs) => (
                <div key={obs.id} className="p-5 bg-zinc-900/25 border border-zinc-900 rounded-xl space-y-4 relative overflow-hidden group">
                  <div className="flex justify-between items-center text-[9px] font-mono">
                    <span className="text-zinc-400 font-bold uppercase tracking-wider">{obs.category}</span>
                    <span className={`font-bold uppercase ${
                      obs.risk === 'Critical' || obs.risk === 'High' ? 'text-rose-500' : 'text-amber-400'
                    }`}>{obs.risk} Risk</span>
                  </div>
                  
                  <div className="inline-block bg-zinc-850 text-zinc-350 font-mono text-[9px] uppercase px-2 py-0.5 rounded border border-zinc-800">
                    ✓ Audited Target Observation
                  </div>

                  <h4 className="text-sm font-bold text-white font-mono uppercase tracking-tight mt-1">{obs.title}</h4>
                  <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">{obs.description}</p>

                  <div className="text-[10px] font-mono text-zinc-500 border-t border-zinc-900/60 pt-2 uppercase">
                    Operational Impact: {obs.impact}
                  </div>

                  {/* FULL SCHEMATIC DIAGRAM IMAGE FOR OBSERVATION */}
                  <div className="relative h-36 w-full rounded-lg border border-zinc-900 overflow-hidden bg-zinc-950/90 flex flex-col justify-between p-3">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:10px_10px] opacity-25" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                    
                    <img 
                      src={`https://picsum.photos/seed/${obs.id}/500/250?blur=1`} 
                      alt={`${obs.title} Blueprint`}
                      className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    <div className="relative z-20 w-full h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="space-y-0.5">
                          <span className="block font-mono text-[7px] text-zinc-500 uppercase tracking-widest">// LIVE GRAPH ARCHITECTURE</span>
                          <span className="block font-mono text-[8px] text-cyan-400/80 uppercase font-bold">{obs.id} // FLOW BLUEPRINT</span>
                        </div>
                        <span className="font-mono text-[7px] text-emerald-400/80 bg-emerald-950/20 border border-emerald-500/20 px-1 py-0.2 rounded uppercase">
                          Trace Active
                        </span>
                      </div>

                      <div className="flex items-center justify-center gap-4 py-1">
                        <div className="flex flex-col items-center">
                          <div className="w-7 h-7 rounded border border-cyan-500/30 bg-cyan-950/20 flex items-center justify-center">
                            <Cpu className="w-4 h-4 text-cyan-400" />
                          </div>
                          <span className="font-mono text-[6.5px] text-zinc-500 mt-1 uppercase">Node Gate</span>
                        </div>
                        <div className="h-[1px] w-8 border-t border-dashed border-zinc-800 relative">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-7 h-7 rounded border border-rose-500/30 bg-rose-950/20 flex items-center justify-center animate-pulse">
                            <Database className="w-4 h-4 text-rose-400" />
                          </div>
                          <span className="font-mono text-[6.5px] text-zinc-500 mt-1 uppercase">Db Write</span>
                        </div>
                        <div className="h-[1px] w-8 border-t border-dashed border-zinc-800" />
                        <div className="flex flex-col items-center">
                          <div className="w-7 h-7 rounded border border-zinc-700 bg-zinc-900/60 flex items-center justify-center">
                            <Shield className="w-4 h-4 text-zinc-400" />
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

                  {/* EVIDENCE SOURCES SECTION */}
                  {obs.evidenceSources && obs.evidenceSources.length > 0 && (
                    <div className="mt-4 pt-3.5 border-t border-zinc-900/60">
                      <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-2.5">// EVIDENCE SOURCES FOUND</span>
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
        );
      })()}

      {/* Trust Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-900">
        <div className="space-y-2">
          <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">01 // PRECISE AST TELEMETRY</span>
          <h5 className="font-display text-sm text-white uppercase font-normal">No Hand-Waving Opinions</h5>
          <p className="text-xs text-zinc-400 font-light leading-relaxed">
            We map actual abstract syntax trees, runtime memory allocation pointers, and compiler build maps to extract objective data.
          </p>
        </div>
        <div className="space-y-2">
          <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">02 // ACTIVE DECOUPLE BENCHMARKS</span>
          <h5 className="font-display text-sm text-white uppercase font-normal">True Scalability Analysis</h5>
          <p className="text-xs text-zinc-400 font-light leading-relaxed">
            We simulate peak traffic locks (100,000+ transaction locks) to determine where databases stall and thread pool starvations trigger.
          </p>
        </div>
        <div className="space-y-2">
          <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">03 // DIRECT CLOUD TRACING</span>
          <h5 className="font-display text-sm text-white uppercase font-normal">Immediate Spend Pruning</h5>
          <p className="text-xs text-zinc-400 font-light leading-relaxed">
            We scan CPU cycles and memory reservation layers, matching provisioning size to true runtime load averages.
          </p>
        </div>
      </div>

    </div>
  );
}
