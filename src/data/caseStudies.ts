export interface CaseStudy {
  id: string;
  name: string;
  ref: string;
  metric: string;
  symbol: string;
  sector: string;
  challenge: string;
  process: string[];
  results: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fintech-sovereign",
    name: "FINTECH SOVEREIGN",
    ref: "XAV-OBS-104",
    metric: "99.8% Core Accuracy",
    symbol: "◈",
    sector: "Decentralized Finance & Ledgers",
    challenge: "The client was experiencing occasional ledger drift and double-spend opportunities during peak hours when transactional volume crossed 80,000 req/sec. The existing relational database locks were causing thread-pool starvation, stalling critical checkout pipelines.",
    process: [
      "Audited transactional pipelines and mapped state progression locks.",
      "Replaced heavy database-level locking mechanics with an asynchronous, lock-free Redis-backed sequence ring.",
      "Configured secure, memory-isolated Go co-routine worker channels to serialise ledger write sequences."
    ],
    results: "Secured absolute ledger consistency. Double-spend drift reduced to exactly 0.00% under 120,000 req/sec load-testing spikes, achieving a permanent 99.8% core platform accuracy rating."
  },
  {
    id: "helix-biodata",
    name: "HELIX BIODATA",
    ref: "XAV-OBS-029",
    metric: "100% Secure Enclave",
    symbol: "❖",
    sector: "Genomic Bio-Computing",
    challenge: "Helix Biodata required absolute protection of multi-gigabyte client genomic sequences. Real-time alignment algorithms needed to process encrypted data without exposing genomic raw strings in server memory or storage dumps.",
    process: [
      "Designed and deployed hardware-backed Secure Enclave isolating layers (GCP Confidential VMs with AMD SEV-SNP).",
      "Restructured genomic ingestion APIs to terminate TLS connections directly inside the memory-encrypted enclave boundary.",
      "Enforced hardware-attested cryptographic verification for all system updates."
    ],
    results: "100% Secure Enclave isolation. Aggressive memory dump forensics and kernel inspects yielded zero plaintext genomic leakage, achieving compliance under strict state biosecurity criteria."
  },
  {
    id: "nexagrid-uk",
    name: "NEXAGRID UK",
    ref: "XAV-OBS-087",
    metric: "42% Cloud Reduction",
    symbol: "⧉",
    sector: "Industrial IoT & Grid Telemetry",
    challenge: "Uncontrolled cloud auto-scaling quotas and unoptimised Kubernetes resource limits were driving massive, non-linear cloud billing spikes across AWS and Azure, with monthly spend surging over $320,000 without corresponding efficiency gains.",
    process: [
      "Conducted a total infrastructure footprint sweep, identifying redundant multi-region warm standbys and dead disk blocks.",
      "Replaced standard, over-provisioned node groups with dynamically sized spot instances managed via Karpenter.",
      "Pruned index queries to cache heavy telemetry metrics, preventing unnecessary high-frequency compute spikes."
    ],
    results: "Direct, audited 42% drop in cloud infrastructure compute and database expenses in 30 days, saving Nexagrid UK over $1.6M in annualized operational budgets."
  },
  {
    id: "cyberos-corp",
    name: "CYBEROS CORP",
    ref: "XAV-OBS-014",
    metric: "2ms Go Queue P99",
    symbol: "✦",
    sector: "Edge Robotics & Telemetry",
    challenge: "Real-time Edge OS queues suffered from long-tail latency spikes due to Go runtime Garbage Collection (GC) pauses during telemetry packet floods. This resulted in data packet drops and robotic synchronization drift.",
    process: [
      "Conducted a deep profile audit, isolating high-frequency struct allocations.",
      "Refactored the core ingestion pipeline to employ pre-allocated pointer-free struct pools (sync.Pool).",
      "Substituted synchronous channels with lock-free ring-buffers for high-rate edge streaming."
    ],
    results: "Reduced Garbage Collection pauses to near-zero, maintaining a strict P99 latency of <2ms for edge telemetry queues under 500,000 telemetry units/sec."
  },
  {
    id: "quantum-core",
    name: "QUANTUM CORE",
    ref: "XAV-OBS-051",
    metric: "Zero Prompt Leakage",
    symbol: "⨂",
    sector: "Enterprise AI Orchestration",
    challenge: "Quantum Core's proprietary system prompts and user-context buffers were vulnerable to indirect prompt injection and reverse-engineering, threatening intellectual property and user privacy.",
    process: [
      "Engineered secure, sandboxed context barriers separating user input from structural instructions.",
      "Implemented high-speed, cryptographic token-hashing boundaries to filter outbound system keywords.",
      "Created automated red-teaming validation routines simulating over 5,000 injection attempts."
    ],
    results: "Zero prompt leakage verified across all deployment targets, certifying their LLM orchestration layers as bulletproof against external extraction exploits."
  },
  {
    id: "apex-ledger",
    name: "APEX LEDGER",
    ref: "XAV-OBS-112",
    metric: "P99 Latency <1.8ms",
    symbol: "▲",
    sector: "Enterprise Settlement Services",
    challenge: "Apex Ledger's settlement database struggled under heavy read-write lock contention. Legacy relational index structures resulted in write timeouts and P99 latency bloating past 180ms.",
    process: [
      "Re-engineered database indexing, deploying memory-cached materialized views for hot data paths.",
      "Constructed a high-concurrency memory queue using lock-free atomic sequence pointers.",
      "Decoupled settlement records into non-blocking sharded storage partitions."
    ],
    results: "P99 transaction latency plummeted to <1.8ms consistently. Achieved total write lock resolution and zero transactional bottlenecks across 2.4 Billion settled transactions."
  },
  {
    id: "vectorgrid",
    name: "VECTORGRID",
    ref: "XAV-OBS-043",
    metric: "Sub-8ms HNSW Search",
    symbol: "◆",
    sector: "Neural Search Infrastructures",
    challenge: "Their multi-million vector database was encountering severe search lag. Dimensional index traverses hit P99 bottlenecks of up to 450ms, crippling real-time matching accuracy.",
    process: [
      "Optimized SIMD instruction pipelines inside compiled C++ Go bindings to handle high-frequency float dot-products.",
      "Tuned the HNSW graph search layers, adjusting M and efConstruction cache coefficients.",
      "Partitioned the search grid into specialized vector shards aligned with NUMA hardware boundaries."
    ],
    results: "Standardized average vector matching latency to 1.4ms and P99 latency to sub-8ms across index sizes exceeding 500 million high-dimensional neural representations."
  },
  {
    id: "cloud-sovereign",
    name: "CLOUD SOVEREIGN",
    ref: "XAV-OBS-088",
    metric: "100% Infrastructure IaC",
    symbol: "◤",
    sector: "Sovereign Cloud Operations",
    challenge: "The lack of systematic state management and years of untracked manual server adjustments ('configuration drift') had left Cloud Sovereign highly vulnerable to disaster recovery failures.",
    process: [
      "Initiated a total cloud resource scan using automated state recovery tooling.",
      "Mapped and imported over 2,000 untracked cloud network, firewall, and compute nodes into modular Terraform.",
      "Established strict CI/CD linting rules with OPA (Open Policy Agent) to enforce secure-by-default architecture."
    ],
    results: "Achieved 100% Declarative Infrastructure-as-Code coverage, reducing disaster recovery recovery-point objective (RPO) from 18 hours to less than 5 minutes."
  }
];
