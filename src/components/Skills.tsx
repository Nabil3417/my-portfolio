import React from 'react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiFastapi,
  SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiFirebase,
  SiDocker, SiGithubactions, SiAmazonwebservices, SiOpenai, SiVercel 
} from 'react-icons/si';

const Skills = () => {
  const skillGroups = [
    { 
      category: "Frontend", 
      skills: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js 15", icon: <SiNextdotjs className="text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
      ]
    },
    { 
      category: "Backend", 
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="text-white" /> },
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-[#05998B]" /> },
      ]
    },
    { 
      category: "Database", 
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Redis", icon: <SiRedis className="text-[#FF4438]" /> },
        { name: "Prisma", icon: <SiPrisma className="text-white" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      ]
    },
    { 
      category: "Cloud & AI", 
      skills: [
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "CI/CD", icon: <SiGithubactions className="text-[#2088FF]" /> },
        { name: "AWS", icon: <SiAmazonwebservices className="text-[#FF9900]" /> },
        { name: "LLM/AI", icon: <SiOpenai className="text-[#412991]" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#030712] relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Stack</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto italic">
            "The strength of the architecture is defined by the tools chosen to build it."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-gray-900/20 border border-gray-800 hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm"
            >
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-blue-500 mb-8 border-b border-gray-800 pb-4">
                {group.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-y-6">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-start group cursor-default">
                    <div className="text-2xl mb-2 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-500 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;