'use client'
import React from 'react';
import CollaborationBanner from './CollaborationBanner';
import TestimonialBanner from './TestimonialBanner';

export default function HeroBottom() {
  return (
    <div className="w-full">
      <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 px-2">
        {/* Left Section - Collaboration Banner */}
        <div className="w-full md:w-[50%] h-[300px] sm:h-[320px] md:h-[247px] -mr-10 mb-6 md:mb-0">
          <CollaborationBanner />
        </div>
        
        {/* Right Section - Testimonial Banner */}
        <div className="w-full md:w-[50%] h-[300px] sm:h-[320px] md:h-[350px]">
          <TestimonialBanner />
        </div>
      </div>
    </div>
  );
} 