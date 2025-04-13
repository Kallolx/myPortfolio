'use client';
import React, { useState, useEffect, useRef } from 'react';
import ProjectsLeftSection from './project-section/ProjectsLeftSection';
import ProjectsRightSection from './project-section/ProjectsRightSection';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const autoRotateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Function to start auto-rotation
  const startAutoRotation = () => {
    if (autoRotateTimeoutRef.current) {
      clearTimeout(autoRotateTimeoutRef.current);
    }
    
    autoRotateTimeoutRef.current = setTimeout(() => {
      setActiveProject((prev) => (prev + 1) % 3);
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
    setActiveProject(index);
    
    // Reset the auto-rotation timeout when user interacts
    if (autoRotateTimeoutRef.current) {
      clearTimeout(autoRotateTimeoutRef.current);
    }
    startAutoRotation();
  };

  const projects = [
    {
      id: 1,
      name: 'HishabX - A well balanced and finely decorated landing page ',
      video: '/videos/vid2.mp4',
    },
    {
      id: 2,
      name: 'BrandBangla - A well balanced and finely decorated landing page',
      video: '/videos/vid3.mp4',
    },
    {
      id: 3,
      name: 'PortfolioX - A well balanced and finely decorated landing page',
      video: '/videos/vid4.mp4',
    }
  ];

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Left Section */}
          <ProjectsLeftSection
            projects={projects}
            activeProject={activeProject}
            setActiveProject={handleSetActiveProject}
          /> 
          <ProjectsRightSection
            projects={projects}
            activeProject={activeProject}
          />
        </div>
      </div>
    </div>
  );
} 