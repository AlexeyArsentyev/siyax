'use client';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from './ui/hero-highlight';

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="px-4 text-3xl md:text-4xl lg:text-5xl  text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Siya - your only indie&nbsp;
        <Highlight className="text-white">game&nbsp;store</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
