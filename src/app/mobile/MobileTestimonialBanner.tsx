'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AuroraText from '@/ui/AuroraText';
import { Globe } from '@/ui/globe';

export default function MobileTestimonialBanner() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Main container animation
  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 1
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
  
  // Card background animation
  const cardVariants = {
    hidden: { 
      opacity: 0,
      backdropFilter: "blur(0px)",
      background: "rgba(255, 255, 255, 0)"
    },
    visible: { 
      opacity: 1,
      backdropFilter: "blur(16px)",
      background: "rgba(255, 255, 255, 0.05)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      {/* Card background with its own animation */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial="hidden"
        animate={isClient ? "visible" : "hidden"}
        variants={cardVariants}
      />
      
      {/* Border overlay with separate animation */}
      <motion.div
        className="absolute inset-0 w-full h-full border border-white/10"
        style={{
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isClient ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      {/* Content Container - Vertical layout for mobile */}
      <motion.div 
        className="relative z-10 flex flex-col h-full w-full p-4"
        initial="hidden"
        animate={isClient ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col h-full w-full">
          
          {/* Top section with Globe component */}
          <div className="w-full flex items-center justify-center mb-4">
            <motion.div 
              className="relative h-[130px] w-[130px]"
              variants={itemVariants}
            >
              <Globe className="w-full h-full" />
            </motion.div>
          </div>
          
          {/* Middle section with testimonial content */}
          <div className="w-full flex-1 flex flex-col items-center justify-center space-y-3">
            {/* 40+ text with Aurora effect and User avatars side by side */}
            <motion.div 
              className="flex items-center justify-center gap-4"
              variants={itemVariants}
            >
              <AuroraText className="text-4xl font-bold">
                40+
              </AuroraText>
              
              <div className="flex -space-x-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden z-30">
                  <Image 
                    src="/images/user/user1.png" 
                    alt="User 1" 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden z-20">
                  <Image 
                    src="/images/user/user2.png" 
                    alt="User 2" 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden z-10">
                  <Image 
                    src="/images/user/user3.png" 
                    alt="User 3" 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Testimonial Title */}
            <motion.h2 
              className="text-lg font-medium text-white leading-tight text-center"
              variants={itemVariants}
            >
              Satisfied Clients around the world
            </motion.h2>
            
            {/* Star Rating */}
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 