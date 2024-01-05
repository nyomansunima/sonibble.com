'use client'

import gsap from 'gsap'
import { Button } from '~/components/ui/button'

interface Benefit {
  icon: string
  title: string
  desc: string
}

const benefits: Benefit[] = [
  {
    icon: 'fi-sr-apps-delete',
    title: 'Design board',
    desc: "Add as many design requests to your board as you'd like.",
  },
  {
    icon: 'fi-sr-plane',
    title: 'Lightning fast delivery',
    desc: 'Get your design one at a time in just a few days on average.',
  },
  {
    icon: 'fi-sr-money',
    title: 'Fixed monthly rate',
    desc: 'No surprises here! Pay the same fixed price each month.',
  },
  {
    icon: 'fi-sr-flame',
    title: 'Top-notch quality',
    desc: 'Insane design quality at your fingertips whenever you need it.',
  },
  {
    icon: 'fi-sr-mode-landscape',
    title: 'Flexible and scalable',
    desc: 'Scale up or down as needed, and pause or cancel at anytime.',
  },
  {
    icon: 'fi-sr-rainbow',
    title: 'Unique and all yours',
    desc: 'Each of your designs is made especially for you and is 100% yours.',
  },
]

export default function BenefitsSection() {
  return (
    <section className="flex" id="benefits">
      <div className="flex flex-col items-center container mx-auto laptop:px-20 px-5 laptop:py-80 py-20">
        <h2 className="text-8xl font-bold font-heading !leading-tight text-center">
          Membership benefits you really need.
        </h2>
        <p className="text-xl !leading-relaxed text-center w-6/12 mt-10">
          Perks so good you'll never need to go anywhere else for your web
          design. Seriously.
        </p>
        <div className="flex justify-center mt-16">
          <Button
            variant={'outline'}
            size={'md'}
            onClick={() => {
              gsap.to(window, {
                duration: 1.8,
                scrollTo: '#pricing',
                ease: 'back',
              })
            }}
          >
            See plans
            <i className="fi fi-sr-network-cloud" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-10 mt-36">
          {benefits.map((item, i) => (
            <div
              className="flex flex-col border border-border rounded-2xl p-6"
              key={i}
            >
              <div className="flex items-center gap-3">
                <i className={`fi ${item.icon} text-2xl`} />
                <h4 className="text-xl font-medium !leading-tight">
                  {item.title}
                </h4>
              </div>
              <p className="text-base !leading-normal mt-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
