import * as fs from 'fs';
import * as path from 'path';
import { ALL_COMPANIES_RESEARCH_DATA } from '../data/allCompaniesResearch';

const BASE_URL = 'https://www.xaviratechlabs.com';

// Generate clean slug exactly matching ResearchIndexView
const getCompanySlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\.com$/i, '-com')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

function generateSitemap() {
  const dateStr = new Date().toISOString().split('T')[0];

  // Static URLs
  const staticPaths = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/packages', priority: '0.8', changefreq: 'weekly' },
    { url: '/industries', priority: '0.8', changefreq: 'weekly' },
    { url: '/research', priority: '0.9', changefreq: 'daily' },
    { url: '/research-insights', priority: '0.8', changefreq: 'weekly' },
    { url: '/faq', priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', priority: '0.8', changefreq: 'weekly' },
    { url: '/book', priority: '0.8', changefreq: 'weekly' },
    { url: '/cases', priority: '0.8', changefreq: 'weekly' }
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';

  // Add static URLs
  for (const p of staticPaths) {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${p.url}</loc>\n`;
    xml += `    <lastmod>${dateStr}</lastmod>\n`;
    xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
    xml += `    <priority>${p.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  // Add dynamic company URLs (Omnea, Monzo, etc.)
  for (const company of ALL_COMPANIES_RESEARCH_DATA) {
    const slug = getCompanySlug(company.name);
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/research/${slug}</loc>\n`;
    xml += `    <lastmod>${dateStr}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += '</urlset>\n';

  const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log(`[BUILD] Automatically generated sitemap.xml with ${staticPaths.length + ALL_COMPANIES_RESEARCH_DATA.length} URLs at: ${sitemapPath}`);
}

function generateRobots() {
  const robotsText = `User-agent: *
Allow: /
Disallow: /assets/
Disallow: /dist/
Disallow: /src/
Disallow: /node_modules/

Sitemap: ${BASE_URL}/sitemap.xml
`;

  const robotsPath = path.resolve(process.cwd(), 'public/robots.txt');
  fs.writeFileSync(robotsPath, robotsText, 'utf8');
  console.log(`[BUILD] Automatically generated robots.txt pointing to ${BASE_URL}/sitemap.xml at: ${robotsPath}`);
}

try {
  generateSitemap();
  generateRobots();
} catch (err) {
  console.error('[BUILD ERROR] Failed to generate sitemap or robots.txt:', err);
  process.exit(1);
}
