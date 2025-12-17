<<<<<<< HEAD
import React, { useState } from 'react';
import { Award, Shield, FileCheck, BadgeCheck, ArrowRight, GraduationCap, BookOpen, Target, Bug, Search, Lock, Server, Code, Users, Zap, X, Send, CheckCircle, Mail, User, Phone, Building, MessageSquare, Briefcase, TrendingUp, FileText, Lightbulb, Scale, ShieldCheck } from 'lucide-react';

const Advertisements = () => {
  const [activeCategory, setActiveCategory] = useState('training');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const categories = [
    { id: 'training', label: 'Training', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'testing', label: 'Testing', icon: Bug },
    { id: 'consulting', label: 'Consulting', icon: Briefcase },
  ];

  const services = {
    training: [
      {
        id: 1,
        title: "Ethical Hacking Bootcamp",
        subtitle: "Hands-on Training",
        description: "Comprehensive 12-week program covering penetration testing, vulnerability assessment, and real-world attack simulations.",
        icon: Target,
        color: "from-red-500 to-orange-500",
        borderColor: "border-red-500/30",
        bgColor: "bg-red-600/10",
        duration: "12 Weeks",
        level: "Intermediate"
      },
      {
        id: 2,
        title: "Security Operations Center",
        subtitle: "SOC Analyst Training",
        description: "Learn to monitor, detect, and respond to cybersecurity incidents in enterprise environments.",
        icon: Server,
        color: "from-blue-500 to-cyan-500",
        borderColor: "border-blue-500/30",
        bgColor: "bg-blue-600/10",
        duration: "8 Weeks",
        level: "Beginner"
      },
      {
        id: 3,
        title: "Secure Code Development",
        subtitle: "AppSec Training",
        description: "Master secure coding practices, OWASP Top 10 vulnerabilities, and code review techniques.",
        icon: Code,
        color: "from-green-500 to-emerald-500",
        borderColor: "border-green-500/30",
        bgColor: "bg-green-600/10",
        duration: "6 Weeks",
        level: "Advanced"
      },
      {
        id: 4,
        title: "Corporate Security Awareness",
        subtitle: "Team Training",
        description: "Educate your entire organization on phishing, social engineering, and security best practices.",
        icon: Users,
        color: "from-purple-500 to-pink-500",
        borderColor: "border-purple-500/30",
        bgColor: "bg-purple-600/10",
        duration: "4 Weeks",
        level: "All Levels"
      },
    ],
    certifications: [
      {
        id: 1,
        title: "CEH Certification",
        subtitle: "Certified Ethical Hacker",
        description: "Master ethical hacking with industry-recognized CEH certification from EC-Council.",
        icon: Shield,
        color: "from-blue-500 to-cyan-500",
        borderColor: "border-blue-500/30",
        bgColor: "bg-blue-600/10",
        provider: "EC-Council",
        validity: "3 Years"
      },
      {
        id: 2,
        title: "ISO 27001",
        subtitle: "ISMS Lead Auditor",
        description: "Get certified in ISO 27001 Information Security Management System standards.",
        icon: FileCheck,
        color: "from-green-500 to-emerald-500",
        borderColor: "border-green-500/30",
        bgColor: "bg-green-600/10",
        provider: "IRCA",
        validity: "3 Years"
      },
      {
        id: 3,
        title: "ISO 27701",
        subtitle: "Privacy Management",
        description: "Achieve ISO 27701 certification for privacy information management systems.",
        icon: BadgeCheck,
        color: "from-purple-500 to-pink-500",
        borderColor: "border-purple-500/30",
        bgColor: "bg-purple-600/10",
        provider: "ISO",
        validity: "3 Years"
      },
      {
        id: 4,
        title: "CISSP",
        subtitle: "Security Professional",
        description: "Certified Information Systems Security Professional - the gold standard in cybersecurity.",
        icon: Award,
        color: "from-orange-500 to-red-500",
        borderColor: "border-orange-500/30",
        bgColor: "bg-orange-600/10",
        provider: "(ISC)²",
        validity: "3 Years"
      },
    ],
    testing: [
      {
        id: 1,
        title: "Penetration Testing",
        subtitle: "Red Team Assessment",
        description: "Comprehensive penetration testing to identify vulnerabilities before attackers do.",
        icon: Bug,
        color: "from-red-500 to-orange-500",
        borderColor: "border-red-500/30",
        bgColor: "bg-red-600/10",
        type: "Offensive",
        scope: "Full Stack"
      },
      {
        id: 2,
        title: "Vulnerability Assessment",
        subtitle: "Security Scanning",
        description: "Automated and manual vulnerability scanning with detailed remediation guidance.",
        icon: Search,
        color: "from-yellow-500 to-orange-500",
        borderColor: "border-yellow-500/30",
        bgColor: "bg-yellow-600/10",
        type: "Assessment",
        scope: "Infrastructure"
      },
      {
        id: 3,
        title: "SOC 2 Audit",
        subtitle: "Compliance Testing",
        description: "Independent SOC 2 Type II audit report for trust service criteria compliance.",
        icon: FileCheck,
        color: "from-green-500 to-emerald-500",
        borderColor: "border-green-500/30",
        bgColor: "bg-green-600/10",
        type: "Compliance",
        scope: "Organization"
      },
      {
        id: 4,
        title: "Web App Security",
        subtitle: "OWASP Testing",
        description: "In-depth web application security testing based on OWASP testing guidelines.",
        icon: Lock,
        color: "from-blue-500 to-cyan-500",
        borderColor: "border-blue-500/30",
        bgColor: "bg-blue-600/10",
        type: "AppSec",
        scope: "Web Applications"
      },
    ],
    consulting: [
      {
        id: 1,
        title: "Security Strategy",
        subtitle: "Executive Advisory",
        description: "Develop comprehensive cybersecurity strategies aligned with your business objectives and risk tolerance.",
        icon: TrendingUp,
        color: "from-indigo-500 to-purple-500",
        borderColor: "border-indigo-500/30",
        bgColor: "bg-indigo-600/10",
        expertise: "Strategic",
        engagement: "Retainer"
      },
      {
        id: 2,
        title: "Risk Assessment",
        subtitle: "Enterprise Risk Management",
        description: "Identify, analyze, and prioritize security risks with actionable mitigation strategies and roadmaps.",
        icon: Scale,
        color: "from-amber-500 to-orange-500",
        borderColor: "border-amber-500/30",
        bgColor: "bg-amber-600/10",
        expertise: "Risk Analysis",
        engagement: "Project-based"
      },
      {
        id: 3,
        title: "Compliance Advisory",
        subtitle: "Regulatory Guidance",
        description: "Navigate complex compliance requirements including GDPR, HIPAA, PCI-DSS, and industry-specific regulations.",
        icon: FileText,
        color: "from-teal-500 to-cyan-500",
        borderColor: "border-teal-500/30",
        bgColor: "bg-teal-600/10",
        expertise: "Compliance",
        engagement: "Ongoing"
      },
      {
        id: 4,
        title: "Incident Response",
        subtitle: "Crisis Management",
        description: "24/7 incident response support with forensic analysis, containment, and recovery assistance.",
        icon: ShieldCheck,
        color: "from-rose-500 to-red-500",
        borderColor: "border-rose-500/30",
        bgColor: "bg-rose-600/10",
        expertise: "Emergency",
        engagement: "On-call"
      },
    ],
  };

  const currentServices = services[activeCategory];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    setSubmitSuccess(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setSubmitSuccess(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      handleCloseModal();
    }, 2000);
  };

  const getCategoryLabel = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.label : categoryId;
  };

  return (
    <section className="py-16 md:py-24 bg-black border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 text-shadow-glow">Services</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive cybersecurity solutions tailored to your organization's needs
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1 md:gap-2 p-1.5 md:p-2 bg-white/5 rounded-full border border-white/10">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold font-mono transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.label.slice(0, 4)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {currentServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className={`group p-5 md:p-6 border ${service.borderColor} ${service.bgColor} rounded-xl transition-all duration-500 cursor-pointer relative overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(220,38,38,0.15)]`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="text-base md:text-lg font-bold text-white mb-1 font-mono group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-[10px] md:text-xs text-gray-400 font-mono uppercase tracking-wider mb-3 md:mb-4">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-300 mb-4 md:mb-5 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
                    {activeCategory === 'training' && (
                      <>
                        <span className="px-2 py-1 bg-white/10 rounded text-[10px] md:text-xs text-gray-300 font-mono">{service.duration}</span>
                        <span className="px-2 py-1 bg-white/10 rounded text-[10px] md:text-xs text-gray-300 font-mono">{service.level}</span>
                      </>
                    )}
                    {activeCategory === 'certifications' && (
                      <>
                        <span className="px-2 py-1 bg-white/10 rounded text-[10px] md:text-xs text-gray-300 font-mono">{service.provider}</span>
                        <span className="px-2 py-1 bg-white/10 rounded text-[10px] md:text-xs text-gray-300 font-mono">{service.validity}</span>
                      </>
                    )}
                    {activeCategory === 'testing' && (
                      <>
                        <span className="px-2 py-1 bg-white/10 rounded text-[10px] md:text-xs text-gray-300 font-mono">{service.type}</span>
                        <span className="px-2 py-1 bg-white/10 rounded text-[10px] md:text-xs text-gray-300 font-mono">{service.scope}</span>
                      </>
                    )}
                    {activeCategory === 'consulting' && (
                      <>
                        <span className="px-2 py-1 bg-white/10 rounded text-[10px] md:text-xs text-gray-300 font-mono">{service.expertise}</span>
                        <span className="px-2 py-1 bg-white/10 rounded text-[10px] md:text-xs text-gray-300 font-mono">{service.engagement}</span>
                      </>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-xs md:text-sm font-mono group/cta">
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color} font-bold group-hover:underline`}>
                      Get Started
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 group-hover:translate-x-2 group-hover:text-red-500 transition-all duration-300`} />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-bl ${service.color} opacity-10 rounded-bl-full`}></div>
=======
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
>>>>>>> 27b8a926548293f3c38b8b518b6665ce19b6e29c
              </div>
            );
          })}
        </div>
<<<<<<< HEAD

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-14">
          <p className="text-gray-400 mb-4 text-sm md:text-base">Need a custom solution for your organization?</p>
          <button className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-red-600 hover:bg-red-700 text-white font-bold font-mono rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] text-xs md:text-sm">
            <Zap className="w-4 h-4" />
            Contact Our Experts
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn p-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="bg-black border border-red-500/50 rounded-xl shadow-[0_0_60px_rgba(220,38,38,0.3)] overflow-hidden">
              {/* Modal Header */}
              <div className={`p-6 bg-gradient-to-r ${selectedService.color} bg-opacity-20 border-b border-white/10 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center shadow-lg`}>
                      {React.createElement(selectedService.icon, { className: "w-7 h-7 text-white" })}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-red-600/20 border border-red-500/30 rounded text-[10px] text-red-400 font-mono uppercase tracking-wider">
                          {getCategoryLabel(activeCategory)}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white font-mono">{selectedService.title}</h3>
                      <p className="text-sm text-gray-400">{selectedService.subtitle}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {submitSuccess ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2 font-mono">Request Submitted!</h4>
                    <p className="text-gray-400">Our team will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    {/* Service Description */}
                    <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-lg">
                      <p className="text-gray-300 text-sm leading-relaxed">{selectedService.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {activeCategory === 'training' && (
                          <>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 font-mono">📅 {selectedService.duration}</span>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 font-mono">📊 {selectedService.level}</span>
                          </>
                        )}
                        {activeCategory === 'certifications' && (
                          <>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 font-mono">🏢 {selectedService.provider}</span>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 font-mono">⏱️ {selectedService.validity}</span>
                          </>
                        )}
                        {activeCategory === 'testing' && (
                          <>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 font-mono">🎯 {selectedService.type}</span>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 font-mono">📋 {selectedService.scope}</span>
                          </>
                        )}
                        {activeCategory === 'consulting' && (
                          <>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 font-mono">💼 {selectedService.expertise}</span>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 font-mono">📆 {selectedService.engagement}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                              placeholder="+1 (234) 567-890"
                            />
                          </div>
                        </div>

                        {/* Company */}
                        <div>
                          <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                            Company Name
                          </label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                              placeholder="Acme Inc."
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                          Additional Information
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all resize-none"
                            placeholder="Tell us about your requirements..."
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold font-mono rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Submit Request</span>
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
=======
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
>>>>>>> 27b8a926548293f3c38b8b518b6665ce19b6e29c
    </section>
  );
};

export default Advertisements;
<<<<<<< HEAD
=======


>>>>>>> 27b8a926548293f3c38b8b518b6665ce19b6e29c
