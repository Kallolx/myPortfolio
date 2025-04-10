'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { RainbowButton } from '@/ui/rainbow-button';
import { ShimmerButton } from '@/ui/shimmer-button';
import { motion, useScroll, useTransform } from 'framer-motion';
import Script from 'next/script';
import { MenuOverlay } from '@/ui/menu-overlay';
import Link from 'next/link';

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuTriggerPosition, setMenuTriggerPosition] = useState<{ x: number; y: number } | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuIconRef = useRef<HTMLImageElement>(null);
  const { scrollY } = useScroll();
  
  // Transform values for scroll effects
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(9, 2, 69, 0.85)']
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(8px)']
  );
  
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 4px 20px rgba(0, 0, 0, 0.2)']
  );
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMenuToggle = () => {
    if (!isMenuOpen && menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setMenuTriggerPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  // JSON-LD structured data for better SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kallolsfolio",
    "url": "https://kallolsfolio.com",
    "logo": "https://kallolsfolio.com/Logo.svg",
    "sameAs": [
      "https://twitter.com/kallolsfolio",
      "https://linkedin.com/company/kallolsfolio",
      "https://github.com/kallolsfolio"
    ],
    "description": "Connecting top tech talent with innovative projects worldwide"
  };

  return (
    <>
      {/* Add structured data for SEO */}
      <Script 
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Menu Overlay */}
      <MenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        triggerPosition={menuTriggerPosition}
      />
      
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 py-6 flex items-center justify-center font-dm-sans"
        initial="hidden"
        animate={isClient ? "visible" : "hidden"}
        variants={navVariants}
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
          boxShadow
        }}
      >
        <div className="max-w-[1440px] w-full px-8 mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            variants={itemVariants}
          >
            <Link href="/" className="flex items-center">
              <Image 
                src="/icons/Logo.svg"
                alt="Kallolsfolio Logo"
                width={150}
                height={50}
                className="h-auto w-auto md:w-auto sm:w-[120px]"
                priority
              />
            </Link>
          </motion.div>
          
          <div className="flex items-center gap-6">
            {/* Only visible on medium and larger screens */}
            <motion.div variants={itemVariants} className="hidden md:block">
              <RainbowButton 
                className="flex items-center gap-2"
                href="https://github.com/kallolx"
                openInNewTab={true}
              >
              ⭐ Star on Github
              </RainbowButton>
            </motion.div>
            
            <motion.div variants={itemVariants} className="hidden md:block">
              <ShimmerButton 
                shimmerColor="#997ef1"
                background="#090245"
                borderRadius="9999px"
                className="flex items-center gap-2 whitespace-nowrap"
                href="https://wa.me/8801831624571"
                openInNewTab={true}
              >
                Connect Now
                <Image 
                  src="/icons/arrow.svg"
                  alt="Arrow Icon"
                  width={20}
                  height={20}
                />
              </ShimmerButton>
            </motion.div>
            
            <motion.button 
              className="p-2"
              variants={itemVariants}
              aria-label="Open Menu"
              onClick={handleMenuToggle}
              ref={menuButtonRef}
            >
              <Image 
                src="/icons/menubar.svg"
                alt="Menu"
                width={40}
                height={40}
                ref={menuIconRef}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>
      
      {/* Spacer to prevent content from being hidden behind the navbar */}
      <div className="h-20"></div>
    </>
  );
}
