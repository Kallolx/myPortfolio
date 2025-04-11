'use client';
import React, { useState, useEffect } from 'react';
import ProjectsLeftSection from './project-section/ProjectsLeftSection';
import ProjectsRightSection from './project-section/ProjectsRightSection';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  
  // Auto-rotate through projects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      name: 'HishabX - A well balanced and finely decorated landing page ',
      image: '/images/project-placeholder.jpg',
    },
    {
      id: 2,
      name: 'BrandBangla - A well balanced and finely decorated landing page',
      image: '/images/project-placeholder.jpg',
    },
    {
      id: 3,
      name: 'PortfolioX - A well balanced and finely decorated landing page',
      image: '/images/project-placeholder.jpg',
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
            setActiveProject={setActiveProject}
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