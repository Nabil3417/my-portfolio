import React from 'react';

const Skills = () => {
  const skills = [
    { 
      category: "Frontend", 
      items: ["React.js", "Next.js 15", "TypeScript", "Tailwind CSS", "Redux"],
      icon: "🎨" 
    },
    { 
      category: "Backend", 
      items: ["Node.js", "Express.js", "Python (Django)", "FastAPI", "REST APIs"],
      icon: "⚙️" 
    },
    { 
      category: "Database", 
      items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Firebase"],
      icon: "💾" 
    },
    { 
      category: "Cloud & AI", 
      items: ["Docker", "GitHub Actions", "AWS", "LLM Integration", "Vercel"],
      icon: "🚀" 
    }
  ];

  return (
    /* ADDED id="skills" HERE */
    <section id="skills" className="py-24 bg-[#030712] relative overflow-hidden scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
                {skill.category}
              </h3>
              
              <ul className="space-y-3">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center group/item">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover/item:shadow-[0_0_8px_#3b82f6] transition-all"></span>
                    <span className="group-hover/item:text-blue-300 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;