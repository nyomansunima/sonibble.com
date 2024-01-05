import Image from 'next/image'

interface Interview {
  avatar: string
  username: string
  fullName: string
  reviews: string
  tags: string
}

const interviews: Interview[] = [
  {
    avatar: '/images/reviews/1.png',
    fullName: 'Martin Rosser',
    username: '@martinnross',
    reviews: 'Growing my business. @sonibble really help we moving forward.',
    tags: '#worthy  #webdesign  #agency',
  },
  {
    avatar: '/images/reviews/2.png',
    fullName: 'Devon Lane',
    username: '@devonlane145',
    reviews: 'Great design, what i loved is they working pretty fast.',
    tags: '#worthy  #agency  #framer',
  },
  {
    avatar: '/images/reviews/3.png',
    fullName: 'Cameron Williamson',
    username: '@camerwill',
    reviews:
      'Never going back to looking freelancers. Everything packages into a services.',
    tags: '#website  #shopify',
  },
  {
    avatar: '/images/reviews/4.png',
    fullName: 'Darlene Robertson',
    username: '@darlenerobt',
    reviews: 'You can make it simpler. You working on a great place.',
    tags: ' #agency  #landingpage',
  },
  {
    avatar: '/images/reviews/5.png',
    fullName: 'Eleanor Pena',
    username: '@eleanorp',
    reviews: 'Everything very simple, no bullshits. Working perfectly.',
    tags: '#worthy #agency',
  },
  {
    avatar: '/images/reviews/6.png',
    fullName: 'Jacob Jones',
    username: '@jacob.jnos',
    reviews:
      '@sonibble won the hearts. We decided to work with amazing agency.',
    tags: '#webflow #startup',
  },
]

interface InterviewItemProps {
  interview: Interview
}

function InterviewItem({ interview }: InterviewItemProps) {
  return (
    <div className="flex flex-col border border-border rounded-xl p-5">
      <div className="flex gap-4 items-center">
        <Image
          src={interview.avatar}
          alt={interview.fullName}
          width={40}
          height={40}
          quality={10}
        />
        <div className="flex flex-col">
          <h5 className="text-lg font-medium">{interview.fullName}</h5>
          <span className="text-sm text-gray-600">{interview.username}</span>
        </div>
      </div>
      <p className="mt-6">{interview.reviews}</p>
      <p className="mt-5">{interview.tags}</p>
    </div>
  )
}

export default function ReviewSection() {
  return (
    <section className="flex">
      <div className="flex flex-col container laptop:px-20 px-5 items-center mx-auto py-60">
        <h2 className="text-7xl font-bold !leading-tight text-center w-8/12">
          It’s “you’ll never go back” better
        </h2>
        <p className="flex text-center w-8/12 text-xl !leading-relaxed mt-10">
          Replaces unreliable freelancers and expensive agencies for one flat
          monthly fee, with designs delivered so fast that it will blow your
          mind.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-48">
          {interviews.map((interview, i) => (
            <InterviewItem interview={interview} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
