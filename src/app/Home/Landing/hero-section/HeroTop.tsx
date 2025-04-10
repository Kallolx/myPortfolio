'use client'
import React from 'react';
import HeroTitle from './HeroTitle';
import HeroImage from './HeroImage';
import HeroAbout from './HeroAbout';
import AboutButton from './AboutButton';

export default function HeroTop() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row md:gap-6 lg:gap-8 relative -ml-8">
      {/* Left Section - Title (40%) */}
      <div className="w-full md:w-[45%] py-8 md:py-0 flex items-center">
        <HeroTitle />
      </div>
      
      {/* Middle Section - Image (20%) */}
      <div className="w-full md:w-[15%] h-[400px] md:ml-0 flex items-center justify-start">
        <div className="w-[300px] h-[400px] md:-ml-10 lg:-ml-20">
          <HeroImage />
        </div>
      </div>
      
      {/* About Button - Positioned between Image and About sections */}
      <div className="absolute md:top-16 lg:top-60 left-1/2 md:left-[61%] transform -translate-x-1/2 md:translate-x-[-50%] z-30">
        <AboutButton />
      </div>
      
      {/* Right Section - About (40%) */}
      <div className="w-full md:w-[40%] h-[400px] flex items-center justify-center">
        <div className="w-full h-full">
          <HeroAbout />
        </div>
      </div>
    </div>
  );
} 