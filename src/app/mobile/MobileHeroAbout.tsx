'use client'
import React, { useState, useEffect, useRef } from 'react';
import AuroraText from '@/ui/AuroraText';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Section data - matching desktop version
const sectionsData = [
  {
    id: 'expertise',
    title: 'Expertise',
    items: [
      {
        id: 'figma',
        name: 'Figma',
        icon: '/icons/tech/figma.svg',
        description: 'From idea to interface Figma \nmakes designing feel like play.'
      },
      {
        id: 'NextJS',
        name: 'NextJS',
        icon: '/icons/tech/nextjs.svg',
        description: 'Fast, SEO-ready, and secretly \nfull-stack—Next.js magic'
      },
      {
        id: 'Tailwind',
        name: 'Tailwind',
        icon: '/icons/tech/tailwind.svg',
        description: 'Stylish, responsive and seamless \n Tailwind turns into clean perfection.'
      }
    ]
  },
  {
    id: 'myself',
    title: 'Myself',
    items: [
      {
        id: 'education',
        icon: '/icons/about/hat.svg',
        description: 'BSc in Computer Science\nEngineering student'
      },
      {
        id: 'design',
        icon: '/icons/about/game.svg',
        description: 'Solving bugs by day \nslaying dragons by night.'
      },
      {
        id: 'interests',
        icon: '/icons/about/cup.svg',
        description: "Code doesn't compile \nuntil I've had a cup."
      }
    ]
  },
  {
    id: 'experience',
    title: 'Experience',
    items: [
      {
        id: 'webbyte',
        icon: '/icons/work/webbyte.png',
        description: 'Remote Full Stack Developer \nand Project Manager'
      },
      {
        id: 'freelance',
        icon: '/icons/work/upwork.svg',
        description: '3+ years freelancing\nMultiple client projects'
      },
      {
        id: 'agency',
        icon: '/icons/work/various.svg',
        description: 'Contract designer\nVarious agencies'
      }
    ]
  }
];

export default function MobileHeroAbout() {
  const [activeSection, setActiveSection] = useState(0); // Start with Expertise section
  const [activeItemIndex, setActiveItemIndex] = useState(1); // Start with middle item
  const [isClient, setIsClient] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
  const [isAutoRotationPaused, setIsAutoRotationPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
    
    // Auto-rotate the items within a section every 3 seconds
    if (!isAutoRotationPaused) {
      intervalRef.current = setInterval(() => {
        setActiveItemIndex(prev => {
          const nextIndex = (prev + 1) % sectionsData[activeSection].items.length;
          return nextIndex;
        });
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [activeSection, isAutoRotationPaused]);

  // Pause auto-rotation when user touches/interacts with the content
  const handleTouchStart = () => {
    setIsAutoRotationPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Resume auto-rotation when user stops touching
  const handleTouchEnd = () => {
    setIsAutoRotationPaused(false);
  };

  // Allow user to click/tap on an icon to make it active
  const handleIconClick = (index: number) => {
    // Calculate the position index relative to the current active index
    const positionedItems = getPositionedItems();
    const clickedItem = positionedItems.find((_, i) => i === index);
    
    if (clickedItem) {
      // If not already center, make it center
      if (clickedItem.position !== 'center') {
        const currentItems = sectionsData[activeSection].items;
        const actualIndex = currentItems.findIndex(item => item.id === clickedItem.id);
        setActiveItemIndex(actualIndex);
      }
    }
  };

  // Generate the visible items for the current section (left, center, right)
  const getPositionedItems = () => {
    const currentSection = sectionsData[activeSection];
    const result = [];
    for (let offset = -1; offset <= 1; offset++) {
      const index = (activeItemIndex + offset + currentSection.items.length) % currentSection.items.length;
      result.push({
        ...currentSection.items[index],
        position: offset === 0 ? 'center' : offset === -1 ? 'left' : 'right'
      });
    }
    return result;
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveSection((prev) => (prev - 1 + sectionsData.length) % sectionsData.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveSection((prev) => (prev + 1) % sectionsData.length);
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

  // Section transition variants - using clip-path to stay within bounds
  const sectionVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? '20%' : '-20%',
      clipPath: 'inset(0% 0% 0% 0%)',
    }),
    center: {
      opacity: 1,
      x: 0,
      clipPath: 'inset(0% 0% 0% 0%)',
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? '-20%' : '20%',
      clipPath: 'inset(0% 0% 0% 0%)',
    })
  };

  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Card background with its own animation */}
      <motion.div 
        className="absolute inset-0 w-full h-full rounded-[30px] overflow-hidden"
        initial="hidden"
        animate={isClient ? "visible" : "hidden"}
        variants={cardVariants}
      />
      
      {/* Border overlay with separate animation */}
      <motion.div
        className="absolute inset-0 w-full h-full border border-white/10 rounded-[30px] overflow-hidden"
        style={{
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isClient ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      {/* Content with staggered animation */}
      <motion.div 
        className="relative h-full w-full py-6 px-4 flex flex-col justify-center z-10 overflow-hidden"
        initial="hidden"
        animate={isClient ? "visible" : "hidden"}
        variants={containerVariants}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Title with arrows */}
        <motion.div 
          className="flex items-center justify-center mb-6 gap-4"
          variants={itemVariants}
        >
          <motion.div 
            className="cursor-pointer" 
            onClick={handlePrev}
            whileTap={{ scale: 0.9 }}
          >
            <Image 
              src="/icons/arrow.svg" 
              alt="Left arrow" 
              width={20} 
              height={20} 
              className="opacity-50 rotate-180" 
            />
          </motion.div>
          
          <div className="overflow-hidden w-44 flex justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={sectionsData[activeSection].id}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={sectionVariants}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <AuroraText className="text-3xl font-medium whitespace-nowrap">
                  {sectionsData[activeSection].title}
                </AuroraText>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <motion.div 
            className="cursor-pointer" 
            onClick={handleNext}
            whileTap={{ scale: 0.9 }}
          >
            <Image 
              src="/icons/arrow.svg" 
              alt="Right arrow" 
              width={20} 
              height={20} 
              className="opacity-50" 
            />
          </motion.div>
        </motion.div>

        {/* Main content */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={sectionsData[activeSection].id}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={sectionVariants}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="flex flex-col"
            >
              {/* Section icons */}
              <motion.div 
                className="relative h-28 mb-3 mt-1"
                variants={itemVariants}
              >
                <div className="flex justify-center items-center gap-4 absolute w-full top-1/2 -translate-y-1/2">
                  <AnimatePresence mode="popLayout">
                    {getPositionedItems().map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="flex justify-center items-center"
                        initial={{ 
                          x: item.position === 'right' ? 100 : item.position === 'left' ? -100 : 0,
                          opacity: item.position === 'center' ? 1 : 0
                        }}
                        animate={{ 
                          x: 0, 
                          opacity: 1,
                          scale: item.position === 'center' ? 1.1 : 1,
                          zIndex: item.position === 'center' ? 10 : 0
                        }}
                        exit={{ 
                          x: item.position === 'left' ? -100 : item.position === 'right' ? 100 : 0,
                          opacity: 0
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 30,
                          opacity: { duration: 0.2 }
                        }}
                        onClick={() => handleIconClick(index)}
                      >
                        <div 
                          className={`rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                            item.position === 'center' 
                              ? 'bg-white shadow-lg h-24 w-24' 
                              : 'bg-[#54117F] hover:bg-[#6b1ca0] active:bg-[#6b1ca0] h-16 w-16'
                          }`}
                        >
                          <Image 
                            src={item.icon}
                            alt={item.id}
                            width={item.position === 'center' ? 48 : 32}
                            height={item.position === 'center' ? 48 : 32}
                            className="object-contain"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Pause indicator */}
              {isAutoRotationPaused && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute top-3 right-3 bg-[#54117F] bg-opacity-80 rounded-full p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
              )}

              {/* Section description */}
              <motion.div 
                className="text-center px-2 min-h-[90px] flex items-center justify-center overflow-hidden"
                variants={itemVariants}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={sectionsData[activeSection].items[activeItemIndex].id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <p className="text-white text-lg md:text-xl mx-auto max-w-2xl font-normal -tracking-[0.04em] leading-tight whitespace-pre-line">
                      {sectionsData[activeSection].items[activeItemIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
} 