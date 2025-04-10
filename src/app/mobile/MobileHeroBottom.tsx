'use client'
import React from 'react';
import MobileCollaborationBanner from './MobileCollaborationBanner';

export default function MobileHeroBottom() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-6">
        {/* Collaboration Banner */}
        <div className="w-full h-[350px]">
          <MobileCollaborationBanner />
        </div>
        
      </div>
    </div>
  );
} 