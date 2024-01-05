import { Button } from '~/components/ui/button'

const services: string[] = [
  'Websites',
  'Landing page',
  'Product Page',
  'Ecommerce',
  'Webflow',
  'Shopify',
  'Framer',
  'Custom Websites',
  'Branding',
  'Website Design',
  'SEO',
  'Migrations',
]

export default function ServicesSection() {
  return (
    <section className="flex bg-[#FAFBFF]" id="services">
      <div className="flex flex-col items-center container mx-auto laptop:px-20 px-5 laptop:py-80 py-20">
        <h2 className="text-8xl font-bold font-heading !leading-tight text-center w-10/12">
          We ship your web & business.
        </h2>
        <p className="text-xl !leading-relaxed text-center w-6/12 mt-10">
          Everything you need to start your business to create your own website,
          e-commerce, landing pages and seo.
        </p>

        <div className="flex flex-wrap mt-20 gap-6 w-10/12 justify-center">
          {services.map((item, i) => (
            <Button
              key={i}
              variant={'outline'}
              size={'md'}
              className="bg-transparent"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
