'use client'

import Link from 'next/link'

export default function Footer() {
  const creditYear = new Date().getFullYear()

  return (
    <footer className="flex flex-col border-t border-border">
      <div className="flex flex-row px-5 laptop:px-16 py-9 font-medium justify-between">
        <div className="flex items-center">
          <span>Copyright &copy; {creditYear}</span>
        </div>

        <div className="flex items-center gap-10">
          <ul className="flex items-center list-none gap-8">
            <li className="">
              <Link href={'/privacy'}>Privacy</Link>
            </li>
            <li className="">
              <Link href={'/terms'}>Terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
