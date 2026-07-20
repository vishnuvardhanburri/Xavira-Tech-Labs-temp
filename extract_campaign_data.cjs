const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src/data/outreach');

const companyData = {
  'linear': { domain: 'linear.app', name: 'Karri Saarinen' },
  'supabase': { domain: 'supabase.com', name: 'Paul Copplestone' },
  'neon': { domain: 'neon.tech', name: 'Nikita Shamgunov' },
  'modal': { domain: 'modal.com', name: 'Erik Bernhardsson' },
  'render': { domain: 'render.com', name: 'Anurag Goel' },
  'convex': { domain: 'convex.dev', name: 'James Cowling' },
  'baseten': { domain: 'baseten.co', name: 'Tuhin Srivastava' },
  'replicate': { domain: 'replicate.com', name: 'Ben Firshman' },
  'fireworks-ai': { domain: 'fireworks.ai', name: 'Lin Qiao' },
  'railway': { domain: 'railway.app', name: 'Jake Cooper' },
  'temporal': { domain: 'temporal.io', name: 'Samar Abbas' },
  'dagster-labs': { domain: 'dagster.io', name: 'Pete Hunt' },
  'astronomer': { domain: 'astronomer.io', name: 'Julian LaNeve' },
  'airbyte': { domain: 'airbyte.com', name: 'Michel Tricot' },
  'dbt-labs': { domain: 'getdbt.com', name: 'Tristan Handy' },
  'prefect': { domain: 'prefect.io', name: 'Jeremiah Lowin' },
  'clickhouse': { domain: 'clickhouse.com', name: 'Alexey Milovidov' },
  'grafana-labs': { domain: 'grafana.com', name: 'Tom Wilkie' },
  'kong': { domain: 'konghq.com', name: 'Marco Palladino' },
  'hashicorp': { domain: 'hashicorp.com', name: 'VP Engineering' },
  'wiz': { domain: 'wiz.io', name: 'Ami Luttwak' },
  'snyk': { domain: 'snyk.io', name: 'CTO' },
  'lacework': { domain: 'lacework.com', name: 'CTO' },
  'orca-security': { domain: 'orca.security', name: 'CTO' },
  'semgrep': { domain: 'semgrep.dev', name: 'Isaac Evans' },
  'socket': { domain: 'socket.dev', name: 'Feross Aboukhadijeh' },
  'tailscale': { domain: 'tailscale.com', name: 'Avery Pennarun' },
  'coder': { domain: 'coder.com', name: 'Rob Whiteley' },
  'teleport': { domain: 'goteleport.com', name: 'Ev Kontsevoy' },
  'oso': { domain: 'osohq.com', name: 'Sunil Pai' },
  'langchain': { domain: 'langchain.com', name: 'Harrison Chase' },
  'langfuse': { domain: 'langfuse.com', name: 'Clemens Mewald' },
  'pinecone': { domain: 'pinecone.io', name: 'Edo Liberty' },
  'weaviate': { domain: 'weaviate.io', name: 'Bob van Luijt' },
  'unstructured': { domain: 'unstructured.io', name: 'Brian Raymond' },
  'vellum': { domain: 'vellum.ai', name: 'CEO' },
  'crewai': { domain: 'crewai.com', name: 'João Moura' },
  'llamaindex': { domain: 'llamaindex.ai', name: 'Jerry Liu' },
  'together-ai': { domain: 'together.ai', name: 'Ce Zhang' },
  'anyscale': { domain: 'anyscale.com', name: 'Robert Nishihara' }
};

const extractSection = (content, headerTitle, nextHeaderRegex = /^## /m) => {
  const headerRegex = new RegExp(`^## [\\d\\.]*\\s*(?:${headerTitle})`, 'im');
  const match = content.match(headerRegex);
  if (!match) return '';

  const startIndex = match.index + match[0].length;
  const remaining = content.slice(startIndex);
  const nextMatch = remaining.match(nextHeaderRegex);

  let sectionContent = nextMatch ? remaining.slice(0, nextMatch.index) : remaining;
  return sectionContent.trim().replace(/"/g, '""'); // escape quotes for CSV
};

const parseFile = (fileName) => {
  const content = fs.readFileSync(path.join(dirPath, fileName), 'utf8');
  const slug = fileName.replace('.md', '');
  
  const companyInfo = companyData[slug] || { domain: `${slug}.com`, name: 'Contact' };
  const name = companyInfo.name;
  
  // Guess Email
  let email = '';
  if (name && name !== 'CTO' && name !== 'VP Engineering' && name !== 'CEO') {
      const firstName = name.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '');
      email = `${firstName}@${companyInfo.domain}`;
  }

  return {
    Company: slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' '),
    Contact_Name: name,
    Estimated_Email: email,
    Subject: extractSection(content, 'Subject Line'),
    Email_Body: extractSection(content, 'Outreach Email|Primary Email'),
    Follow_Up_5_Day: extractSection(content, '5-Day Follow-Up|5-Day Follow Up|Follow-up #1'),
    Follow_Up_10_Day: extractSection(content, '10-Day Follow-Up|10-Day Follow Up|Follow-up #2'),
    LinkedIn_Connection: extractSection(content, 'LinkedIn Connection Message|LinkedIn Connect|LinkedIn Connection'),
    LinkedIn_Follow_Up: extractSection(content, 'LinkedIn Follow-Up|LinkedIn Follow Up')
  };
};

const main = () => {
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  const records = files.map(parseFile);
  
  const headers = ['Company', 'Contact_Name', 'Estimated_Email', 'Subject', 'Email_Body', 'Follow_Up_5_Day', 'Follow_Up_10_Day', 'LinkedIn_Connection', 'LinkedIn_Follow_Up'];
  
  const csvLines = [headers.join(',')];
  for (const record of records) {
    const line = headers.map(h => `"${record[h] || ''}"`).join(',');
    csvLines.push(line);
  }
  
  fs.writeFileSync(path.join(dirPath, 'campaign_data.csv'), csvLines.join('\\n'));
  console.log(`Successfully generated campaign_data.csv with ${records.length} records.`);
};

main();
