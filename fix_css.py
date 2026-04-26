import re

with open(r'c:\Users\Akhtar Wani\Desktop\project 2\css\style.css', 'r') as f:
    content = f.read()

# Add --hero-bg to :root
content = content.replace(
    '  --transition: 0.22s ease;\n}\n\n[data-theme="dark"] {',
    '  --transition: 0.22s ease;\n  --hero-bg: url(\'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&auto=format&fit=crop\');\n}\n\n[data-theme="dark"] {'
)

# Update hero::before to use var
content = content.replace(
    "background: url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&auto=format&fit=crop') center/cover no-repeat;",
    'background: var(--hero-bg) center/cover no-repeat;'
)

with open(r'c:\Users\Akhtar Wani\Desktop\project 2\css\style.css', 'w') as f:
    f.write(content)

print('CSS updated successfully')
