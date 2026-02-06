"use client";
import React from 'react';
import { motion, type Variants } from 'framer-motion';

const Hero = () => {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each element
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#030712] text-white px-6 overflow-hidden pt-20">
      {/* Background Ambient Glow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-0"
      ></motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center max-w-4xl w-full"
      >
        
        {/* PROFILE IMAGE SECTION */}
        <motion.div 
          variants={itemVariants}
          animate={{ y: [0, -10, 0] }} // Subtle floating animation
          transition={{ duration: 5, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const }}
          className="relative w-48 h-48 md:w-56 md:h-56 mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 animate-spin-slow opacity-50 blur-md"></div>
          <div className="absolute inset-1 rounded-full border-4 border-[#030712] bg-gray-900 overflow-hidden shadow-2xl">
            <img 
              src="/my-photo.png" 
              alt="Ahatesam Ahamed"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* IDENTITY & TITLE */}
        <div className="text-center">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-2"
          >
            Ahatesam Ahamed
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-blue-400 font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-8"
          >
            Full-Stack Software Engineer
          </motion.p>

          {/* PROFESSIONAL BIO */}
          <motion.div 
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
              Specializing in the development of <span className="text-white">high-performance, scalable architectures</span>. 
              My approach is defined by a relentless dedication to <span className="text-white">clean code, technical precision,</span> and 
              seamless user experiences. I don't just build features; I engineer robust digital ecosystems.
            </p>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a 
              href="#projects" 
              className="group relative px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">View Projects</span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent text-white font-semibold rounded-full border border-gray-700 hover:bg-white/5 transition-all hover:border-gray-400"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* SUBTLE TECH INDICATOR */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-24 flex items-center gap-6 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
        >
          <span className="text-xs font-mono tracking-widest">REACT</span>
          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
          <span className="text-xs font-mono tracking-widest">NEXT.JS</span>
          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
          <span className="text-xs font-mono tracking-widest">TYPESCRIPT</span>
          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
          <span className="text-xs font-mono tracking-widest">NODE.JS</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;