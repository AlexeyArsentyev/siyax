'use client';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from './ui/canvas-reveal-effect';
import { Icon } from '../public/icons/corner';

import Image from 'next/image';

export function CardReveal() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-main w-full gap-10 mx-auto ">
        <Card title="You get something something" icon={<p>Some text idk</p>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-first-200"
            colors={[[115, 217, 162]]}
            dotSize={2.5}
          />
        </Card>
        <Card
          title="Sheetal is Nisha"
          icon={
            <p>
              Some text idk it needs to be long ig lets add more wooords ok thats enoughSome text
              idk it needs to be long ig lets add more wooords ok thats enough
            </p>
          }
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-second-200"
            colors={[[235, 163, 241]]}
            dotSize={2.5}
          />
        </Card>
        <Card title="Sheetal is Nisha" icon={<p>Some text idk</p>}>
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
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center  max-w-sm w-full  p-4 relative h-[30rem] relative"
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
        <h5 className="text-center text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h5>
      </div>
    </div>
  );
};
