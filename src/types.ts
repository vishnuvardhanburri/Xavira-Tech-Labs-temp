export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemsSolved: string[];
  deliverables: string[]; // Map capabilities to deliverables
  capabilities: string[]; // Retain for compatibility
  metrics: { label: string; value: string }[];
  technicalStack: string[];
  businessOutcomes: string[];
  businessProblem?: string;
  technicalProblem?: string;
  whyXavira?: string;
}

export interface PackageItem {
  id: string;
  name: string;
  price: string;
  priceDetail?: string;
  duration?: string;
  description: string;
  deliverables: string[];
  outcome: string;
  recommendedFor: string;
  idealCustomer?: string;
  timeline?: string;
  nextCta?: { label: string; action: 'book' | 'audit' };
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  challenges: string[];
  solutions: string[];
  evidence: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  category: 'Whitepaper' | 'Technical Report' | 'Case Study';
  date: string;
  author: string;
  readTime: string;
  summary: string;
  downloadCount: string;
  contentMarkdown: string;
}

export interface InsightItem {
  id: string;
  title: string;
  category: 'Engineering Culture' | 'Architecture' | 'Executive Advisory';
  date: string;
  author: string;
  readTime: string;
  summary: string;
  contentMarkdown: string;
}

export interface ProcessStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration?: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}
