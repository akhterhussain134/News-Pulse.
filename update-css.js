const fs = require('fs');

const filePath = 'c:/Users/Akhtar Wani/Desktop/project 2/css/style.css';
let css = fs.readFileSync(filePath, 'utf8');

// 1. Add --hero-bg variable to :root
css = css.replace(
  '  --transition: 0.22s ease;\n}\n\n[data-theme="dark"] {',
  '  --transition: 0.22s ease;\n  --hero-bg: url(\'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&auto=format&fit=crop\');\n}\n\n[data-theme="dark"] {'
);

// 2. Update hero::before to use var(--hero-bg)
css = css.replace(
  "  background: url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&auto=format&fit=crop') center/cover no-repeat;",
  '  background: var(--hero-bg) center/cover no-repeat;'
);

// 3. Append .no-results class at the end
css += '\n.no-results { grid-column: 1 / -1; text-align: center; padding: 48px 24px; color: var(--text-muted); font-size: 16px; }\n';

fs.writeFileSync(filePath, css);
console.log('CSS updated successfully');
