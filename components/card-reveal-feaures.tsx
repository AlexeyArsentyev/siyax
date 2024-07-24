'use client';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from './ui/canvas-reveal-effect';
import { Icon } from '../public/icons/corner';

import Image from 'next/image';

export function CardRevealFeatures() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start justify-between bg-main w-full gap-10 mx-auto ">
        <Card
          title="Get what you deserve! We provide you the lowest margin as for
              developers on the market - only 5%"
          icon={<h4>The lowest margins</h4>}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-first-200"
            colors={[[115, 217, 162]]}
            dotSize={2.5}
          />
        </Card>
        <Card title="Bring your game to the top!" icon={<h4>Free marketing</h4>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-second-200"
            colors={[[235, 163, 241]]}
            dotSize={2.5}
          />
        </Card>
        <Card
          title="We make sure that your game is well protected"
          icon={<h4>Extensive security for your product</h4>}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-third-200"
            colors={[[122, 196, 227]]}
            dotSize={2.5}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-start justify-center  max-w-sm w-full  p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h5 className="absolute top-0 text-center text-red-500 font-medium text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h5>
      </div>
    </div>
  );
};
