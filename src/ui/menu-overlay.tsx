'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
  triggerPosition: { x: number; y: number } | null
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({
  isOpen,
  onClose,
  triggerPosition,
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

  // For future mobile menu items
  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7 + i * 0.1,
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
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
              top: triggerPosition ? `${triggerPosition.y - 20}px` : '40px',
              left: triggerPosition ? `${triggerPosition.x - 20}px` : 'auto',
              right: !triggerPosition ? '8px' : 'auto',
            }}
          >
            <button
              onClick={onClose}
              className="p-2 text-white transition-opacity hover:opacity-80"
              aria-label="Close Menu"
            >
              <svg 
                width="40" 
                height="40" 
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

          {/* Mobile Navigation Content - only visible on smaller screens */}
          <motion.div
            variants={contentVariants}
            className="md:hidden flex flex-col justify-center items-center h-full w-full px-8"
          >
            {/* This is where full menu content will go later */}
            <div className="w-full max-w-sm flex flex-col gap-6 mt-16">
              <motion.div
                custom={0}
                variants={mobileMenuItemVariants}
                initial="hidden"
                animate="visible"
                className="w-full"
              >
                <Link 
                  href="https://github.com/kallolx"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  <span>⭐ Star on Github</span>
                </Link>
              </motion.div>
              
              <motion.div
                custom={1}
                variants={mobileMenuItemVariants}
                initial="hidden"
                animate="visible"
                className="w-full"
              >
                <Link 
                  href="https://wa.me/8801831624571"
                  className="w-full bg-[#090245] text-white py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity relative overflow-hidden group"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  <span className="relative z-10">Connect Now</span>
                  <Image 
                    src="/icons/arrow.svg"
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                    className="relative z-10"
                  />
                  <div className="absolute inset-0 bg-[#997ef1] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 