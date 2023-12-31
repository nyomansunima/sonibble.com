import Image from 'next/image'

export default function ProcessSection() {
  return (
    <section className="flex px-6">
      <div className="flex bg-gradient-to-b from-[#FFFFFF] to-[#F5F0FF] rounded-3xl mx-auto py-48">
        <div className="container mx-auto laptop:px-16 px-5">
          <div className="flex gap-28">
            <h2 className="text-7xl font-bold !leading-tight w-4/12">
              Request, Create & Launch.
            </h2>
            <h5 className="text-3xl font-bold !leading-snug flex-1">
              The easier way to create your own website, landing page,
              e-commerce with the best team that handle everything for you. We
              provide the best solutions for every business to stand out.
              Subscribe then start working on your own projects.
            </h5>
          </div>
          <div className="flex mt-52 gap-24 items-center">
            <picture className="relative w-5/12 h-[651px] rounded-2xl overflow-hidden">
              <Image
                src={'/images/service-process.png'}
                alt="Process how it works"
                fill
                className="object-cover"
              />
            </picture>
            <ol className="flex flex-col gap-16 w-6/12 text-2xl font-bold !leading-snug list-decimal">
              <li>
                Subscribe to a plan & request as many web design as you'd like.
              </li>
              <li>
                Receive your design within a few business days on average,
                Monday to Friday.
              </li>
              <li>We'll revise the designs until you're 100% satisfied.</li>
              <li>Launch your website to powering your business.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
