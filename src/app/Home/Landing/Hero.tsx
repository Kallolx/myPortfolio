'use client'
import React from 'react';
import HeroTop from './hero-section/HeroTop';
import HeroBottom from './hero-section/HeroBottom';

export default function Hero() {
  return (
    <div className="w-full flex flex-col pt-8 md:pt-16">
      <div className="min-h-max">
        <HeroTop />
      </div>
      <div className="min-h-max">
        <HeroBottom />
      </div>
    </div>
  );
}
