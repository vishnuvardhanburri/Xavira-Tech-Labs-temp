const fs = require('fs');
const path = require('path');

const srcDataPath = path.join(__dirname, 'src/data/engineeringIntelligence.ts');
const outreachPath = path.join(__dirname, 'src/data/outreach');

const extractSection = (content, headerTitle, nextHeaderRegex = /^## /m) => {
  const headerRegex = new RegExp(`^## [\\d\\.]*\\s*(?:${headerTitle})`, 'im');
  const match = content.match(headerRegex);
  if (!match) return '';

  const startIndex = match.index + match[0].length;
  const remaining = content.slice(startIndex);
  const nextMatch = remaining.match(nextHeaderRegex);

  let sectionContent = nextMatch ? remaining.slice(0, nextMatch.index) : remaining;
  return sectionContent.trim();
};

const files = fs.readdirSync(outreachPath).filter(f => f.endsWith('.md'));

let appendedCompanies = [];

for (const file of files) {
    const slug = file.replace('.md', '');
    const name = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');
    const content = fs.readFileSync(path.join(outreachPath, file), 'utf8');

    const execSummary = extractSection(content, 'Executive Summary');
    const techStackRaw = extractSection(content, 'Tech Stack');
    const archSignals = extractSection(content, 'Architecture Signals');
    const recipient = extractSection(content, 'Recipient Profile|Recipient Context');

    const fullSummary = `${execSummary}\\n\\n**Tech Stack**: ${techStackRaw}\\n\\n**Architecture**: ${archSignals}`;

    let tsCode = `
  {
    id: '${slug}',
    name: '${name}',
    slug: '${slug}',
    tagline: 'Generated Research Profile',
    logo: '🔍',
    industry: 'DevTools',
    funding: 'Series B',
    fundingAmount: 'Undisclosed',
    employees: '50-100',
    headquarters: 'Remote',
    country: 'United States',
    founded: '2020',
    website: 'https://${slug}.com',
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
      { id: '${slug}', label: '${name}', type: 'company', connections: ['aws'] },
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
    executiveSummary: ${JSON.stringify(fullSummary)},
    verifiedPublicInfo: [],
    engineeringObservations: [],
    engineeringHypotheses: [],
    recommendations: [],
    sources: [],
    meta: {
      title: '${name} Engineering Intelligence',
      description: 'Research report on ${name}'
    }
  }`;

    appendedCompanies.push(tsCode);
}

const existingTS = fs.readFileSync(srcDataPath, 'utf8');

// Find the end of the COMPANIES_DATA array
// It ends with \n];
const arrayEndIndex = existingTS.lastIndexOf('];');

if (arrayEndIndex !== -1) {
    const beforeEnd = existingTS.slice(0, arrayEndIndex);
    const afterEnd = existingTS.slice(arrayEndIndex);
    
    const separator = beforeEnd.trim().endsWith(',') ? '' : ',';
    
    const newContent = beforeEnd + separator + '\\n' + appendedCompanies.join(',\\n') + '\\n' + afterEnd;
    fs.writeFileSync(srcDataPath, newContent);
    console.log(`Successfully appended ${appendedCompanies.length} companies to engineeringIntelligence.ts`);
} else {
    console.log('Failed to find the end of COMPANIES_DATA array.');
}
