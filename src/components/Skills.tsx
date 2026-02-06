"use client";
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiFastapi,
  SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiFirebase,
  SiDocker, SiGithubactions, SiAmazonwebservices, SiOpenai, SiVercel 
} from 'react-icons/si';

const Skills = () => {
  const skillGroups = [
    { 
      category: "Frontend Architecture", 
      description: "User Interface & Experience",
      skills: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js 15", icon: <SiNextdotjs className="text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
      ]
    },
    { 
      category: "Backend Systems", 
      description: "Logic & API Orchestration",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="text-white" /> },
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-[#05998B]" /> },
      ]
    },
    { 
      category: "Data Infrastructure", 
      description: "Persistence & Caching",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Redis", icon: <SiRedis className="text-[#FF4438]" /> },
        { name: "Prisma", icon: <SiPrisma className="text-white" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      ]
    },
    { 
      category: "DevOps & Intelligence", 
      description: "Deployment & AI Integration",
      skills: [
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" /> },
        { name: "AWS", icon: <SiAmazonwebservices className="text-[#FF9900]" /> },
        { name: "LLM / OpenAI", icon: <SiOpenai className="text-[#412991]" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="skills" className="py-32 bg-[#030712] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Core Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Ecosystem.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A modular approach to full-stack engineering, leveraging <span className="text-white">Industry-Standard</span> tools for high-performance production environments.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 shadow-2xl shadow-blue-900/10"
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-blue-500/0 group-hover:bg-blue-600/5 blur-2xl transition-all duration-700" />
              
              <div className="relative z-10">
                <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-500 mb-1">
                  {group.category}
                </h3>
                <p className="text-[10px] text-gray-500 mb-10 font-medium italic">{group.description}</p>
                
                <div className="space-y-8">
                  {group.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-5 group/item">
                      {/* INCREASED LOGO SIZE & PERMANENT COLOR */}
                      <div className="text-3xl opacity-90 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-300 transform-gpu">
                        {skill.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-300 group-hover/item:text-white transition-colors">
                          {skill.name}
                        </span>
                        <div className="h-[1px] w-0 group-hover/item:w-full bg-blue-500/50 transition-all duration-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Footer Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-4 text-gray-600">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase">ENTERPRISE-GRADE STACK | ENGINEERED FOR INFINITE SCALABILITY</span>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;