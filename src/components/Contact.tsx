"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiPhone, FiCopy } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "ahatesam.ahamed@northsouth.edu",
      icon: <FiMail className="text-blue-400" />,
      link: "mailto:ahatesam.ahamed@northsouth.edu",
      copyable: true
    },
    {
      label: "GitHub",
      value: "github.com/Nabil3417",
      icon: <FiGithub className="text-purple-400" />,
      link: "https://github.com/Nabil3417",
      copyable: false
    },
    {
      label: "Phone",
      value: "+880 1997 646 866",
      icon: <FiPhone className="text-emerald-400" />,
      link: "tel:+8801997646866",
      copyable: false
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Email copied to clipboard!");
  };

  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden scroll-mt-20">
      {/* Dynamic Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 italic">Let's Connect</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Currently open to <span className="text-white font-medium">Full-Stack opportunities</span> and 
              technical collaborations. Let's build something extraordinary.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                
                <div className="relative p-8 bg-gray-900/40 backdrop-blur-xl border border-white/5 rounded-3xl h-full flex flex-col items-center text-center transition-all duration-300 group-hover:border-blue-500/30">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-blue-600/10 transition-all duration-500">
                    {info.icon}
                  </div>
                  
                  <h3 className="text-gray-500 text-xs font-black uppercase tracking-[0.2em] mb-2">{info.label}</h3>
                  <p className="text-white font-medium mb-6 break-all">{info.value}</p>
                  
                  <div className="flex gap-3 mt-auto w-full">
                    <a 
                      href={info.link}
                      target={info.label === "GitHub" ? "_blank" : "_self"}
                      className="flex-1 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl border border-white/5 transition-colors"
                    >
                      {info.label === "Email" ? "Write Me" : "Visit"}
                    </a>
                    {info.copyable && (
                      <button 
                        onClick={() => copyToClipboard(info.value)}
                        className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/5 transition-colors"
                        title="Copy to clipboard"
                      >
                        <FiCopy />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-black text-xs text-white">AA</div>
              <p className="text-gray-500 text-sm font-medium tracking-wide">
                AHATESAM AHAMED <span className="mx-2 text-gray-800">|</span> 2026
              </p>
            </div>
            
            <div className="flex gap-8 text-xs font-black text-gray-600 uppercase tracking-widest">
              <span className="hover:text-blue-500 cursor-default transition-colors">Clean Code</span>
              <span className="hover:text-cyan-500 cursor-default transition-colors">Modern Stack</span>
              <span className="hover:text-emerald-500 cursor-default transition-colors">Scalable Design</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;