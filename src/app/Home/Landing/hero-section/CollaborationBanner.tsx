'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Stack from './Stack';


// Project images for the stack - now with URLs
const projectImages = [
  { 
    id: 1, 
    img: "/images/brands/5.webp",
    url: "https://example.com/brand1"
  },
  { 
    id: 2, 
    img: "/images/brands/2.webp",
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
    img: "/images/brands/1.webp",
    url: "https://example.com/brand5"
  }
];

export default function CollaborationBanner() {
  // State for parallax effect and client detection
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Effect for subtle parallax movement
    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position relative to the window
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Update state with normalized position (0-1)
      setMousePosition({ x, y });
    };
    
    // Add and remove event listener
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
      className="relative w-[95%] md:w-[98%] lg:w-[95%] h-full rounded-lg overflow-hidden mx-auto"
      initial="hidden"
      animate={isClient ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Background Image with effects */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
        {/* Subtle parallax effect based on mouse movement */}
        <motion.div 
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
            scale: 1.05,
            opacity: 1
          }}
          transition={{
            type: "spring",
            damping: 50,
            stiffness: 100,
            opacity: { duration: 1.2 }
          }}
        >
          <Image 
            src="/images/bannerbg.jpg" 
            alt="Collaboration Background" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-[1.05] filter"
          />
        </motion.div>
        
        {/* Moving gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/10"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            opacity: { duration: 1.5 },
            backgroundPosition: {
              duration: 20, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "linear"
            }
          }}
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
      
      {/* Content Container - Modified to horizontal layout */}
      <motion.div 
        className="relative z-10 flex flex-row justify-between h-full w-full p-6 md:p-8"
        variants={itemVariants}
      >
        {/* Left section with text content */}
        <motion.div 
          className="space-y-4 w-1/2 pr-4"
          variants={itemVariants}
        >
          {/* Collaborations Tag */}
          <motion.div 
            className="inline-block px-4 py-1.5 text-white border border-white text-sm font-medium rounded-full backdrop-blur-sm"
            variants={itemVariants}
          >
            Collaborations
          </motion.div>
          
          {/* Title - Updated styling - reduced text size */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-tight -tracking-[0.06em]"
            variants={itemVariants}
          >
           Collaborated with leading brands, bring bold ideas to life
          </motion.h2>
        </motion.div>

        {/* Right section with Stack component */}
        <motion.div 
          className="w-1/2 flex items-center justify-center"
          variants={itemVariants}
        >
          <motion.div
            variants={itemVariants}
          >
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={true}
              cardDimensions={{ width: 180, height: 180 }}
              cardsData={projectImages}
              animationConfig={{ stiffness: 280, damping: 20 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 