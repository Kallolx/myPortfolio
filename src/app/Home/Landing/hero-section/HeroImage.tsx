'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroImage() {
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
          className="h-full w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1], 
            delay: 0.5 
          }}
        >
          <div 
            className="relative w-full h-full overflow-hidden"
            style={{
              borderTopRightRadius: '50px',
              borderBottomLeftRadius: '50px'
            }}
          >
            <Image
              loading="lazy"
              src={imgSrc}
              alt="Professional Portrait"
              fill
              sizes="300px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              
            />
          </div>
        </motion.div>
      ) : (
        <div className="h-full w-full">
          <div 
            className="relative w-full h-full overflow-hidden"
            style={{
              borderTopRightRadius: '50px',
              borderBottomLeftRadius: '50px'
            }}
          >
            <Image
              loading="lazy"
              src={imgSrc}
              alt="Professional Portrait"
              fill
              sizes="300px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              
              onError={() => {
                setImgSrc('https://via.placeholder.com/300x400?text=Your+Image+Here');
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
} 