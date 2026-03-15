import React from 'react';
import { motion } from 'framer-motion';

const SeaTurtle = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute group cursor-pointer"
      style={{
        top: '50%',
        right: '15%',
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative w-56 h-44 cursor-pointer">
        
        {/* Turtle Shell (Carapace) */}
        <div className="absolute top-12 left-12 w-32 h-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-[60%_40%_60%_40%] shadow-lg"></div>
        
        {/* Shell pattern - distinctive turtle scutes */}
        <div className="absolute top-16 left-16 w-6 h-6 bg-green-800/60 rounded-full"></div>
        <div className="absolute top-16 left-24 w-8 h-8 bg-green-800/50 rounded-[45%_55%_45%_55%]"></div>
        <div className="absolute top-16 left-32 w-6 h-6 bg-green-800/60 rounded-full"></div>
        
        <div className="absolute top-22 left-18 w-5 h-5 bg-green-800/40 rounded-full"></div>
        <div className="absolute top-22 left-26 w-7 h-7 bg-green-800/35 rounded-[50%_50%_40%_40%]"></div>
        <div className="absolute top-22 left-32 w-5 h-5 bg-green-800/40 rounded-full"></div>
        
        {/* Turtle Head */}
        <div className="absolute top-14 left-0 w-12 h-12 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-full"></div>
        
        {/* Eye */}
        <div className="absolute top-[18px] left-3 w-2 h-2 bg-black rounded-full"></div>
        <div className="absolute top-[19px] left-[4px] w-0.5 h-0.5 bg-white rounded-full"></div>
        
        {/* Mouth */}
        <div className="absolute top-[24px] left-2 w-3 h-1 bg-green-800/50 rounded-full"></div>
        
        {/* Neck connection */}
        <div className="absolute top-16 left-6 w-3 h-2 bg-green-600 rounded-full"></div>
        
        {/* Front Flippers */}
        <div className="absolute top-10 -left-10 w-24 h-8 bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-full -rotate-30"></div>
        <div className="absolute top-20 -left-10 w-24 h-8 bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-full rotate-30"></div>
        
        {/* Flipper fingers/details */}
        <div className="absolute top-[12px] -left-6 w-2 h-10 bg-green-400/20 rounded-full -rotate-20"></div>
        <div className="absolute top-[26px] -left-6 w-2 h-10 bg-green-400/20 rounded-full rotate-20"></div>
        
        {/* Rear Flippers */}
        <div className="absolute top-16 right-0 w-16 h-6 bg-gradient-to-r from-green-700 to-green-800 rounded-full rotate-35"></div>
        <div className="absolute top-24 right-0 w-16 h-6 bg-gradient-to-r from-green-700 to-green-800 rounded-full -rotate-35"></div>
        
        {/* Tail */}
        <div className="absolute top-20 right-[-3px] w-4 h-3 bg-gradient-to-r from-green-800 to-green-700 rounded-r-full rotate-10"></div>
        
        {/* Shell details and highlights */}
        <div className="absolute top-13 left-13 w-30 h-18 bg-gradient-to-b from-green-500/20 to-transparent rounded-[60%_40%_60%_40%]"></div>
        
        {/* Shell border */}
        <div className="absolute top-12 left-12 w-32 h-20 border-2 border-green-900/30 rounded-[60%_40%_60%_40%]"></div>
        
        {/* Shadow under turtle */}
        <div className="absolute top-[32px] left-14 w-28 h-4 bg-black/20 rounded-full blur-md"></div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-400/10 blur-lg rounded-[60%_40%_60%_40%]"></div>
        
        {/* Water disturbance around turtle */}
        <div className="absolute top-8 left-8 w-2 h-2 bg-cyan-300/30 rounded-full animate-pulse"></div>
        <div className="absolute top-28 left-36 w-1.5 h-1.5 bg-cyan-200/25 rounded-full animate-pulse delay-100"></div>
      </div>
    </motion.div>
  );
};

export default SeaTurtle;
