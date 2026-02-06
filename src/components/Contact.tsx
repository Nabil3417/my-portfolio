"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiPhone, FiCopy, FiCheck, FiArrowUpRight } from 'react-icons/fi';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const contactInfo = [
    {
      label: "Direct Email",
      value: "ahatesam.ahamed@northsouth.edu",
      icon: <FiMail className="text-blue-400" />,
      link: "mailto:ahatesam.ahamed@northsouth.edu",
      type: "email"
    },
    {
      label: "GitHub Profile",
      value: "github.com/Nabil3417",
      icon: <FiGithub className="text-purple-400" />,
      link: "https://github.com/Nabil3417",
      type: "link"
    },
    {
      label: "Mobile/WhatsApp",
      value: "+880 1997 646 866",
      icon: <FiPhone className="text-emerald-400" />,
      link: "tel:+8801997646866",
      type: "link"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-[#030712] relative overflow-hidden scroll-mt-20">
      {/* Visual Tech Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side: Value Proposition */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Open for Opportunities
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Let’s build the <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">next big thing.</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                Specializing in <span className="text-white">Full-Stack Development</span> and AI integration. 
                Whether you have a project in mind or just want to say hi, my inbox is always open.
              </p>

              <div className="flex gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  className="p-4 bg-gray-900/50 border border-white/5 rounded-2xl flex items-center gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 font-bold">NSU</div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black">University</p>
                    <p className="text-xs text-gray-300 font-medium tracking-wide">North South University</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side: Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <a 
                    href={info.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-6 bg-gray-900/30 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-gray-800/40 hover:border-blue-500/30 transition-all duration-500"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-500">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">{info.label}</p>
                          <p className="text-white font-medium text-sm md:text-base">{info.value}</p>
                        </div>
                      </div>
                      <FiArrowUpRight className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </a>

                  {info.type === "email" && (
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard(info.value);
                      }}
                      className="absolute right-14 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-white transition-colors"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <FiCheck className="text-emerald-400" />
                          </motion.div>
                        ) : (
                          <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <FiCopy />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Clean Pro Footer */}
          <footer className="mt-40 pt-16 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
              <div className="max-w-xs">
                <div className="text-2xl font-black text-white mb-6">AA<span className="text-blue-600">.</span></div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Engineering robust digital solutions with a focus on AI integration and scalable system design. 
                  Based in Dhaka, available globally.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
                <div className="space-y-4 text-sm font-medium">
                  <p className="text-white text-xs font-black uppercase tracking-widest mb-6">Sitemap</p>
                  <a href="#about" className="block text-gray-500 hover:text-blue-400 transition-colors">About</a>
                  <a href="#projects" className="block text-gray-500 hover:text-blue-400 transition-colors">Projects</a>
                  <a href="#contact" className="block text-gray-500 hover:text-blue-400 transition-colors">Contact</a>
                </div>
                <div className="space-y-4 text-sm font-medium">
                  <p className="text-white text-xs font-black uppercase tracking-widest mb-6">Socials</p>
                  <a href="https://github.com/Nabil3417" target="_blank" className="block text-gray-500 hover:text-blue-400 transition-colors">GitHub</a>
                  <a href="#" className="block text-gray-500 hover:text-blue-400 transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-white/5">
              <p className="text-gray-600 text-[11px] font-mono tracking-widest uppercase">
                © 2026 AHATESAM AHAMED | Full-Stack Software Engineer
              </p>
              <div className="flex gap-6">
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </section>
  );
};

export default Contact;