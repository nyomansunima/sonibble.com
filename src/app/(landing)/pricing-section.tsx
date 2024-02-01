import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default function PricingSection() {
  return (
    <section className="flex" id="pricing">
      <div className="flex flex-col container mx-auto laptop:px-20 px-5 laptop:py-80 py-20">
        <h2 className="text-5xl laptop:text-8xl font-bold font-heading !leading-tight laptop:w-9/12">
          Simple pricing No hidden fees.
        </h2>

        <div className="grid grid-cols-1 laptop:grid-cols-3 mt-36 gap-6">
          <div className="flex flex-col gap-6">
            {/* Standard */}
            <div className="flex flex-col border border-border rounded-2xl p-6 relative">
              <span className="absolute px-4 py-2 rounded-xl bg-[#EA2D89] text-white -rotate-12 text-sm font-medium right-0 -top-4">
                Most popular
              </span>
              <h4 className="text-2xl font-medium">Standard</h4>
              <p className="mt-2">
                Best for landing pages, starter, small business sites.
              </p>
              <span className="text-4xl font-bold mt-8">$2,799</span>
              <p className="text-sm text-neutral-500 mt-1">Per site</p>
              <span className="text-base font-medium mt-7 border-t border-border pt-4">
                What’s included
              </span>
              <ul className="flex flex-col list-disc text-base mt-4 gap-3 ml-10">
                <li>Unlimited design revisions</li>
                <li>Up to 5 pages</li>
                <li>Custom design with branding</li>
                <li>Mobile responsive</li>
                <li>Advance animation</li>
                <li>Contact form, social media integration</li>
                <li>Free domain and migrations</li>
                <li>CMS supported</li>
              </ul>
              <Button asChild variant={'outline'} size={'md'} className="mt-14">
                <Link
                  href={
                    'https://sonibble.lemonsqueezy.com/checkout/buy/278bcb40-bf23-4784-b684-421ff6c452b1'
                  }
                  target="_blank"
                >
                  Get started
                  <i className="fi fi-sr-arrow-right" />
                </Link>
              </Button>
            </div>

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
                  href={'https://calendar.app.google/Z2EvQAWa4ihp3SpW9'}
                  target="_blank"
                >
                  Book call now
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Premium */}
            <div className="flex flex-col border border-border rounded-2xl p-6">
              <h4 className="text-2xl font-medium">Premium</h4>
              <p className="mt-2">
                Best for advance sites, enterprise, and company or scale
                business.
              </p>

              <span className="text-4xl font-bold mt-8">$4,899</span>
              <p className="text-sm text-neutral-500 mt-1">Per site</p>

              <span className="text-base font-medium mt-7 border-t border-border pt-4">
                What’s included
              </span>
              <ul className="flex flex-col list-disc text-base mt-4 gap-3 ml-10">
                <li>Unlimited design revisions</li>
                <li>Up to 15 pages</li>
                <li>Fully custom design with unique features</li>
                <li>Advanced functionality</li>
                <li>Advance animations</li>
                <li>E-commerce integration</li>
                <li>Mobile responsive</li>
                <li>Free domain and migrations</li>
                <li>CMS Supported</li>
              </ul>

              <Button asChild variant={'outline'} size={'md'} className="mt-14">
                <Link
                  href={
                    'https://sonibble.lemonsqueezy.com/checkout/buy/fa6d27e5-215b-4c9e-9296-0220bc2412af'
                  }
                  target="_blank"
                >
                  Get started
                  <i className="fi fi-sr-arrow-right" />
                </Link>
              </Button>
            </div>
          </div>

          {/* others */}
          <div className="flex flex-col gap-6">
            {/* Maintenance */}
            <div className="flex flex-col border border-border rounded-2xl p-6 relative">
              <h4 className="text-2xl font-medium">Maintenance</h4>
              <p className="mt-2">
                Monthly maintenance site and updates supported. Site package
                required.
              </p>
              <span className="text-4xl font-bold mt-8">$110/month</span>
              <p className="text-sm text-neutral-500 mt-1">
                Per site{'  '}
                <span className="bg-gray-100 text-primary rounded-md px-2 py-1 font-medium">
                  Site package required
                </span>
              </p>
              <span className="text-base font-medium mt-7 border-t border-border pt-4">
                What’s included
              </span>
              <ul className="flex flex-col list-disc text-base mt-4 gap-3 ml-10">
                <li>Content updates</li>
                <li>Performance report</li>
                <li>Design and update elements</li>
                <li>Trend and new design update</li>
              </ul>
              <Button asChild variant={'outline'} size={'md'} className="mt-14">
                <Link
                  href={
                    'https://sonibble.lemonsqueezy.com/checkout/buy/1fe4d4b7-88a7-4b41-af2c-eee9e99bcb3c'
                  }
                  target="_blank"
                >
                  Subscribe now
                  <i className="fi fi-rr-envelope" />
                </Link>
              </Button>
            </div>

            {/* Referal */}
            <div className="flex flex-col border border-border rounded-2xl p-6">
              <h4 className="text-2xl font-medium">Refer a friend & earn</h4>
              <p className="mt-2">
                Earn 5% commissions for each referral per success project.
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
