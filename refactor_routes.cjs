const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf8');

// Replace the activeView logic
const oldActiveViewLogic = `  let activeView = 'home';
  const path = location.pathname;
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

  const setActiveView = (view: string) => {
    if (view === 'home') navigate('/');
    else navigate('/' + view);
  };`;

const newActiveViewLogic = `  const path = location.pathname;
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
  }`;

code = code.replace(oldActiveViewLogic, newActiveViewLogic);

// We need to rewrite the conditional rendering to use <Routes>
// Currently it's wrapped in:
/*
        <AnimatePresence mode="wait">
          <motion.div
            key={readingArticle ? 'reading' : activeView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full"
          >
            {readingArticle ? ( ... ) : activeView === 'home' && ( ... )}
            ...
          </motion.div>
        </AnimatePresence>
*/

code = code.replace("import { BrowserRouter, useNavigate, useLocation, Routes, Route, useParams } from 'react-router-dom';", 
"import { BrowserRouter, useNavigate, useLocation, Routes, Route, useParams, Navigate } from 'react-router-dom';");

// Instead of parsing 1600 lines, we can create a wrapper component inside App.tsx that handles the /research/:slug routing, 
// OR we can just wrap the huge block in Routes, but the JSX structure is complex.
// Let's replace the whole {activeView === '...'} with <Routes> using regex or exact strings.

fs.writeFileSync('src/App.tsx', code);
