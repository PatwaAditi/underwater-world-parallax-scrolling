import React from 'react';

const OceanFloor = () => {
  const scrollToTop = () => {
    const snapContainer = document.querySelector('.snap-container');
    if (snapContainer) {
      // Disable CSS scroll-snap temporarily to prevent interference
      const originalSnapType = snapContainer.style.scrollSnapType;
      snapContainer.style.scrollSnapType = 'none';
      
      // Use a custom slow scroll for more control
      const start = snapContainer.scrollTop;
      const targetPosition = 0;
      const duration = 2000; // 2 seconds
      const increment = 20; // Scroll every 20ms
      const stepDistance = (targetPosition - start) / (duration / increment);
      
      let currentPosition = start;
      
      const timer = setInterval(() => {
        currentPosition += stepDistance;
        
        // Check if we've reached or passed the target
        if ((stepDistance > 0 && currentPosition >= targetPosition) || 
            (stepDistance < 0 && currentPosition <= targetPosition)) {
          currentPosition = targetPosition;
          clearInterval(timer);
          // Re-enable CSS scroll-snap after scrolling completes
          snapContainer.style.scrollSnapType = originalSnapType;
        }
        
        snapContainer.scrollTop = currentPosition;
      }, increment);
    }
  };

  return (
    <section id="ocean-floor" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-gray-900 to-primary flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onError={(e) => {
          console.error('Video load error:', e);
          // Add fallback background if video fails to load
          const video = e.target;
          if (video) {
            video.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-gray-900 to-primary z-0';
            video.parentNode.insertBefore(fallback, video);
          }
        }}
      >
        <source src="/videos/The_Ocean_Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      
      {/* Glassmorphic Card */}
      <div className="relative z-30 bg-black/30 backdrop-blur-lg rounded-xl p-8 text-center border border-cyan-500/20">
        <h2 className="text-3xl font-bold text-white mb-4 text-glow">
          Thank you for visiting my underwater world
        </h2>
        <button
          onClick={scrollToTop}
          className="mt-4 px-6 py-2 bg-cyan-500/80 text-white font-bold rounded-lg hover:bg-cyan-400 transition-colors duration-300"
        >
          Ascend to Surface
        </button>
      </div>

      {/* Top Blending Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default OceanFloor;
