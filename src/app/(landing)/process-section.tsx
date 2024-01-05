'use client'

import * as React from 'react'
import gsap from 'gsap'

export default function ProcessSection() {
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const triggers = document.querySelectorAll(
        '[data-anim-scope=process-section] [data-anim-trigger]',
      )
      triggers.forEach((trigger) => {
        gsap.from(trigger.querySelector('[data-anim-target]'), {
          xPercent: '110',
          opacity: 0.4,
          ease: 'back',
          duration: 1.4,
          delay: 0.2,
          scrollTrigger: {
            trigger: trigger,
            start: 'top 70%',
          },
        })

        gsap.from(trigger.querySelector('[data-anim=headline]'), {
          opacity: 0,
          y: 400,
          duration: 1.2,
          scrollTrigger: {
            trigger: trigger,
            start: 'top 70%',
          },
        })
      })
    }, '[data-anim-scope=process-section]')

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      className="flex bg-[#FAFBFF]"
      data-anim-scope="process-section"
      id="process"
    >
      <div className="container mx-auto laptop:px-16 px-5 laptop:py-80 py-20">
        <div data-anim-trigger>
          <h2
            className="text-8xl !leading-tight font-bold font-heading w-8/12"
            data-anim="headline"
          >
            Easy to start no shits.
          </h2>
        </div>

        <div className="flex flex-col mt-56">
          <div data-anim-trigger className="flex items-center px-16">
            <div data-anim-target className="flex items-center py-16">
              <span className="flex justify-center items-center text-4xl font-bold !leading-none h-16 w-16 rounded-full bg-white border-2 border-black">
                1
              </span>
              <h3 className="text-7xl font-bold font-heading !leading-tight flex-1 ml-16">
                Subscribe
              </h3>
              <p className="w-5/12 text-xl !leading-relaxed">
                Subscribe to the plan, then you will get the access to your
                portal including project manager, docs, and space.
              </p>
            </div>
          </div>
          <div data-anim-trigger className="flex items-center px-16">
            <div
              data-anim-target
              className="flex items-center py-16 border-y border-border pl-36 relative"
            >
              <span className="flex justify-center items-center text-4xl font-bold !leading-none h-16 w-16 rounded-full bg-black text-white border-2 border-black">
                2
              </span>
              <div className="flex flex-col flex-1 ml-16">
                <h3 className="text-7xl font-bold font-heading !leading-tight">
                  Delivery
                </h3>
                <p className="w-10/12 text-xl !leading-relaxed mt-7">
                  Receive your design within a few business days on average,
                  Monday to Friday. We don’t doing wasting time meeting, all we
                  do is working on your project.
                </p>
              </div>
              <span className="absolute border-2 border-black text-3xl font-heading font-semibold py-3 px-8 rounded-full top-16 right-16 flex justify-end">
                <span className="relative z-50"> 2 days</span>
                <span className="rounded-full bg-[#ACFA17] h-[60px] w-[60px] absolute top-0 right-0"></span>
              </span>
            </div>
          </div>
          <div data-anim-trigger className="flex items-center px-16">
            <div data-anim-target className="flex items-center py-16 relative">
              <span className="flex justify-center items-center text-4xl font-bold !leading-none h-16 w-16 rounded-full bg-white border-2 border-black">
                3
              </span>
              <h3 className="text-7xl font-bold font-heading !leading-tight flex-1 ml-16">
                Revision
              </h3>
              <p className="w-5/12 text-xl !leading-relaxed">
                We'll revise the designs until you're 100% satisfied. Then move
                into the web development stage and make the site launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
