import React from 'react';
import Advertisements from './Advertisements';
import { Shield, Globe } from 'lucide-react';
<<<<<<< HEAD
import Logo from '../assets/Cybersec.png';
=======
>>>>>>> 27b8a926548293f3c38b8b518b6665ce19b6e29c

const Footer = () => (
  <footer className="bg-black border-t border-white/10 pt-20 pb-10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 font-mono text-xl font-bold text-white mb-6">
<<<<<<< HEAD
            <img src={Logo} alt="CyberSec Logo" className="w-6 h-6" />
=======
            <Shield className="text-red-600 w-6 h-6" />
>>>>>>> 27b8a926548293f3c38b8b518b6665ce19b6e29c
            <span>CYBER<span className="text-red-600">SEC</span></span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Next-generation cybersecurity scanning infrastructure designed for the modern web.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-mono">PRODUCT</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-red-500 transition-colors">Scanner</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Enterprise</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-mono">RESOURCES</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-red-500 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-mono">LEGAL</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs font-mono">
        <div>© 2024 CyberSec Security Inc. All rights reserved.</div>
<<<<<<< HEAD
        
=======
        <div className="flex gap-6 mt-4 md:mt-0">
           <Globe className="w-4 h-4 hover:text-white cursor-pointer" />
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           <span>SYSTEMS OPERATIONAL</span>
        </div>
>>>>>>> 27b8a926548293f3c38b8b518b6665ce19b6e29c
      </div>
    </div>
    
  </footer>
);

export default Footer;





