import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: "Dental Patient Management",
      description: "A specialized healthcare solution developed to digitize dental clinic workflows. Features include secure patient authentication, treatment tracking, and dynamic appointment scheduling built with a focus on data integrity.",
      tech: ["Next.js", "Firebase", "Tailwind CSS", "Context API"],
      liveLink: "https://robin-dental.vercel.app",
      githubLink: "https://github.com/Nabil3417/BashaChai",
      image: "/project 1.png" 
    },
    {
      title: "BashaChai - Real Estate Platform",
      description: "A comprehensive property rental platform. Engineered with advanced filtering systems and real-time search functionality, allowing users to find housing solutions seamlessly through a secure interface.",
      tech: ["Next.js", "Firebase", "Context API", "Tailwind"],
      liveLink: "https://basha-chai.vercel.app/",
      githubLink: "https://github.com/Nabil3417/BashaChai",
      image: "/project 2.png" 
    },
    {
      title: "Cookbot AI Assistant",
      description: "An AI-powered culinary expert utilizing Large Language Models and Vector Databases (FAISS). Features include intelligent recipe retrieval, conversational memory, and a containerized Docker architecture.",
      tech: ["Python", "FAISS", "Docker", "LLM Integration"],
      liveLink: "#", // Points back to portfolio as requested
      githubLink: "https://github.com/Nabil3417/cookbot",
      image: "/project 3.png" 
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#030712] scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Engineering Projects</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A diverse portfolio showcasing expertise in healthcare systems, real estate platforms, and AI-driven automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="group bg-gray-900/40 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 flex flex-col">
              
              {/* IMAGE AREA */}
              <div className="relative h-52 w-full overflow-hidden bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* CONTENT AREA */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full border border-blue-400/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* ACTION BUTTONS */}
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.liveLink} 
                    className="flex-1 text-center py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-500 transition-all active:scale-95"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-gray-800 text-white text-sm font-bold rounded-lg border border-gray-700 hover:bg-gray-700 transition-all active:scale-95"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;