import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
