import React from 'react';
import Navbar from './Landing/Navbar';
import Hero from './Landing/Hero';
import SplineModel from './Landing/SplineModel';
import ProjectsSection from './Landing/ProjectsSection';

export default function HomePage() {
  return (
    <>
      {/* Background image */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -10,
        }}
      />

      {/* Dark overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -9,
        }}
      />
      
      
      
      {/* Content */}
      <div className="relative flex flex-col min-h-screen overflow-hidden">
        <div className="relative flex flex-col min-h-screen max-w-[1440px] mx-auto w-full">
          <Navbar />
          <main className="flex-1 flex flex-col">
            <Hero />
           {/* <SplineModel /> */}
            <ProjectsSection />
          </main>
        </div>
      </div>
    </>
  );
} 