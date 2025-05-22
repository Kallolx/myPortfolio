"use client";

import { useEffect, useRef, useMemo } from "react";
import createGlobe, { COBEOptions } from "cobe";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 400,
  height: 400,
  onRender: () => {},
  devicePixelRatio: 1,
  phi: 0,
  theta: 0.5,
  dark: 0.2,
  diffuse: 0.8,
  mapSamples: 8000,
  mapBrightness: 1.5,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export const Globe = ({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phi = config.phi || 0;
  const memoizedConfig = useMemo(() => config, [config]);

  useEffect(() => {
    let width = 0;
    let lastRender = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...memoizedConfig,
      width: width,
      height: width,
      devicePixelRatio: 1,
      onRender: (state) => {
        const now = Date.now();
        if (now - lastRender < 100) return; // Throttle rendering to every 100ms
        lastRender = now;

        state.phi = phi;
        state.width = width;
        state.height = width;
      },
    });

    if (canvasRef.current) {
      canvasRef.current.style.opacity = "1";
    }

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [memoizedConfig, phi]);

  // Optional: skip rendering on very small devices
  if (typeof window !== "undefined" && window.innerWidth < 480) {
    return null;
  }

  return (
    <div
      className={cn(
        "w-full h-full flex items-center justify-center overflow-visible",
        className,
      )}
    >
      <div className="w-full h-full flex items-center justify-center">
        <canvas
          className={cn(
            "w-[300%] h-[300%] max-w-none opacity-0 transition-opacity duration-300 -translate-x-[25%] translate-y-[10%]"
          )}
          ref={canvasRef}
        />
      </div>
    </div>
  );
};
