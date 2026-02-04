import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#030712] text-white px-6 overflow-hidden pt-20">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-0"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
        
        {/* PROFILE IMAGE SECTION */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 animate-spin-slow opacity-50 blur-md"></div>
          <div className="absolute inset-1 rounded-full border-4 border-[#030712] bg-gray-900 overflow-hidden shadow-2xl">
            <img 
              src="/my-photo.png" 
              alt="Ahatesam Ahamed"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* IDENTITY & TITLE */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
            Ahatesam Ahamed
          </h1>
          <p className="text-blue-400 font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-8">
            Full-Stack Software Engineer 
          </p>

          {/* PROFESSIONAL BIO - REWRITTEN FOR SKILL & DEDICATION */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
              Specializing in the development of <span className="text-white">high-performance, scalable architectures</span>. 
              My approach is defined by a relentless dedication to <span className="text-white">clean code, technical precision,</span> and 
              seamless user experiences. I don't just build features; I engineer robust digital ecosystems that drive 
              measurable impact and professional excellence.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a 
              href="#projects" 
              className="group relative px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-10"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all">→</span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent text-white font-semibold rounded-full border border-gray-700 hover:bg-white/5 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* SUBTLE TECH INDICATOR */}
        <div className="mt-24 flex items-center gap-6 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          <span className="text-xs font-mono tracking-widest">REACT</span>
          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
          <span className="text-xs font-mono tracking-widest">NEXT.JS</span>
          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
          <span className="text-xs font-mono tracking-widest">TYPESCRIPT</span>
          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
          <span className="text-xs font-mono tracking-widest">NODE.JS</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;