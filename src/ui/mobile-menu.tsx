"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShimmerButton } from "./shimmer-button";
import { RainbowButton } from "./rainbow-button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerPosition?: { x: number; y: number } | null;
}

const menuItems = [
  { id: 1, title: "My Works", link: "/works" },
  { id: 2, title: "Skills", link: "/skills" },
  { id: 3, title: "Service", link: "/service" },
  { id: 4, title: "Contact", link: "/contact" },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  triggerPosition = null,
}) => {
  const menuVariants = {
    hidden: {
      clipPath: triggerPosition
        ? `circle(0% at ${triggerPosition.x}px ${triggerPosition.y}px)`
        : "circle(0% at calc(100% - 48px) 40px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    visible: {
      clipPath: triggerPosition
        ? `circle(150% at ${triggerPosition.x}px ${triggerPosition.y}px)`
        : "circle(150% at calc(100% - 48px) 40px)",
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="fixed inset-0 bg-black z-[100]"
        >
          {/* Close button */}
          <motion.div
            variants={contentVariants}
            className="fixed z-[101]"
            style={{
              top: triggerPosition ? `${triggerPosition.y - 20}px` : "40px",
              left: triggerPosition ? `${triggerPosition.x - 20}px` : "auto",
              right: !triggerPosition ? "8px" : "auto",
            }}
          >
            <button
              onClick={onClose}
              className="p-2 text-white transition-opacity hover:opacity-80"
              aria-label="Close Menu"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>

          {/* Background Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/nav/2.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>

          {/* Menu Container with Flex Column */}
          <div className="relative h-full w-full flex flex-col items-center">
            {/* Menu Items - Now centered in the available space */}
            <div className="flex-1 flex items-center justify-center w-full">
              <motion.div
                variants={contentVariants}
                className="flex flex-col items-center justify-center p-4"
              >
                {menuItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="my-4"
                    style={{
                      animation: `fadeInUp 0.4s ease-out forwards`,
                      animationDelay: `${index * 100 + 400}ms`,
                      opacity: 0,
                      transform: "translateY(20px)",
                    }}
                  >
                    <Link href={item.link} className="block" onClick={onClose}>
                      <h2 className="text-4xl sm:text-5xl font-dm-sans font-medium text-white hover:opacity-80 transition-opacity">
                        {item.title}
                      </h2>
                    </Link>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Buttons - Now with more bottom margin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col items-center gap-4 w-full px-6 mb-16 pb-6"
            >
              <RainbowButton 
                className="flex items-center justify-center gap-2 w-full py-3"
                href="https://github.com/kallolx"
                openInNewTab={true}
              >
                ⭐ Star on Github
              </RainbowButton>
              
              <ShimmerButton 
                shimmerColor="#997ef1"
                background="#090245"
                borderRadius="9999px"
                className="flex items-center justify-center gap-2 w-full py-3"
                href="https://wa.me/8801831624571"
                openInNewTab={true}
              >
                Connect Now
                <Image 
                  src="/icons/arrow.svg"
                  alt="Arrow Icon"
                  width={20}
                  height={20}
                />
              </ShimmerButton>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
