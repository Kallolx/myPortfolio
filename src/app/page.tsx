'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './Home/Landing/Navbar';
import Hero from './Home/Landing/Hero';

export default function Home() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Check if this is a mobile device and redirect accordingly
  useEffect(() => {
    setIsClient(true);
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      router.push('/mobile');
    } else {
      router.push('/Home');
    }
  }, [router]);

  // Don't render anything as we'll redirect
  return null;
}
