import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Surface from '../components/sections/Surface';
import TwilightZone from '../components/sections/TwilightZone';
import MidnightZone from '../components/sections/MidnightZone';
import Abyss from '../components/sections/Abyss';
import OceanFloor from '../components/sections/OceanFloor';
import Modal from '../components/Modal';

export default function LandingPage() {
  const [selectedCreature, setSelectedCreature] = useState(null);

  useEffect(() => {
    // Initialize landing page
    const snapContainer = document.querySelector('.snap-container');
    if (snapContainer) {
      // Ensure starting at top
      snapContainer.scrollTop = 0;
    }
  }, []);

  return (
    <>
      {/* SVG Filter for gooey effects */}
      <svg className="goo-filter">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      
      {/* Main Scroll Container with CSS Snap Scrolling */}
          <div className="snap-container h-screen w-full overflow-y-scroll">
        {/* Section 1: Surface */}
        <section id="home" className="snap-section">
          <Surface onCreatureClick={setSelectedCreature} />
        </section>

        {/* Section 2: Twilight Zone */}
        <section id="twilight-zone" className="snap-section">
          <TwilightZone onCreatureClick={setSelectedCreature} />
        </section>

        {/* Section 3: Midnight Zone */}
        <section id="midnight-zone" className="snap-section">
          <MidnightZone onCreatureClick={setSelectedCreature} />
        </section>

        {/* Section 4: Abyss */}
        <section id="abyss" className="snap-section">
          <Abyss onCreatureClick={setSelectedCreature} />
        </section>

        {/* Section 5: Ocean Floor */}
        <section id="ocean-floor" className="snap-section">
          <OceanFloor />
        </section>
      </div>

      <Modal 
        isOpen={!!selectedCreature}
        onClose={() => setSelectedCreature(null)}
        title={selectedCreature?.title}
        imageSrc={selectedCreature?.image}
      >
        <p className="text-gray-300">{selectedCreature?.facts}</p>
      </Modal>
    </>
  );
}
