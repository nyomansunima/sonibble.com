import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '../shared-metadata'
import HeroSection from './hero-section'
import ProcessSection from './process-section'
import BenefitsSection from './benefits-section'
import ServicesSection from './services-section'
import PricingSection from './pricing-section'
import FAQSection from './faq-section'
import ContactSection from './contact-section'
import ActionToast from './action-toast'

export const metadata: Metadata = {
  title: 'Unlimited Web Design Services | Sonibble',
  description:
    'Web design services for everyone and businesses. Unlimited design revision, simple pricing, no hidden fees',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Unlimited Web Design Services | Sonibble',
    description:
      'Web design services for everyone and businesses. Unlimited design revision, simple pricing, no hidden fees',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Unlimited Web Design Services | Sonibble',
    description:
      'Web design services for everyone and businesses. Unlimited design revision, simple pricing, no hidden fees',
  },
}

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
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
