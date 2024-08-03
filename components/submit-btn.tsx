import React from 'react';
import { EvervaultCard } from './ui/evervault-card';
import { Icon } from '../public/icons/corner';
import { motion } from 'framer-motion';

export function SubmitBtn() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      className="submit-btn border mt-10 mb-10 border-white/[0.2] flex flex-col items-start max-w-60 w-full p-4 relative h-10 hover:border-first-200 transition-colors active:bg-first-200"
    >
      <Icon className="submit-icon absolute h-6 w-6 -top-3 -left-3  " />
      <Icon className="submit-icon absolute h-6 w-6 -bottom-3 -left-3   " />
      <Icon className="submit-icon absolute h-6 w-6 -top-3 -right-3 " />
      <Icon className="submit-icon absolute h-6 w-6 -bottom-3 -right-3 " />

      <div className="w-full h-3/4 flex items-center justify-center">Get in touch</div>
    </motion.button>
  );
}
