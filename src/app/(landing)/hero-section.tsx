import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default function HeroSection() {
  return (
    <section className="flex flex-col relative" id="home">
      {/* color background */}
      <svg
        width="1224"
        height="455"
        viewBox="0 0 1224 455"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-20 inset-x-20"
      >
        <path
          d="M990.5 1V58C990.5 68.4934 999.007 77 1009.5 77H1089C1099.49 77 1108 85.5066 1108 96V250C1108 260.493 1099.49 269 1089 269H1021C1010.51 269 1002 277.507 1002 288V309C1002 319.493 1010.51 328 1021 328H1223M913 372.5H1074.5C1084.44 372.5 1092.5 380.559 1092.5 390.5V390.5C1092.5 400.441 1084.44 408.5 1074.5 408.5H674C663.507 408.5 655 417.007 655 427.5V435C655 445.493 663.507 454 674 454H1190M108.5 252V379.5C108.5 389.993 117.007 398.5 127.5 398.5H200C210.493 398.5 219 407.007 219 417.5V421C219 431.493 210.493 440 200 440H20C9.50658 440 1 431.493 1 421V302C1 291.783 9.28273 283.5 19.5 283.5V283.5C29.7173 283.5 38 291.783 38 302V372.5"
          stroke="#F1EFF7"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <span className="absolute h-[400px] w-[400px] rounded-full bg-[#FFCFCF] blur-3xl top-20 left-56"></span>
      <span className="absolute h-[400px] w-[400px] rounded-full bg-[#E2BDFF] blur-3xl right-[25%] top-28"></span>

      <div className="container mx-auto laptop:px-20 px-5 flex flex-col items-center py-48 relative z-50">
        <h2 className="text-7xl font-bold !leading-tight text-center">
          Your unlimited web design agency for business.
        </h2>
        <p className="text-xl !leading-relaxed text-center w-7/12 mt-10">
          Web design subscriptions for everyone and businesses. Unlimited
          request, no hidden fees and you won, we loved.
        </p>
        <div className="flex items-center mt-16 justify-center gap-6">
          <Button asChild size={'md'}>
            <Link href={'/signup'}>
              Get started
              <i className="fi fi-sr-paper-plane" />
            </Link>
          </Button>
          <Button asChild size={'md'} variant={'outline'}>
            <Link href={'/#pricing'}>
              See plans
              <i className="fi fi-sr-network-cloud" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
