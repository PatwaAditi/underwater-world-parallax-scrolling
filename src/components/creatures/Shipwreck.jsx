import React from 'react';
import { motion } from 'framer-motion';

const Shipwreck = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute group cursor-pointer"
      style={{
        bottom: '5%',
        left: '5%',
      }}
      animate={{
        y: [0, 5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
    >
      <div className="relative w-[550px] h-56 transition-all duration-500 group-hover:drop-shadow-[0_0_40px_rgba(139,69,19,0.6)]">
        {/* Main Hull - Realistic wood texture with goo/wet effect */}
        <div className="absolute bottom-0 left-0 w-[550px] h-40 bg-gradient-to-b from-[#5D4037] via-[#4E342E] to-[#3E2723] rounded-t-3xl rotate-[-2deg] opacity-95 shadow-2xl"></div>
        
        {/* Wood grain texture overlay */}
        <div className="absolute bottom-2 left-4 w-[530px] h-36 bg-gradient-to-r from-[#4E342E]/30 via-[#5D4037]/20 to-[#4E342E]/30 rounded-t-2xl rotate-[-2deg]"></div>
        
        {/* Wet/gooey surface on wood */}
        <div className="absolute bottom-10 left-20 w-[300px] h-20 bg-amber-700/10 rounded-full blur-md rotate-[-2deg]"></div>
        
        {/* Broken Hull Section - Dramatic break */}
        <div className="absolute bottom-0 left-[280px] w-[180px] h-28 bg-gradient-to-b from-[#4E342E] to-[#2D1B18] rounded-lg rotate-[-18deg] opacity-90"></div>
        <div className="absolute bottom-0 left-[300px] w-[120px] h-20 bg-gradient-to-b from-[#3E2723] to-[#1A0F0A] rounded rotate-[-25deg]"></div>
        
        {/* Broken Mast - Leaning */}
        <div className="absolute bottom-32 left-[180px] w-6 h-64 bg-gradient-to-b from-[#5D4037] to-[#2D1B18] rotate-[25deg] rounded shadow-xl"></div>
        <div className="absolute bottom-28 left-[175px] w-8 h-48 bg-gradient-to-b from-[#4E342E] to-[#1A0F0A] rotate-[30deg] rounded"></div>
        
        {/* Tattered Sail Remnants */}
        <div className="absolute bottom-60 left-[200px] w-[100px] h-[120px] bg-gradient-to-b from-[#3E2723]/40 to-transparent rotate-[15deg] rounded-b-full"></div>
        <div className="absolute bottom-56 left-[220px] w-[80px] h-[100px] bg-gradient-to-b from-[#2D1B18]/50 to-transparent rotate-[20deg] rounded-b-full"></div>
        
        {/* Deck Planks */}
        <div className="absolute bottom-36 left-8 w-[520px] h-6 bg-gradient-to-r from-[#4E342E] via-[#5D4037] to-[#4E342E] rotate-[-2deg]"></div>
        <div className="absolute bottom-40 left-12 w-[500px] h-4 bg-gradient-to-r from-[#3E2723] via-[#4E342E] to-[#3E2723] rotate-[-2deg]"></div>
        
        {/* Railing Posts (Broken) */}
        <div className="absolute bottom-44 left-20 w-3 h-12 bg-[#3E2723] rotate-[-5deg]"></div>
        <div className="absolute bottom-48 left-32 w-3 h-10 bg-[#4E342E] rotate-[-8deg]"></div>
        <div className="absolute bottom-42 left-[480px] w-3 h-14 bg-[#3E2723] rotate-[3deg]"></div>
        <div className="absolute bottom-46 left-[460px] w-3 h-11 bg-[#2D1B18] rotate-[5deg]"></div>
        
        {/* Metal Bands on Hull */}
        <div className="absolute bottom-8 left-20 w-[500px] h-3 bg-gradient-to-r from-[#5D4037] via-[#795548] to-[#5D4037] rotate-[-2deg] opacity-70"></div>
        <div className="absolute bottom-20 left-30 w-[480px] h-2 bg-gradient-to-r from-[#4E342E] via-[#5D4037] to-[#4E342E] rotate-[-2deg] opacity-60"></div>
        
        {/* Barnacles/Organic Growth */}
        <div className="absolute bottom-4 left-40 w-8 h-6 bg-[#5D4E37] rounded-full opacity-60"></div>
        <div className="absolute bottom-6 left-52 w-6 h-5 bg-[#4E5D37] rounded-full opacity-50"></div>
        <div className="absolute bottom-8 left-[400px] w-10 h-7 bg-[#5D5537] rounded-full opacity-55"></div>
        <div className="absolute bottom-12 left-[420px] w-7 h-6 bg-[#4E373D] rounded-full opacity-60"></div>
        
        {/* Glowing Deep Sea Creatures Around Wreck */}
        <div className="absolute bottom-20 left-[100px] w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-28 left-[350px] w-1.5 h-1.5 bg-cyan-300/50 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-16 left-[450px] w-2 h-2 bg-blue-400/60 rounded-full animate-pulse delay-500"></div>
        
        {/* Bubbles Rising */}
        <div className="absolute bottom-40 left-[200px] w-1.5 h-1.5 bg-cyan-200/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-44 left-[250px] w-1 h-1 bg-cyan-100/30 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-48 left-[180px] w-2 h-2 bg-blue-200/35 rounded-full animate-ping delay-700"></div>
        
        {/* Shadow Under Ship */}
        <div className="absolute bottom-[-10px] left-10 w-[520px] h-16 bg-black/40 blur-2xl rotate-[-2deg]"></div>
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-amber-600/5 blur-2xl"></div>
      </div>
    </motion.div>
  );
};

export default Shipwreck;
