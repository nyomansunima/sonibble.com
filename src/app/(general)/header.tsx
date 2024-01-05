'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'

export default function GeneralHeader() {
  const headerRef = React.useRef<HTMLElement>(null)

  React.useEffect(function animateHeader() {
    const ctx = gsap.context(() => {
      gsap.from([headerRef.current!.querySelector('[data-anim=logo]')], {
        y: '-40',
        stagger: 0.2,
        duration: 2.2,
        ease: 'elastic',
      })
    }, '[data-anim-scope=header]')

    return () => {
      ctx.revert()
    }
  })

  return (
    <header
      className="flex items-center w-full px-16 py-3 justify-between"
      ref={headerRef}
      data-anim-scope="header"
    >
      <Link href={'/'} data-anim="logo">
        <Image
          src={'/images/logo.png'}
          width={56}
          height={56}
          alt="Sonibble Logo"
          quality={10}
        />
      </Link>
    </header>
  )
}
