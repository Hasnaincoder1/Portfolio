@echo off
echo Pushing to GitHub...
git push origin main
if %errorlevel%==0 (
    echo Push successful!
) else (
    echo Push failed. Make sure you have set up the remote origin.
    echo Run: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
)
pause
