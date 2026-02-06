"use client";
import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { FiCode, FiServer, FiTerminal, FiCpu, FiLayers, FiDatabase } from 'react-icons/fi';

const About = () => {
  const barVariants = (width: string) => ({
    hidden: { width: 0 },
    visible: { 
      width: width, 
      transition: { duration: 1.5, ease: easeOut, delay: 0.2 } 
    }
  });

  const skillBars = [
    { label: "Full-Stack (Next.js/React)", val: "95%", color: "from-blue-600 to-cyan-400" },
    { label: "Backend (Node.js/Python)", val: "90%", color: "from-cyan-400 to-emerald-400" },
    { label: "Database (MongoDB/SQL)", val: "88%", color: "from-emerald-400 to-blue-500" },
    { label: "Type-Safe Engineering (TS)", val: "92%", color: "from-purple-500 to-blue-400" }
  ];

  return (
    <section id="about" className="py-32 bg-[#030712] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-[0.03] bg-[grid-white/20] [mask-image:radial-gradient(white,transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* 1. THE PHILOSOPHY (Updated for Technical Depth) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 p-10 bg-gray-900/30 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                Engineering <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Modern Infrastructure.</span>
              </h2>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  I build high-end digital products using the <span className="text-white font-medium">Next.js & Node.js</span> ecosystem. My expertise lies in creating seamless, <span className="text-white font-medium">TypeScript-driven</span> applications that prioritize both developer experience and end-user performance.
                </p>
                <p>
                  From designing <span className="text-blue-400">RESTful APIs</span> and <span className="text-blue-400">GraphQL schemas</span> to managing complex data with <span className="text-white">MongoDB and PostgreSQL</span>, I ensure every layer of the stack is optimized for scale, security, and sub-second latency.
                </p>
              </div>

              <div className="flex gap-8 mt-10">
                <div className="flex flex-col">
                  <span className="text-white font-black text-xl tracking-tighter">Full-Stack</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Integration</span>
                </div>
                <div className="flex flex-col border-l border-white/10 pl-8">
                  <span className="text-white font-black text-xl tracking-tighter">Data-Driven</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Systems</span>
                </div>
              </div>
            </motion.div>

            {/* 2. LIVE TERMINAL (Updated with Specific Tech Stack) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-black/60 border border-white/10 rounded-[2.5rem] p-8 font-mono text-[11px] flex flex-col shadow-2xl overflow-hidden relative"
            >
              <div className="flex gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <div className="space-y-4">
                <p className="text-blue-400 flex items-center gap-2 animate-pulse"><FiTerminal /> core_engine.v2: operational</p>
                <p className="text-gray-500">{'>'} ahatesam.getTechStack()</p>
                <p className="text-gray-300">{'>'} frontend: ["Next.js", "React", "Tailwind"]</p>
                <p className="text-gray-300">{'>'} backend: ["Node.js", "Express", "Python"]</p>
                <p className="text-gray-300">{'>'} database: ["MongoDB", "PostgreSQL", "Prisma"]</p>
                <p className="text-gray-300">{'>'} cloud: ["AWS", "Vercel", "Docker"]</p>
                
                <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                  <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">Proficiency Matrix</p>
                  
                  <div className="space-y-5">
                    {skillBars.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400 text-[10px] uppercase font-bold">{skill.label}</span>
                          <span className="text-blue-400 text-[10px] font-mono">{skill.val}</span>
                        </div>
                        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                          <motion.div 
                            variants={barVariants(skill.val)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`bg-gradient-to-r ${skill.color} h-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. PERFORMANCE STATS (Updated Icons & Labels) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 p-8 bg-gray-900/20 border border-white/5 rounded-[2rem] flex items-center gap-6 group"
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500">
                <FiCode size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">Frontend Core</p>
                <p className="text-white font-bold text-lg leading-tight">React & Next.js</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-4 p-8 bg-gray-900/20 border border-white/5 rounded-[2rem] flex items-center gap-6 group"
            >
              <div className="w-14 h-14 bg-cyan-600/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                <FiDatabase size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">Data Layer</p>
                <p className="text-white font-bold text-lg leading-tight">Mongo & Prisma</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 p-8 bg-gray-900/20 border border-white/5 rounded-[2rem] flex items-center gap-6 group"
            >
              <div className="w-14 h-14 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                <FiTerminal size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">Environment</p>
                <p className="text-white font-bold text-lg leading-tight">Node & Docker</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;