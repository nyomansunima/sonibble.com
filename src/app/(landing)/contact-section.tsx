'use client'

import { Button } from '~/components/ui/button'
import * as React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'

export default function ContactSection() {
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ paused: true })
        .from('[data-anim=contact-el-anim]', {
          opacity: 0,
          y: 400,
          duration: 1.2,
          ease: 'none',
        })

      ScrollTrigger.create({
        trigger: '[data-anim=contact-trigger-anim]',
        start: 'top 70%',
        onEnter: () => {
          tl.play()
        },
      })
    })

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section className="flex" id="contact" data-anim="contact-trigger-anim">
      <div
        className="flex items-center container mx-auto laptop:px-20 px-5 laptop:py-80 py-20"
        data-anim="contact-el-anim"
      >
        <div className="flex flex-col w-7/12">
          <h2 className="text-8xl font-bold font-heading !leading-tight">
            Don’t overthink it, just started.
          </h2>
        </div>

        <div className="flex flex-1"></div>
        <div className="flex flex-col">
          <ul className="list-none flex flex-col gap-5">
            <li className="flex items-center gap-3 text-base font-medium">
              <i className="fi fi-sr-check bg-black rounded-full h-8 w-8 text-white text-sm" />
              Unlimited Revision
            </li>
            <li className="flex items-center gap-3 text-base font-medium">
              <i className="fi fi-sr-check bg-black rounded-full h-8 w-8 text-white text-sm" />
              Unlimited teams member
            </li>
            <li className="flex items-center gap-3 text-base font-medium">
              <i className="fi fi-sr-check bg-black rounded-full h-8 w-8 text-white text-sm" />
              Pause or Cancel anytime
            </li>
          </ul>

          <div className="mt-16">
            <Button
              asChild
              variant={'primary'}
              className="bg-[#FFDFF9] text-foreground rounded-full px-16 py-11 text-xl transition-all duration-700 hover:scale-105"
            >
              <Link
                href={'https://calendly.com/nyomansunima/sonibble-book-a-call'}
                target="_blank"
              >
                Book a call <i className="fi fi-sr-video-camera" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
