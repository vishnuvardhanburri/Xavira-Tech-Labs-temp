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
    id: 'doppel',
    name: "Doppel",
    slug: 'doppel',
    tagline: "Recursive context inflation",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series C",
    fundingAmount: "$129M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://doppel.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","Go","Node.js"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Docker","Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'doppel', label: "Doppel", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Kevin Tian", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Doppel operates in the Cybersecurity / AI sector with a Series C funding profile ($129M). Their core architecture leverages Python, Go, Node.js, React, AWS, GCP, PostgreSQL, Redis, Docker, Kubernetes, OpenAI (GPT-5/RFT).\n\n**Architecture Signals & Scaling Risks**: Recursive context inflation; RAG latency; Guardrail overhead latency",
    verifiedPublicInfo: ["Tech Stack: Python, Go, Node.js, React, AWS, GCP, PostgreSQL, Redis, Docker, Kubernetes, OpenAI (GPT-5/RFT)", "Scaling Risks: Recursive context inflation; RAG latency; Guardrail overhead latency"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Doppel Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Doppel"
    }
  },

  {
    id: 'adaptive-security',
    name: "Adaptive Security",
    slug: 'adaptive-security',
    tagline: "GPU allocation bottlenecks",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$145M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://adaptivesecurity.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","Go","MongoDB"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","MongoDB"],
      infrastructure: ["Docker","Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'adaptive-security', label: "Adaptive Security", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Brian Long", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Adaptive Security operates in the Cybersecurity / AI sector with a Series B funding profile ($145M). Their core architecture leverages Python, Go, React, Next.js, AWS, GCP, PostgreSQL, MongoDB, Docker, Kubernetes, OpenAI, NVIDIA.\n\n**Architecture Signals & Scaling Risks**: GPU allocation bottlenecks; OSINT ingestion pipeline lag",
    verifiedPublicInfo: ["Tech Stack: Python, Go, React, Next.js, AWS, GCP, PostgreSQL, MongoDB, Docker, Kubernetes, OpenAI, NVIDIA", "Scaling Risks: GPU allocation bottlenecks; OSINT ingestion pipeline lag"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Adaptive Security Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Adaptive Security"
    }
  },

  {
    id: 'camber-health',
    name: "Camber Health",
    slug: 'camber-health',
    tagline: "PostgreSQL query overloads",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$50M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://camber.health",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Node.js","TypeScript","Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'camber-health', label: "Camber Health", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Christophe Rimann", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Camber Health operates in the HealthTech / FinTech sector with a Series B funding profile ($50M). Their core architecture leverages Node.js, TypeScript, React, Next.js, Python, PostgreSQL, AWS, HIPAA Compliance Engine.\n\n**Architecture Signals & Scaling Risks**: PostgreSQL query overloads; HIPAA compliance logging penalties; Ingestion bottlenecks",
    verifiedPublicInfo: ["Tech Stack: Node.js, TypeScript, React, Next.js, Python, PostgreSQL, AWS, HIPAA Compliance Engine", "Scaling Risks: PostgreSQL query overloads; HIPAA compliance logging penalties; Ingestion bottlenecks"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Camber Health Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Camber Health"
    }
  },

  {
    id: 'omnea',
    name: "Omnea",
    slug: 'omnea',
    tagline: "Aurora connection pool exhaustion",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$75M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://omnea.co",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS (Lambda"],
      languages: ["TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["Postgres","DynamoDB"],
      infrastructure: ["AWS (Lambda","EventBridge","Pulumi"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'omnea', label: "Omnea", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Ben Freeman", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Omnea operates in the AI SaaS / Procurement sector with a Series B funding profile ($75M). Their core architecture leverages TypeScript, React, Postgres, AWS (Lambda, DynamoDB, EventBridge, Aurora), Pulumi, Datadog.\n\n**Architecture Signals & Scaling Risks**: Aurora connection pool exhaustion; EventBridge queue bottlenecks; Lambda cold starts",
    verifiedPublicInfo: ["Tech Stack: TypeScript, React, Postgres, AWS (Lambda, DynamoDB, EventBridge, Aurora), Pulumi, Datadog", "Scaling Risks: Aurora connection pool exhaustion; EventBridge queue bottlenecks; Lambda cold starts"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Omnea Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Omnea"
    }
  },

  {
    id: 'clay',
    name: "Clay",
    slug: 'clay',
    tagline: "Node.js, React, PostgreSQL, Pinecone (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series C",
    fundingAmount: "$100M+",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://clay.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Node.js","TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis","Pinecone"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'clay', label: "Clay", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Kareem Amin", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Clay operates in the DevTools / AI sector with a Series C funding profile ($100M+). Their core architecture leverages Node.js, TypeScript, React, Next.js, PostgreSQL, Redis, AWS, GCP, Pinecone, OpenAI, Anthropic.\n\n**Architecture Signals & Scaling Risks**: Node.js, React, PostgreSQL, Pinecone (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Node.js, TypeScript, React, Next.js, PostgreSQL, Redis, AWS, GCP, Pinecone, OpenAI, Anthropic", "Scaling Risks: Node.js, React, PostgreSQL, Pinecone (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Clay Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Clay"
    }
  },

  {
    id: 'physicsx',
    name: "PhysicsX",
    slug: 'physicsx',
    tagline: "Python, Go, PyTorch, Kubernetes (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series C",
    fundingAmount: "$489M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://physicsx.ai",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["Deutsche Telekom Sovereign AI Cloud","AWS"],
      languages: ["Python","Go","C++"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Docker","Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'physicsx', label: "PhysicsX", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Jacomo Corbo", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "PhysicsX operates in the AI / DeepTech sector with a Series C funding profile ($489M). Their core architecture leverages Python, Go, C++, CUDA, PyTorch, Deutsche Telekom Sovereign AI Cloud, AWS, Docker, Kubernetes.\n\n**Architecture Signals & Scaling Risks**: Python, Go, PyTorch, Kubernetes (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Python, Go, C++, CUDA, PyTorch, Deutsche Telekom Sovereign AI Cloud, AWS, Docker, Kubernetes", "Scaling Risks: Python, Go, PyTorch, Kubernetes (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "PhysicsX Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for PhysicsX"
    }
  },

  {
    id: 'graphite',
    name: "Graphite",
    slug: 'graphite',
    tagline: "TypeScript, React, Next.js, Python, AWS (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$72M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://graphite.dev",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["TypeScript","Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'graphite', label: "Graphite", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Merrill Lutsky", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Graphite operates in the DevTools / AI sector with a Series B funding profile ($72M). Their core architecture leverages TypeScript, React, Next.js, Python, AWS, PostgreSQL, Redis, OpenAI, Anthropic, Git Engine.\n\n**Architecture Signals & Scaling Risks**: TypeScript, React, Next.js, Python, AWS (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: TypeScript, React, Next.js, Python, AWS, PostgreSQL, Redis, OpenAI, Anthropic, Git Engine", "Scaling Risks: TypeScript, React, Next.js, Python, AWS (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Graphite Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Graphite"
    }
  },

  {
    id: 'opal-security',
    name: "Opal Security",
    slug: 'opal-security',
    tagline: "Opal Security Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$34M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://opal.dev",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Golang","TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["Postgres","Redis"],
      infrastructure: ["Kubernetes","Terraform"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'opal-security', label: "Opal Security", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Howard Ting", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Opal Security operates in the Cybersecurity sector with a Series B funding profile ($34M). Their core architecture leverages Kubernetes, Golang, Postgres, Redis, Terraform, GraphQL, TypeScript, React, AWS, GCP.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Kubernetes, Golang, Postgres, Redis, Terraform, GraphQL, TypeScript, React, AWS, GCP", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Opal Security Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Opal Security"
    }
  },

  {
    id: 'vanta',
    name: "Vanta",
    slug: 'vanta',
    tagline: "Vanta Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "$150M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://vanta.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Node.js","TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'vanta', label: "Vanta", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Christina Cacioppo", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Vanta operates in the Cybersecurity sector with a Series D funding profile ($150M). Their core architecture leverages AWS, LangChain, Node.js, TypeScript, React, GraphQL.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: AWS, LangChain, Node.js, TypeScript, React, GraphQL", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Vanta Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Vanta"
    }
  },

  {
    id: 'xbow',
    name: "XBOW",
    slug: 'xbow',
    tagline: "XBOW Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$75M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://xbow.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Python","JavaScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'xbow', label: "XBOW", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Oege de Moor", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "XBOW operates in the Cybersecurity / AI sector with a Series B funding profile ($75M). Their core architecture leverages Python, LLMs, JavaScript, XML, Kubernetes, AWS.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Python, LLMs, JavaScript, XML, Kubernetes, AWS", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "XBOW Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for XBOW"
    }
  },

  {
    id: 'chainguard',
    name: "Chainguard",
    slug: 'chainguard',
    tagline: "Chainguard Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "$356M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://chainguard.dev",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["Snowflake"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'chainguard', label: "Chainguard", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Dan Lorenc", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Chainguard operates in the Cybersecurity sector with a Series D funding profile ($356M). Their core architecture leverages Go, Kubernetes, Sigstore, Snowflake, AWS, GCP.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Go, Kubernetes, Sigstore, Snowflake, AWS, GCP", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Chainguard Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Chainguard"
    }
  },

  {
    id: 'island',
    name: "Island",
    slug: 'island',
    tagline: "Island Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "$250M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://island.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","Azure"],
      languages: ["C++","Node.js"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'island', label: "Island", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Mike Fey", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Island operates in the Cybersecurity sector with a Series E funding profile ($250M). Their core architecture leverages Chromium, C++, React, Node.js, AWS, Azure.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Chromium, C++, React, Node.js, AWS, Azure", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Island Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Island"
    }
  },

  {
    id: 'aura',
    name: "Aura",
    slug: 'aura',
    tagline: "Aura Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "$140M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://aura.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Node.js","Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'aura', label: "Aura", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Hari Ravichandran", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Aura operates in the Cybersecurity sector with a Series G funding profile ($140M). Their core architecture leverages Node.js, React, Python, AWS, Kubernetes.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Node.js, React, Python, AWS, Kubernetes", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Aura Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Aura"
    }
  },

  {
    id: 'semgrep',
    name: "Semgrep",
    slug: 'semgrep',
    tagline: "Semgrep Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "$100M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://r2cgroup.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["OCaml","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Docker","Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'semgrep', label: "Semgrep", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Isaac Evans", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Semgrep operates in the Cybersecurity sector with a Series D funding profile ($100M). Their core architecture leverages OCaml, Python, React, Go, Docker, Kubernetes, AWS.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: OCaml, Python, React, Go, Docker, Kubernetes, AWS", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Semgrep Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Semgrep"
    }
  },

  {
    id: 'eclypsium',
    name: "Eclypsium",
    slug: 'eclypsium',
    tagline: "Eclypsium Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series C",
    fundingAmount: "$45M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://eclypsium.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Python","C++","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'eclypsium', label: "Eclypsium", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Yuriy Bulygin", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Eclypsium operates in the Cybersecurity sector with a Series C funding profile ($45M). Their core architecture leverages Python, C, C++, Go, AWS, Docker.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Python, C, C++, Go, AWS, Docker", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Eclypsium Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Eclypsium"
    }
  },

  {
    id: 'cyera',
    name: "Cyera",
    slug: 'cyera',
    tagline: "Cyera Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "$300M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://cyera.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["MongoDB"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["MongoDB"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'cyera', label: "Cyera", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Yotam Segev", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Cyera operates in the Cybersecurity / AI sector with a Series D funding profile ($300M). Their core architecture leverages Looker, Salesforce CPQ, MongoDB, Next.js, Hadoop, Highspot.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Looker, Salesforce CPQ, MongoDB, Next.js, Hadoop, Highspot", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Cyera Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Cyera"
    }
  },

  {
    id: 'socket',
    name: "Socket",
    slug: 'socket',
    tagline: "Socket Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$40M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://socket.dev",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["JavaScript","Python","Go","Node.js"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'socket', label: "Socket", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Feross Aboukhadijeh", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Socket operates in the Cybersecurity sector with a Series B funding profile ($40M). Their core architecture leverages JavaScript, Python, Go, Node.js, GitHub Actions.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: JavaScript, Python, Go, Node.js, GitHub Actions", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Socket Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Socket"
    }
  },

  {
    id: 'huntress',
    name: "Huntress",
    slug: 'huntress',
    tagline: "Microsoft Defender, EDR, SIEM (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "$150M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://huntresslabs.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'huntress', label: "Huntress", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Kyle Hanslovan", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Huntress operates in the Cybersecurity sector with a Series D funding profile ($150M). Their core architecture leverages Microsoft Defender, EDR, SIEM.\n\n**Architecture Signals & Scaling Risks**: Microsoft Defender, EDR, SIEM (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Microsoft Defender, EDR, SIEM", "Scaling Risks: Microsoft Defender, EDR, SIEM (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Huntress Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Huntress"
    }
  },

  {
    id: 'alkira',
    name: "Alkira",
    slug: 'alkira',
    tagline: "Go, C, HTML5, HubSpot, NitroPack, Amazon SES (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series C",
    fundingAmount: "$54M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://alkira.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'alkira', label: "Alkira", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Amir Khan", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Alkira operates in the Cybersecurity sector with a Series C funding profile ($54M). Their core architecture leverages Go, C, HTML5, HubSpot, NitroPack, Amazon SES.\n\n**Architecture Signals & Scaling Risks**: Go, C, HTML5, HubSpot, NitroPack, Amazon SES (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Go, C, HTML5, HubSpot, NitroPack, Amazon SES", "Scaling Risks: Go, C, HTML5, HubSpot, NitroPack, Amazon SES (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Alkira Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Alkira"
    }
  },

  {
    id: 'axonius',
    name: "Axonius",
    slug: 'axonius',
    tagline: "AWS EC2, OpenStack, Threat Stack (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "$200M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://axonius.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS EC2"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'axonius', label: "Axonius", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Dean Sysman", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Axonius operates in the Cybersecurity sector with a Series E funding profile ($200M). Their core architecture leverages AWS EC2, OpenStack, Threat Stack.\n\n**Architecture Signals & Scaling Risks**: AWS EC2, OpenStack, Threat Stack (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: AWS EC2, OpenStack, Threat Stack", "Scaling Risks: AWS EC2, OpenStack, Threat Stack (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Axonius Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Axonius"
    }
  },

  {
    id: 'corelight',
    name: "Corelight",
    slug: 'corelight',
    tagline: "Vue.js, Kotlin, Laravel, Goober, Oracle Cloud, Red Hat (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "$150M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://corelight.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Kotlin","Goober"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'corelight', label: "Corelight", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Brian Dye", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Corelight operates in the Cybersecurity sector with a Series E funding profile ($150M). Their core architecture leverages Vue.js, Kotlin, Laravel, Goober, Oracle Cloud, Red Hat.\n\n**Architecture Signals & Scaling Risks**: Vue.js, Kotlin, Laravel, Goober, Oracle Cloud, Red Hat (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Vue.js, Kotlin, Laravel, Goober, Oracle Cloud, Red Hat", "Scaling Risks: Vue.js, Kotlin, Laravel, Goober, Oracle Cloud, Red Hat (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Corelight Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Corelight"
    }
  },

  {
    id: 'dust-identity',
    name: "DUST Identity",
    slug: 'dust-identity',
    tagline: "Synthetic diamond resin, Nanoengineered diamonds (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$40M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://dustidentity.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'dust-identity', label: "DUST Identity", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Ophir Gaathon", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "DUST Identity operates in the Cybersecurity sector with a Series B funding profile ($40M). Their core architecture leverages Synthetic diamond resin, Nanoengineered diamonds.\n\n**Architecture Signals & Scaling Risks**: Synthetic diamond resin, Nanoengineered diamonds (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Synthetic diamond resin, Nanoengineered diamonds", "Scaling Risks: Synthetic diamond resin, Nanoengineered diamonds (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "DUST Identity Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for DUST Identity"
    }
  },

  {
    id: 'wiz',
    name: "Wiz",
    slug: 'wiz',
    tagline: "Optimizely, Workday, GitHub, Anaplan, Swiper, Snort (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "$300M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://wiz.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'wiz', label: "Wiz", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Assaf Rappaport", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Wiz operates in the Cybersecurity sector with a Series D funding profile ($300M). Their core architecture leverages Optimizely, Workday, GitHub, Anaplan, Swiper, Snort.\n\n**Architecture Signals & Scaling Risks**: Optimizely, Workday, GitHub, Anaplan, Swiper, Snort (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Optimizely, Workday, GitHub, Anaplan, Swiper, Snort", "Scaling Risks: Optimizely, Workday, GitHub, Anaplan, Swiper, Snort (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Wiz Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Wiz"
    }
  },

  {
    id: 'harmonic',
    name: "Harmonic",
    slug: 'harmonic',
    tagline: "Data engine, Formal mathematical reasoning (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$100M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://harmonic.ai",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'harmonic', label: "Harmonic", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Vlad Tenev", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Harmonic operates in the AI sector with a Series B funding profile ($100M). Their core architecture leverages Data engine, Formal mathematical reasoning.\n\n**Architecture Signals & Scaling Risks**: Data engine, Formal mathematical reasoning (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Data engine, Formal mathematical reasoning", "Scaling Risks: Data engine, Formal mathematical reasoning (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Harmonic Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Harmonic"
    }
  },

  {
    id: 'newlimit',
    name: "NewLimit",
    slug: 'newlimit',
    tagline: "Reprogramming payloads, Epigenetic reprogramming (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$130M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://newlimit.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'newlimit', label: "NewLimit", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Jacob C. Kimmel", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "NewLimit operates in the Biotech / HealthTech sector with a Series B funding profile ($130M). Their core architecture leverages Reprogramming payloads, Epigenetic reprogramming.\n\n**Architecture Signals & Scaling Risks**: Reprogramming payloads, Epigenetic reprogramming (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Reprogramming payloads, Epigenetic reprogramming", "Scaling Risks: Reprogramming payloads, Epigenetic reprogramming (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "NewLimit Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for NewLimit"
    }
  },

  {
    id: 'base-power',
    name: "Base Power",
    slug: 'base-power',
    tagline: "Telemetry stack, Distributed Energy Resources (DERs) (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$200M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://basepowercompany.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'base-power', label: "Base Power", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Zach Dell", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Base Power operates in the Hardware sector with a Series B funding profile ($200M). Their core architecture leverages Telemetry stack, Distributed Energy Resources (DERs).\n\n**Architecture Signals & Scaling Risks**: Telemetry stack, Distributed Energy Resources (DERs) (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Telemetry stack, Distributed Energy Resources (DERs)", "Scaling Risks: Telemetry stack, Distributed Energy Resources (DERs) (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Base Power Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Base Power"
    }
  },

  {
    id: 'sprinter-health',
    name: "Sprinter Health",
    slug: 'sprinter-health',
    tagline: "Serverless AWS, React Native, GraphQL, TypeScript, Node.js (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$32M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://sprinterhealth.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["Serverless AWS"],
      languages: ["TypeScript","Node.js"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'sprinter-health', label: "Sprinter Health", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Max Cohen", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Sprinter Health operates in the HealthTech sector with a Series B funding profile ($32M). Their core architecture leverages Serverless AWS, React Native, GraphQL, TypeScript, Node.js.\n\n**Architecture Signals & Scaling Risks**: Serverless AWS, React Native, GraphQL, TypeScript, Node.js (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Serverless AWS, React Native, GraphQL, TypeScript, Node.js", "Scaling Risks: Serverless AWS, React Native, GraphQL, TypeScript, Node.js (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Sprinter Health Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Sprinter Health"
    }
  },

  {
    id: 'graphiant',
    name: "Graphiant",
    slug: 'graphiant',
    tagline: "HashiCorp Consul, Amazon CloudFront, Angular, jQuery, Go (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$19M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://graphiant.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'graphiant', label: "Graphiant", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Ali Shaikh", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Graphiant operates in the Networking sector with a Series B funding profile ($19M). Their core architecture leverages HashiCorp Consul, Amazon CloudFront, Angular, jQuery, Go.\n\n**Architecture Signals & Scaling Risks**: HashiCorp Consul, Amazon CloudFront, Angular, jQuery, Go (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: HashiCorp Consul, Amazon CloudFront, Angular, jQuery, Go", "Scaling Risks: HashiCorp Consul, Amazon CloudFront, Angular, jQuery, Go (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Graphiant Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Graphiant"
    }
  },

  {
    id: 'bounce',
    name: "Bounce",
    slug: 'bounce',
    tagline: "Luggage storage marketplace platform (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$19M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://bounce.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'bounce', label: "Bounce", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Cody Candee", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Bounce operates in the Travel / Marketplace sector with a Series B funding profile ($19M). Their core architecture leverages Luggage storage marketplace platform.\n\n**Architecture Signals & Scaling Risks**: Luggage storage marketplace platform (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Luggage storage marketplace platform", "Scaling Risks: Luggage storage marketplace platform (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Bounce Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Bounce"
    }
  },

  {
    id: 'nooks',
    name: "Nooks",
    slug: 'nooks',
    tagline: "AI cold email generator, Virtual sales floor, AI sequencing (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$43M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://nooks.ai",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'nooks', label: "Nooks", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Dan Lee", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Nooks operates in the AI / Sales sector with a Series B funding profile ($43M). Their core architecture leverages AI cold email generator, Virtual sales floor, AI sequencing.\n\n**Architecture Signals & Scaling Risks**: AI cold email generator, Virtual sales floor, AI sequencing (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: AI cold email generator, Virtual sales floor, AI sequencing", "Scaling Risks: AI cold email generator, Virtual sales floor, AI sequencing (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Nooks Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Nooks"
    }
  },

  {
    id: 'decagon',
    name: "Decagon",
    slug: 'decagon',
    tagline: "Conversational AI, Salesforce, Zendesk (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$65M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://decagon.ai",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'decagon', label: "Decagon", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Jesse Zhang", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Decagon operates in the AI / SaaS sector with a Series B funding profile ($65M). Their core architecture leverages Conversational AI, Salesforce, Zendesk.\n\n**Architecture Signals & Scaling Risks**: Conversational AI, Salesforce, Zendesk (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: Conversational AI, Salesforce, Zendesk", "Scaling Risks: Conversational AI, Salesforce, Zendesk (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Decagon Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Decagon"
    }
  },

  {
    id: 'atlys',
    name: "Atlys",
    slug: 'atlys',
    tagline: "RSS, Drupal, jQuery, PHP, Apache (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$20M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://atlys.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["PHP"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'atlys', label: "Atlys", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Mohak Nahta", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Atlys operates in the Immigration / Travel sector with a Series B funding profile ($20M). Their core architecture leverages RSS, Drupal, jQuery, PHP, Apache.\n\n**Architecture Signals & Scaling Risks**: RSS, Drupal, jQuery, PHP, Apache (Needs technical diagnosis)",
    verifiedPublicInfo: ["Tech Stack: RSS, Drupal, jQuery, PHP, Apache", "Scaling Risks: RSS, Drupal, jQuery, PHP, Apache (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Atlys Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Atlys"
    }
  },

  {
    id: 'story-protocol',
    name: "Story Protocol",
    slug: 'story-protocol',
    tagline: "Cross-chain messaging latency, EVM state bloat",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Series B",
    fundingAmount: "$80M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://storyprotocol.xyz",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'story-protocol', label: "Story Protocol", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "S.Y. Lee", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Story Protocol operates in the Crypto sector with a Series B funding profile ($80M). Their core architecture leverages EVM, CometBFT, LayerZero, ERC-6551.\n\n**Architecture Signals & Scaling Risks**: Cross-chain messaging latency, EVM state bloat",
    verifiedPublicInfo: ["Tech Stack: EVM, CometBFT, LayerZero, ERC-6551", "Scaling Risks: Cross-chain messaging latency, EVM state bloat"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Story Protocol Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Story Protocol"
    }
  },

  {
    id: 'fnz',
    name: "FNZ",
    slug: 'fnz',
    tagline: "Legacy .NET/SOAP integration issues, deployment bottlenecks",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£1.95B",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://fnz.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'fnz', label: "FNZ", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Blythe Masters", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "FNZ operates in the FinTech sector with a Established funding profile (£1.95B). Their core architecture leverages .NET, SOAP, Jaspersoft, Octopus Deploy, ReactJS, TypeScript.\n\n**Architecture Signals & Scaling Risks**: Legacy .NET/SOAP integration issues, deployment bottlenecks",
    verifiedPublicInfo: ["Tech Stack: .NET, SOAP, Jaspersoft, Octopus Deploy, ReactJS, TypeScript", "Scaling Risks: Legacy .NET/SOAP integration issues, deployment bottlenecks"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "FNZ Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for FNZ"
    }
  },

  {
    id: 'monzo',
    name: "Monzo",
    slug: 'monzo',
    tagline: "Cassandra scaling, Kafka message queues, Go microservices latency",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£1.41B",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://monzo.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["GCP"],
      languages: ["Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["Cassandra"],
      infrastructure: ["Kafka","Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'monzo', label: "Monzo", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "TS Anil", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Monzo operates in the FinTech sector with a Established funding profile (£1.41B). Their core architecture leverages Go, Cassandra, Kafka, Kubernetes, GCP.\n\n**Architecture Signals & Scaling Risks**: Cassandra scaling, Kafka message queues, Go microservices latency",
    verifiedPublicInfo: ["Tech Stack: Go, Cassandra, Kafka, Kubernetes, GCP", "Scaling Risks: Cassandra scaling, Kafka message queues, Go microservices latency"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Monzo Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Monzo"
    }
  },

  {
    id: 'checkout-com',
    name: "Checkout.com",
    slug: 'checkout-com',
    tagline: "DynamoDB hot partitions, Node.js memory leaks",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£1.36B",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://checkout.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Node.js","C#"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["DynamoDB","Snowflake"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'checkout-com', label: "Checkout.com", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Guillaume Pousaz", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Checkout.com operates in the FinTech sector with a Established funding profile (£1.36B). Their core architecture leverages AWS, DynamoDB, Node.js, C#, Kubernetes, Snowflake.\n\n**Architecture Signals & Scaling Risks**: DynamoDB hot partitions, Node.js memory leaks",
    verifiedPublicInfo: ["Tech Stack: AWS, DynamoDB, Node.js, C#, Kubernetes, Snowflake", "Scaling Risks: DynamoDB hot partitions, Node.js memory leaks"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Checkout.com Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Checkout.com"
    }
  },

  {
    id: 'revolut',
    name: "Revolut",
    slug: 'revolut',
    tagline: "PostgreSQL scaling, GCP Kubernetes management",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£1.26B",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://revolut.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["GCP"],
      languages: ["Java"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'revolut', label: "Revolut", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Nik Storonsky", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Revolut operates in the FinTech sector with a Established funding profile (£1.26B). Their core architecture leverages Java, GCP, PostgreSQL, Kubernetes.\n\n**Architecture Signals & Scaling Risks**: PostgreSQL scaling, GCP Kubernetes management",
    verifiedPublicInfo: ["Tech Stack: Java, GCP, PostgreSQL, Kubernetes", "Scaling Risks: PostgreSQL scaling, GCP Kubernetes management"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Revolut Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Revolut"
    }
  },

  {
    id: 'sumup',
    name: "SumUp",
    slug: 'sumup',
    tagline: "Kafka stream processing, Kubernetes pod scaling",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£770M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://sumup.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Kotlin"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["Snowflake"],
      infrastructure: ["Kubernetes","Kafka"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'sumup', label: "SumUp", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Daniel Klein", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "SumUp operates in the FinTech sector with a Established funding profile (£770M). Their core architecture leverages AWS, Kubernetes, Kotlin, Elixir, React, Kafka, Snowflake.\n\n**Architecture Signals & Scaling Risks**: Kafka stream processing, Kubernetes pod scaling",
    verifiedPublicInfo: ["Tech Stack: AWS, Kubernetes, Kotlin, Elixir, React, Kafka, Snowflake", "Scaling Risks: Kafka stream processing, Kubernetes pod scaling"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "SumUp Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for SumUp"
    }
  },

  {
    id: 'atom-bank',
    name: "Atom Bank",
    slug: 'atom-bank',
    tagline: "Middleware integration, GCP scaling, Kotlin backend",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£738M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://atombank.co.uk",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Kotlin","TypeScript","Google Cloud"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'atom-bank', label: "Atom Bank", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Mark Mullen", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Atom Bank operates in the FinTech sector with a Established funding profile (£738M). Their core architecture leverages Kotlin, React, TypeScript, Astro, Google Cloud, Kubernetes.\n\n**Architecture Signals & Scaling Risks**: Middleware integration, GCP scaling, Kotlin backend",
    verifiedPublicInfo: ["Tech Stack: Kotlin, React, TypeScript, Astro, Google Cloud, Kubernetes", "Scaling Risks: Middleware integration, GCP scaling, Kotlin backend"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Atom Bank Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Atom Bank"
    }
  },

  {
    id: 'starling-bank',
    name: "Starling Bank",
    slug: 'starling-bank',
    tagline: "AWS cloud scaling, PostgreSQL database tuning",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£715M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://starlingbank.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Java"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'starling-bank', label: "Starling Bank", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Raman Bhatia", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Starling Bank operates in the FinTech sector with a Established funding profile (£715M). Their core architecture leverages AWS, Java, PostgreSQL, Angular.\n\n**Architecture Signals & Scaling Risks**: AWS cloud scaling, PostgreSQL database tuning",
    verifiedPublicInfo: ["Tech Stack: AWS, Java, PostgreSQL, Angular", "Scaling Risks: AWS cloud scaling, PostgreSQL database tuning"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Starling Bank Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Starling Bank"
    }
  },

  {
    id: 'metro-bank',
    name: "Metro Bank",
    slug: 'metro-bank',
    tagline: "Temenos T24 legacy integration, NoSQL data consistency",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£640M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://metrobank.plc.uk",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["NoSQL"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'metro-bank', label: "Metro Bank", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Daniel Frumkin", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Metro Bank operates in the FinTech sector with a Growth funding profile (£640M). Their core architecture leverages Temenos T24, scikit-learn, ServiceNow, RxJS, NoSQL.\n\n**Architecture Signals & Scaling Risks**: Temenos T24 legacy integration, NoSQL data consistency",
    verifiedPublicInfo: ["Tech Stack: Temenos T24, scikit-learn, ServiceNow, RxJS, NoSQL", "Scaling Risks: Temenos T24 legacy integration, NoSQL data consistency"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Metro Bank Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Metro Bank"
    }
  },

  {
    id: 'oaknorth',
    name: "OakNorth",
    slug: 'oaknorth',
    tagline: "React Native performance, AWS infrastructure scaling",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£637M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://oaknorth.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'oaknorth', label: "OakNorth", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Rishi Khosla", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "OakNorth operates in the FinTech sector with a Established funding profile (£637M). Their core architecture leverages AWS, React Native, Python, Go, Kubernetes.\n\n**Architecture Signals & Scaling Risks**: React Native performance, AWS infrastructure scaling",
    verifiedPublicInfo: ["Tech Stack: AWS, React Native, Python, Go, Kubernetes", "Scaling Risks: React Native performance, AWS infrastructure scaling"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "OakNorth Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for OakNorth"
    }
  },

  {
    id: 'allica-bank',
    name: "Allica Bank",
    slug: 'allica-bank',
    tagline: "Azure Spring Cloud scaling, Kotlin/Spring Boot performance",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£513M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://allica.bank",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["Azure"],
      languages: ["Kotlin"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["Snowflake"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'allica-bank', label: "Allica Bank", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Richard Davies", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Allica Bank operates in the FinTech sector with a Established funding profile (£513M). Their core architecture leverages Azure, Spring Boot, Kotlin, React, Snowflake.\n\n**Architecture Signals & Scaling Risks**: Azure Spring Cloud scaling, Kotlin/Spring Boot performance",
    verifiedPublicInfo: ["Tech Stack: Azure, Spring Boot, Kotlin, React, Snowflake", "Scaling Risks: Azure Spring Cloud scaling, Kotlin/Spring Boot performance"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Allica Bank Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Allica Bank"
    }
  },

  {
    id: 'blockchain-com',
    name: "Blockchain.com",
    slug: 'blockchain-com',
    tagline: "Crypto transaction throughput, AWS security",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£473M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://blockchain.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Java","Kotlin"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'blockchain-com', label: "Blockchain.com", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Peter Smith", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Blockchain.com operates in the Crypto sector with a Growth funding profile (£473M). Their core architecture leverages Java, Kotlin, React, AWS.\n\n**Architecture Signals & Scaling Risks**: Crypto transaction throughput, AWS security",
    verifiedPublicInfo: ["Tech Stack: Java, Kotlin, React, AWS", "Scaling Risks: Crypto transaction throughput, AWS security"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Blockchain.com Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Blockchain.com"
    }
  },

  {
    id: 'dojo',
    name: "Dojo",
    slug: 'dojo',
    tagline: "ASP.NET legacy modernization, IIS performance",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£470M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://dojotechnology.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'dojo', label: "Dojo", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "George Karibian", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Dojo operates in the FinTech sector with a Established funding profile (£470M). Their core architecture leverages Windows Server, ASP.NET, IIS.\n\n**Architecture Signals & Scaling Risks**: ASP.NET legacy modernization, IIS performance",
    verifiedPublicInfo: ["Tech Stack: Windows Server, ASP.NET, IIS", "Scaling Risks: ASP.NET legacy modernization, IIS performance"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Dojo Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Dojo"
    }
  },

  {
    id: 'thought-machine',
    name: "Thought Machine",
    slug: 'thought-machine',
    tagline: "Kubernetes cluster management, Python backend scaling",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£442M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://thoughtmachine.net",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'thought-machine', label: "Thought Machine", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Paul Taylor", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Thought Machine operates in the FinTech sector with a Established funding profile (£442M). Their core architecture leverages Python, Prometheus, AWS, Kubernetes, Bootstrap.\n\n**Architecture Signals & Scaling Risks**: Kubernetes cluster management, Python backend scaling",
    verifiedPublicInfo: ["Tech Stack: Python, Prometheus, AWS, Kubernetes, Bootstrap", "Scaling Risks: Kubernetes cluster management, Python backend scaling"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Thought Machine Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Thought Machine"
    }
  },

  {
    id: 'gocardless',
    name: "GoCardless",
    slug: 'gocardless',
    tagline: "Ruby on Rails monolithic scaling, PostgreSQL database locks",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£392M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://gocardless.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["GCP"],
      languages: ["Ruby on Rails","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'gocardless', label: "GoCardless", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Hiroki Takeuchi", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "GoCardless operates in the FinTech sector with a Established funding profile (£392M). Their core architecture leverages Ruby on Rails, Next.js, Go, Kubernetes, PostgreSQL, GCP.\n\n**Architecture Signals & Scaling Risks**: Ruby on Rails monolithic scaling, PostgreSQL database locks",
    verifiedPublicInfo: ["Tech Stack: Ruby on Rails, Next.js, Go, Kubernetes, PostgreSQL, GCP", "Scaling Risks: Ruby on Rails monolithic scaling, PostgreSQL database locks"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "GoCardless Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for GoCardless"
    }
  },

  {
    id: 'marex',
    name: "Marex",
    slug: 'marex',
    tagline: "Marex Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£373M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://marex.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","C#","JavaScript","TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'marex', label: "Marex", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Arthur Fan", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Marex operates in the FinTech sector with a Established funding profile (£373M). Their core architecture leverages Python, C#, .NET, JavaScript, TypeScript.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Python, C#, .NET, JavaScript, TypeScript", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Marex Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Marex"
    }
  },

  {
    id: 'tandem',
    name: "Tandem",
    slug: 'tandem',
    tagline: "Tandem Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£366M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://tandem.co.uk",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'tandem', label: "Tandem", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Alex Mollart", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Tandem operates in the FinTech sector with a Established funding profile (£366M). Their core architecture leverages Mambu, GitHub, XML, MySQL, BambooHR, reCAPTCHA, Nginx, lit-element, Webflow, Bootstrap, FullStory.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Mambu, GitHub, XML, MySQL, BambooHR, reCAPTCHA, Nginx, lit-element, Webflow, Bootstrap, FullStory", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Tandem Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Tandem"
    }
  },

  {
    id: 'teya',
    name: "Teya",
    slug: 'teya',
    tagline: "Teya Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£358M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://teya.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'teya', label: "Teya", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Thiago Piau", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Teya operates in the FinTech sector with a Growth funding profile (£358M). Their core architecture leverages Facebook Pixel, Jenkins, git, OAuth, Cisco Meraki, Framer Sites, Mastercard, Chakra UI.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Facebook Pixel, Jenkins, git, OAuth, Cisco Meraki, Framer Sites, Mastercard, Chakra UI", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Teya Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Teya"
    }
  },

  {
    id: 'smart',
    name: "Smart",
    slug: 'smart',
    tagline: "Smart Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£353M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://smartpension.co.uk",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Ruby on Rails"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'smart', label: "Smart", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Andrew Evans", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Smart operates in the FinTech sector with a Established funding profile (£353M). Their core architecture leverages SQL, PostgreSQL, git, Perkbox, JSON-LD, Android, Ruby on Rails, CSS.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: SQL, PostgreSQL, git, Perkbox, JSON-LD, Android, Ruby on Rails, CSS", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Smart Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Smart"
    }
  },

  {
    id: 'clearbank',
    name: "ClearBank",
    slug: 'clearbank',
    tagline: "ClearBank Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£348M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://clear.bank",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["Azure Active Directory"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'clearbank', label: "ClearBank", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Mark Fairless", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "ClearBank operates in the FinTech sector with a Established funding profile (£348M). Their core architecture leverages Hotjar, Tableau, Azure Active Directory, HashiCorp, Windows 10, Windows Server, Zscaler, Dynatrace.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Hotjar, Tableau, Azure Active Directory, HashiCorp, Windows 10, Windows Server, Zscaler, Dynatrace", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "ClearBank Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for ClearBank"
    }
  },

  {
    id: 'behavox',
    name: "Behavox",
    slug: 'behavox',
    tagline: "Behavox Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£282M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://behavox.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'behavox', label: "Behavox", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Erkin Adylov", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Behavox operates in the FinTech sector with a Established funding profile (£282M). Their core architecture leverages Quantum risk detection, LLM, Cloud.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Quantum risk detection, LLM, Cloud", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Behavox Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Behavox"
    }
  },

  {
    id: 'stream',
    name: "Stream",
    slug: 'stream',
    tagline: "Stream Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£278M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://getstream.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'stream', label: "Stream", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Thierry Schellenbach", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Stream operates in the FinTech sector with a Growth funding profile (£278M). Their core architecture leverages Go, RocksDB, Raft, AWS.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Go, RocksDB, Raft, AWS", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Stream Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Stream"
    }
  },

  {
    id: 'oxbury',
    name: "Oxbury",
    slug: 'oxbury',
    tagline: "Oxbury Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£262M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://oxbury.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'oxbury', label: "Oxbury", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "James Farrar", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Oxbury operates in the FinTech sector with a Growth funding profile (£262M). Their core architecture leverages Cloud-based solutions, Naqoda core banking system.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Cloud-based solutions, Naqoda core banking system", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Oxbury Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Oxbury"
    }
  },

  {
    id: '10x-banking',
    name: "10x Banking",
    slug: '10x-banking',
    tagline: "10x Banking Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£258M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://10xbanking.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: '10x-banking', label: "10x Banking", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Antony Jenkins", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "10x Banking operates in the FinTech sector with a Established funding profile (£258M). Their core architecture leverages HubSpot Content Hub, RSS, git, Headspace, iOS, HTML, Lua, Thycotic.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: HubSpot Content Hub, RSS, git, Headspace, iOS, HTML, Lua, Thycotic", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "10x Banking Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for 10x Banking"
    }
  },

  {
    id: 'funding-circle',
    name: "Funding Circle",
    slug: 'funding-circle',
    tagline: "Funding Circle Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£255M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://fundingcircle.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["PHP","Google Analytics","Ruby On Rails","Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'funding-circle', label: "Funding Circle", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Lisa Jacobs", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Funding Circle operates in the FinTech sector with a Established funding profile (£255M). Their core architecture leverages Microsoft Clarity, cdnjs, Webpack, PHP, Chakra UI, Google Analytics, Ruby On Rails, Python, AWS, Kubernetes.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Microsoft Clarity, cdnjs, Webpack, PHP, Chakra UI, Google Analytics, Ruby On Rails, Python, AWS, Kubernetes", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Funding Circle Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Funding Circle"
    }
  },

  {
    id: 'paddle',
    name: "Paddle",
    slug: 'paddle',
    tagline: "Paddle Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£251M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://paddle.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Google Analytics"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'paddle', label: "Paddle", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Jimmy Fitzgerald", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Paddle operates in the FinTech sector with a Established funding profile (£251M). Their core architecture leverages Google Analytics, HubSpot, Vue.js, Alpine.js, Svelte.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Google Analytics, HubSpot, Vue.js, Alpine.js, Svelte", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Paddle Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Paddle"
    }
  },

  {
    id: 'curve',
    name: "Curve",
    slug: 'curve',
    tagline: "Curve Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£251M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://curve.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Node","JavaScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'curve', label: "Curve", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Shachar Bialick", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Curve operates in the FinTech sector with a Growth funding profile (£251M). Their core architecture leverages Node, JavaScript, MEAN/MERN stack.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Node, JavaScript, MEAN/MERN stack", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Curve Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Curve"
    }
  },

  {
    id: 'tide',
    name: "Tide",
    slug: 'tide',
    tagline: "Tide Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£244M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://tide.co",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'tide', label: "Tide", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Oliver Prill", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Tide operates in the FinTech sector with a Established funding profile (£244M). Their core architecture leverages Pendo, LaunchDarkly, Segment, Jamf Pro, Hammer.js, Braze, Workable, CSS.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Pendo, LaunchDarkly, Segment, Jamf Pro, Hammer.js, Braze, Workable, CSS", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Tide Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Tide"
    }
  },

  {
    id: 'copper',
    name: "Copper",
    slug: 'copper',
    tagline: "Copper Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£237M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://copper.co",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'copper', label: "Copper", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Amar Kuchinad", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Copper operates in the Crypto sector with a Growth funding profile (£237M). Their core architecture leverages Blockchain, Digital asset custody technology.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Blockchain, Digital asset custody technology", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Copper Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Copper"
    }
  },

  {
    id: 'fnality',
    name: "Fnality",
    slug: 'fnality',
    tagline: "Fnality Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£237M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://fnality.org",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS Security Hub"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'fnality', label: "Fnality", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Rhomaios Ram", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Fnality operates in the FinTech sector with a Growth funding profile (£237M). Their core architecture leverages Docker, Microsoft SharePoint, Atlassian Jira, Preact, AWS Security Hub.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Docker, Microsoft SharePoint, Atlassian Jira, Preact, AWS Security Hub", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Fnality Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Fnality"
    }
  },

  {
    id: 'cloudpay',
    name: "CloudPay",
    slug: 'cloudpay',
    tagline: "CloudPay Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£234M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://cloudpay.net",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Java"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'cloudpay', label: "CloudPay", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Roland Folz", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "CloudPay operates in the FinTech sector with a Established funding profile (£234M). Their core architecture leverages SaaS, Java, React, SQL.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: SaaS, Java, React, SQL", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "CloudPay Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for CloudPay"
    }
  },

  {
    id: 'form3',
    name: "Form3",
    slug: 'form3',
    tagline: "Form3 Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£228M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://form3.tech",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgresDB"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'form3', label: "Form3", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Mike", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Form3 operates in the FinTech sector with a Growth funding profile (£228M). Their core architecture leverages AWS, GCP, Kubernetes, CockroachDB, Elasticsearch, PostgresDB, Vault, Consul, Go.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: AWS, GCP, Kubernetes, CockroachDB, Elasticsearch, PostgresDB, Vault, Consul, Go", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Form3 Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Form3"
    }
  },

  {
    id: 'tradingview',
    name: "TradingView",
    slug: 'tradingview',
    tagline: "TradingView Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£218M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://tradingview.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","Node.js"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'tradingview', label: "TradingView", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Oleg Mukhanov", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "TradingView operates in the FinTech sector with a Growth funding profile (£218M). Their core architecture leverages HTML5, Canvas, WebSockets, Python, Node.js.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: HTML5, Canvas, WebSockets, Python, Node.js", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "TradingView Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for TradingView"
    }
  },

  {
    id: 'lendable',
    name: "Lendable",
    slug: 'lendable',
    tagline: "Lendable Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£214M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://lendable.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["Postgres"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'lendable', label: "Lendable", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Martin Kissinger", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Lendable operates in the FinTech sector with a Established funding profile (£214M). Their core architecture leverages AWS, Python, React, Postgres.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: AWS, Python, React, Postgres", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Lendable Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Lendable"
    }
  },

  {
    id: 'clearcourse',
    name: "ClearCourse",
    slug: 'clearcourse',
    tagline: "ClearCourse Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£209M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://clearcoursellp.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["PHP"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["Snowflake"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'clearcourse', label: "ClearCourse", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Christina Hamilton", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "ClearCourse operates in the FinTech sector with a Established funding profile (£209M). Their core architecture leverages Grafana, Snowflake, Apache Tomcat, Storybook, PHP, HTML5.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Grafana, Snowflake, Apache Tomcat, Storybook, PHP, HTML5", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "ClearCourse Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for ClearCourse"
    }
  },

  {
    id: 'genesis',
    name: "Genesis",
    slug: 'genesis',
    tagline: "Genesis Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£199M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://genesis.global",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Java"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'genesis', label: "Genesis", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Stephen Murphy", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Genesis operates in the FinTech sector with a Growth funding profile (£199M). Their core architecture leverages AI Architecture, Cloud, Microservices, Java.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: AI Architecture, Cloud, Microservices, Java", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Genesis Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Genesis"
    }
  },

  {
    id: '9fin',
    name: "9fin",
    slug: '9fin',
    tagline: "9fin Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£198M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://9fin.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: '9fin', label: "9fin", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Steven Hunter", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "9fin operates in the FinTech sector with a Growth funding profile (£198M). Their core architecture leverages AI, Generative AI, LLMs, Python, AWS, PostgreSQL.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: AI, Generative AI, LLMs, Python, AWS, PostgreSQL", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "9fin Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for 9fin"
    }
  },

  {
    id: 'fresha',
    name: "Fresha",
    slug: 'fresha',
    tagline: "Fresha Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£195M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://fresha.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'fresha', label: "Fresha", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "William Zeqiri", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Fresha operates in the SaaS sector with a Growth funding profile (£195M). Their core architecture leverages AI Concierge, iOS, Android, Web, Cloud.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: AI Concierge, iOS, Android, Web, Cloud", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Fresha Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Fresha"
    }
  },

  {
    id: 'paysend',
    name: "PaySend",
    slug: 'paysend',
    tagline: "PaySend Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£195M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://paysend.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'paysend', label: "PaySend", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Ben Chisell", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "PaySend operates in the FinTech sector with a Established funding profile (£195M). Their core architecture leverages Mastercard/Visa APIs, Cloud, Mobile App, Microservices.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Mastercard/Visa APIs, Cloud, Mobile App, Microservices", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "PaySend Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for PaySend"
    }
  },

  {
    id: 'kriya',
    name: "Kriya",
    slug: 'kriya',
    tagline: "Kriya Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£192M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://kriyago.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'kriya', label: "Kriya", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Anil", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Kriya operates in the FinTech sector with a Growth funding profile (£192M). Their core architecture leverages API orchestration, Cloud, Bidirectional data sync.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: API orchestration, Cloud, Bidirectional data sync", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Kriya Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Kriya"
    }
  },

  {
    id: 'the-bank-of-london',
    name: "The Bank of London",
    slug: 'the-bank-of-london',
    tagline: "The Bank of London Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£192M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://bankoflondon.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'the-bank-of-london', label: "The Bank of London", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Tony Bullman", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "The Bank of London operates in the FinTech sector with a Growth funding profile (£192M). Their core architecture leverages Cloud-native, API-driven, Microservices.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Cloud-native, API-driven, Microservices", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "The Bank of London Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for The Bank of London"
    }
  },

  {
    id: 'soldo',
    name: "Soldo",
    slug: 'soldo',
    tagline: "Soldo Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£192M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://soldo.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'soldo', label: "Soldo", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Carlo Gualandri", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Soldo operates in the FinTech sector with a Growth funding profile (£192M). Their core architecture leverages AWS, Kubernetes, Cloud-native, SSO, SAML.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: AWS, Kubernetes, Cloud-native, SSO, SAML", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Soldo Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Soldo"
    }
  },

  {
    id: 'monese',
    name: "Monese",
    slug: 'monese',
    tagline: "Monese Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£185M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://monese.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'monese', label: "Monese", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Norris Koppel", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Monese operates in the FinTech sector with a Growth funding profile (£185M). Their core architecture leverages Thought Machine Vault, Cloud-native, iOS, Android.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Thought Machine Vault, Cloud-native, iOS, Android", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Monese Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Monese"
    }
  },

  {
    id: 'monument-bank',
    name: "Monument Bank",
    slug: 'monument-bank',
    tagline: "Monument Bank Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£179M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://monument.co",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'monument-bank', label: "Monument Bank", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Steve", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Monument Bank operates in the FinTech sector with a Growth funding profile (£179M). Their core architecture leverages Microservices, API-first, Contentful CMS, Salesforce.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Microservices, API-first, Contentful CMS, Salesforce", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Monument Bank Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Monument Bank"
    }
  },

  {
    id: 'prodigy-finance',
    name: "Prodigy Finance",
    slug: 'prodigy-finance',
    tagline: "Prodigy Finance Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£178M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://prodigyfinance.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","Kotlin","JavaScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'prodigy-finance', label: "Prodigy Finance", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Cameron Stevens", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Prodigy Finance operates in the FinTech sector with a Established funding profile (£178M). Their core architecture leverages Python, Kotlin, JavaScript, Bootstrap, Moment.js.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Python, Kotlin, JavaScript, Bootstrap, Moment.js", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Prodigy Finance Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Prodigy Finance"
    }
  },

  {
    id: 'clearscore',
    name: "ClearScore",
    slug: 'clearscore',
    tagline: "ClearScore Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£173M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://clearscore.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Java"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'clearscore', label: "ClearScore", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Justin Basini", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "ClearScore operates in the FinTech sector with a Established funding profile (£173M). Their core architecture leverages AWS, Java, Spring Boot, React, React Native, Kubernetes.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: AWS, Java, Spring Boot, React, React Native, Kubernetes", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "ClearScore Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for ClearScore"
    }
  },

  {
    id: 'elliptic',
    name: "Elliptic",
    slug: 'elliptic',
    tagline: "Elliptic Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£168M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://elliptic.co",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["DynamoDB"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'elliptic', label: "Elliptic", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Simone", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Elliptic operates in the FinTech sector with a Growth funding profile (£168M). Their core architecture leverages DynamoDB, AWS, Blockchain Analytics, Crypto Compliance Software.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: DynamoDB, AWS, Blockchain Analytics, Crypto Compliance Software", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Elliptic Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Elliptic"
    }
  },

  {
    id: 'moneyfarm',
    name: "Moneyfarm",
    slug: 'moneyfarm',
    tagline: "Moneyfarm Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£168M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://moneyfarm.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'moneyfarm', label: "Moneyfarm", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Giovanni Daprà", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Moneyfarm operates in the FinTech sector with a Growth funding profile (£168M). Their core architecture leverages Online Investments, Smart Technology.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Online Investments, Smart Technology", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Moneyfarm Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Moneyfarm"
    }
  },

  {
    id: 'capital-on-tap',
    name: "Capital on Tap",
    slug: 'capital-on-tap',
    tagline: "Capital on Tap Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£164M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://capitalontap.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'capital-on-tap', label: "Capital on Tap", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Damian Brychcy", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Capital on Tap operates in the FinTech sector with a Established funding profile (£164M). Their core architecture leverages Web & Mobile, Cloud & Infrastructure, Backend, AI, Data.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Web & Mobile, Cloud & Infrastructure, Backend, AI, Data", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Capital on Tap Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Capital on Tap"
    }
  },

  {
    id: 'thincats',
    name: "ThinCats",
    slug: 'thincats',
    tagline: "ThinCats Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£160M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://thincats.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'thincats', label: "ThinCats", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Amany Attia", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "ThinCats operates in the FinTech sector with a Established funding profile (£160M). Their core architecture leverages Proprietary credit risk model, Data Analytics.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Proprietary credit risk model, Data Analytics", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "ThinCats Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for ThinCats"
    }
  },

  {
    id: 'terrapay',
    name: "TerraPay",
    slug: 'terrapay',
    tagline: "TerraPay Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£146M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://terrapay.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'terrapay', label: "TerraPay", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Ambar Sur", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "TerraPay operates in the FinTech sector with a Venture funding profile (£146M). Their core architecture leverages Cross-border payments, APIs, Cloud.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Cross-border payments, APIs, Cloud", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "TerraPay Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for TerraPay"
    }
  },

  {
    id: 'sonovate',
    name: "Sonovate",
    slug: 'sonovate',
    tagline: "Sonovate Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£144M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://sonovate.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'sonovate', label: "Sonovate", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Richard Prime", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Sonovate operates in the FinTech sector with a Growth funding profile (£144M). Their core architecture leverages Software Engineering, Cloud, Flexible financing tech.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Software Engineering, Cloud, Flexible financing tech", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Sonovate Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Sonovate"
    }
  },

  {
    id: 'cleo',
    name: "Cleo",
    slug: 'cleo',
    tagline: "Cleo Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£137M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://cleo.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'cleo', label: "Cleo", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Barney Hussey-Yeo", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Cleo operates in the FinTech sector with a Established funding profile (£137M). Their core architecture leverages Cleo Integration Cloud (CIC), EDI, API, B2B Integration.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Cleo Integration Cloud (CIC), EDI, API, B2B Integration", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Cleo Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Cleo"
    }
  },

  {
    id: 'pollinate',
    name: "Pollinate",
    slug: 'pollinate',
    tagline: "Pollinate Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£135M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://pollinate.tech",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'pollinate', label: "Pollinate", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Fiona Roach Canning", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Pollinate operates in the FinTech sector with a Growth funding profile (£135M). Their core architecture leverages AI Agents, ERPs, Supply Chain, Python, Cloud.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: AI Agents, ERPs, Supply Chain, Python, Cloud", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Pollinate Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Pollinate"
    }
  },

  {
    id: 'paymentology',
    name: "Paymentology",
    slug: 'paymentology',
    tagline: "Paymentology Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£134M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://paymentology.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'paymentology', label: "Paymentology", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Jeff Parker", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Paymentology operates in the FinTech sector with a Growth funding profile (£134M). Their core architecture leverages Lume platform, APIs, Cloud.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Lume platform, APIs, Cloud", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Paymentology Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Paymentology"
    }
  },

  {
    id: 'storfund',
    name: "Storfund",
    slug: 'storfund',
    tagline: "Storfund Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£134M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://storfund.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'storfund', label: "Storfund", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "George Brintalos", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Storfund operates in the FinTech sector with a Growth funding profile (£134M). Their core architecture leverages Ecommerce tech, APIs.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Ecommerce tech, APIs", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Storfund Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Storfund"
    }
  },

  {
    id: 'modulr',
    name: "Modulr",
    slug: 'modulr',
    tagline: "Modulr Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£133M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://modulrfinance.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'modulr', label: "Modulr", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Myles Stephenson", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Modulr operates in the FinTech sector with a Established funding profile (£133M). Their core architecture leverages Payments Automation Platform, APIs, Cloud.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Payments Automation Platform, APIs, Cloud", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Modulr Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Modulr"
    }
  },

  {
    id: 'tractable',
    name: "Tractable",
    slug: 'tractable',
    tagline: "Tractable Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£133M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://tractable.ai",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'tractable', label: "Tractable", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Alex Dalyac", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Tractable operates in the FinTech / AI sector with a Growth funding profile (£133M). Their core architecture leverages AI, Computer Vision, Cloud.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: AI, Computer Vision, Cloud", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Tractable Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Tractable"
    }
  },

  {
    id: 'dext',
    name: "Dext",
    slug: 'dext',
    tagline: "Dext Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£129M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://dext.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'dext', label: "Dext", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Sabby Gill", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Dext operates in the FinTech sector with a Established funding profile (£129M). Their core architecture leverages AI Bookkeeping software, Document capture.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: AI Bookkeeping software, Document capture", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Dext Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Dext"
    }
  },

  {
    id: 'primer',
    name: "Primer",
    slug: 'primer',
    tagline: "Primer Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£128M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://primer.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'primer', label: "Primer", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Gabriel Le Roux", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Primer operates in the FinTech sector with a Growth funding profile (£128M). Their core architecture leverages Unified intelligence for payments, AI, Cloud.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Unified intelligence for payments, AI, Cloud", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Primer Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Primer"
    }
  },

  {
    id: 'nutmeg',
    name: "Nutmeg",
    slug: 'nutmeg',
    tagline: "Nutmeg Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Public",
    fundingAmount: "£126M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://personalinvesting.jpmorgan.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Java","Kotlin"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["DynamoDB"],
      infrastructure: ["Kubernetes","Kafka"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'nutmeg', label: "Nutmeg", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Sanjiv Somani", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Nutmeg operates in the FinTech sector with a Exited funding profile (£126M). Their core architecture leverages Java, Springboot, Kotlin, DynamoDB, Aurora/MySQL, AWS, Kubernetes, Kafka.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Java, Springboot, Kotlin, DynamoDB, Aurora/MySQL, AWS, Kubernetes, Kafka", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Nutmeg Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Nutmeg"
    }
  },

  {
    id: 'currencycloud',
    name: "Currencycloud",
    slug: 'currencycloud',
    tagline: "Currencycloud Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£125M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://currencycloud.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'currencycloud', label: "Currencycloud", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Ledsham", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Currencycloud operates in the FinTech sector with a Established funding profile (£125M). Their core architecture leverages NetSuite, Salesforce, Spark, APIs, SDKs.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: NetSuite, Salesforce, Spark, APIs, SDKs", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Currencycloud Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Currencycloud"
    }
  },

  {
    id: 'fly-now-pay-later',
    name: "Fly Now Pay Later",
    slug: 'fly-now-pay-later',
    tagline: "Fly Now Pay Later Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Public",
    fundingAmount: "£122M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://flynowpaylater.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'fly-now-pay-later', label: "Fly Now Pay Later", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Jasper Dykes", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Fly Now Pay Later operates in the FinTech sector with a Exited funding profile (£122M). Their core architecture leverages MySQL, Moment.js, cdnjs.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: MySQL, Moment.js, cdnjs", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Fly Now Pay Later Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Fly Now Pay Later"
    }
  },

  {
    id: 'kroo',
    name: "Kroo",
    slug: 'kroo',
    tagline: "Kroo Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£121M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://getkroo.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'kroo', label: "Kroo", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Veronika Lovett", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Kroo operates in the FinTech sector with a Growth funding profile (£121M). Their core architecture leverages Procore, AI, Data Connectors.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: Procore, AI, Data Connectors", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Kroo Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Kroo"
    }
  },

  {
    id: 'freetrade',
    name: "Freetrade",
    slug: 'freetrade',
    tagline: "Freetrade Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£120M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://freetrade.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","Typescript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["Postgres"],
      infrastructure: ["Terraform"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'freetrade', label: "Freetrade", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Viktor Nebehaj", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Freetrade operates in the FinTech sector with a Growth funding profile (£120M). Their core architecture leverages BigQuery, Cloud Functions, DBT, Looker, Terraform, Python, Typescript, Cloud Scheduler, Postgres.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: BigQuery, Cloud Functions, DBT, Looker, Terraform, Python, Typescript, Cloud Scheduler, Postgres", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Freetrade Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Freetrade"
    }
  },

  {
    id: 'redcloud',
    name: "RedCloud",
    slug: 'redcloud',
    tagline: "RedCloud Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£119M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://redcloudtechnology.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'redcloud', label: "RedCloud", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Justin Floyd", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "RedCloud operates in the FinTech sector with a Growth funding profile (£119M). Their core architecture leverages RedAI, Machine Learning, Cloud.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: RedAI, Machine Learning, Cloud", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "RedCloud Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for RedCloud"
    }
  },

  {
    id: 'codat',
    name: "Codat",
    slug: 'codat',
    tagline: "Codat Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£118M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://codat.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'codat', label: "Codat", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Peter Lord", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Codat operates in the FinTech sector with a Growth funding profile (£118M). Their core architecture leverages APIs, Infrastructure for data sharing.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: APIs, Infrastructure for data sharing", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Codat Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Codat"
    }
  },

  {
    id: 'finbourne',
    name: "FINBOURNE",
    slug: 'finbourne',
    tagline: "FINBOURNE Engineering Intelligence Profile",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "£117M",
    employees: '50-100',
    headquarters: "London, UK",
    country: "United Kingdom",
    founded: '2020',
    website: "https://finbourne.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'finbourne', label: "FINBOURNE", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Tom", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "FINBOURNE operates in the FinTech sector with a Growth funding profile (£117M). Their core architecture leverages EDM+, Luminesce, AI.\n\n**Architecture Signals & Scaling Risks**: TBD (Ready for Technical Diagnostics Pipeline)",
    verifiedPublicInfo: ["Tech Stack: EDM+, Luminesce, AI", "Scaling Risks: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "FINBOURNE Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for FINBOURNE"
    }
  },

  {
    id: 'carta',
    name: "Carta",
    slug: 'carta',
    tagline: "Data scaling issues, secondary sales infrastructure",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Late Stage",
    fundingAmount: "$1.16B",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://carta.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Java","Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'carta', label: "Carta", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Henry Ward", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Carta operates in the FinTech / Equity Management sector with a Series G funding profile ($1.16B). Their core architecture leverages ReactJS, Java, Python, Distributed Systems.\n\n**Architecture Signals & Scaling Risks**: Data scaling issues, secondary sales infrastructure",
    verifiedPublicInfo: ["Tech Stack: ReactJS, Java, Python, Distributed Systems", "Scaling Risks: Data scaling issues, secondary sales infrastructure"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Carta Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Carta"
    }
  },

  {
    id: 'dave',
    name: "Dave",
    slug: 'dave',
    tagline: "AI-led underwriting, scaling demand",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Public",
    fundingAmount: "$163.6M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://dave.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'dave', label: "Dave", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Jason Wilk", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Dave operates in the FinTech / Banking Tech sector with a Post IPO funding profile ($163.6M). Their core architecture leverages AI, Front End Infrastructure, Fullstack.\n\n**Architecture Signals & Scaling Risks**: AI-led underwriting, scaling demand",
    verifiedPublicInfo: ["Tech Stack: AI, Front End Infrastructure, Fullstack", "Scaling Risks: AI-led underwriting, scaling demand"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Dave Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Dave"
    }
  },

  {
    id: 'intercom',
    name: "Intercom",
    slug: 'intercom',
    tagline: "AI integration, scaling throughput",
    logo: '⚡',
    industry: 'DevTools',
    funding: "Public",
    fundingAmount: "$291.9M",
    employees: '50-100',
    headquarters: "San Francisco, USA",
    country: "United States",
    founded: '2020',
    website: "https://intercom.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'intercom', label: "Intercom", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Eoghan McCabe", role: "CEO" }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 92,
      cloud: 88,
      security: 89,
      aiReadiness: 90,
      technicalDebt: 18,
      scalability: 90,
      performance: 91,
      reliability: 89,
      observability: 85,
      engineeringMaturity: 90,
      overallScore: 90
    },
    timeline: [],
    executiveSummary: "Intercom operates in the AI Chatbots Software / Customer Support sector with a Secondary Market funding profile ($291.9M). Their core architecture leverages React, AI, Messenger.\n\n**Architecture Signals & Scaling Risks**: AI integration, scaling throughput",
    verifiedPublicInfo: ["Tech Stack: React, AI, Messenger", "Scaling Risks: AI integration, scaling throughput"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Intercom Engineering Intelligence Report",
      description: "Architecture signals and scaling risks report for Intercom"
    }
  }
];
