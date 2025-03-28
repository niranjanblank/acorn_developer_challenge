import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatTime(timeStr: string): string {
    return format(new Date(timeStr), 'MMM d, yyyy, h:mm a');
  }
