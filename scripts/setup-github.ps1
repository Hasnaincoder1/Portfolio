# setup-github.ps1
# This script initializes git, adds all files, commits, and helps you link to a GitHub repo.

Write-Host "Starting GitHub Setup..." -ForegroundColor Cyan

# Check if git is installed
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "Git is not installed. Please install git first."
    exit
}

# Initialize Git if not already
if (!(Test-Path .git)) {
    git init
    Write-Host "Initialized empty Git repository." -ForegroundColor Green
}

# Create .gitignore if it doesn't exist
if (!(Test-Path .gitignore)) {
    @'
node_modules
.next
out
build
.env*
*.local
'@ | Out-File -FilePath .gitignore -Encoding utf8
    Write-Host "Created .gitignore" -ForegroundColor Green
}

# Stage and Commit
git add .
git commit -m "Initial portfolio setup with Next.js and automation"
Write-Host "Committed all files." -ForegroundColor Green

Write-Host "`nTo link this to a new GitHub repository, run:" -ForegroundColor Yellow
Write-Host "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
Write-Host "git branch -M main"
Write-Host "git push -u origin main"
