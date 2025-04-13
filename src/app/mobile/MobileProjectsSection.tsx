'use client';
import React, { useState, useEffect, useRef } from 'react';
import AuroraText from '../../ui/AuroraText';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton } from '@/ui/shimmer-button';
import { FiExternalLink } from 'react-icons/fi';

export default function MobileProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoRotateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Function to start auto-rotation
  const startAutoRotation = () => {
    if (autoRotateTimeoutRef.current) {
      clearTimeout(autoRotateTimeoutRef.current);
    }
    
    autoRotateTimeoutRef.current = setTimeout(() => {
      setDirection(1);
      setActiveProject((prev) => (prev + 1) % projects.length);
      startAutoRotation(); // Restart the timeout after changing
    }, 10000); // 10 seconds
  };
  
  // Start auto-rotation on mount
  useEffect(() => {
    startAutoRotation();
    
    // Clean up on unmount
    return () => {
      if (autoRotateTimeoutRef.current) {
        clearTimeout(autoRotateTimeoutRef.current);
      }
    };
  }, []);
  
  // Custom setter for activeProject that restarts the timeout
  const handleSetActiveProject = (index: number) => {
    setDirection(index > activeProject ? 1 : -1);
    setActiveProject(index);
    
    // Reset the auto-rotation timeout when user interacts
    if (autoRotateTimeoutRef.current) {
      clearTimeout(autoRotateTimeoutRef.current);
    }
    startAutoRotation();
  };

  // Set up video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, projects.length);
  }, []);
  
  // Control video playback based on active project
  useEffect(() => {
    // Pause all videos first
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeProject) {
          video.play().catch(e => console.log("Video play error:", e));
        } else {
          video.pause();
        }
      }
    });
  }, [activeProject]);

  const projects = [
    {
      id: 1,
      name: 'HishabX - A well balanced and finely decorated landing page',
      video: '/videos/vid2.mp4',
      url: 'https://hisabx.vercel.app',
      image: undefined
    },
    {
      id: 2,
      name: 'BrandBangla - A well balanced and finely decorated landing page',
      video: '/videos/vid3.mp4',
      url: 'https://brandbangladesh.shop/',
      image: undefined
    },
    {
      id: 3,
      name: 'PortfolioX - A well balanced and finely decorated landing page',
      video: '/videos/vid4.mp4',
      url: 'https://gmc-point.com',
      image: undefined
    }
  ];

  // Handler for swipe gestures
  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    
    if (Math.abs(velocity.x) > 0.5 || Math.abs(swipe) > 50) {
      if (swipe < 0) {
        // Swiped left, go to next project
        handleSetActiveProject((activeProject + 1) % projects.length);
      } else {
        // Swiped right, go to previous project
        handleSetActiveProject((activeProject - 1 + projects.length) % projects.length);
      }
    }
  };

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation(); // Prevent card selection from triggering
    window.open(url, "_blank", "noopener,noreferrer");
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
            <AuroraText>Projects</AuroraText>
          </h2>
          <h3 className="text-5xl font-regular -tracking-[0.06em] text-gray-500">
            Gallery
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
                    border: '1px solid #6d5acd30',
                  }}
                >
                  {/* Video Container */}
                  <div className="relative w-full h-full bg-black">
                    {projects[activeProject].video ? (
                      <video
                        ref={el => {
                          videoRefs.current[activeProject] = el;
                        }}
                        src={projects[activeProject].video}
                        className="absolute inset-0 w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                    ) : projects[activeProject].image && (
                      <img
                        src={projects[activeProject].image}
                        alt={projects[activeProject].name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    
                    {/* Link icon with gradient circle background */}
                    <motion.div 
                      className="absolute bottom-4 right-4 cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleLinkClick(e, projects[activeProject].url)}
                    >
                      <div 
                        className="flex items-center justify-center w-12 h-12 rounded-full p-3 shadow-lg"
                        style={{
                          background: "linear-gradient(135deg, #4a00e0, #8e2de2)",
                          boxShadow: "0 4px 20px rgba(74, 0, 224, 0.3)"
                        }}
                      >
                        <FiExternalLink className="w-full h-full text-white" strokeWidth={2.5} />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
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
              onClick={() => handleSetActiveProject(index)}
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
            href="https://kallolsfolio2.vercel.app/projects"
          >
            See All Projects
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
} 