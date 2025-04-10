'use client';

import React from 'react';

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuroraText({ children, className = '' }: AuroraTextProps) {
  return (
    <div className={`aurora-container relative ${className}`}>
      <style jsx>{`
        @keyframes aurora {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .aurora-text {
          background: linear-gradient(90deg, #ffffff, rgba(255,255,255,0.3), #ffffff, rgba(255,255,255,0.5));
          background-size: 300% 100%;
          animation: aurora 8s ease-in-out infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      <span className="aurora-text">{children}</span>
    </div>
  );
} 