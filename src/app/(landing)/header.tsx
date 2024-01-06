'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import gsap from 'gsap'

interface Menu {
  label: string
  path: string
}

const navMenus: Menu[] = [
  { label: 'How it works', path: '#process' },
  { label: 'Benefits', path: '#benefits' },
  { label: 'Services', path: '#services' },
  { label: 'Works', path: '#works' },
  { label: 'Pricing', path: '#pricing' },
  { label: 'FAQs', path: '#faq' },
]

export default function Header() {
  const headerRef = React.useRef<HTMLElement>(null)

  React.useEffect(function animateHeader() {
    const ctx = gsap.context(() => {
      gsap.from(
        [
          headerRef.current!.querySelector('[data-anim=logo]'),
          headerRef.current!.querySelector('[data-anim=nav]'),
          headerRef.current!.querySelector('[data-anim=actions]'),
        ],
        {
          y: '-40',
          stagger: 0.2,
          duration: 2.2,
          ease: 'elastic',
        },
      )
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

      <nav className="flex items-center" data-anim="nav">
        <ul className="list-none flex items-center gap-4 font-medium">
          {navMenus.map((menu, i) => (
            <li
              className="cursor-pointer transition-all duration-700 hover:scale-95 hover:bg-gray-100 px-4 py-2 rounded-2xl"
              onClick={() => {
                gsap.to(window, { duration: 1.5, scrollTo: menu.path })
              }}
              key={i}
            >
              {menu.label}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center" data-anim="actions">
        <Button asChild variant={'outline'} className="">
          <Link
            href={'https://sonibble.lemonsqueezy.com/billing'}
            target="_blank"
          >
            Login
          </Link>
        </Button>
      </div>
    </header>
  )
}
