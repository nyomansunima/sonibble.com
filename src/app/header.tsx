import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/components/ui/button'

interface Menu {
  label: string
  path: string
}

const navMenus: Menu[] = [
  { label: 'How it works', path: '/#how-it-works' },
  { label: 'Benefits', path: '/#benefits' },
  { label: 'Services', path: '/#services' },
  { label: 'Works', path: '/#works' },
  { label: 'Pricing', path: '/#pricing' },
  { label: 'FAQs', path: '/#faqs' },
]

export default function Header() {
  return (
    <header className="flex items-center w-full px-16 border-b border-border py-3 justify-between">
      <Link href={'/'}>
        <Image
          src={'/images/logo.png'}
          width={56}
          height={56}
          alt="Sonibble Logo"
          quality={10}
        />
      </Link>

      <nav className="flex items-center">
        <ul className="list-none flex items-center gap-8">
          {navMenus.map((menu, i) => (
            <li className="" key={i}>
              <Link href={menu.path}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center">
        <Button variant={'outline'}>Login Now</Button>
      </div>
    </header>
  )
}
