$css = Get-Content -Raw -Path 'c:\Users\Akhtar Wani\Desktop\project 2\css\style.css'

$css = $css -replace '  --transition: 0\.22s ease;\r?\n\}\r?\n\r?\n\[data-theme="dark"\] \{', '  --transition: 0.22s ease;' + "`n  --hero-bg: url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&auto=format&fit=crop');`n}`n`n[data-theme=`"dark`"] {"

$css = $css -replace "background: url\('https://images\.unsplash\.com/photo-1504711434969-e33886168f5c\?w=1400&auto=format&fit=crop'\) center/cover no-repeat;", 'background: var(--hero-bg) center/cover no-repeat;'

if ($css -notmatch '\.no-results') {
    $css += "`n.no-results { grid-column: 1 / -1; text-align: center; padding: 48px 24px; color: var(--text-muted); font-size: 16px; }`n"
}

Set-Content -Path 'c:\Users\Akhtar Wani\Desktop\project 2\css\style.css' -Value $css -NoNewline
Write-Host 'CSS updated successfully'
