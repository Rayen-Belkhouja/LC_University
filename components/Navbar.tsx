"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '@/constants'
import { MovingBorderDemo } from './MovingBorderButton'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const [activeLink, setActiveLink] = useState('Home');

  const handleClick = (label: string) => {
    setActiveLink(label);
  };


  return (
    <nav className=' lg:px-[100px] md:px-[50px] px-[15px]  h-[65px] flex items-center justify-between shadow-lg fixed top-0 left-0 right-0 bg-white z-50'>
      <Link href="/">
        <Image src="/logo.png" alt='logo' width={40} height={60}/>
      </Link>
      <ul className='flex gap-10 '>
        {NavLinks.map((link) => (
          <Link href={link.href} key={link.key} className='hover:text-university-yellow font-semibold lg:block hidden'>
            {link.label}
          </Link>
        ))}
      </ul>
      <div className='flex gap-5 items-center '>
        <div>
          <GiHamburgerMenu size={30} className='text-university-yellow cursor-pointer lg:hidden' />

        </div>
        <a href="mailto:rayen.belkhoujaa@gmail.com">
          <MovingBorderDemo />
        </a>
      </div>

    </nav>
  )
}

export default Navbar