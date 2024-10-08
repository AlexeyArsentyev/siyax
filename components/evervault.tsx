import React from 'react';
import { EvervaultCard } from './ui/evervault-card';
import { Icon } from '../public/icons/corner';

export function Evervault() {
  return (
    <div className="border border-white/[0.2] flex flex-col items-start max-w-sm w-full  p-4 relative h-[24rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

      <EvervaultCard text="you" />

      {/* <h5 className="text-whitemt-4 text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy here.
      </h5> */}
    </div>
  );
}
