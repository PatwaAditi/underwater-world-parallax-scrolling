import React from 'react';
import { creatureData } from '../../data/creatureData';
import Dolphin from '../creatures/Dolphin';
import Whale from '../creatures/Whale';

const TwilightZone = ({ onCreatureClick }) => {
  return (
    <section id="twilight-zone" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-blue-900 via-indigo-900 to-primary">
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
            fallback.className = 'absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900 via-indigo-900 to-primary z-0';
            video.parentNode.insertBefore(fallback, video);
          }
        }}
      >
        <source src={`${import.meta.env.BASE_URL}videos/The_Twilight_Zone_background.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="text-glow">The Twilight Zone</span>
        </h2>
        <p className="text-md md:text-lg text-gray-400 max-w-2xl">
          Sunlight fades. New giants emerge from the deep blue gloom.
        </p>
      </div>

      {/* Creatures */}
      <div className="absolute top-0 left-0 w-full h-full z-30">
        <Whale onClick={() => onCreatureClick(creatureData.whale)} />
        <Dolphin onClick={() => onCreatureClick(creatureData.dolphin)} />
      </div>

      {/* Top Blending Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent z-20 pointer-events-none"></div>
      
      {/* Bottom Blending Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-30 pointer-events-none"></div>
    </section>
  );
};

export default TwilightZone;
