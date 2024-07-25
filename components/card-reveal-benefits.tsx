'use client';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from './ui/canvas-reveal-effect';
import { Icon } from '../public/icons/corner';

import recommendation from '../public/icons/target.png';
import community from '../public/icons/decision.png';
import margins from '../public/icons/margin.svg';

import Image from 'next/image';

export function CardRevealBenefits() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start justify-between bg-main w-full gap-10 mx-auto ">
        <Card
          title="Get what you deserve!
           We provide the lowest margin as for
              developers on the market - only 5%"
          icon={
            <div className="flex flex-col items-center">
              <h4>The lowest margins</h4>
              <Image className="pt-8 pr-2" src={margins} width={235} alt="icon"></Image>
            </div>
          }
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-first-200"
            colors={[[115, 217, 162]]}
            dotSize={2.5}
          />
        </Card>
        <Card
          title="Our advanced recommendation system will help you to stand out from the others."
          icon={
            <div className="flex flex-col items-center">
              <h4>Reccommendation system</h4>
              <Image className="pr-5" src={recommendation} width={220} alt="icon"></Image>
            </div>
          }
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-second-200"
            colors={[[235, 163, 241]]}
            dotSize={2.5}
          />
        </Card>
        <Card
          title="Get in touch with other gamers and developers easily"
          icon={
            <div className="flex flex-col items-center">
              <h4>Community integration</h4>
              <Image className="pl-5 pb-10" src={community} width={220} alt="icon"></Image>
            </div>
          }
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

      <div className="relative z-20 w-full">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h5 className="w-full absolute top-36 text-center text-white font-medium text-xl opacity-0 group-hover/canvas-card:opacity-100 z-10  group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h5>
      </div>
    </div>
  );
};
