import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Layers, 
  Terminal, 
  Database, 
  ShieldCheck, 
  Activity, 
  GitBranch, 
  Search,
  RefreshCw,
  Info,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { SERVICES } from '../data/websiteContent';
import { ServiceItem } from '../types';

// Define the master list of tools with category metadata and descriptions
interface ToolItem {
  name: string;
  category: 'languages' | 'cloud' | 'data' | 'security' | 'ci-cd' | 'observability' | 'ai' | 'architecture';
  description: string;
}

const MASTER_TOOLS: ToolItem[] = [
  // Languages & Runtimes
  { name: "Rust", category: "languages", description: "Memory-safe, high-performance systems language for low-latency thread execution." },
  { name: "Go", category: "languages", description: "Efficient concurrent service runtime with lightweight goroutines and network stacks." },
  { name: "Node.js (TypeScript)", category: "languages", description: "Strictly typed scalable middleware services running on the high-performance V8 engine." },
  { name: "vLLM", category: "languages", description: "High-throughput and memory-efficient LLM serving engine." },

  // Cloud & Infrastructure
  { name: "Terraform", category: "cloud", description: "Declarative infrastructure-as-code for auditing and managing stateful environments." },
  { name: "Google Cloud (GCP)", category: "cloud", description: "Sovereign cloud compute clusters, identity-aware proxies, and BigQuery warehouses." },
  { name: "AWS", category: "cloud", description: "Distributed AWS VPCs, secure IAM gates, and hyper-scalable compute clusters." },
  { name: "Pulumi", category: "cloud", description: "Programmatic multi-cloud provisioning using actual code structures." },
  { name: "Kubernetes", category: "cloud", description: "Declarative container orchestration with automated horizontal scale and scheduling." },
  { name: "Sovereign Cloud Networks", category: "cloud", description: "Isolated, zero-ingress private networking configurations." },
  { name: "Backstage", category: "cloud", description: "Open developer portals to centralize and visualize microservice templates." },
  { name: "ArgoCD", category: "cloud", description: "Declarative GitOps deployment loops synchronization for Kubernetes clusters." },
  { name: "Crossplane", category: "cloud", description: "Kubernetes-native control planes for managing cloud resources declarative." },

  // Data & Caching
  { name: "PostgreSQL", category: "data", description: "Robust transactional relational database configured with deep row-level security." },
  { name: "Redis", category: "data", description: "In-memory data grid configured for sub-millisecond key-value caching and socket queues." },
  { name: "Kafka", category: "data", description: "Distributed event streaming platform for high-throughput messaging topologies." },
  { name: "Qdrant", category: "data", description: "Enterprise vector similarity database for private AI embeddings semantic retrieval." },
  { name: "Pinecone", category: "data", description: "Managed vector index for high-dimensional semantic search and retrieval." },
  { name: "ClickHouse", category: "data", description: "Fast columnar analytical database for telemetry auditing and micro-second aggregation." },
  { name: "BigQuery", category: "data", description: "Serverless enterprise analytics warehouse for auditing and querying multi-terabyte datasets." },
  { name: "Spark", category: "data", description: "Unified analytical engine for large-scale distributed data processing." },
  { name: "Flink", category: "data", description: "Stateful stream processing engine for real-time telemetry pipelines." },
  { name: "dbt", category: "data", description: "SQL orchestration framework to transform and audit analytical databases." },
  { name: "DuckDB", category: "data", description: "In-process analytical database engine optimized for local diagnostics and queries." },
  { name: "Airflow", category: "data", description: "Programmatic DAG orchestration for complex data pipeline dependencies." },

  // Security & Secrets
  { name: "Trivy", category: "security", description: "Comprehensive scanner for vulnerabilities in container images, file systems, and git repositories." },
  { name: "Snyk", category: "security", description: "Continuous integration security scans covering third-party open-source dependency trees." },
  { name: "Vault", category: "security", description: "Secure credential management with short-lived dynamic lease leases and secret rotation." },
  { name: "Cloud Armor", category: "security", description: "Edge-layer WAF and DDoS mitigation filter rules." },
  { name: "Keycloak", category: "security", description: "Open-source identity access manager providing federated SAML and OIDC credentials." },
  { name: "Opa (Rego)", category: "security", description: "Open Policy Agent declarative engine for automated compliance rules validation." },

  // CI/CD & Build
  { name: "GitHub Actions", category: "ci-cd", description: "Automated test runner, lint analyzer, and deployment trigger pipelines." },
  { name: "GitLab CI", category: "ci-cd", description: "Integrated runners and registry pipelines optimized for private source code control." },
  { name: "Dagger", category: "ci-cd", description: "Portable dev engine executing pipelines inside isolated containerized runtimes." },
  { name: "Bazel", category: "ci-cd", description: "Fast, hermetic build system ensuring deterministic output compilation." },
  { name: "Nix", category: "ci-cd", description: "Purely functional package manager guaranteeing reproducible developer environment environments." },

  // Observability & Diagnostics
  { name: "Sonargraph", category: "observability", description: "Static analyzer evaluating architectural boundaries and circular import structures." },
  { name: "eBPF", category: "observability", description: "Kernel-level passive probes measuring syscall latency and network packets without code changes." },
  { name: "Custom Static Analysers", category: "observability", description: "In-house AST-parsing utilities scanning codebases for lock contentions and unawaited promises." },
  { name: "Jaeger", category: "observability", description: "Distributed tracing engine measuring end-to-end request propagation times across systems." },
  { name: "Prometheus", category: "observability", description: "Highly reliable time-series server collecting system concurrency and worker load stats." },
  { name: "Grafana", category: "observability", description: "Rich metric visualization dashboard mapping live operational thresholds." },
  { name: "Datadog", category: "observability", description: "Unified cloud tracing, APM, and infrastructure telemetry aggregator." },
  { name: "OpenTelemetry", category: "observability", description: "Vendor-neutral SDK standard for collecting logs, metrics, and distributed spans." },
  { name: "PagerDuty", category: "observability", description: "Automated paging router triggering critical incident site reliability interventions." },

  // AI & Advanced
  { name: "Google GenAI SDK", category: "ai", description: "Modern SDK for building server-side AI-powered architectural audits and categorization." },
  { name: "LangChain/LlamaIndex", category: "ai", description: "Data frameworks to connect private documents with LLM prompt context systems." },
  { name: "HuggingFace", category: "ai", description: "Repository hub of open-source models utilized for hosting customized local code-completion agents." },

  // FinOps & Cost
  { name: "Cost Optimization Systems", category: "observability", description: "Proprietary code looking for idle CPU resource and over-provisioned disk allocations." },
  { name: "AWS Cost Explorer", category: "observability", description: "Granular AWS billing metadata evaluation and resource rightsizing engine." },
  { name: "GCP Recommender", category: "observability", description: "ML-driven alerts identifying inactive database sockets and over-allocated memory blocks." },

  // Modeling & Concepts
  { name: "C4 Model", category: "architecture", description: "Context, container, and component systems maps for software architecture design." },
  { name: "Event-Sourcing", category: "architecture", description: "Architecture pattern ensuring absolute auditability by storing system state changes as append-only event streams." },
  { name: "gRPC", category: "architecture", description: "High-performance RPC framework communicating over HTTP/2 using Protobuf schemas." },
  { name: "Protobuf", category: "architecture", description: "Language-neutral, compact binary serialization protocol for microservice communications." },
  { name: "UML Modeling", category: "architecture", description: "Structural blueprints defining database and domain boundaries explicitly." }
];

const CATEGORY_METADATA = {
  languages: { label: "Languages & Runtimes", icon: <Terminal className="w-3.5 h-3.5" />, color: "text-amber-400 border-amber-500/20 bg-amber-950/20" },
  cloud: { label: "Cloud & Platform", icon: <Layers className="w-3.5 h-3.5" />, color: "text-cyan-400 border-cyan-500/20 bg-cyan-950/20" },
  data: { label: "Data & Caching", icon: <Database className="w-3.5 h-3.5" />, color: "text-emerald-400 border-emerald-500/20 bg-emerald-950/20" },
  security: { label: "Security & Secrets", icon: <ShieldCheck className="w-3.5 h-3.5" />, color: "text-purple-400 border-purple-500/20 bg-purple-950/20" },
  "ci-cd": { label: "CI/CD & Automation", icon: <GitBranch className="w-3.5 h-3.5" />, color: "text-rose-400 border-rose-500/20 bg-rose-950/20" },
  observability: { label: "Diagnostics & Telemetry", icon: <Activity className="w-3.5 h-3.5" />, color: "text-sky-400 border-sky-500/20 bg-sky-950/20" },
  ai: { label: "AI & Models", icon: <Cpu className="w-3.5 h-3.5" />, color: "text-indigo-400 border-indigo-500/20 bg-indigo-950/20" },
  architecture: { label: "Modeling & Patterns", icon: <Layers className="w-3.5 h-3.5" />, color: "text-zinc-400 border-zinc-500/20 bg-zinc-950/20" }
};

export default function TechStackVisualizer() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedToolName, setSelectedToolName] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Find the currently selected service
  const activeService = useMemo(() => {
    if (!selectedServiceId) return null;
    return SERVICES.find(s => s.id === selectedServiceId) || null;
  }, [selectedServiceId]);

  // Determine which tools are active based on the current service selection
  const activeToolsForService = useMemo(() => {
    if (!activeService) return null;
    return new Set(activeService.technicalStack.map(t => t.toLowerCase().trim()));
  }, [activeService]);

  // Determine which services are active based on the current tool selection
  const activeServicesForTool = useMemo(() => {
    if (!selectedToolName) return null;
    const toolLower = selectedToolName.toLowerCase().trim();
    return new Set(
      SERVICES.filter(service => 
        service.technicalStack.some(t => t.toLowerCase().trim() === toolLower)
      ).map(s => s.id)
    );
  }, [selectedToolName]);

  // Handle clicking a tool node
  const handleToolClick = (toolName: string) => {
    if (selectedToolName === toolName) {
      setSelectedToolName(null); // Deselect
    } else {
      setSelectedToolName(toolName);
      setSelectedServiceId(null); // Clear service selection
    }
  };

  // Handle clicking a service row
  const handleServiceClick = (serviceId: string) => {
    if (selectedServiceId === serviceId) {
      setSelectedServiceId(null); // Deselect
    } else {
      setSelectedServiceId(serviceId);
      setSelectedToolName(null); // Clear tool selection
    }
  };

  // Clear all selections
  const handleReset = () => {
    setSelectedServiceId(null);
    setSelectedToolName(null);
    setSearchQuery('');
  };

  // Filter tools list based on search query
  const filteredTools = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return MASTER_TOOLS;
    return MASTER_TOOLS.filter(t => 
      t.name.toLowerCase().includes(query) || 
      t.description.toLowerCase().includes(query) ||
      t.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group tools by category for rendering
  const toolsByCategory = useMemo(() => {
    const groups: Record<string, ToolItem[]> = {};
    filteredTools.forEach(t => {
      if (!groups[t.category]) {
        groups[t.category] = [];
      }
      groups[t.category].push(t);
    });
    return groups;
  }, [filteredTools]);

  return (
    <div id="tech-stack-visualizer-card" className="bg-[#05070c]/60 border border-cyan-500/10 rounded-xl p-6 lg:p-8 space-y-8 shadow-[0_0_40px_rgba(6,182,212,0.03)] font-sans">
      
      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
        <div className="space-y-2">
          <span className="font-mono text-[9px] text-cyan-400 bg-cyan-950/30 border border-cyan-500/25 px-2.5 py-1 rounded uppercase tracking-widest inline-flex items-center gap-1.5 font-bold">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            [INTERACTIVE SCHEMATIC]
          </span>
          <h2 className="font-display text-xl lg:text-2xl font-light text-white uppercase tracking-wider">
            Enterprise Tool Matrix & Tech Stack Visualizer
          </h2>
          <p className="text-xs text-zinc-400 font-light max-w-2xl leading-relaxed">
            Click on any **Service** on the left to highlight its exact supporting technology stack, or select any **Tool** badge on the right to discover which core architectural services employ it.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {(selectedServiceId || selectedToolName || searchQuery) && (
            <button
              onClick={handleReset}
              className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded border border-zinc-800 hover:border-zinc-700 transition-all font-mono text-[10px] tracking-widest uppercase flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              Reset Matrix
            </button>
          )}
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3" />
            <input
              type="text"
              placeholder="Filter tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-zinc-950 border border-zinc-900 rounded px-2.5 py-1.5 pl-8 text-[11px] font-mono text-white outline-none focus:border-cyan-500/40 transition-all w-44 placeholder:text-zinc-600"
            />
          </div>
        </div>
      </div>

      {/* Main interactive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Services List (5 Cols) */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-500" />
            1. Select Engineering Service
          </h3>

          <div className="space-y-2 max-h-[550px] overflow-y-auto pr-2 custom-scrollbar">
            {SERVICES.map((service) => {
              const isSelected = selectedServiceId === service.id;
              
              // If a tool is selected, is this service utilizing that tool?
              const isHighlighted = activeServicesForTool ? activeServicesForTool.has(service.id) : false;
              const hasActiveSelection = selectedServiceId !== null || selectedToolName !== null;
              
              const opacityClass = hasActiveSelection 
                ? (isSelected || isHighlighted ? "opacity-100 border-cyan-500/40 bg-[#090e18]/90" : "opacity-35 hover:opacity-60")
                : "opacity-100 hover:border-zinc-800 hover:bg-zinc-900/15";

              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-2 ${
                    isSelected 
                      ? "bg-[#0b1322] border-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.06)]" 
                      : "bg-[#04060b] border-zinc-900 text-zinc-300"
                  } ${opacityClass}`}
                >
                  <div className="flex items-start justify-between gap-4 w-full">
                    <h4 className="font-display text-xs sm:text-[13px] font-bold tracking-wide uppercase leading-tight">
                      {service.title}
                    </h4>
                    {isHighlighted && (
                      <span className="shrink-0 text-[8px] font-mono font-bold uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-1.5 py-0.5 rounded tracking-widest animate-pulse">
                        [Utilizes Tool]
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs text-zinc-400 font-light leading-relaxed">
                    {service.tagline}
                  </p>
                  
                  {/* Miniature tags preview inside list item */}
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {service.technicalStack.slice(0, 3).map((tool, idx) => (
                      <span key={idx} className="text-[8px] font-mono text-zinc-500 bg-zinc-950 border border-zinc-900 px-1.5 py-0.5 rounded">
                        {tool}
                      </span>
                    ))}
                    {service.technicalStack.length > 3 && (
                      <span className="text-[8px] font-mono text-zinc-600 px-1 py-0.5">
                        +{service.technicalStack.length - 3} more
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Interactive Tools Cloud (7 Cols) */}
        <div className="lg:col-span-7 space-y-4 bg-zinc-950/20 border border-zinc-900/60 p-5 lg:p-6 rounded-xl">
          <h3 className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-amber-500" />
              2. Explore Tools & Frameworks
            </span>
            <span className="text-[9px] text-zinc-500 lowercase font-light">
              click individual badges to cross-reference
            </span>
          </h3>

          {/* Interactive tools category blocks */}
          <div className="space-y-6">
            {Object.keys(CATEGORY_METADATA).map((catKey) => {
              const catTools = toolsByCategory[catKey];
              if (!catTools || catTools.length === 0) return null;

              const meta = CATEGORY_METADATA[catKey as keyof typeof CATEGORY_METADATA];

              return (
                <div key={catKey} className="space-y-2 border-b border-zinc-900/40 last:border-0 pb-4 last:pb-0">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-zinc-400">
                    <span className="text-zinc-600">{meta.icon}</span>
                    <span className="font-bold text-zinc-300">{meta.label}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {catTools.map((tool) => {
                      const isSelected = selectedToolName?.toLowerCase() === tool.name.toLowerCase();
                      
                      // If a service is selected, is this tool a part of that service's stack?
                      const isHighlighted = activeToolsForService ? activeToolsForService.has(tool.name.toLowerCase().trim()) : false;
                      const hasActiveSelection = selectedServiceId !== null || selectedToolName !== null;

                      // Decide style classes
                      const isAnyActive = isSelected || isHighlighted;
                      const activeClass = isAnyActive
                        ? `${meta.color.split(' ')[0]} bg-cyan-950/40 border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.1)] font-semibold`
                        : "text-zinc-500 bg-zinc-950 border-zinc-900 hover:border-zinc-800 hover:text-zinc-300";

                      const opacityClass = hasActiveSelection
                        ? (isAnyActive ? "opacity-100 scale-[1.03]" : "opacity-30 hover:opacity-50")
                        : "opacity-100 hover:scale-[1.02]";

                      return (
                        <button
                          key={tool.name}
                          onClick={() => handleToolClick(tool.name)}
                          title={tool.description}
                          className={`px-2.5 py-1.5 rounded text-[10px] font-mono border transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${activeClass} ${opacityClass}`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />}
                          {tool.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Details / Explanation panel dynamically updated */}
          <AnimatePresence mode="wait">
            {(selectedServiceId || selectedToolName) ? (
              <motion.div
                key={selectedServiceId ? `s-${selectedServiceId}` : `t-${selectedToolName}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="bg-[#090c13] border border-cyan-500/20 p-4 rounded-lg mt-6 space-y-3 shadow-inner"
              >
                {/* 1. Service selected detail */}
                {activeService && (
                  <>
                    <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                      <span className="font-mono text-[9px] tracking-widest text-cyan-400 uppercase font-bold">
                        [ACTIVE SERVICE BLUEPRINT]
                      </span>
                      <span className="font-mono text-[9px] text-zinc-500">
                        {activeService.technicalStack.length} STACK CHANNELS CONFIGURED
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                        {activeService.title}
                      </h4>
                      <p className="text-xs text-zinc-300 leading-relaxed font-light">
                        {activeService.description}
                      </p>
                      
                      {/* Interactive Problem Solved list item snippet */}
                      <div className="bg-zinc-950/60 p-3 rounded border border-zinc-900 space-y-1.5">
                        <span className="font-mono text-[8px] text-zinc-400 uppercase block font-bold">Primary Target Vector:</span>
                        <p className="text-xs text-cyan-300/90 font-light font-mono leading-relaxed">
                          ⚡ {activeService.technicalProblem}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* 2. Tool selected detail */}
                {selectedToolName && (() => {
                  const toolObj = MASTER_TOOLS.find(t => t.name.toLowerCase() === selectedToolName.toLowerCase());
                  const connectedServices = SERVICES.filter(s => 
                    s.technicalStack.some(t => t.toLowerCase().trim() === selectedToolName.toLowerCase().trim())
                  );

                  return (
                    <>
                      <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                        <span className="font-mono text-[9px] tracking-widest text-amber-400 uppercase font-bold">
                          [STACK TECHNOLOGY HIGHLIGHT]
                        </span>
                        <span className="font-mono text-[9px] text-zinc-500">
                          USED IN {connectedServices.length} CORE CAPABILITIES
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                            {toolObj?.name}
                          </h4>
                          {toolObj && (
                            <span className="text-[8px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                              {toolObj.category.toUpperCase()}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed font-light">
                          {toolObj?.description}
                        </p>

                        {/* Connected services link points */}
                        {connectedServices.length > 0 && (
                          <div className="space-y-1.5 pt-1.5">
                            <span className="font-mono text-[8px] text-zinc-400 uppercase block font-bold">Direct Service Integrations:</span>
                            <div className="flex flex-col gap-1">
                              {connectedServices.map((cs) => (
                                <button
                                  key={cs.id}
                                  onClick={() => handleServiceClick(cs.id)}
                                  className="w-full text-left font-mono text-[10px] text-zinc-400 hover:text-cyan-400 transition-colors py-1 px-2 bg-zinc-950 rounded border border-zinc-900 hover:border-cyan-500/20 cursor-pointer"
                                >
                                  • {cs.title}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}

              </motion.div>
            ) : (
              <div className="bg-[#05060b] border border-dashed border-zinc-900 p-6 rounded-lg text-center mt-6">
                <Info className="w-4 h-4 text-zinc-600 mx-auto mb-2" />
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
                  [SELECT NODE TO VIEW TELEMETRY]
                </span>
                <p className="text-[11px] text-zinc-600 max-w-sm mx-auto font-light mt-1">
                  Click on an active service module or select a tech stack pill above to preview integrated systems architectures.
                </p>
              </div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </div>
  );
}
