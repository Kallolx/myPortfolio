'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShimmerButton } from '@/ui/shimmer-button'

export default function NotFound() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black to-purple-900 z-[100] overflow-hidden">

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12 sm:px-8 md:px-12">
        {/* Main Error Container */}
        <motion.div 
          className="flex flex-col items-center max-w-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* 404 Number */}
          <h1 className="text-[120px] sm:text-[150px] md:text-[180px] font-bold text-white leading-none tracking-tighter">
            404
          </h1>
          
          {/* Error Message */}
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-white/90 mb-3">
            Page Not Found
          </h2>

          {/* Back to Home Button */}
          <ShimmerButton 
            shimmerColor="#997ef1"
            background="#090245"
            borderRadius="9999px"
            className="flex items-center gap-2 px-6 py-3 text-base md:text-lg"
            href="/"
          >
            Back to Home
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path 
                d="M4.16666 10H15.8333" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M10.8333 5L15.8333 10L10.8333 15" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </ShimmerButton>
        </motion.div>

        {/* Footer info */}
        <motion.div 
          className="absolute bottom-6 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <p>© {new Date().getFullYear()} Kallolsfolio</p>
        </motion.div>
      </div>
    </div>
  )
} 