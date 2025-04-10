'use client'
import React from 'react';
import CollaborationBanner from './CollaborationBanner';
import TestimonialBanner from './TestimonialBanner';

export default function HeroBottom() {
  return (
    <div className="w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 px-2">
        {/* Left Section - Collaboration Banner */}
        <div className="w-full md:w-[50%] h-[350px] -mr-10 sm:h-[400px] md:h-full mb-6 md:mb-0">
          <CollaborationBanner />
        </div>
        
        {/* Right Section - Testimonial Banner */}
        <div className="w-full md:w-[50%] h-[350px] sm:h-[400px] md:h-full">
          <TestimonialBanner />
        </div>
      </div>
    </div>
  );
} 