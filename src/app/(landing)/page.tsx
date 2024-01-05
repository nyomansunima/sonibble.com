import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '../shared-metadata'
import HeroSection from './hero-section'
import TrustSection from './trust-section'
import ProcessSection from './process-section'
import BenefitsSection from './benefits-section'
import ServicesSection from './services-section'
import PricingSection from './pricing-section'
import FAQSection from './faq-section'
import ContactSection from './contact-section'
import ActionToast from './action-toast'

export const metadata: Metadata = {
  title: 'Unlimited Web Design Subscription | Sonibble',
  description:
    'Web design subscriptions for everyone and businesses. Unlimited request, no hidden fees and you won, we loved.',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Unlimited Web Design Subscription | Sonibble',
    description:
      'Web design subscriptions for everyone and businesses. Unlimited request, no hidden fees and you won, we loved.',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Unlimited Web Design Subscription | Sonibble',
    description:
      'Web design subscriptions for everyone and businesses. Unlimited request, no hidden fees and you won, we loved.',
  },
}

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <TrustSection />
      <ProcessSection />
      <BenefitsSection />
      <ServicesSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <ActionToast />
    </main>
  )
}
