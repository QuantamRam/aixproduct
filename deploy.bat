@echo off
echo ===================================================
echo   Deploying Latest Changes to Netlify (aixproduct)
echo ===================================================
call netlify deploy --prod --dir=.
echo Done! Live site updated.
