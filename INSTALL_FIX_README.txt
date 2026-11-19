CART3R PWA INSTALL FIX

Upload these items into the ROOT of your GitHub Pages repository:
- manifest.webmanifest (replace existing)
- sw.js (new file)
- icons/ folder (contains 192x192 and 512x512 PNG icons)

Also add the contents of app-register-snippet.js to the BOTTOM of your existing app.js.
Do not replace your existing app.js with the snippet.

Then:
1. Commit the changes to the main branch.
2. Wait 1-3 minutes for GitHub Pages to redeploy.
3. Open your GitHub Pages site in Chrome.
4. Visit the site once, refresh it, then close and reopen Chrome.
5. Chrome menu > Install app / Add to Home screen.

If Chrome still refuses installation, use Chrome menu > Add to Home screen > Create shortcut.
This package only fixes PWA installability; it does not enable Kalshi live trading.
