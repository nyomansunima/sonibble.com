import { DM_Sans, Montserrat } from 'next/font/google'

export const sansFont = DM_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-body',
})

export const montserratFont = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-heading',
})
