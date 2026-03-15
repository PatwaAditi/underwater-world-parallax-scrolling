import React from 'react';
import { motion } from 'framer-motion';

const Anglerfish = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute group cursor-pointer"
      style={{
        top: '60%',
        left: '10%',
      }}
      animate={{
        y: [0, -10, 0],
        x: [0, 8, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative w-56 h-32 cursor-pointer transition-all duration-300 group-hover:drop-shadow-[0_0_30px_rgba(255,255,200,0.6)]">
        {/* Lure Stalk */}
        <div className="absolute top-0 left-20 w-1 h-12 bg-gradient-to-b from-slate-500 to-slate-600 -rotate-45"></div>
        
        {/* Lure Light - Bioluminescent */}
        <div className="absolute -top-8 left-12 w-4 h-4 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 rounded-full drop-shadow-[0_0_20px_rgba(255,255,200,0.9)] animate-pulse"></div>
        <div className="absolute -top-6 left-14 w-2 h-2 bg-yellow-100 rounded-full blur-[2px]"></div>
        
        {/* Body - Realistic dark creature */}
        <div className="absolute top-10 left-0 w-56 h-20 bg-gradient-to-b from-slate-900 via-slate-800 to-black rounded-full"></div>
        
        {/* Gooey texture */}
        <div className="absolute top-12 left-4 w-48 h-16 bg-slate-700/20 rounded-full blur-[2px]"></div>
        
        {/* Eye - Small and beady */}
        <div className="absolute top-14 left-8 w-2 h-2 bg-white/60 rounded-full"></div>
        
        {/* Teeth - Sharp and menacing */}
        <div className="absolute top-20 left-48 w-2 h-5 bg-gradient-to-b from-gray-300 to-gray-400 -skew-y-12 rounded-b-sm"></div>
        <div className="absolute top-22 left-44 w-2 h-5 bg-gradient-to-b from-gray-300 to-gray-400 -skew-y-12 rounded-b-sm"></div>
        <div className="absolute top-24 left-40 w-2 h-4 bg-gradient-to-b from-gray-400 to-gray-500 -skew-y-12 rounded-b-sm"></div>
        
        {/* Fins */}
        <div className="absolute top-16 left-12 w-8 h-6 bg-slate-800 rounded-full -rotate-45 opacity-70"></div>
        <div className="absolute top-16 right-8 w-8 h-6 bg-slate-800 rounded-full rotate-45 opacity-70"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-yellow-200/10 blur-xl"></div>
      </div>
    </motion.div>
  );
};

export default Anglerfish;
