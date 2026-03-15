import React from 'react';
import { motion } from 'framer-motion';

const Whale = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute group cursor-pointer"
      style={{
        top: '10%',
        left: '10%',
      }}
      animate={{
        y: [0, -15, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-96 h-48 cursor-pointer drop-shadow-[0_0_25px_rgba(70,130,180,0.4)] group-hover:drop-shadow-[0_0_40px_rgba(70,130,180,0.7)] transition-all duration-300">
        {/* Body - Realistic gradient */}
        <div className="absolute w-96 h-32 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 rounded-t-full rounded-b-lg"></div>
        
        {/* Underbelly */}
        <div className="absolute top-20 w-80 h-12 bg-gradient-to-b from-slate-500 to-slate-600 rounded-b-lg left-8"></div>
        
        {/* Gooey/wet texture */}
        <div className="absolute top-4 left-8 w-80 h-20 bg-slate-500/15 rounded-t-full blur-[3px]"></div>
        
        {/* Eye */}
        <div className="absolute top-12 left-8 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute top-12.5 left-9 w-1 h-1 bg-slate-800 rounded-full"></div>
        
        {/* Dorsal Fin */}
        <div className="absolute -top-8 left-48 w-12 h-16 bg-gradient-to-t from-slate-600 to-slate-700 rounded-t-full -skew-x-12"></div>
        
        {/* Tail */}
        <div className="absolute top-16 -right-20 w-32 h-8 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full rotate-45"></div>
        <div className="absolute top-16 -right-20 w-32 h-8 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full -rotate-45"></div>
        
        {/* Side Fin */}
        <div className="absolute top-24 left-32 w-20 h-8 bg-slate-600 rounded-full -rotate-12 opacity-80"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-400/10 blur-xl"></div>
      </div>
    </motion.div>
  );
};

export default Whale;
