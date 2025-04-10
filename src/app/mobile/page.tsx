'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../Home/Landing/Navbar';
import MobileHero from './MobileHero';


export default function MobileHomePage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // Check if the user is on mobile
  useEffect(() => {
    setIsMounted(true);
    const isMobile = window.innerWidth < 768;
    
    // If not on mobile, redirect to main homepage
    if (!isMobile) {
      router.push('/');
    }
  }, [router]);

  if (!isMounted) {
    return null; // Prevent flash of content before redirect
  }

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
      
      {/* Content */}
      <div className="relative flex flex-col min-h-screen overflow-hidden">
        <div className="relative flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-1 flex flex-col mt-6">
            <MobileHero />
          </main>
        </div>
      </div>
    </>
  );
} 