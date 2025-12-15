import React from 'react';
import { Award, Shield, FileCheck, BadgeCheck, ArrowRight } from 'lucide-react';

const Advertisements = () => {
  const ads = [
    {
      id: 1,
      title: "CEH Certification",
      subtitle: "Certified Ethical Hacking",
      description: "Master ethical hacking with industry-recognized CEH certification",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-600/10",
      hoverBg: "hover:bg-blue-600/20"
    },
    {
      id: 2,
      title: "ISO 27001",
      subtitle: "Information Security Management",
      description: "Get certified in ISO 27001 ISMS standards and best practices",
      icon: FileCheck,
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/30",
      bgColor: "bg-green-600/10",
      hoverBg: "hover:bg-green-600/20"
    },
    {
      id: 3,
      title: "ISO 27701",
      subtitle: "Privacy Information Management",
      description: "Achieve ISO 27701 certification for privacy management systems",
      icon: BadgeCheck,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      bgColor: "bg-purple-600/10",
      hoverBg: "hover:bg-purple-600/20"
    },
    {
      id: 4,
      title: "SOC 2 Audit",
      subtitle: "Independent Security Audit",
      description: "Get SOC 2 Type II independent audit report for your organization",
      icon: Award,
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/30",
      bgColor: "bg-orange-600/10",
      hoverBg: "hover:bg-orange-600/20"
    }
  ];

  // Duplicate ads for seamless marquee
  const duplicatedAds = [...ads, ...ads, ...ads];

  return (
    <section className="py-12 bg-black border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Certified </span> Security Experts
          </h3>
         
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee-slow gap-6 md:gap-8">
              {duplicatedAds.map((ad, idx) => {
                const Icon = ad.icon;
                return (
                  <div
                    key={`${ad.id}-${idx}`}
                    className={`flex-shrink-0 w-80 md:w-96 p-6 border ${ad.borderColor} ${ad.bgColor} ${ad.hoverBg} rounded-lg transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                  >
                    {/* Gradient Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${ad.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      {/* Icon and Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${ad.color} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-1 font-mono group-hover:text-red-400 transition-colors">
                            {ad.title}
                          </h4>
                          <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">
                            {ad.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                        {ad.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm font-mono">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${ad.color} font-bold`}>
                          Learn More
                        </span>
                        <ArrowRight className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${ad.color} group-hover:translate-x-1 transition-transform`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Static Grid for Mobile (Alternative View) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:hidden">
          {ads.map((ad) => {
            const Icon = ad.icon;
            return (
              <div
                key={ad.id}
                className={`p-5 border ${ad.borderColor} ${ad.bgColor} rounded-lg transition-all duration-300 cursor-pointer group relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${ad.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${ad.color} bg-opacity-20`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-mono">{ad.title}</h4>
                      <p className="text-xs text-gray-400 font-mono">{ad.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">{ad.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee-slow {
          animation: marquee-slow 50s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Advertisements;


