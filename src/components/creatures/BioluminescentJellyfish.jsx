import React from 'react';
import { motion } from 'framer-motion';

const BioluminescentJellyfish = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute group cursor-pointer"
      style={{
        top: '10%',
        right: '25%',
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 8, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative w-28 h-48 cursor-pointer drop-shadow-[0_0_25px_theme(colors.highlight)] group-hover:drop-shadow-[0_0_50px_theme(colors.accent)] transition-all duration-300">
        {/* Bell - Realistic glassy effect */}
        <div className="absolute top-0 left-0 w-28 h-16 bg-gradient-to-b from-cyan-300/40 via-cyan-400/30 to-cyan-500/20 rounded-t-full"></div>
        <div className="absolute top-2 left-2 w-24 h-14 bg-gradient-to-b from-cyan-200/30 to-cyan-300/20 rounded-t-full"></div>
        
        {/* Inner glow */}
        <div className="absolute top-4 left-6 w-16 h-10 bg-cyan-300/20 rounded-t-full blur-md"></div>
        
        {/* Tentacles with glow */}
        <div className="absolute top-16 left-12 w-1 h-32 bg-gradient-to-b from-cyan-400/60 to-cyan-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-16 left-8 w-1 h-24 bg-gradient-to-b from-cyan-400/50 to-cyan-500/25 rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-16 left-16 w-1 h-24 bg-gradient-to-b from-cyan-400/50 to-cyan-500/25 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-16 left-4 w-1 h-16 bg-gradient-to-b from-cyan-400/40 to-cyan-500/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-16 left-20 w-1 h-16 bg-gradient-to-b from-cyan-400/40 to-cyan-500/20 rounded-full animate-pulse delay-500"></div>
        
        {/* Bioluminescent spots */}
        <div className="absolute top-6 left-8 w-2 h-2 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute top-8 left-14 w-1.5 h-1.5 bg-cyan-200 rounded-full animate-ping delay-200"></div>
        <div className="absolute top-10 left-18 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-400"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyan-400/20 blur-2xl"></div>
      </div>
    </motion.div>
  );
};

export default BioluminescentJellyfish;
