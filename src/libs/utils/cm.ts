import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

//class-merge
export const cm = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};
