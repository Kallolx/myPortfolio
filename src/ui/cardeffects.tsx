"use client";
import { animate, motion } from "motion/react";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiNodedotjs, SiExpress } from "react-icons/si";

// The main component for use in GetSection
export function DevIconsAnimation() {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  
  return (
    <div className="p-4 overflow-hidden h-full relative flex flex-col items-center justify-start">
      <div className="flex flex-row shrink-0 justify-center items-center gap-4 mt-6">
        <Container className="h-12 w-12 circle-1">
          <SiFigma className="h-6 w-6 text-[#F24E1E]" />
        </Container>
        <Container className="h-14 w-14 circle-2">
          <SiTailwindcss className="h-8 w-8 text-[#06B6D4]" />
        </Container>
        <Container className="h-16 w-16 circle-3">
          <SiNextdotjs className="h-8 w-8 text-white" />
        </Container>
        <Container className="h-14 w-14 circle-4">
          <SiNodedotjs className="h-7 w-7 text-[#339933]" />
        </Container>
        <Container className="h-12 w-12 circle-5">
          <SiExpress className="h-6 w-6 text-white" />
        </Container>
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">Modern Tech Stack</h3>
        <p className="text-gray-300 text-sm max-w-xs">
          Built with the latest technologies for performance, scalability, and developer experience.
        </p>
      </div>
    </div>
  );
}

// Container component for icons
export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.03)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

