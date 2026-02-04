import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT SIDE: Professional Philosophy */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  Architecting Digital <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Infrastructure & Experience
                  </span>
                </h2>
                <div className="h-1.5 w-24 bg-blue-600 mt-6 rounded-full"></div>
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
                  enforce type-safety and structural integrity across the entire stack.
                </p>
                <p>
                  Beyond writing code, I am an advocate for <span className="text-emerald-400">Engineering Excellence</span>. 
                  This involves rigorous performance benchmarking, implementing automated CI/CD pipelines, and 
                  integrating AI-driven automation to push the boundaries of modern web development.
                </p>
              </div>

              {/* Pro Feature: Quick Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest">Performance</h4>
                  <p className="text-gray-500 text-sm mt-1">Optimizing for sub-second load times & Core Web Vitals.</p>
                </div>
                <div className="border-l-2 border-cyan-500 pl-4">
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest">Scalability</h4>
                  <p className="text-gray-500 text-sm mt-1">Designing modular systems that grow with the user base.</p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-4">
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest">Security</h4>
                  <p className="text-gray-500 text-sm mt-1">Implementing enterprise-grade auth & data encryption.</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Technical Prowess Card */}
            <div className="lg:col-span-5">
              <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 rounded-full blur-[60px] group-hover:bg-blue-600/30 transition-all"></div>
                
                <h3 className="text-2xl font-bold text-white mb-8">Technical Mastery</h3>
                
                <div className="space-y-6">
                  {/* Skill Progress Item */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">Frontend Engineering (Next.js/TS)</span>
                      <span className="text-blue-400">95%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full w-[95%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">Backend & API Architecture</span>
                      <span className="text-cyan-400">90%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-[90%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">DevOps & Cloud Deployment</span>
                      <span className="text-emerald-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-400 to-green-400 h-full w-[85%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">AI & LLM Integration</span>
                      <span className="text-purple-400">80%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-400 to-blue-400 h-full w-[80%]"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                  <p className="text-blue-300 text-sm text-center font-medium">
                    "Continuously evolving with the cutting edge of the modern web."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;