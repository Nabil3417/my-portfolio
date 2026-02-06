"use client";
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { FiArrowRight, FiMail, FiActivity, FiCheckCircle } from 'react-icons/fi';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#030712] text-white px-6 overflow-hidden pt-10 md:pt-20">
      
      {/* ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.02] blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] brightness-100" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center max-w-5xl w-full"
      >
        
        {/* PROFILE IMAGE & SPACED RESPONSIVE BADGES */}
        <div className="relative mb-10 flex items-center justify-center">
          
          {/* NSU BADGE: Pushed further left on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-[110%] md:right-auto md:-left-64 top-1/2 -translate-y-1/2 md:top-0 md:translate-y-0 flex items-center gap-2 md:gap-4 bg-white/[0.03] border border-white/10 backdrop-blur-xl px-2 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl z-30 group hover:border-blue-500/30 transition-all pointer-events-auto"
          >
            <div className="w-5 h-5 md:w-8 md:h-8 rounded-md md:rounded-lg bg-white/5 flex items-center justify-center p-1 overflow-hidden">
              <img src="/nsu-logo.png" alt="NSU" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="text-[6px] md:text-[8px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-blue-500">Academic</span>
              <span className="text-[8px] md:text-[10px] font-bold text-gray-400 whitespace-nowrap">NSU <span className="hidden md:inline">Undergrad</span></span>
            </div>
          </motion.div>

          {/* UPTIME BADGE: Pushed further right on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-[110%] md:left-auto md:-right-64 top-1/2 -translate-y-1/2 md:top-0 md:translate-y-0 flex items-center gap-2 md:gap-3 bg-white/[0.03] border border-white/10 backdrop-blur-xl px-2 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl z-30 group hover:border-emerald-500/30 transition-all pointer-events-auto"
          >
            <div className="flex flex-col items-end">
              <span className="text-[6px] md:text-[8px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-emerald-500">Uptime</span>
              <span className="text-[8px] md:text-[10px] font-bold text-gray-400 whitespace-nowrap">99.9% <span className="hidden md:inline">Live</span></span>
            </div>
            <FiActivity className="text-emerald-500 animate-pulse" size={10} />
          </motion.div>

          {/* MAIN PHOTO */}
          <motion.div 
            variants={itemVariants}
            className="relative w-36 h-36 md:w-64 md:h-64 group"
          >
            <div className="absolute inset-[-15px] md:inset-[-25px] rounded-full bg-blue-500/0 blur-[40px] md:blur-[50px] group-hover:bg-blue-600/20 transition-all duration-700" />
            
            <div className="absolute inset-0 rounded-full border border-white/10 p-1.5 md:p-2 backdrop-blur-3xl shadow-2xl relative z-10">
              <div className="w-full h-full rounded-full overflow-hidden border-[3px] md:border-[4px] border-[#030712] bg-gray-950">
                <motion.img 
                  src="/my-photo.png" 
                  alt="Ahatesam Ahamed"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* IDENTITY SECTION */}
        <div className="text-center">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight"
          >
            Ahatesam <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Ahamed</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 mb-8 md:mb-10">
            <p className="text-blue-500 font-mono font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-xs">
              Professional Full-Stack Developer
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-3xl mx-auto px-4">
            <p className="text-gray-400 text-sm md:text-xl leading-relaxed mb-6">
              Engineering <span className="text-white font-medium">high-performance ecosystems</span> where type-safety meets sub-second latency. Bridging academic rigor with heavy industrial experience.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-3 mb-10 md:mb-12">
              {[
                "Scalable Architecture",
                "Conversion UX",
                "AI-Native Logic"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-[8px] md:text-[11px] font-bold text-white/60 uppercase tracking-widest">
                  <FiCheckCircle className="text-blue-500" /> {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto group px-8 md:px-10 py-3.5 md:py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-xl md:rounded-2xl transition-all hover:bg-blue-600 hover:text-white text-center"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Work <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="#contact" 
              className="w-full sm:w-auto group px-8 md:px-10 py-3.5 md:py-4 bg-transparent text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-xl md:rounded-2xl border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-center"
            >
              Get In Touch <FiMail className="group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;