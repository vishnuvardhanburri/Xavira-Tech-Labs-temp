const fs = require('fs');
const path = require('path');

const outreachDir = path.join(__dirname, 'src/data/outreach');
const existingFiles = new Set(fs.readdirSync(outreachDir).map(f => f.replace('.md', '')));

// Let's read allCompaniesResearch.ts
const tsContent = fs.readFileSync(path.join(__dirname, 'src/data/allCompaniesResearch.ts'), 'utf8');

// Extract company objects from COMPACT_DATA
const matches = [...tsContent.matchAll(/n:\s*"([^"]+)"/g)];
const allCompanies = matches.map(m => m[1]);

console.log(`Total companies in CRM: ${allCompanies.length}`);

const missing = [];
for (const comp of allCompanies) {
    const slug = comp.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (!existingFiles.has(slug)) {
        missing.push({ name: comp, slug });
    }
}

console.log(`Missing reports count: ${missing.length}`);
console.log('Missing list:', JSON.stringify(missing, null, 2));
