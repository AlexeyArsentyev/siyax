import React from 'react';
import { EvervaultCard } from './ui/evervault-card';
import { Icon } from '../public/icons/corner';

export function SubmitBtn() {
  return (
    <button
      type="submit"
      className="border mt-10 mb-10 border-white/[0.2] flex flex-col items-start max-w-60 w-full max-w-52 p-4 relative h-10 hover:bg-neutral-700 transition-colors active:bg-neutral-800"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-neutral-400 " />
      <Icon className="absolute  h-6 w-6 -bottom-3 -left-3  text-neutral-400 " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-neutral-400 " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-neutral-400 " />
      <div className="w-full h-3/4 flex items-center justify-center">Get in touch</div>
    </button>
  );
}
