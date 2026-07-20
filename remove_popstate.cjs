const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// The code to remove:
const regex = /\/\/ Synchronize browser URL on load for \/research paths[\s\S]*?\}, \[activeView\]\);/m;

if (regex.test(code)) {
    code = code.replace(regex, '// Removed manual routing syncs in favor of React Router');
    fs.writeFileSync('src/App.tsx', code);
    console.log("Replaced successfully");
} else {
    console.log("Could not find the target code");
}
