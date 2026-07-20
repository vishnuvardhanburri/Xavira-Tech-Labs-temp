import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ChevronLeft, ChevronRight, Download, Eye, AlertTriangle, ShieldAlert, Sparkles, TrendingDown, DollarSign } from 'lucide-react';

interface ReportPage {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

interface SampleReport {
  id: string;
  title: string;
  ref: string;
  category: string;
  author: string;
  date: string;
  pages: ReportPage[];
}

export default function SampleReportsPreview() {
  const [activeReportId, setActiveReportId] = useState<string>('cloud-optimisation');
  const [activePageIdx, setActivePageIdx] = useState<number>(0);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const REPORTS: SampleReport[] = [
    {
      id: 'cloud-optimisation',
      title: 'Infrastructure & Cloud Cost Audit Report',
      ref: 'XAV-AUD-2026-042',
      category: 'Cloud Cost Optimization',
      author: 'Marcus Thorne, Principal Platform Engineer',
      date: 'April 2026',
      pages: [
        {
          title: 'Executive Summary & Findings',
          subtitle: 'An analysis of resource allocation waste in multi-tenant Kubernetes clusters.',
          content: (
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-amber-950/20 border border-amber-500/20 p-4 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                <div className="text-xs text-zinc-300">
                  <span className="font-bold text-white uppercase block mb-0.5">Primary Finding</span>
                  Identified standard over-provisioning margin of <span className="text-amber-400 font-bold font-mono">142%</span> in core CPU reservations, resulting in <span className="text-rose-500 font-bold font-mono">£12,450/month</span> of silent waste.
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">// AUDITED INFRASTRUCTURE STATE</h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-zinc-950/60 border border-zinc-900 rounded">
                    <span className="block text-[8px] text-zinc-500 uppercase font-mono">TOTAL NODES</span>
                    <span className="font-mono text-lg font-bold text-white">48 Nodes</span>
                  </div>
                  <div className="p-3 bg-zinc-950/60 border border-zinc-900 rounded">
                    <span className="block text-[8px] text-zinc-500 uppercase font-mono">CPU PEAK UTIL</span>
                    <span className="font-mono text-lg font-bold text-rose-400">18.4%</span>
                  </div>
                  <div className="p-3 bg-zinc-950/60 border border-zinc-900 rounded">
                    <span className="block text-[8px] text-zinc-500 uppercase font-mono">MEM LEAK PROBABILITY</span>
                    <span className="font-mono text-lg font-bold text-amber-400">High</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Standard container schedulers fail to account for dynamic traffic dips. By using flat memory and CPU reservation thresholds, compute resources are held hostage by idle processes, starving other microservices and artificially scaling clusters.
              </p>
            </div>
          )
        },
        {
          title: 'Resource Waste Metrics',
          subtitle: 'Live-traced core telemetry metrics comparing allocation vs true utilisation.',
          content: (
            <div className="space-y-4">
              <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// DYNAMIC CPU ALLOCATION VS TRUE LOAD</span>
              
              {/* Custom SVG simulated chart */}
              <div className="h-28 w-full border border-zinc-900 bg-zinc-950/80 rounded relative flex items-end p-2 overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 top-1/2 border-t border-zinc-900/60 border-dashed" />
                <div className="absolute inset-x-0 bottom-0 top-1/4 border-t border-zinc-900/60 border-dashed" />
                <div className="absolute top-2 left-2 text-[8px] font-mono text-zinc-500">RESERVATION BOUNDARY (64 Cores)</div>
                <div className="absolute bottom-2 right-2 text-[8px] font-mono text-cyan-400 font-bold">TRUE UTILISATION (12 Cores Avg)</div>
                
                {/* Visualizing line chart with SVG */}
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 100" preserveAspectRatio="none">
                  {/* Flat reservation line */}
                  <line x1="0" y1="20" x2="400" y2="20" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3,3" />
                  {/* Dynamic utilisation curve */}
                  <path 
                    d="M 0,90 Q 50,85 100,75 T 200,80 T 300,60 T 400,85" 
                    fill="none" 
                    stroke="#06b6d4" 
                    strokeWidth="2" 
                    className="path-animate"
                  />
                  {/* Shading under utilization */}
                  <path 
                    d="M 0,90 Q 50,85 100,75 T 200,80 T 300,60 T 400,85 L 400,100 L 0,100 Z" 
                    fill="url(#chart-gradient)" 
                    opacity="0.15" 
                  />
                  <defs>
                    <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="block font-mono text-[9px] text-zinc-500">ESTIMATED SPEND LEAKAGE</span>
                  <span className="font-mono text-lg font-bold text-rose-500">£149,400 / yr</span>
                </div>
                <div className="space-y-1">
                  <span className="block font-mono text-[9px] text-cyan-400">OPTIMISED RETENTION RATE</span>
                  <span className="font-mono text-lg font-bold text-emerald-400">42% Savings Target</span>
                </div>
              </div>
            </div>
          )
        },
        {
          title: 'Remediation Protocol',
          subtitle: 'The precise execution roadmap to reclaim resource sovereignty.',
          content: (
            <div className="space-y-4 text-xs font-light text-zinc-400 leading-relaxed">
              <p>
                To eliminate cloud billing creep without degrading customer request latency, the following steps must be deployed programmatically:
              </p>
              <ol className="space-y-2.5 font-mono text-[11px] list-decimal pl-4 text-zinc-300">
                <li>
                  <strong className="text-white">Implement KEDA Autoscalers</strong>: Connect scale patterns directly to Kafka queue backpressure instead of general CPU averages.
                </li>
                <li>
                  <strong className="text-white">Define Resource Quota Ceilings</strong>: Cap container burst thresholds at 1.5x of moving averages.
                </li>
                <li>
                  <strong className="text-white">Enforce Spot Instance Nodes</strong>: Migrate non-state worker pools to transient node pools, saving up to 70% in raw hardware compute charges.
                </li>
              </ol>
              <div className="p-3 border border-emerald-950 bg-emerald-950/10 text-emerald-400 rounded text-[10px] font-mono">
                EXPECTED RESULT: Recovery of £44,000 in spend within 14 business days of template implementation.
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'database-locks',
      title: 'Database Concurrency & Lock Diagnostic Report',
      ref: 'XAV-AUD-2026-081',
      category: 'Database Lock Diagnostics',
      author: 'Dr. Alistair Vance, Principal Distributed Architect',
      date: 'May 2026',
      pages: [
        {
          title: 'Concurrency Bottle-neck Identification',
          subtitle: 'Tracing transaction latencies and billing thread lock collisions.',
          content: (
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-rose-950/20 border border-rose-500/20 p-4 rounded-lg">
                <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0" />
                <div className="text-xs text-zinc-300">
                  <span className="font-bold text-white uppercase block mb-0.5">Critical Finding</span>
                  Billing cycle renewal scripts invoke <span className="text-rose-400 font-mono font-bold">SELECT FOR UPDATE</span> lock-steps across entire tenant tables, triggering database thread locks of up to <span className="text-rose-400 font-mono font-bold">14.8 seconds</span>.
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">// SYSTEM DIAGNOSTICS TIMELINE</h4>
                <div className="p-3 rounded bg-zinc-950 border border-zinc-900 space-y-2 text-[11px] font-mono">
                  <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                    <span className="text-zinc-500">00:00.00</span>
                    <span className="text-white">Renewals trigger row lock across user accounts</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                    <span className="text-zinc-500">00:01.40</span>
                    <span className="text-amber-500">Incoming user request stalls on DB connection pool</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">00:14.80</span>
                    <span className="text-rose-500">Timeout (504 Gateway Error) rendered to client</span>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: 'Lock Duration Telemetry',
          subtitle: 'Comparison of relational row lock holding durations under load.',
          content: (
            <div className="space-y-4">
              <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// DB LOCK DURATION IN MONOLITHIC SCHEMAS</span>

              {/* Bar charts using SVG */}
              <div className="space-y-3 bg-zinc-950/80 p-4 rounded border border-zinc-900">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-zinc-400">UNOPTIMISED LOCKING (SELECT FOR UPDATE)</span>
                    <span className="text-rose-500 font-bold">14,800 ms</span>
                  </div>
                  <div className="w-full bg-zinc-900 h-2 rounded overflow-hidden">
                    <div className="bg-rose-500 h-full rounded" style={{ width: '100%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-zinc-400">XAVIRA ASYNC QUEUED LEDGER INGEST</span>
                    <span className="text-emerald-400 font-bold">12 ms</span>
                  </div>
                  <div className="w-full bg-zinc-900 h-2 rounded overflow-hidden">
                    <div className="bg-emerald-400 h-full rounded animate-pulse" style={{ width: '4%' }} />
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                By decoupling payment authorization checks into a lock-free distributed ledger utilizing memory cache pre-verifications, write steps are isolated completely from billing rows. This establishes absolute stability under sudden transactional spikes.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: 'generative-ai-security',
      title: 'Generative AI Pipeline Data Security Audit',
      ref: 'XAV-AUD-2026-112',
      category: 'AI Pipeline Audits',
      author: 'Helena Rostova, Head of Platform & SecOps',
      date: 'June 2026',
      pages: [
        {
          title: 'Semantic Data Leak Risk',
          subtitle: 'Identifying prompt compliance leakage vectors in vector database indexes.',
          content: (
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-rose-950/20 border border-rose-500/20 p-4 rounded-lg">
                <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0" />
                <div className="text-xs text-zinc-300">
                  <span className="font-bold text-white uppercase block mb-0.5">Vulnerability Vector</span>
                  Embedding vector lookups ignore tenant ID partitioning during RAG context retrieval, exposing <span className="text-rose-400 font-mono font-bold">cross-tenant diagnostic data</span> during client inquiries.
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">// EXPOSED SEMANTIC DATA SPECIMEN</h4>
                <p className="p-3 bg-zinc-950 border border-zinc-900 rounded font-mono text-[10px] text-zinc-500 leading-relaxed">
                  Query: "Show medical reports similar to patient #491"<br />
                  Result payload: <span className="text-rose-400">[Exposed medical notes for Patient #812 - Tenant #04]</span><br />
                  Risk level: <span className="text-rose-500 font-bold uppercase">Severe HIPAA Non-Compliance</span>
                </p>
              </div>
            </div>
          )
        },
        {
          title: 'Sovereign Guardrails Blueprint',
          subtitle: 'The multi-tenant vector security layer pattern.',
          content: (
            <div className="space-y-4">
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                To isolate user context inside LLM retrieval structures, we implement a strict **Metadata Tenant Validation** hook directly inside the API gateway proxy before the semantic lookup matches vectors.
              </p>

              <div className="p-3 rounded bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-cyan-400 space-y-1">
                <div>// ENFORCING METADATA TENANT BOUNDS</div>
                <div>const queryResult = await vectorDb.search(&#123;</div>
                <div className="pl-4">vector: promptEmbedding,</div>
                <div className="pl-4 text-emerald-400">filter: &#123; tenantId: currentUser.tenantId &#125;,</div>
                <div className="pl-4">limit: 5</div>
                <div>&#125;);</div>
              </div>

              <div className="p-3 bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono rounded">
                RESULT: Enforces 100% data confinement inside multi-tenant databases, maintaining HIPAA compliance targets.
              </div>
            </div>
          )
        }
      ]
    }
  ];

  const activeReport = REPORTS.find(r => r.id === activeReportId) || REPORTS[0];
  const activePage = activeReport.pages[activePageIdx] || activeReport.pages[0];

  const handleNextPage = () => {
    if (activePageIdx < activeReport.pages.length - 1) {
      setActivePageIdx(activePageIdx + 1);
    }
  };

  const handlePrevPage = () => {
    if (activePageIdx > 0) {
      setActivePageIdx(activePageIdx - 1);
    }
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert(`Report ${activeReport.ref} has been compiled and downloaded as secure PDF.`);
    }, 1500);
  };

  return (
    <div id="sample-reports-section" className="bg-[#030712]/40 border border-zinc-900 rounded-xl p-6 sm:p-8 space-y-8 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-900 pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1 bg-amber-950/30 border border-amber-500/20 rounded px-2 py-0.5 text-[9px] font-mono font-bold text-amber-400 uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Interactive Sample Audits</span>
          </div>
          <h3 className="font-display text-xl font-bold text-white tracking-wide uppercase">
            Sovereign Sample Reports
          </h3>
          <p className="text-xs text-zinc-500 font-mono">
            // MATHEMATICAL TRUTH REPORT INTERACTIVE VISUALISER
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 max-w-full">
          {REPORTS.map((r) => (
            <button
              key={r.id}
              onClick={() => {
                setActiveReportId(r.id);
                setActivePageIdx(0);
              }}
              className={`px-3 py-2 text-[10px] font-mono rounded tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeReportId === r.id
                  ? 'bg-white text-black font-semibold border border-white'
                  : 'bg-zinc-950 text-zinc-500 border border-zinc-900 hover:text-zinc-300'
              }`}
            >
              {r.category.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Document Ingestion Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Report Meta Sidebar (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col justify-between p-5 bg-zinc-950/60 rounded-lg border border-zinc-900/60 text-xs space-y-6">
          <div className="space-y-4">
            <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// DOCUMENT REGISTRATION</span>
            
            <div className="space-y-3 font-mono text-[11px]">
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-500">REF RECORD:</span>
                <span className="text-white font-semibold">{activeReport.ref}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-500">AUTHOR:</span>
                <span className="text-white truncate max-w-[120px]" title={activeReport.author}>{activeReport.author.split(',')[0]}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-500">RELEASED:</span>
                <span className="text-white">{activeReport.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">DOCUMENT CLASSIFICATION:</span>
                <span className="text-amber-400 font-bold">PROPRIETARY // CONFIDENTIAL</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// TARGET AUDIENCE VIEWPORT</span>
            <p className="text-xs text-zinc-400 leading-relaxed font-light font-sans">
              We compile deep metrics directly from active eBPF system traces, AST compile trees, and memory allocation maps to construct this report.
            </p>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`w-full py-3 bg-[#040c1e] hover:bg-[#07132e] border border-[#1e2d4a] text-white font-mono text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 ${isDownloading ? 'animate-pulse' : ''}`}
            >
              <Download className="w-4 h-4 text-zinc-400" />
              <span>{isDownloading ? 'COMPILING REPOSITORY...' : 'DOWNLOAD SPECIMEN REPORT'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Virtual Sheet Page Display (lg:col-span-8) */}
        <div className="lg:col-span-8 flex flex-col justify-between bg-zinc-950 border border-zinc-900 rounded-xl p-6 sm:p-8 relative min-h-[360px]">
          {/* Header Watermark banner */}
          <div className="flex justify-between items-center text-[8px] font-mono text-zinc-600 border-b border-zinc-900/60 pb-3 mb-4 select-none">
            <span>XAVIRA TECHNOLOGIES SECURITY AUDIT REGISTER</span>
            <span className="text-amber-500 font-bold font-mono">CONFIDENTIAL REPORT PREVIEW</span>
            <span>{activeReport.ref}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePageIdx}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
              className="space-y-4 flex-grow"
            >
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-zinc-500 uppercase">PAGE 0{activePageIdx + 1} // {activePage.title}</span>
                <p className="text-xs text-zinc-400 italic font-light">{activePage.subtitle}</p>
              </div>

              {/* Page Contents */}
              <div className="pt-4 border-t border-zinc-900">
                {activePage.content}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Page Controls */}
          <div className="flex justify-between items-center border-t border-zinc-900 pt-5 mt-6 font-mono text-xs text-zinc-500">
            <span>Page 0{activePageIdx + 1} of 0{activeReport.pages.length}</span>
            
            <div className="flex gap-2">
              <button
                onClick={handlePrevPage}
                disabled={activePageIdx === 0}
                className="w-8 h-8 rounded border border-zinc-900 bg-zinc-950 hover:bg-zinc-900 flex items-center justify-center text-white disabled:opacity-30 disabled:hover:bg-zinc-950 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextPage}
                disabled={activePageIdx === activeReport.pages.length - 1}
                className="w-8 h-8 rounded border border-zinc-900 bg-zinc-950 hover:bg-zinc-900 flex items-center justify-center text-white disabled:opacity-30 disabled:hover:bg-zinc-950 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
