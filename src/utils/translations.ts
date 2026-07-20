export interface TranslationSet {
  heroTitle: string;
  heroSubtitle: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  trustTitle: string;
  trustSubtitle: string;
  trustDesc: string;
  statsTitle: string;
  stat1Label: string;
  stat2Label: string;
  stat3Label: string;
  stat4Label: string;
  stat5Label: string;
  stat6Label: string;
  valuePropTitle: string;
  valuePropSubtitle: string;
  intelTitle: string;
  intelSubtitle: string;
  intelDesc: string;
  servicesTitle: string;
  servicesSubtitle: string;
  servicesDesc: string;
  researchTitle: string;
  researchSubtitle: string;
  researchDesc: string;
  socialProofTitle: string;
  socialProofSubtitle: string;
  socialProofDesc: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton1: string;
  ctaButton2: string;
  ctaButton3: string;
}

export const TRANSLATIONS: Record<'en' | 'de' | 'ja', TranslationSet> = {
  en: {
    heroTitle: "Engineering Intelligence Before Engineering Execution.",
    heroSubtitle: "We help engineering leaders validate architectural decisions through public-source research, engineering analysis, technical due diligence, and production-grade implementation.",
    heroCtaPrimary: "Book Engineering Discovery",
    heroCtaSecondary: "Explore Engineering Intelligence Library",
    trustTitle: "PROVABLE SYSTEMS INTEGRITY",
    trustSubtitle: "EVIDENCE-BASED DECISION SUPPORT",
    trustDesc: "We don't ask for trust. We show rigorous, reproducible evidence of systems architecture scaling.",
    statsTitle: "CORE RESEARCH PORTFOLIO",
    stat1Label: "Companies Researched",
    stat2Label: "Industries Covered",
    stat3Label: "Public Sources Reviewed",
    stat4Label: "Engineering Intelligence Methodology",
    stat5Label: "Transparent Research Framework",
    stat6Label: "Evidence-Based Recommendations",
    valuePropTitle: "OPERATIONAL FLOW",
    valuePropSubtitle: "Evidence Before Execution",
    intelTitle: "ENGINEERING INTELLIGENCE FRAMEWORK",
    intelSubtitle: "METHODOLOGY",
    intelDesc: "A systematic approach to evaluating technology architectures, assessing scale readiness, and ensuring sovereign operational control.",
    servicesTitle: "INTELLIGENCE & ENGAGEMENT",
    servicesSubtitle: "SERVICE PROGRESSION",
    servicesDesc: "Modular advisory and implementation services tailored for enterprise technology buyers and high-growth founders.",
    researchTitle: "RESEARCH LIBRARY",
    researchSubtitle: "SOVEREIGN BLUEPRINTS & AUDITS",
    researchDesc: "Rigorous static analysis, architectural deep-dives, and performance evaluation reports of active modern platforms.",
    socialProofTitle: "TECHNICAL STANDARDS & RECON",
    socialProofSubtitle: "SOVEREIGN METHODOLOGY & ASSETS",
    socialProofDesc: "Our architectural standards and research methodologies are aligned with industry-leading assurance benchmarks.",
    ctaTitle: "EVIDENCE BEFORE EXECUTION.",
    ctaDesc: "Invite our team to validate your architectural assumptions, conduct strict due diligence, or resolve deep system bottlenecks.",
    ctaButton1: "Book Engineering Discovery",
    ctaButton2: "Request Engineering Intelligence Audit",
    ctaButton3: "Explore Research Library"
  },
  de: {
    heroTitle: "Engineering-Intelligenz vor der Engineering-Ausführung.",
    heroSubtitle: "Wir helfen Technologie-Führungskräften, Architekturentscheidungen durch quelloffene Forschung, technische Analysen, Due Diligence und produktionsreife Implementierungen zu validieren.",
    heroCtaPrimary: "Engineering-Discovery buchen",
    heroCtaSecondary: "Forschungsbibliothek durchsuchen",
    trustTitle: "BEWEISBARE SYSTEMINTEGRITÄT",
    trustSubtitle: "EVIENZBASIERTE ENTSCHEIDUNGSHILFE",
    trustDesc: "Wir bitten nicht um Vertrauen. Wir zeigen rigorose, reproduzierbare Beweise für die Skalierung von Systemarchitekturen.",
    statsTitle: "KERN-FORSCHUNGSPORTFOLIO",
    stat1Label: "Erforschte Unternehmen",
    stat2Label: "Abgedeckte Industrien",
    stat3Label: "Geprüfte öffentliche Quellen",
    stat4Label: "Engineering-Intelligenz-Methodik",
    stat5Label: "Transparenter Forschungsrahmen",
    stat6Label: "Evidenzbasierte Empfehlungen",
    valuePropTitle: "BETRIEBLICHER ABLAUF",
    valuePropSubtitle: "Beweise vor der Ausführung",
    intelTitle: "ENGINEERING-INTELLIGENZ-FRAMEWORK",
    intelSubtitle: "METHODIK",
    intelDesc: "Ein systematischer Ansatz zur Bewertung von Technologiearchitekturen, zur Beurteilung der Skalierungsbereitschaft und zur Gewährleistung der betrieblichen Kontrolle.",
    servicesTitle: "INTELLIGENZ & ENGAGEMENT",
    servicesSubtitle: "SERVICE-PROGRESSION",
    servicesDesc: "Modulare Beratungs- und Implementierungsdienste, maßgeschneidert für Unternehmenskäufer und wachstumsstarke Gründer.",
    researchTitle: "FORSCHUNGSBIBLIOTHEK",
    researchSubtitle: "SOUVERÄNE ENTWÜRFE & AUDITS",
    researchDesc: "Strikte statische Analysen, tiefgehende Architekturen und Leistungsbewertungsberichte aktiver moderner Plattformen.",
    socialProofTitle: "TECHNISCHE STANDARDS & RECON",
    socialProofSubtitle: "SOUVERÄNE METHODIK & RESSOURCEN",
    socialProofDesc: "Unsere Architekturstandards und Forschungsmethoden sind auf führende Branchen-Benchmarks ausgerichtet.",
    ctaTitle: "EVIDENZ VOR AUSFÜHRUNG.",
    ctaDesc: "Laden Sie unser Team ein, Ihre Architekturannahmen zu validieren, eine strenge Due-Diligence-Prüfung durchzuführen oder tiefe Systemengpässe zu beheben.",
    ctaButton1: "Engineering-Discovery buchen",
    ctaButton2: "Audit anfordern",
    ctaButton3: "Forschungsbibliothek erkunden"
  },
  ja: {
    heroTitle: "開発の前に、エンジニアリング・インテリジェンスを。",
    heroSubtitle: "オープンソース調査、技術分析、テクニカル・デューデリジェンス、およびプロダクション設計の実装により、技術リーダーのアーキテクチャ上の決定を検証します。",
    heroCtaPrimary: "エンジニアリング・ディスカバリーを予約",
    heroCtaSecondary: "インテリジェンス・ライブラリを探索",
    trustTitle: "検証可能なシステム整合性",
    trustSubtitle: "エビデンスに基づく意思決定支援",
    trustDesc: "信頼を盲信するよう求めることはしません。システムアーキテクチャのスケーリングに関する厳格かつ再現可能な証拠を提示します。",
    statsTitle: "コア研究ポートフォリオ",
    stat1Label: "調査対象企業 100社以上",
    stat2Label: "カバーする主要産業 6つ",
    stat3Label: "検証された公開情報源 300箇所以上",
    stat4Label: "エンジニアリング・インテリジェンス手法",
    stat5Label: "透明性の高い研究フレームワーク",
    stat6Label: "エビデンスに基づく推奨事項",
    valuePropTitle: "オペレーショナル・フロー",
    valuePropSubtitle: "実行前の明確な証拠",
    intelTitle: "エンジニアリング・インテリジェンス・フレームワーク",
    intelSubtitle: "調査手法",
    intelDesc: "技術アーキテクチャの評価、スケール準備状況の評価、および主権的運用管理を確保するための体系的アプローチ。",
    servicesTitle: "インテリジェンス＆エンゲージメント",
    servicesSubtitle: "サービスプログレッシブ",
    servicesDesc: "エンタープライズ技術バイヤーおよび急成長中の創業者向けにカスタマイズされた、モジュール式の検証・実装サービス。",
    researchTitle: "リサーチ・ライブラリ",
    researchSubtitle: "主権的設計図とシステム監査",
    researchDesc: "最新のプラットフォームに関する厳格な静的解析、アーキテクチャのディープダイブ、性能評価レポート。",
    socialProofTitle: "技術基準と偵察",
    socialProofSubtitle: "主権的手法と資産",
    socialProofDesc: "私たちのアーキテクチャ基準と研究手法は、業界をリードする保証基準に整合しています。",
    ctaTitle: "実行前に証拠を。",
    ctaDesc: "アーキテクチャ上の前提条件の検証、厳格なデューデリジェンス、または深刻なシステムボトルの解決を私たちのチームにご依頼ください。",
    ctaButton1: "エンジニアリング・ディスカバリーを予約",
    ctaButton2: "システム監査を依頼",
    ctaButton3: "リサーチ・ライブラリを閲覧"
  }
};
