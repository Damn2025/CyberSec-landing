import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Advertisements from './components/Advertisements';
import Features from './components/Features';
import DetailedFeatures from './components/DetailedFeatures';
import ScannerRoadmap from './components/ScannerRoadmap';
import AboutSection from './components/AboutSection';

import Testimonials from './components/Testimonials';
import ThreatAnalyzer from './components/ThreatAnalyzer';
import Pricing from './components/Pricing';
// import CourseVideos from './components/CourseVideos';

import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import ChatWidget from './components/ChatWidget';

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const handleOpenSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleCloseSignup = () => {
    setIsSignupOpen(false);
  };

  return (
    <div className="bg-black min-h-screen text-slate-200 selection:bg-red-500/30 selection:text-red-200">
      <Navbar onOpenLogin={handleOpenLogin} onOpenSignup={handleOpenSignup} />
      <Hero  onOpenSignup={handleOpenSignup}/>
      <AboutSection />

      <TrustedBy />
     
      <Features />
      <ThreatAnalyzer />
      <DetailedFeatures />
      <ScannerRoadmap onOpenSignup={handleOpenSignup} />
      <Testimonials />
      <Pricing />
      <ContactUs />
    
      <Advertisements />
      <Footer />
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={handleCloseLogin} 
        onSwitchToSignup={handleOpenSignup}
      />
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={handleCloseSignup} 
        onSwitchToLogin={handleOpenLogin}
      />
      <ChatWidget />
     
    </div>
  );
};

export default App;

