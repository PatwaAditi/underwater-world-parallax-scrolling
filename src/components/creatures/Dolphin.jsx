import React from 'react';
import { motion } from 'framer-motion';

const Dolphin = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute group cursor-pointer"
      style={{
        top: '40%',
        left: '50%',
      }}
      animate={{
        y: [0, -25, 0],
        x: [0, 15, 0],
        rotate: [-10, -5, -10],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative w-40 h-12 cursor-pointer drop-shadow-[0_0_15px_rgba(176,196,222,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(176,196,222,0.9)] transition-all duration-300 -rotate-10">
        {/* Body - Realistic gradient */}
        <div className="absolute w-40 h-12 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 rounded-l-full rounded-r-full"></div>
        <div className="absolute top-6 w-40 h-6 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 rounded-l-full rounded-r-full opacity-60"></div>
        
        {/* Gooey/wet texture */}
        <div className="absolute top-2 left-4 w-32 h-8 bg-gray-300/20 rounded-full blur-[2px]"></div>
        
        {/* Dorsal Fin */}
        <div className="absolute -top-4 left-16 w-4 h-8 bg-gradient-to-t from-gray-600 to-gray-500 rounded-t-lg -skew-x-30"></div>
        
        {/* Eye */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-black rounded-full"></div>
        <div className="absolute top-4.5 left-4.5 w-0.5 h-0.5 bg-white rounded-full"></div>
        
        {/* Side Fin */}
        <div className="absolute top-8 left-12 w-8 h-4 bg-gray-500 rounded-full -rotate-12 opacity-80"></div>
        
        {/* Tail */}
        <div className="absolute top-4 right-[-8px] w-10 h-8 bg-gradient-to-r from-gray-500 to-gray-400 rounded-r-full rotate-45"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyan-300/10 blur-lg"></div>
      </div>
    </motion.div>
  );
};

export default Dolphin;
