import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * # isMobile
 *
 * Utility function to detect the mobile screen
 * use whenever toggle function on mobile or anything else
 *
 * @returns {boolean}
 */
export function isMobile(): boolean {
  if (window.matchMedia('(max-width: 420px)').matches) {
    return true
  }

  return false
}
