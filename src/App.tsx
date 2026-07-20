import { BrowserRouter, useNavigate, useLocation, Routes, Route, useParams, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ShieldCheck, Cpu, Code2, Layers, AlertCircle, Check, 
  HelpCircle, ChevronDown, ChevronUp, BookOpen, Clock, User, 
  Sparkles, Network, Database, Terminal, Shield, MessageSquare, BarChart3,
  ExternalLink, Search, Linkedin, RotateCw, Bookmark, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from './utils/translations';

// Content imports
import { 
  METADATA, SERVICES, PACKAGES, INDUSTRIES, PROCESS_STAGES, 
  RESEARCH_ARTICLES, INSIGHTS, FAQS, TESTIMONIALS, TRUST_VISION,
  AUDITED_BRANDS
} from './data/websiteContent';

// Component imports
import Navigation from './components/Navigation';
import Analytics from './components/Analytics';
import * as seo from './utils/seo';
import Footer from './components/Footer';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import InteractiveBooking from './components/InteractiveBooking';
import ContactForm from './components/ContactForm';
import EngineeringImpactDashboard from './components/EngineeringImpactDashboard';
import RiskHeatmap from './components/RiskHeatmap';
import AiInteractiveBackground from './components/AiInteractiveBackground';
import ScrollAnimate from './components/ScrollAnimate';
import MobileAnalyticsPanel from './components/MobileAnalyticsPanel';
import CookieConsent from './components/CookieConsent';
import ServicesSkeleton from './components/ServicesSkeleton';
import PublicationsSkeleton from './components/PublicationsSkeleton';
import NewsletterForm from './components/NewsletterForm';
import CaseStudiesView from './components/CaseStudiesView';
import PolicyModal from './components/PolicyModal';
import ConsultationModal from './components/ConsultationModal';
import CareersModal from './components/CareersModal';
import FAQPortalView from './components/FAQPortalView';
import TechStackVisualizer from './components/TechStackVisualizer';
import LinkedInFeed from './components/LinkedInFeed';
import EngineeringIntelligenceView from './components/EngineeringIntelligenceView';
import TrustSection from './components/TrustSection';
import SampleReportsPreview from './components/SampleReportsPreview';
import ResearchPortalView from './components/ResearchPortalView';
import ResearchIndexView, { getCompanySlug } from './components/ResearchIndexView';
import { ALL_COMPANIES_RESEARCH_DATA } from './data/allCompaniesResearch';
import { pushStateAndNotify } from './utils/router';


function ResearchRouter({ onBackToHome, onBookAdvisory }: { onBackToHome: () => void, onBookAdvisory: () => void }) {
  const { companySlug } = useParams();
  const isDefaultCompany = ['omnea', 'monzo'].includes((companySlug || '').toLowerCase());
  const isTargetCompany = ALL_COMPANIES_RESEARCH_DATA.some(c => getCompanySlug(c.name) === companySlug);
  
  if (isTargetCompany && !isDefaultCompany) {
    return <ResearchIndexView onBackToHome={onBackToHome} onBookAdvisory={onBookAdvisory} />;
  } else {
    return <ResearchPortalView onBackToHome={onBackToHome} onBookAdvisory={onBookAdvisory} />;
  }
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;
  const setActiveView = (view: string) => {
    if (view === 'home') navigate('/');
    else navigate('/' + view);
  };

  // Derive activeView for Navigation and Footer highlighting
  let activeView = 'home';
  if (path.startsWith('/research-index')) {
    activeView = 'research-index';
  } else if (path.startsWith('/research/')) {
    const slug = path.replace('/research/', '');
    const isDefaultCompany = ['omnea', 'monzo'].includes(slug.toLowerCase());
    const isTargetCompany = ALL_COMPANIES_RESEARCH_DATA.some(c => getCompanySlug(c.name) === slug);
    if (isTargetCompany && !isDefaultCompany) {
      activeView = 'research-index';
    } else {
      activeView = 'research';
    }
  } else if (path === '/research') {
    activeView = 'research';
  } else if (path === '/') {
    activeView = 'home';
  } else {
    activeView = path.substring(1).split('/')[0] || 'home';
  }

  // Dynamic Page SEO and Structured Data Schema Injection
  useEffect(() => {
    const path = window.location.pathname;
    let title = seo.PAGE_META.home.title;
    let description = seo.PAGE_META.home.description;
    let robots = seo.PAGE_META.home.robots;
    let ogType = seo.PAGE_META.home.ogType;
    let keywords = seo.PAGE_META.home.keywords;

    // Handle Google Search Console verification tag dynamically if environment variable is set
    const gscCode = import.meta.env.VITE_GSC_VERIFICATION;
    if (gscCode) {
      seo.setMeta('meta[name="google-site-verification"]', 'content', gscCode);
    }

    // Resolve active metadata based on activeView
    const resolvedMeta = seo.PAGE_META[activeView];
    if (resolvedMeta) {
      title = resolvedMeta.title;
      description = resolvedMeta.description;
      robots = resolvedMeta.robots;
      ogType = resolvedMeta.ogType;
      keywords = resolvedMeta.keywords;
    }

    // Detect if we are on a specific company research profile page
    let isCompanyPage = false;
    let companyData: any = null;
    let companySlug = '';
    if (path.startsWith('/research/') && path !== '/research') {
      companySlug = path.replace('/research/', '');
      companyData = ALL_COMPANIES_RESEARCH_DATA.find(c => getCompanySlug(c.name) === companySlug);
      if (companyData) {
        isCompanyPage = true;
        const compMeta = seo.getCompanyMeta(companyData, companySlug);
        title = compMeta.title;
        description = compMeta.description;
        robots = compMeta.robots;
        ogType = compMeta.ogType;
        keywords = compMeta.keywords;
      }
    }

    // Apply document metadata tags
    document.title = title;
    seo.setMeta('meta[name="description"]', 'content', description);
    seo.setMeta('meta[name="keywords"]', 'content', keywords);
    seo.setMeta('meta[name="robots"]', 'content', robots);
    
    // Set clean canonical URL (no query parameters or hashes)
    const canonicalUrl = seo.getCanonicalUrl(path);
    seo.setLink('canonical', canonicalUrl);

    // Apply Open Graph (Facebook/LinkedIn/Slack) meta elements
    seo.setMeta('meta[property="og:title"]', 'content', title);
    seo.setMeta('meta[property="og:description"]', 'content', description);
    seo.setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    seo.setMeta('meta[property="og:type"]', 'content', ogType);
    seo.setMeta('meta[property="og:image"]', 'content', 'https://www.xaviratechlabs.com/og-image.png');
    seo.setMeta('meta[property="og:site_name"]', 'content', 'XAVIRA Technologies');

    // Apply Twitter Cards meta elements (correct name attribute)
    seo.setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    seo.setMeta('meta[name="twitter:title"]', 'content', title);
    seo.setMeta('meta[name="twitter:description"]', 'content', description);
    seo.setMeta('meta[name="twitter:image"]', 'content', 'https://www.xaviratechlabs.com/og-image.png');

    // Dynamic JSON-LD Structured Data Schema Generation
    const schemas: any[] = [];
    const siteUrl = 'https://www.xaviratechlabs.com';

    if (activeView === 'home') {
      schemas.push(
        seo.buildOrganizationSchema(),
        seo.buildWebsiteSchema(),
        seo.buildWebPageSchema(title, description, canonicalUrl)
      );
    } else if (isCompanyPage && companyData) {
      schemas.push(
        seo.buildTechArticleSchema(companyData, title, description, canonicalUrl),
        seo.buildBreadcrumbSchema([
          { name: 'Home', url: siteUrl },
          { name: 'Engineering Intelligence Library', url: `${siteUrl}/research` },
          { name: companyData.name, url: canonicalUrl }
        ]),
        seo.buildOrganizationSchema()
      );
    } else if (activeView === 'research' || activeView === 'research-index') {
      schemas.push(
        seo.buildCollectionPageSchema(title, description, canonicalUrl, ALL_COMPANIES_RESEARCH_DATA.length),
        seo.buildBreadcrumbSchema([
          { name: 'Home', url: siteUrl },
          { name: 'Engineering Intelligence Library', url: canonicalUrl }
        ])
      );
    } else if (activeView === 'services') {
      schemas.push(
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Independent Systems Engineering & Architecture Audit',
          description: 'Memory leak tracing, real-time thread safety, and latency mitigation capabilities.',
          provider: seo.buildOrganizationSchema()
        },
        seo.buildBreadcrumbSchema([
          { name: 'Home', url: siteUrl },
          { name: 'Technical Services & Specialties', url: canonicalUrl }
        ])
      );
    } else if (activeView === 'contact') {
      schemas.push(
        seo.buildContactPageSchema(),
        seo.buildOrganizationSchema()
      );
    } else if (activeView === 'about') {
      schemas.push(
        seo.buildAboutPageSchema(),
        seo.buildOrganizationSchema()
      );
    } else if (activeView === 'faq') {
      const faqsList = FAQS.slice(0, 10).map(f => ({
        question: f.question,
        answer: f.answer
      }));
      schemas.push(seo.buildFAQSchema(faqsList));
    } else {
      schemas.push(seo.buildWebPageSchema(title, description, canonicalUrl));
    }

    // Inject generated schemas into document head
    seo.injectJsonLd('seo-jsonld', schemas);

  }, [activeView, location.pathname]);

  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeServiceCategory, setActiveServiceCategory] = useState('all');
  
  // Favorites State (Save to Favorites on Articles & Case Studies)
  const [favorites, setFavorites] = useState<{ id: string; type: 'case' | 'article'; title: string; categoryOrSector: string }[]>(() => {
    try {
      const saved = localStorage.getItem('xavira_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save to LocalStorage whenever favorites changes
  useEffect(() => {
    localStorage.setItem('xavira_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (item: { id: string; type: 'case' | 'article'; title: string; categoryOrSector: string }) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.id === item.id);
      if (exists) {
        return prev.filter(f => f.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleRemoveFavorite = (id: string) => {
    setFavorites(prev => prev.filter(f => f.id !== id));
  };

  const handleNavigateToFavorite = (type: 'case' | 'article', id: string) => {
    if (type === 'case') {
      setSelectedCaseStudyId(id);
      setActiveView('cases');
    } else {
      // Find the article
      const art = RESEARCH_ARTICLES.find(a => a.id === id) || INSIGHTS.find(a => a.id === id);
      if (art) {
        setReadingArticle({
          id: art.id,
          title: art.title,
          category: art.category,
          author: art.author,
          date: art.date,
          readTime: art.readTime,
          content: art.contentMarkdown
        });
        setActiveView('research-insights');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Language State
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'de' | 'ja'>(() => {
    const saved = localStorage.getItem('xavira_language');
    return (saved as 'en' | 'de' | 'ja') || 'en';
  });

  const handleLanguageChange = (lang: 'en' | 'de' | 'ja') => {
    setCurrentLanguage(lang);
    localStorage.setItem('xavira_language', lang);
  };
  
  // Loading states for skeleton screens
  const [servicesLoading, setServicesLoading] = useState(false);
  const [publicationsLoading, setPublicationsLoading] = useState(false);

  // Accordion active FAQ state
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  // Article reading room state
  const [readingArticle, setReadingArticle] = useState<{
    id: string;
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    content: string;
  } | null>(null);

  const [readingProgress, setReadingProgress] = useState(0);

  // Policy Modal States
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [policyTab, setPolicyTab] = useState<'privacy' | 'terms' | 'sovereign' | 'governance'>('privacy');
  const [pendingScrollTo, setPendingScrollTo] = useState<string | null>(null);

  // Consultation Modal State
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);

  // Handle cross-view scrolling
  useEffect(() => {
    if (activeView === 'home' && pendingScrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingScrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setPendingScrollTo(null);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [activeView, pendingScrollTo]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Esc to close any open modal
      if (e.key === 'Escape') {
        if (isPolicyOpen) setIsPolicyOpen(false);
        if (isConsultationModalOpen) setIsConsultationModalOpen(false);
        if (isCareersOpen) setIsCareersOpen(false);
      }

      // 2. '/' key to focus active search input (when not already typing in an input/textarea)
      if (e.key === '/') {
        const activeEl = document.activeElement;
        const isTyping = activeEl && (
          activeEl.tagName === 'INPUT' || 
          activeEl.tagName === 'TEXTAREA' || 
          activeEl.getAttribute('contenteditable') === 'true'
        );

        if (!isTyping) {
          e.preventDefault();
          let targetInput: HTMLElement | null = null;
          if (activeView === 'services') {
            targetInput = document.getElementById('services-search-input');
          } else if (activeView === 'faq') {
            targetInput = document.getElementById('faq-search-input');
          } else if (activeView === 'research') {
            targetInput = document.getElementById('research-search-input');
          }
          if (targetInput) {
            targetInput.focus();
          }
        }
      }

      // 3. Alt+s for Services, Alt+r for Research, Alt+f for FAQ, Alt+c for Contact, Alt+h for Home
      if (e.altKey) {
        const key = e.key.toLowerCase();
        if (key === 's') {
          e.preventDefault();
          setActiveView('services');
        } else if (key === 'r') {
          e.preventDefault();
          setActiveView('research');
        } else if (key === 'f') {
          e.preventDefault();
          setActiveView('faq');
        } else if (key === 'c') {
          e.preventDefault();
          setActiveView('contact');
        } else if (key === 'h') {
          e.preventDefault();
          setActiveView('home');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeView, isPolicyOpen, isConsultationModalOpen, isCareersOpen]);

  // Removed manual routing syncs in favor of React Router

  // Monitor scroll progress for reading article
  useEffect(() => {
    if (!readingArticle) {
      setReadingProgress(0);
      return;
    }

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      } else {
        setReadingProgress(100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [readingArticle]);

  // Auto-scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeView]);

  // Trigger loading state for services on view entry or category filter change
  useEffect(() => {
    if (activeView === 'services') {
      setServicesLoading(true);
      const timer = setTimeout(() => {
        setServicesLoading(false);
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [activeView, activeServiceCategory]);

  // Trigger loading state for research/publications on view entry
  useEffect(() => {
    if (activeView === 'research-insights') {
      setPublicationsLoading(true);
      const timer = setTimeout(() => {
        setPublicationsLoading(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [activeView]);

  const handleReloadServices = () => {
    setServicesLoading(true);
    setTimeout(() => setServicesLoading(false), 550);
  };

  const handleReloadPublications = () => {
    setPublicationsLoading(true);
    setTimeout(() => setPublicationsLoading(false), 600);
  };

  const handleOpenArticle = (art: any) => {
    setReadingArticle({
      id: art.id,
      title: art.title,
      category: art.category,
      author: art.author,
      date: art.date,
      readTime: art.readTime,
      content: art.contentMarkdown
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateFromPackage = (pkgId: string) => {
    if (pkgId === 'xavira-discovery') {
      setActiveView('book');
    } else {
      setIsConsultationModalOpen(true);
    }
  };

  // Service categories
  const categories = [
    { label: 'All Capabilities', value: 'all' },
    { label: 'Diagnostic & Architecture', value: 'diagnostic' },
    { label: 'Sovereign Systems', value: 'systems' },
    { label: 'Operations & SRE', value: 'operations' }
  ];

  const getServiceCategory = (serviceId: string): string => {
    if (['engineering-intelligence', 'architecture-consulting', 'managed-services'].includes(serviceId)) {
      return 'diagnostic';
    }
    if (['ai-engineering', 'backend-engineering', 'cloud-engineering', 'platform-engineering', 'data-engineering'].includes(serviceId)) {
      return 'systems';
    }
    return 'operations'; // devops, cybersecurity, mission-control
  };

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeServiceCategory === 'all' || getServiceCategory(service.id) === activeServiceCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-black text-zinc-200 min-h-screen flex flex-col font-sans selection:bg-white selection:text-black antialiased relative">
      <Analytics />
      
      {/* Horizontal Reading Progress Bar */}
      {readingArticle && (
        <div 
          id="reading-progress-container"
          className="fixed top-0 left-0 right-0 h-1 bg-zinc-950/40 backdrop-blur-md z-[250] overflow-hidden"
        >
          <div 
            id="reading-progress-bar"
            className="h-full bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-75 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      )}
      
      {/* Global Background with 250px Rainbow Lines on Plain Black */}
      <AiInteractiveBackground />
      
      {/* Sovereign Notice Ticker */}
      <div className="bg-[#030611]/80 backdrop-blur-md border-b border-zinc-900 py-2 px-4 text-center text-[9px] font-mono tracking-widest text-zinc-400 flex items-center justify-center gap-2 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
        <span>INDEPENDENT SYSTEMS ENGINEERING • NO NEED TO BELIEVE BLINDLY • REVIEW OUR CASE STUDIES, START A CALL, AND LET'S SOLVE IT TOGETHER</span>
      </div>

      {/* Global Navigation */}
      <Navigation 
        activeView={activeView} 
        setActiveView={setActiveView} 
        setSelectedCaseStudyId={setSelectedCaseStudyId}
        setReadingArticle={setReadingArticle}
        onCareersClick={() => setIsCareersOpen(true)}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
        onNavigateToFavorite={handleNavigateToFavorite}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView + (readingArticle ? '-reading' : '')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            
            {/* READING ROOM ACTIVE VIEW */}
            {readingArticle ? (
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={() => setReadingArticle(null)}
                    className="font-mono text-xs text-zinc-500 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    ← BACK TO PUBLICATIONS HUB
                  </button>
                  <div className="flex items-center gap-2 select-none">
                    <span className="font-mono text-[9px] tracking-wider text-zinc-500 uppercase">
                      PROGRESS:
                    </span>
                    <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950/20 border border-cyan-500/20 px-2 py-0.5 rounded font-bold glow-text-cyan">
                      {Math.round(readingProgress)}%
                    </span>
                  </div>
                </div>

                <article className="space-y-8">
                  <div className="space-y-4 border-b border-zinc-850 pb-8">
                    <span className="font-mono text-xs tracking-widest uppercase bg-cyan-950/20 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded font-bold glow-text-cyan">
                      {readingArticle.category}
                    </span>
                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-widest leading-tight uppercase">
                      {readingArticle.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-500">
                      <span>AUTHOR: {readingArticle.author}</span>
                      <span>PUBLISHED: {readingArticle.date}</span>
                      <span>{readingArticle.readTime}</span>
                    </div>
                  </div>

                  {/* Rich text mock markdown converter */}
                  <div className="text-zinc-300 space-y-6 text-sm leading-relaxed max-w-3xl font-sans font-light">
                    {readingArticle.content.split('\n\n').map((para, i) => {
                      if (para.startsWith('###')) {
                        return (
                          <h3 key={i} className="font-display text-xl font-bold text-white pt-4 tracking-wider uppercase">
                            {para.replace('###', '').trim()}
                          </h3>
                        );
                      }
                      if (para.startsWith('* **') || para.startsWith('*')) {
                        return (
                          <ul key={i} className="space-y-2.5 pl-5 list-disc text-zinc-300">
                            {para.split('\n').map((li, idx) => (
                              <li key={idx}>
                                {li.replace('*', '').replace('**', '').replace('**', '').trim()}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      if (para.startsWith('1.')) {
                        return (
                          <ol key={i} className="space-y-2.5 pl-5 list-decimal text-zinc-300">
                            {para.split('\n').map((li, idx) => (
                              <li key={idx}>
                                {li.replace(/^\d+\.\s*/, '').trim()}
                              </li>
                            ))}
                          </ol>
                        );
                      }
                      if (para.startsWith('```')) {
                        return (
                          <pre key={i} className="bg-zinc-950 border border-zinc-850 text-xs font-mono p-4 rounded overflow-x-auto text-cyan-400 leading-relaxed">
                            {para.replace(/```/g, '').trim()}
                          </pre>
                        );
                      }
                      return <p key={i} className="text-zinc-300">{para}</p>;
                    })}
                  </div>

                  {/* Newsletter Signup Form */}
                  <div className="pt-12 mt-12 border-t border-zinc-900">
                    <NewsletterForm />
                  </div>

                  {/* Related Articles Section */}
                  <div className="pt-16 mt-16 border-t border-zinc-900 space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] tracking-widest text-cyan-400 block uppercase">
                          // RECOMMENDED INTELLIGENCE
                        </span>
                        <h4 className="font-display text-lg font-bold text-white tracking-widest uppercase">
                          Related Publications & Briefings
                        </h4>
                      </div>
                      <span className="self-start sm:self-center text-[10px] font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1 border border-zinc-900 rounded uppercase">
                        SUGGESTED BY CATEGORY: {readingArticle.category}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {(() => {
                        const allArticles = [...RESEARCH_ARTICLES, ...INSIGHTS];
                        const pool = allArticles.filter(art => art.id !== readingArticle.id);
                        
                        // Filter by same category
                        let related = pool.filter(art => art.category === readingArticle.category);
                        
                        // If we have fewer than 3, fill with other articles
                        if (related.length < 3) {
                          const selectedIds = new Set(related.map(art => art.id));
                          const leftovers = pool.filter(art => !selectedIds.has(art.id));
                          related = [...related, ...leftovers.slice(0, 3 - related.length)];
                        }
                        
                        return related.slice(0, 3);
                      })().map((art) => (
                        <div
                          key={art.id}
                          onClick={() => handleOpenArticle(art)}
                          className="bg-[#030712]/40 border border-zinc-900 hover:border-cyan-500/30 rounded-lg p-5 flex flex-col justify-between h-[220px] transition-all duration-300 group cursor-pointer relative overflow-hidden hover:shadow-[0_4px_20px_rgba(6,182,212,0.03)]"
                        >
                          {/* Ambient micro-glow effect */}
                          <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-transparent group-hover:border-cyan-500/30 transition-all" />
                          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-transparent group-hover:border-cyan-500/30 transition-all" />

                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="font-mono font-bold text-cyan-400 bg-cyan-950/20 border border-cyan-500/10 px-2 py-0.5 rounded uppercase tracking-wide">
                                {art.category}
                              </span>
                              <span className="font-mono text-zinc-500">{art.readTime}</span>
                            </div>
                            <h5 className="font-display text-sm font-bold text-white tracking-wide uppercase line-clamp-2 group-hover:text-cyan-400 transition-colors">
                              {art.title}
                            </h5>
                            <p className="text-xs text-zinc-400 line-clamp-3 font-light leading-relaxed">
                              {art.summary}
                            </p>
                          </div>

                          <div className="border-t border-zinc-900/60 pt-3 flex items-center justify-between text-[10px] font-mono text-zinc-500 mt-2">
                            <span className="truncate max-w-[120px]" title={art.author}>
                              BY: {art.author.split(',')[0]}
                            </span>
                            <span className="text-zinc-400 font-semibold group-hover:text-white flex items-center gap-1 transition-colors">
                              READ NOW →
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-12 border-t border-zinc-850 flex justify-between items-center">
                    <div className="text-xs text-zinc-500 font-mono">
                      XAVIRA INTELLIGENCE NETWORK // © 2026
                    </div>
                    <button
                      onClick={() => setReadingArticle(null)}
                      className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-zinc-950 text-xs font-mono font-bold uppercase tracking-wider rounded transition-all glow-cyan"
                    >
                      Close Publication
                    </button>
                  </div>
                </article>
              </div>
            ) : (
              <Routes>
              {/* VIEW 1: HOME PAGE */}
              <Route path="/" element={ <>

              <div>
                {/* Hero Section */}
                <section className="relative overflow-hidden py-24 lg:py-36 border-b border-[#0f1d3a] bg-transparent enterprise-grid">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
                    
                    <div className="inline-flex items-center gap-2 bg-[#040c1e]/60 backdrop-blur-md border border-[#1e2d4a]/80 rounded px-4 py-1.5 text-xs font-mono text-cyan-400 mx-auto select-none font-medium">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 animate-pulse" />
                      <span>[ {TRANSLATIONS[currentLanguage].trustTitle} • {TRANSLATIONS[currentLanguage].trustSubtitle} ]</span>
                    </div>

                    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extralight text-white tracking-wide leading-[1.15] max-w-5xl mx-auto uppercase">
                      {TRANSLATIONS[currentLanguage].heroTitle}
                    </h1>

                    <p className="font-sans text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
                      {TRANSLATIONS[currentLanguage].heroSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                      <button
                        onClick={() => setActiveView('book')}
                        className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-zinc-200 text-xs font-mono font-bold uppercase tracking-wider rounded transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {TRANSLATIONS[currentLanguage].heroCtaPrimary}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setActiveView('research')}
                        className="w-full sm:w-auto px-8 py-4 bg-[#040c1e]/60 border border-[#1e2d4a]/80 text-zinc-300 hover:text-white hover:border-cyan-500/50 hover:bg-[#07132e]/80 text-xs font-mono font-bold uppercase tracking-wider rounded transition-all duration-150 cursor-pointer"
                      >
                        {TRANSLATIONS[currentLanguage].heroCtaSecondary}
                      </button>
                    </div>

                    {/* Brand Trust Bar */}
                    <div className="pt-20 border-t border-zinc-900 max-w-5xl mx-auto">
                      <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-6">
                        // SPECIALIST DOMAINS UNDER ACTIVE ADVISORY
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-85 justify-items-center font-mono text-zinc-400 tracking-wider text-[10px]">
                        <span className="hover:text-white transition-colors cursor-pointer">[FINTECH]</span>
                        <span className="hover:text-white transition-colors cursor-pointer">[AI_INFRASTRUCTURE]</span>
                        <span className="hover:text-white transition-colors cursor-pointer">[HEALTHTECH]</span>
                        <span className="hover:text-white transition-colors cursor-pointer">[DATA_LAKES]</span>
                        <span className="hover:text-white transition-colors cursor-pointer">[CYBER_SECURITY]</span>
                        <span className="hover:text-white transition-colors cursor-pointer">[ENTERPRISE_CLOUD]</span>
                      </div>
                    </div>

                  </div>
                </section>

                {/* Brand Trust Logo Carousel Section */}
                <ScrollAnimate>
                  <section className="py-24 lg:py-32 border-b border-[#0f1d3a] bg-transparent overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center space-y-6">
                      <span className="font-mono text-[10px] tracking-widest text-cyan-400 bg-cyan-950/20 border border-cyan-500/20 px-3.5 py-1.5 rounded uppercase font-bold glow-text-cyan">
                        [ AUDITED SYSTEMS & TRUST ]
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-light text-white tracking-widest uppercase">
                        PROVABLE SYSTEMS INTEGRITY
                      </h2>
                      <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                        High-growth fintech, biodata, and AI infrastructure platforms audited, optimised, and certified under our strict independent protocols.
                      </p>
                    </div>

                    {/* Horizontal Infinite Marquee Carousel Container */}
                    <div className="relative w-full overflow-hidden py-8 bg-[#040c1e]/45 backdrop-blur-sm border-y border-[#0f1d3a]/80">
                      {/* Shadow overlays for smooth fade effect at edges */}
                      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
                      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
                      
                      <div className="animate-marquee flex gap-12 items-center">
                        {/* First set */}
                        {AUDITED_BRANDS.map((brand, bIdx) => (
                          <div 
                            key={`b1-${bIdx}`} 
                            onClick={() => {
                              const caseId = brand.name.toLowerCase().replace(/\s+/g, '-');
                              setSelectedCaseStudyId(caseId);
                              setActiveView('cases');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="flex items-center gap-5 bg-zinc-900/30 border border-zinc-850 hover:border-cyan-500/30 px-7 py-4.5 rounded-lg transition-all duration-300 select-none shrink-0 group hover:shadow-[0_0_20px_rgba(6,182,212,0.06)] cursor-pointer"
                          >
                            <span className="text-base text-cyan-400 font-mono filter drop-shadow-[0_0_6px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform">
                              {brand.symbol}
                            </span>
                            <div className="text-left">
                              <span className="block font-display text-xs font-black text-white tracking-widest group-hover:text-cyan-400 transition-colors uppercase">
                                {brand.name}
                              </span>
                              <span className="block text-[10px] font-mono text-zinc-500 mt-1 uppercase tracking-tight">
                                Ref: {brand.ref} • {brand.metric}
                              </span>
                            </div>
                          </div>
                        ))}
                        {/* Second set for infinite effect */}
                        {AUDITED_BRANDS.map((brand, bIdx) => (
                          <div 
                            key={`b2-${bIdx}`} 
                            onClick={() => {
                              const caseId = brand.name.toLowerCase().replace(/\s+/g, '-');
                              setSelectedCaseStudyId(caseId);
                              setActiveView('cases');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="flex items-center gap-5 bg-zinc-900/30 border border-zinc-850 hover:border-cyan-500/30 px-7 py-4.5 rounded-lg transition-all duration-300 select-none shrink-0 group hover:shadow-[0_0_20px_rgba(6,182,212,0.06)] cursor-pointer"
                          >
                            <span className="text-base text-cyan-400 font-mono filter drop-shadow-[0_0_6px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform">
                              {brand.symbol}
                            </span>
                            <div className="text-left">
                              <span className="block font-display text-xs font-black text-white tracking-widest group-hover:text-cyan-400 transition-colors uppercase">
                                {brand.name}
                              </span>
                              <span className="block text-[10px] font-mono text-zinc-500 mt-1 uppercase tracking-tight">
                                Ref: {brand.ref} • {brand.metric}
                              </span>
                            </div>
                          </div>
                        ))}
                        {/* Third set for safety margin and seamless wraps */}
                        {AUDITED_BRANDS.map((brand, bIdx) => (
                          <div 
                            key={`b3-${bIdx}`} 
                            onClick={() => {
                              const caseId = brand.name.toLowerCase().replace(/\s+/g, '-');
                              setSelectedCaseStudyId(caseId);
                              setActiveView('cases');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="flex items-center gap-5 bg-zinc-900/30 border border-zinc-850 hover:border-cyan-500/30 px-7 py-4.5 rounded-lg transition-all duration-300 select-none shrink-0 group hover:shadow-[0_0_20px_rgba(6,182,212,0.06)] cursor-pointer"
                          >
                            <span className="text-base text-cyan-400 font-mono filter drop-shadow-[0_0_6px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform">
                              {brand.symbol}
                            </span>
                            <div className="text-left">
                              <span className="block font-display text-xs font-black text-white tracking-widest group-hover:text-cyan-400 transition-colors uppercase">
                                {brand.name}
                              </span>
                              <span className="block text-[10px] font-mono text-zinc-500 mt-1 uppercase tracking-tight">
                                Ref: {brand.ref} • {brand.metric}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </ScrollAnimate>

                {/* Engineering Impact Dashboard Section */}
                <ScrollAnimate>
                  <EngineeringImpactDashboard />
                </ScrollAnimate>

                {/* Sovereign Target Scanning Registry Section */}
                <ScrollAnimate>
                  <section className="py-24 lg:py-32 border-b border-zinc-900 bg-transparent">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-8">
                        <div className="space-y-3">
                          <span className="font-mono text-[10px] tracking-widest text-cyan-400 bg-cyan-950/20 border border-cyan-500/20 px-3.5 py-1.5 rounded uppercase font-bold glow-text-cyan">
                            [ CTO TARGET INTEL DIRECTORY ]
                          </span>
                          <h2 className="font-display text-2xl sm:text-4xl font-light text-white tracking-widest uppercase">
                            Sovereign Scanning Ledgers
                          </h2>
                          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed font-light">
                            Direct, unvarnished access to deep-dive security profiles, architecture audits, and memory-overhead scaling blueprints across 104 high-growth enterprise systems.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            navigate('/research-index');
                            setActiveView('research-index');
                          }}
                          className="px-5 py-3 bg-zinc-950 border border-zinc-800 text-xs font-mono tracking-wider hover:border-zinc-500 hover:text-white transition-all rounded text-zinc-400 cursor-pointer"
                        >
                          EXPLORE ALL 104 CHANNELS →
                        </button>
                      </div>

                      {/* Displaying some key targets on home page */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          { name: 'Doppel', sector: 'Cybersecurity / AI', tr: '$129M', slug: 'doppel', geo: 'USA' },
                          { name: 'Adaptive Security', sector: 'Cybersecurity / AI', tr: '$145M', slug: 'adaptive-security', geo: 'USA' },
                          { name: 'Camber Health', sector: 'HealthTech / FinTech', tr: '$50M', slug: 'camber-health', geo: 'USA' },
                          { name: 'Clay', sector: 'DevTools / AI', tr: '$100M+', slug: 'clay', geo: 'USA' },
                          { name: 'PhysicsX', sector: 'AI / DeepTech', tr: '$489M', slug: 'physicsx', geo: 'UK' },
                          { name: 'Graphite', sector: 'DevTools / AI', tr: '$72M', slug: 'graphite', geo: 'USA' },
                        ].map((target, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              navigate(`/research/${target.slug}`);
                              setActiveView('research-index');
                            }}
                            className="bg-[#030611]/80 border border-zinc-900 hover:border-cyan-500/40 p-6 rounded transition-all duration-200 group cursor-pointer relative overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-cyan-500/30 transition-all" />
                            <div className="space-y-4">
                              <div className="flex items-center justify-between text-[10px] font-mono">
                                <span className="text-zinc-500 font-bold">[CORE_RECON_{String(idx + 1).padStart(2, '0')}]</span>
                                <span className="text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded">{target.geo}</span>
                              </div>
                              <div className="space-y-1">
                                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                                  {target.name}
                                </h3>
                                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/20 border border-cyan-500/10 px-2 py-0.5 rounded uppercase font-bold block w-fit">
                                  {target.sector}
                                </span>
                              </div>
                              <div className="pt-3 border-t border-zinc-900/60 flex items-center justify-between text-xs font-mono text-zinc-550">
                                <span>Total Raised: <strong className="text-zinc-300 font-bold">{target.tr}</strong></span>
                                <span className="text-zinc-400 group-hover:text-cyan-400 transition-colors font-semibold">VIEW AUDIT →</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </ScrollAnimate>

                {/* Positioning Core Statement */}
                <section className="py-32 lg:py-40 bg-gradient-to-b from-[#02040a]/45 via-[#030611]/25 to-[#02040a]/45 border-b border-zinc-900/60">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                      <div className="lg:col-span-5 space-y-6">
                        <span className="font-mono text-[10px] text-zinc-400 bg-zinc-950 border border-zinc-800 px-3 py-1.5 rounded tracking-wider uppercase">
                          // BRAND AUDIT STATEMENT
                        </span>
                        <h2 className="font-display text-3xl sm:text-5xl font-light text-white tracking-widest uppercase leading-tight">
                          We enforce architectural certainty.
                        </h2>
                      </div>
                      <div className="lg:col-span-7 space-y-8 text-sm sm:text-base leading-relaxed font-light text-zinc-400">
                        <p>
                          Standard development pipelines prioritise immediate feature delivery over long-term structural integrity. This trade-off introduces subtle concurrency stalls, memory leaks, and compliance gaps that emerge only under peak operational loads.
                        </p>
                        <p className="text-white font-semibold font-mono border-l-2 border-cyan-500 pl-6 bg-zinc-950/80 py-4 pr-4 rounded-r border-y border-r border-zinc-900">
                          XAVIRA operates on a rigorous independent model. We verify structural integrity through deep mathematical and static code analysis prior to execution. We believe that thorough architectural audit is the only prerequisite to resilient system performance.
                        </p>
                        <div className="pt-6 border-t border-zinc-900 font-mono text-xs tracking-wider text-zinc-400 uppercase flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          <span>SYSTEM RELIABILITY</span>
                          <span className="text-cyan-500/80 font-bold">•</span>
                          <span>CONCURRENCY SCALING</span>
                          <span className="text-cyan-500/80 font-bold">•</span>
                          <span>ZERO CLOUD WASTE</span>
                          <span className="text-cyan-500/80 font-bold">•</span>
                          <span>DIRECT REFACTORING</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Trust & Verification Section */}
                <section className="py-32 lg:py-40 border-b border-zinc-900/60 bg-gradient-to-b from-[#02040a]/30 via-[#030712]/15 to-[#02040a]/30">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    <div className="text-center space-y-4">
                      <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
                        Sovereign Compliance & Standards
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-light text-white tracking-widest uppercase">
                        Trust & Verification
                      </h2>
                      <p className="text-sm text-zinc-400 max-w-xl mx-auto font-light">
                        Our independent engineering architecture, deployment arrays, and codebases are certified against elite global assurance frameworks.
                      </p>
                    </div>

                    {/* Monochromatic Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 border border-zinc-900 divide-y md:divide-y-0 md:divide-x divide-zinc-900 bg-black rounded overflow-hidden">
                      
                      <div className="p-6 space-y-4 hover:bg-zinc-950 transition-colors group">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-zinc-400 font-bold">[STD.ISO.27001]</span>
                          <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center font-mono text-xs font-bold bg-zinc-950 text-zinc-300 group-hover:bg-white group-hover:text-black transition-colors duration-200">i</div>
                        </div>
                        <h3 className="font-display text-base font-bold text-white tracking-wide uppercase">
                          ISO 27001 Certified
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed font-light">
                          Comprehensive validation of our internal information security systems, access protocols, and code storage repositories.
                        </p>
                      </div>

                      <div className="p-6 space-y-4 hover:bg-zinc-950 transition-colors group">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-zinc-400 font-bold">[TYP.SOC2.SEC]</span>
                          <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center font-mono text-xs font-bold bg-zinc-950 text-zinc-300 group-hover:bg-white group-hover:text-black transition-colors duration-200">s</div>
                        </div>
                        <h3 className="font-display text-base font-bold text-white tracking-wide uppercase">
                          SOC2 Type II Ready
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed font-light">
                          Audited infrastructure engineering and operational guidelines compliant with continuous threat prevention and logging systems.
                        </p>
                      </div>

                      <div className="p-6 space-y-4 hover:bg-zinc-950 transition-colors group">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-zinc-400 font-bold">[AWS.GCP.PTN]</span>
                          <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center font-mono text-xs font-bold bg-zinc-950 text-zinc-300 group-hover:bg-white group-hover:text-black transition-colors duration-200">c</div>
                        </div>
                        <h3 className="font-display text-base font-bold text-white tracking-wide uppercase">
                          Cloud Partner Badges
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed font-light">
                          Certified advanced deployment solutions matching security and architectural standards for both AWS Well-Architected and GCP Cloud.
                        </p>
                      </div>

                      <div className="p-6 space-y-4 hover:bg-zinc-950 transition-colors group">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-zinc-400 font-bold">[CRS.PEN.TST]</span>
                          <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center font-mono text-xs font-bold bg-zinc-950 text-zinc-300 group-hover:bg-white group-hover:text-black transition-colors duration-200">p</div>
                        </div>
                        <h3 className="font-display text-base font-bold text-white tracking-wide uppercase">
                          Accredited Pen-Testing
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed font-light">
                          Periodic external application penetrations and dynamic memory scanning validation ensuring extreme resilience against malicious actions.
                        </p>
                      </div>

                    </div>
                  </div>
                </section>

                {/* Process Stage Walkthrough */}
                <section className="py-24 border-b border-zinc-900/60 bg-gradient-to-b from-[#02040a]/50 via-[#030712]/20 to-[#02040a]/50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-900 pb-6">
                      <div>
                        <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-1">
                          Sovereign Methodology
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-light text-white tracking-widest uppercase">
                          The Engagement Process
                        </h2>
                      </div>
                      <button
                        onClick={() => setActiveView('about')}
                        className="font-mono text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors self-start md:self-end font-medium"
                      >
                        [READ CORE PRINCIPLES] →
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {PROCESS_STAGES.map((stage) => (
                        <div 
                          key={stage.id} 
                          className="bg-zinc-950 border border-zinc-900 rounded p-6 flex flex-col justify-between space-y-6 hover:border-zinc-750 transition-colors group relative"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[10px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                                Stage {stage.step}
                              </span>
                              {stage.duration && (
                                <span className="font-mono text-[10px] text-zinc-500">{stage.duration}</span>
                              )}
                            </div>
                            <h3 className="font-display text-base font-bold text-white tracking-wide uppercase group-hover:text-zinc-300 transition-colors">
                              {stage.title}
                            </h3>
                            <p className="text-xs leading-relaxed text-zinc-400 font-light">
                              {stage.description}
                            </p>
                          </div>
                          <div className="border-t border-zinc-900 pt-4">
                            <span className="block text-[10px] font-mono uppercase text-zinc-500 mb-2">Deliverables include:</span>
                            <ul className="space-y-1.5 text-[11px] font-mono text-zinc-300">
                              {stage.deliverables.slice(0, 2).map((del, idx) => (
                                <li key={idx} className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 bg-zinc-650 rounded-full" />
                                  {del}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Interactive Architecture Section */}
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                  <div className="text-center space-y-3">
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block">
                      Engineered Blueprints
                    </span>
                    <h2 className="font-display text-2xl sm:text-4xl font-light text-white tracking-widest uppercase">
                      Deep System Auditing Map
                    </h2>
                    <p className="text-sm text-zinc-400 max-w-xl mx-auto font-light">
                      Inspect how Engineering Intelligence unmasks security vulnerabilities and concurrency stalls before deploying sovereign remediations.
                    </p>
                  </div>

                  <ArchitectureDiagram />
                </section>

                {/* Interactive Risk Heatmap Section */}
                <ScrollAnimate>
                  <RiskHeatmap />
                </ScrollAnimate>

                {/* Reviews Section & Trust Vision (5 Members) */}
                <section id="reviews-section" className="py-24 border-t border-b border-[#0f1d3a] bg-transparent relative">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
                    
                    {/* Section Heading */}
                    <div className="text-center space-y-3">
                      <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
                        [AUDITED_SYSTEMS_EVALUATION]
                      </span>
                      <h2 className="font-display text-2xl sm:text-4xl font-light text-white tracking-widest uppercase">
                        Trust Vision & Verified Reviews
                      </h2>
                      <p className="text-sm text-zinc-400 max-w-xl mx-auto font-light">
                        Read unvarnished performance reports and architectural evaluations from active enterprise technology partners.
                      </p>
                    </div>

                    {/* Trust Vision Panel */}
                    <div className="bg-[#040c1e]/40 backdrop-blur-md border border-[#1e2d4a]/80 p-6 sm:p-10 rounded relative overflow-hidden">
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-zinc-700" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-zinc-700" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-zinc-700" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-zinc-700" />
                      
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-4">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-[9px] text-zinc-300 font-mono font-semibold tracking-wider uppercase">
                              [CORPORATE_MANDATE]
                            </span>
                            <span className="font-mono text-xs text-zinc-500">SYSTEM RECONSTRUCTION & HYGIENE</span>
                          </div>
                          <h3 className="font-display text-2xl font-light text-white uppercase tracking-wide">
                            {TRUST_VISION.headline}
                          </h3>
                          <p className="text-sm text-zinc-400 font-medium font-mono tracking-wide uppercase">
                            {TRUST_VISION.subHeadline}
                          </p>
                          <p className="text-sm text-zinc-400 leading-relaxed font-light">
                            {TRUST_VISION.statement}
                          </p>
                        </div>
                        
                        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                          {TRUST_VISION.pillars.map((pillar, pIdx) => (
                            <div key={pIdx} className="bg-zinc-950 border border-zinc-900 p-4 rounded-sm space-y-2">
                              <div className="flex justify-between items-center text-xs">
                                <span className="font-mono font-bold text-white uppercase tracking-wider">
                                  {pillar.title}
                                </span>
                                <span className="font-mono text-zinc-400 text-[10px]">[ {pillar.metric} ]</span>
                              </div>
                              <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                                {pillar.detail}
                              </p>
                              {/* Stark white visual bar */}
                              <div className="h-1 bg-zinc-900 w-full overflow-hidden rounded-sm">
                                <div 
                                  className="h-full bg-white" 
                                  style={{ width: pIdx === 0 ? '94%' : pIdx === 1 ? '99%' : '90%' }} 
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 5 Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-10">
                      {TESTIMONIALS.map((test, tIdx) => (
                        <div 
                          key={tIdx} 
                          className="bg-[#030815]/80 border border-[#0f1d3a]/60 hover:border-cyan-500/30 p-8 rounded-lg flex flex-col justify-between space-y-8 transition-all duration-300 group relative shadow-[0_4px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.05)]"
                        >
                          {/* Corner Accents for high-end look */}
                          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-800 group-hover:border-cyan-500/40 transition-colors" />
                          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-800 group-hover:border-cyan-500/40 transition-colors" />

                          <div className="space-y-6">
                            {/* Header tags */}
                            <div className="flex items-center justify-between font-mono text-[9px] tracking-wider">
                              <span className="text-cyan-400 font-bold bg-cyan-950/20 border border-cyan-500/20 px-2 py-0.5 rounded uppercase">
                                {test.verifiedAuditRef}
                              </span>
                              <span className="text-zinc-400 font-bold bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                                SCORE: {test.score}
                              </span>
                            </div>

                            {/* Testimonial Quote */}
                            <p className="text-sm text-zinc-300 leading-relaxed font-light italic">
                              "{test.quote}"
                            </p>
                          </div>

                          {/* Divider line */}
                          <div className="border-t border-[#0f1d3a]/60 pt-6 flex items-center gap-4">
                            {/* Profile Avatar Container */}
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-cyan-500/50 transition-all shrink-0 bg-zinc-900 relative">
                              {test.imageUrl ? (
                                <img 
                                  src={test.imageUrl} 
                                  alt={test.name} 
                                  className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                  referrerPolicy="no-referrer"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center font-mono font-bold text-sm text-white select-none">
                                  {test.name.substring(0, 2).toUpperCase()}
                                </div>
                              )}
                            </div>
                            <div>
                              <h4 className="font-display text-sm font-black text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                                {test.name}
                              </h4>
                              <p className="text-xs text-zinc-500 font-mono tracking-tight leading-none mt-1.5">
                                {test.role} <span className="text-zinc-300 font-semibold">@ {test.company}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </section>

                <ScrollAnimate>
                  <TrustSection />
                </ScrollAnimate>

                {/* Industry Verticals */}
                <section className="py-24 border-b border-[#0f1d3a] bg-transparent">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="flex justify-between items-end border-b border-[#0f1d3a] pb-6">
                      <div>
                        <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-1">
                          Domain Specialisation
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">
                          Target Industries
                        </h2>
                      </div>
                      <button
                        onClick={() => setActiveView('industries')}
                        className="font-mono text-xs text-zinc-400 hover:text-white font-semibold uppercase tracking-wider"
                      >
                        [VIEW ALL SECTOR PROFILES]
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {INDUSTRIES.map((ind) => (
                        <div 
                          key={ind.id} 
                          className="bg-[#040c1e]/60 border border-[#0f1d3a]/60 rounded p-6 space-y-4 hover:border-cyan-500/30 shadow-sm transition-colors cursor-pointer"
                          onClick={() => setActiveView('industries')}
                        >
                          <h3 className="font-display text-base font-bold text-white tracking-tight uppercase">
                            {ind.name}
                          </h3>
                          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                            {ind.tagline}
                          </p>
                          <div className="text-xs font-mono text-zinc-300 font-medium pt-2 border-t border-[#0f1d3a]/60">
                            {ind.evidence}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                    {/* Engagement CTA */}
                <section className="py-24 border-t border-[#0f1d3a] bg-transparent relative overflow-hidden">
                  <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
                    <h2 className="font-display text-3xl sm:text-4xl font-light text-white tracking-widest uppercase">
                      Don't believe anyone blindly.
                    </h2>
                    <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
                      Review our case studies, look at the evidence, and start a call with us to begin your journey. Let's solve your platform bottlenecks together.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={() => setActiveView('book')}
                        className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-zinc-200 text-xs font-mono font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Start a Call With Us <ArrowRight className="w-4 h-4" />
                      </button>
                      <a
                        href="mailto:vishnunani2129@gmail.com"
                        className="w-full sm:w-auto px-8 py-4 bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-900 text-xs font-mono font-bold uppercase tracking-wider rounded transition-all text-center inline-flex items-center justify-center"
                      >
                        Direct Engineering Inquiry
                      </a>
                    </div>
                  </div>
                </section>
                </section>
              </div>
            </>} />
            {/* VIEW 2: PHILOSOPHY & ABOUT */}
            <Route path="/about" element={ <>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-20">
                {/* Header */}
                <div className="max-w-3xl space-y-4">
                  <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
                    [IDENTITY & MANIFESTO]
                  </span>
                  <h1 className="font-display text-3xl sm:text-5xl font-light text-white tracking-widest uppercase">
                    Engineering Intelligence is the precursor to sound execution.
                  </h1>
                  <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                    XAVIRA Technologies was established on the conviction that high-growth companies deserve transparent, uncompromising technical auditing and engineering excellence.
                  </p>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-zinc-950 border border-zinc-900 p-8 rounded space-y-4 shadow-sm hover:border-zinc-700 transition-colors">
                    <span className="font-mono text-xs uppercase text-zinc-400 font-bold tracking-widest">[OUR MISSION]</span>
                    <h3 className="font-display text-xl font-light text-white tracking-widest uppercase">Resilience in Critical Systems</h3>
                    <p className="text-sm leading-relaxed text-zinc-400 font-light">
                      {METADATA.mission}
                    </p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-900 p-8 rounded space-y-4 shadow-sm hover:border-zinc-700 transition-colors">
                    <span className="font-mono text-xs uppercase text-zinc-400 font-bold tracking-widest">[OUR VISION]</span>
                    <h3 className="font-display text-xl font-light text-white tracking-widest uppercase">Eliminating Architectural Failures</h3>
                    <p className="text-sm leading-relaxed text-zinc-400 font-light">
                      {METADATA.vision}
                    </p>
                  </div>
                </div>

                {/* Core Principles */}
                <div className="space-y-10">
                  <div className="border-b border-zinc-900 pb-4">
                    <h2 className="font-display text-2xl font-light text-white tracking-widest uppercase">// OUR CORE PRINCIPLES</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {METADATA.corePrinciples.map((principle, index) => (
                      <div key={index} className="space-y-3 p-6 border border-zinc-900 bg-zinc-950 rounded shadow-sm hover:border-zinc-700 transition-colors">
                        <span className="font-mono text-xs text-zinc-400 block font-bold">[ 0{index + 1} / PRINCIPLE ]</span>
                        <h3 className="font-display text-lg font-normal text-white uppercase tracking-wide">{principle.title}</h3>
                        <p className="text-xs leading-relaxed text-zinc-400 font-light">
                          {principle.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why XAVIRA Contrast table */}
                <div className="bg-zinc-950 border border-zinc-900 rounded p-6 lg:p-8 space-y-6 shadow-sm">
                  <div className="text-center md:text-left">
                    <h3 className="font-display text-xl font-bold text-white tracking-tight uppercase">Why XAVIRA?</h3>
                    <p className="text-xs text-zinc-500 mt-1 font-mono">// A comparative look at our engineering delivery philosophy.</p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono text-zinc-400 border-collapse">
                      <thead>
                        <tr className="border-b border-zinc-900 text-white">
                          <th className="py-3 px-4 uppercase tracking-wider font-bold">Structural Parameter</th>
                          <th className="py-3 px-4 uppercase tracking-wider text-zinc-500 font-semibold">[CONVENTIONAL IMPLEMENTATIONS]</th>
                          <th className="py-3 px-4 uppercase tracking-wider text-white font-semibold">[XAVIRA ARCHITECTURAL AUDIT & IMPLEMENTATION]</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-900">
                        <tr>
                          <td className="py-4 px-4 font-bold text-white">Core Incentive</td>
                          <td className="py-4 px-4 text-zinc-500">Feature-volume output and hour utilization.</td>
                          <td className="py-4 px-4 text-white font-medium">Formal verification of architectural integrity and system stability.</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 font-bold text-white">Auditing Rigor</td>
                          <td className="py-4 px-4 text-zinc-500">Pre-delivery assessments are absent.</td>
                          <td className="py-4 px-4 text-white font-medium">Rigorous static, dynamic code analysis, and system dependency mapping.</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 font-bold text-white">Resource Allocation</td>
                          <td className="py-4 px-4 text-zinc-500">Generalist product developers.</td>
                          <td className="py-4 px-4 text-white font-medium">Experienced Principal Systems Architects distributed globally.</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 font-bold text-white">Deliverable Sovereignty</td>
                          <td className="py-4 px-4 text-zinc-500">Black-box custom setups and vendor dependence.</td>
                          <td className="py-4 px-4 text-white font-medium">Fully documentable, standard-compliant declarative infrastructure.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Leadership Section */}
                <div className="space-y-16 pt-16">
                  <div className="border-b border-zinc-900 pb-6">
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-2">
                      [EXECUTIVE LEADERSHIP & GOVERNANCE]
                    </span>
                    <h2 className="font-display text-3xl font-light text-white tracking-widest uppercase">// EXECUTIVE LEADERSHIP</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-zinc-950/40 border border-zinc-900 rounded-xl p-8 lg:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/5 to-transparent pointer-events-none" />
                    
                    {/* Left Column: Image and Badges */}
                    <div className="lg:col-span-4 space-y-6">
                      <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 group">
                        <img 
                          src="https://github.com/vishnuvardhanburri.png" 
                          alt="Vishnu Vardhan Burri, CEO & Chief Architect" 
                          className="object-cover w-full h-full transition-all duration-500 scale-100 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                        <div className="absolute bottom-4 left-4 font-mono text-[10px] text-cyan-400 font-bold bg-cyan-950/40 border border-cyan-500/20 px-2 py-1 rounded">
                          [TOPTAL-VETTED ARCHITECT]
                        </div>
                      </div>

                      {/* Credentials list */}
                      <div className="space-y-3 font-mono text-xs text-zinc-400 bg-black/40 border border-zinc-900 p-5 rounded-lg">
                        <div className="flex justify-between border-b border-zinc-900 pb-2">
                          <span className="text-zinc-500">Status:</span>
                          <span className="text-cyan-400 font-bold">Top 3% Globally</span>
                        </div>
                        <div className="flex justify-between border-b border-zinc-900 pb-2">
                          <span className="text-zinc-500">Authority:</span>
                          <span className="text-white font-bold">Chief Systems Director</span>
                        </div>
                        <div className="flex justify-between border-b border-zinc-900 pb-2">
                          <span className="text-zinc-500">Specialization:</span>
                          <span className="text-white">High-Scale Infrastructure</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">Advisory:</span>
                          <span className="text-emerald-400 font-semibold">Sovereign Enterprise Security Audit</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column: Bio & Core Pillars */}
                    <div className="lg:col-span-8 space-y-8">
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                          <h3 className="font-display text-3xl font-light text-white tracking-widest uppercase">
                            Vishnu Vardhan Burri
                          </h3>
                          <span className="text-xs font-mono text-cyan-500 font-bold">[ CEO & Chief Architect ]</span>
                        </div>
                        <p className="font-mono text-xs text-zinc-400">
                          Distributed Systems Architect & Infrastructure Engineer for Enterprise Platforms
                        </p>
                      </div>
                      
                      <div className="space-y-4 text-sm leading-relaxed text-zinc-300 font-light">
                        <p>
                          As a <strong>Toptal-vetted architect</strong> (globally ranked in the top 3%) and Principal Infrastructure Engineer, I specialize in designing and verifying distributed backend systems and AI infrastructure for venture-backed enterprise platforms.
                        </p>
                        <p>
                          At XAVIRA, we execute rigorous technical audits and architectural implementation. We resolve concurrency bottlenecks, secure data flow pipelines, and optimise multi-region deployments—providing CTOs and engineering leaders with high-integrity architectural reviews and execution capabilities.
                        </p>
                      </div>

                      {/* Core Pillars Grid */}
                      <div className="space-y-4">
                        <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-widest font-bold">
                          // Core Pillars of Practice:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-4 bg-black/40 border border-zinc-900 rounded-lg hover:border-cyan-500/20 transition-all">
                            <span className="block text-cyan-500 font-mono text-[10px] tracking-widest font-bold mb-2">[ARCH]</span>
                            <span className="block font-display text-xs font-bold text-white uppercase tracking-wider mb-1">Backend Architecture</span>
                            <span className="text-[11px] text-zinc-500 leading-tight block">High-concurrency systems engineered with Go, Node.js, and Python.</span>
                          </div>
                          <div className="p-4 bg-black/40 border border-zinc-900 rounded-lg hover:border-cyan-500/20 transition-all">
                            <span className="block text-cyan-500 font-mono text-[10px] tracking-widest font-bold mb-2">[AI]</span>
                            <span className="block font-display text-xs font-bold text-white uppercase tracking-wider mb-1">AI Infrastructure</span>
                            <span className="text-[11px] text-zinc-500 leading-tight block">Production-grade pipelines, vector DB indexing & custom LLM ingest.</span>
                          </div>
                          <div className="p-4 bg-black/40 border border-zinc-900 rounded-lg hover:border-cyan-500/20 transition-all">
                            <span className="block text-cyan-500 font-mono text-[10px] tracking-widest font-bold mb-2">[CLOUD]</span>
                            <span className="block font-display text-xs font-bold text-white uppercase tracking-wider mb-1">Cloud Cost Optimisation</span>
                            <span className="text-[11px] text-zinc-500 leading-tight block">Multi-region Kubernetes, DevOps, AWS/GCP optimisation & IaC (Terraform).</span>
                          </div>
                          <div className="p-4 bg-black/40 border border-zinc-900 rounded-lg hover:border-cyan-500/20 transition-all">
                            <span className="block text-cyan-500 font-mono text-[10px] tracking-widest font-bold mb-2">[DATA]</span>
                            <span className="block font-display text-xs font-bold text-white uppercase tracking-wider mb-1">Data Engineering</span>
                            <span className="text-[11px] text-zinc-500 leading-tight block">High-throughput event streaming (Kafka) & scalable analytical storage.</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-zinc-900 pt-8 space-y-6">
                        <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                          [ SOVEREIGN COMMUNICATIONS FEED ]
                        </span>
                        
                        <div className="flex flex-wrap items-center gap-4">
                          <a 
                            href="https://www.linkedin.com/in/vishnuvardhanburri/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-xs text-white bg-[#0077b5]/20 hover:bg-[#0077b5]/30 border border-[#0077b5]/30 hover:border-[#0077b5] px-4 py-3 rounded-lg transition-all"
                          >
                            <Linkedin className="w-4 h-4 text-[#0077b5] filter drop-shadow-[0_0_4px_rgba(0,119,181,0.4)]" />
                            <span>Connect on LinkedIn</span>
                          </a>

                          <a 
                            href="https://www.xaviratechlabs.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-xs text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-cyan-500/40 px-4 py-3 rounded-lg transition-all"
                          >
                            <span>Visit Portfolio</span>
                            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                          </a>
                          
                          <div className="text-xs font-mono text-zinc-400 bg-zinc-950 px-4 py-3 rounded-lg border border-zinc-900">
                            DIRECT: <a href="mailto:hello@vishnuvardhanburri.in" className="text-cyan-400 hover:text-cyan-300 font-bold">hello@vishnuvardhanburri.in</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic LinkedIn Feed Section */}
                <LinkedInFeed />

              </div>
            </>} />
            {/* VIEW 4: SERVICES DETAIL */}
            <Route path="/services" element={ <>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-12">
                
                {/* Header */}
                <div className="max-w-3xl space-y-4">
                  <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
                    [CONSULTING CAPABILITIES]
                  </span>
                  <h1 className="font-display text-3xl sm:text-5xl font-light text-white tracking-widest uppercase">
                    Sovereign Engineering Services
                  </h1>
                  <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                    Explore our 11 discrete technical services. Every engagement is staffed with elite principal engineers implementing pure system confidence.
                  </p>
                </div>

                {/* Filter and Search Bar */}
                <div className="border-t border-b border-zinc-900 py-6 flex flex-col md:flex-row gap-4 items-stretch justify-between">
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => {
                          setActiveServiceCategory(cat.value);
                          setSelectedService(null);
                        }}
                        className={`px-3 py-2 text-xs font-mono rounded transition-all ${
                          activeServiceCategory === cat.value
                            ? 'bg-white text-black font-semibold border border-white'
                            : 'bg-zinc-950 text-zinc-400 border border-zinc-900 hover:text-white hover:border-zinc-700'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Search box with manual sync */}
                  <div className="flex gap-2 w-full md:max-w-xs items-center">
                    <div className="relative flex-grow flex items-center">
                      <Search className="w-4 h-4 text-zinc-500 absolute left-3" />
                      <input
                        id="services-search-input"
                        type="text"
                        placeholder="Search capabilities / tech stacks..."
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setSelectedService(null);
                        }}
                        className="w-full bg-zinc-950 border border-zinc-900 rounded px-3 py-2.5 pl-9 text-xs font-mono text-white outline-none focus:border-zinc-500 transition-all"
                      />
                    </div>
                    <button
                      onClick={handleReloadServices}
                      disabled={servicesLoading}
                      title="Sync capabilities grid"
                      className={`p-2.5 bg-[#040c1e]/60 border border-[#0f1d3a]/60 hover:border-cyan-500/30 rounded text-zinc-400 hover:text-white transition-all flex items-center justify-center ${
                        servicesLoading ? 'animate-spin text-cyan-400' : ''
                      }`}
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Tech Stack Visualizer Component */}
                <TechStackVisualizer />

                {/* Services Grid layout */}
                {servicesLoading ? (
                  <ServicesSkeleton count={activeServiceCategory === 'all' && !searchQuery ? 9 : 3} />
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                  {filteredServices.map((service) => {
                    const isSelected = selectedService === service.id;
                    return (
                      <div 
                        key={service.id}
                        className={`bg-zinc-950 border rounded p-6 space-y-6 transition-all duration-150 relative cursor-pointer ${
                          isSelected ? 'border-zinc-400 bg-black shadow-md' : 'border-zinc-900 hover:border-zinc-700'
                        }`}
                        onClick={() => setSelectedService(isSelected ? null : service.id)}
                      >
                        <div className="space-y-2">
                           <div className="flex items-center justify-between">
                            <span className="font-mono text-[9px] text-zinc-300 uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                              {getServiceCategory(service.id)}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-400 hover:text-white transition-colors underline">
                              {isSelected ? 'Collapse Details' : 'Expand Details'}
                            </span>
                          </div>
                          <h3 className="font-display text-base font-bold text-white tracking-wide uppercase">
                            {service.title}
                          </h3>
                          <p className="text-xs text-zinc-300 leading-relaxed font-light">
                            {service.tagline}
                          </p>
                        </div>

                        {/* Interactive Drawer Content */}
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden pt-4 border-t border-zinc-850 space-y-4"
                              onClick={(e) => e.stopPropagation()} // stop collapsing on inner click
                            >
                              <div className="space-y-4">
                                <span className="block text-[10px] font-mono uppercase text-zinc-500">// Service Overview:</span>
                                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                                  {service.description}
                                </p>
                              </div>

                              {/* Problems Solved */}
                              <div className="space-y-2 border-t border-zinc-900 pt-3">
                                <span className="block text-[10px] font-mono uppercase text-red-400">// Platform Problems Solved:</span>
                                <ul className="space-y-1 text-xs text-zinc-450 font-light">
                                  {service.problemsSolved?.map((prob, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-red-500 select-none font-bold">×</span>
                                      <span>{prob}</span>
                                    </li>
                                  )) || null}
                                </ul>
                              </div>

                              {/* Deliverables List */}
                              <div className="space-y-2 border-t border-zinc-900 pt-3">
                                <span className="block text-[10px] font-mono uppercase text-zinc-400">// Guaranteed Deliverables:</span>
                                <ul className="space-y-1.5 text-xs text-zinc-300 font-light">
                                  {service.deliverables?.map((del, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                                      <span>{del}</span>
                                    </li>
                                  )) || null}
                                </ul>
                              </div>

                              {/* Tech Stack */}
                              <div className="space-y-1.5 border-t border-zinc-900 pt-3">
                                <span className="block text-[10px] font-mono uppercase text-zinc-500">// Core Technologies:</span>
                                <div className="flex flex-wrap gap-1">
                                  {service.technicalStack.map((tech, i) => (
                                    <span key={i} className="text-[10px] font-mono bg-zinc-900 text-zinc-300 px-2.5 py-0.5 border border-zinc-800 rounded">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Business Outcomes */}
                              <div className="space-y-2 border-t border-zinc-900 pt-3">
                                <span className="block text-[10px] font-mono uppercase text-zinc-400">// Key Business Outcomes:</span>
                                <ul className="space-y-1 text-xs text-zinc-355 font-light">
                                  {service.businessOutcomes?.map((out, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-zinc-550 font-mono">→</span>
                                      <span>{out}</span>
                                    </li>
                                  )) || null}
                                </ul>
                              </div>

                              {/* Target Metrics */}
                              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-900 font-mono text-xs bg-zinc-950 p-3 rounded">
                                {service.metrics.map((m, i) => (
                                  <div key={i}>
                                    <span className="block text-zinc-500 text-[9px] uppercase">{m.label}</span>
                                    <span className="text-white font-bold">{m.value}</span>
                                  </div>
                                ))}
                              </div>

                              <button
                                onClick={() => setIsConsultationModalOpen(true)}
                                className="w-full mt-4 py-2.5 bg-white text-black hover:bg-zinc-250 text-[10px] font-mono font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-1.5"
                              >
                                Request Core Scoping <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {filteredServices.length === 0 && (
                  <div className="text-center py-12 font-mono text-xs text-zinc-500">
                    No capabilities matched your search term.
                  </div>
                )}
              </>
            )}

              </div>
            </>} />
            {/* VIEW 5: CORPORATE ENGAGEMENTS */}
            <Route path="/packages" element={ <>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
                
                {/* Header */}
                <div className="max-w-3xl space-y-4">
                  <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
                    [STRUCTURED ENGAGEMENT MODELS]
                  </span>
                  <h1 className="font-display text-3xl sm:text-5xl font-light text-white tracking-widest uppercase">
                    Corporate Engagements
                  </h1>
                  <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                    Clear deliverables, fixed parameters, and unvarnished outcomes designed for enterprise software leaders.
                  </p>
                </div>

                {/* Highly-Optimized 3-Stage Engagement Journey */}
                <div className="space-y-8 bg-gradient-to-b from-zinc-950/80 to-zinc-950/30 border border-zinc-900 rounded-xl p-6 lg:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Top line scarcity */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-900/60 pb-6">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block font-bold">
                        [ SYSTEM-INTEGRITY & QUALITY FOCUS ]
                      </span>
                      <h2 className="font-display text-xl sm:text-2xl font-light text-white tracking-wider uppercase">
                        The Core Three-Stage Partnership Journey
                      </h2>
                    </div>
                    <div className="bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 px-3.5 py-1.5 rounded text-xs font-mono font-bold tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse inline-block" />
                      <span>SOW-ALIGNED EXECUTIVE PROTOCOLS</span>
                    </div>
                  </div>

                  {/* Profitability, Peace of Mind, & 12-Month Alliance value proposition */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#02050c]/80 border border-cyan-500/10 p-6 rounded-lg">
                    {/* Profitability */}
                    <div className="space-y-2">
                      <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="text-cyan-500 font-bold">✓</span>
                        <span>MAXIMISING BOTTOM-LINE PROFITABILITY</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        Every stage is structured to reclaim wasted resources immediately. By implementing Karpenter-managed dynamic scaling and unearthing over-provisioned idle clusters, we routinely carve <strong className="text-white">42%+ off cloud bills</strong>. This protects your margins, preventing the devastating "refactor and rewrite" cycle that consumes up to 80% of series-A engineering budgets.
                      </p>
                    </div>

                    {/* Peace of Mind */}
                    <div className="space-y-2 lg:border-l lg:border-zinc-900 lg:pl-8">
                      <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="text-cyan-500 font-bold">✓</span>
                        <span>UNLOCKING ABSOLUTE PEACE OF MIND</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        Deploy with complete technical confidence. We eliminate memory leak cascades, database threadlocks, and raw credential leaks, ensuring your platform is completely hardened for enterprise clients. With direct executive ingress to our Chief Systems Director, you gain a flawless, sovereign-grade reliability shield.
                      </p>
                    </div>

                    {/* Why 12-Month Minimum */}
                    <div className="space-y-2 lg:border-l lg:border-zinc-900 lg:pl-8">
                      <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="text-cyan-500 font-bold">✓</span>
                        <span>WHY WE MANDATE 12-MONTH ALIGNMENTS</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        Sovereign engineering, database scaling, and SRE control cannot be sustained on short-term, temporary patches. High-throughput systems undergo multi-quarter load shifts, major browser/OS runtime deprecations, and complex business scaling phases. A dedicated 12-month minimum commitment protects against regression errors, allows our principal architects to fully embed into your release cycles, and ensures deep compliance with our{" "}
                        <strong 
                          onClick={() => {
                            setPolicyTab('sovereign');
                            setIsPolicyOpen(true);
                          }}
                          className="text-cyan-400 font-bold underline decoration-cyan-500/30 underline-offset-2 cursor-pointer hover:text-cyan-300 transition-colors"
                        >
                          unvarnished liability caps
                        </strong>{" "}
                        and{" "}
                        <strong 
                          onClick={() => {
                            setPolicyTab('governance');
                            setIsPolicyOpen(true);
                          }}
                          className="text-cyan-400 font-bold underline decoration-cyan-500/30 underline-offset-2 cursor-pointer hover:text-cyan-300 transition-colors"
                        >
                          SLA terms
                        </strong>.
                      </p>
                      <div className="pt-1">
                        <button
                          onClick={() => {
                            setPolicyTab('governance');
                            setIsPolicyOpen(true);
                          }}
                          className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors uppercase font-bold tracking-wider flex items-center gap-1 cursor-pointer"
                        >
                          <span>[ Check Corporate SLA Policies → ]</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 3 Step Visual Path */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    
                    {/* Stage 1: Starting */}
                    <div className="bg-[#030919] border border-cyan-500/30 hover:border-cyan-400 rounded-lg p-6 space-y-4 flex flex-col justify-between hover:shadow-[0_4px_25px_rgba(6,182,212,0.1)] transition-all duration-300 relative group">
                      <div className="absolute -top-3 left-4 bg-cyan-500 text-black font-mono text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        STAGE 01 // STARTING
                      </div>
                      <div className="space-y-3 pt-2">
                        <h3 className="font-display text-base font-bold text-white tracking-wider uppercase">
                          Intelligence Audit
                        </h3>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">
                          A comprehensive 5-day deep-dive examining your entire platform architecture, failure vectors, and tech debt to construct a clear execution roadmap.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                        <span className="font-mono text-[10px] text-zinc-500 uppercase">INVESTMENT:</span>
                        <span className="font-mono text-base font-black text-cyan-400">£5,000 GBP</span>
                      </div>
                    </div>

                    {/* Stage 2: Solving */}
                    <div className="bg-[#040c21] border border-cyan-500/40 hover:border-cyan-400 rounded-lg p-6 space-y-4 flex flex-col justify-between hover:shadow-[0_4px_25px_rgba(6,182,212,0.15)] transition-all duration-300 relative group">
                      <div className="absolute -top-3 left-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-mono text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        STAGE 02 // SOLVING
                      </div>
                      <div className="space-y-3 pt-2">
                        <h3 className="font-display text-base font-bold text-white tracking-wider uppercase">
                          Transformation
                        </h3>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">
                          Direct, hands-on platform implementation. Our principal engineers step in to refactor memory bottlenecks, decouple monoliths, and secure infrastructure.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                        <span className="font-mono text-[10px] text-zinc-500 uppercase">INVESTMENT:</span>
                        <span className="font-mono text-base font-black text-cyan-400">£25,000 GBP</span>
                      </div>
                    </div>

                    {/* Stage 3: Continuing */}
                    <div className="bg-[#030919] border border-cyan-500/30 hover:border-cyan-400 rounded-lg p-6 space-y-4 flex flex-col justify-between hover:shadow-[0_4px_25px_rgba(6,182,212,0.1)] transition-all duration-300 relative group">
                      <div className="absolute -top-3 left-4 bg-cyan-500 text-black font-mono text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        STAGE 03 // CONTINUING
                      </div>
                      <div className="space-y-3 pt-2">
                        <h3 className="font-display text-base font-bold text-white tracking-wider uppercase flex items-center justify-between gap-1">
                          <span>Engineering Partner</span>
                        </h3>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">
                          Continuous strategic and tactical architectural guardrails. We act as an extension of your leadership long-term. <strong onClick={() => { setPolicyTab('sovereign'); setIsPolicyOpen(true); }} className="text-cyan-400 font-bold underline decoration-cyan-500/30 underline-offset-2 cursor-pointer hover:text-cyan-300 transition-colors">12-month mandatory partnership</strong>.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-zinc-900/60 flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-zinc-500 uppercase">INVESTMENT:</span>
                          <span className="font-mono text-base font-black text-cyan-400">£10,000 GBP / MO</span>
                        </div>
                        <div className="text-right text-[9px] font-mono text-cyan-400 uppercase font-bold tracking-wider">
                          // 12-Month Mandatory Alignment
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Footnote on dynamic scaling tiers */}
                  <div className="bg-black/30 border border-zinc-900 p-4 rounded text-[11px] text-zinc-400 leading-relaxed font-sans font-light">
                    <span className="font-mono font-bold text-zinc-300 uppercase block mb-1">
                      [ SPECIFICATION & TRAFFIC LOAD CALIBRATION ]
                    </span>
                    Our other specialized packages—such as our initial low-risk <strong className="text-zinc-200">XAVIRA Discovery (£100–£500)</strong> session or our 24/7/365 active <strong className="text-zinc-200">SRE Mission Control Operations (£25,000/month)</strong>—are dynamically calculated, included, or customized based strictly on your active platform customers volume, enterprise organizational structures, and concurrent visitor/traffic loads.
                  </div>
                </div>

                {/* Packages list */}
                <div className="space-y-10">
                  {PACKAGES.map((pkg) => {
                    const isRecommended = pkg.id === 'engineering-intelligence-audit';
                    return (
                      <div 
                        key={pkg.id} 
                        className={`relative rounded-lg p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-all duration-200 ${
                          isRecommended
                            ? 'bg-gradient-to-br from-[#030a1c]/90 to-[#02050c]/95 border-2 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:border-cyan-400'
                            : 'bg-zinc-950 border border-zinc-900 shadow-sm hover:border-zinc-700'
                        }`}
                      >
                        {isRecommended && (
                          <div className="absolute -top-3 left-6 sm:left-10 bg-cyan-500 text-black font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-cyan-500/20 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 fill-black text-black" />
                            <span>RECOMMENDED ENGAGEMENT</span>
                          </div>
                        )}

                        {/* Price / Scope block */}
                        <div className="lg:col-span-4 space-y-4">
                          <span className={`text-[10px] font-mono uppercase tracking-wider border px-2.5 py-1 rounded ${
                            pkg.id === 'engineering-intelligence-audit'
                              ? 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30 font-bold'
                              : pkg.id === 'xavira-discovery'
                              ? 'text-zinc-400 bg-zinc-900 border-zinc-800'
                              : pkg.id === 'engineering-transformation' || pkg.id === 'mission-control-operations'
                              ? 'text-cyan-400 bg-cyan-950/20 border-cyan-500/30 font-bold'
                              : 'text-zinc-450 bg-zinc-900/60 border-zinc-850'
                          }`}>
                            {pkg.id === 'xavira-discovery'
                              ? '[ TIER 01: LOW-RISK DIAGNOSTIC ]'
                              : pkg.id === 'engineering-intelligence-audit'
                              ? '[ TIER 02: PRIMARY ENTRY POINT ]'
                              : pkg.id === 'engineering-transformation' || pkg.id === 'mission-control-operations'
                              ? '[ TIER 03: FULL-SCALE EXECUTION ]'
                              : '[ ADVISORY BACKUP BLUEPRINT ]'}
                          </span>
                          <h2 className="font-display text-xl sm:text-2xl font-light text-white tracking-widest uppercase">
                            {pkg.name}
                          </h2>
                          <div className="py-2.5">
                            <span className="font-mono text-3xl font-black text-white tracking-tight">{pkg.price}</span>
                            {pkg.priceDetail && (
                              <span className="text-xs font-mono text-zinc-500 ml-1">{pkg.priceDetail}</span>
                            )}
                          </div>
                          {pkg.duration && (
                            <div className="font-mono text-xs text-cyan-400 font-bold flex flex-wrap items-center gap-1.5">
                              <span>DURATION:</span>
                              {pkg.id === 'mission-control-operations' || pkg.id === 'engineering-partner' ? (
                                <span 
                                  onClick={() => {
                                    setPolicyTab(pkg.id === 'mission-control-operations' ? 'governance' : 'sovereign');
                                    setIsPolicyOpen(true);
                                  }}
                                  className="bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 px-2 py-0.5 rounded text-[11px] tracking-wider flex items-center gap-1.5 font-bold shadow-[0_0_10px_rgba(6,182,212,0.15)] cursor-pointer hover:bg-cyan-900/80 transition-all"
                                >
                                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block animate-pulse" />
                                  12-MONTH MINIMUM COLLABORATION
                                </span>
                              ) : (
                                <span className="text-zinc-300">{pkg.duration}</span>
                              )}
                            </div>
                          )}
                          <p className="text-xs text-zinc-400 leading-relaxed font-light">
                            {pkg.id === 'mission-control-operations' ? (
                              <>
                                Enterprise-grade 24×7 system operations and reliability engineering. We keep watch over your systems day and night, proactively resolving anomalies and defending your SLAs. This is a high-commitment, institutional SRE operations alignment with a strict{" "}
                                <strong 
                                  onClick={() => {
                                    setPolicyTab('governance');
                                    setIsPolicyOpen(true);
                                  }}
                                  className="text-cyan-400 font-bold underline decoration-cyan-500/30 underline-offset-2 cursor-pointer hover:text-cyan-300 transition-colors"
                                >
                                  12-month minimum engagement duration
                                </strong>.
                              </>
                            ) : pkg.id === 'engineering-partner' ? (
                              <>
                                A continuous, long-term strategic and tactical engineering partnership. We act as an extension of your leadership team, providing deep technical guidance, priority execution, and architectural guardrails under a strict{" "}
                                <strong 
                                  onClick={() => {
                                    setPolicyTab('sovereign');
                                    setIsPolicyOpen(true);
                                  }}
                                  className="text-cyan-400 font-bold underline decoration-cyan-500/30 underline-offset-2 cursor-pointer hover:text-cyan-300 transition-colors"
                                >
                                  12-month mandatory collaboration
                                </strong>.
                              </>
                            ) : pkg.description}
                          </p>

                          {isRecommended && (
                            <div 
                              onClick={() => {
                                setPolicyTab('sovereign');
                                setIsPolicyOpen(true);
                              }}
                              className="p-3.5 bg-cyan-950/25 border border-cyan-500/15 rounded text-[11px] text-cyan-300/90 leading-relaxed font-sans font-light cursor-pointer hover:bg-cyan-950/40 hover:border-cyan-500/30 transition-all group/rec"
                            >
                              <span className="block font-mono text-[9px] text-cyan-450 uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-cyan-450 animate-pulse" />
                                <span>Why we recommend this (Click to View Sovereign Guarantees →)</span>
                              </span>
                              This is the definitive, high-trust entry point for engineering leaders. Within 5 business days, we deliver absolute architectural clarity and a clear technical roadmap with zero operational disruption.
                            </div>
                          )}
                        </div>

                        {/* Deliverables lists */}
                        <div className="lg:col-span-5 space-y-4 border-t lg:border-t-0 lg:border-l border-zinc-900 pt-6 lg:pt-0 lg:pl-8">
                          <span className="block text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                            Guaranteed Scope Deliverables:
                          </span>
                          <ul className="space-y-3 text-xs text-zinc-300 font-light">
                            {pkg.deliverables.map((del, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcomes & Call to action */}
                        <div className="lg:col-span-3 bg-zinc-950 border border-zinc-900 rounded p-5 flex flex-col justify-between space-y-6 self-stretch">
                          <div className="space-y-4">
                            <div className="space-y-1.5">
                              <span className="block text-[10px] font-mono uppercase text-zinc-500">Expected Outcome:</span>
                              <p className="text-xs text-white leading-relaxed font-semibold">
                                {pkg.outcome}
                              </p>
                            </div>

                            {/* Trust Links for Review & Portfolio */}
                            <div className="border-t border-zinc-900/60 pt-4 space-y-2.5">
                              <button
                                onClick={() => {
                                  setActiveView('home');
                                  setPendingScrollTo('reviews-section');
                                }}
                                className="w-full flex items-center gap-2 text-left text-[11px] font-mono text-zinc-400 hover:text-cyan-400 transition-colors cursor-pointer group/link"
                              >
                                <span className="text-cyan-400 font-bold text-xs select-none">★</span>
                                <span className="underline decoration-zinc-800 group-hover/link:decoration-cyan-400">Verified Client Reviews</span>
                              </button>

                              <a
                                href="https://www.linkedin.com/in/vishnuvardhanburri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center gap-2 text-left text-[11px] font-mono text-zinc-400 hover:text-cyan-400 transition-colors group/link"
                              >
                                <span className="text-cyan-400 font-bold text-xs select-none">⚛</span>
                                <span className="underline decoration-zinc-800 group-hover/link:decoration-cyan-400">CEO Professional Profile</span>
                              </a>

                              <a
                                href="https://www.xaviratechlabs.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center gap-2 text-left text-[11px] font-mono text-zinc-400 hover:text-cyan-400 transition-colors group/link"
                              >
                                <span className="text-cyan-400 font-bold text-xs select-none">⚛</span>
                                <span className="underline decoration-zinc-800 group-hover/link:decoration-cyan-400">CEO Systems Portfolio</span>
                              </a>
                            </div>
                          </div>

                          <button
                            onClick={() => handleNavigateFromPackage(pkg.id)}
                            className="w-full py-4 bg-white text-black text-xs font-mono font-bold uppercase tracking-wider rounded hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            {pkg.id === 'xavira-discovery' ? 'Book Discovery Session' : 'Request Partnership Scoping'}
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* Architectural Manifesto: What We Do, What We Do Not Do, & How We Avoid AI Boilerplate */}
                <div className="space-y-8 pt-16 border-t border-zinc-900">
                  <div className="space-y-3">
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block font-bold">
                      [ OUR SYSTEM OPERATING CHARTER ]
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-light text-white tracking-widest uppercase">
                      Engineering Principles & Alignment
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                      In this generation, don't believe anyone blindly. To establish true alignment, we lay out precisely what we do, what we absolutely do not do, and our refusal of low-quality AI automation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* What We Do */}
                    <div className="bg-[#02050e] border border-zinc-900 rounded-lg p-6 space-y-5 hover:border-zinc-850 transition-all duration-150">
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>What We Do</span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-emerald-950/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            Deep, low-level database tuning, schema redesign, and query isolation.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-emerald-950/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            High-throughput, non-blocking asynchronous concurrency models.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-emerald-950/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            Rigorous static/dynamic analysis and mathematical code audits.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-emerald-950/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            24-Hour Guaranteed Incident Response SRE SLAs.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-emerald-950/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            Sovereign, unbloated hand-written infrastructure as code.
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* What We Do Not Do */}
                    <div className="bg-[#02050e] border border-zinc-900 rounded-lg p-6 space-y-5 hover:border-zinc-850 transition-all duration-150">
                      <div className="flex items-center gap-2 text-rose-500 font-mono text-xs font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span>What We Do NOT Do</span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-rose-950/40 text-rose-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 select-none font-sans">
                            ×
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            No generic PowerPoint slide decks, templates, or high-level fluff.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-rose-950/40 text-rose-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 select-none font-sans">
                            ×
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            No third-party SaaS reselling or licensing markup commissions.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-rose-950/40 text-rose-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 select-none font-sans">
                            ×
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            No deployment of junior developers or unvetted interns to your systems.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-rose-950/40 text-rose-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 select-none font-sans">
                            ×
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            No client-side bloat, external trackers, or heavy web fonts.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-rose-950/40 text-rose-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 select-none font-sans">
                            ×
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            No blind recommendations without deep, firsthand code review.
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* How We Avoid AI Boilerplate */}
                    <div className="bg-gradient-to-br from-[#030d22]/50 to-[#010512]/60 border border-cyan-500/20 rounded-lg p-6 space-y-4 hover:border-cyan-500/30 transition-all duration-150">
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span>How We Avoid AI Boilerplate</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                        AI-generated code introduces hidden memory leaks, security vulnerabilities, and chaotic multi-threading locks that waste cloud spend and cause platform downtime.
                      </p>
                      <div className="border-t border-zinc-900/60 pt-3 space-y-2.5 text-[11px] text-zinc-400 font-mono">
                        <div className="flex items-center justify-between">
                          <span>100% HUMAN HAND-WRITTEN:</span>
                          <span className="text-cyan-400 font-bold">VERIFIED</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>ROBUST COMPILATION CHECKS:</span>
                          <span className="text-cyan-400 font-bold">PASSED</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>AI BOILERPLATE REMOVAL:</span>
                          <span className="text-emerald-400 font-bold">ACTIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Embedded Sample Scenarios from Audits */}
                <div className="space-y-6 pt-12 border-t border-zinc-900">
                  <h3 className="font-display text-xl font-bold text-white tracking-tight uppercase">// Sample Observations From Recent Audits</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                    Our diagnostic engagements reveal structural vulnerabilities before they impact production environments. Here are verified observations from actual system audits:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs text-zinc-400 font-medium">
                    <div className="border border-zinc-900 p-4 bg-zinc-950 rounded space-y-2 shadow-sm hover:border-zinc-700 transition-colors">
                      <div className="flex items-center justify-between text-zinc-500 font-bold">
                        <span>[AUDIT REF: XAV-OBS-014]</span>
                        <span className="text-rose-500 font-semibold">CRITICAL RISK</span>
                      </div>
                      <p className="text-white font-semibold font-display text-sm tracking-wide">Row-Level Locking Stalls Billing Pipelines</p>
                      <p className="text-xs text-zinc-500 leading-relaxed font-sans font-light">
                        A core Node.js transaction loop locked database customer profiles during renewal sweeps, blocking API requests for up to 12 seconds. Remediated via async queue streaming.
                      </p>
                    </div>
                    <div className="border border-zinc-900 p-4 bg-zinc-950 rounded space-y-2 shadow-sm hover:border-zinc-700 transition-colors">
                      <div className="flex items-center justify-between text-zinc-500 font-bold">
                        <span>[AUDIT REF: XAV-OBS-029]</span>
                        <span className="text-rose-500 font-semibold">SECURITY VECTOR</span>
                      </div>
                      <p className="text-white font-semibold font-display text-sm tracking-wide">Exposed RAG Embedding Tokens</p>
                      <p className="text-xs text-zinc-500 leading-relaxed font-sans font-light">
                        Internal search parameters leaked unencrypted patient diagnostic files into public training sets during client prompts. Remediated via a secure stateless security proxy.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </>} />
            {/* VIEW 6: INDUSTRIES DEEP DIVE */}
            <Route path="/industries" element={ <>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
                
                {/* Header */}
                <div className="max-w-3xl space-y-4">
                  <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
                    [TAILORED DOMAIN ARCHITECTURE]
                  </span>
                  <h1 className="font-display text-3xl sm:text-5xl font-light text-white tracking-widest uppercase">
                    Industry Specialisations
                  </h1>
                  <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                    Every vertical possesses unique transactional requirements, compliance parameters, and threat vectors. We map custom sovereign systems optimised for your domain.
                  </p>
                </div>

                {/* Verticals List */}
                <div className="space-y-12">
                  {INDUSTRIES.map((ind) => (
                    <div 
                      key={ind.id} 
                      className="bg-zinc-950 border border-zinc-900 rounded p-6 lg:p-8 space-y-6 shadow-sm hover:border-zinc-700 transition-colors"
                    >
                      <div className="border-b border-zinc-900 pb-4">
                        <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-1">[SECTOR PROFILE]</span>
                        <h2 className="font-display text-xl sm:text-2xl font-light text-white tracking-widest uppercase">
                          {ind.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-1 font-light">
                          {ind.tagline}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Challenges */}
                        <div className="space-y-4">
                          <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">
                            // Critical Architecture Roadblocks:
                          </h4>
                          <ul className="space-y-3 text-xs leading-relaxed text-zinc-400 font-light">
                            {ind.challenges.map((ch, i) => (
                              <li key={i} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-[1.5px] before:bg-zinc-700">
                                {ch}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Solutions */}
                        <div className="space-y-4">
                          <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-widest font-bold">
                            // XAVIRA Remediated Architecture:
                          </h4>
                          <ul className="space-y-3 text-xs leading-relaxed text-zinc-300 font-light">
                            {ind.solutions.map((sol, i) => (
                              <li key={i} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-[1.5px] before:bg-zinc-400 text-zinc-300">
                                {sol}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Evidence block */}
                      <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-500">[PROOF OF COMPETENCE]:</span>
                        <span className="text-white font-semibold tracking-wide uppercase">{ind.evidence}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </>} />
            {/* VIEW 7 & 8: PROCESS & WHY XAVIRA -> Integrated directly inside About & Home */}
            {/* VIEW 9 & 10: RESEARCH & INSIGHTS PUBLICATIONS */}
            <Route path="/research-insights" element={ <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-8">
                  <div className="max-w-3xl space-y-4">
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
                      [SOVEREIGN LIBRARY]
                    </span>
                    <h1 className="font-display text-3xl sm:text-5xl font-light text-white tracking-widest uppercase">
                      Technical Publications Hub
                    </h1>
                    <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                      Unbiased engineering audits, detailed whitepapers on scaling concurrency, and executive advisory on minimizing architectural debt.
                    </p>
                  </div>
                  <button
                    onClick={handleReloadPublications}
                    disabled={publicationsLoading}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#040c1e]/60 border border-[#0f1d3a]/60 hover:border-cyan-500/30 rounded text-xs font-mono text-zinc-400 hover:text-white transition-all disabled:opacity-50 select-none shrink-0"
                  >
                    <RotateCw className={`w-3.5 h-3.5 ${publicationsLoading ? 'animate-spin text-cyan-400' : ''}`} />
                    <span>{publicationsLoading ? 'SYNCING LIBRARY...' : 'SYNC LIBRARY'}</span>
                  </button>
                </div>

                {publicationsLoading ? (
                  <PublicationsSkeleton />
                ) : (
                  <>
                    <ScrollAnimate>
                      <SampleReportsPreview />
                    </ScrollAnimate>

                    {/* Section A: Research Whitepapers (D3 & Architecture diagrams focus) */}
                <div className="space-y-8">
                  <div className="border-b border-zinc-900 pb-3.5">
                    <h2 className="font-display text-xl font-bold text-white tracking-tight uppercase">// Research & Blueprints</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {RESEARCH_ARTICLES.map((art) => (
                      <div 
                        key={art.id} 
                        className="bg-zinc-950 border border-zinc-900 rounded p-6 space-y-4 flex flex-col justify-between cursor-pointer hover:border-zinc-700 transition-all shadow-xs"
                        onClick={() => handleOpenArticle(art)}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-[10px] font-mono">
                            <span className="text-zinc-300 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded uppercase font-bold tracking-widest">{art.category}</span>
                            <span className="text-zinc-500">{art.readTime}</span>
                          </div>
                          <h3 className="font-display text-base font-bold text-white tracking-tight uppercase line-clamp-2">
                            {art.title}
                          </h3>
                          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 font-light">
                            {art.summary}
                          </p>
                        </div>
                        <div className="border-t border-zinc-900 pt-3 flex items-center justify-between text-xs font-mono text-zinc-500">
                          <span>Read Count: {art.downloadCount}</span>
                          <span className="text-white flex items-center gap-1 hover:underline font-semibold">
                            Open Briefing <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section B: Insights & Blog */}
                <div className="space-y-8 pt-8">
                  <div className="border-b border-zinc-900 pb-3.5">
                    <h2 className="font-display text-xl font-bold text-white tracking-tight uppercase">// Executive Advisory Notes</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {INSIGHTS.map((ins) => (
                      <div 
                        key={ins.id} 
                        className="bg-zinc-950 border border-zinc-900 rounded p-6 space-y-4 flex flex-col justify-between cursor-pointer hover:border-zinc-700 transition-all shadow-xs"
                        onClick={() => handleOpenArticle(ins)}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-[10px] font-mono">
                            <span className="text-zinc-300 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded uppercase font-bold tracking-widest">{ins.category}</span>
                            <span className="text-zinc-500">{ins.readTime}</span>
                          </div>
                          <h3 className="font-display text-base font-bold text-white tracking-tight uppercase line-clamp-2">
                            {ins.title}
                          </h3>
                          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 font-light">
                            {ins.summary}
                          </p>
                        </div>
                        <div className="border-t border-zinc-900 pt-3 flex items-center justify-between text-xs font-mono text-zinc-500">
                          <span>Author: {ins.author.split(',')[0]}</span>
                          <span className="text-white flex items-center gap-1 hover:underline font-semibold">
                            Open Notes <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </>
            )}

              </div>
            </>} />
            {/* VIEW 11: ACCORDION FAQ */}
            <Route path="/faq" element={ <>

              <FAQPortalView 
                activeFaq={activeFaq} 
                setActiveFaq={setActiveFaq} 
              />
            </>} />
            {/* VIEW 12: CONTACT FORM */}
            <Route path="/contact" element={ <>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <ContactForm />
              </div>
            </>} />
            {/* VIEW 13: INTERACTIVE BOOKING */}
            <Route path="/book" element={ <>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <InteractiveBooking />
              </div>
            </>} />
            {/* VIEW 14: CASE STUDIES */}
            <Route path="/cases" element={ <>

              <CaseStudiesView 
                selectedId={selectedCaseStudyId}
                onBackToHome={() => setActiveView('home')}
                onBookAdvisory={() => setActiveView('book')}
                onToggleFavorite={handleToggleFavorite}
                favorites={favorites}
              />
            </>} />
            {/* VIEW 15: ENGINEERING INTELLIGENCE */}
            <Route path="/intelligence" element={ <>

              <EngineeringIntelligenceView 
                onBackToHome={() => setActiveView('home')}
                onBookAdvisory={() => setActiveView('book')}
              />
            </>} />
            {/* VIEW 16: ENGINEERING INTELLIGENCE RESEARCH PORTAL */}
            <Route path="/research" element={ <>

              <ResearchPortalView 
                onBackToHome={() => setActiveView('home')}
                onBookAdvisory={() => setActiveView('book')}
                onRouteRedirect={(path) => {
                  if (path === '/' || !path.startsWith('/research')) {
                    setActiveView('home');
                  }
                }}
              />
            </>} />
            {/* VIEW 17: CTO RESEARCH DIRECTORY */}
            <Route path="/research-index" element={ <>

              <ResearchIndexView 
                onBackToHome={() => setActiveView('home')}
                onBookAdvisory={() => setActiveView('book')}
              />
            </>} />
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/research/:companySlug" element={<ResearchRouter onBackToHome={() => setActiveView('home')} onBookAdvisory={() => setActiveView('book')} />} />
              </Routes>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Sitemap Footer */}
      <Footer 
        setActiveView={setActiveView} 
        onOpenPolicy={(tab) => {
          setPolicyTab(tab);
          setIsPolicyOpen(true);
        }}
        onCareersClick={() => setIsCareersOpen(true)}
      />

      {/* Legal & Governance Compliance Policy Modal */}
      <PolicyModal
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
        initialTab={policyTab}
      />

      {/* Consultation Gateway Modal (Choose between CEO call or Written Inquiry) */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        onBookCall={() => {
          setActiveView('book');
          setIsConsultationModalOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSendInquiry={() => {
          setActiveView('contact');
          setIsConsultationModalOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Careers Openings Notification Modal */}
      <CareersModal
        isOpen={isCareersOpen}
        onClose={() => setIsCareersOpen(false)}
      />

      {/* Global Cookie Consent Layer */}
      <CookieConsent 
        onOpenPolicy={(tab) => {
          setPolicyTab(tab);
          setIsPolicyOpen(true);
        }}
      />

      {/* Real-Time Mobile Performance Telemetry & Speed Index */}
      <MobileAnalyticsPanel />
    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
