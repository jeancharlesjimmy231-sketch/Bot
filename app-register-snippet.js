// Add this to the bottom of your existing app.js (or include as a separate script).
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => console.log('CART3R service worker ready:', registration.scope))
      .catch(error => console.error('CART3R service worker registration failed:', error));
  });
}
