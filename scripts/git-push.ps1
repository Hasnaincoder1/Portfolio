# git-push.ps1
# Pushes the current branch to GitHub origin

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan

git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Push successful!" -ForegroundColor Green
} else {
    Write-Host "Push failed. Make sure you have set up the remote origin." -ForegroundColor Red
    Write-Host "Run: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git" -ForegroundColor Yellow
}
