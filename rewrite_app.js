const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// We'll just replace the entire state mechanism with a hook.
code = code.replace(
  "const [activeView, setActiveView] = useState<string>(() => {",
  `const navigate = useNavigate();
  const location = useLocation();

  let activeView = 'home';
  const path = location.pathname;
  if (path.startsWith('/research-index')) {
    activeView = 'research-index';
  } else if (path.startsWith('/research/')) {
    const slug = path.replace('/research/', '');
    const isDefaultCompany = ['omnea', 'monzo'].includes(slug.toLowerCase());
    // Note: ALL_COMPANIES_RESEARCH_DATA is not in scope here if it's imported in ResearchIndexView, wait.
    activeView = 'research';
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
  };

  // Dummy useState to prevent breaking changes if we missed something
  // const [activeView, setActiveView] = useState<string>(() => {`
);

// We need to import react-router-dom
code = code.replace(
  "import React, { useState, useEffect, useRef } from 'react';",
  "import React, { useState, useEffect, useRef } from 'react';\nimport { useNavigate, useLocation, Routes, Route, useParams } from 'react-router-dom';"
);

fs.writeFileSync('src/App.tsx.new', code);
