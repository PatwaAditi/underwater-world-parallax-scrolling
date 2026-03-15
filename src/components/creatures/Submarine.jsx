import React from 'react';
import { motion } from 'framer-motion';

const Submarine = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute group cursor-pointer"
      style={{
        top: '50%',
        left: '10%',
      }}
      animate={{
        x: [0, 30, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-72 h-28 transition-all duration-500 group-hover:drop-shadow-[0_0_35px_rgba(0,255,255,0.8)]">
        {/* Submarine Main Body - Realistic metallic with goo/glassy texture */}
        <div className="absolute top-3 left-0 w-72 h-22 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 rounded-[50%_50%_45%_45%] opacity-90"></div>
        
        {/* Glossy reflection on top */}
        <div className="absolute top-4 left-4 w-60 h-8 bg-gradient-to-b from-white/20 to-transparent rounded-[50%_50%_0_0]"></div>
        
        {/* Wet/gooey surface effect */}
        <div className="absolute top-5 left-8 w-40 h-6 bg-cyan-400/10 rounded-full blur-sm"></div>
        
        {/* Conning Tower (Command Center) */}
        <div className="absolute top-[-8px] left-24 w-20 h-10 bg-gradient-to-b from-slate-500 to-slate-700 rounded-t-2xl opacity-90"></div>
        <div className="absolute top-[-6px] left-26 w-16 h-8 bg-slate-400/30 rounded-t-xl"></div>
        
        {/* Periscope */}
        <div className="absolute top-[-16px] left-32 w-3 h-12 bg-slate-600 rounded-full"></div>
        <div className="absolute top-[-20px] left-30 w-7 h-4 bg-slate-500 rounded-t-lg"></div>
        
        {/* Main Viewport (Large Glass Window) */}
        <div className="absolute top-7 left-10 w-14 h-14 bg-gradient-to-br from-cyan-300/60 via-blue-400/40 to-slate-900/80 rounded-full border-4 border-slate-600 shadow-[inset_0_0_20px_rgba(0,255,255,0.5)]"></div>
        <div className="absolute top-9 left-14 w-6 h-6 bg-cyan-200/40 rounded-full blur-[2px]"></div>
        
        {/* Side Viewports (Small) */}
        <div className="absolute top-12 left-32 w-5 h-5 bg-gradient-to-br from-yellow-300/70 to-yellow-600/40 rounded-full border-2 border-slate-600 shadow-[0_0_10px_rgba(255,255,0,0.6)]"></div>
        <div className="absolute top-12 left-44 w-5 h-5 bg-gradient-to-br from-yellow-300/70 to-yellow-600/40 rounded-full border-2 border-slate-600 shadow-[0_0_10px_rgba(255,255,0,0.6)]"></div>
        <div className="absolute top-12 left-56 w-5 h-5 bg-gradient-to-br from-yellow-300/70 to-yellow-600/40 rounded-full border-2 border-slate-600 shadow-[0_0_10px_rgba(255,255,0,0.6)]"></div>
        
        {/* Propeller at Back */}
        <div className="absolute top-8 right-[-8px] w-6 h-16 bg-slate-500 rounded-full animate-pulse"></div>
        <div className="absolute top-12 right-[-4px] w-2 h-8 bg-slate-400 rounded-full"></div>
        
        {/* Front Tip */}
        <div className="absolute top-10 left-[-4px] w-8 h-10 bg-slate-600 rounded-l-full"></div>
        
        {/* Bubbles/Water Effect Around */}
        <div className="absolute top-0 left-20 w-2 h-2 bg-cyan-300/40 rounded-full animate-ping"></div>
        <div className="absolute top-4 left-40 w-1 h-1 bg-cyan-200/30 rounded-full animate-ping delay-100"></div>
        
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 rounded-[50%_50%_45%_45%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cyan-400/5 blur-xl"></div>
      </div>
    </motion.div>
  );
};

export default Submarine;
