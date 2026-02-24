# git-update.ps1
# Stages all changes, commits with a timestamped message, and pushes to GitHub

param(
    [string]$Message = ""
)

if ($Message -eq "") {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
    $Message = "Portfolio update - $timestamp"
}

Write-Host "Staging all changes..." -ForegroundColor Cyan
git add .

Write-Host "Committing with message: '$Message'" -ForegroundColor Cyan
git commit -m $Message

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Update pushed successfully!" -ForegroundColor Green
} else {
    Write-Host "Push failed. Check your remote origin configuration." -ForegroundColor Red
}
