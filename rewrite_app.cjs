const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// The original App.tsx logic for activeView is:
const originalStateCode = `  const [activeView, setActiveView] = useState<string>(() => {
    const path = window.location.pathname;
    if (path.startsWith('/research-index')) {
      return 'research-index';
    } else if (path.startsWith('/research/')) {
      const slug = path.replace('/research/', '');
      const isDefaultCompany = ['omnea', 'monzo'].includes(slug.toLowerCase());
      const isTargetCompany = ALL_COMPANIES_RESEARCH_DATA.some(c => getCompanySlug(c.name) === slug);
      if (isTargetCompany && !isDefaultCompany) {
        return 'research-index';
      } else {
        return 'research';
      }
    } else if (path === '/research') {
      return 'research';
    }
    return 'home';
  });`;

const newRouterCode = `  const navigate = useNavigate();
  const location = useLocation();

  let activeView = 'home';
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

code = code.replace(originalStateCode, newRouterCode);

// Add imports
code = code.replace(
  "import React, { useState, useEffect, useRef } from 'react';",
  "import React, { useState, useEffect, useRef } from 'react';\nimport { useNavigate, useLocation, Routes, Route, useParams } from 'react-router-dom';"
);

// We should also remove the custom popstate listeners in App.tsx
// It has:
/*
  useEffect(() => {
    const checkInitialPath = () => {
...
    return () => window.removeEventListener('popstate', checkInitialPath);
  }, []);
*/
// It's safer to just replace them with empty strings, but let's let them be since `pushStateAndNotify` isn't used now by setActiveView. Wait, `activeView` changing won't trigger `pushStateAndNotify` if we remove the `useEffect` that watches `activeView`.
// Let's just output this and test if it works as a React Router App wrapper.

fs.writeFileSync('src/App.tsx', code);
