'use client'

import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import * as React from 'react'
import { ScrollTrigger } from 'gsap/all'

export default function ActionToast() {
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const toggleToastAnim = gsap
        .timeline({ paused: true })
        .to('[data-anim=toast-el-anim]', {
          y: 0,
          duration: 0.7,
          ease: 'back',
        })

      ScrollTrigger.create({
        trigger: '#process',
        start: 'top 70%',
        onEnter: () => {
          toggleToastAnim.play()
        },
        onLeaveBack: () => {
          toggleToastAnim.reverse()
        },
      })

      ScrollTrigger.create({
        trigger: '#contact',
        start: 'top 90%',
        onEnter: () => {
          toggleToastAnim.reverse()
        },
        onLeaveBack: () => {
          toggleToastAnim.play()
        },
      })
    })

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div
      className="hidden laptop:flex fixed z-50 bg-[#FFDFF9] rounded-full p-4 border-[3px] border-black bottom-6 inset-x-[19%] translate-y-[120%]"
      data-anim="toast-el-anim"
    >
      <div className="flex items-center justify-center gap-6">
        <Image
          src={'/images/book-call-profile.png'}
          alt="Book a call"
          height={70}
          width={70}
          quality={10}
          className="border-2 border-black rounded-full"
        />

        <h4 className="text-2xl font-bold font-heading leading-none">
          Get started now.
        </h4>
      </div>
      <div className="flex flex-1"></div>
      <div className="flex items-center gap-5">
        <Button
          variant={'outline'}
          size={'md'}
          className="bg-transparent border-black border-2 transition-all duration-700 hover:scale-95"
          onClick={() => {
            gsap.to(window, {
              duration: 1.8,
              scrollTo: '#pricing',
              ease: 'back',
            })
          }}
        >
          See Pricing
          <i className="fi fi-sr-network-cloud" />
        </Button>

        <Button
          asChild
          variant={'primary'}
          size={'md'}
          className="transition-all duration-700 hover:scale-95"
        >
          <Link
            href={'https://calendar.app.google/Z2EvQAWa4ihp3SpW9'}
            target="_blank"
          >
            Book a call
            <i className="fi fi-sr-video-camera-alt" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
