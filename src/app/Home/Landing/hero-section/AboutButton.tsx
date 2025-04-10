'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.2
      }}
    >
      <Link href="#about">
        <motion.div
          className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
          style={{
            background: 'linear-gradient(to bottom, #270F5E, #511FC4)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-white mt-2 text-lg md:text-xl lg:text-2xl font-normal flex flex-col items-center">
            <span>about</span>
            <span className="transform -rotate-125 -mt-1">↓</span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
} 