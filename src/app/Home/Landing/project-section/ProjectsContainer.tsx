'use client';
import React, { useState } from 'react';
import ProjectsLeftSection from './ProjectsLeftSection';
import ProjectsRightSection from './ProjectsRightSection';

const projectsData = [
  {
    id: 1,
    name: 'Web Development',
    image: '/icons/1.png'
  },
  {
    id: 2,
    name: 'Mobile Application',
    image: '/icons/1.png'
  },
  {
    id: 3,
    name: 'UI/UX Design',
    image: '/icons/1.png'
  }
];

export default function ProjectsContainer() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="w-full py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#090216] via-[#0c0627] to-[#080113]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <ProjectsLeftSection 
            projects={projectsData}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />
          <ProjectsRightSection 
            projects={projectsData}
            activeProject={activeProject}
          />
        </div>
      </div>
    </section>
  );
} 