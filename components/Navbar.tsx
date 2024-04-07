"use client"

import { navLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Navbar = () => {
  const pathname = usePathname();
  
  return (
    
    <nav className="flex items-center justify-between p-7 fixed top-0 nav-index w-full bg-light-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <Link href="/">
        <p className="h1-bold px-">Todorovic<span className="text-primary-500">Partner</span></p>
      </Link>

      <div className="flex pr-10">
        {navLinks.map((item) => {
          const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

          return (
            <Link key={item.label} href={item.route} className={`pl-10 base-semibold ${isActive ? "text-primary-500" : ""}`}>
              <p>{item.label}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  )
}

export default Navbar