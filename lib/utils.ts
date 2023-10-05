import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPropertyValue(variable: `--${string}`) {
  return window.getComputedStyle(document.body).getPropertyValue(variable);
}



export const dateFormate = (date: any) => {
  const inputDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  const formattedDate = inputDate.toLocaleDateString('en-US', options);
  return formattedDate;
}