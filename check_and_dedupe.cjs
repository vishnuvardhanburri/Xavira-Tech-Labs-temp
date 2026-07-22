const fs = require('fs');
const path = require('path');

const outreachDir = path.join(__dirname, 'src/data/outreach');
const initial40Slugs = [
  'linear', 'supabase', 'neon', 'modal', 'render',
  'convex', 'baseten', 'replicate', 'fireworks-ai', 'railway',
  'temporal', 'dagster-labs', 'astronomer', 'airbyte', 'dbt-labs',
  'prefect', 'clickhouse', 'grafana-labs', 'kong', 'hashicorp',
  'wiz', 'snyk', 'lacework', 'orca-security', 'semgrep',
  'socket', 'tailscale', 'coder', 'teleport', 'oso',
  'langchain', 'langfuse', 'pinecone', 'weaviate', 'unstructured',
  'vellum', 'crewai', 'llamaindex', 'together-ai', 'anyscale'
];

// Read allCompaniesResearch.ts
const tsContent = fs.readFileSync(path.join(__dirname, 'src/data/allCompaniesResearch.ts'), 'utf8');
const arrayStart = tsContent.indexOf('const COMPACT_DATA');
const arrayOpen = tsContent.indexOf('[', arrayStart);
const arrayClose = tsContent.indexOf('];', arrayOpen);
const compactDataString = tsContent.slice(arrayOpen, arrayClose + 1);

let crmCompanies = [];
try {
  crmCompanies = new Function(`return ${compactDataString};`)();
} catch (e) {
  console.error('Error evaluating COMPACT_DATA:', e);
}

const crmSlugs = crmCompanies.map(c => c.n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));

const initialSet = new Set(initial40Slugs);
const crmSet = new Set(crmSlugs);

const duplicates = [];
for (const s of initial40Slugs) {
  if (crmSet.has(s)) {
    duplicates.push(s);
  }
}

console.log(`Initial Batch Count: ${initial40Slugs.length}`);
console.log(`CRM Dataset Count: ${crmCompanies.length}`);
console.log(`Overlapping Duplicates (${duplicates.length}):`, duplicates);

const allUniqueSlugs = new Set([...initial40Slugs, ...crmSlugs]);
console.log(`Total Unique Companies: ${allUniqueSlugs.size}`);
