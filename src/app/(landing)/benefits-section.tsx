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
    icon: 'fi-sr-refresh',
    title: 'Unlimited Revisions',
    desc: 'Request as many update for your web design before it launch. We created your site, we hear from your feedback.',
  },
  {
    icon: 'fi-sr-paper-plane',
    title: 'Lightning fast delivery',
    desc: 'Get your design one at a time in just a few days on average.',
  },
  {
    icon: 'fi-sr-money',
    title: 'Simple pricing',
    desc: 'No surprises here! Pay only the package you choose and subscribe only for maintenance.',
  },
  {
    icon: 'fi-sr-flame',
    title: 'Top-notch quality',
    desc: 'Insane design quality at your fingertips whenever you need it.',
  },
  {
    icon: 'fi-sr-globe',
    title: 'World class site',
    desc: 'Modern design, advance animation and high performance site for you.',
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
          Real benefits for your business growth
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
