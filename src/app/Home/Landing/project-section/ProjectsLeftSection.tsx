"use client";
import React from "react";
import AuroraText from "../../../../ui/AuroraText";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/ui/shimmer-button";

interface Project {
  id: number;
  name: string;
  video?: string;
  image?: string;
}

interface ProjectsLeftSectionProps {
  projects: Project[];
  activeProject: number;
  setActiveProject: (index: number) => void;
}

export default function ProjectsLeftSection({
  projects,
  activeProject,
  setActiveProject,
}: ProjectsLeftSectionProps) {
  return (
    <div className="w-full lg:w-2/5 flex flex-col z-10 mt-24">
      <div className="mb-10">
        <div className="mb-6">
          <h2 className="text-6xl md:text-7xl font-regular -tracking-[0.06em]  mb-3">
            <AuroraText>Projects Gallery</AuroraText>
          </h2>
        </div>
      </div>

      <div className="flex flex-col space-y-7">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex items-center cursor-pointer group"
            onClick={() => setActiveProject(index)}
          >
            <div className="mr-6">
              <div
                className={`
                w-10 h-10 flex items-center justify-center transition-all duration-300
                ${
                  index === activeProject
                    ? "scale-110"
                    : "opacity-70 group-hover:opacity-90"
                }
              `}
              >
                {index === 0 && (
                  <img
                    src="/icons/1.png"
                    alt="Web Development icon"
                    className="w-full h-full object-contain"
                  />
                )}
                {index === 1 && (
                  <img
                    src="/icons/1.png"
                    alt="Mobile Application icon"
                    className="w-full h-full object-contain"
                  />
                )}
                {index === 2 && (
                  <img
                    src="/icons/1.png"
                    alt="UI/UX Design icon"
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </div>

            <div className="flex-1">
              <div
                className={`
                flex items-center
                ${index === activeProject && "text-white"}
              `}
              >
                <h4
                  className={`
                  text-xl md:text-2xl font-medium transition-all -tracking-[0.06em]
                  ${
                    index === activeProject
                      ? "text-white"
                      : "text-gray-500 group-hover:text-gray-300"
                  }
                `}
                >
                  {project.name}
                </h4>

                {index === activeProject && (
                  <img
                    src="/icons/arrow.svg"
                    alt="Web Development icon"
                    className="w-8 h-8 object-contain -mr-9"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <motion.div className="hidden md:block">
          <ShimmerButton
            shimmerColor="#997ef1"
            background="#090245"
            borderRadius="9999px"
            className="flex items-center gap-2 whitespace-nowrap"
            href="https://kallolsfolio2.vercel.app/projects"
          >
            See All Projects
          </ShimmerButton>
        </motion.div>
      </div>
    </div>
  );
}
