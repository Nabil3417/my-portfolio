import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#030712] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Stats/Quick Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Bridging Academic Excellence with Industry Practice
              </h2>
              <div className="h-1 w-16 bg-blue-600 rounded-full"></div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-2xl bg-gray-900/50 border border-gray-800">
                  <h4 className="text-blue-400 font-bold text-2xl">CSE</h4>
                  <p className="text-gray-500 text-sm tracking-wide uppercase">Undergraduate</p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-900/50 border border-gray-800">
                  <h4 className="text-blue-400 font-bold text-2xl">Full-Stack</h4>
                  <p className="text-gray-500 text-sm tracking-wide uppercase">Professional</p>
                </div>
              </div>
            </div>

            {/* Right Side: Professional Narrative */}
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Currently pursuing a <span className="text-white">Computer Science & Engineering</span> degree at 
                North South University, I occupy the unique intersection of rigorous academic theory and 
                fast-paced industrial application. 
              </p>
              <p>
                As a <span className="text-white">Full-Stack Developer at Tricode IT</span>, I don't just write code; 
                I architect scalable systems and craft intuitive user interfaces that solve real-world problems. 
                My focus lies in building modern web ecosystems using <span className="text-blue-400">Next.js, TypeScript, and robust Backend architectures</span>.
              </p>
              <p>
                I am deeply committed to <span className="text-white">engineering excellence</span>—continuously 
                optimizing performance, ensuring code maintainability, and staying at the forefront of 
                emerging technologies to deliver high-impact digital experiences.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;