import type { Metadata } from 'next'
import './globals.css'
import { montserratFont, sansFont } from './fonts'
import { mainConfig } from '~/config/main-config'
import AnimationProvider from './animation-provider'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

export const metadata: Metadata = {
  keywords: [
    'Agency',
    'Design',
    'Web Design',
    'Unlimited Web Design',
    'Landing Page',
    'Webflow Agency',
    'Framer Agency',
    'Subscription',
    'Shopify',
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
        {/* Google analytics tags */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${mainConfig.google.analytics.id}`}
        />
        <Script strategy="lazyOnload" id="google-analytics">
          {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', '${mainConfig.google.analytics.id}');
              `}
        </Script>

        <AnimationProvider>{children}</AnimationProvider>
        <Analytics />
      </body>
    </html>
  )
}
