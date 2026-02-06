"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projectData = [
    {
      title: "Dental Patient Management",
      description: "A specialized healthcare solution developed to digitize dental clinic workflows. Features include secure patient authentication, treatment tracking, and dynamic appointment scheduling.",
      tech: ["Next.js", "Firebase", "Tailwind CSS", "Context API"],
      liveLink: "https://robin-dental.vercel.app",
      githubLink: "https://github.com/rowhasan446/Dental-Patient-Management",
      image: "/project 1.png" 
    },
    {
      title: "BashaChai - Real Estate",
      description: "A comprehensive property rental platform. Engineered with advanced filtering systems and real-time search functionality, allowing users to find housing solutions seamlessly.",
      tech: ["Next.js", "Firebase", "Context API", "Tailwind"],
      liveLink: "https://basha-chai.vercel.app/",
      githubLink: "https://github.com/Nabil3417/BashaChai",
      image: "/project 2.png" 
    },
    {
      title: "Cookbot AI Assistant",
      description: "An AI-powered culinary expert utilizing Large Language Models and Vector Databases (FAISS). Features include intelligent recipe retrieval and conversational memory.",
      tech: ["Python", "FAISS", "Docker", "LLM Integration"],
      liveLink: "#",
      githubLink: "https://github.com/Nabil3417/cookbot",
      image: "/project 3.png" 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] as const } 
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#030712] scroll-mt-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Engineering Projects</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Architecting scalable solutions across <span className="text-blue-400 font-medium">Healthcare</span>, 
            <span className="text-blue-400 font-medium"> Real Estate</span>, and <span className="text-blue-400 font-medium">AI Intelligence</span>.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectData.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-gray-900/40 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 flex flex-col shadow-2xl"
            >
              {/* IMAGE AREA WITH OVERLAY */}
              <div className="relative h-52 w-full overflow-hidden bg-gray-800">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-60"></div>
                
                {/* Tech Badge Float */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-[9px] font-black uppercase tracking-widest text-white bg-blue-600/80 backdrop-blur-md px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* TECH STACK FOOTER */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">
                      #{tag.replace(/\s/g, '')}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex gap-4 mt-auto">
                  <motion.a 
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink} 
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-blue-500 hover:text-white transition-all"
                  >
                    Demo <FiExternalLink />
                  </motion.a>
                  <motion.a 
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-800 text-white text-xs font-black uppercase tracking-widest rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all"
                  >
                    Code <FiGithub />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;