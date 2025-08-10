import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { safeWindow } from './common';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkIsDarkMode = () => {
  return safeWindow?.matchMedia && safeWindow.matchMedia('(prefers-color-scheme: dark)').matches;
};