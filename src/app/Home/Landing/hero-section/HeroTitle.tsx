'use client'

import React, { useEffect, useState } from 'react';
import AuroraText from '@/ui/AuroraText';
import { motion } from 'framer-motion';

export default function HeroTitle() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Split the text into lines
  const titleLines = ["Hire top", "tech talent", "wisely."];

  // Animation variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const lineVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.97]
      }
    }
  };

  return (
    <div className="flex items-center justify-start h-full px-8 pr-0 md:px-12 md:pr-0 lg:px-16 lg:pr-0">
      {isClient ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="overflow-hidden"
        >
          <h1 className="text-6xl text-white md:text-7xl lg:text-8xl font-normal -tracking-[0.05em]">
            {titleLines.map((line, index) => (
              <motion.div
                key={index}
                className="overflow-hidden"
                variants={lineVariants}
              >
                <AuroraText className="block">
                  {line}
                </AuroraText>
              </motion.div>
            ))}
          </h1>
          
          {/* Animated accent bar */}

        </motion.div>
      ) : (
        // Fallback for SSR
        <h1 className="text-6xl text-white md:text-7xl lg:text-8xl font-normal -tracking-[0.05em]">
          <AuroraText className="whitespace-pre-line">
            {"Hire top\ntech talent\nwisely."}
          </AuroraText>
        </h1>
      )}
    </div>
  );
} 