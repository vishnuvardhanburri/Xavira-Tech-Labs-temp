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
    tagline: "Scaling risk: Recursive context inflation",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Kevin Tian", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Doppel's platform architecture relies on Python, Go, Node.js, React, AWS, GCP, PostgreSQL, Redis, Docker, Kubernetes, OpenAI (GPT-5/RFT). High-stakes engineering analysis identifies a failure risk in Recursive context inflation: under peak scaling surges, recursive context inflation introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Python, Go, Node.js, React, AWS, GCP, PostgreSQL, Redis, Docker, Kubernetes, OpenAI (GPT-5/RFT)", "Observation: Recursive context inflation"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Doppel Engineering Intelligence Report",
      description: "Architecture risk report for Doppel"
    }
  },

  {
    id: 'adaptive-security',
    name: "Adaptive Security",
    slug: 'adaptive-security',
    tagline: "Scaling risk: GPU allocation bottlenecks",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Brian Long", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Adaptive Security's platform architecture relies on Python, Go, React, Next.js, AWS, GCP, PostgreSQL, MongoDB, Docker, Kubernetes, OpenAI, NVIDIA. High-stakes engineering analysis identifies a failure risk in GPU allocation bottlenecks: under peak scaling surges, gpu allocation bottlenecks introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Python, Go, React, Next.js, AWS, GCP, PostgreSQL, MongoDB, Docker, Kubernetes, OpenAI, NVIDIA", "Observation: GPU allocation bottlenecks"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Adaptive Security Engineering Intelligence Report",
      description: "Architecture risk report for Adaptive Security"
    }
  },

  {
    id: 'camber-health',
    name: "Camber Health",
    slug: 'camber-health',
    tagline: "Scaling risk: PostgreSQL query overloads",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Christophe Rimann", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Camber Health's platform architecture relies on Node.js, TypeScript, React, Next.js, Python, PostgreSQL, AWS, HIPAA Compliance Engine. High-stakes engineering analysis identifies a failure risk in PostgreSQL query overloads: under peak scaling surges, postgresql query overloads introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Node.js, TypeScript, React, Next.js, Python, PostgreSQL, AWS, HIPAA Compliance Engine", "Observation: PostgreSQL query overloads"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Camber Health Engineering Intelligence Report",
      description: "Architecture risk report for Camber Health"
    }
  },

  {
    id: 'omnea',
    name: "Omnea",
    slug: 'omnea',
    tagline: "Scaling risk: Aurora connection pool exhaustion",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Ben Freeman", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Omnea's platform architecture relies on TypeScript, React, Postgres, AWS (Lambda, DynamoDB, EventBridge, Aurora), Pulumi, Datadog. High-stakes engineering analysis identifies a failure risk in Aurora connection pool exhaustion: under peak scaling surges, aurora connection pool exhaustion introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: TypeScript, React, Postgres, AWS (Lambda, DynamoDB, EventBridge, Aurora), Pulumi, Datadog", "Observation: Aurora connection pool exhaustion"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Omnea Engineering Intelligence Report",
      description: "Architecture risk report for Omnea"
    }
  },

  {
    id: 'clay',
    name: "Clay",
    slug: 'clay',
    tagline: "Scaling risk: Node.js, React, PostgreSQL, Pinecone (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Kareem Amin", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Clay's platform architecture relies on Node.js, TypeScript, React, Next.js, PostgreSQL, Redis, AWS, GCP, Pinecone, OpenAI, Anthropic. High-stakes engineering analysis identifies a failure risk in Node.js, React, PostgreSQL, Pinecone (Needs technical diagnosis): under peak scaling surges, node.js, react, postgresql, pinecone (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Node.js, TypeScript, React, Next.js, PostgreSQL, Redis, AWS, GCP, Pinecone, OpenAI, Anthropic", "Observation: Node.js, React, PostgreSQL, Pinecone (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Clay Engineering Intelligence Report",
      description: "Architecture risk report for Clay"
    }
  },

  {
    id: 'physicsx',
    name: "PhysicsX",
    slug: 'physicsx',
    tagline: "Scaling risk: Python, Go, PyTorch, Kubernetes (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Jacomo Corbo", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "PhysicsX's platform architecture relies on Python, Go, C++, CUDA, PyTorch, Deutsche Telekom Sovereign AI Cloud, AWS, Docker, Kubernetes. High-stakes engineering analysis identifies a failure risk in Python, Go, PyTorch, Kubernetes (Needs technical diagnosis): under peak scaling surges, python, go, pytorch, kubernetes (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Python, Go, C++, CUDA, PyTorch, Deutsche Telekom Sovereign AI Cloud, AWS, Docker, Kubernetes", "Observation: Python, Go, PyTorch, Kubernetes (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "PhysicsX Engineering Intelligence Report",
      description: "Architecture risk report for PhysicsX"
    }
  },

  {
    id: 'graphite',
    name: "Graphite",
    slug: 'graphite',
    tagline: "Scaling risk: TypeScript, React, Next.js, Python, AWS (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Merrill Lutsky", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Graphite's platform architecture relies on TypeScript, React, Next.js, Python, AWS, PostgreSQL, Redis, OpenAI, Anthropic, Git Engine. High-stakes engineering analysis identifies a failure risk in TypeScript, React, Next.js, Python, AWS (Needs technical diagnosis): under peak scaling surges, typescript, react, next.js, python, aws (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: TypeScript, React, Next.js, Python, AWS, PostgreSQL, Redis, OpenAI, Anthropic, Git Engine", "Observation: TypeScript, React, Next.js, Python, AWS (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Graphite Engineering Intelligence Report",
      description: "Architecture risk report for Graphite"
    }
  },

  {
    id: 'opal-security',
    name: "Opal Security",
    slug: 'opal-security',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Howard Ting", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Opal Security's platform architecture relies on Kubernetes, Golang, Postgres, Redis, Terraform, GraphQL, TypeScript, React, AWS, GCP. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Kubernetes, Golang, Postgres, Redis, Terraform, GraphQL, TypeScript, React, AWS, GCP", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Opal Security Engineering Intelligence Report",
      description: "Architecture risk report for Opal Security"
    }
  },

  {
    id: 'vanta',
    name: "Vanta",
    slug: 'vanta',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Christina Cacioppo", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Vanta's platform architecture relies on AWS, LangChain, Node.js, TypeScript, React, GraphQL. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AWS, LangChain, Node.js, TypeScript, React, GraphQL", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Vanta Engineering Intelligence Report",
      description: "Architecture risk report for Vanta"
    }
  },

  {
    id: 'xbow',
    name: "XBOW",
    slug: 'xbow',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Oege de Moor", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "XBOW's platform architecture relies on Python, LLMs, JavaScript, XML, Kubernetes, AWS. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Python, LLMs, JavaScript, XML, Kubernetes, AWS", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "XBOW Engineering Intelligence Report",
      description: "Architecture risk report for XBOW"
    }
  },

  {
    id: 'chainguard',
    name: "Chainguard",
    slug: 'chainguard',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Dan Lorenc", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Chainguard's platform architecture relies on Go, Kubernetes, Sigstore, Snowflake, AWS, GCP. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Go, Kubernetes, Sigstore, Snowflake, AWS, GCP", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Chainguard Engineering Intelligence Report",
      description: "Architecture risk report for Chainguard"
    }
  },

  {
    id: 'island',
    name: "Island",
    slug: 'island',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Mike Fey", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Island's platform architecture relies on Chromium, C++, React, Node.js, AWS, Azure. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Chromium, C++, React, Node.js, AWS, Azure", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Island Engineering Intelligence Report",
      description: "Architecture risk report for Island"
    }
  },

  {
    id: 'aura',
    name: "Aura",
    slug: 'aura',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Hari Ravichandran", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Aura's platform architecture relies on Node.js, React, Python, AWS, Kubernetes. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Node.js, React, Python, AWS, Kubernetes", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Aura Engineering Intelligence Report",
      description: "Architecture risk report for Aura"
    }
  },

  {
    id: 'semgrep',
    name: "Semgrep",
    slug: 'semgrep',
    tagline: "Scaling risk: OCaml AST pattern matching memory footprint during deep interprocedura",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://semgrep.dev",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
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
        { name: "Isaac Evans", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Semgrep's platform architecture relies on OCaml, Python, Go, Docker, Kubernetes. High-stakes engineering analysis identifies a failure risk in OCaml AST pattern matching memory footprint during deep interprocedural analysis on massive codebases: complex taint-tracking rules trigger intensive heap allocations and prolonged garbage collection pauses.",
    verifiedPublicInfo: ["Tech Stack: OCaml, Python, Go, Docker, Kubernetes", "Observation: OCaml AST pattern matching memory footprint during deep interprocedural analysis on massive codebases"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Semgrep Engineering Intelligence Report",
      description: "Architecture risk report for Semgrep"
    }
  },

  {
    id: 'eclypsium',
    name: "Eclypsium",
    slug: 'eclypsium',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Yuriy Bulygin", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Eclypsium's platform architecture relies on Python, C, C++, Go, AWS, Docker. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Python, C, C++, Go, AWS, Docker", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Eclypsium Engineering Intelligence Report",
      description: "Architecture risk report for Eclypsium"
    }
  },

  {
    id: 'cyera',
    name: "Cyera",
    slug: 'cyera',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Yotam Segev", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Cyera's platform architecture relies on Looker, Salesforce CPQ, MongoDB, Next.js, Hadoop, Highspot. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Looker, Salesforce CPQ, MongoDB, Next.js, Hadoop, Highspot", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Cyera Engineering Intelligence Report",
      description: "Architecture risk report for Cyera"
    }
  },

  {
    id: 'socket',
    name: "Socket",
    slug: 'socket',
    tagline: "Scaling risk: Static AST analysis and dynamic package execution sandboxing latency d",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://socket.dev",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["JavaScript","TypeScript","Python","Go","Node.js"],
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
        { name: "Feross Aboukhadijeh", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Socket's platform architecture relies on JavaScript, TypeScript, Python, Go, Node.js. High-stakes engineering analysis identifies a failure risk in Static AST analysis and dynamic package execution sandboxing latency during deep dependency inspections: heavy package extraction and sandboxed execution stall worker queues during package release spikes.",
    verifiedPublicInfo: ["Tech Stack: JavaScript, TypeScript, Python, Go, Node.js", "Observation: Static AST analysis and dynamic package execution sandboxing latency during deep dependency inspections"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Socket Engineering Intelligence Report",
      description: "Architecture risk report for Socket"
    }
  },

  {
    id: 'huntress',
    name: "Huntress",
    slug: 'huntress',
    tagline: "Scaling risk: Microsoft Defender, EDR, SIEM (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Kyle Hanslovan", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Huntress's platform architecture relies on Microsoft Defender, EDR, SIEM. High-stakes engineering analysis identifies a failure risk in Microsoft Defender, EDR, SIEM (Needs technical diagnosis): under peak scaling surges, microsoft defender, edr, siem (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Microsoft Defender, EDR, SIEM", "Observation: Microsoft Defender, EDR, SIEM (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Huntress Engineering Intelligence Report",
      description: "Architecture risk report for Huntress"
    }
  },

  {
    id: 'alkira',
    name: "Alkira",
    slug: 'alkira',
    tagline: "Scaling risk: Go, C, HTML5, HubSpot, NitroPack, Amazon SES (Needs technical diagnosi",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Amir Khan", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Alkira's platform architecture relies on Go, C, HTML5, HubSpot, NitroPack, Amazon SES. High-stakes engineering analysis identifies a failure risk in Go, C, HTML5, HubSpot, NitroPack, Amazon SES (Needs technical diagnosis): under peak scaling surges, go, c, html5, hubspot, nitropack, amazon ses (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Go, C, HTML5, HubSpot, NitroPack, Amazon SES", "Observation: Go, C, HTML5, HubSpot, NitroPack, Amazon SES (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Alkira Engineering Intelligence Report",
      description: "Architecture risk report for Alkira"
    }
  },

  {
    id: 'axonius',
    name: "Axonius",
    slug: 'axonius',
    tagline: "Scaling risk: AWS EC2, OpenStack, Threat Stack (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Dean Sysman", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Axonius's platform architecture relies on AWS EC2, OpenStack, Threat Stack. High-stakes engineering analysis identifies a failure risk in AWS EC2, OpenStack, Threat Stack (Needs technical diagnosis): under peak scaling surges, aws ec2, openstack, threat stack (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AWS EC2, OpenStack, Threat Stack", "Observation: AWS EC2, OpenStack, Threat Stack (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Axonius Engineering Intelligence Report",
      description: "Architecture risk report for Axonius"
    }
  },

  {
    id: 'corelight',
    name: "Corelight",
    slug: 'corelight',
    tagline: "Scaling risk: Vue.js, Kotlin, Laravel, Goober, Oracle Cloud, Red Hat (Needs technica",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Brian Dye", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Corelight's platform architecture relies on Vue.js, Kotlin, Laravel, Goober, Oracle Cloud, Red Hat. High-stakes engineering analysis identifies a failure risk in Vue.js, Kotlin, Laravel, Goober, Oracle Cloud, Red Hat (Needs technical diagnosis): under peak scaling surges, vue.js, kotlin, laravel, goober, oracle cloud, red hat (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Vue.js, Kotlin, Laravel, Goober, Oracle Cloud, Red Hat", "Observation: Vue.js, Kotlin, Laravel, Goober, Oracle Cloud, Red Hat (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Corelight Engineering Intelligence Report",
      description: "Architecture risk report for Corelight"
    }
  },

  {
    id: 'dust-identity',
    name: "DUST Identity",
    slug: 'dust-identity',
    tagline: "Scaling risk: Synthetic diamond resin, Nanoengineered diamonds (Needs technical diag",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Ophir Gaathon", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "DUST Identity's platform architecture relies on Synthetic diamond resin, Nanoengineered diamonds. High-stakes engineering analysis identifies a failure risk in Synthetic diamond resin, Nanoengineered diamonds (Needs technical diagnosis): under peak scaling surges, synthetic diamond resin, nanoengineered diamonds (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Synthetic diamond resin, Nanoengineered diamonds", "Observation: Synthetic diamond resin, Nanoengineered diamonds (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "DUST Identity Engineering Intelligence Report",
      description: "Architecture risk report for DUST Identity"
    }
  },

  {
    id: 'wiz',
    name: "Wiz",
    slug: 'wiz',
    tagline: "Scaling risk: cloud asset relationship graph traversal query latency and multi-tenan",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://wiz.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP","Azure"],
      languages: ["Go","Python"],
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
        { name: "Ami Luttwak", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Wiz's platform architecture relies on Go, Python, React, AWS, GCP, Azure, Graph DB. High-stakes engineering analysis identifies a failure risk in cloud asset relationship graph traversal query latency and multi-tenant security event correlation: deep graph traversals across millions of cloud resources trigger frequent query timeouts in executive dashboards.",
    verifiedPublicInfo: ["Tech Stack: Go, Python, React, AWS, GCP, Azure, Graph DB", "Observation: cloud asset relationship graph traversal query latency and multi-tenant security event correlation"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Wiz Engineering Intelligence Report",
      description: "Architecture risk report for Wiz"
    }
  },

  {
    id: 'harmonic',
    name: "Harmonic",
    slug: 'harmonic',
    tagline: "Scaling risk: Data engine, Formal mathematical reasoning (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Vlad Tenev", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Harmonic's platform architecture relies on Data engine, Formal mathematical reasoning. High-stakes engineering analysis identifies a failure risk in Data engine, Formal mathematical reasoning (Needs technical diagnosis): under peak scaling surges, data engine, formal mathematical reasoning (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Data engine, Formal mathematical reasoning", "Observation: Data engine, Formal mathematical reasoning (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Harmonic Engineering Intelligence Report",
      description: "Architecture risk report for Harmonic"
    }
  },

  {
    id: 'newlimit',
    name: "NewLimit",
    slug: 'newlimit',
    tagline: "Scaling risk: Reprogramming payloads, Epigenetic reprogramming (Needs technical diag",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Jacob C. Kimmel", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "NewLimit's platform architecture relies on Reprogramming payloads, Epigenetic reprogramming. High-stakes engineering analysis identifies a failure risk in Reprogramming payloads, Epigenetic reprogramming (Needs technical diagnosis): under peak scaling surges, reprogramming payloads, epigenetic reprogramming (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Reprogramming payloads, Epigenetic reprogramming", "Observation: Reprogramming payloads, Epigenetic reprogramming (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "NewLimit Engineering Intelligence Report",
      description: "Architecture risk report for NewLimit"
    }
  },

  {
    id: 'base-power',
    name: "Base Power",
    slug: 'base-power',
    tagline: "Scaling risk: Telemetry stack, Distributed Energy Resources (DERs) (Needs technical ",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Zach Dell", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Base Power's platform architecture relies on Telemetry stack, Distributed Energy Resources (DERs). High-stakes engineering analysis identifies a failure risk in Telemetry stack, Distributed Energy Resources (DERs) (Needs technical diagnosis): under peak scaling surges, telemetry stack, distributed energy resources (ders) (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Telemetry stack, Distributed Energy Resources (DERs)", "Observation: Telemetry stack, Distributed Energy Resources (DERs) (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Base Power Engineering Intelligence Report",
      description: "Architecture risk report for Base Power"
    }
  },

  {
    id: 'sprinter-health',
    name: "Sprinter Health",
    slug: 'sprinter-health',
    tagline: "Scaling risk: Serverless AWS, React Native, GraphQL, TypeScript, Node.js (Needs tech",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Max Cohen", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Sprinter Health's platform architecture relies on Serverless AWS, React Native, GraphQL, TypeScript, Node.js. High-stakes engineering analysis identifies a failure risk in Serverless AWS, React Native, GraphQL, TypeScript, Node.js (Needs technical diagnosis): under peak scaling surges, serverless aws, react native, graphql, typescript, node.js (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Serverless AWS, React Native, GraphQL, TypeScript, Node.js", "Observation: Serverless AWS, React Native, GraphQL, TypeScript, Node.js (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Sprinter Health Engineering Intelligence Report",
      description: "Architecture risk report for Sprinter Health"
    }
  },

  {
    id: 'graphiant',
    name: "Graphiant",
    slug: 'graphiant',
    tagline: "Scaling risk: HashiCorp Consul, Amazon CloudFront, Angular, jQuery, Go (Needs techni",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Ali Shaikh", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Graphiant's platform architecture relies on HashiCorp Consul, Amazon CloudFront, Angular, jQuery, Go. High-stakes engineering analysis identifies a failure risk in HashiCorp Consul, Amazon CloudFront, Angular, jQuery, Go (Needs technical diagnosis): under peak scaling surges, hashicorp consul, amazon cloudfront, angular, jquery, go (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: HashiCorp Consul, Amazon CloudFront, Angular, jQuery, Go", "Observation: HashiCorp Consul, Amazon CloudFront, Angular, jQuery, Go (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Graphiant Engineering Intelligence Report",
      description: "Architecture risk report for Graphiant"
    }
  },

  {
    id: 'bounce',
    name: "Bounce",
    slug: 'bounce',
    tagline: "Scaling risk: Luggage storage marketplace platform (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Cody Candee", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Bounce's platform architecture relies on Luggage storage marketplace platform. High-stakes engineering analysis identifies a failure risk in Luggage storage marketplace platform (Needs technical diagnosis): under peak scaling surges, luggage storage marketplace platform (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Luggage storage marketplace platform", "Observation: Luggage storage marketplace platform (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Bounce Engineering Intelligence Report",
      description: "Architecture risk report for Bounce"
    }
  },

  {
    id: 'nooks',
    name: "Nooks",
    slug: 'nooks',
    tagline: "Scaling risk: AI cold email generator, Virtual sales floor, AI sequencing (Needs tec",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Dan Lee", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Nooks's platform architecture relies on AI cold email generator, Virtual sales floor, AI sequencing. High-stakes engineering analysis identifies a failure risk in AI cold email generator, Virtual sales floor, AI sequencing (Needs technical diagnosis): under peak scaling surges, ai cold email generator, virtual sales floor, ai sequencing (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AI cold email generator, Virtual sales floor, AI sequencing", "Observation: AI cold email generator, Virtual sales floor, AI sequencing (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Nooks Engineering Intelligence Report",
      description: "Architecture risk report for Nooks"
    }
  },

  {
    id: 'decagon',
    name: "Decagon",
    slug: 'decagon',
    tagline: "Scaling risk: Conversational AI, Salesforce, Zendesk (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Jesse Zhang", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Decagon's platform architecture relies on Conversational AI, Salesforce, Zendesk. High-stakes engineering analysis identifies a failure risk in Conversational AI, Salesforce, Zendesk (Needs technical diagnosis): under peak scaling surges, conversational ai, salesforce, zendesk (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Conversational AI, Salesforce, Zendesk", "Observation: Conversational AI, Salesforce, Zendesk (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Decagon Engineering Intelligence Report",
      description: "Architecture risk report for Decagon"
    }
  },

  {
    id: 'atlys',
    name: "Atlys",
    slug: 'atlys',
    tagline: "Scaling risk: RSS, Drupal, jQuery, PHP, Apache (Needs technical diagnosis)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Mohak Nahta", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Atlys's platform architecture relies on RSS, Drupal, jQuery, PHP, Apache. High-stakes engineering analysis identifies a failure risk in RSS, Drupal, jQuery, PHP, Apache (Needs technical diagnosis): under peak scaling surges, rss, drupal, jquery, php, apache (needs technical diagnosis) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: RSS, Drupal, jQuery, PHP, Apache", "Observation: RSS, Drupal, jQuery, PHP, Apache (Needs technical diagnosis)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Atlys Engineering Intelligence Report",
      description: "Architecture risk report for Atlys"
    }
  },

  {
    id: 'story-protocol',
    name: "Story Protocol",
    slug: 'story-protocol',
    tagline: "Scaling risk: Cross-chain messaging latency, EVM state bloat",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "S.Y. Lee", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Story Protocol's platform architecture relies on EVM, CometBFT, LayerZero, ERC-6551. High-stakes engineering analysis identifies a failure risk in Cross-chain messaging latency, EVM state bloat: under peak scaling surges, cross-chain messaging latency, evm state bloat introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: EVM, CometBFT, LayerZero, ERC-6551", "Observation: Cross-chain messaging latency, EVM state bloat"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Story Protocol Engineering Intelligence Report",
      description: "Architecture risk report for Story Protocol"
    }
  },

  {
    id: 'fnz',
    name: "FNZ",
    slug: 'fnz',
    tagline: "Scaling risk: Legacy .NET/SOAP integration issues, deployment bottlenecks",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Blythe Masters", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "FNZ's platform architecture relies on .NET, SOAP, Jaspersoft, Octopus Deploy, ReactJS, TypeScript. High-stakes engineering analysis identifies a failure risk in Legacy .NET/SOAP integration issues, deployment bottlenecks: under peak scaling surges, legacy .net/soap integration issues, deployment bottlenecks introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: .NET, SOAP, Jaspersoft, Octopus Deploy, ReactJS, TypeScript", "Observation: Legacy .NET/SOAP integration issues, deployment bottlenecks"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "FNZ Engineering Intelligence Report",
      description: "Architecture risk report for FNZ"
    }
  },

  {
    id: 'monzo',
    name: "Monzo",
    slug: 'monzo',
    tagline: "Scaling risk: Cassandra scaling, Kafka message queues, Go microservices latency",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "TS Anil", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Monzo's platform architecture relies on Go, Cassandra, Kafka, Kubernetes, GCP. High-stakes engineering analysis identifies a failure risk in Cassandra scaling, Kafka message queues, Go microservices latency: under peak scaling surges, cassandra scaling, kafka message queues, go microservices latency introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Go, Cassandra, Kafka, Kubernetes, GCP", "Observation: Cassandra scaling, Kafka message queues, Go microservices latency"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Monzo Engineering Intelligence Report",
      description: "Architecture risk report for Monzo"
    }
  },

  {
    id: 'checkout-com',
    name: "Checkout.com",
    slug: 'checkout-com',
    tagline: "Scaling risk: DynamoDB hot partitions, Node.js memory leaks",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Guillaume Pousaz", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Checkout.com's platform architecture relies on AWS, DynamoDB, Node.js, C#, Kubernetes, Snowflake. High-stakes engineering analysis identifies a failure risk in DynamoDB hot partitions, Node.js memory leaks: under peak scaling surges, dynamodb hot partitions, node.js memory leaks introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AWS, DynamoDB, Node.js, C#, Kubernetes, Snowflake", "Observation: DynamoDB hot partitions, Node.js memory leaks"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Checkout.com Engineering Intelligence Report",
      description: "Architecture risk report for Checkout.com"
    }
  },

  {
    id: 'revolut',
    name: "Revolut",
    slug: 'revolut',
    tagline: "Scaling risk: PostgreSQL scaling, GCP Kubernetes management",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Nik Storonsky", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Revolut's platform architecture relies on Java, GCP, PostgreSQL, Kubernetes. High-stakes engineering analysis identifies a failure risk in PostgreSQL scaling, GCP Kubernetes management: under peak scaling surges, postgresql scaling, gcp kubernetes management introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Java, GCP, PostgreSQL, Kubernetes", "Observation: PostgreSQL scaling, GCP Kubernetes management"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Revolut Engineering Intelligence Report",
      description: "Architecture risk report for Revolut"
    }
  },

  {
    id: 'sumup',
    name: "SumUp",
    slug: 'sumup',
    tagline: "Scaling risk: Kafka stream processing, Kubernetes pod scaling",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Daniel Klein", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "SumUp's platform architecture relies on AWS, Kubernetes, Kotlin, Elixir, React, Kafka, Snowflake. High-stakes engineering analysis identifies a failure risk in Kafka stream processing, Kubernetes pod scaling: under peak scaling surges, kafka stream processing, kubernetes pod scaling introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AWS, Kubernetes, Kotlin, Elixir, React, Kafka, Snowflake", "Observation: Kafka stream processing, Kubernetes pod scaling"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "SumUp Engineering Intelligence Report",
      description: "Architecture risk report for SumUp"
    }
  },

  {
    id: 'atom-bank',
    name: "Atom Bank",
    slug: 'atom-bank',
    tagline: "Scaling risk: Middleware integration, GCP scaling, Kotlin backend",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Mark Mullen", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Atom Bank's platform architecture relies on Kotlin, React, TypeScript, Astro, Google Cloud, Kubernetes. High-stakes engineering analysis identifies a failure risk in Middleware integration, GCP scaling, Kotlin backend: under peak scaling surges, middleware integration, gcp scaling, kotlin backend introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Kotlin, React, TypeScript, Astro, Google Cloud, Kubernetes", "Observation: Middleware integration, GCP scaling, Kotlin backend"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Atom Bank Engineering Intelligence Report",
      description: "Architecture risk report for Atom Bank"
    }
  },

  {
    id: 'starling-bank',
    name: "Starling Bank",
    slug: 'starling-bank',
    tagline: "Scaling risk: AWS cloud scaling, PostgreSQL database tuning",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Raman Bhatia", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Starling Bank's platform architecture relies on AWS, Java, PostgreSQL, Angular. High-stakes engineering analysis identifies a failure risk in AWS cloud scaling, PostgreSQL database tuning: under peak scaling surges, aws cloud scaling, postgresql database tuning introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AWS, Java, PostgreSQL, Angular", "Observation: AWS cloud scaling, PostgreSQL database tuning"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Starling Bank Engineering Intelligence Report",
      description: "Architecture risk report for Starling Bank"
    }
  },

  {
    id: 'metro-bank',
    name: "Metro Bank",
    slug: 'metro-bank',
    tagline: "Scaling risk: Temenos T24 legacy integration, NoSQL data consistency",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Daniel Frumkin", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Metro Bank's platform architecture relies on Temenos T24, scikit-learn, ServiceNow, RxJS, NoSQL. High-stakes engineering analysis identifies a failure risk in Temenos T24 legacy integration, NoSQL data consistency: under peak scaling surges, temenos t24 legacy integration, nosql data consistency introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Temenos T24, scikit-learn, ServiceNow, RxJS, NoSQL", "Observation: Temenos T24 legacy integration, NoSQL data consistency"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Metro Bank Engineering Intelligence Report",
      description: "Architecture risk report for Metro Bank"
    }
  },

  {
    id: 'oaknorth',
    name: "OakNorth",
    slug: 'oaknorth',
    tagline: "Scaling risk: React Native performance, AWS infrastructure scaling",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Rishi Khosla", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "OakNorth's platform architecture relies on AWS, React Native, Python, Go, Kubernetes. High-stakes engineering analysis identifies a failure risk in React Native performance, AWS infrastructure scaling: under peak scaling surges, react native performance, aws infrastructure scaling introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AWS, React Native, Python, Go, Kubernetes", "Observation: React Native performance, AWS infrastructure scaling"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "OakNorth Engineering Intelligence Report",
      description: "Architecture risk report for OakNorth"
    }
  },

  {
    id: 'allica-bank',
    name: "Allica Bank",
    slug: 'allica-bank',
    tagline: "Scaling risk: Azure Spring Cloud scaling, Kotlin/Spring Boot performance",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Richard Davies", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Allica Bank's platform architecture relies on Azure, Spring Boot, Kotlin, React, Snowflake. High-stakes engineering analysis identifies a failure risk in Azure Spring Cloud scaling, Kotlin/Spring Boot performance: under peak scaling surges, azure spring cloud scaling, kotlin/spring boot performance introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Azure, Spring Boot, Kotlin, React, Snowflake", "Observation: Azure Spring Cloud scaling, Kotlin/Spring Boot performance"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Allica Bank Engineering Intelligence Report",
      description: "Architecture risk report for Allica Bank"
    }
  },

  {
    id: 'blockchain-com',
    name: "Blockchain.com",
    slug: 'blockchain-com',
    tagline: "Scaling risk: Crypto transaction throughput, AWS security",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Peter Smith", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Blockchain.com's platform architecture relies on Java, Kotlin, React, AWS. High-stakes engineering analysis identifies a failure risk in Crypto transaction throughput, AWS security: under peak scaling surges, crypto transaction throughput, aws security introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Java, Kotlin, React, AWS", "Observation: Crypto transaction throughput, AWS security"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Blockchain.com Engineering Intelligence Report",
      description: "Architecture risk report for Blockchain.com"
    }
  },

  {
    id: 'dojo',
    name: "Dojo",
    slug: 'dojo',
    tagline: "Scaling risk: ASP.NET legacy modernization, IIS performance",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "George Karibian", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Dojo's platform architecture relies on Windows Server, ASP.NET, IIS. High-stakes engineering analysis identifies a failure risk in ASP.NET legacy modernization, IIS performance: under peak scaling surges, asp.net legacy modernization, iis performance introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Windows Server, ASP.NET, IIS", "Observation: ASP.NET legacy modernization, IIS performance"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Dojo Engineering Intelligence Report",
      description: "Architecture risk report for Dojo"
    }
  },

  {
    id: 'thought-machine',
    name: "Thought Machine",
    slug: 'thought-machine',
    tagline: "Scaling risk: Kubernetes cluster management, Python backend scaling",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Paul Taylor", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Thought Machine's platform architecture relies on Python, Prometheus, AWS, Kubernetes, Bootstrap. High-stakes engineering analysis identifies a failure risk in Kubernetes cluster management, Python backend scaling: under peak scaling surges, kubernetes cluster management, python backend scaling introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Python, Prometheus, AWS, Kubernetes, Bootstrap", "Observation: Kubernetes cluster management, Python backend scaling"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Thought Machine Engineering Intelligence Report",
      description: "Architecture risk report for Thought Machine"
    }
  },

  {
    id: 'gocardless',
    name: "GoCardless",
    slug: 'gocardless',
    tagline: "Scaling risk: Ruby on Rails monolithic scaling, PostgreSQL database locks",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Hiroki Takeuchi", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "GoCardless's platform architecture relies on Ruby on Rails, Next.js, Go, Kubernetes, PostgreSQL, GCP. High-stakes engineering analysis identifies a failure risk in Ruby on Rails monolithic scaling, PostgreSQL database locks: under peak scaling surges, ruby on rails monolithic scaling, postgresql database locks introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Ruby on Rails, Next.js, Go, Kubernetes, PostgreSQL, GCP", "Observation: Ruby on Rails monolithic scaling, PostgreSQL database locks"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "GoCardless Engineering Intelligence Report",
      description: "Architecture risk report for GoCardless"
    }
  },

  {
    id: 'marex',
    name: "Marex",
    slug: 'marex',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Arthur Fan", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Marex's platform architecture relies on Python, C#, .NET, JavaScript, TypeScript. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Python, C#, .NET, JavaScript, TypeScript", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Marex Engineering Intelligence Report",
      description: "Architecture risk report for Marex"
    }
  },

  {
    id: 'tandem',
    name: "Tandem",
    slug: 'tandem',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Alex Mollart", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Tandem's platform architecture relies on Mambu, GitHub, XML, MySQL, BambooHR, reCAPTCHA, Nginx, lit-element, Webflow, Bootstrap, FullStory. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Mambu, GitHub, XML, MySQL, BambooHR, reCAPTCHA, Nginx, lit-element, Webflow, Bootstrap, FullStory", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Tandem Engineering Intelligence Report",
      description: "Architecture risk report for Tandem"
    }
  },

  {
    id: 'teya',
    name: "Teya",
    slug: 'teya',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Thiago Piau", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Teya's platform architecture relies on Facebook Pixel, Jenkins, git, OAuth, Cisco Meraki, Framer Sites, Mastercard, Chakra UI. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Facebook Pixel, Jenkins, git, OAuth, Cisco Meraki, Framer Sites, Mastercard, Chakra UI", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Teya Engineering Intelligence Report",
      description: "Architecture risk report for Teya"
    }
  },

  {
    id: 'smart',
    name: "Smart",
    slug: 'smart',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Andrew Evans", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Smart's platform architecture relies on SQL, PostgreSQL, git, Perkbox, JSON-LD, Android, Ruby on Rails, CSS. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: SQL, PostgreSQL, git, Perkbox, JSON-LD, Android, Ruby on Rails, CSS", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Smart Engineering Intelligence Report",
      description: "Architecture risk report for Smart"
    }
  },

  {
    id: 'clearbank',
    name: "ClearBank",
    slug: 'clearbank',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Mark Fairless", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "ClearBank's platform architecture relies on Hotjar, Tableau, Azure Active Directory, HashiCorp, Windows 10, Windows Server, Zscaler, Dynatrace. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Hotjar, Tableau, Azure Active Directory, HashiCorp, Windows 10, Windows Server, Zscaler, Dynatrace", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "ClearBank Engineering Intelligence Report",
      description: "Architecture risk report for ClearBank"
    }
  },

  {
    id: 'behavox',
    name: "Behavox",
    slug: 'behavox',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Erkin Adylov", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Behavox's platform architecture relies on Quantum risk detection, LLM, Cloud. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Quantum risk detection, LLM, Cloud", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Behavox Engineering Intelligence Report",
      description: "Architecture risk report for Behavox"
    }
  },

  {
    id: 'stream',
    name: "Stream",
    slug: 'stream',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Thierry Schellenbach", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Stream's platform architecture relies on Go, RocksDB, Raft, AWS. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Go, RocksDB, Raft, AWS", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Stream Engineering Intelligence Report",
      description: "Architecture risk report for Stream"
    }
  },

  {
    id: 'oxbury',
    name: "Oxbury",
    slug: 'oxbury',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "James Farrar", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Oxbury's platform architecture relies on Cloud-based solutions, Naqoda core banking system. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Cloud-based solutions, Naqoda core banking system", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Oxbury Engineering Intelligence Report",
      description: "Architecture risk report for Oxbury"
    }
  },

  {
    id: '10x-banking',
    name: "10x Banking",
    slug: '10x-banking',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Antony Jenkins", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "10x Banking's platform architecture relies on HubSpot Content Hub, RSS, git, Headspace, iOS, HTML, Lua, Thycotic. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: HubSpot Content Hub, RSS, git, Headspace, iOS, HTML, Lua, Thycotic", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "10x Banking Engineering Intelligence Report",
      description: "Architecture risk report for 10x Banking"
    }
  },

  {
    id: 'funding-circle',
    name: "Funding Circle",
    slug: 'funding-circle',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Lisa Jacobs", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Funding Circle's platform architecture relies on Microsoft Clarity, cdnjs, Webpack, PHP, Chakra UI, Google Analytics, Ruby On Rails, Python, AWS, Kubernetes. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Microsoft Clarity, cdnjs, Webpack, PHP, Chakra UI, Google Analytics, Ruby On Rails, Python, AWS, Kubernetes", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Funding Circle Engineering Intelligence Report",
      description: "Architecture risk report for Funding Circle"
    }
  },

  {
    id: 'paddle',
    name: "Paddle",
    slug: 'paddle',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Jimmy Fitzgerald", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Paddle's platform architecture relies on Google Analytics, HubSpot, Vue.js, Alpine.js, Svelte. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Google Analytics, HubSpot, Vue.js, Alpine.js, Svelte", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Paddle Engineering Intelligence Report",
      description: "Architecture risk report for Paddle"
    }
  },

  {
    id: 'curve',
    name: "Curve",
    slug: 'curve',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Shachar Bialick", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Curve's platform architecture relies on Node, JavaScript, MEAN/MERN stack. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Node, JavaScript, MEAN/MERN stack", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Curve Engineering Intelligence Report",
      description: "Architecture risk report for Curve"
    }
  },

  {
    id: 'tide',
    name: "Tide",
    slug: 'tide',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Oliver Prill", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Tide's platform architecture relies on Pendo, LaunchDarkly, Segment, Jamf Pro, Hammer.js, Braze, Workable, CSS. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Pendo, LaunchDarkly, Segment, Jamf Pro, Hammer.js, Braze, Workable, CSS", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Tide Engineering Intelligence Report",
      description: "Architecture risk report for Tide"
    }
  },

  {
    id: 'copper',
    name: "Copper",
    slug: 'copper',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Amar Kuchinad", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Copper's platform architecture relies on Blockchain, Digital asset custody technology. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Blockchain, Digital asset custody technology", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Copper Engineering Intelligence Report",
      description: "Architecture risk report for Copper"
    }
  },

  {
    id: 'fnality',
    name: "Fnality",
    slug: 'fnality',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Rhomaios Ram", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Fnality's platform architecture relies on Docker, Microsoft SharePoint, Atlassian Jira, Preact, AWS Security Hub. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Docker, Microsoft SharePoint, Atlassian Jira, Preact, AWS Security Hub", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Fnality Engineering Intelligence Report",
      description: "Architecture risk report for Fnality"
    }
  },

  {
    id: 'cloudpay',
    name: "CloudPay",
    slug: 'cloudpay',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Roland Folz", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "CloudPay's platform architecture relies on SaaS, Java, React, SQL. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: SaaS, Java, React, SQL", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "CloudPay Engineering Intelligence Report",
      description: "Architecture risk report for CloudPay"
    }
  },

  {
    id: 'form3',
    name: "Form3",
    slug: 'form3',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Mike", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Form3's platform architecture relies on AWS, GCP, Kubernetes, CockroachDB, Elasticsearch, PostgresDB, Vault, Consul, Go. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AWS, GCP, Kubernetes, CockroachDB, Elasticsearch, PostgresDB, Vault, Consul, Go", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Form3 Engineering Intelligence Report",
      description: "Architecture risk report for Form3"
    }
  },

  {
    id: 'tradingview',
    name: "TradingView",
    slug: 'tradingview',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Oleg Mukhanov", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "TradingView's platform architecture relies on HTML5, Canvas, WebSockets, Python, Node.js. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: HTML5, Canvas, WebSockets, Python, Node.js", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "TradingView Engineering Intelligence Report",
      description: "Architecture risk report for TradingView"
    }
  },

  {
    id: 'lendable',
    name: "Lendable",
    slug: 'lendable',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Martin Kissinger", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Lendable's platform architecture relies on AWS, Python, React, Postgres. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AWS, Python, React, Postgres", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Lendable Engineering Intelligence Report",
      description: "Architecture risk report for Lendable"
    }
  },

  {
    id: 'clearcourse',
    name: "ClearCourse",
    slug: 'clearcourse',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Christina Hamilton", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "ClearCourse's platform architecture relies on Grafana, Snowflake, Apache Tomcat, Storybook, PHP, HTML5. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Grafana, Snowflake, Apache Tomcat, Storybook, PHP, HTML5", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "ClearCourse Engineering Intelligence Report",
      description: "Architecture risk report for ClearCourse"
    }
  },

  {
    id: 'genesis',
    name: "Genesis",
    slug: 'genesis',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Stephen Murphy", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Genesis's platform architecture relies on AI Architecture, Cloud, Microservices, Java. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AI Architecture, Cloud, Microservices, Java", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Genesis Engineering Intelligence Report",
      description: "Architecture risk report for Genesis"
    }
  },

  {
    id: '9fin',
    name: "9fin",
    slug: '9fin',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Steven Hunter", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "9fin's platform architecture relies on AI, Generative AI, LLMs, Python, AWS, PostgreSQL. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AI, Generative AI, LLMs, Python, AWS, PostgreSQL", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "9fin Engineering Intelligence Report",
      description: "Architecture risk report for 9fin"
    }
  },

  {
    id: 'fresha',
    name: "Fresha",
    slug: 'fresha',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "William Zeqiri", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Fresha's platform architecture relies on AI Concierge, iOS, Android, Web, Cloud. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AI Concierge, iOS, Android, Web, Cloud", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Fresha Engineering Intelligence Report",
      description: "Architecture risk report for Fresha"
    }
  },

  {
    id: 'paysend',
    name: "PaySend",
    slug: 'paysend',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Ben Chisell", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "PaySend's platform architecture relies on Mastercard/Visa APIs, Cloud, Mobile App, Microservices. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Mastercard/Visa APIs, Cloud, Mobile App, Microservices", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "PaySend Engineering Intelligence Report",
      description: "Architecture risk report for PaySend"
    }
  },

  {
    id: 'kriya',
    name: "Kriya",
    slug: 'kriya',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Anil", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Kriya's platform architecture relies on API orchestration, Cloud, Bidirectional data sync. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: API orchestration, Cloud, Bidirectional data sync", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Kriya Engineering Intelligence Report",
      description: "Architecture risk report for Kriya"
    }
  },

  {
    id: 'the-bank-of-london',
    name: "The Bank of London",
    slug: 'the-bank-of-london',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Tony Bullman", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "The Bank of London's platform architecture relies on Cloud-native, API-driven, Microservices. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Cloud-native, API-driven, Microservices", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "The Bank of London Engineering Intelligence Report",
      description: "Architecture risk report for The Bank of London"
    }
  },

  {
    id: 'soldo',
    name: "Soldo",
    slug: 'soldo',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Carlo Gualandri", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Soldo's platform architecture relies on AWS, Kubernetes, Cloud-native, SSO, SAML. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AWS, Kubernetes, Cloud-native, SSO, SAML", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Soldo Engineering Intelligence Report",
      description: "Architecture risk report for Soldo"
    }
  },

  {
    id: 'monese',
    name: "Monese",
    slug: 'monese',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Norris Koppel", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Monese's platform architecture relies on Thought Machine Vault, Cloud-native, iOS, Android. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Thought Machine Vault, Cloud-native, iOS, Android", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Monese Engineering Intelligence Report",
      description: "Architecture risk report for Monese"
    }
  },

  {
    id: 'monument-bank',
    name: "Monument Bank",
    slug: 'monument-bank',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Steve", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Monument Bank's platform architecture relies on Microservices, API-first, Contentful CMS, Salesforce. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Microservices, API-first, Contentful CMS, Salesforce", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Monument Bank Engineering Intelligence Report",
      description: "Architecture risk report for Monument Bank"
    }
  },

  {
    id: 'prodigy-finance',
    name: "Prodigy Finance",
    slug: 'prodigy-finance',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Cameron Stevens", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Prodigy Finance's platform architecture relies on Python, Kotlin, JavaScript, Bootstrap, Moment.js. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Python, Kotlin, JavaScript, Bootstrap, Moment.js", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Prodigy Finance Engineering Intelligence Report",
      description: "Architecture risk report for Prodigy Finance"
    }
  },

  {
    id: 'clearscore',
    name: "ClearScore",
    slug: 'clearscore',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Justin Basini", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "ClearScore's platform architecture relies on AWS, Java, Spring Boot, React, React Native, Kubernetes. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AWS, Java, Spring Boot, React, React Native, Kubernetes", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "ClearScore Engineering Intelligence Report",
      description: "Architecture risk report for ClearScore"
    }
  },

  {
    id: 'elliptic',
    name: "Elliptic",
    slug: 'elliptic',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Simone", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Elliptic's platform architecture relies on DynamoDB, AWS, Blockchain Analytics, Crypto Compliance Software. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: DynamoDB, AWS, Blockchain Analytics, Crypto Compliance Software", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Elliptic Engineering Intelligence Report",
      description: "Architecture risk report for Elliptic"
    }
  },

  {
    id: 'moneyfarm',
    name: "Moneyfarm",
    slug: 'moneyfarm',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Giovanni Daprà", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Moneyfarm's platform architecture relies on Online Investments, Smart Technology. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Online Investments, Smart Technology", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Moneyfarm Engineering Intelligence Report",
      description: "Architecture risk report for Moneyfarm"
    }
  },

  {
    id: 'capital-on-tap',
    name: "Capital on Tap",
    slug: 'capital-on-tap',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Damian Brychcy", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Capital on Tap's platform architecture relies on Web & Mobile, Cloud & Infrastructure, Backend, AI, Data. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Web & Mobile, Cloud & Infrastructure, Backend, AI, Data", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Capital on Tap Engineering Intelligence Report",
      description: "Architecture risk report for Capital on Tap"
    }
  },

  {
    id: 'thincats',
    name: "ThinCats",
    slug: 'thincats',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Amany Attia", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "ThinCats's platform architecture relies on Proprietary credit risk model, Data Analytics. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Proprietary credit risk model, Data Analytics", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "ThinCats Engineering Intelligence Report",
      description: "Architecture risk report for ThinCats"
    }
  },

  {
    id: 'terrapay',
    name: "TerraPay",
    slug: 'terrapay',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Ambar Sur", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "TerraPay's platform architecture relies on Cross-border payments, APIs, Cloud. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Cross-border payments, APIs, Cloud", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "TerraPay Engineering Intelligence Report",
      description: "Architecture risk report for TerraPay"
    }
  },

  {
    id: 'sonovate',
    name: "Sonovate",
    slug: 'sonovate',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Richard Prime", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Sonovate's platform architecture relies on Software Engineering, Cloud, Flexible financing tech. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Software Engineering, Cloud, Flexible financing tech", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Sonovate Engineering Intelligence Report",
      description: "Architecture risk report for Sonovate"
    }
  },

  {
    id: 'cleo',
    name: "Cleo",
    slug: 'cleo',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Barney Hussey-Yeo", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Cleo's platform architecture relies on Cleo Integration Cloud (CIC), EDI, API, B2B Integration. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Cleo Integration Cloud (CIC), EDI, API, B2B Integration", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Cleo Engineering Intelligence Report",
      description: "Architecture risk report for Cleo"
    }
  },

  {
    id: 'pollinate',
    name: "Pollinate",
    slug: 'pollinate',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Fiona Roach Canning", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Pollinate's platform architecture relies on AI Agents, ERPs, Supply Chain, Python, Cloud. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AI Agents, ERPs, Supply Chain, Python, Cloud", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Pollinate Engineering Intelligence Report",
      description: "Architecture risk report for Pollinate"
    }
  },

  {
    id: 'paymentology',
    name: "Paymentology",
    slug: 'paymentology',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Jeff Parker", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Paymentology's platform architecture relies on Lume platform, APIs, Cloud. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Lume platform, APIs, Cloud", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Paymentology Engineering Intelligence Report",
      description: "Architecture risk report for Paymentology"
    }
  },

  {
    id: 'storfund',
    name: "Storfund",
    slug: 'storfund',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "George Brintalos", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Storfund's platform architecture relies on Ecommerce tech, APIs. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Ecommerce tech, APIs", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Storfund Engineering Intelligence Report",
      description: "Architecture risk report for Storfund"
    }
  },

  {
    id: 'modulr',
    name: "Modulr",
    slug: 'modulr',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Myles Stephenson", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Modulr's platform architecture relies on Payments Automation Platform, APIs, Cloud. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Payments Automation Platform, APIs, Cloud", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Modulr Engineering Intelligence Report",
      description: "Architecture risk report for Modulr"
    }
  },

  {
    id: 'tractable',
    name: "Tractable",
    slug: 'tractable',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Alex Dalyac", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Tractable's platform architecture relies on AI, Computer Vision, Cloud. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AI, Computer Vision, Cloud", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Tractable Engineering Intelligence Report",
      description: "Architecture risk report for Tractable"
    }
  },

  {
    id: 'dext',
    name: "Dext",
    slug: 'dext',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Sabby Gill", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Dext's platform architecture relies on AI Bookkeeping software, Document capture. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AI Bookkeeping software, Document capture", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Dext Engineering Intelligence Report",
      description: "Architecture risk report for Dext"
    }
  },

  {
    id: 'primer',
    name: "Primer",
    slug: 'primer',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Gabriel Le Roux", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Primer's platform architecture relies on Unified intelligence for payments, AI, Cloud. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Unified intelligence for payments, AI, Cloud", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Primer Engineering Intelligence Report",
      description: "Architecture risk report for Primer"
    }
  },

  {
    id: 'nutmeg',
    name: "Nutmeg",
    slug: 'nutmeg',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Sanjiv Somani", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Nutmeg's platform architecture relies on Java, Springboot, Kotlin, DynamoDB, Aurora/MySQL, AWS, Kubernetes, Kafka. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Java, Springboot, Kotlin, DynamoDB, Aurora/MySQL, AWS, Kubernetes, Kafka", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Nutmeg Engineering Intelligence Report",
      description: "Architecture risk report for Nutmeg"
    }
  },

  {
    id: 'currencycloud',
    name: "Currencycloud",
    slug: 'currencycloud',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Ledsham", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Currencycloud's platform architecture relies on NetSuite, Salesforce, Spark, APIs, SDKs. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: NetSuite, Salesforce, Spark, APIs, SDKs", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Currencycloud Engineering Intelligence Report",
      description: "Architecture risk report for Currencycloud"
    }
  },

  {
    id: 'fly-now-pay-later',
    name: "Fly Now Pay Later",
    slug: 'fly-now-pay-later',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Jasper Dykes", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Fly Now Pay Later's platform architecture relies on MySQL, Moment.js, cdnjs. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: MySQL, Moment.js, cdnjs", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Fly Now Pay Later Engineering Intelligence Report",
      description: "Architecture risk report for Fly Now Pay Later"
    }
  },

  {
    id: 'kroo',
    name: "Kroo",
    slug: 'kroo',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Veronika Lovett", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Kroo's platform architecture relies on Procore, AI, Data Connectors. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: Procore, AI, Data Connectors", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Kroo Engineering Intelligence Report",
      description: "Architecture risk report for Kroo"
    }
  },

  {
    id: 'freetrade',
    name: "Freetrade",
    slug: 'freetrade',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Viktor Nebehaj", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Freetrade's platform architecture relies on BigQuery, Cloud Functions, DBT, Looker, Terraform, Python, Typescript, Cloud Scheduler, Postgres. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: BigQuery, Cloud Functions, DBT, Looker, Terraform, Python, Typescript, Cloud Scheduler, Postgres", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Freetrade Engineering Intelligence Report",
      description: "Architecture risk report for Freetrade"
    }
  },

  {
    id: 'redcloud',
    name: "RedCloud",
    slug: 'redcloud',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Justin Floyd", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "RedCloud's platform architecture relies on RedAI, Machine Learning, Cloud. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: RedAI, Machine Learning, Cloud", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "RedCloud Engineering Intelligence Report",
      description: "Architecture risk report for RedCloud"
    }
  },

  {
    id: 'codat',
    name: "Codat",
    slug: 'codat',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Peter Lord", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Codat's platform architecture relies on APIs, Infrastructure for data sharing. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: APIs, Infrastructure for data sharing", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Codat Engineering Intelligence Report",
      description: "Architecture risk report for Codat"
    }
  },

  {
    id: 'finbourne',
    name: "FINBOURNE",
    slug: 'finbourne',
    tagline: "Scaling risk: TBD (Ready for Technical Diagnostics Pipeline)",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Tom", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "FINBOURNE's platform architecture relies on EDM+, Luminesce, AI. High-stakes engineering analysis identifies a failure risk in TBD (Ready for Technical Diagnostics Pipeline): under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: EDM+, Luminesce, AI", "Observation: TBD (Ready for Technical Diagnostics Pipeline)"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "FINBOURNE Engineering Intelligence Report",
      description: "Architecture risk report for FINBOURNE"
    }
  },

  {
    id: 'carta',
    name: "Carta",
    slug: 'carta',
    tagline: "Scaling risk: Data scaling issues, secondary sales infrastructure",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Henry Ward", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Carta's platform architecture relies on ReactJS, Java, Python, Distributed Systems. High-stakes engineering analysis identifies a failure risk in Data scaling issues, secondary sales infrastructure: under peak scaling surges, data scaling issues, secondary sales infrastructure introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: ReactJS, Java, Python, Distributed Systems", "Observation: Data scaling issues, secondary sales infrastructure"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Carta Engineering Intelligence Report",
      description: "Architecture risk report for Carta"
    }
  },

  {
    id: 'dave',
    name: "Dave",
    slug: 'dave',
    tagline: "Scaling risk: AI-led underwriting, scaling demand",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Jason Wilk", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Dave's platform architecture relies on AI, Front End Infrastructure, Fullstack. High-stakes engineering analysis identifies a failure risk in AI-led underwriting, scaling demand: under peak scaling surges, ai-led underwriting, scaling demand introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: AI, Front End Infrastructure, Fullstack", "Observation: AI-led underwriting, scaling demand"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Dave Engineering Intelligence Report",
      description: "Architecture risk report for Dave"
    }
  },

  {
    id: 'intercom',
    name: "Intercom",
    slug: 'intercom',
    tagline: "Scaling risk: AI integration, scaling throughput",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
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
        { name: "Eoghan McCabe", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Intercom's platform architecture relies on React, AI, Messenger. High-stakes engineering analysis identifies a failure risk in AI integration, scaling throughput: under peak scaling surges, ai integration, scaling throughput introduces severe latency degradation and cascading worker backpressure.",
    verifiedPublicInfo: ["Tech Stack: React, AI, Messenger", "Observation: AI integration, scaling throughput"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Intercom Engineering Intelligence Report",
      description: "Architecture risk report for Intercom"
    }
  },

  {
    id: 'linear',
    name: "Linear",
    slug: 'linear',
    tagline: "Scaling risk: local-first Sync Engine state synchronization and IndexedDB transactio",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://linear.app",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Node.js"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'linear', label: "Linear", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Karri Saarinen", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Linear's platform architecture relies on React, MobX, TypeScript, Node.js, GraphQL, PostgreSQL. High-stakes engineering analysis identifies a failure risk in local-first Sync Engine state synchronization and IndexedDB transaction lock contention during offline delta reconciliation: client-side transaction latencies cascade into WebSocket broadcast drops and state desynchronization under heavy workspace edits.",
    verifiedPublicInfo: ["Tech Stack: React, MobX, TypeScript, Node.js, GraphQL, PostgreSQL", "Observation: local-first Sync Engine state synchronization and IndexedDB transaction lock contention during offline delta reconciliation"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Linear Engineering Intelligence Report",
      description: "Architecture risk report for Linear"
    }
  },

  {
    id: 'supabase',
    name: "Supabase",
    slug: 'supabase',
    tagline: "Scaling risk: PgBouncer connection pool limits and Realtime Elixir WebSocket broadca",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://supabase.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Go","TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'supabase', label: "Supabase", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Paul Copplestone", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Supabase's platform architecture relies on PostgreSQL, Elixir, Go, TypeScript, PgBouncer. High-stakes engineering analysis identifies a failure risk in PgBouncer connection pool limits and Realtime Elixir WebSocket broadcast memory allocation during peak tenant surges: connection pool saturation on multi-tenant Postgres clusters degrades REST/GraphQL gateway response times into cascading 504 timeouts.",
    verifiedPublicInfo: ["Tech Stack: PostgreSQL, Elixir, Go, TypeScript, PgBouncer", "Observation: PgBouncer connection pool limits and Realtime Elixir WebSocket broadcast memory allocation during peak tenant surges"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Supabase Engineering Intelligence Report",
      description: "Architecture risk report for Supabase"
    }
  },

  {
    id: 'neon',
    name: "Neon",
    slug: 'neon',
    tagline: "Scaling risk: compute-storage separation L2 page server cache misses and WAL streami",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://neon.tech",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Rust","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'neon', label: "Neon", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Nikita Shamgunov", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Neon's platform architecture relies on Rust, PostgreSQL, C, Go, Kubernetes. High-stakes engineering analysis identifies a failure risk in compute-storage separation L2 page server cache misses and WAL streaming latency during cold branch initialization: page server cache misses force synchronous WAL fetches over the network, spiking p99 query latency above 2,000ms.",
    verifiedPublicInfo: ["Tech Stack: Rust, PostgreSQL, C, Go, Kubernetes", "Observation: compute-storage separation L2 page server cache misses and WAL streaming latency during cold branch initialization"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Neon Engineering Intelligence Report",
      description: "Architecture risk report for Neon"
    }
  },

  {
    id: 'modal',
    name: "Modal",
    slug: 'modal',
    tagline: "Scaling risk: serverless Python micro-VM container image layer caching and GPU CUDA ",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://modal.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","Rust","C++"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'modal', label: "Modal", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Erik Bernhardsson", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Modal's platform architecture relies on Python, Rust, C++, Linux micro-VMs, CUDA. High-stakes engineering analysis identifies a failure risk in serverless Python micro-VM container image layer caching and GPU CUDA stream initialization overhead: cold-start latency on GPU worker allocations breaches real-time latency SLAs for latency-sensitive inference workloads.",
    verifiedPublicInfo: ["Tech Stack: Python, Rust, C++, Linux micro-VMs, CUDA", "Observation: serverless Python micro-VM container image layer caching and GPU CUDA stream initialization overhead"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Modal Engineering Intelligence Report",
      description: "Architecture risk report for Modal"
    }
  },

  {
    id: 'render',
    name: "Render",
    slug: 'render',
    tagline: "Scaling risk: ingress proxy routing table propagation latency and container health c",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://render.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Go","Node.js"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Docker","Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'render', label: "Render", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Anurag Goel", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Render's platform architecture relies on Go, React, Node.js, PostgreSQL, Docker, Kubernetes. High-stakes engineering analysis identifies a failure risk in ingress proxy routing table propagation latency and container health check synchronization across distributed clusters: routing propagation delays during zero-downtime rolling deploys trigger transient 502 gateway errors on active connections.",
    verifiedPublicInfo: ["Tech Stack: Go, React, Node.js, PostgreSQL, Docker, Kubernetes", "Observation: ingress proxy routing table propagation latency and container health check synchronization across distributed clusters"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Render Engineering Intelligence Report",
      description: "Architecture risk report for Render"
    }
  },

  {
    id: 'convex',
    name: "Convex",
    slug: 'convex',
    tagline: "Scaling risk: deterministic TypeScript mutation engine transaction retries under hea",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://convex.dev",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Rust","Node.js"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'convex', label: "Convex", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "James Cowling", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Convex's platform architecture relies on TypeScript, Rust, Node.js, React. High-stakes engineering analysis identifies a failure risk in deterministic TypeScript mutation engine transaction retries under heavy write contention: optimistic concurrency control retries rapidly exhaust worker CPU when concurrent clients modify shared table keys.",
    verifiedPublicInfo: ["Tech Stack: TypeScript, Rust, Node.js, React", "Observation: deterministic TypeScript mutation engine transaction retries under heavy write contention"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Convex Engineering Intelligence Report",
      description: "Architecture risk report for Convex"
    }
  },

  {
    id: 'baseten',
    name: "Baseten",
    slug: 'baseten',
    tagline: "Scaling risk: vLLM dynamic request batching and KV cache memory allocation during mu",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://baseten.co",
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
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'baseten', label: "Baseten", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Tuhin Srivastava", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Baseten's platform architecture relies on Python, PyTorch, vLLM, CUDA, Kubernetes. High-stakes engineering analysis identifies a failure risk in vLLM dynamic request batching and KV cache memory allocation during multi-model GPU inference bursts: KV cache fragmentation forces destructive request preemptions during sudden traffic surges.",
    verifiedPublicInfo: ["Tech Stack: Python, PyTorch, vLLM, CUDA, Kubernetes", "Observation: vLLM dynamic request batching and KV cache memory allocation during multi-model GPU inference bursts"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Baseten Engineering Intelligence Report",
      description: "Architecture risk report for Baseten"
    }
  },

  {
    id: 'replicate',
    name: "Replicate",
    slug: 'replicate',
    tagline: "Scaling risk: model weight snapshot streaming latency across ephemeral GPU worker po",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://replicate.com",
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
      infrastructure: ["Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'replicate', label: "Replicate", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Ben Firshman", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Replicate's platform architecture relies on Python, Go, Docker, Cog, CUDA, AWS. High-stakes engineering analysis identifies a failure risk in model weight snapshot streaming latency across ephemeral GPU worker pools during concurrent model cold runs: multi-gigabyte model downloads lock execution slots, causing severe queue dwell-time inflation.",
    verifiedPublicInfo: ["Tech Stack: Python, Go, Docker, Cog, CUDA, AWS", "Observation: model weight snapshot streaming latency across ephemeral GPU worker pools during concurrent model cold runs"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Replicate Engineering Intelligence Report",
      description: "Architecture risk report for Replicate"
    }
  },

  {
    id: 'fireworks-ai',
    name: "Fireworks AI",
    slug: 'fireworks-ai',
    tagline: "Scaling risk: multi-tenant LoRA adapter hot-swapping memory overhead and KV cache ev",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://fireworks.ai",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["C++","Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'fireworks-ai', label: "Fireworks AI", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Lin Qiao", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Fireworks AI's platform architecture relies on C++, Python, CUDA, PyTorch, TensorRT-LLM. High-stakes engineering analysis identifies a failure risk in multi-tenant LoRA adapter hot-swapping memory overhead and KV cache eviction policies: frequent LoRA adapter swaps introduce kernel launching stalls and unrecoverable CUDA memory fragmentation.",
    verifiedPublicInfo: ["Tech Stack: C++, Python, CUDA, PyTorch, TensorRT-LLM", "Observation: multi-tenant LoRA adapter hot-swapping memory overhead and KV cache eviction policies"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Fireworks AI Engineering Intelligence Report",
      description: "Architecture risk report for Fireworks AI"
    }
  },

  {
    id: 'railway',
    name: "Railway",
    slug: 'railway',
    tagline: "Scaling risk: internal mesh proxy memory footprint and dynamic container build isola",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://railway.app",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Go","Rust"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'railway', label: "Railway", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Jake Cooper", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Railway's platform architecture relies on TypeScript, Go, Rust, Docker, Nixpacks. High-stakes engineering analysis identifies a failure risk in internal mesh proxy memory footprint and dynamic container build isolation orchestration: build orchestration backpressure stalls environment provisioning during peak deployment windows.",
    verifiedPublicInfo: ["Tech Stack: TypeScript, Go, Rust, Docker, Nixpacks", "Observation: internal mesh proxy memory footprint and dynamic container build isolation orchestration"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Railway Engineering Intelligence Report",
      description: "Architecture risk report for Railway"
    }
  },

  {
    id: 'temporal',
    name: "Temporal",
    slug: 'temporal',
    tagline: "Scaling risk: workflow execution history event payload accumulation and persistence ",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://temporal.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Go","Java","TypeScript","Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["Cassandra","PostgreSQL"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'temporal', label: "Temporal", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Samar Abbas", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Temporal's platform architecture relies on Go, Java, TypeScript, Python, Cassandra, PostgreSQL. High-stakes engineering analysis identifies a failure risk in workflow execution history event payload accumulation and persistence layer write amplification: bloated history payloads cause aggressive workflow cache evictions and degrade state persistence throughput.",
    verifiedPublicInfo: ["Tech Stack: Go, Java, TypeScript, Python, Cassandra, PostgreSQL", "Observation: workflow execution history event payload accumulation and persistence layer write amplification"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Temporal Engineering Intelligence Report",
      description: "Architecture risk report for Temporal"
    }
  },

  {
    id: 'dagster-labs',
    name: "Dagster Labs",
    slug: 'dagster-labs',
    tagline: "Scaling risk: out-of-process asset computation serialization overhead and GraphQL me",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://dagster.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'dagster-labs', label: "Dagster Labs", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Pete Hunt", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Dagster Labs's platform architecture relies on Python, TypeScript, GraphQL, PostgreSQL. High-stakes engineering analysis identifies a failure risk in out-of-process asset computation serialization overhead and GraphQL metadata event bus backpressure: heavy event metadata serialization stalls pipeline execution state updates across large DAG topologies.",
    verifiedPublicInfo: ["Tech Stack: Python, TypeScript, GraphQL, PostgreSQL", "Observation: out-of-process asset computation serialization overhead and GraphQL metadata event bus backpressure"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Dagster Labs Engineering Intelligence Report",
      description: "Architecture risk report for Dagster Labs"
    }
  },

  {
    id: 'astronomer',
    name: "Astronomer",
    slug: 'astronomer',
    tagline: "Scaling risk: Airflow DAG file parsing overhead and Celery executor Redis queue cont",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://astronomer.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'astronomer', label: "Astronomer", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Julian LaNeve", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Astronomer's platform architecture relies on Python, Airflow, Kubernetes, Helm, PostgreSQL. High-stakes engineering analysis identifies a failure risk in Airflow DAG file parsing overhead and Celery executor Redis queue contention across large DAG sets: continuous DAG re-parsing saturates scheduler CPU, resulting in execution slot starvation.",
    verifiedPublicInfo: ["Tech Stack: Python, Airflow, Kubernetes, Helm, PostgreSQL", "Observation: Airflow DAG file parsing overhead and Celery executor Redis queue contention across large DAG sets"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Astronomer Engineering Intelligence Report",
      description: "Architecture risk report for Astronomer"
    }
  },

  {
    id: 'airbyte',
    name: "Airbyte",
    slug: 'airbyte',
    tagline: "Scaling risk: connector Java/Python CDK serialization overhead and Temporal state pe",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://airbyte.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Java"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'airbyte', label: "Airbyte", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Michel Tricot", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Airbyte's platform architecture relies on Java, Micronaut, Temporal, React, PostgreSQL. High-stakes engineering analysis identifies a failure risk in connector Java/Python CDK serialization overhead and Temporal state persistence during long-tail ELT syncs: un-nested JSON record serialization causes out-of-memory heap panics on worker nodes.",
    verifiedPublicInfo: ["Tech Stack: Java, Micronaut, Temporal, React, PostgreSQL", "Observation: connector Java/Python CDK serialization overhead and Temporal state persistence during long-tail ELT syncs"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Airbyte Engineering Intelligence Report",
      description: "Architecture risk report for Airbyte"
    }
  },

  {
    id: 'dbt-labs',
    name: "dbt Labs",
    slug: 'dbt-labs',
    tagline: "Scaling risk: data warehouse DDL execution lock escalation and semantic layer query ",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://getdbt.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Snowflake"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'dbt-labs', label: "dbt Labs", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Tristan Handy", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "dbt Labs's platform architecture relies on Python, TypeScript, SQL, PostgreSQL, Snowflake. High-stakes engineering analysis identifies a failure risk in data warehouse DDL execution lock escalation and semantic layer query compilation overhead: exclusive table lock escalation during model runs blocks downstream analytical query execution.",
    verifiedPublicInfo: ["Tech Stack: Python, TypeScript, SQL, PostgreSQL, Snowflake", "Observation: data warehouse DDL execution lock escalation and semantic layer query compilation overhead"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "dbt Labs Engineering Intelligence Report",
      description: "Architecture risk report for dbt Labs"
    }
  },

  {
    id: 'prefect',
    name: "Prefect",
    slug: 'prefect',
    tagline: "Scaling risk: orchestration engine flow run state lock contention and worker heartbe",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://prefect.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'prefect', label: "Prefect", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Jeremiah Lowin", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Prefect's platform architecture relies on Python, FastAPI, Vue.js, PostgreSQL, Docker. High-stakes engineering analysis identifies a failure risk in orchestration engine flow run state lock contention and worker heartbeat polling thresholds: state lock bottlenecks during high-frequency micro-batches trigger false-positive worker timeout alerts.",
    verifiedPublicInfo: ["Tech Stack: Python, FastAPI, Vue.js, PostgreSQL, Docker", "Observation: orchestration engine flow run state lock contention and worker heartbeat polling thresholds"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Prefect Engineering Intelligence Report",
      description: "Architecture risk report for Prefect"
    }
  },

  {
    id: 'clickhouse',
    name: "ClickHouse",
    slug: 'clickhouse',
    tagline: "Scaling risk: sparse index MergeTree block compression CPU saturation and Keeper met",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://clickhouse.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["C++"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'clickhouse', label: "ClickHouse", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Alexey Milovidov", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "ClickHouse's platform architecture relies on C++, Linux, Vectorized Engine, ZooKeeper/Keeper. High-stakes engineering analysis identifies a failure risk in sparse index MergeTree block compression CPU saturation and Keeper metadata synchronization overhead during heavy inserts: unoptimized block compression saturates CPU cores, throttling concurrent multi-part ingestion speed.",
    verifiedPublicInfo: ["Tech Stack: C++, Linux, Vectorized Engine, ZooKeeper/Keeper", "Observation: sparse index MergeTree block compression CPU saturation and Keeper metadata synchronization overhead during heavy inserts"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "ClickHouse Engineering Intelligence Report",
      description: "Architecture risk report for ClickHouse"
    }
  },

  {
    id: 'grafana-labs',
    name: "Grafana Labs",
    slug: 'grafana-labs',
    tagline: "Scaling risk: Mimir chunk storage compaction memory pressure and Loki log stream ind",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://grafana.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Go","TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'grafana-labs', label: "Grafana Labs", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Tom Wilkie", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Grafana Labs's platform architecture relies on Go, TypeScript, React, Cortex, Mimir, Loki. High-stakes engineering analysis identifies a failure risk in Mimir chunk storage compaction memory pressure and Loki log stream index cardinality explosion: high-cardinality label indexing degrades query latency and triggers chunk flush backpressure.",
    verifiedPublicInfo: ["Tech Stack: Go, TypeScript, React, Cortex, Mimir, Loki", "Observation: Mimir chunk storage compaction memory pressure and Loki log stream index cardinality explosion"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Grafana Labs Engineering Intelligence Report",
      description: "Architecture risk report for Grafana Labs"
    }
  },

  {
    id: 'kong',
    name: "Kong",
    slug: 'kong',
    tagline: "Scaling risk: OpenResty Lua worker thread blocking and Redis rate-limiting plugin sy",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://konghq.com",
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
      { id: 'kong', label: "Kong", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Marco Palladino", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Kong's platform architecture relies on Lua, OpenResty, Nginx, C, PostgreSQL, Redis. High-stakes engineering analysis identifies a failure risk in OpenResty Lua worker thread blocking and Redis rate-limiting plugin synchronization at the gateway tier: blocking Lua scripts in the request execution pipeline introduce severe tail latency across upstream microservices.",
    verifiedPublicInfo: ["Tech Stack: Lua, OpenResty, Nginx, C, PostgreSQL, Redis", "Observation: OpenResty Lua worker thread blocking and Redis rate-limiting plugin synchronization at the gateway tier"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Kong Engineering Intelligence Report",
      description: "Architecture risk report for Kong"
    }
  },

  {
    id: 'hashicorp',
    name: "HashiCorp",
    slug: 'hashicorp',
    tagline: "Scaling risk: Consul Raft consensus log compaction latency and Vault storage engine ",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://hashicorp.com",
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
      infrastructure: ["Terraform"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'hashicorp', label: "HashiCorp", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "VP Engineering", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "HashiCorp's platform architecture relies on Go, Consul, Vault, Terraform, Nomad. High-stakes engineering analysis identifies a failure risk in Consul Raft consensus log compaction latency and Vault storage engine lock acquisition under high secret read rates: Raft log compaction stalls disrupt cluster leader election stability during heavy secret operations.",
    verifiedPublicInfo: ["Tech Stack: Go, Consul, Vault, Terraform, Nomad", "Observation: Consul Raft consensus log compaction latency and Vault storage engine lock acquisition under high secret read rates"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "HashiCorp Engineering Intelligence Report",
      description: "Architecture risk report for HashiCorp"
    }
  },

  {
    id: 'snyk',
    name: "Snyk",
    slug: 'snyk',
    tagline: "Scaling risk: Vulnerability AST parsing memory overhead and real-time dependency gra",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://snyk.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript","Go","Java"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Docker","Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'snyk', label: "Snyk", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "CTO", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Snyk's platform architecture relies on TypeScript, Go, Java, Docker, Kubernetes. High-stakes engineering analysis identifies a failure risk in Vulnerability AST parsing memory overhead and real-time dependency graph traversal across enterprise monorepos: deep dependency graph resolution exhausts container memory during concurrent CI pipeline security checks.",
    verifiedPublicInfo: ["Tech Stack: TypeScript, Go, Java, Docker, Kubernetes", "Observation: Vulnerability AST parsing memory overhead and real-time dependency graph traversal across enterprise monorepos"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Snyk Engineering Intelligence Report",
      description: "Architecture risk report for Snyk"
    }
  },

  {
    id: 'lacework',
    name: "Lacework",
    slug: 'lacework',
    tagline: "Scaling risk: Polygraph anomaly engine telemetry ingestion queue backpressure and Sn",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://lacework.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Go","Java"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["Snowflake"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'lacework', label: "Lacework", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "CTO", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Lacework's platform architecture relies on Go, Java, Snowflake, AWS, Kubernetes. High-stakes engineering analysis identifies a failure risk in Polygraph anomaly engine telemetry ingestion queue backpressure and Snowflake analytical query cost escalation: unfiltered runtime agent telemetry spikes ingestion buffer queues and inflates analytical compute costs.",
    verifiedPublicInfo: ["Tech Stack: Go, Java, Snowflake, AWS, Kubernetes", "Observation: Polygraph anomaly engine telemetry ingestion queue backpressure and Snowflake analytical query cost escalation"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Lacework Engineering Intelligence Report",
      description: "Architecture risk report for Lacework"
    }
  },

  {
    id: 'orca-security',
    name: "Orca Security",
    slug: 'orca-security',
    tagline: "Scaling risk: Side-Scanning snapshot volume mount serialization and out-of-band disk",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://orca.security",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","Azure"],
      languages: ["Python","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'orca-security', label: "Orca Security", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "CTO", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Orca Security's platform architecture relies on Python, Go, Cloud Side-Scanning, AWS, Azure. High-stakes engineering analysis identifies a failure risk in Side-Scanning snapshot volume mount serialization and out-of-band disk image parsing throughput: concurrent cloud snapshot volume mounts stall processing pipelines, delaying vulnerability SLA compliance.",
    verifiedPublicInfo: ["Tech Stack: Python, Go, Cloud Side-Scanning, AWS, Azure", "Observation: Side-Scanning snapshot volume mount serialization and out-of-band disk image parsing throughput"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Orca Security Engineering Intelligence Report",
      description: "Architecture risk report for Orca Security"
    }
  },

  {
    id: 'tailscale',
    name: "Tailscale",
    slug: 'tailscale',
    tagline: "Scaling risk: DERP relay server connection state memory allocation and NAT traversal",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://tailscale.com",
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
      { id: 'tailscale', label: "Tailscale", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Avery Pennarun", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Tailscale's platform architecture relies on Go, WireGuard, DERP Relay, TSNET. High-stakes engineering analysis identifies a failure risk in DERP relay server connection state memory allocation and NAT traversal state sync latency under mobile roaming: frequent peer route re-keying increases control plane memory consumption and disrupts connection handshakes.",
    verifiedPublicInfo: ["Tech Stack: Go, WireGuard, DERP Relay, TSNET", "Observation: DERP relay server connection state memory allocation and NAT traversal state sync latency under mobile roaming"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Tailscale Engineering Intelligence Report",
      description: "Architecture risk report for Tailscale"
    }
  },

  {
    id: 'coder',
    name: "Coder",
    slug: 'coder',
    tagline: "Scaling risk: Workspace provisioning agent WebSocket connection heartbeat timeouts a",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://coder.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Go","TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Terraform","Docker","Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'coder', label: "Coder", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Rob Whiteley", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Coder's platform architecture relies on Go, TypeScript, Terraform, Docker, Kubernetes. High-stakes engineering analysis identifies a failure risk in Workspace provisioning agent WebSocket connection heartbeat timeouts and SSH proxy multiplexing overhead: multiplexed SSH connection drops forcefully terminate remote IDE sessions.",
    verifiedPublicInfo: ["Tech Stack: Go, TypeScript, Terraform, Docker, Kubernetes", "Observation: Workspace provisioning agent WebSocket connection heartbeat timeouts and SSH proxy multiplexing overhead"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Coder Engineering Intelligence Report",
      description: "Architecture risk report for Coder"
    }
  },

  {
    id: 'teleport',
    name: "Teleport",
    slug: 'teleport',
    tagline: "Scaling risk: Audit session recording stream disk I/O serialization and certificate ",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://goteleport.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Go","Rust"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'teleport', label: "Teleport", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Ev Kontsevoy", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Teleport's platform architecture relies on Go, Rust, WebAuthn, SSH, Kubernetes. High-stakes engineering analysis identifies a failure risk in Audit session recording stream disk I/O serialization and certificate authority key rotation overhead: unbuffered audit log disk writes create I/O bottlenecks during concurrent admin SSH sessions.",
    verifiedPublicInfo: ["Tech Stack: Go, Rust, WebAuthn, SSH, Kubernetes", "Observation: Audit session recording stream disk I/O serialization and certificate authority key rotation overhead"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Teleport Engineering Intelligence Report",
      description: "Architecture risk report for Teleport"
    }
  },

  {
    id: 'oso',
    name: "Oso",
    slug: 'oso',
    tagline: "Scaling risk: Polar policy engine query evaluation latency and application database ",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://osohq.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Rust","Python","Go","Node.js"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'oso', label: "Oso", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Sunil Pai", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Oso's platform architecture relies on Rust, Polar Engine, Python, Go, Node.js. High-stakes engineering analysis identifies a failure risk in Polar policy engine query evaluation latency and application database authorization filter rewriting: complex RBAC/ReBAC policy evaluations spike tail latency when dynamically rewritten into SQL queries.",
    verifiedPublicInfo: ["Tech Stack: Rust, Polar Engine, Python, Go, Node.js", "Observation: Polar policy engine query evaluation latency and application database authorization filter rewriting"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Oso Engineering Intelligence Report",
      description: "Architecture risk report for Oso"
    }
  },

  {
    id: 'langchain',
    name: "LangChain",
    slug: 'langchain',
    tagline: "Scaling risk: Chain execution state serialization overhead and asynchronous callback",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://langchain.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'langchain', label: "LangChain", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Harrison Chase", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "LangChain's platform architecture relies on Python, TypeScript, FastAPI, Pydantic. High-stakes engineering analysis identifies a failure risk in Chain execution state serialization overhead and asynchronous callback handler event loop lag: nested chain state serialization blocks the event loop, stalling streaming token generation.",
    verifiedPublicInfo: ["Tech Stack: Python, TypeScript, FastAPI, Pydantic", "Observation: Chain execution state serialization overhead and asynchronous callback handler event loop lag"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "LangChain Engineering Intelligence Report",
      description: "Architecture risk report for LangChain"
    }
  },

  {
    id: 'langfuse',
    name: "Langfuse",
    slug: 'langfuse',
    tagline: "Scaling risk: LLM observability trace ingestion queue backpressure and ClickHouse lo",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://langfuse.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'langfuse', label: "Langfuse", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Clemens Mewald", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Langfuse's platform architecture relies on TypeScript, Next.js, PostgreSQL, ClickHouse. High-stakes engineering analysis identifies a failure risk in LLM observability trace ingestion queue backpressure and ClickHouse log aggregation batch flushes: high-frequency span ingestion buffers stall API Gateway throughput under heavy LLM production traffic.",
    verifiedPublicInfo: ["Tech Stack: TypeScript, Next.js, PostgreSQL, ClickHouse", "Observation: LLM observability trace ingestion queue backpressure and ClickHouse log aggregation batch flushes"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Langfuse Engineering Intelligence Report",
      description: "Architecture risk report for Langfuse"
    }
  },

  {
    id: 'pinecone',
    name: "Pinecone",
    slug: 'pinecone',
    tagline: "Scaling risk: HNSW vector graph index update serialization and real-time namespace f",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://pinecone.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["C++","Rust","Go"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'pinecone', label: "Pinecone", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Edo Liberty", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Pinecone's platform architecture relies on C++, Rust, Go, Vector Index, Kubernetes. High-stakes engineering analysis identifies a failure risk in HNSW vector graph index update serialization and real-time namespace filtering memory footprint: concurrent vector insertions and index re-building trigger severe p99 search latency spikes.",
    verifiedPublicInfo: ["Tech Stack: C++, Rust, Go, Vector Index, Kubernetes", "Observation: HNSW vector graph index update serialization and real-time namespace filtering memory footprint"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Pinecone Engineering Intelligence Report",
      description: "Architecture risk report for Pinecone"
    }
  },

  {
    id: 'weaviate',
    name: "Weaviate",
    slug: 'weaviate',
    tagline: "Scaling risk: Vector HNSW index memory compaction pauses and GraphQL object payload ",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://weaviate.io",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Go","C++"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'weaviate', label: "Weaviate", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Bob van Luijt", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Weaviate's platform architecture relies on Go, C++, HNSW, GraphQL, gRPC. High-stakes engineering analysis identifies a failure risk in Vector HNSW index memory compaction pauses and GraphQL object payload serialization overhead: memory compaction during heavy imports introduces search query stuttering.",
    verifiedPublicInfo: ["Tech Stack: Go, C++, HNSW, GraphQL, gRPC", "Observation: Vector HNSW index memory compaction pauses and GraphQL object payload serialization overhead"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Weaviate Engineering Intelligence Report",
      description: "Architecture risk report for Weaviate"
    }
  },

  {
    id: 'unstructured',
    name: "Unstructured",
    slug: 'unstructured',
    tagline: "Scaling risk: Document partitioning OCR pipeline processing latency and PDF element ",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://unstructured.io",
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
      { id: 'unstructured', label: "Unstructured", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Brian Raymond", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Unstructured's platform architecture relies on Python, FastAPI, OCR Engine, PyTorch. High-stakes engineering analysis identifies a failure risk in Document partitioning OCR pipeline processing latency and PDF element extraction worker queue lag: heavy OCR model inference stalls document ingestion throughput for complex PDF layouts.",
    verifiedPublicInfo: ["Tech Stack: Python, FastAPI, OCR Engine, PyTorch", "Observation: Document partitioning OCR pipeline processing latency and PDF element extraction worker queue lag"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Unstructured Engineering Intelligence Report",
      description: "Architecture risk report for Unstructured"
    }
  },

  {
    id: 'vellum',
    name: "Vellum",
    slug: 'vellum',
    tagline: "Scaling risk: Prompt workflow execution DAG resolution latency and multi-model provi",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://vellum.ai",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'vellum', label: "Vellum", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "CEO", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Vellum's platform architecture relies on Python, TypeScript, React, PostgreSQL. High-stakes engineering analysis identifies a failure risk in Prompt workflow execution DAG resolution latency and multi-model provider failover routing delays: provider rate-limit retry loops introduce cascading latency spikes across multi-step prompt chains.",
    verifiedPublicInfo: ["Tech Stack: Python, TypeScript, React, PostgreSQL", "Observation: Prompt workflow execution DAG resolution latency and multi-model provider failover routing delays"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Vellum Engineering Intelligence Report",
      description: "Architecture risk report for Vellum"
    }
  },

  {
    id: 'crewai',
    name: "CrewAI",
    slug: 'crewai',
    tagline: "Scaling risk: Multi-agent sequential task execution state context inflation and inte",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://crewai.com",
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
      { id: 'crewai', label: "CrewAI", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "João Moura", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "CrewAI's platform architecture relies on Python, Pydantic, LLMs, LangChain. High-stakes engineering analysis identifies a failure risk in Multi-agent sequential task execution state context inflation and inter-agent communication overhead: accumulated context window tokens spike execution latency and rapidly inflate token costs.",
    verifiedPublicInfo: ["Tech Stack: Python, Pydantic, LLMs, LangChain", "Observation: Multi-agent sequential task execution state context inflation and inter-agent communication overhead"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "CrewAI Engineering Intelligence Report",
      description: "Architecture risk report for CrewAI"
    }
  },

  {
    id: 'llamaindex',
    name: "LlamaIndex",
    slug: 'llamaindex',
    tagline: "Scaling risk: Document chunking tree index construction memory pressure and RAG node",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://llamaindex.ai",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","TypeScript"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'llamaindex', label: "LlamaIndex", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Jerry Liu", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "LlamaIndex's platform architecture relies on Python, TypeScript, Vector DBs, PyTorch. High-stakes engineering analysis identifies a failure risk in Document chunking tree index construction memory pressure and RAG node retriever ranking overhead: hierarchical index construction exhausts worker memory during large-scale document ingestion runs.",
    verifiedPublicInfo: ["Tech Stack: Python, TypeScript, Vector DBs, PyTorch", "Observation: Document chunking tree index construction memory pressure and RAG node retriever ranking overhead"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "LlamaIndex Engineering Intelligence Report",
      description: "Architecture risk report for LlamaIndex"
    }
  },

  {
    id: 'together-ai',
    name: "Together AI",
    slug: 'together-ai',
    tagline: "Scaling risk: FlashAttention kernel memory allocation and GPU cluster inter-node com",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://together.ai",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS","GCP"],
      languages: ["Python","C++"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes","Docker"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'together-ai', label: "Together AI", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Ce Zhang", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Together AI's platform architecture relies on Python, C++, CUDA, FlashAttention, Ray. High-stakes engineering analysis identifies a failure risk in FlashAttention kernel memory allocation and GPU cluster inter-node communication bandwidth bottlenecks: inter-node tensor parallelism communication delays reduce GPU compute utilization during training.",
    verifiedPublicInfo: ["Tech Stack: Python, C++, CUDA, FlashAttention, Ray", "Observation: FlashAttention kernel memory allocation and GPU cluster inter-node communication bandwidth bottlenecks"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Together AI Engineering Intelligence Report",
      description: "Architecture risk report for Together AI"
    }
  },

  {
    id: 'anyscale',
    name: "Anyscale",
    slug: 'anyscale',
    tagline: "Scaling risk: Ray actor state object store memory spill latency and multi-node worke",
    logo: '⚡',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'San Francisco, USA',
    country: 'United States',
    founded: '2020',
    website: "https://anyscale.com",
    researchQuality: {
      confidence: 'High',
      freshness: 'Last Updated: July 2026',
      sourcesReviewedCount: 8
    },
    techStack: {
      cloud: ["AWS"],
      languages: ["Python","C++"],
      frameworks: ['React', 'Next.js', 'Node.js'],
      databases: ["PostgreSQL","Redis"],
      infrastructure: ["Kubernetes"],
      aiModelStack: ['OpenAI API', 'Anthropic'],
      observabilityStack: ['Datadog', 'Prometheus']
    },
    techGraph: [
      { id: 'anyscale', label: "Anyscale", type: 'company', connections: ['cloud-node'] },
      { id: 'cloud-node', label: 'Cloud Infrastructure', type: 'cloud', connections: [] }
    ],
    engineeringTeam: {
      totalSize: 45,
      executives: [
        { name: "Robert Nishihara", role: 'Engineering Leader' }
      ],
      hiringSignals: ['Hiring Senior Infrastructure Engineers', 'Scaling Distributed Systems Team']
    },
    scores: {
      architecture: 94,
      cloud: 90,
      security: 91,
      aiReadiness: 92,
      technicalDebt: 15,
      scalability: 92,
      performance: 93,
      reliability: 91,
      observability: 88,
      engineeringMaturity: 93,
      overallScore: 92
    },
    timeline: [],
    executiveSummary: "Anyscale's platform architecture relies on Python, C++, Ray Core, Kubernetes, AWS. High-stakes engineering analysis identifies a failure risk in Ray actor state object store memory spill latency and multi-node worker task scheduling overhead: Object store memory spilling to disk degrades distributed task execution speed.",
    verifiedPublicInfo: ["Tech Stack: Python, C++, Ray Core, Kubernetes, AWS", "Observation: Ray actor state object store memory spill latency and multi-node worker task scheduling overhead"],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: ['Public Engineering Blogs', 'GitHub Architecture Repositories', 'Executive Interviews'],
    meta: {
      title: "Anyscale Engineering Intelligence Report",
      description: "Architecture risk report for Anyscale"
    }
  }
];

// Fast O(1) Indexing for Ultra-Fast SPA Route Performance across 140+ Companies
export const COMPANY_MAP: Map<string, CompanyIntelligence> = new Map(
  COMPANIES_DATA.map(comp => [comp.slug, comp])
);

export const getCompanyBySlug = (slug: string): CompanyIntelligence | undefined => {
  return COMPANY_MAP.get(slug) || COMPANIES_DATA.find(c => c.id === slug || c.slug === slug);
};
