"use client";
import React, { useEffect } from "react";
import AuroraText from "../../../ui/AuroraText";
import { Compare } from "@/ui/compare";
import { animate, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiNodedotjs, SiExpress } from "react-icons/si";
import { RainbowButton } from "@/ui/rainbow-button";

// Container component for icons
const Container = ({
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

export default function GetSection() {
  const [mounted, setMounted] = React.useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    if (mounted) {
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

      animate(sequence, {
        // @ts-ignore
        repeat: Infinity,
        repeatDelay: 1,
      });
    }
  }, [mounted]);

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-6xl md:text-7xl font-regular -tracking-[0.06em] text-center text-white mb-16">
          <AuroraText> What will you get</AuroraText>
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Section - 40% */}
          <div className="w-full lg:w-[40%] flex flex-col space-y-4">
            {/* Top Left Box */}
            <div
              className="w-full h-[280px] rounded-lg overflow-hidden relative backdrop-blur-md"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Tech Stack Animation */}
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
                
                <div className="mt-8 text-left w-full px-6">
                  <h3 className="text-2xl font-medium mb-2 -tracking-[0.06em]"> 
                    Premium Tech Stack
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Modern, Trendy and responsive websites built with latest technology 2025.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Left Box */}
            <div
              className="w-full h-[275px] rounded-lg overflow-hidden relative backdrop-blur-md"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="h-full w-full p-6">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-medium -tracking-[0.06em] mb-7 text-white">
                      Beyond Websites
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="text-white mr-3 flex-shrink-0">•</span>
                        <span className="text-gray-200">Custom Next.js websites with lightning performance</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-white mr-3 flex-shrink-0">•</span>
                        <span className="text-gray-200">Pixel-perfect Figma to code conversion</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-white mr-3 flex-shrink-0">•</span>
                        <span className="text-gray-200">Modern responsive designs for all devices</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-5">
                    <RainbowButton 
                      className="py-3 px-6"
                      href="https://wa.me/YourWhatsAppNumberHere"
                      openInNewTab={true}
                    >
                      Get it Now
                    </RainbowButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - 60% */}
          <div
            className="w-full lg:w-[60%] rounded-lg overflow-hidden relative backdrop-blur-md p-8 flex flex-col justify-center"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              height: "570px", // Increased height to match the total height of the two left boxes + gap
            }}
          >
            <div className="w-full h-full px-4 md:px-8 flex items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
              <div
                style={{
                  transform: "rotateX(15deg) translateZ(80px)",
                }}
                className="p-1 md:p-3 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 mx-auto w-[90%] h-[70%] md:h-4/5"
              >
                <Compare
                  firstImage="/images/project/screen1.png"
                  secondImage="/images/project/screen2.png"
                  firstImageClassName="object-cover object-left-top w-full h-full"
                  secondImageClassname="object-cover object-left-top w-full h-full"
                  className="w-full h-full rounded-[22px] md:rounded-lg"
                  slideMode="hover"
                  autoplay={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
