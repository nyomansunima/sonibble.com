import * as React from 'react'
import GeneralHeader from './header'
import Footer from '../footer'

interface GeneralLayoutProps {
  children: React.ReactNode
}

export default function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <>
      <GeneralHeader />
      {children}
      <Footer />
    </>
  )
}
