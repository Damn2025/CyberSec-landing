import React from 'react';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 md:py-20 lg:py-32 bg-black relative">
       <div className="container mx-auto px-4 md:px-6">
         <div className="text-center mb-12 md:mb-16 lg:mb-20">
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Choose Your Defense Level</h2>
           <p className="text-gray-400 text-sm md:text-base">Scale your security infrastructure as you grow.</p>
         </div>

         <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Basic */}
            <div className="p-4 md:p-6 lg:p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all">
               <h3 className="text-lg md:text-xl font-bold text-white font-mono mb-2">Scout</h3>
               <div className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">$49<span className="text-base md:text-lg text-gray-500 font-normal">/mo</span></div>
               <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-gray-400 text-xs md:text-sm">
                 <li className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> 5 Project Scans</li>
                 <li className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> Basic Reporting</li>
                 <li className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> Email Support</li>
               </ul>
               <button className="w-full py-2.5 md:py-3 border border-white/20 text-white font-mono hover:bg-white/10 transition-colors text-xs md:text-sm">SELECT PLAN</button>
            </div>

            {/* Pro */}
            <div className="p-4 md:p-6 lg:p-8 rounded-xl border border-red-600 bg-red-950/10 relative transform lg:-translate-y-4">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-black font-bold px-3 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs uppercase tracking-widest rounded-full">Recommended</div>
               <h3 className="text-lg md:text-xl font-bold text-white font-mono mb-2">Vanguard</h3>
               <div className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">$149<span className="text-base md:text-lg text-gray-500 font-normal">/mo</span></div>
               <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-gray-300 text-xs md:text-sm">
                 <li className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> Unlimited Scans</li>
                 <li className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> Priority CI/CD Pipeline</li>
                 <li className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> Advanced AI Heuristics</li>
                 <li className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> 24/7 Live Support</li>
               </ul>
               <button className="w-full py-2.5 md:py-3 bg-red-600 text-white font-bold font-mono hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)] text-xs md:text-sm">SELECT PLAN</button>
            </div>

            {/* Enterprise */}
            <div className="p-4 md:p-6 lg:p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all">
               <h3 className="text-lg md:text-xl font-bold text-white font-mono mb-2">Titan</h3>
               <div className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Custom</div>
               <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-gray-400 text-xs md:text-sm">
                 <li className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> Dedicated Infrastructure</li>
                 <li className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> Custom SLA</li>
                 <li className="flex items-center gap-2 md:gap-3"><CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> On-premise Deployment</li>
               </ul>
               <button className="w-full py-2.5 md:py-3 border border-white/20 text-white font-mono hover:bg-white/10 transition-colors text-xs md:text-sm">CONTACT SALES</button>
            </div>
         </div>
       </div>
    </section>
  );
};

export default Pricing;




