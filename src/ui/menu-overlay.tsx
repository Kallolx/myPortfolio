'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './mobile-menu'

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
  triggerPosition: { x: number; y: number } | null
}

const menuItems = [
  { id: 1, title: 'My Works', link: '/works', image: '/images/nav/1.jpg', overlayOpacity: '0.6' },
  { id: 2, title: 'Skills', link: '/skills', image: '/images/nav/2.jpg', overlayOpacity: '0.65' },
  { id: 3, title: 'Service', link: '/service', image: '/images/nav/3.jpg', overlayOpacity: '0.6' },
  { id: 4, title: 'Contact', link: '/contact', image: '/images/nav/4.jpg', overlayOpacity: '0.7' },
]

export const MenuOverlay: React.FC<MenuOverlayProps> = ({
  isOpen,
  onClose,
  triggerPosition,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile device on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

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
  }

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
  }

  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 1.1,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  }

  const textVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.3,
      },
    },
  }

  // Animation for the scroll down text
  const scrollDownVariants = {
    initial: {
      opacity: 0,
      y: -15
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: 15,
      transition: {
        duration: 0.2
      }
    }
  }

  const handleScroll = (e: React.WheelEvent) => {
    if (isAnimating) return

    setIsAnimating(true)
    if (e.deltaY > 0) {
      setActiveIndex((prev) => (prev === menuItems.length - 1 ? 0 : prev + 1))
    } else {
      setActiveIndex((prev) => (prev === 0 ? menuItems.length - 1 : prev - 1))
    }
    
    setTimeout(() => setIsAnimating(false), 800)
  }

  const getItemStyles = (index: number) => {
    const position = index - activeIndex
    const totalItems = menuItems.length

    // Adjust position for infinite scroll
    let adjustedPosition = position
    if (position > totalItems / 2) adjustedPosition = position - totalItems
    if (position < -totalItems / 2) adjustedPosition = position + totalItems

    const isActive = adjustedPosition === 0
    const yOffset = adjustedPosition * 120

    // Only show active item and the ones directly above and below it
    const isVisible = Math.abs(adjustedPosition) <= 1
    
    return {
      y: yOffset,
      scale: isActive ? 1 : 0.5,
      opacity: isVisible ? (isActive ? 1 : 0.15) : 0, // Hide items that aren't adjacent to active
      fontSize: isActive ? '10vw' : '6vw',
      color: isActive ? '#ffffff' : '#888888',
      // Using style prop instead to handle pointer-events
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.4 },
      }
    }
  }

  // If on mobile, render the mobile menu
  if (isMobile) {
    return <MobileMenu isOpen={isOpen} onClose={onClose} triggerPosition={triggerPosition} />
  }

  // Otherwise, render the desktop menu
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

          {/* Background Images - One for each menu item */}
          <AnimatePresence mode="wait">
            {menuItems.map((item, index) => (
              index === activeIndex && (
                <motion.div
                  key={`bg-${item.id}`}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} Background`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div 
                    className="absolute inset-0 bg-black" 
                    style={{ opacity: item.overlayOpacity }}
                  />
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Menu Items Container */}
          <motion.div
            variants={contentVariants}
            className="h-full w-full overflow-hidden"
            onWheel={handleScroll}
          >
            {/* Scroll Down Text - Now at top */}
            <div className="absolute top-12 left-0 right-0 flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`scroll-${activeIndex}`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={scrollDownVariants}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, 
                      ease: "easeInOut" 
                    }}
                    className="mb-2"
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white/70"
                    >
                      <path 
                        d="M12 5V19M12 19L19 12M12 19L5 12" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  <p className="text-white/70 uppercase tracking-widest text-sm">Scroll Down</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative h-full w-full flex items-center justify-center">
              <div className="relative h-screen flex items-center">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={false}
                    animate={getItemStyles(index)}
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{ 
                      transformOrigin: 'center center',
                      pointerEvents: Math.abs(index - activeIndex) <= 1 ? 'auto' : 'none'
                    }}
                  >
                    <Link href={item.link} className="block">
                      <h2 className="font-dm-sans font-medium tracking-[-0.06em] hover:opacity-80 transition-opacity whitespace-nowrap">
                        {item.title}
                      </h2>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 