import React from 'react';
import { Icon } from '../public/icons/corner';

export function InputField() {
  return (
    <div className="border border-white/[0.2]  flex flex-col items-start w-20 mx-auto p-1">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <input type="text" />
    </div>
  );
}
