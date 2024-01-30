'use client'

import SplitType from 'split-type'
import { Button } from '~/components/ui/button'
import * as React from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const headline = new SplitType(
        '[data-anim-scope=hero-section] [data-anim=headline]',
      )
      gsap.from(headline.chars, {
        y: '100',
        opacity: 0,
        stagger: 0.02,
        ease: 'back',
        duration: 1.5,
      })
      gsap.from(
        ['[data-anim=desc]', '[data-anim=features]', '[data-anim=actions]'],
        {
          y: '100',
          opacity: 0,
          ease: 'back',
          duration: 1.5,
          delay: 0.4,
          stagger: 0.2,
        },
      )
    }, '[data-anim-scope=hero-section]')

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      className="flex flex-col relative"
      id="home"
      data-anim-scope="hero-section"
    >
      {/* stroke */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1224"
        height="455"
        viewBox="0 0 1224 455"
        fill="none"
        className="absolute bottom-40 inset-x-40"
      >
        <path
          d="M990.5 1V58C990.5 68.4934 999.007 77 1009.5 77H1089C1099.49 77 1108 85.5066 1108 96V250C1108 260.493 1099.49 269 1089 269H1021C1010.51 269 1002 277.507 1002 288V309C1002 319.493 1010.51 328 1021 328H1223M913 372.5H1074.5C1084.44 372.5 1092.5 380.559 1092.5 390.5V390.5C1092.5 400.441 1084.44 408.5 1074.5 408.5H674C663.507 408.5 655 417.007 655 427.5V435C655 445.493 663.507 454 674 454H1190M108.5 252V379.5C108.5 389.993 117.007 398.5 127.5 398.5H200C210.493 398.5 219 407.007 219 417.5V421C219 431.493 210.493 440 200 440H20C9.50658 440 1 431.493 1 421V302C1 291.783 9.28273 283.5 19.5 283.5V283.5C29.7173 283.5 38 291.783 38 302V372.5"
          stroke="#F1EFF7"
          strokeOpacity="0.42"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* headline and descriptions */}
      <div className="container mx-auto laptop:px-20 px-5 flex flex-col items-center py-48 relative z-50">
        <h2
          className="text-8xl font-bold !leading-tight text-center font-heading"
          data-anim="headline"
        >
          Your unlimited web design services
        </h2>
        <p
          className="text-xl !leading-relaxed text-center w-7/12 mt-10"
          data-anim="desc"
        >
          Forget about employees, freelancers and agencies. You can have the
          best designs right now, right here.
        </p>
        <div className="flex items-center gap-10 mt-7" data-anim="features">
          <span className="flex items-center gap-3 text-base font-medium">
            <i className="fi fi-sr-check bg-black rounded-full h-8 w-8 text-white text-sm" />
            Unlimited revision
          </span>
          <span className="flex items-center gap-3 text-base font-medium">
            <i className="fi fi-sr-check bg-black rounded-full h-8 w-8 text-white text-sm" />
            Simple pricing
          </span>
        </div>

        {/* action button */}
        <div
          className="flex items-center mt-28 justify-center gap-6 laptop:mb-40"
          data-anim="actions"
        >
          <Button
            size={'md'}
            onClick={() => {
              gsap.to(window, {
                duration: 2.2,
                scrollTo: '#pricing',
                ease: 'back',
              })
            }}
            className="transition-all duration-700 hover:scale-95"
          >
            Get started
            <i className="fi fi-sr-paper-plane" />
          </Button>
        </div>
      </div>
    </section>
  )
}
