'use client'
import React, { useState, useEffect } from 'react';
import AuroraText from '@/ui/AuroraText';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Technology data
const techData = [
  {
    id: 'figma',
    name: 'Figma',
    icon: '/icons/tech/figma.svg',
    description: 'Creating UI/UX designs with smart prototyping and team workflows'
  },
  {
    id: 'react',
    name: 'React',
    icon: '/icons/tech/react.svg',
    description: 'Building interactive UIs with component architecture and state management'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: '/icons/tech/node.svg',
    description: 'Building interactive UIs with component architecture and state management'
  }
];

export default function HeroAbout() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with React
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Auto-rotate the icons every 3 seconds
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Generate the visible icons (left, center, right)
  const getPositionedTech = () => {
    const result = [];
    for (let offset = -1; offset <= 1; offset++) {
      const index = (activeIndex + offset + techData.length) % techData.length;
      result.push({
        ...techData[index],
        position: offset === 0 ? 'center' : offset === -1 ? 'left' : 'right'
      });
    }
    return result;
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + techData.length) % techData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % techData.length);
  };

  // Staggered entrance variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] // Expo ease
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
    <div className="h-full w-full relative">
      {/* Card background with its own animation */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{
          borderTopLeftRadius: '50px',
          borderBottomRightRadius: '50px',
        }}
        initial="hidden"
        animate={isClient ? "visible" : "hidden"}
        variants={cardVariants}
      />
      
      {/* Border overlay with separate animation */}
      <motion.div
        className="absolute inset-0 w-full h-full border border-white/10"
        style={{
          borderTopLeftRadius: '50px',
          borderBottomRightRadius: '50px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isClient ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      {/* Content with staggered animation */}
      <motion.div 
        className="relative h-full w-full py-8 px-6 flex flex-col justify-center z-10"
        initial="hidden"
        animate={isClient ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Title with arrows */}
        <motion.div 
          className="flex items-center justify-center mb-12 gap-4"
          variants={itemVariants}
        >
          <motion.div 
            className="cursor-pointer" 
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image 
              src="/icons/arrow.svg" 
              alt="Left arrow" 
              width={24} 
              height={24} 
              className="opacity-50 rotate-180" 
            />
          </motion.div>
          <AuroraText className="text-4xl font-medium">
            Expertise
          </AuroraText>
          <motion.div 
            className="cursor-pointer" 
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image 
              src="/icons/arrow.svg" 
              alt="Right arrow" 
              width={24} 
              height={24} 
              className="opacity-50" 
            />
          </motion.div>
        </motion.div>

        {/* Tech icons */}
        <motion.div 
          className="relative h-28 mb-10"
          variants={itemVariants}
        >
          <div className="flex justify-center items-center gap-6 absolute w-full">
            <AnimatePresence mode="popLayout">
              {getPositionedTech().map((tech) => (
                <motion.div
                  key={tech.id}
                  className="flex justify-center items-center"
                  initial={{ 
                    x: tech.position === 'right' ? 100 : tech.position === 'left' ? -100 : 0,
                    opacity: tech.position === 'center' ? 1 : 0
                  }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    scale: tech.position === 'center' ? 1.1 : 1,
                    zIndex: tech.position === 'center' ? 10 : 0
                  }}
                  exit={{ 
                    x: tech.position === 'left' ? -100 : tech.position === 'right' ? 100 : 0,
                    opacity: 0
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    opacity: { duration: 0.2 }
                  }}
                >
                  <div 
                    className={`rounded-full flex items-center justify-center ${
                      tech.position === 'center' 
                        ? 'bg-white shadow-lg h-28 w-28' 
                        : 'bg-[#54117F] h-20 w-20'
                    }`}
                  >
                    <Image 
                      src={tech.icon}
                      alt={tech.name}
                      width={tech.position === 'center' ? 56 : 38}
                      height={tech.position === 'center' ? 56 : 38}
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Tech description */}
        <motion.div 
          className="text-center px-4 min-h-[120px] flex items-center justify-center overflow-hidden"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={techData[activeIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <p className="text-white text-xl md:text-2xl mx-auto max-w-2xl font-normal -tracking-[0.04em] leading-tight">
                {techData[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
} 