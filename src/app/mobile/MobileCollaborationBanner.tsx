'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Stack from '../Home/Landing/hero-section/Stack';

// Project images for the stack - reusing the same data
const projectImages = [
  { 
    id: 1, 
    img: "/images/brands/5.webp",
    url: "https://example.com/brand1"
  },
  { 
    id: 2, 
    img: "/images/brands/1.webp",
    url: "https://example.com/brand2" 
  },
  { 
    id: 3, 
    img: "/images/brands/3.webp",
    url: "https://example.com/brand3"
  },
  { 
    id: 4, 
    img: "/images/brands/4.webp",
    url: "https://example.com/brand4"
  },
  { 
    id: 5, 
    img: "/images/brands/2.webp",
    url: "https://example.com/brand5"
  }
];

export default function MobileCollaborationBanner() {
  // State for parallax effect and client detection
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Main container animation
  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.98
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delayChildren: 0.1,
        staggerChildren: 0.15
      }
    }
  };
  
  // Content elements animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div 
      className="relative w-full h-full rounded-lg overflow-hidden"
      initial="hidden"
      animate={isClient ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Background Image with effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src="/images/background.webp" 
          alt="Collaboration Background" 
          fill 
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-[1.05] filter"
        />
        
        {/* Moving gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Subtle pulse effect */}
        <motion.div 
          className="absolute inset-0 bg-black/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0.2, 0.1] }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />
      </div>
      
      {/* Content Container - Vertical layout for mobile */}
      <motion.div 
        className="relative z-10 flex flex-col h-full w-full p-4"
        variants={itemVariants}
      >
        {/* Top section with text content */}
        <motion.div 
          className="space-y-3 mb-4 flex flex-col items-center text-center"
          variants={itemVariants}
        >
          {/* Collaborations Tag */}
          <motion.div 
            className="inline-block px-3 py-1 text-white border border-white text-xs font-medium rounded-full backdrop-blur-sm"
            variants={itemVariants}
          >
            Collaborations
          </motion.div>
          
          {/* Title - Updated styling */}
          <motion.h2 
            className="text-lg font-medium text-white leading-tight -tracking-[0.06em] max-w-[280px]"
            variants={itemVariants}
          >
            Collaborated with leading brands to bring bold ideas to life
          </motion.h2>
        </motion.div>

        {/* Bottom section with Stack component */}
        <motion.div 
          className="w-full flex-1 flex items-center justify-center scale-110 transform"
          variants={itemVariants}
        >
          <motion.div
            variants={itemVariants}
          >
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={true}
              cardDimensions={{ width: 160, height: 160 }}
              cardsData={projectImages}
              animationConfig={{ stiffness: 280, damping: 20 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 