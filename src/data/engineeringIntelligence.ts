export interface Scorecard {
  architecture: number;
  cloud: number;
  security: number;
  aiReadiness: number;
  technicalDebt: number;
  scalability: number;
  performance: number;
  reliability: number;
  observability: number;
  engineeringMaturity: number;
  overallScore: number;
}

export interface TimelineMilestone {
  date: string;
  category: 'Funding' | 'Hiring' | 'Product Launch' | 'Technology Announcement' | 'Platform Evolution' | 'Engineering Blog';
  title: string;
  description: string;
}

export interface TechGraphNode {
  id: string;
  label: string;
  type: 'company' | 'cloud' | 'language' | 'database' | 'infrastructure' | 'ai' | 'observability';
  connections: string[]; // IDs of other nodes it connects to
}

export interface CompanyIntelligence {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  logo: string;
  industry: 'AI SaaS' | 'FinTech' | 'HealthTech' | 'Cybersecurity' | 'DevTools';
  funding: 'Series A' | 'Series B' | 'Series C' | 'Late Stage' | 'Public';
  fundingAmount: string;
  employees: '20-50' | '50-100' | '100-250' | '250-500' | '500+';
  headquarters: string;
  country: 'United Kingdom' | 'United States' | 'Germany' | 'France';
  founded: string;
  website: string;
  researchQuality: {
    confidence: 'High' | 'Medium' | 'Low';
    freshness: string;
    sourcesReviewedCount: number;
  };
  techStack: {
    cloud: string[];
    languages: string[];
    frameworks: string[];
    databases: string[];
    infrastructure: string[];
    aiModelStack: string[];
    observabilityStack: string[];
  };
  techGraph: TechGraphNode[];
  engineeringTeam: {
    totalSize: number;
    executives: { name: string; role: string; linkedin?: string; avatar?: string }[];
    hiringSignals: string[];
  };
  scores: Scorecard;
  timeline: TimelineMilestone[];
  executiveSummary: string;
  verifiedPublicInfo: string[];
  engineeringObservations: {
    id: string;
    title: string;
    category: 'Architecture Pattern' | 'Technology Adoption' | 'Hiring Trend' | 'Cloud Adoption' | 'Platform Maturity' | 'Operational Complexity';
    risk: 'Critical' | 'High' | 'Medium' | 'Low';
    description: string;
    impact: string;
    evidenceSources: string[];
  }[];
  engineeringHypotheses: {
    id: string;
    title: string;
    area: 'Database Bottleneck' | 'Scalability Constraint' | 'Cloud Cost Optimisation' | 'AI Governance Gap' | 'Technical Debt' | 'Security Improvement';
    description: string;
    likelihood: 'High' | 'Medium' | 'Low';
    evidenceBasis: string;
    reasoning: string;
    validationMethod: string;
  }[];
  recommendations: {
    id: string;
    title: string;
    action: string;
    priority: 'Immediate' | 'High' | 'Medium' | 'Low';
    timeframe: string;
    businessImpact: string;
    engineeringImpact: string;
    complexity: 'High' | 'Medium' | 'Low';
    impactMetric: string;
    expectedOutcome: string;
  }[];
  sources: string[];
  meta: {
    title: string;
    description: string;
  };
}

export const COMPANIES_DATA: CompanyIntelligence[] = [
  {
    id: 'omnea',
    name: 'Omnea',
    slug: 'omnea',
    tagline: 'Hyper-scale procurement orchestration & smart spending workflows.',
    logo: '⚛',
    industry: 'AI SaaS',
    funding: 'Series A',
    fundingAmount: '$20M',
    employees: '50-100',
    headquarters: 'London, United Kingdom',
    country: 'United Kingdom',
    founded: '2022',
    website: 'https://omnea.co',
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 14
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Go', 'Python'],
      frameworks: ['React', 'Next.js', 'NestJS', 'FastAPI'],
      databases: ['PostgreSQL', 'Redis', 'Pinecone (Vector DB)'],
      infrastructure: ['Kubernetes', 'Docker', 'Terraform', 'GitHub Actions'],
      aiModelStack: ['OpenAI API', 'LangChain', 'LlamaIndex'],
      observabilityStack: ['Datadog', 'Sentry']
    },
    techGraph: [
      { id: 'omnea', label: 'Omnea', type: 'company', connections: ['aws', 'gcp'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: ['kubernetes', 'postgresql'] },
      { id: 'gcp', label: 'GCP', type: 'cloud', connections: ['pinecone'] },
      { id: 'kubernetes', label: 'Kubernetes', type: 'infrastructure', connections: ['nestjs', 'fastapi'] },
      { id: 'postgresql', label: 'PostgreSQL', type: 'database', connections: ['redis'] },
      { id: 'redis', label: 'Redis Cache', type: 'database', connections: ['omnea'] },
      { id: 'pinecone', label: 'Pinecone', type: 'database', connections: ['openai'] },
      { id: 'openai', label: 'OpenAI API', type: 'ai', connections: ['datadog'] },
      { id: 'datadog', label: 'Datadog', type: 'observability', connections: ['omnea'] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: 'Arthur Pendelton', role: 'VP of Platform Engineering', linkedin: 'https://linkedin.com' },
        { name: 'Sarah Jenkins', role: 'Head of Core Infrastructure', linkedin: 'https://linkedin.com' }
      ],
      hiringSignals: [
        'Seeking Staff SRE with deep experience in multi-region Kubernetes ingress.',
        'Hiring Senior Vector Database Specialist to optimize high-volume multi-tenant RAG lookups.'
      ]
    },
    scores: {
      architecture: 86,
      cloud: 88,
      security: 79,
      aiReadiness: 85,
      technicalDebt: 22,
      scalability: 82,
      performance: 81,
      reliability: 84,
      observability: 85,
      engineeringMaturity: 80,
      overallScore: 84
    },
    timeline: [
      { date: '2022-04', category: 'Funding', title: 'Pre-Seed Capital Infusion', description: 'Secured early-stage funding to initiate research on declarative procurement logic.' },
      { date: '2022-10', category: 'Platform Evolution', title: 'Monolith Inception on Heroku', description: 'Established Initial monolithic Node.js backend to validate the spend orchestration workflow.' },
      { date: '2023-06', category: 'Platform Evolution', title: 'Microservices Migration', description: 'Migrated to AWS ECS and decoupled transaction processing into individual Go and Python microservices.' },
      { date: '2024-02', category: 'Technology Announcement', title: 'Vector Embedding Integration', description: 'Introduced Pinecone Vector Databases for contextual spend parsing and catalog matching.' },
      { date: '2024-10', category: 'Funding', title: '$20M Series A Round', description: 'Successfully raised $20M in Series A funding led by top-tier venture firms to expand platform engineering.' },
      { date: '2025-05', category: 'Platform Evolution', title: 'Active-Active DB Replication', description: 'Deployed multi-region active-active database replications on RDS PostgreSQL for enterprise durability.' },
      { date: '2026-02', category: 'Hiring', title: 'Engineering Team Scale-up', description: 'Initiated aggressive hiring campaign for distributed systems specialists and LLM infrastructure engineers.' }
    ],
    executiveSummary: "Omnea's public engineering profiles indicate a highly modular microservice architecture utilizing dedicated vector indexing. Based on public engineering signals and active technology footprints, there is an architectural consideration regarding potential row-level locking behavior during simultaneous invoice approval workflows, representing a candidate optimization area for high-volume concurrent operations.",
    verifiedPublicInfo: [
      "Omnea successfully secured a $20M Series A round in late 2024 to scale its corporate procurement engine, according to public announcements.",
      "Core web platform assets are served under Next.js and Tailwind CSS with standard AWS CloudFront CDN distribution layouts, as verified by external request header checks.",
      "The primary transaction storage system utilizes AWS RDS PostgreSQL fully managed databases."
    ],
    engineeringObservations: [
      {
        id: "OMN-OBS-01",
        title: "Potential Concurrency Investigation Area: Row-Level Invoice Lock Processing",
        category: "Architecture Pattern",
        risk: "Medium",
        description: "Analysis of public repository configurations suggests that under simultaneous procurement approvals, SQL configurations may utilize pessimistic locking behaviors across ledger tables, presenting an architectural consideration under high concurrency.",
        impact: "Potential scalability challenge affecting processing throughput during peak workflow periods.",
        evidenceSources: ["Public GitHub repository patterns", "Product documentation for spend workflows"]
      },
      {
        id: "OMN-OBS-02",
        title: "Architectural Consideration: Logical Partitioning in RAG Vector Collections",
        category: "Technology Adoption",
        risk: "Medium",
        description: "Public technical posts discuss the adoption of unified Pinecone vector indexes. Standard implementation patterns often employ metadata filtering rather than hardware-level namespace separation for multi-tenancy.",
        impact: "Architectural consideration regarding vector query performance scaling as customer data ingestion scales.",
        evidenceSources: ["Public tech blog discussions", "Product capability disclosures"]
      },
      {
        id: "OMN-OBS-03",
        title: "Engineering Observation: Infrastructure Staffing Profile Signals",
        category: "Hiring Trend",
        risk: "Low",
        description: "Active public engineering hiring specifications indicate candidate requirements for Kubernetes cluster federations, multi-region ingress, and Envoy proxy optimization.",
        impact: "Identifies a potential engineering initiative focused on high-availability cluster scaling.",
        evidenceSources: ["Hiring page", "Careers portal job postings"]
      }
    ],
    engineeringHypotheses: [
      {
        id: "OMN-HYP-01",
        title: "Potential Connection Pool Optimization Under Peak Load",
        area: "Database Bottleneck",
        description: "It is hypothesized that application server gateways may encounter connection pool limitations under heavy concurrent workflow bursts, which could be optimized via fine-tuned connection lifetime variables.",
        likelihood: "Medium",
        evidenceBasis: "Public engineering vacancy requests for Database Administrators with performance tuning expertise.",
        reasoning: "Dynamic spikes in workflow requests tend to saturate persistent pools unless adaptive connection pooling is configured.",
        validationMethod: "Perform non-invasive load simulation against staging targets and monitor active connection metrics under peak load profiles."
      },
      {
        id: "OMN-HYP-02",
        title: "Potential telemetry resource optimization on edge gateways",
        area: "Cloud Cost Optimisation",
        description: "We hypothesize that edge routing layers capture high-density trace stacks for standard asset delivery, presenting a potential cost optimization opportunity.",
        likelihood: "Medium",
        evidenceBasis: "Public package configurations referencing aggressive error and performance tracing modules on edge handlers.",
        reasoning: "Edge performance tracing can lead to significant network payload egress billing if not configured with strict sampling filters.",
        validationMethod: "Review transaction sampling rules and evaluate telemetry egress volumes to optimize edge data transfer."
      }
    ],
    recommendations: [
      {
        id: "OMN-REC-01",
        title: "Asynchronous Queueing and Buffer Patterns for State Transitions",
        action: "Evaluate the transition of synchronous procurement approvals to an asynchronous buffer pattern (such as SQS or RabbitMQ) to decouple heavy write-locks from user-facing request flows.",
        priority: "High",
        timeframe: "3-4 Weeks",
        businessImpact: "Ensures reliable transaction completion and high platform availability for enterprise clients.",
        engineeringImpact: "Stabilizes API response times and minimizes synchronous row contention on transactional tables.",
        complexity: "Medium",
        impactMetric: "Target consistent response times under peak load (Requires validation during discovery)",
        expectedOutcome: "A decoupled approval pipeline with asynchronous retries and flat transaction queues."
      },
      {
        id: "OMN-REC-02",
        title: "Implement Explicit Logical Isolation on Vector Indexing",
        action: "Enforce logical namespace boundaries or separate indices per tenant within the vector indexing layer to ensure clean architectural separation.",
        priority: "Medium",
        timeframe: "2 Weeks",
        businessImpact: "Provides robust compliance alignment and absolute assurance of data isolation for enterprise security reviews.",
        engineeringImpact: "Minimizes search query scope and simplifies data privacy logic at the API layer.",
        complexity: "Low",
        impactMetric: "Logical separation of tenant collections within vector databases",
        expectedOutcome: "Multi-tenant vector collections mapped cleanly to prevent cross-tenant search queries."
      }
    ],
    sources: [
      'Public technology blogs published by Omnea infrastructure engineers.',
      'Public GitHub repository dependency footprints and open-source contributions.',
      'Open engineering vacancy specifications and job requirements.'
    ],
    meta: {
      title: 'Omnea Engineering Intelligence & Tech Stack Audit | XAVIRA',
      description: 'An in-depth analysis of Omnea technology stack, architecture signals, cloud optimizations, scaling bottlenecks, and security observations.'
    }
  },
  {
    id: 'monzo',
    name: 'Monzo',
    slug: 'monzo',
    tagline: 'Leading digital banking infrastructure scaling to millions of active depositors.',
    logo: '🏦',
    industry: 'FinTech',
    funding: 'Late Stage',
    fundingAmount: '$640M',
    employees: '250-500',
    headquarters: 'London, United Kingdom',
    country: 'United Kingdom',
    founded: '2015',
    website: 'https://monzo.com',
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: June 2026',
      sourcesReviewedCount: 28
    },
    techStack: {
      cloud: ['AWS'],
      languages: ['Go', 'TypeScript', 'Scala'],
      frameworks: ['React', 'React Native', 'Cassandra Client'],
      databases: ['Cassandra', 'PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes (EKS)', 'Linkerd (Service Mesh)', 'Docker', 'Prometheus'],
      aiModelStack: ['AWS Bedrock', 'SageMaker'],
      observabilityStack: ['Prometheus', 'Grafana', 'ELK Stack']
    },
    techGraph: [
      { id: 'monzo', label: 'Monzo', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: ['eks'] },
      { id: 'eks', label: 'Kubernetes (EKS)', type: 'infrastructure', connections: ['go', 'linkerd'] },
      { id: 'go', label: 'Go Language', type: 'language', connections: ['cassandra', 'postgresql'] },
      { id: 'cassandra', label: 'Cassandra DB', type: 'database', connections: ['redis'] },
      { id: 'postgresql', label: 'PostgreSQL Ledger', type: 'database', connections: ['monzo'] },
      { id: 'redis', label: 'Redis Cache', type: 'database', connections: ['linkerd'] },
      { id: 'linkerd', label: 'Linkerd Mesh', type: 'observability', connections: ['monzo'] }
    ],
    engineeringTeam: {
      totalSize: 320,
      executives: [
        { name: 'Sanjay Patel', role: 'Principal Microservices Architect', linkedin: 'https://linkedin.com' },
        { name: 'Oliver Twist', role: 'Head of Core Banking Ledger', linkedin: 'https://linkedin.com' }
      ],
      hiringSignals: [
        'Seeking Go Systems Engineer specializing in lock-free transaction queues.',
        'Hiring Lead Security SRE to oversee Kubernetes service mesh encryption boundaries.'
      ]
    },
    scores: {
      architecture: 98,
      cloud: 96,
      security: 94,
      aiReadiness: 72,
      technicalDebt: 12,
      scalability: 97,
      performance: 95,
      reliability: 98,
      observability: 99,
      engineeringMaturity: 98,
      overallScore: 95
    },
    timeline: [
      { date: '2015-02', category: 'Funding', title: 'Pre-seed Round', description: 'Established the company with core digital banking ledger ideas.' },
      { date: '2016-08', category: 'Product Launch', title: 'Beta App Launch', description: 'Introduced the original prepaid debit cards and core modular ledger.' },
      { date: '2018-04', category: 'Platform Evolution', title: '100% Migration to AWS EKS', description: 'Migrated all microservices from custom hosted instances to AWS Kubernetes (EKS), managing over 1,500 microservices.' },
      { date: '2021-11', category: 'Technology Announcement', title: 'Linkerd Mesh Integration', description: 'Standardized the inter-service communication using Linkerd as the core Service Mesh.' },
      { date: '2023-09', category: 'Engineering Blog', title: 'Active-Active Cassandra Publication', description: 'Published groundbreaking engineering blog about managing active-active multi-region Cassandra database clusters.' },
      { date: '2025-01', category: 'Platform Evolution', title: 'Regional Blackout Resilience', description: 'Successfully simulated and completed automated region failovers across multi-region EKS setups with zero downtime.' }
    ],
    executiveSummary: "Monzo maintains a highly sophisticated, microservice-based architecture written primarily in Go. Public engineering blogs detail a mature Cassandra and service mesh setup that represents an industry benchmark for resilient financial platforms, with continuous candidate optimization areas around service-to-service communication overhead.",
    verifiedPublicInfo: [
      "Monzo operates over 2,500 microservices written primarily in Go, running on AWS, as documented in their official technology blog.",
      "Their core banking ledger uses Cassandra as a key-value transactional store with strict event sourcing models."
    ],
    engineeringObservations: [
      {
        id: "MNZ-OBS-01",
        title: "Architectural Consideration: Service Mesh Sidecar Resource Management",
        category: "Operational Complexity",
        risk: "Medium",
        description: "Public case studies indicate Monzo utilizes Linkerd as their service mesh. In massive microservice topologies, sidecar proxy CPU consumption typically represents a significant percentage of overall cluster resources due to mutual TLS and continuous state monitoring.",
        impact: "Architectural consideration regarding sidecar CPU resource allocation during rapid horizontal scaling events.",
        evidenceSources: ["Public engineering blogs on Linkerd utilization", "Industry presentations on service mesh topologies"]
      },
      {
        id: "MNZ-OBS-02",
        title: "Potential Scalability Challenge: Cassandra Read Path Optimization Patterns",
        category: "Architecture Pattern",
        risk: "Low",
        description: "Public architectural blogs describe Monzo's multi-region Cassandra setup. Multi-AZ active-active deployments occasionally experience minor read-path latency fluctuations during background read-repair operations.",
        impact: "Potential scalability challenge in tail latency distribution under heavy multi-region write-heavy loads.",
        evidenceSources: ["Monzo tech blog post on Cassandra ledger design", "Public distributed databases webinars"]
      }
    ],
    engineeringHypotheses: [
      {
        id: "MNZ-HYP-01",
        title: "Potential Engineering Investigation Area: Distributed Consistency Synchronization Under Concurrency",
        area: "Database Bottleneck",
        description: "We hypothesize that high-frequency transactional bursts across separate regions require highly tuned consensus windows to align ledger balance snapshots before final consistency is completed.",
        likelihood: "Medium",
        evidenceBasis: "Monzo engineering publications regarding distributed Cassandra consistency tuning and transaction state machines.",
        reasoning: "Active-active database replication models must balance network transmission lag against consistency requirements for concurrent account ledger entries.",
        validationMethod: "Review event-sourcing consensus models in staging sandboxes under simulated network partition events."
      }
    ],
    recommendations: [
      {
        id: "MNZ-REC-01",
        title: "Refine Telemetry Sampling and Ingestion Profiles",
        action: "Evaluate and configure adaptive telemetry sampling rates within the service mesh to reduce processing overhead for standard, non-error transaction paths.",
        priority: "Medium",
        timeframe: "2 Weeks",
        businessImpact: "Potential Cost Optimization Opportunity. Requires Validation.",
        engineeringImpact: "Reclaims container host CPU overhead and stabilizes high-volume networking paths.",
        complexity: "Low",
        impactMetric: "Optimize service mesh CPU utilization patterns",
        expectedOutcome: "Reduced CPU utilization across cluster proxy sidecars with no degradation in security trace captures."
      }
    ],
    sources: [
      'Monzo Technology Blog and open-source system repositories.',
      'Presentations at AWS re:Invent and KubeCon by Monzo infrastructure architects.'
    ],
    meta: {
      title: 'Monzo Banking Architecture & Scalability Research | XAVIRA',
      description: 'An engineering-level audit of Monzo microservice mesh, Cassandra storage engines, Linkerd optimization, and scaling signals.'
    }
  },
  {
    id: 'snyk',
    name: 'Snyk',
    slug: 'snyk',
    tagline: 'Developer-first application security analysis & AST processing pipelines.',
    logo: '🛡️',
    industry: 'Cybersecurity',
    funding: 'Late Stage',
    fundingAmount: '$530M',
    employees: '250-500',
    headquarters: 'London, United Kingdom',
    country: 'United Kingdom',
    founded: '2015',
    website: 'https://snyk.io',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: May 2026',
      sourcesReviewedCount: 16
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Scala', 'Go', 'Python'],
      frameworks: ['React', 'Express', 'Akka Streams'],
      databases: ['PostgreSQL', 'Elasticsearch', 'Redis'],
      infrastructure: ['Kubernetes', 'Serverless', 'Terraform', 'ArgoCD'],
      aiModelStack: ['OpenAI API', 'Custom Code Models'],
      observabilityStack: ['New Relic', 'Datadog']
    },
    techGraph: [
      { id: 'snyk', label: 'Snyk', type: 'company', connections: ['aws', 'gcp'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: ['kubernetes'] },
      { id: 'gcp', label: 'GCP Cloud', type: 'cloud', connections: ['serverless'] },
      { id: 'kubernetes', label: 'Kubernetes Cluster', type: 'infrastructure', connections: ['akka'] },
      { id: 'akka', label: 'Akka Streams (Scala)', type: 'language', connections: ['elasticsearch'] },
      { id: 'elasticsearch', label: 'Elasticsearch Index', type: 'database', connections: ['redis'] },
      { id: 'redis', label: 'Redis Cache', type: 'database', connections: ['snyk'] },
      { id: 'serverless', label: 'Serverless Sandbox', type: 'infrastructure', connections: ['snyk'] }
    ],
    engineeringTeam: {
      totalSize: 210,
      executives: [
        { name: 'Diana Prince', role: 'Director of Security Architecture', linkedin: 'https://linkedin.com' },
        { name: 'Bruce Banner', role: 'Head of Vulnerability Ingestion Engine', linkedin: 'https://linkedin.com' }
      ],
      hiringSignals: [
        'Hiring Scala Platform Engineer to refactor high-throughput stream analyzer queues.',
        'Seeking Compiler Engineer to optimize abstract syntax tree parsing loops.'
      ]
    },
    scores: {
      architecture: 90,
      cloud: 89,
      security: 96,
      aiReadiness: 80,
      technicalDebt: 25,
      scalability: 92,
      performance: 88,
      reliability: 91,
      observability: 90,
      engineeringMaturity: 92,
      overallScore: 91
    },
    timeline: [
      { date: '2015-07', category: 'Funding', title: 'Inception & Pre-seed', description: 'Founded with the mission of building developer-first security analysis.' },
      { date: '2018-02', category: 'Platform Evolution', title: 'Scala & Akka Stream Rewrite', description: 'Rewrote core ingestion loops in Scala and Akka to handle concurrent package scanning pipelines.' },
      { date: '2021-06', category: 'Technology Announcement', title: 'Serverless Sandbox Isolation', description: 'Adopted Google Cloud Run and AWS Lambda serverless boundaries to isolate untrusted user file parsing.' },
      { date: '2024-03', category: 'Platform Evolution', title: 'Elasticsearch Index Optimization', description: 'Migrated primary vulnerability search feeds and indexes to high-performance Elasticsearch clusters.' }
    ],
    executiveSummary: "Snyk utilizes highly secure, isolated sandbox environments for continuous vulnerability scanning. Public engineering analyses describe advanced AST parsing pipelines which, given their CPU-bound nature, represent an engineering investigation area for throughput optimization under concurrent enterprise repository loads.",
    verifiedPublicInfo: [
      "Snyk utilizes automated sandboxed runtime environments for secure execution of package dependencies, preventing remote code execution concerns.",
      "Core search capability for vulnerability definitions is backed by distributed Elasticsearch indexes."
    ],
    engineeringObservations: [
      {
        id: "SNK-OBS-01",
        title: "Potential Scalability Challenge: Concurrency Management in Stream Processing Pipelines",
        category: "Platform Maturity",
        risk: "Medium",
        description: "Public tech posts indicate the use of Scala and Akka Streams for repository parsing. Under heavy concurrent batch loads of deeply nested dependency trees, standard Akka configurations can experience resource-wait states.",
        impact: "Potential scalability challenge affecting processing throughput during peak engineering work hours.",
        evidenceSources: ["Public tech posts on Akka stream handling", "Snyk public repository open issue logs"]
      },
      {
        id: "SNK-OBS-02",
        title: "Architectural Consideration: Elasticsearch Sharding and Distribution Profiles",
        category: "Operational Complexity",
        risk: "Low",
        description: "Public documentation regarding search architecture shows dependency on large Elasticsearch indices. Large, unevenly distributed dataset records can lead to variable search response times.",
        impact: "Architectural consideration regarding query latency distributions for historical security logs.",
        evidenceSources: ["Elasticsearch architecture documentations", "Public technology posts on vulnerability search scaling"]
      }
    ],
    engineeringHypotheses: [
      {
        id: "SNK-HYP-01",
        title: "Potential Engineering Investigation Area: Resource Allocation in High-Depth Code Parsing Loops",
        area: "Technical Debt",
        description: "We hypothesize that deep, recursive abstract syntax tree (AST) code resolution paths may retain temporary object references longer than necessary, leading to transient memory overhead.",
        likelihood: "Medium",
        evidenceBasis: "Public compiler and parser logs associated with parsing recursive cyclic dependency chains.",
        reasoning: "Recursive syntax trees evaluated in dynamic runtime processes can exhaust standard memory heaps unless reference cycles are systematically cleared or pooled.",
        validationMethod: "Run high-depth recursive syntactical analyses in test sandboxes while tracing memory heap allocation graphs."
      }
    ],
    recommendations: [
      {
        id: "SNK-REC-01",
        title: "Isolate Heavy CPU Tasks via Dedicated Thread Executors",
        action: "Isolate computationally intensive AST parsing routines onto dedicated, non-blocking thread executors with explicit CPU limits.",
        priority: "High",
        timeframe: "3 Weeks",
        businessImpact: "Stabilizes scan duration predictability for enterprise developer pipelines during major release windows.",
        engineeringImpact: "Maintains consistent API response times and prevents resource starvation on main queue processors.",
        complexity: "Medium",
        impactMetric: "Ensure consistent scan times for complex repositories",
        expectedOutcome: "A sandboxed AST execution pool that handles heavy CPU tasks without affecting core event loop threads."
      }
    ],
    sources: [
      'Snyk technical documentations and whitepapers.',
      'Developer forums and open-source packages registered under Snyk ownership.'
    ],
    meta: {
      title: 'Snyk Technical Pipeline Architecture & Security Audit | XAVIRA',
      description: 'Reviewing Snyk AST parsing pipelines, Akka concurrency actor systems, Elasticsearch clusters, and technical debt vectors.'
    }
  },
  {
    id: 'linear',
    name: 'Linear',
    slug: 'linear',
    tagline: 'Synchronized, offline-first developer issue trackers with instant UI states.',
    logo: '📐',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: '$35M',
    employees: '20-50',
    headquarters: 'San Francisco, United States',
    country: 'United States',
    founded: '2019',
    website: 'https://linear.app',
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 19
    },
    techStack: {
      cloud: ['GCP'],
      languages: ['TypeScript', 'Kotlin', 'Rust'],
      frameworks: ['React', 'Electron', 'Node.js'],
      databases: ['PostgreSQL', 'Redis', 'IndexedDB (Browser)'],
      infrastructure: ['Cloudflare Workers', 'Docker', 'Google Kubernetes Engine'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Honeycomb', 'LogRocket']
    },
    techGraph: [
      { id: 'linear', label: 'Linear', type: 'company', connections: ['gcp', 'cloudflare'] },
      { id: 'gcp', label: 'GCP', type: 'cloud', connections: ['gke'] },
      { id: 'cloudflare', label: 'Cloudflare', type: 'cloud', connections: ['workers'] },
      { id: 'gke', label: 'Google Kubernetes (GKE)', type: 'infrastructure', connections: ['postgresql'] },
      { id: 'workers', label: 'Cloudflare Workers', type: 'infrastructure', connections: ['rust'] },
      { id: 'rust', label: 'Rust WebAssembly', type: 'language', connections: ['indexeddb'] },
      { id: 'postgresql', label: 'PostgreSQL Central', type: 'database', connections: ['redis'] },
      { id: 'redis', label: 'Redis Event Relay', type: 'database', connections: ['linear'] },
      { id: 'indexeddb', label: 'IndexedDB (Browser)', type: 'database', connections: ['linear'] }
    ],
    engineeringTeam: {
      totalSize: 18,
      executives: [
        { name: 'Kari Karjalainen', role: 'Lead Frontend Systems Architect', linkedin: 'https://linkedin.com' },
        { name: 'Elena Petrova', role: 'Head of Sync Protocol & Real-Time Engine', linkedin: 'https://linkedin.com' }
      ],
      hiringSignals: [
        'Hiring Rust Engineer to optimize local-to-cloud synchronization protocol layers.',
        'Seeking Senior Developer for IndexedDB offline replication cache managers.'
      ]
    },
    scores: {
      architecture: 99,
      cloud: 92,
      security: 90,
      aiReadiness: 75,
      technicalDebt: 8,
      scalability: 95,
      performance: 99,
      reliability: 96,
      observability: 94,
      engineeringMaturity: 96,
      overallScore: 96
    },
    timeline: [
      { date: '2019-05', category: 'Funding', title: 'Pre-Seed and Founding', description: 'Established Linear with core design principle of ultra-low latency, keyboard-first issue tracking.' },
      { date: '2020-04', category: 'Technology Announcement', title: 'Sync Engine Reveal', description: 'Released detailed description of custom SQLite / IndexedDB client-side database replication protocols.' },
      { date: '2021-08', category: 'Platform Evolution', title: 'Cloudflare Edge Relays', description: 'Shifted WebSocket routing layers to Cloudflare Workers to handle edge message fan-outs.' },
      { date: '2024-01', category: 'Technology Announcement', title: 'Rust WebAssembly Parser', description: 'Transitioned critical state conflict resolution processes to high-performance Rust compiled into WASM.' }
    ],
    executiveSummary: "Linear represents an industry benchmark for offline-first, low-latency state synchronization. By leveraging client-side browser storage and high-performance WebSockets, it maximizes user responsiveness, with ongoing architectural considerations focused on edge conflict resolution models under concurrent modifications.",
    verifiedPublicInfo: [
      "Linear implements a local client-side IndexedDB database that syncs delta updates with a centralized PostgreSQL database, as documented in their engineering disclosures.",
      "Real-time updates are distributed via persistent WebSocket connections with custom backpressure protocols."
    ],
    engineeringObservations: [
      {
        id: "LIN-OBS-01",
        title: "Architectural Consideration: State Resolution Profiles During Concurrency",
        category: "Architecture Pattern",
        risk: "Low",
        description: "According to published sync details, simultaneous offline edits to identical document nodes are resolved using deterministic conflict-free protocols, which occasionally require structural tuning to preserve concurrent inputs.",
        impact: "Architectural consideration regarding long-form text preservation in high-frequency collaboration environments.",
        evidenceSources: ["Linear engineering blog on state sync", "Public talks detailing local state caching strategies"]
      },
      {
        id: "LIN-OBS-02",
        title: "Potential Scalability Challenge: Client-Side Storage Access Latencies under Large Datasets",
        category: "Operational Complexity",
        risk: "Low",
        description: "Public discussions around local client database footprints indicate that when client-side IndexedDB caches store large volumes of historical tickets, browser-level storage access times can vary.",
        impact: "Potential engineering investigation area for client-side search indexing and query optimization on older browsers.",
        evidenceSources: ["Public tech talks on offline-first database footprints", "IndexedDB performance studies"]
      }
    ],
    engineeringHypotheses: [
      {
        id: "LIN-HYP-01",
        title: "Potential Engineering Investigation Area: Browser Thread Synchronization Under Heavy Sync Bursts",
        area: "Scalability Constraint",
        description: "We hypothesize that large, batch state-sync operations could temporarily block the main browser rendering thread during intensive database write operations.",
        likelihood: "Low",
        evidenceBasis: "Public issue reports concerning transient frame rate drops during initial account syncing on standard client devices.",
        reasoning: "IndexedDB operations run asynchronously but heavy serialization/deserialization tasks on the main JavaScript thread can trigger brief frame drops.",
        validationMethod: "Capture Chrome DevTools performance trace profiles on client devices during high-volume sync payloads."
      }
    ],
    recommendations: [
      {
        id: "LIN-REC-01",
        title: "Integrate Conflict-Free Replicated Data Types (CRDTs)",
        action: "Evaluate the implementation of CRDTs or operational transformations specifically for long-form collaborative text description fields to support non-destructive concurrent editing.",
        priority: "Medium",
        timeframe: "4 Weeks",
        businessImpact: "Elevates team collaboration capabilities, eliminating potential overwrites of shared ticket specifications.",
        engineeringImpact: "Ensures multi-user merge consistency at the client layer without requiring blocking server-side locks.",
        complexity: "High",
        impactMetric: "Elimination of deterministic text-reconciliation conflicts",
        expectedOutcome: "A collaborative real-time editor supporting offline conflicts resolution at fine granularities."
      }
    ],
    sources: [
      'Linear engineering blog postings and documentation of their sync protocol.',
      'Public talks detailing local state caching strategies.'
    ],
    meta: {
      title: 'Linear Sync Protocol & Offline-First Database Architecture | XAVIRA',
      description: 'An expert architectural review of Linear Technologies IndexedDB caching system, real-time WebSockets, and state resolution pipelines.'
    }
  },
  {
    id: 'stripe',
    name: 'Stripe',
    slug: 'stripe',
    tagline: 'Global financial clearing, payment rails, and high-concurrency microservices.',
    logo: '💳',
    industry: 'FinTech',
    funding: 'Late Stage',
    fundingAmount: '$2.2B',
    employees: '500+',
    headquarters: 'San Francisco, United States',
    country: 'United States',
    founded: '2010',
    website: 'https://stripe.com',
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 42
    },
    techStack: {
      cloud: ['AWS'],
      languages: ['Ruby', 'Go', 'Java', 'Scala'],
      frameworks: ['Sorbet (Type-checked Ruby)', 'React', 'Spring'],
      databases: ['MongoDB', 'PostgreSQL', 'Redis', 'Cassandra'],
      infrastructure: ['Kubernetes', 'Envoy Service Mesh', 'Puppet', 'Kafka'],
      aiModelStack: ['OpenAI GPT-4 Integration', 'Custom Fraud Detection ML'],
      observabilityStack: ['Splunk', 'Grafana', 'SignalFX']
    },
    techGraph: [
      { id: 'stripe', label: 'Stripe', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: ['kubernetes', 'kafka'] },
      { id: 'kubernetes', label: 'Kubernetes Cluster', type: 'infrastructure', connections: ['ruby', 'go'] },
      { id: 'ruby', label: 'Ruby / Sorbet', type: 'language', connections: ['mongodb'] },
      { id: 'go', label: 'Go Language', type: 'language', connections: ['cassandra'] },
      { id: 'kafka', label: 'Kafka Stream', type: 'infrastructure', connections: ['stripe'] },
      { id: 'mongodb', label: 'MongoDB Cluster', type: 'database', connections: ['redis'] },
      { id: 'cassandra', label: 'Cassandra Ledger', type: 'database', connections: ['stripe'] },
      { id: 'redis', label: 'Redis Cache', type: 'database', connections: ['stripe'] }
    ],
    engineeringTeam: {
      totalSize: 2200,
      executives: [
        { name: 'Michelle Gomez', role: 'Head of Core Financial Ledger', linkedin: 'https://linkedin.com' },
        { name: 'Alex Chen', role: 'VP of Payments Infrastructure', linkedin: 'https://linkedin.com' }
      ],
      hiringSignals: [
        'Seeking Distributed Systems Architect with expertise in high-concurrency ledger operations.',
        'Hiring Principal SRE for AWS multi-region payment rail resilience engineering.'
      ]
    },
    scores: {
      architecture: 96,
      cloud: 95,
      security: 98,
      aiReadiness: 78,
      technicalDebt: 32,
      scalability: 97,
      performance: 92,
      reliability: 99,
      observability: 98,
      engineeringMaturity: 97,
      overallScore: 94
    },
    timeline: [
      { date: '2010-09', category: 'Funding', title: 'Inception & Seed Funding', description: 'Founded by the Collison brothers with simple API payments script.' },
      { date: '2012-07', category: 'Technology Announcement', title: 'Ruby on Rails Ledger', description: 'Scaled core checkout rails via high-throughput PostgreSQL and Ruby on Rails architecture.' },
      { date: '2015-03', category: 'Platform Evolution', title: 'Go Microservices Migration', description: 'Deployed high-performance microservices in Go to relieve intensive thread bottlenecks in Ruby rails.' },
      { date: '2017-06', category: 'Technology Announcement', title: 'Sorbet Open-Source Announcement', description: 'Initiated open-source development of Sorbet, providing robust static typing to millions of lines of Ruby.' },
      { date: '2022-02', category: 'Platform Evolution', title: 'Active-Active Multi-Region Ledgers', description: 'Migrated primary financial ledgers to globally isolated, active-active multi-region database replication.' }
    ],
    executiveSummary: "Stripe is an industry leader in distributed system design, payment rails, and transactional reliability. Leveraging Sorbet for static typing in their Ruby codebase ensures high software quality, with ongoing engineering initiatives focused on migrating legacy services to compiled modern languages.",
    verifiedPublicInfo: [
      "Stripe processes global financial transaction volume across hundreds of thousands of digital merchants.",
      "Stripe engineered and open-sourced Sorbet, a static type checker for Ruby, to enforce type safety on massive scale codebases."
    ],
    engineeringObservations: [
      {
        id: "STR-OBS-01",
        title: "Architectural Consideration: Runtime Performance Characteristics of High-Scale Ruby Codebases",
        category: "Platform Maturity",
        risk: "Medium",
        description: "Public engineering publications indicate that Stripe's large-scale Ruby codebases experience typical interpreter garbage collection cycles, which is a standard characteristic of dynamic runtime environments.",
        impact: "Architectural consideration for tail latency distribution (p99.9) in performance-sensitive synchronous paths.",
        evidenceSources: ["Stripe engineering blog posts on Sorbet and Ruby performance", "Presentations on Ruby garbage collection tuning"]
      },
      {
        id: "STR-OBS-02",
        title: "Engineering Observation: Database Ledger Ingest and Replication Synchronization",
        category: "Architecture Pattern",
        risk: "Low",
        description: "Public case studies explain Stripe's distributed ledger architecture. Highly concurrent distributed writes across globally replicated databases can show typical replication propagation times.",
        impact: "Architectural consideration regarding eventual consistency time windows in dashboard metrics.",
        evidenceSources: ["Distributed database webinars", "Stripe case studies on globally replicated databases"]
      }
    ],
    engineeringHypotheses: [
      {
        id: "STR-HYP-01",
        title: "Potential Engineering Investigation Area: Type-Checking Impact on Developer Tooling Performance",
        area: "Technical Debt",
        description: "We hypothesize that processing millions of type signatures during continuous integration can put high resource demands on compiler infrastructure, presenting a potential area for incremental compile optimization.",
        likelihood: "Medium",
        evidenceBasis: "Sorbet open-source documentation and developer posts regarding large codebase compile-time footprints.",
        reasoning: "Static type-checkers parsing millions of lines of dynamic code must perform deep abstract syntax resolution which can lead to high RAM and CPU usage on dev servers.",
        validationMethod: "Benchmark the type checker performance under synthetic incremental changes to quantify compiler resource demand."
      }
    ],
    recommendations: [
      {
        id: "STR-REC-01",
        title: "Adopt Incremental Services Modernization via Strangler Pattern",
        action: "Incrementally transition performance-critical paths of dynamic codebases to compiled modern microservices using a standard Strangler application pattern.",
        priority: "Medium",
        timeframe: "6 Months",
        businessImpact: "Optimizes long-term resource efficiency and maintains consistent API responses during massive peak volume days.",
        engineeringImpact: "Improves runtime execution speeds on critical transaction paths and reduces garbage collection latency variation.",
        complexity: "High",
        impactMetric: "Target consistent response times under peak global loads",
        expectedOutcome: "Crucial transaction processing routes successfully isolated into high-performance compiled microservices."
      }
    ],
    sources: [
      'Stripe open-source repositories and engineering blog articles.',
      'Distributed ledger architecture presentations at industry-grade conferences.'
    ],
    meta: {
      title: 'Stripe Global Financial Architecture & Infrastructure Audit | XAVIRA',
      description: 'An enterprise-grade analysis of Stripe technologies, Sorbet type validation, high-concurrency payment ledgers, and scalability bottlenecks.'
    }
  }
,

  {
    id: 'airbyte',
    name: 'Airbyte',
    slug: 'airbyte',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://airbyte.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'airbyte', label: 'Airbyte', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Airbyte is a leading open-source data movement platform. Co-founded by CEO Michel Tricot, the platform focuses on standardizing the long tail of data integration through an extensible, community-driven connector architecture.\\n\\n**Tech Stack**: - **Backend:** Java 21, Micronaut, Temporal\n- **Database:** PostgreSQL\n- **Frontend:** React, TypeScript, Node.js\n- **Connectors:** Java (JDBC), Python (CDK)\\n\\n**Architecture**: - Strict decoupling of the platform control plane from the data connectors via OAS3.\n- Relies heavily on Temporal for state management, enabling reliable orchestration across thousands of concurrent synchronization jobs.\n- Evolving from pure ELT to serving as an intelligent context layer for AI via Airbyte Agents.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Airbyte Engineering Intelligence',
      description: 'Research report on Airbyte'
    }
  },

  {
    id: 'anyscale',
    name: 'Anyscale',
    slug: 'anyscale',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://anyscale.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'anyscale', label: 'Anyscale', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Anyscale is the company behind Ray, the open-source unified compute framework for scaling AI and Python applications. They provide a managed platform to run distributed ML workloads seamlessly.\\n\\n**Tech Stack**: & Architecture Signals\n**Tech Stack**: C++, Python, Ray (Core, Tune, Serve, RLlib, Train), Kubernetes, AWS/GCP APIs.\n**Architecture Signals**: Focus on unified task/actor paradigms, distributed object stores (Plasma), and seamless autoscaling of heterogeneous compute clusters.\n**Challenges**: Managing fault tolerance in long-running jobs, optimizing the global control state, and minimizing scheduling latency for microsecond-level tasks.\\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Anyscale Engineering Intelligence',
      description: 'Research report on Anyscale'
    }
  },

  {
    id: 'astronomer',
    name: 'Astronomer',
    slug: 'astronomer',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://astronomer.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'astronomer', label: 'Astronomer', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Astronomer is the driving force behind modern data orchestration, providing a managed control plane for Apache Airflow. Under CTO Julian LaNeve, the platform has scaled out with Kubernetes-native deployments and deeply integrated data observability.\\n\\n**Tech Stack**: - **Languages:** Python, Go\n- **Infrastructure:** Kubernetes, Docker, Apache Airflow\n- **Ecosystem Tools:** dbt, Snowflake\\n\\n**Architecture**: - The Astro platform is fundamentally Kubernetes-native, using Custom Resource Definitions (CRDs) for deploying and scaling Airflow.\n- Development of 'Cosmos', an open-source library bridging dbt Core projects natively into Airflow DAGs.\n- Expanding architectural focus to include built-in data observability (Astro Observe) alongside orchestration.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Astronomer Engineering Intelligence',
      description: 'Research report on Astronomer'
    }
  },

  {
    id: 'baseten',
    name: 'Baseten',
    slug: 'baseten',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://baseten.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'baseten', label: 'Baseten', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Baseten Engineering Intelligence',
      description: 'Research report on Baseten'
    }
  },

  {
    id: 'clickhouse',
    name: 'Clickhouse',
    slug: 'clickhouse',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://clickhouse.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'clickhouse', label: 'Clickhouse', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "ClickHouse is a high-performance, column-oriented database management system for online analytical processing (OLAP), known for its vectorized query execution and aggressive hardware utilization.\\n\\n**Tech Stack**: C++, LLVM, ClickHouse Keeper (C++ ZooKeeper alternative), Linux.\\n\\n**Architecture**: ClickHouse relies on a shared-nothing architecture transitioning towards cloud-native decoupled storage and compute (ClickHouse Cloud). It heavily utilizes vectorized execution, SIMD instructions, and sparse primary indexes for extremely fast analytical queries.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Clickhouse Engineering Intelligence',
      description: 'Research report on Clickhouse'
    }
  },

  {
    id: 'coder',
    name: 'Coder',
    slug: 'coder',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://coder.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'coder', label: 'Coder', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Coder builds secure, cloud-based development environments optimized for the AI-native developer stack.\\n\\n**Tech Stack**: Cloud-native infrastructure, Terraform, Kubernetes.\\n\\n**Architecture**: Platform engineering focus, centralized DevOps workflows, shifting development from local laptops to the cloud.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Coder Engineering Intelligence',
      description: 'Research report on Coder'
    }
  },

  {
    id: 'convex',
    name: 'Convex',
    slug: 'convex',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://convex.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'convex', label: 'Convex', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Convex Engineering Intelligence',
      description: 'Research report on Convex'
    }
  },

  {
    id: 'crewai',
    name: 'Crewai',
    slug: 'crewai',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://crewai.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'crewai', label: 'Crewai', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "CrewAI is an open-source framework for orchestrating role-playing, autonomous AI agents. It enables developers to build multi-agent systems that work together to accomplish complex tasks.\\n\\n**Tech Stack**: & Architecture Signals\n**Tech Stack**: Python, LangChain, Pydantic, OpenAI API.\n**Architecture Signals**: Focuses on agent orchestration, task delegation, and state management across multiple LLM calls. Uses process-driven execution (sequential, hierarchical).\n**Challenges**: Managing context windows across multiple agents, handling hallucination in agent-to-agent communication, and state persistence in long-running tasks.\\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Crewai Engineering Intelligence',
      description: 'Research report on Crewai'
    }
  },

  {
    id: 'dagster-labs',
    name: 'Dagster labs',
    slug: 'dagster-labs',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://dagster-labs.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'dagster-labs', label: 'Dagster labs', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Dagster Labs, led by Pete Hunt, is redefining data orchestration with a data-aware platform. Moving beyond traditional task-based workflows, Dagster introduces Software-Defined Assets (SDAs), providing declarative data management, better lineage, and enhanced observability.\\n\\n**Tech Stack**: - **Languages:** Python, GraphQL, TypeScript, React\n- **Integration:** Spark, Databricks, Snowflake\\n\\n**Architecture**: - Focus on Software-Defined Assets (SDAs), shifting orchestration from a task-centric to an asset-centric paradigm.\n- Clear decoupling of logical dependencies (Resources) from physical execution environments (Executors).\n- Highly modular, infrastructure-agnostic architecture designed to run on custom PaaS or containerized environments.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Dagster labs Engineering Intelligence',
      description: 'Research report on Dagster labs'
    }
  },

  {
    id: 'dbt-labs',
    name: 'Dbt labs',
    slug: 'dbt-labs',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://dbt-labs.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'dbt-labs', label: 'Dbt labs', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "dbt Labs has essentially defined the analytics engineering space by treating data transformation like software engineering. Founded by Tristan Handy, dbt acts as the transformation layer in the ELT stack, pushing processing to the cloud data warehouse.\\n\\n**Tech Stack**: - **Languages:** Python, SQL, Rust (used recently for the parsing engine), React\n- **Integrations:** Snowflake, BigQuery, Databricks, Redshift\\n\\n**Architecture**: - Treating data models as code (version control, automated testing, documentation generation).\n- Pushing compute down to the warehouse level rather than processing data in-memory.\n- Strong strategic focus on the Semantic Layer, centralizing metric definitions to ensure downstream consistency across BI and AI applications.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Dbt labs Engineering Intelligence',
      description: 'Research report on Dbt labs'
    }
  },

  {
    id: 'fireworks-ai',
    name: 'Fireworks ai',
    slug: 'fireworks-ai',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://fireworks-ai.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'fireworks-ai', label: 'Fireworks ai', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Fireworks ai Engineering Intelligence',
      description: 'Research report on Fireworks ai'
    }
  },

  {
    id: 'grafana-labs',
    name: 'Grafana labs',
    slug: 'grafana-labs',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://grafana-labs.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'grafana-labs', label: 'Grafana labs', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Grafana Labs provides an open-source observability stack, focusing on massive scale metrics (Mimir), logs (Loki), and traces (Tempo), unifying them through the Grafana visualization layer.\\n\\n**Tech Stack**: Go, React, Prometheus, Kubernetes, Cortex, Thanos, object storage (S3/GCS).\\n\\n**Architecture**: The architecture emphasizes cloud-native observability, decoupling ingestion from storage using a microservices approach. Heavy reliance on object storage for long-term retention of telemetry data, with aggressive indexing and chunking strategies (e.g., Loki's label-only indexing).",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Grafana labs Engineering Intelligence',
      description: 'Research report on Grafana labs'
    }
  },

  {
    id: 'hashicorp',
    name: 'Hashicorp',
    slug: 'hashicorp',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://hashicorp.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'hashicorp', label: 'Hashicorp', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "HashiCorp provides open-source and commercial products for infrastructure as code, secrets management, and distributed service networking, forming the foundation of the modern cloud operating model.\\n\\n**Tech Stack**: Go, Raft Consensus Algorithm, Serf (Gossip protocol), RPC, HCL (HashiCorp Configuration Language).\\n\\n**Architecture**: HashiCorp's tools (Consul, Vault, Nomad) are built heavily on Go and rely on fundamental distributed systems principles. They use Raft for strong consistency of state and Gossip protocols (Serf) for membership and failure detection.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Hashicorp Engineering Intelligence',
      description: 'Research report on Hashicorp'
    }
  },

  {
    id: 'kong',
    name: 'Kong',
    slug: 'kong',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://kong.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'kong', label: 'Kong', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Kong is a leading cloud-native API management and service mesh platform, designed to handle high-throughput, low-latency API traffic across distributed, multi-cloud environments.\\n\\n**Tech Stack**: Lua, OpenResty, Nginx, Go, Rust, PostgreSQL, Envoy.\\n\\n**Architecture**: Kong Gateway leverages an Nginx/OpenResty core extended with Lua for plugins. Kong Mesh utilizes Envoy data planes managed by a Go-based control plane (Kuma). The architecture strictly separates the control plane from the data plane, emphasizing edge performance.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Kong Engineering Intelligence',
      description: 'Research report on Kong'
    }
  },

  {
    id: 'lacework',
    name: 'Lacework',
    slug: 'lacework',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://lacework.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'lacework', label: 'Lacework', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Lacework Engineering Intelligence',
      description: 'Research report on Lacework'
    }
  },

  {
    id: 'langchain',
    name: 'Langchain',
    slug: 'langchain',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://langchain.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'langchain', label: 'Langchain', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Langchain Engineering Intelligence',
      description: 'Research report on Langchain'
    }
  },

  {
    id: 'langfuse',
    name: 'Langfuse',
    slug: 'langfuse',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://langfuse.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'langfuse', label: 'Langfuse', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Langfuse Engineering Intelligence',
      description: 'Research report on Langfuse'
    }
  },

  {
    id: 'linear',
    name: 'Linear',
    slug: 'linear',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://linear.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'linear', label: 'Linear', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Linear has redefined project management for software teams by prioritizing extreme performance and keyboard-centric design. Their engineering culture emphasizes a \"local-first\" philosophy, minimizing loading spinners and network delays. The result is a highly responsive application that feels native despite being web-based.\\n\\n**Tech Stack**: & Architecture\n- **Frontend**: React, MobX, TypeScript\n- **Backend**: Node.js, GraphQL, TypeScript\n- **Database**: PostgreSQL\n- **Key Architecture**: The \"Sync Engine\" enables a local-first experience. Data is synchronized via WebSockets and stored locally in the client, enabling offline capabilities and instantaneous UI updates.\\n\\n**Architecture**: Linear's reliance on a custom synchronization engine indicates a high level of engineering maturity. Their challenge lies in scaling the Sync Engine as the data volume per workspace grows, potentially requiring advanced data partitioning and snapshotting techniques on the client side.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Linear Engineering Intelligence',
      description: 'Research report on Linear'
    }
  },

  {
    id: 'llamaindex',
    name: 'Llamaindex',
    slug: 'llamaindex',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://llamaindex.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'llamaindex', label: 'Llamaindex', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "LlamaIndex (formerly GPT Index) is a data framework for LLM applications to ingest, structure, and access private or domain-specific data. It's a critical infrastructure piece for RAG (Retrieval-Augmented Generation).\\n\\n**Tech Stack**: & Architecture Signals\n**Tech Stack**: Python, TypeScript, various Vector DBs (Pinecone, Weaviate, Qdrant), embedding models.\n**Architecture Signals**: Abstracting complex data pipelines (loaders, indexers, retrievers, query engines). Focus on advanced retrieval strategies (hierarchical routing, sub-question query engine).\n**Challenges**: Optimizing vector search latency, scaling index construction for massive datasets, and handling heterogeneous data sources efficiently.\\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Llamaindex Engineering Intelligence',
      description: 'Research report on Llamaindex'
    }
  },

  {
    id: 'modal',
    name: 'Modal',
    slug: 'modal',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://modal.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'modal', label: 'Modal', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Modal is redefining serverless infrastructure for data and AI teams. By offering a platform that provisions cloud compute (especially GPUs) instantly from local Python code, Modal removes the friction of Dockerfiles, Kubernetes manifests, and CI/CD pipelines for heavy compute workloads.\\n\\n**Tech Stack**: & Architecture\n- **Languages**: Python (SDK/User code), Rust (Runtime/Control Plane)\n- **Communication**: gRPC\n- **Infrastructure**: Custom container runtime, gVisor\n- **Key Architecture**: Modal built a custom container runtime in Rust that hydrates environments in milliseconds. It intercepts file system calls to stream dependencies on-demand rather than pulling large Docker images.\\n\\n**Architecture**: Modal’s decision to bypass standard Kubernetes/Docker paradigms in favor of a bespoke Rust-based runtime is a massive engineering bet that pays off in sub-second cold starts. Scaling this custom scheduler and managing distributed state across thousands of ephemeral GPUs are their core technical challenges.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Modal Engineering Intelligence',
      description: 'Research report on Modal'
    }
  },

  {
    id: 'neon',
    name: 'Neon',
    slug: 'neon',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://neon.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'neon', label: 'Neon', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Neon is pioneering the serverless PostgreSQL space by radically altering the database architecture. By fully decoupling compute from storage, Neon enables database branching, scale-to-zero, and instant provisioning, bringing a cloud-native development experience to relational databases.\\n\\n**Tech Stack**: & Architecture\n- **Core Languages**: Rust, C\n- **Storage Layer**: Pageservers, Safekeepers (Rust)\n- **Compute Layer**: Modified PostgreSQL (C)\n- **Key Architecture**: Neon replaces the standard Postgres storage engine. Write-Ahead Logs (WAL) are sent to a Paxos cluster of Safekeepers, which then asynchronously push data to Pageservers backed by cloud object storage (S3).\\n\\n**Architecture**: The heavy investment in Rust for the storage and control plane highlights a focus on memory safety, concurrency, and performance. Managing multi-tenant performance isolation and tail latencies across the decoupled compute/storage boundary is their primary architectural frontier.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Neon Engineering Intelligence',
      description: 'Research report on Neon'
    }
  },

  {
    id: 'orca-security',
    name: 'Orca security',
    slug: 'orca-security',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://orca-security.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'orca-security', label: 'Orca security', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Orca security Engineering Intelligence',
      description: 'Research report on Orca security'
    }
  },

  {
    id: 'oso',
    name: 'Oso',
    slug: 'oso',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://oso.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'oso', label: 'Oso', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Oso provides a unified authorization layer for applications and AI agents, enabling centralized permissions.\\n\\n**Tech Stack**: Rust, Polar policy language.\\n\\n**Architecture**: Centralized policy-driven engine, fine-grained resource-specific authorization, AI agent security traffic monitoring.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Oso Engineering Intelligence',
      description: 'Research report on Oso'
    }
  },

  {
    id: 'pinecone',
    name: 'Pinecone',
    slug: 'pinecone',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://pinecone.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'pinecone', label: 'Pinecone', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Pinecone Engineering Intelligence',
      description: 'Research report on Pinecone'
    }
  },

  {
    id: 'prefect',
    name: 'Prefect',
    slug: 'prefect',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://prefect.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'prefect', label: 'Prefect', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Prefect operates a hybrid execution model for dataflow automation, decoupling the control plane from the data plane to ensure security and scalability.\\n\\n**Tech Stack**: Python, FastAPI, PostgreSQL, GraphQL, Kubernetes, Dask, Ray.\\n\\n**Architecture**: Prefect's architecture relies heavily on asynchronous Python and a unified API for orchestrating DAGs. The move to Prefect 2.0 (Orion) introduced a dynamic, DAG-free execution model, prioritizing developer experience and real-time state updates via REST/GraphQL.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Prefect Engineering Intelligence',
      description: 'Research report on Prefect'
    }
  },

  {
    id: 'railway',
    name: 'Railway',
    slug: 'railway',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://railway.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'railway', label: 'Railway', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Railway Engineering Intelligence',
      description: 'Research report on Railway'
    }
  },

  {
    id: 'render',
    name: 'Render',
    slug: 'render',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://render.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'render', label: 'Render', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Render is a modern cloud provider designed to offer the ease of a PaaS with the flexibility of raw infrastructure. It abstracts away the complexity of DevOps, allowing engineering teams to deploy web services, static sites, and databases securely and reliably with zero-downtime deploys.\\n\\n**Tech Stack**: & Architecture\n- **Control Plane**: Go\n- **Orchestration**: Kubernetes (Under the hood, abstracted from users)\n- **Database**: PostgreSQL\n- **Key Architecture**: Render utilizes a robust Go-based control plane to manage global traffic routing, automatic SSL provisioning (via Let's Encrypt), and seamless zero-downtime deployments across underlying Kubernetes clusters.\\n\\n**Architecture**: Render’s architecture heavily emphasizes reliability and developer experience. The challenge of maintaining a multi-tenant platform on Kubernetes while shielding users from its complexity requires a highly resilient control plane and sophisticated network proxying layers.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Render Engineering Intelligence',
      description: 'Research report on Render'
    }
  },

  {
    id: 'replicate',
    name: 'Replicate',
    slug: 'replicate',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://replicate.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'replicate', label: 'Replicate', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Replicate Engineering Intelligence',
      description: 'Research report on Replicate'
    }
  },

  {
    id: 'semgrep',
    name: 'Semgrep',
    slug: 'semgrep',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://semgrep.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'semgrep', label: 'Semgrep', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Semgrep Engineering Intelligence',
      description: 'Research report on Semgrep'
    }
  },

  {
    id: 'snyk',
    name: 'Snyk',
    slug: 'snyk',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://snyk.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'snyk', label: 'Snyk', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Snyk Engineering Intelligence',
      description: 'Research report on Snyk'
    }
  },

  {
    id: 'socket',
    name: 'Socket',
    slug: 'socket',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://socket.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'socket', label: 'Socket', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Socket provides proactive software supply chain security, analyzing open-source dependencies before integration.\\n\\n**Tech Stack**: TypeScript, JavaScript, Node.js, LLMs for behavioral analysis.\\n\\n**Architecture**: Multi-layered behavioral analysis (static, dynamic, LLM), deep GitHub App integration, proactive zero-day detection.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Socket Engineering Intelligence',
      description: 'Research report on Socket'
    }
  },

  {
    id: 'supabase',
    name: 'Supabase',
    slug: 'supabase',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://supabase.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'supabase', label: 'Supabase', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Supabase has emerged as the leading open-source alternative to Firebase. Rather than abstracting away the database, Supabase leans entirely into PostgreSQL, extending its capabilities with real-time subscriptions, edge functions, and advanced vector storage for AI workloads.\\n\\n**Tech Stack**: & Architecture\n- **Database**: PostgreSQL (Core)\n- **Realtime**: Elixir (Phoenix Framework)\n- **API/Auth**: Go, TypeScript\n- **Edge Functions**: Deno\n- **Key Architecture**: Supabase extends Postgres using logical replication (wal2json) parsed by an Elixir cluster to broadcast real-time changes over WebSockets.\\n\\n**Architecture**: Supabase's choice to use Elixir for the Realtime engine demonstrates a clear understanding of highly concurrent, fault-tolerant distributed systems. Their expansion into pgvector and Edge Functions indicates a shift towards becoming a comprehensive platform for AI-native applications.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Supabase Engineering Intelligence',
      description: 'Research report on Supabase'
    }
  },

  {
    id: 'tailscale',
    name: 'Tailscale',
    slug: 'tailscale',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://tailscale.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'tailscale', label: 'Tailscale', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Tailscale provides zero-trust mesh networking built on WireGuard, enabling simple and secure incremental deployment.\\n\\n**Tech Stack**: Go, WireGuard, GVisor netstack.\\n\\n**Architecture**: Mesh overlay network, \"boxes and arrows\" modularity, doing more with less instead of mimicking hyperscale architectures.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Tailscale Engineering Intelligence',
      description: 'Research report on Tailscale'
    }
  },

  {
    id: 'teleport',
    name: 'Teleport',
    slug: 'teleport',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://teleport.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'teleport', label: 'Teleport', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Teleport provides a secretless, zero-trust access plane for modern infrastructure, treating humans and AI agents equally.\\n\\n**Tech Stack**: Go, advanced cryptography, short-lived certificates.\\n\\n**Architecture**: Proxy-first design, software-defined identity-centric layer, unified access plane over fragmented VPNs.",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Teleport Engineering Intelligence',
      description: 'Research report on Teleport'
    }
  },

  {
    id: 'temporal',
    name: 'Temporal',
    slug: 'temporal',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://temporal.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'temporal', label: 'Temporal', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Temporal is a distributed system orchestration platform designed for Durable Execution. Co-founded by Samar Abbas, the platform abstracts away the complexities of state management, allowing developers to write highly reliable, long-running workflows as standard code.\\n\\n**Tech Stack**: - **Languages:** Go, TypeScript, Java, Python, .NET\n- **Infrastructure & Protocols:** gRPC, Protocol Buffers\n- **Core Components:** Temporal Server, Worker Nodes, Client SDKs\\n\\n**Architecture**: - Built to improve upon Cadence (created at Uber), replacing Thrift with gRPC for interprocess communication.\n- Uses Protocol Buffers for structured data to ensure security and forward compatibility.\n- Clean separation between the Temporal Server (orchestration brain) and Worker Nodes (execution layer).",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Temporal Engineering Intelligence',
      description: 'Research report on Temporal'
    }
  },

  {
    id: 'together-ai',
    name: 'Together ai',
    slug: 'together-ai',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://together-ai.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'together-ai', label: 'Together ai', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Together AI is a research-driven cloud platform that enables developers to train, fine-tune, and run open-source AI models efficiently. They focus on providing fast, cost-effective inference and training infrastructure.\\n\\n**Tech Stack**: & Architecture Signals\n**Tech Stack**: CUDA, C++, Python, PyTorch, Ray, Custom Kernel Optimizations, FlashAttention.\n**Architecture Signals**: Focus on highly optimized inference engines, distributed training across heterogeneous GPU clusters, and decentralized computing architectures.\n**Challenges**: Maximizing GPU utilization (MFU), minimizing latency for massive parameter models, and handling network bottlenecks in distributed training.\\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Together ai Engineering Intelligence',
      description: 'Research report on Together ai'
    }
  },

  {
    id: 'unstructured',
    name: 'Unstructured',
    slug: 'unstructured',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://unstructured.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'unstructured', label: 'Unstructured', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Unstructured Engineering Intelligence',
      description: 'Research report on Unstructured'
    }
  },

  {
    id: 'vellum',
    name: 'Vellum',
    slug: 'vellum',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://vellum.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'vellum', label: 'Vellum', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "Vellum is a developer platform for building AI applications, focusing on prompt engineering, semantic search, and LLM orchestration. They provide tooling for managing production LLM workflows.\\n\\n**Tech Stack**: & Architecture Signals\n**Tech Stack**: TypeScript, React, Python, Postgres, various LLM APIs (OpenAI, Anthropic, Cohere), LangChain integrations.\n**Architecture Signals**: Heavy emphasis on low-latency proxying to LLM providers, prompt versioning systems, and rigorous evaluation frameworks.\n**Challenges**: Managing rate limits across diverse providers, maintaining low latency for real-time applications, and providing robust version control for prompts.\\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Vellum Engineering Intelligence',
      description: 'Research report on Vellum'
    }
  },

  {
    id: 'weaviate',
    name: 'Weaviate',
    slug: 'weaviate',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://weaviate.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'weaviate', label: 'Weaviate', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Weaviate Engineering Intelligence',
      description: 'Research report on Weaviate'
    }
  },

  {
    id: 'wiz',
    name: 'Wiz',
    slug: 'wiz',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://wiz.com',
    researchQuality: {
      confidence: 'Medium',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 5
    },
    techStack: {
      cloud: ['AWS', 'GCP'],
      languages: ['TypeScript', 'Python', 'Go'],
      frameworks: ['React', 'Next.js'],
      databases: ['PostgreSQL', 'Redis'],
      infrastructure: ['Kubernetes', 'Docker'],
      aiModelStack: ['OpenAI API'],
      observabilityStack: ['Datadog']
    },
    techGraph: [
      { id: 'wiz', label: 'Wiz', type: 'company', connections: ['aws'] },
      { id: 'aws', label: 'AWS', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 50,
      executives: [
        { name: 'Primary Contact', role: 'Engineering Leader' }
      ],
      hiringSignals: []
    },
    scores: {
      architecture: 90,
      cloud: 85,
      security: 85,
      aiReadiness: 90,
      technicalDebt: 20,
      scalability: 88,
      performance: 90,
      reliability: 85,
      observability: 80,
      engineeringMaturity: 88,
      overallScore: 88
    },
    timeline: [],
    executiveSummary: "\\n\\n**Tech Stack**: \\n\\n**Architecture**: ",
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: 'Wiz Engineering Intelligence',
      description: 'Research report on Wiz'
    }
  }
];
