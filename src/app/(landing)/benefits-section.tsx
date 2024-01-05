import { Button } from '~/components/ui/button'

export default function BenefitsSection() {
  return (
    <section className="flex">
      <div className="flex flex-col items-center container mx-auto laptop:px-20 px-5">
        <h2 className="text-7xl font-bold !leading-tight text-center w-9/12">
          Membership benefits you really need.
        </h2>
        <p className="text-xl !leading-relaxed text-center w-7/12 mt-10">
          Perks so good you'll never need to go anywhere else for your web
          design. Seriously.
        </p>
        <div className="flex justify-center mt-16">
          <Button variant={'outline'} size={'md'}>
            See plans
            <i className="fi fi-sr-network-cloud" />
          </Button>
        </div>
      </div>
    </section>
  )
}
