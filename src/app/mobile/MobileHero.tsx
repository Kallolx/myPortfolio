'use client'
import React from 'react';
import MobileHeroTop from './MobileHeroTop';
import MobileHeroBottom from './MobileHeroBottom';

export default function MobileHero() {
  return (
    <div className="w-full flex flex-col pt-8 px-4">
      <div className="-mt-4">
        <MobileHeroTop />
      </div>
      <div className="mt-8">
        <MobileHeroBottom />
      </div>
    </div>
  );
} 