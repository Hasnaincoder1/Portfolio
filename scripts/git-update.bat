@echo off
cd /d "%~dp0\.."
echo Staging all changes...
git add .

echo Committing changes...
for /f "tokens=1-3 delims=/ " %%a in ('date /t') do set mydate=%%a-%%b-%%c
for /f "tokens=1-2 delims=: " %%a in ('time /t') do set mytime=%%a:%%b
git commit -m "Portfolio update - %mydate% %mytime%"

echo Pushing to GitHub...
git push origin main

if %errorlevel%==0 (
    echo Update pushed successfully!
) else (
    echo Push failed. Check your remote origin configuration.
)
pause
