"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import AuroraText from "../../../ui/AuroraText";

export default function SplineModel() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-4 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative w-full h-[1000px] rounded-xl overflow-hidden">
          {/* Aurora text elements positioned behind the 3D model */}
          <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="absolute text-center top-[10%] left-[10%]">
              <AuroraText className="text-6xl md:text-8xl font-bold -tracking-[0.06em]">
                Use the power of AI to make your life easier
              </AuroraText>
            </div>
          </div>

          {/* 3D model (positioned on top with z-10) */}
          <main
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Spline scene="https://prod.spline.design/AjUd6wWqTHoyJfUU/scene.splinecode" />
          </main>
        </div>
      </div>
    </div>
  );
}
