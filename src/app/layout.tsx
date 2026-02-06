"use client";
import './globals.css';
import { ReactNode } from 'react';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export default function RootLayout({ children }: { children: ReactNode }) {
  // Last Level Pro Feature: Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-[#030712] text-white antialiased selection:bg-blue-500/30 overflow-x-hidden`}>
        
        {/* Elite Engineering Cursor */}
        <CustomCursor />

        {/* High-End Feature: Top Scroll Progress Tracker */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 origin-left z-[10000]"
          style={{ scaleX }}
        />

        {/* Professional Backdrop: Mesh Gradients + Texture */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/10 blur-[120px]" />
          {/* Subtle Film Grain Texture for that premium look */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Layout Structure */}
        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar />
          
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="py-12 text-center border-t border-white/5 bg-[#030712]/50 backdrop-blur-md">
            <div className="container mx-auto px-6">
              <p className="text-gray-500 text-[10px] font-mono tracking-[0.3em] uppercase mb-2">
                System Status: Active
              </p>
              <p className="text-gray-600 text-[11px] tracking-widest uppercase">
                    Ahatesam Ahamed | Software Engineer 
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}