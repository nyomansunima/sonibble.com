'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import * as React from 'react'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "Why wouldn't I just hire a full-time designer?",
    answer:
      "Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.",
  },
  {
    question: 'Is there a limit to how many requests I can have?',
    answer:
      "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
  },
  {
    question: 'How fast will I receive my designs?',
    answer:
      'On average, most requests are completed in just two days or less. However, more complex requests can take longer.',
  },
  {
    question: 'How does the pause feature work?',
    answer:
      "We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy. Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.",
  },
  {
    question: 'How do I request designs?',
    answer:
      "Sonibble offers a ton of flexibility in how you request designs using Notion. Some common ways clients request designs is directly via Notion, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Notion, it's fair game.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "No worries! We'll continue to revise the design until you're 100% satisfied.",
  },
  {
    question: 'What if I only have a single request?',
    answer:
      "That's fine. You can pause your subscription when finished and return  when you have additional design needs. There's no need to let the remainder of your subscription go to waste.",
  },
]

interface FAQItemProps {
  faq: FAQ
}

function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setOpen] = React.useState<boolean>(false)

  return (
    <li
      className="flex flex-col border-2 border-black px-6 py-5 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2"
      onClick={() => {
        setOpen((state) => !state)
      }}
    >
      <div className="flex items-center cursor-pointer">
        <span className="text-lg font-medium flex flex-1">{faq.question}</span>
        <i className="fi fi-sr-plus text-base" />
      </div>

      {isOpen && (
        <p className="text-base !leading-relaxed mt-6">{faq.answer}</p>
      )}
    </li>
  )
}

export default function FAQSection() {
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            trigger: '[data-anim=faq-section-trigger]',
            start: 'top 40%',
          },
        })
        .from(
          [
            '[data-anim=faq-section-trigger] [data-anim=headline]',
            '[data-anim=faq-section-trigger] [data-anim=desc]',
            '[data-anim=faq-section-trigger] [data-anim=list]',
          ],
          {
            y: 400,
            opacity: 0,
            ease: 'back',
            duration: 1.6,
            stagger: 0.4,
          },
        )
    }, '[data-anim=faq-section]')

    return () => {
      ctx.revert()
    }
  }, [])
  return (
    <section className="flex bg-[#FAFBFF]" id="faq" data-anim="faq-section">
      <div
        className="flex flex-col items-center container mx-auto laptop:px-20 px-5 laptop:py-80 py-20"
        data-anim="faq-section-trigger"
      >
        <h2
          className="text-8xl font-bold font-heading !leading-tight w-9/12 text-center"
          data-anim="headline"
        >
          Need help?
        </h2>
        <p
          className="text-xl !leading-relaxed text-center w-6/12 mt-10"
          data-anim="desc"
        >
          Don't worry, we got you. Here are some answers for your questions.
        </p>

        <div className="flex mt-36 w-8/12" data-anim="list">
          <ul className="list-none flex flex-col gap-4 w-full">
            {faqs.map((item, i) => (
              <FAQItem faq={item} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
