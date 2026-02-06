"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiCpu, FiLayers, FiDatabase } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projectData[0]>(null);

  const projectData = [
    {
      title: "Dental Patient Management",
      description: "A specialized healthcare solution developed to digitize dental clinic workflows. Features include secure patient authentication, treatment tracking, and dynamic appointment scheduling.",
      longDescription: "Engineered with a focus on data integrity, this system digitizes clinical workflows. It features a custom scheduling engine and secure patient record management using Firebase's real-time capabilities.",
      tech: ["Next.js", "Firebase", "Tailwind CSS", "Context API"],
      liveLink: "https://robin-dental.vercel.app",
      githubLink: "https://github.com/rowhasan446/Dental-Patient-Management",
      image: "/project 1.png",
      stats: { architecture: "Serverless", database: "NoSQL", performance: "98/100" }
    },
    {
      title: "BashaChai - Real Estate",
      description: "A comprehensive property rental platform. Engineered with advanced filtering systems and real-time search functionality for seamless housing solutions.",
      longDescription: "Built to handle high-concurrency property searches. Implemented complex filtering logic on the client-side to ensure sub-second response times even with large datasets.",
      tech: ["Next.js", "Firebase", "Context API", "Tailwind"],
      liveLink: "https://basha-chai.vercel.app/",
      githubLink: "https://github.com/Nabil3417/BashaChai",
      image: "/project 2.png",
      stats: { architecture: "Hybrid", database: "Firestore", performance: "95/100" }
    },
    {
      title: "Cookbot AI Assistant",
      description: "An AI-powered culinary expert utilizing LLMs and Vector Databases (FAISS). Features include intelligent recipe retrieval and conversational memory.",
      longDescription: "A sophisticated RAG (Retrieval-Augmented Generation) implementation. Uses FAISS for semantic similarity search across thousands of recipes, containerized with Docker for scale.",
      tech: ["Python", "FAISS", "Docker", "LLM Integration"],
      liveLink: "#",
      githubLink: "https://github.com/Nabil3417/cookbot",
      image: "/project 3.png",
      stats: { architecture: "Microservices", database: "Vector/SQL", performance: "AI-Driven" }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#030712] scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 italic tracking-tight">Engineering Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-gray-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-500 flex flex-col relative"
            >
              {/* IMAGE AREA */}
              <div className="relative h-52 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={project.image} 
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
              </div>

              {/* CONTENT AREA */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-[9px] font-mono text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full border border-blue-400/20 uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                
                <div className="mt-auto flex items-center text-xs font-bold text-blue-500 uppercase tracking-widest">
                  View Architecture Details +
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PROJECT MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-[#030712]/95 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-900 border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white z-10"
              >
                <FiX size={24} />
              </button>

              <div className="grid md:grid-cols-2 h-full">
                <div className="h-64 md:h-full bg-gray-800">
                  <img src={selectedProject.image} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono text-gray-400 border border-white/10 px-2 py-1 rounded">#{t}</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-8">{selectedProject.longDescription}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                      <FiCpu className="mx-auto mb-2 text-blue-400" />
                      <span className="block text-[10px] text-gray-500 uppercase">Arch</span>
                      <span className="text-xs font-bold text-white">{selectedProject.stats.architecture}</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                      <FiDatabase className="mx-auto mb-2 text-cyan-400" />
                      <span className="block text-[10px] text-gray-500 uppercase">DB</span>
                      <span className="text-xs font-bold text-white">{selectedProject.stats.database}</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                      <FiLayers className="mx-auto mb-2 text-purple-400" />
                      <span className="block text-[10px] text-gray-500 uppercase">Perf</span>
                      <span className="text-xs font-bold text-white">{selectedProject.stats.performance}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href={selectedProject.liveLink} target="_blank" className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all">
                      Live Demo <FiExternalLink />
                    </a>
                    <a href={selectedProject.githubLink} target="_blank" className="flex-1 py-4 bg-gray-800 text-white rounded-2xl font-bold flex items-center justify-center gap-2 border border-white/10 hover:bg-gray-700 transition-all">
                      Codebase <FiGithub />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;