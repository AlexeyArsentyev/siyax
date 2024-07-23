'use client';
import React from 'react';
import { Boxes } from './ui/background-boxes';
import { cn } from '@/lib/utils';

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-main-bg flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-main-bg z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1>Siya - your only indie game store you will ever need</h1>
      {/* <p className="text-center mt-2 text-neutral-300 relative z-20  pointer-events-none">
        Framer motion is the best animation library ngl
      </p> */}
    </div>
  );
}
