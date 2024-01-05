'use client'

import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import * as React from 'react'

interface Props {
  children: React.ReactNode
}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

/**
 * ## Animation Provider
 *
 * provider for the animation
 * that allow to modify and preset the animation using gsap,
 * lenis, or any other one
 * @returns {React.ReactElement}
 */
export default function AnimationProvider({ children }: Props) {
  React.useEffect(function lenisGsapIntegration() {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {}
  })

  return <>{children}</>
}
