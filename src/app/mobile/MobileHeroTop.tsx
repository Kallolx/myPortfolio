'use client'
import React from 'react';
import MobileHeroTitle from './MobileHeroTitle';
import MobileHeroImage from './MobileHeroImage';
import MobileHeroAbout from './MobileHeroAbout';

export default function MobileHeroTop() {
  return (
    <div className="w-full flex flex-col items-center relative">
      {/* Title at the top */}
      <div className="w-full py-4 flex items-center justify-center">
        <div className="w-full scale-110 transform">
          <MobileHeroTitle />
        </div>
      </div>
      
      {/* Image in the middle */}
      <div className="w-full max-w-[280px] h-[350px] flex items-center justify-center my-6">
        <div className="w-full max-w-[280px] h-full">
          <MobileHeroImage />
        </div>
      </div>
      
      {/* About section at the bottom */}
      <div className="w-full h-[350px] flex items-center justify-center mt-6">
        <div className="w-full h-full">
          <MobileHeroAbout />
        </div>
      </div>
    </div>
  );
} 