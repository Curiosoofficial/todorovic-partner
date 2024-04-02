import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 fixed top-0 z-50 w-full bg-light-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <Link href="/">
        <p className="h1-bold px-">Todorovic<span className="text-primary-500">Partner</span></p>
      </Link>

      <div className="flex pr-10">
        {navLinks.map((item) => (
          <Link key={item.label} href={item.route} className="pl-10 base-semibold">
            <p>{item.label}</p>
        </Link>
        ))}

      </div>
    </nav>
  )
}

export default Navbar