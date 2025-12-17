import React from 'react';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 md:py-20 lg:py-32 bg-black relative">
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900 to-transparent"></div>
       <div className="container mx-auto px-4 md:px-6">
         <div className="text-center mb-12 md:mb-16 lg:mb-20">
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Choose Your Defense Level</h2>
           <p className="text-gray-400 text-sm md:text-base">Scale your security infrastructure as you grow.</p>
         </div>

         <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Basic */}
            <div className="group p-4 md:p-6 lg:p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-red-500/50 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(220,38,38,0.15)] hover:scale-[1.02] transition-all duration-300 cursor-pointer">
               <h3 className="text-lg md:text-xl font-bold text-white font-mono mb-2 group-hover:text-red-400 transition-colors">Scout</h3>
               <div className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">$49<span className="text-base md:text-lg text-gray-500 font-normal">/mo</span></div>
               <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-gray-400 text-xs md:text-sm">
                 <li className="flex items-center gap-2 md:gap-3 group-hover:text-gray-300 transition-colors"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 group-hover:scale-110 transition-transform" /> 5 Project Scans</li>
                 <li className="flex items-center gap-2 md:gap-3 group-hover:text-gray-300 transition-colors"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 group-hover:scale-110 transition-transform" /> Basic Reporting</li>
                 <li className="flex items-center gap-2 md:gap-3 group-hover:text-gray-300 transition-colors"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 group-hover:scale-110 transition-transform" /> Email Support</li>
               </ul>
               <button className="w-full py-2.5 md:py-3 border border-white/20 text-white font-mono hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 text-xs md:text-sm">SELECT PLAN</button>
            </div>

            {/* Pro */}
            <div className="group p-4 md:p-6 lg:p-8 rounded-xl border border-red-600 bg-red-950/10 relative transform lg:-translate-y-4 hover:bg-red-950/20 hover:shadow-[0_0_60px_rgba(220,38,38,0.3)] hover:scale-[1.03] transition-all duration-300 cursor-pointer">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-black font-bold px-3 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs uppercase tracking-widest rounded-full group-hover:animate-pulse">Recommended</div>
               <h3 className="text-lg md:text-xl font-bold text-white font-mono mb-2 group-hover:text-red-400 transition-colors">Vanguard</h3>
               <div className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">$149<span className="text-base md:text-lg text-gray-500 font-normal">/mo</span></div>
               <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-gray-300 text-xs md:text-sm">
                 <li className="flex items-center gap-2 md:gap-3 group-hover:text-white transition-colors"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 group-hover:scale-110 transition-transform" /> Unlimited Scans</li>
                 <li className="flex items-center gap-2 md:gap-3 group-hover:text-white transition-colors"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 group-hover:scale-110 transition-transform" /> Priority CI/CD Pipeline</li>
                 <li className="flex items-center gap-2 md:gap-3 group-hover:text-white transition-colors"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 group-hover:scale-110 transition-transform" /> Advanced AI Heuristics</li>
                 <li className="flex items-center gap-2 md:gap-3 group-hover:text-white transition-colors"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 group-hover:scale-110 transition-transform" /> 24/7 Live Support</li>
               </ul>
               <button className="w-full py-2.5 md:py-3 bg-red-600 text-white font-bold font-mono hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] text-xs md:text-sm">SELECT PLAN</button>
            </div>

            {/* Enterprise */}
            <div className="group p-4 md:p-6 lg:p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-red-500/50 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(220,38,38,0.15)] hover:scale-[1.02] transition-all duration-300 cursor-pointer">
               <h3 className="text-lg md:text-xl font-bold text-white font-mono mb-2 group-hover:text-red-400 transition-colors">Titan</h3>
               <div className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Custom</div>
               <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-gray-400 text-xs md:text-sm">
                 <li className="flex items-center gap-2 md:gap-3 group-hover:text-gray-300 transition-colors"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 group-hover:scale-110 transition-transform" /> Dedicated Infrastructure</li>
                 <li className="flex items-center gap-2 md:gap-3 group-hover:text-gray-300 transition-colors"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 group-hover:scale-110 transition-transform" /> Custom SLA</li>
                 <li className="flex items-center gap-2 md:gap-3 group-hover:text-gray-300 transition-colors"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 group-hover:scale-110 transition-transform" /> On-premise Deployment</li>
               </ul>
               <button className="w-full py-2.5 md:py-3 border border-white/20 text-white font-mono hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 text-xs md:text-sm">CONTACT SALES</button>
            </div>
         </div>
       </div>
    </section>
  );
};

export default Pricing;




