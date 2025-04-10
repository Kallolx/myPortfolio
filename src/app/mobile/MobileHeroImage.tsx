'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MobileHeroImage() {
  // Use an error handler to handle missing image
  const [imgSrc, setImgSrc] = useState('/images/myimage.png');
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-full w-full">
      {isClient ? (
        <motion.div 
          className="h-full w-full relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1], 
            delay: 0.5 
          }}
        >
          {/* Glow effect */}
          <motion.div 
            className="absolute inset-0 rounded-[40px] blur-xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              background: "radial-gradient(circle at center, rgba(114, 9, 183, 0.6) 0%, rgba(58, 12, 163, 0.2) 70%, transparent 100%)",
              transform: "translateY(10px) scale(0.85)",
            }}
          />
          
          <div className="relative w-full h-full overflow-hidden rounded-[30px] z-10">
            <Image
              src={imgSrc}
              alt="Professional Portrait"
              fill
              sizes="280px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              priority
              onError={() => {
                setImgSrc('https://via.placeholder.com/280x350?text=Your+Image+Here');
              }}
            />
          </div>
        </motion.div>
      ) : (
        <div className="h-full w-full">
          <div className="relative w-full h-full overflow-hidden rounded-[30px]">
            <Image
              src={imgSrc}
              alt="Professional Portrait"
              fill
              sizes="280px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              priority
              onError={() => {
                setImgSrc('https://via.placeholder.com/280x350?text=Your+Image+Here');
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
} 