'use client';
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  name: string;
  video?: string;
  image?: string;
}

interface ProjectsRightSectionProps {
  projects: Project[];
  activeProject: number;
}

export default function ProjectsRightSection({ 
  projects, 
  activeProject
}: ProjectsRightSectionProps) {
  // Create refs for each video element
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  // Set up video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, projects.length);
  }, [projects]);
  
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

  return (
    <div className="w-full lg:w-3/5 flex justify-center mt-32 items-center">
      <div className="relative w-[600px] h-[400px] ">
        {projects.map((project, index) => {
          // Calculate position based on active project
          const isActive = index === activeProject;
          const positionIndex = (index - activeProject + projects.length) % projects.length;
          
          // Different positions for cards
          let x = 0;
          let y = 0;
          let scale = 1;
          let zIndex = 30 - positionIndex;
          let rotate = 0;
          
          if (positionIndex === 0) { // Active card
            x = 0;
            y = 0;
            scale = 1;
            rotate = 0;
          } else if (positionIndex === 1) { // Card behind
            x = 40;
            y = 20;
            scale = 0.95;
            rotate = 0;
          } else { // Card furthest back
            x = 80;
            y = 40;
            scale = 0.9;
            rotate = 0;
          }
          
          return (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg overflow-hidden"
              style={{
                border: `1px solid ${isActive ? '#6d5acd30' : '#41328330'}`,
                zIndex
              }}
              animate={{
                x,
                y,
                scale,
                rotate,
                opacity: isActive ? 1 : 1 - (positionIndex * 0.1),
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
            >
              {/* Video or Image Container */}
              <div className="relative w-full h-full bg-black">
                {project.video ? (
                  <video
                    ref={el => {
                      videoRefs.current[index] = el;
                    }}
                    src={project.video}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                ) : project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 