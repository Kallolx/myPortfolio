'use client'
import React from 'react';
import HeroTop from './hero-section/HeroTop';
import HeroBottom from './hero-section/HeroBottom';

export default function Hero() {
  return (
    <div className="w-full flex flex-col pt-8 md:pt-12">
      <div className="-mt-4">
        <HeroTop />
      </div>
      <div className="mt-6">
        <HeroBottom />
      </div>
    </div>
  );
}
