import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default function PricingSection() {
  return (
    <section className="flex" id="pricing">
      <div className="flex flex-col container mx-auto laptop:px-20 px-5 laptop:py-80 py-20">
        <h2 className="text-8xl font-bold font-heading !leading-tight w-9/12">
          Simple pricing No hidden fees.
        </h2>

        <div className="grid grid-cols-3 mt-36 gap-6">
          {/* standard */}
          <div className="flex flex-col border border-border rounded-2xl p-6 relative">
            <span className="absolute px-4 py-2 rounded-xl bg-[#EA2D89] text-white -rotate-12 text-sm font-medium right-0 -top-4">
              Most popular
            </span>
            <h4 className="text-2xl font-medium">Standard</h4>
            <p className="mt-2">
              One request at a time. Pause or cancel anytime.
            </p>
            <span className="text-4xl font-bold mt-8">$3,599/m</span>
            <p className="text-sm text-neutral-500 mt-1">
              Pause or cancel anytime
            </p>
            <span className="text-base font-medium mt-7 border-t border-border pt-4">
              What’s included
            </span>
            <ul className="flex flex-col list-disc text-base mt-4 gap-3 ml-10">
              <li>One request at a time</li>
              <li>Average 48 hour delivery</li>
              <li>Unlimited brands</li>
              <li>Unlimited users</li>
              <li>Easy credit-card payments</li>
              <li>Pause or cancel anytime</li>
            </ul>
            <Button asChild variant={'outline'} size={'md'} className="mt-14">
              <Link
                href={
                  'https://sonibble.lemonsqueezy.com/checkout/buy/da3cc4b4-95d4-479d-b702-01d4589fb10f'
                }
                target="_blank"
              >
                Get started
                <i className="fi fi-sr-arrow-right" />
              </Link>
            </Button>
          </div>

          {/* Pro */}
          <div className="flex flex-col border border-border rounded-2xl p-6">
            <h4 className="text-2xl font-medium">Pro</h4>
            <p className="mt-2">
              Double the requests. Pause or cancel anytime.
            </p>

            <span className="text-4xl font-bold mt-8">$4,799/m</span>
            <p className="text-sm text-neutral-500 mt-1">
              Pause or cancel anytime
            </p>

            <span className="text-base font-medium mt-7 border-t border-border pt-4">
              What’s included
            </span>
            <ul className="flex flex-col list-disc text-base mt-4 gap-3 ml-10">
              <li>One request at a time</li>
              <li>Average 48 hour delivery</li>
              <li>Unlimited brands</li>
              <li>Unlimited users</li>
              <li>Easy credit-card payments</li>
              <li>Pause or cancel anytime</li>
            </ul>

            <Button asChild variant={'outline'} size={'md'} className="mt-14">
              <Link
                href={
                  'https://sonibble.lemonsqueezy.com/checkout/buy/a4173c62-02bd-4af2-9d88-09ba418c2f05'
                }
                target="_blank"
              >
                Get started
                <i className="fi fi-sr-arrow-right" />
              </Link>
            </Button>
          </div>

          {/* others */}
          <div className="flex flex-col gap-6">
            {/* book call */}
            <div className="flex flex-col border border-border rounded-2xl p-6">
              <h4 className="text-2xl font-medium">Book a call</h4>
              <p className="mt-2">
                Learn more about how Sonibble works and how it can help you.
              </p>

              <Button
                asChild
                variant={'outline'}
                className="mt-14 hover:-translate-y-2"
                size={'md'}
              >
                <Link
                  href={
                    'https://calendly.com/nyomansunima/sonibble-book-a-call'
                  }
                  target="_blank"
                >
                  Book call now
                </Link>
              </Button>
            </div>

            <div className="flex flex-col border border-border rounded-2xl p-6">
              <h4 className="text-2xl font-medium">Refer a friend & earn</h4>
              <p className="mt-2">
                Earn 5% monthly recurring commissions for each referral.
              </p>

              <Button asChild variant={'outline'} className="mt-14" size={'md'}>
                <Link
                  href={'https://sonibble.lemonsqueezy.com/affiliates'}
                  target="_blank"
                >
                  Join Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
