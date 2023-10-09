import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const classNameMerge = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
