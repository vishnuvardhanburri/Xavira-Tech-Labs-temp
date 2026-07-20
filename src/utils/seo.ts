/**
 * XAVIRA Technologies — Central SEO Utility
 * All page-level metadata, JSON-LD schemas, and canonical URL helpers.
 */

const BASE_URL = 'https://www.xaviratechlabs.com';
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'XAVIRA Technologies';
const AUTHOR_NAME = 'Vishnu Vardhan Burri';
const BUILD_DATE = new Date().toISOString().split('T')[0]; // e.g. "2025-01-17"

// ─── Canonical URL ────────────────────────────────────────────────────────────
export function getCanonicalUrl(pathname: string): string {
  // Strip trailing slash (except root), query strings, fragments
  const clean = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return `${BASE_URL}${clean}`;
}

// ─── Page Metadata Map ────────────────────────────────────────────────────────
export interface PageMeta {
  title: string;
  description: string;
  ogType: 'website' | 'article';
  robots: string;
  keywords: string;
}

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: 'XAVIRA Technologies | Engineering Intelligence & Systems Architecture',
    description: 'Independent Engineering Intelligence firm led by CEO Vishnu Vardhan Burri. We specialise in deep-dive engineering audits, distributed systems architecture, database scaling, and enterprise system migrations.',
    ogType: 'website',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large',
    keywords: 'engineering intelligence, systems architecture, technical audit, distributed systems, database scaling, XAVIRA Technologies',
  },
  about: {
    title: 'Philosophy & Methodology | XAVIRA Engineering Intelligence',
    description: 'Explore XAVIRA Technologies\' rigorous technical auditing philosophy, evidence-based systems thinking, and comparative verification methodology used across 100+ enterprise technology teams.',
    ogType: 'website',
    robots: 'index, follow',
    keywords: 'XAVIRA methodology, engineering audit philosophy, technical verification, systems thinking',
  },
  research: {
    title: 'Engineering Intelligence Library | XAVIRA Technologies',
    description: 'Browse our comprehensive multi-dimensional intelligence database covering 100+ enterprise technology teams — architecture, tech stack, scaling risks, and engineering observations.',
    ogType: 'website',
    robots: 'index, follow, max-snippet:-1',
    keywords: 'engineering intelligence library, company research, tech stack analysis, architecture audit, startup research',
  },
  'research-index': {
    title: 'Engineering Intelligence Directory | XAVIRA Technologies',
    description: 'Independent engineering intelligence profiles across 100+ high-growth enterprise technology companies. Architecture reviews, tech stack assessments, and scaling risk analysis.',
    ogType: 'website',
    robots: 'index, follow, max-snippet:-1',
    keywords: 'engineering profiles, startup intelligence, CTO research, engineering audit directory',
  },
  intelligence: {
    title: 'Live Engineering Intelligence Dashboard | XAVIRA Technologies',
    description: 'Analyse real-time dependency drift metrics, active engineering threat signatures, and latency telemetry from our sovereign engineering intelligence loop.',
    ogType: 'website',
    robots: 'index, follow',
    keywords: 'engineering intelligence dashboard, latency telemetry, dependency drift, real-time systems monitoring',
  },
  services: {
    title: 'Technical Services & Engineering Specialties | XAVIRA Technologies',
    description: 'Specialised engineering services: memory leak tracing, real-time thread safety, latency mitigation, distributed systems design, and database architecture optimisation.',
    ogType: 'website',
    robots: 'index, follow',
    keywords: 'engineering services, memory leak analysis, distributed systems, latency optimisation, database architecture',
  },
  packages: {
    title: 'Engineering Audit Packages & Engagements | XAVIRA Technologies',
    description: 'Choose from rapid discovery sprints, comprehensive architecture reviews, or continuous sovereign telemetry engagements tailored to your engineering team.',
    ogType: 'website',
    robots: 'index, follow',
    keywords: 'engineering audit packages, architecture review, technical engagement, discovery sprint',
  },
  industries: {
    title: 'Industries & Sectors | XAVIRA Engineering Intelligence',
    description: 'XAVIRA Technologies serves high-growth technology sectors including AI SaaS, FinTech, HealthTech, Cybersecurity, and DevTools with specialised engineering intelligence.',
    ogType: 'website',
    robots: 'index, follow',
    keywords: 'AI SaaS engineering, FinTech systems, HealthTech architecture, Cybersecurity audit, DevTools engineering',
  },
  'research-insights': {
    title: 'Engineering Research & Insights | XAVIRA Technologies',
    description: 'Independent engineering research, technical analysis, and system architecture insights from XAVIRA Technologies\' engineering intelligence practice.',
    ogType: 'website',
    robots: 'index, follow',
    keywords: 'engineering research, technical insights, architecture analysis, systems engineering',
  },
  faq: {
    title: 'FAQ — Engineering Audit Methodology & Parameters | XAVIRA Technologies',
    description: 'Answers to frequently asked questions about XAVIRA\'s engineering audit methodology, engagement scope, system security parameters, and comparison matrix.',
    ogType: 'website',
    robots: 'index, follow',
    keywords: 'engineering audit FAQ, methodology questions, engagement scope, audit parameters',
  },
  contact: {
    title: 'Contact XAVIRA Technologies | Engineering Audit Consultation',
    description: 'Initiate a confidential engineering audit engagement or direct technical inquiry with XAVIRA Technologies. Led by CEO Vishnu Vardhan Burri.',
    ogType: 'website',
    robots: 'index, follow',
    keywords: 'contact XAVIRA, engineering consultation, audit inquiry, technical contact',
  },
  book: {
    title: 'Book an Architecture Evaluation | XAVIRA Technologies',
    description: 'Schedule a secure, highly technical architecture mapping session with XAVIRA\'s principal engineers. Interactive booking for enterprise engineering engagements.',
    ogType: 'website',
    robots: 'index, follow',
    keywords: 'book architecture review, engineering session, technical consultation booking',
  },
  cases: {
    title: 'Engineering Case Studies | XAVIRA Technologies',
    description: 'Detailed post-mortems of system refactors, thread-deadlock resolutions, database scaling achievements, and measurable performance improvements delivered by XAVIRA.',
    ogType: 'article',
    robots: 'index, follow, max-snippet:-1',
    keywords: 'engineering case studies, system refactor, performance improvement, architecture transformation',
  },
};

// ─── Company Page Metadata ─────────────────────────────────────────────────────
export interface CompanyMeta extends PageMeta {
  canonical: string;
  breadcrumbs: Array<{ name: string; url: string }>;
}

export function getCompanyMeta(company: {
  name: string;
  sector: string;
  totalRaised: string;
  techStack: string;
  fundingStage: string;
  geography: string;
  priorityScore: number;
}, slug: string): CompanyMeta {
  const url = `${BASE_URL}/research/${slug}`;
  const tech = company.techStack.split(',').slice(0, 4).join(', ');
  return {
    title: `${company.name} Engineering Intelligence Report | XAVIRA Technologies`,
    description: `Independent Engineering Intelligence report analysing ${company.name}'s public engineering architecture in ${company.sector}. ${company.fundingStage} company (${company.totalRaised}) based in ${company.geography}. Stack: ${tech}.`,
    ogType: 'article',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large',
    keywords: `${company.name} engineering, ${company.name} architecture, ${company.name} tech stack, ${company.sector} engineering, engineering intelligence`,
    canonical: url,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Engineering Intelligence Library', url: `${BASE_URL}/research` },
      { name: company.name, url },
    ],
  };
}

// ─── JSON-LD Builders ─────────────────────────────────────────────────────────

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: SITE_NAME,
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
    description: 'Independent Engineering Intelligence & Systems Architecture firm. Deep-dive technical audits, distributed systems design, and engineering advisory.',
    founder: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      jobTitle: 'CEO & Chief Architect',
      url: 'https://www.linkedin.com/in/vishnuvardhanburri/',
      sameAs: [
        'https://www.linkedin.com/in/vishnuvardhanburri/'
      ]
    },
    sameAs: [
      'https://www.linkedin.com/company/xaviratechnologies',
      'https://github.com/xaviratechlabs'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'technical support',
      url: `${BASE_URL}/contact`,
      availableLanguage: 'English',
    },
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: SITE_NAME,
    description: 'Independent Engineering Intelligence & Systems Architecture',
    publisher: { '@id': `${BASE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/research?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildWebPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    publisher: { '@id': `${BASE_URL}/#organization` },
    datePublished: '2024-01-01',
    dateModified: BUILD_DATE,
    inLanguage: 'en-GB',
  };
}

export function buildBreadcrumbSchema(crumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function buildCollectionPageSchema(title: string, description: string, url: string, count: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    publisher: { '@id': `${BASE_URL}/#organization` },
    numberOfItems: count,
    inLanguage: 'en-GB',
  };
}

export function buildTechArticleSchema(company: {
  name: string;
  sector: string;
  totalRaised: string;
  techStack: string;
  fundingStage: string;
}, title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    datePublished: '2024-06-01',
    dateModified: BUILD_DATE,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      jobTitle: 'CEO & Chief Architect',
      worksFor: { '@id': `${BASE_URL}/#organization` },
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    about: {
      '@type': 'Thing',
      name: company.name,
      description: `${company.sector} company — ${company.fundingStage} — ${company.totalRaised} raised`,
    },
    keywords: `${company.name}, ${company.sector}, engineering intelligence, architecture audit, ${company.techStack.split(',').slice(0, 5).join(', ')}`,
    image: OG_IMAGE,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    inLanguage: 'en-GB',
    proficiencyLevel: 'Expert',
    dependencies: company.techStack,
  };
}

export function buildFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${BASE_URL}/contact`,
    name: 'Contact XAVIRA Technologies',
    description: 'Initiate a confidential engineering audit engagement or direct technical inquiry.',
    publisher: { '@id': `${BASE_URL}/#organization` },
  };
}

export function buildAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${BASE_URL}/about`,
    name: 'About XAVIRA Technologies',
    description: 'Philosophy, methodology, and approach of XAVIRA Technologies — an independent Engineering Intelligence firm.',
    publisher: { '@id': `${BASE_URL}/#organization` },
    about: { '@id': `${BASE_URL}/#organization` },
  };
}

// ─── Inject Multiple JSON-LD Scripts ─────────────────────────────────────────
export function injectJsonLd(id: string, data: object | object[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(Array.isArray(data) ? data : data);
}

export function removeJsonLd(id: string) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

// ─── Meta Tag Helper ──────────────────────────────────────────────────────────
export function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    const parts = selector.match(/\[([^\]]+)="([^"]+)"\]/);
    if (parts) el.setAttribute(parts[1], parts[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}
