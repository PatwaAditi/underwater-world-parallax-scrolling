
import React, { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import waterdrops from './assets/waterdrops-overlay.webp';

function App() {
  useEffect(() => {
    // Initialize app
    const snapContainer = document.querySelector('.snap-container');
    if (snapContainer) {
      // Scroll to top on load
      snapContainer.scrollTop = 0;
    }
  }, []);

  return (
    <>
      {/* Waterdrops Overlay */}
      <div
        style={{ 
          backgroundImage: waterdrops ? `url(${waterdrops})` : 'none',
          backgroundColor: waterdrops ? 'transparent' : '#0B0C10'
        }}
        className="fixed top-0 left-0 w-full h-full bg-repeat opacity-20 mix-blend-overlay pointer-events-none z-40"
      ></div>

      {/* Main Content */}
      <main className="relative z-10">
        <LandingPage />
      </main>
    </>
  );
}

export default App;
