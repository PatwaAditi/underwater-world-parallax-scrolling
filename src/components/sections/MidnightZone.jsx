import React from 'react';
import { creatureData } from '../../data/creatureData';
import BioluminescentJellyfish from '../creatures/BioluminescentJellyfish';
import Anglerfish from '../creatures/Anglerfish';

const MidnightZone = ({ onCreatureClick }) => {
  return (
    <section id="midnight-zone" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-primary">
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
            fallback.className = 'absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-900 via-purple-900 to-primary z-0';
            video.parentNode.insertBefore(fallback, video);
          }
        }}
      >
        <source src="/videos/The_Midnight_Zone_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="text-glow">The Midnight Zone</span>
        </h2>
        <p className="text-md md:text-lg text-gray-400 max-w-2xl">
          In the crushing dark, life creates its own light.
        </p>
      </div>

      {/* Creatures */}
      <div className="absolute top-0 left-0 w-full h-full z-30">
        <BioluminescentJellyfish onClick={() => onCreatureClick(creatureData.jellyfish)} />
        <Anglerfish onClick={() => onCreatureClick(creatureData.anglerfish)} />
      </div>

      {/* Top Blending Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent z-20 pointer-events-none"></div>
      
      {/* Bottom Blending Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-30 pointer-events-none"></div>
    </section>
  );
};

export default MidnightZone;
