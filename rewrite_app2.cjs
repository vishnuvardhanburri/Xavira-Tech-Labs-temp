const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace('export default function App() {', 'function AppContent() {');
code += `

import { BrowserRouter } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
`;
fs.writeFileSync('src/App.tsx', code);
