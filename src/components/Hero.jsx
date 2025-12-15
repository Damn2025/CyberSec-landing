import React from 'react';
import { CheckCircle, Terminal, ChevronRight } from 'lucide-react';
import ScannerMockup from './ScannerMockup';

const Hero = ({ onOpenSignup }) => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20 overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black">
         <div className="absolute inset-0 cyber-grid opacity-20"></div>
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[100px] animate-pulse"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-red-500/30 bg-red-950/20 text-red-400 text-[10px] md:text-xs font-mono mb-4 md:mb-6 lg:mb-8 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            System Threat Level: Critical
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 md:mb-6 lg:mb-8">
            SECURE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 text-shadow-glow">DIGITAL ASSETS</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8 lg:mb-10 leading-relaxed border-l-2 border-red-600 pl-3 md:pl-4 lg:pl-6">
            Advanced heuristic scanning powered by AI. Detect vulnerabilities before they become breaches. The ultimate defense layer for modern infrastructure.
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4">
            <button onClick={onOpenSignup} className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-red-600 text-white font-mono font-bold tracking-wider hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] flex items-center gap-2 md:gap-3 group text-xs md:text-sm lg:text-base">
              INITIATE SCAN
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 border border-white/20 text-white font-mono tracking-wider hover:bg-white/5 transition-all flex items-center gap-2 md:gap-3 text-xs md:text-sm lg:text-base">
              <Terminal className="w-3 h-3 md:w-4 md:h-4" />
              VIEW DEMO
            </button>
          </div>

          <div className="mt-6 md:mt-8 lg:mt-12 flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8 text-gray-500 font-mono text-xs md:text-sm">
             <div className="flex items-center gap-2">
               <CheckCircle className="w-4 h-4 text-red-500" />
               <span>SOC2 COMPLIANT</span>
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle className="w-4 h-4 text-red-500" />
               <span>24/7 MONITORING</span>
             </div>
          </div>
        </div>

        <div className="relative hidden lg:block perspective-[1000px]">
          <div className="transform rotate-y-[-10deg] rotate-x-[10deg] transition-transform duration-500 hover:rotate-y-[0deg] hover:rotate-x-[0deg]">
            <ScannerMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



