
import React, { useEffect, useRef } from 'react';
import { Waves } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'The Surface', href: '#home' },
    { name: 'The Twilight Zone', href: '#twilight-zone' },
    { name: 'The Midnight Zone', href: '#midnight-zone' },
    { name: 'The Abyss', href: '#abyss' },
    { name: 'The Ocean Floor', href: '#ocean-floor' },
  ];
  
  const snapContainerRef = useRef(null);

  // Initialize snap container ref after component mounts
  useEffect(() => {
    snapContainerRef.current = document.querySelector('.snap-container');
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    const snapContainer = snapContainerRef.current;
    
    if (targetSection && snapContainer) {
      const targetPosition = targetSection.offsetTop;
      const start = snapContainer.scrollTop;
      const duration = 2000; // 2 seconds of slow scrolling
      const increment = 20; // Scroll every 20ms
      const stepDistance = (targetPosition - start) / (duration / increment);
      
      // Disable CSS scroll-snap temporarily to prevent interference
      const originalSnapType = snapContainer.style.scrollSnapType;
      snapContainer.style.scrollSnapType = 'none';
      
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
    <header className="fixed top-0 left-0 w-full z-40">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center bg-black/30 backdrop-blur-md rounded-b-lg border-b border-cyan-500/20">
        <a href="#home" onClick={(e) => {
          e.preventDefault();
          handleNavClick(e, '#home');
        }} className="flex items-center gap-2">
          <Waves className="text-cyan-400" />
          <span className="text-xl font-bold text-white text-glow">
            Underwater World
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button className="lg:hidden text-white">
          {/* Mobile menu button, e.g., a hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-4 6h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
