import { BrowserRouter, useNavigate, useLocation, Routes, Route, useParams } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, ChevronDown, Sparkles, Database, Search, Globe, 
  Cpu, FileText, Activity, Compass, Shield, Users, Terminal, Cloud, Layers,
  Zap, BookOpen, FileCheck, HelpCircle, Info, Target, Award, 
  CheckSquare, Briefcase, Calendar, Phone, MessageSquare, Bookmark, Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { pushStateAndNotify } from '../utils/router';

interface NavigationProps {
  activeView: string;
  setActiveView: (view: string) => void;
  setSelectedCaseStudyId?: (id: string | null) => void;
  setReadingArticle?: (article: any) => void;
  onCareersClick?: () => void;
  currentLanguage?: 'en' | 'de' | 'ja';
  onLanguageChange?: (lang: 'en' | 'de' | 'ja') => void;
  favorites?: { id: string; type: 'case' | 'article'; title: string; categoryOrSector: string }[];
  onRemoveFavorite?: (id: string) => void;
  onNavigateToFavorite?: (type: 'case' | 'article', id: string) => void;
}

interface NavDropdownItem {
  label: string;
  description: string;
  view: string;
  caseId?: string;
  icon: any;
  disabled?: boolean;
}

interface PrimaryNavItem {
  id: string;
  label: string;
  view?: string;
  dropdown?: NavDropdownItem[];
}

export default function Navigation({ 
  activeView, 
  setActiveView, 
  setSelectedCaseStudyId,
  setReadingArticle,
  onCareersClick,
  currentLanguage = 'en',
  onLanguageChange,
  favorites = [],
  onRemoveFavorite,
  onNavigateToFavorite
}: NavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const [uptime, setUptime] = useState(99.9987);
  const [latency, setLatency] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => {
        const delta = (Math.random() - 0.5) * 0.0001;
        const next = prev + delta;
        return Number(Math.max(99.9950, Math.min(99.9999, next)).toFixed(4));
      });
      setLatency(prev => {
        const delta = Math.floor(Math.random() * 3) - 1;
        return Math.max(10, Math.min(25, prev + delta));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const navStructure: PrimaryNavItem[] = [
    {
      id: 'home',
      label: 'Home',
      view: 'home'
    },
    {
      id: 'research',
      label: 'Research',
      dropdown: [
        {
          label: 'Engineering Intelligence Library',
          description: 'Search and scan our multi-dimensional intelligence database on top enterprise technology teams.',
          view: 'research',
          icon: Database
        },
        {
          label: 'Company Research',
          description: 'Unvarnished security profiles and independent architectural audits across 104 targets.',
          view: 'research-index',
          icon: Search
        },
        {
          label: 'Industry Intelligence',
          description: 'Telemetry indices, dependency drift metrics, and tech stack analysis across major sectors.',
          view: 'industries',
          icon: Globe
        },
        {
          label: 'Technology Intelligence',
          description: 'Continuous observations of memory leak patterns, lock contention, and vulnerability vectors.',
          view: 'intelligence',
          icon: Cpu
        },
        {
          label: 'Publications',
          description: 'Rigorous public research papers, core methodology, and executive tech-stack reports.',
          view: 'research-insights',
          icon: FileText
        },
        {
          label: 'Research Methodology',
          description: 'Our objective, data-backed approach to analyzing system architectures and security.',
          view: 'about',
          icon: Activity
        }
      ]
    },
    {
      id: 'services',
      label: 'Services',
      dropdown: [
        {
          label: 'Engineering Discovery (£100)',
          description: 'Rapid 30-minute diagnostic session with an elite Principal Engineer to scan key code vectors.',
          view: 'packages',
          icon: Compass
        },
        {
          label: 'Intelligence Audit (£5,000)',
          description: 'Full 5-day static & dynamic review of codebase, systems design, and resource leakage.',
          view: 'packages',
          icon: Shield
        },
        {
          label: 'Engineering Transformation (£25k+)',
          description: 'Direct hands-on engineering intervention. Decoupling monoliths and hardening databases.',
          view: 'packages',
          icon: Layers
        },
        {
          label: 'Engineering Partner',
          description: 'Continuous strategic advisory and SOW-aligned SLA guardrails under standard annual terms.',
          view: 'packages',
          icon: Users
        },
        {
          label: 'Mission Control',
          description: 'Active 24/7/365 SRE incident monitoring, cloud spend auditing, and edge performance shields.',
          view: 'packages',
          icon: Terminal
        }
      ]
    },
    {
      id: 'cases',
      label: 'Case Studies',
      dropdown: [
        {
          label: 'Client Success Stories',
          description: 'Audited post-mortems of system refactors, thread resolution, and real operational gains.',
          view: 'cases',
          caseId: 'fintech-sovereign',
          icon: FileText
        },
        {
          label: 'Architecture Transformations',
          description: 'Replacing database state progression locks with high-performance asynchronous sequence rings.',
          view: 'cases',
          caseId: 'fintech-sovereign',
          icon: Layers
        },
        {
          label: 'Cloud Modernization',
          description: 'Deploying Karpenter dynamic autoscaling spots to shave 42% off production cloud budgets.',
          view: 'cases',
          caseId: 'nexagrid-uk',
          icon: Cloud
        },
        {
          label: 'AI Engineering',
          description: 'Securing generative model pipelines against prompt injections and telemetry leak vectors.',
          view: 'cases',
          caseId: 'quantum-core',
          icon: Cpu
        },
        {
          label: 'Performance Optimization',
          description: 'Consistently maintaining strict sub-1.8ms P99 latencies for high-throughput edge systems.',
          view: 'cases',
          caseId: 'apex-ledger',
          icon: Zap
        }
      ]
    },
    {
      id: 'insights',
      label: 'Insights',
      dropdown: [
        {
          label: 'Engineering Articles',
          description: 'Deep technical articles exploring eBPF, memory isolation, and database lock-freeness.',
          view: 'research-insights',
          icon: BookOpen
        },
        {
          label: 'Whitepapers',
          description: 'Rigorous architectural breakdowns and independent security surveys for technical buyers.',
          view: 'research-insights',
          icon: FileCheck
        },
        {
          label: 'Architecture Patterns',
          description: 'Validated blueprints for building partition-tolerant, high-throughput backend services.',
          view: 'research-insights',
          icon: Cpu
        },
        {
          label: 'Executive Briefs',
          description: 'High-level technology risk evaluations and scaling strategy briefs designed for technical leadership.',
          view: 'research-insights',
          icon: FileText
        },
        {
          label: 'FAQ',
          description: 'Clear details on our unvarnished liability caps, engagement limits, and SLA guarantees.',
          view: 'faq',
          icon: HelpCircle
        }
      ]
    },
    {
      id: 'about',
      label: 'About',
      dropdown: [
        {
          label: 'Why XAVIRA',
          description: 'Independent systems engineering, not a generic software agency or marketing firm.',
          view: 'about',
          icon: Info
        },
        {
          label: 'Our Philosophy',
          description: 'Objective telemetry, pure systems integrity, and absolute mathematical clarity.',
          view: 'about',
          icon: Target
        },
        {
          label: 'Leadership',
          description: 'Meet our elite distributed database architects and systems directors safeguarding your code.',
          view: 'about',
          icon: Award
        },
        {
          label: 'Research Principles',
          description: 'Transparent aggregated data, robust evidence trails, and continuous public validation.',
          view: 'about',
          icon: CheckSquare
        },
        {
          label: 'Careers',
          description: 'Our distributed database and systems engineering openings registry.',
          view: 'careers',
          icon: Briefcase
        }
      ]
    }
  ];

  const bookDropdown: NavDropdownItem[] = [
    {
      label: 'Book Engineering Discovery',
      description: 'Initiate an interactive 30-minute diagnostic session with our principal engineers (£100).',
      view: 'book',
      icon: Calendar
    },
    {
      label: 'Request Engineering Intelligence Audit',
      description: 'Secure a full 5-day architectural audit, resource leakage trace, and scorecard (£5,000).',
      view: 'contact',
      icon: Shield
    },
    {
      label: 'Schedule CTO Discussion',
      description: 'Confidential strategic consulting, sovereign alignment inquiries, and partner negotiations.',
      view: 'book',
      icon: Phone
    }
  ];

  const handleNavigate = (view: string, caseId?: string) => {
    if (setReadingArticle) {
      setReadingArticle(null);
    }
    if (setSelectedCaseStudyId) {
      setSelectedCaseStudyId(caseId || null);
    }
    setActiveView(view);
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
    
    if (view === 'research') {
      navigate('/research');
    } else if (view === 'research-index') {
      navigate('/research-index');
    } else {
      const path = location.pathname;
      if (path.startsWith('/research')) {
        navigate('/');
      }
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isItemActive = (item: PrimaryNavItem) => {
    if (item.view === activeView) return true;
    if (item.dropdown) {
      return item.dropdown.some(sub => sub.view === activeView);
    }
    return false;
  };

  // Close dropdown on mouse click outside navigation area
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderGraphic = (type: 'telemetry' | 'security' | 'database' | 'ebpf' | 'charter') => {
    if (type === 'telemetry') {
      return (
        <div className="relative w-full h-28 bg-[#030612] border border-zinc-900/80 rounded-lg overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1524_1px,transparent_1px),linear-gradient(to_bottom,#0c1524_1px,transparent_1px)] bg-[size:10px_10px] opacity-40"></div>
          <div className="absolute inset-y-0 w-0.5 bg-cyan-500/30 shadow-[0_0_8px_#06b6d4] animate-[scan_2.5s_ease-in-out_infinite]"></div>
          <svg className="absolute bottom-2 left-0 w-full h-16 text-cyan-500/80" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path d="M0,25 Q15,5 30,18 T60,8 T90,20 L100,15 L100,30 L0,30 Z" fill="url(#telemetry-grad)" stroke="currentColor" strokeWidth="1" />
            <defs>
              <linearGradient id="telemetry-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-2 left-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="font-mono text-[8px] text-cyan-400 tracking-wider font-bold">LIVE TELEMETRY STREAM</span>
          </div>
          <div className="absolute bottom-2 right-2 font-mono text-[9px] text-zinc-500 bg-[#020510]/80 px-1.5 py-0.5 rounded border border-zinc-900/60">
            P99: <span className="text-emerald-400 font-bold">1.42ms</span>
          </div>
        </div>
      );
    }
    if (type === 'security') {
      return (
        <div className="relative w-full h-28 bg-[#030612] border border-zinc-900/80 rounded-lg overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0e2042_0%,transparent_70%)] opacity-30"></div>
          <div className="absolute w-20 h-20 rounded-full border border-cyan-500/10 animate-ping"></div>
          <div className="absolute w-12 h-12 rounded-full border border-cyan-500/20 bg-[#04091c]/80 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <Shield className="w-5 h-5 text-cyan-400 animate-pulse" />
          </div>
          <div className="absolute top-2 left-2 font-mono text-[8px] text-emerald-400 tracking-wider flex items-center gap-1.5 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>SRE ACTIVE GUARD</span>
          </div>
          <div className="absolute bottom-2 right-2 font-mono text-[9px] text-zinc-500 bg-[#020510]/80 px-1.5 py-0.5 rounded border border-zinc-900/60">
            SHIELD: <span className="text-emerald-400 font-bold">100% SECURE</span>
          </div>
        </div>
      );
    }
    if (type === 'database') {
      return (
        <div className="relative w-full h-28 bg-[#030612] border border-zinc-900/80 rounded-lg overflow-hidden flex flex-col justify-center px-4 gap-2">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1524_1px,transparent_1px)] bg-[size:16px_16px] opacity-10"></div>
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded bg-cyan-500 shadow-[0_0_6px_#06b6d4] animate-pulse"></div>
              <span className="font-mono text-[8px] text-zinc-400 font-bold">DB_CLUSTER_01</span>
            </div>
            <span className="font-mono text-[8px] text-emerald-400 font-bold bg-emerald-950/20 px-1 rounded border border-emerald-500/10">ACTIVE</span>
          </div>
          <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-900 relative z-10">
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-600 to-cyan-400 w-[84%] rounded-full shadow-[0_0_6px_rgba(6,182,212,0.5)]"></div>
          </div>
          <div className="flex items-center justify-between font-mono text-[8px] text-zinc-500 z-10">
            <span>SYNC: 4.2k TX/S</span>
            <span>LOCKS: <span className="text-emerald-400 font-bold">0%</span></span>
          </div>
        </div>
      );
    }
    if (type === 'ebpf') {
      return (
        <div className="relative w-full h-28 bg-[#030612] border border-zinc-900/80 rounded-lg overflow-hidden flex items-center justify-center gap-4">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(6,182,212,0.03)_50%,transparent_60%)] bg-[size:100%_6px] animate-[pulse_2s_infinite]"></div>
          <div className="flex flex-col items-center gap-1 relative z-10">
            <div className="px-2 py-0.5 bg-zinc-950 border border-zinc-900 rounded text-[7px] font-mono text-zinc-500 font-bold">USER_SPACE</div>
            <div className="h-4 w-0.5 bg-gradient-to-b from-cyan-500 to-emerald-500 animate-pulse"></div>
            <div className="px-2 py-0.5 bg-cyan-950/20 border border-cyan-500/20 rounded text-[7px] font-mono text-cyan-400 font-bold">KERNEL (eBPF)</div>
          </div>
          <div className="text-left font-mono text-[8px] text-zinc-500 space-y-1 z-10">
            <div>HOOK: <span className="text-cyan-400 font-bold">SYS_ENTER</span></div>
            <div>ISOLATION: <span className="text-emerald-400 font-bold">ACTIVE</span></div>
          </div>
        </div>
      );
    }
    return (
      <div className="relative w-full h-28 bg-[#030612] border border-zinc-900/80 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1524_1px,transparent_1px),linear-gradient(to_bottom,#0c1524_1px,transparent_1px)] bg-[size:8px_8px] opacity-20"></div>
        <div className="absolute w-16 h-16 rounded-full border border-dashed border-cyan-500/20 animate-[spin_20s_linear_infinite] flex items-center justify-center">
          <div className="absolute w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center">
            <Award className="w-5 h-5 text-cyan-500 animate-pulse" />
          </div>
        </div>
        <div className="absolute top-2 left-2 font-mono text-[8px] text-zinc-500 tracking-wider font-bold">
          XAVIRA SEAL OF QUALITY
        </div>
        <div className="absolute bottom-2 right-2 font-mono text-[9px] text-zinc-500 bg-[#020510]/80 px-1.5 py-0.5 rounded border border-zinc-900/60">
          CODE: <span className="text-emerald-400 font-bold">100% HUMAN</span>
        </div>
      </div>
    );
  };

  const getMegaMenuConfig = (id: string) => {
    if (id === 'research') {
      return {
        columns: [
          {
            title: 'SYSTEM OBSERVABILITY',
            icon: Cpu,
            items: [
              {
                label: 'Engineering Intelligence Library',
                description: 'Search & scan our multi-dimensional intelligence database on top enterprise teams.',
                view: 'research'
              },
              {
                label: 'Technology Intelligence',
                description: 'Continuous observations of memory leak patterns, lock contention, and drift.',
                view: 'intelligence'
              }
            ]
          },
          {
            title: 'DIAGNOSTIC INDEX',
            icon: Search,
            items: [
              {
                label: 'Company Research Profiles',
                description: 'Unvarnished security profiles and independent architectural audits.',
                view: 'research-index'
              },
              {
                label: 'Research Methodology',
                description: 'Our objective, data-backed approach to analyzing system architectures.',
                view: 'about'
              }
            ]
          },
          {
            title: 'METRIC TELEMETRY',
            icon: Globe,
            items: [
              {
                label: 'Industry Intelligence',
                description: 'Telemetry indices, dependency drift metrics, and stack analysis by sector.',
                view: 'industries'
              },
              {
                label: 'Publications & Research',
                description: 'Rigorous public research papers, core methodology, and tech-stack reports.',
                view: 'research-insights'
              }
            ]
          }
        ],
        featured: {
          title: 'Sovereign Ledger Audit',
          subtitle: 'Deep architectural profiling of transaction sequencing locks and memory leakage across 104 systems.',
          cta: 'Read the report ->',
          view: 'research',
          graphicType: 'telemetry' as const
        },
        bottomBar: {
          title: 'AGENTIC SRE ENGINE',
          icon: Sparkles,
          links: [
            { label: 'Autonomous Profilers', view: 'intelligence' },
            { label: 'Telemetry Drift', view: 'industries' },
            { label: 'Memory Contention Map', view: 'intelligence' },
            { label: 'Anomaly Alerts', view: 'research' }
          ],
          cta: 'View active live index',
          ctaView: 'research-index'
        }
      };
    }
    if (id === 'services') {
      return {
        columns: [
          {
            title: 'DIAGNOSTIC BRIEFINGS',
            icon: Compass,
            items: [
              {
                label: 'Engineering Discovery (£100)',
                description: 'Rapid 30-minute diagnostic session with an elite Principal Engineer.',
                view: 'packages'
              },
              {
                label: 'Vulnerability Triaging',
                description: 'Accelerated testing of potential remote exploits and memory boundary leaks.',
                view: 'packages'
              }
            ]
          },
          {
            title: 'REMEDIES & TRANSFORMS',
            icon: Layers,
            items: [
              {
                label: 'Intelligence Audit (£5,000)',
                description: 'Full 5-day static & dynamic review of codebase, systems design, and leaks.',
                view: 'packages'
              },
              {
                label: 'Engineering Transformation (£25k+)',
                description: 'Direct hands-on engineering intervention. Decoupling monoliths.',
                view: 'packages'
              }
            ]
          },
          {
            title: 'STRATEGIC ALLIANCES',
            icon: Users,
            items: [
              {
                label: 'Continuous Engineering Partner',
                description: 'Strategic advisory and SOW-aligned SLA guardrails under annual terms.',
                view: 'packages'
              },
              {
                label: 'CTO Strategic Discussion',
                description: 'Confidential advisory, sovereign alignment, and partner negotiations.',
                view: 'book'
              }
            ]
          }
        ],
        featured: {
          title: 'Active Mission Control',
          subtitle: 'Continuous strategic advisory, 24/7/365 active incident SRE shielding, and cloud cost caps.',
          cta: 'Secure SLA terms ->',
          view: 'packages',
          graphicType: 'security' as const
        },
        bottomBar: {
          title: 'COMPLIANCE & LEGAL GUARANTEES',
          icon: Shield,
          links: [
            { label: 'England & Wales Jurisdiction', view: 'faq' },
            { label: '£25,000 Liability Caps', view: 'faq' },
            { label: 'ISO 27001 Alignment', view: 'about' },
            { label: 'Sovereign Delivery Promise', view: 'about' }
          ],
          cta: 'Review terms of engagement',
          ctaView: 'faq'
        }
      };
    }
    if (id === 'cases') {
      return {
        columns: [
          {
            title: 'ENTERPRISE SUCCESS',
            icon: FileText,
            items: [
              {
                label: 'Client Success Stories',
                description: 'Audited post-mortems of system refactors and real operational gains.',
                view: 'cases',
                caseId: 'fintech-sovereign'
              },
              {
                label: 'Fintech Sovereign Ledger',
                description: 'Replacing database state progression locks with high-performance sequence rings.',
                view: 'cases',
                caseId: 'fintech-sovereign'
              }
            ]
          },
          {
            title: 'INFRASTRUCTURE',
            icon: Cloud,
            items: [
              {
                label: 'Cloud Modernization',
                description: 'Deploying Karpenter dynamic autoscaling spots to shave production budget.',
                view: 'cases',
                caseId: 'nexagrid-uk'
              },
              {
                label: 'Kubernetes Node Hardening',
                description: 'Auditing memory isolation and access boundaries on sovereign grids.',
                view: 'cases',
                caseId: 'nexagrid-uk'
              }
            ]
          },
          {
            title: 'SYSTEM PERFORMANCE',
            icon: Zap,
            items: [
              {
                label: 'AI Security Engineering',
                description: 'Securing generative pipelines against prompt injections and leakage.',
                view: 'cases',
                caseId: 'quantum-core'
              },
              {
                label: 'P99 Edge Latency Study',
                description: 'Maintaining sub-1.8ms P99 latencies for high-throughput edge systems.',
                view: 'cases',
                caseId: 'apex-ledger'
              }
            ]
          }
        ],
        featured: {
          title: 'Apex Ledger Upgrade',
          subtitle: 'How we decoupled SQL state contention and achieved a stable 1.8ms P99 transaction speed globally.',
          cta: 'Analyze the case study ->',
          view: 'cases',
          caseId: 'apex-ledger',
          graphicType: 'database' as const
        },
        bottomBar: {
          title: 'VERIFIED POST-MORTEM METRICS',
          icon: Activity,
          links: [
            { label: '-42% Cloud Spend', view: 'cases' },
            { label: 'Zero AI Hallucination', view: 'cases' },
            { label: '99.999% DB Availability', view: 'cases' },
            { label: 'Zero Lock Contention', view: 'cases' }
          ],
          cta: 'Browse all audit logs',
          ctaView: 'cases'
        }
      };
    }
    if (id === 'insights') {
      return {
        columns: [
          {
            title: 'DEEP READS',
            icon: BookOpen,
            items: [
              {
                label: 'Engineering Articles',
                description: 'Deep technical articles exploring eBPF, memory isolation, and database lock-freeness.',
                view: 'research-insights'
              },
              {
                label: 'Architecture Patterns',
                description: 'Validated blueprints for building partition-tolerant, high-throughput systems.',
                view: 'research-insights'
              }
            ]
          },
          {
            title: 'PUBLICATIONS',
            icon: FileCheck,
            items: [
              {
                label: 'Whitepapers Database',
                description: 'Rigorous architectural breakdowns and independent security surveys.',
                view: 'research-insights'
              },
              {
                label: 'Executive scaling Briefs',
                description: 'High-level technology risk evaluations designed for technical leadership.',
                view: 'research-insights'
              }
            ]
          },
          {
            title: 'SUPPORT INDEX',
            icon: HelpCircle,
            items: [
              {
                label: 'FAQ',
                description: 'Clear details on our unvarnished liability caps, engagement limits, and SLA.',
                view: 'faq'
              },
              {
                label: 'Engagement Limits',
                description: 'Boundary conditions for audit activities, access privileges, and source safety.',
                view: 'faq'
              }
            ]
          }
        ],
        featured: {
          title: 'eBPF Memory Isolation Study',
          subtitle: 'An unvarnished audit of thread-level vulnerabilities in distributed Node processes and SRE mitigation.',
          cta: 'Download PDF dossier ->',
          view: 'research-insights',
          graphicType: 'ebpf' as const
        },
        bottomBar: {
          title: 'RESEARCH INTEGRITY & METHODOLOGY',
          icon: Target,
          links: [
            { label: 'Objective Evidence Trails', view: 'about' },
            { label: 'Unvarnished Telemetry Profiles', view: 'research' },
            { label: 'Mathematical Rigour Guarantee', view: 'about' }
          ],
          cta: 'Access complete archives',
          ctaView: 'research-insights'
        }
      };
    }
    if (id === 'about') {
      return {
        columns: [
          {
            title: 'COMPANY IDENTITY',
            icon: Info,
            items: [
              {
                label: 'Why XAVIRA',
                description: 'Independent systems engineering, not a generic software agency or marketing firm.',
                view: 'about'
              },
              {
                label: 'Our Philosophy',
                description: 'Objective telemetry, pure systems integrity, and absolute mathematical clarity.',
                view: 'about'
              }
            ]
          },
          {
            title: 'PEOPLE & ROLES',
            icon: Users,
            items: [
              {
                label: 'Elite Leadership',
                description: 'Meet our elite distributed database architects and systems directors.',
                view: 'about'
              },
              {
                label: 'Research Principles',
                description: 'Transparent aggregated data, robust evidence trails, and public validation.',
                view: 'about'
              }
            ]
          },
          {
            title: 'OPPORTUNITIES',
            icon: Briefcase,
            items: [
              {
                label: 'Careers Registry',
                description: 'Our distributed database and systems engineering openings registry.',
                view: 'careers'
              },
              {
                label: 'Systems Engineering Roles',
                description: 'Looking for experts in Linux kernel tuning, eBPF, and Rust compilation.',
                view: 'careers'
              }
            ]
          }
        ],
        featured: {
          title: 'Human Systems Charter',
          subtitle: 'We reject high-volume, low-quality AI code generation and offshore sub-contracting in favour of raw mathematical clarity.',
          cta: 'Read our charter ->',
          view: 'about',
          graphicType: 'charter' as const
        },
        bottomBar: {
          title: 'CORPORATE GOVERNANCE STANDARDS',
          icon: Award,
          links: [
            { label: 'ISO 27001 Certified', view: 'about' },
            { label: 'SOC 2 Type II', view: 'about' },
            { label: 'GDPR & CCPA Compliant', view: 'faq' },
            { label: 'UK Data Protection Act', view: 'faq' }
          ],
          cta: 'View credential certifications',
          ctaView: 'about'
        }
      };
    }
    return null;
  };

  return (
    <header 
      ref={headerRef} 
      className="sticky top-0 z-50 bg-[#020510]/85 backdrop-blur-md border-b border-[#0f1d3a]/60 text-white shadow-md select-none font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Health Badge */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavigate('home')}>
              <span className="font-display text-2xl font-light tracking-[0.25em] text-white">
                XAVIRA
              </span>
            </div>

            {/* Real-time System Health Badge */}
            <div className="relative group hidden sm:flex items-center gap-2 px-2.5 py-1.5 bg-[#040a17]/80 border border-[#0f2142] rounded-md font-mono text-[9px] text-emerald-400 hover:border-emerald-500/20 transition-all select-none cursor-crosshair">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="tracking-widest uppercase font-bold text-zinc-500">[SYS ACTIVE]</span>
              <span className="text-emerald-400 font-bold">{uptime}%</span>

              {/* Tooltip Card */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#02050f]/95 border border-[#0f1d3a] rounded-lg p-3 shadow-2xl opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50 backdrop-blur-md">
                <div className="space-y-2 text-zinc-400 text-[10px]">
                  <div className="text-zinc-200 font-bold border-b border-zinc-900/80 pb-1.5 uppercase tracking-wider flex items-center justify-between font-mono">
                    <span>SRE Pipeline</span>
                    <span className="text-emerald-400">99.99% SLA</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Active Clusters</span>
                    <span className="text-zinc-300 font-bold">12/12 Nodes</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Sync Latency</span>
                    <span className="text-zinc-300 font-bold">{latency}ms</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Audit Pipeline</span>
                    <span className="text-emerald-400 font-bold">HEALTHY</span>
                  </div>
                  <div className="border-t border-zinc-900/85 pt-1.5 flex items-center justify-between font-mono text-[8px] text-zinc-500">
                    <span>COMMIT DEPLOY</span>
                    <span className="text-zinc-400 uppercase font-bold">xav-82f3a2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 h-full">
            {navStructure.map((item) => (
              <div 
                key={item.id}
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => item.view ? handleNavigate(item.view) : null}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-150 rounded-md flex items-center gap-1 cursor-pointer ${
                    isItemActive(item)
                      ? 'text-cyan-400 font-bold glow-text-cyan'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180 text-cyan-400' : 'text-zinc-600'}`} />
                  )}
                </button>

                {isItemActive(item) && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-cyan-500 glow-cyan"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Desktop Hover Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.id && item.dropdown && (() => {
                    const config = getMegaMenuConfig(item.id);
                    if (!config) return null;
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className={`absolute top-full mt-1 ${
                          item.id === 'research' 
                            ? 'left-[-120px]' 
                            : item.id === 'services'
                            ? 'left-[-220px]'
                            : item.id === 'cases'
                            ? 'left-[-320px]'
                            : item.id === 'insights'
                            ? 'right-[-220px]'
                            : 'right-[-120px]'
                        } w-[900px] rounded-2xl bg-gradient-to-b from-[#05091a]/98 to-[#02040c]/99 border border-white/[0.08] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_30px_70px_rgba(0,0,0,0.95)] z-50 backdrop-blur-3xl`}
                      >
                        <div className="grid grid-cols-4 gap-6">
                          {/* Left Navigation Area */}
                          <div className="col-span-3 grid grid-cols-3 gap-6">
                            {config.columns.map((col, cIdx) => (
                              <div key={cIdx} className="space-y-4">
                                {/* Column Header */}
                                <div className="flex items-center gap-2 border-b border-zinc-900 pb-2">
                                  <col.icon className="w-3.5 h-3.5 text-zinc-500" />
                                  <span className="font-mono text-[9px] tracking-[0.12em] text-zinc-400 uppercase font-black">{col.title}</span>
                                </div>
                                {/* Column Items */}
                                <div className="flex flex-col gap-1">
                                  {col.items.map((sub, sIdx) => {
                                    const isDisabled = (sub as any).disabled;
                                    return (
                                      <button
                                        key={sIdx}
                                        onClick={() => {
                                          if (sub.view === 'careers') {
                                            onCareersClick?.();
                                            setIsOpen(false);
                                            setActiveDropdown(null);
                                          } else if (!isDisabled) {
                                            handleNavigate(sub.view, (sub as any).caseId);
                                          }
                                        }}
                                        className={`group w-full text-left p-2.5 rounded-lg transition-all border border-transparent ${
                                          isDisabled 
                                            ? 'opacity-40 cursor-not-allowed' 
                                            : 'hover:bg-zinc-950/50 hover:border-white/[0.04] cursor-pointer'
                                        }`}
                                        disabled={isDisabled}
                                      >
                                        <div className="space-y-0.5">
                                          <div className="text-[11px] font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5 group-hover:text-cyan-400 transition-colors">
                                            <span>{sub.label}</span>
                                            {isDisabled && (
                                              <span className="text-[8px] px-1 py-0.2 bg-zinc-900 border border-zinc-800 rounded text-zinc-500 font-semibold tracking-widest lowercase">
                                                soon
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-[10px] text-zinc-500 leading-normal font-sans font-light group-hover:text-zinc-400 transition-colors">
                                            {sub.description}
                                          </p>
                                        </div>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Right Featured Card Area */}
                          <div className="col-span-1">
                            <div className="flex items-center gap-2 border-b border-zinc-900 pb-2 mb-4">
                              <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
                              <span className="font-mono text-[9px] tracking-[0.12em] text-zinc-400 uppercase font-black">FEATURED</span>
                            </div>
                            <div className="group/feat p-3.5 rounded-xl bg-gradient-to-b from-[#060b1e]/60 to-[#020510]/80 border border-white/[0.04] hover:border-cyan-500/10 space-y-3 flex flex-col justify-between h-[210px] transition-all duration-200">
                              <div className="space-y-3">
                                {renderGraphic(config.featured.graphicType)}
                                <div className="space-y-1">
                                  <h4 className="text-[11px] font-mono font-bold text-zinc-200 uppercase tracking-wider leading-tight group-hover/feat:text-cyan-400 transition-colors">
                                    {config.featured.title}
                                  </h4>
                                  <p className="text-[10px] text-zinc-500 font-sans font-light leading-normal">
                                    {config.featured.subtitle}
                                  </p>
                                </div>
                              </div>
                              <button 
                                onClick={() => handleNavigate(config.featured.view, config.featured.caseId)}
                                className="text-[10px] font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover/feat:translate-x-1 transition-all cursor-pointer bg-transparent border-none p-0 text-left uppercase tracking-wider"
                              >
                                <span>{config.featured.cta}</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Status / Links Bar */}
                        <div className="border-t border-zinc-900/80 pt-3.5 mt-3.5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                          <div className="flex items-center gap-2">
                            <config.bottomBar.icon className="w-3.5 h-3.5 text-cyan-500/70 animate-pulse" />
                            <span className="text-[9px] tracking-widest uppercase text-zinc-400 font-bold">{config.bottomBar.title}</span>
                          </div>
                          <div className="flex gap-4">
                            {config.bottomBar.links.map((link, lIdx) => (
                              <button
                                key={lIdx}
                                onClick={() => handleNavigate(link.view)}
                                className="hover:text-cyan-400 hover:underline transition-all cursor-pointer font-bold text-zinc-400"
                              >
                                {link.label}
                              </button>
                            ))}
                          </div>
                          <button
                            onClick={() => handleNavigate(config.bottomBar.ctaView)}
                            className="hover:text-cyan-400 flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-bold text-zinc-400 transition-all cursor-pointer bg-zinc-950/50 border border-white/[0.04] px-2 py-1 rounded hover:bg-zinc-900/60"
                          >
                            <span>{config.bottomBar.cta}</span>
                            <ArrowRight className="w-3 h-3 text-cyan-400" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Area Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3.5 h-full">
            
            {/* LANGUAGE TOGGLE BUTTON */}
            <div className="relative z-50">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="px-3 py-2 text-xs font-mono font-bold tracking-wider text-zinc-400 hover:text-white hover:border-zinc-700 bg-[#030612] border border-zinc-900 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-zinc-500" />
                <span className="uppercase">{currentLanguage}</span>
                <ChevronDown className="w-3 h-3 text-zinc-550" />
              </button>
              
              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    className="absolute right-0 mt-1.5 w-32 rounded-lg bg-[#020510]/95 border border-[#0f1d3a]/65 p-1 shadow-[0_10px_25px_rgba(0,0,0,0.8)] backdrop-blur-xl"
                  >
                    {[
                      { code: 'en', label: 'English (EN)' },
                      { code: 'de', label: 'Deutsch (DE)' },
                      { code: 'ja', label: '日本語 (JA)' }
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange?.(lang.code as 'en' | 'de' | 'ja');
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left text-[11px] font-mono px-3 py-1.5 rounded transition-all cursor-pointer ${
                          currentLanguage === lang.code
                            ? 'text-cyan-400 bg-cyan-950/20 font-bold'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-900/40'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* MY LIBRARY FAVORITES BOOKMARK BUTTON */}
            <button
              onClick={() => setIsLibraryOpen(true)}
              className="px-3 py-2 text-xs font-mono font-bold tracking-wider text-zinc-400 hover:text-white hover:border-zinc-700 bg-[#030612] border border-zinc-900 rounded-lg flex items-center gap-1.5 transition-colors relative cursor-pointer"
            >
              <Bookmark className={`w-3.5 h-3.5 ${favorites.length > 0 ? 'text-cyan-400 fill-cyan-400/20' : 'text-zinc-500'}`} />
              <span>Library</span>
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-zinc-950 font-mono font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-black animate-pulse">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* BOOK DISCOVERY DROPDOWN BUTTON */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('book')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-4 py-2 text-xs font-mono font-bold tracking-widest text-zinc-400 hover:text-white flex items-center gap-1.5 border border-zinc-900 rounded bg-[#030612] transition-colors cursor-pointer uppercase ${
                  activeDropdown === 'book' ? 'text-white border-zinc-700' : ''
                }`}
              >
                <span>Book Discovery</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'book' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-0 w-[360px] rounded-xl bg-[#020510]/95 border border-[#0f1d3a]/65 p-3 shadow-[0_15px_45px_rgba(0,0,0,0.9)] z-50 backdrop-blur-2xl"
                  >
                    <div className="grid grid-cols-1 gap-1.5">
                      {bookDropdown.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigate(sub.view)}
                          className="group w-full text-left p-2.5 rounded-lg transition-all flex items-start gap-3 border border-transparent hover:bg-zinc-900/40 hover:border-zinc-800/40 cursor-pointer"
                        >
                          <div className="p-1.5 rounded bg-[#030715] border border-zinc-900 text-zinc-500 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all shrink-0">
                            <sub.icon className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                          </div>
                          <div className="space-y-0.5">
                            <div className="text-[11px] font-mono font-bold text-zinc-300 uppercase tracking-wider">
                              <span className="group-hover:text-white transition-colors">{sub.label}</span>
                            </div>
                            <p className="text-[10px] text-zinc-500 leading-normal font-sans font-light">
                              {sub.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Direct CTA Button */}
            <button
              onClick={() => handleNavigate('book')}
              className="group px-5 py-3 text-xs font-display font-black tracking-widest uppercase bg-gradient-to-r from-cyan-600 to-cyan-500 text-zinc-950 hover:from-cyan-500 hover:to-cyan-400 border border-cyan-400 hover:translate-y-[-1px] active:translate-y-0 transition-all rounded-lg duration-150 flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] text-center cursor-pointer"
            >
              <span>Book Discovery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none transition-colors cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel & Library Drawer Overlays */}
      <AnimatePresence>
        {/* Backdrop for Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[150] lg:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/* Mobile Slide-Out Panel Menu */}
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-[85vw] max-w-sm bg-[#020510] border-l border-[#0f1d3a] p-6 text-white z-[160] lg:hidden flex flex-col justify-between"
          >
            <div className="space-y-6 overflow-y-auto max-h-[80vh] pr-1">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <span className="font-mono text-xs text-zinc-500 font-bold">[ NAVIGATION PANEL ]</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Language Toggle */}
              <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-3 space-y-2">
                <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// SELECT LANGUAGE</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { code: 'en', label: 'EN' },
                    { code: 'de', label: 'DE' },
                    { code: 'ja', label: 'JA' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange?.(lang.code as 'en' | 'de' | 'ja');
                      }}
                      className={`py-1 text-[11px] font-mono border rounded transition-all font-bold ${
                        currentLanguage === lang.code
                          ? 'border-cyan-500 bg-cyan-950/20 text-cyan-400'
                          : 'border-zinc-900 bg-zinc-900/30 text-zinc-400'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                {/* Home link */}
                <button
                  onClick={() => {
                    handleNavigate('home');
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 rounded-md text-sm font-semibold uppercase tracking-wider ${
                    activeView === 'home' 
                      ? 'text-cyan-400 bg-cyan-950/10 border-l-2 border-cyan-500 font-bold' 
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  Home
                </button>

                {/* Accordion menus */}
                {navStructure.filter(i => i.id !== 'home').map((item) => {
                  const isExpanded = mobileExpanded === item.id;
                  return (
                    <div key={item.id} className="border-t border-zinc-900/40 pt-1">
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : item.id)}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-md text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900/40 uppercase tracking-wider"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-cyan-400' : 'text-zinc-500'}`} />
                      </button>

                      <AnimatePresence>
                        {isExpanded && item.dropdown && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1 mt-1 overflow-hidden"
                          >
                            {item.dropdown.map((sub, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  if (sub.view === 'careers') {
                                    onCareersClick?.();
                                    setIsOpen(false);
                                  } else if (!sub.disabled) {
                                    handleNavigate(sub.view, sub.caseId);
                                    setIsOpen(false);
                                  }
                                }}
                                className={`w-full text-left p-2 rounded-lg transition-all flex items-start gap-3 border border-transparent ${
                                  sub.disabled 
                                    ? 'opacity-40 cursor-not-allowed' 
                                    : 'hover:bg-zinc-900/30'
                                }`}
                                disabled={sub.disabled}
                              >
                                <div className="p-1.5 rounded bg-[#030715] border border-zinc-900 text-zinc-500 shrink-0 mt-0.5">
                                  <sub.icon className="w-3.5 h-3.5 text-zinc-400" />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-[10px] font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1">
                                    <span>{sub.label}</span>
                                    {sub.disabled && (
                                      <span className="text-[7px] px-1 bg-zinc-900 rounded text-zinc-500 font-semibold lowercase">
                                        soon
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[9px] text-zinc-500 leading-tight font-sans">
                                    {sub.description}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Book Discovery Accordion */}
                <div className="border-t border-zinc-900/40 pt-1">
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === 'book' ? null : 'book')}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-md text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900/40 uppercase tracking-wider"
                  >
                    <span>Book Discovery</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'book' ? 'rotate-180 text-cyan-400' : 'text-zinc-500'}`} />
                  </button>

                  <AnimatePresence>
                    {mobileExpanded === 'book' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1 mt-1 overflow-hidden"
                      >
                        {bookDropdown.map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              handleNavigate(sub.view);
                              setIsOpen(false);
                            }}
                            className="w-full text-left p-2 rounded-lg transition-all flex items-start gap-3 border border-transparent hover:bg-zinc-900/30 cursor-pointer"
                          >
                            <div className="p-1.5 rounded bg-[#030715] border border-zinc-900 text-zinc-500 shrink-0 mt-0.5">
                              <sub.icon className="w-3.5 h-3.5 text-zinc-400" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="text-[10px] font-mono font-bold text-zinc-300 uppercase tracking-wider">
                                <span>{sub.label}</span>
                              </div>
                              <p className="text-[9px] text-zinc-500 leading-tight font-sans">
                                {sub.description}
                              </p>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-900/60 space-y-3">
              {favorites.length > 0 && (
                <button
                  onClick={() => {
                    setIsLibraryOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full py-2.5 px-4 text-xs font-mono tracking-wider uppercase text-center border border-zinc-800 bg-[#030612] hover:bg-zinc-900 text-zinc-300 rounded-lg flex items-center justify-center gap-1.5"
                >
                  <Bookmark className="w-4 h-4 text-cyan-400 fill-cyan-400/10" />
                  <span>My Saved Library ({favorites.length})</span>
                </button>
              )}
              <button
                onClick={() => {
                  handleNavigate('book');
                  setIsOpen(false);
                }}
                className="w-full py-3.5 px-4 text-xs font-display tracking-widest uppercase text-center bg-cyan-600 text-zinc-950 hover:bg-cyan-500 transition-all rounded-lg font-bold flex items-center justify-center gap-2 glow-cyan"
              >
                <span>Book Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for Library Drawer */}
      <AnimatePresence>
        {isLibraryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLibraryOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
          />
        )}
      </AnimatePresence>

      {/* Saved Library Slider Panel */}
      <AnimatePresence>
        {isLibraryOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-[90vw] sm:w-[450px] bg-[#020510] border-l border-[#0f1d3a] p-6 sm:p-8 text-white z-[210] flex flex-col justify-between"
          >
            <div className="space-y-6 overflow-y-auto max-h-[82vh] pr-1 flex-grow">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-cyan-400 fill-cyan-400/15" />
                  <h3 className="font-display text-base font-bold tracking-widest text-white uppercase">
                    My Saved Library
                  </h3>
                </div>
                <button
                  onClick={() => setIsLibraryOpen(false)}
                  className="p-1 rounded text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {favorites.length === 0 ? (
                <div className="py-20 text-center space-y-4">
                  <Bookmark className="w-12 h-12 text-zinc-700 mx-auto stroke-1" />
                  <div className="space-y-1">
                    <p className="text-sm text-zinc-400 uppercase font-mono font-bold">No saved briefings</p>
                    <p className="text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                      Click the star bookmark ribbon on any whitepaper or audit to construct your personal offline intelligence dossier.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3.5 pt-2">
                  <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">// RECENTLY BOOKMARKED DOSSIERS</span>
                  <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                    {favorites.map((fav) => (
                      <div
                        key={fav.id}
                        className="p-4 bg-zinc-950/80 border border-zinc-900 rounded-lg hover:border-cyan-500/30 transition-all flex items-start justify-between gap-4 group"
                      >
                        <div
                          className="space-y-1 flex-grow cursor-pointer"
                          onClick={() => {
                            onNavigateToFavorite?.(fav.type, fav.id);
                            setIsLibraryOpen(false);
                          }}
                        >
                          <span className="inline-block font-mono text-[8px] font-black uppercase text-cyan-400 bg-cyan-950/25 border border-cyan-500/10 px-1.5 py-0.2 rounded">
                            {fav.type === 'case' ? 'CASE STUDY' : 'PUBLICATION'}
                          </span>
                          <h4 className="text-xs sm:text-sm font-display font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors uppercase leading-tight line-clamp-2 pt-1">
                            {fav.title}
                          </h4>
                          <p className="text-[10px] font-mono text-zinc-500 leading-none">
                            {fav.categoryOrSector}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveFavorite?.(fav.id)}
                          className="p-2 text-zinc-500 hover:text-rose-400 hover:bg-rose-950/10 rounded transition-all shrink-0 cursor-pointer"
                          title="Remove from library"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-zinc-900/60 mt-4 text-center space-y-4">
              <p className="text-[10px] font-mono text-zinc-500 leading-relaxed uppercase">
                Offline client session dossier persistent cache enabled under secure LocalStorage guidelines.
              </p>
              <button
                onClick={() => setIsLibraryOpen(false)}
                className="w-full py-3 bg-zinc-950 border border-zinc-800 text-xs font-mono font-bold tracking-wider uppercase text-zinc-300 hover:text-white hover:border-zinc-500 transition-all rounded-lg"
              >
                Continue Browsing
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
