import type { Metadata } from 'next'
import './globals.css'
import { montserratFont, sansFont } from './fonts'
import { mainConfig } from '~/config/main-config'
import AnimationProvider from './animation-provider'

export const metadata: Metadata = {
  keywords: [
    'Agency',
    'Design',
    'Web Design',
    'Unlimited Web Design',
    'Landing Page',
    'Webflow Agency',
    'Framer Agency',
  ],
  authors: [{ name: 'Nyoman Sunima' }],
  publisher: 'Nyoman Sunima',
  metadataBase: new URL(mainConfig.app.host),
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`bg-background text-foreground font-normal text-base !leading-normal ${sansFont.variable} ${montserratFont.variable} font-body`}
      >
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  )
}
