'use client';
import React, { useState, useEffect } from 'react';
import AuroraText from '../../ui/AuroraText';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton } from '@/ui/shimmer-button';

export default function MobileProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Auto-rotate through projects
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveProject((prev) => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      name: 'HishabX - A well balanced and finely decorated landing page ',
      image: '/icons/1.png'
    },
    {
      id: 2,
      name: 'BrandBangla - A well balanced and finely decorated landing page',
      image: '/icons/1.png'
    },
    {
      id: 3,
      name: 'PortfolioX - A well balanced and finely decorated landing page',
      image: '/icons/1.png'
    }
  ];

  // Handler for swipe gestures
  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    
    if (Math.abs(velocity.x) > 0.5 || Math.abs(swipe) > 50) {
      if (swipe < 0) {
        // Swiped left, go to next project
        setDirection(1);
        setActiveProject((prev) => (prev + 1) % projects.length);
      } else {
        // Swiped right, go to previous project
        setDirection(-1);
        setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
      }
    }
  };

  // Variants for slide animations
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <div className="w-full py-12">
      <div className="px-4">
        {/* Title Section */}
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-regular -tracking-[0.06em] mb-2">
            <AuroraText>Self Awarded</AuroraText>
          </h2>
          <h3 className="text-5xl font-regular -tracking-[0.06em] text-gray-500">
            Projects Gallery
          </h3>
        </div>
        
        {/* Single Card with Animation */}
        <div className="w-full mb-10">
          <motion.div 
            className="relative w-full h-[270px]"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <div className="mx-auto max-w-[400px] h-full relative">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={activeProject}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg overflow-hidden"
                  style={{
                    backgroundColor: '#1f1253',
                    border: '1px solid #6d5acd30',
                  }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        
        {/* Project List with Icons */}
        <div className="flex flex-col space-y-7 items-center mb-10">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="flex items-center cursor-pointer group"
              onClick={() => {
                setDirection(index > activeProject ? 1 : -1);
                setActiveProject(index);
              }}
            >
              <div className="mr-6">
                <div className={`
                  w-5 h-5 flex items-center justify-center transition-all duration-300
                  ${index === activeProject ? 'scale-110' : 'opacity-70 group-hover:opacity-90'}
                `}>
                  <img 
                    src={`/icons/1.png`}
                    alt={`${project.name} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>           
              </div>
              
              <div className="flex-1">
                <div className={`
                  flex items-center
                  ${index === activeProject && 'text-white'}
                `}>
                  <h4 className={`
                    text-xl font-medium transition-all -tracking-[0.06em]
                    ${index === activeProject ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}
                  `}>
                    {project.name}
                  </h4>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* See All Button */}
        <div className="mt-10 flex justify-center">
          <ShimmerButton 
            shimmerColor="#997ef1"
            background="#090245"
            borderRadius="9999px"
            className="flex items-center gap-2 whitespace-nowrap"
          >
            See All Projects
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
} 