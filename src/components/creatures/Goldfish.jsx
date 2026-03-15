import React from 'react';
import { motion } from 'framer-motion';

const Goldfish = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute group cursor-pointer"
      style={{
        top: '20%',
        left: '15%',
      }}
      animate={{
        y: [0, -15, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative w-24 h-16 cursor-pointer drop-shadow-[0_0_15px_rgba(255,165,0,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(255,165,0,0.9)] transition-all duration-300">
        {/* Body */}
        <div className="absolute w-20 h-16 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full"></div>
        
        {/* Gooey/wet texture overlay */}
        <div className="absolute w-18 h-14 bg-orange-300/30 rounded-full blur-[2px] top-1 left-1"></div>
        
        {/* Eye */}
        <div className="absolute top-5 left-4 w-3 h-3 bg-slate-900 rounded-full border-2 border-orange-300"></div>
        <div className="absolute top-5.5 left-5 w-1 h-1 bg-white rounded-full"></div>
        
        {/* Tail Fin */}
        <div className="absolute top-2 left-16 w-12 h-12 bg-gradient-to-br from-orange-400/80 to-orange-500/60 rounded-tr-full rounded-br-full -rotate-45"></div>
        <div className="absolute top-5 left-16 w-12 h-12 bg-gradient-to-br from-orange-400/60 to-orange-500/40 rounded-tr-full rounded-br-full rotate-45"></div>
        
        {/* Dorsal Fin */}
        <div className="absolute -top-2 left-8 w-8 h-8 bg-gradient-to-t from-orange-400/70 to-orange-300/50 rounded-t-full skew-x-12"></div>
        
        {/* Side Fin */}
        <div className="absolute top-8 left-6 w-6 h-4 bg-orange-400/60 rounded-full -rotate-12"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-400/10 blur-lg"></div>
      </div>
    </motion.div>
  );
};

export default Goldfish;
