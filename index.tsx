import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA behavior
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('Service Worker registered:', reg);
        if (reg.waiting) {
          console.log('SW waiting to activate');
        }

        reg.addEventListener('updatefound', () => {
          const installing = reg.installing;
          if (installing) {
            installing.addEventListener('statechange', () => {
              if (installing.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  console.log('New content available, please refresh.');
                } else {
                  console.log('Content cached for offline use.');
                }
              }
            });
          }
        });
      })
      .catch(err => console.warn('SW registration failed:', err));
  });
}