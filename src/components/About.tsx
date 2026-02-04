"use client";
import React from 'react';
import { motion, easeOut } from 'framer-motion';

const About = () => {
  // Animation for the progress bars
  const barVariants = (width: string) => ({
    hidden: { width: 0 },
    visible: { 
      width: width, 
      transition: { duration: 1.5, ease: easeOut } 
    }
  });

  return (
    <section id="about" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT SIDE: Professional Philosophy */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  Architecting Digital <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Infrastructure & Experience
                  </span>
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  className="h-1.5 bg-blue-600 mt-6 rounded-full"
                ></motion.div>
              </div>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  I thrive at the intersection of <span className="text-white font-semibold">robust system logic</span> and 
                  <span className="text-white font-semibold"> high-fidelity user interaction</span>. My engineering process is 
                  driven by the belief that software should not just function, but scale effortlessly and feel intuitive.
                </p>
                <p>
                  As a Lead-focused <span className="text-blue-400">Full-Stack Engineer at Tricode IT</span>, I specialize 
                  in translating complex business requirements into high-performance technical specifications. I am 
                  dedicated to the <span className="text-white">Next.js ecosystem</span>, utilizing TypeScript to 
                  enforce type-safety and structural integrity.
                </p>
                <p>
                  Beyond writing code, I am an advocate for <span className="text-emerald-400">Engineering Excellence</span>. 
                  This involves rigorous performance benchmarking, implementing automated CI/CD pipelines, and 
                  integrating AI-driven automation.
                </p>
              </div>

              {/* Pro Feature: Quick Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                {[
                  { title: "Performance", desc: "Optimizing for sub-second load times.", color: "border-blue-600" },
                  { title: "Scalability", desc: "Modular systems that grow with demand.", color: "border-cyan-500" },
                  { title: "Security", desc: "Enterprise-grade auth & encryption.", color: "border-emerald-500" }
                ].map((val, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className={`border-l-2 ${val.color} pl-4`}
                  >
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest">{val.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{val.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE: Technical Prowess Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                <h3 className="text-2xl font-bold text-white mb-8">Technical Mastery</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Frontend Engineering", val: "95%", color: "from-blue-600 to-cyan-400" },
                    { label: "Backend Architecture", val: "90%", color: "from-cyan-400 to-emerald-400" },
                    { label: "DevOps & Cloud", val: "85%", color: "from-emerald-400 to-green-400" },
                    { label: "AI & LLM Integration", val: "80%", color: "from-purple-400 to-blue-400" }
                  ].map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium text-sm">{skill.label}</span>
                        <span className="text-blue-400 text-sm">{skill.val}</span>
                      </div>
                      <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <motion.div 
                          variants={barVariants(skill.val)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className={`bg-gradient-to-r ${skill.color} h-full`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-10 p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20"
                >
                  <p className="text-blue-300 text-xs text-center font-medium italic">
                    "Continuously evolving with the cutting edge of the modern web."
                  </p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;