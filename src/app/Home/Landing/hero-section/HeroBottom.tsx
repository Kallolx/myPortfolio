'use client'
import React from 'react';
import CollaborationBanner from './CollaborationBanner';
import TestimonialBanner from './TestimonialBanner';

export default function HeroBottom() {
  return (
    <div className="w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] py-8 md:py-12">
      <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left Section - Collaboration Banner (50%) */}
        <div className="w-full md:w-[48%] h-[400px] md:h-full">
          <CollaborationBanner />
        </div>
        
        {/* Right Section - Testimonial Banner (50%) */}
        <div className="w-full md:w-[48%] h-[400px] md:h-full">
          <TestimonialBanner />
        </div>
      </div>
    </div>
  );
} 