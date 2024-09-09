import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { footerLinks } from '@/constants';
import Link from 'next/link';



const Footer = () => {

  
  
  return (
    <footer className='max-container flex flex-col pb-10 shadow-lg gap-10'>
      <div className='flex justify-between  md:flex-row flex-col gap-24'>
        <div className='flex-[30%] flex flex-col gap-5 '>
          <div className='flex items-center gap-2'>
            <img src="/logo.png" alt="" className='w-[40px] h-[50px]' />
            <h2 className='text-xl font-bold'>LC University</h2>
          </div>
          <p>Official internal website for AIESEC in Tunisia at Manar, LC University—exclusively for active members.</p>
          <div className='flex gap-2'>
            <a href="">
              <div className='p-2 bg-university-yellow w-fit rounded-full'>
                <RiInstagramLine color='white' size={25} />
              </div>
            </a>
            <a href="">
              <div className='p-2 bg-university-yellow w-fit rounded-full'>
                <MdOutlineEmail color='white' size={25} />
              </div>
            </a>
          </div>
        </div>
        <div className='flex-[70%]  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center  gap-16'>
          {footerLinks.map((link) => (
            <div key={link.id} className=' flex flex-col gap-5 '>
              <h2 className='text-xl font-semibold' key={link.id}>{link.title}</h2>
              <div className='flex flex-col'>

                {link.contents.map((content) => (
                  <Link href={content.link} key={content.name} className='text-gray-600 text-[15px]'>
                      {content.name}
                  </Link>

                ))}

              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-gray-300 w-full h-[1px]' />
      <div className='flex justify-between'>
        <p className='text-gray-600 text-sm'>© Copyright. All Rights Reseved</p>
        <p className='text-gray-600 text-sm'>Made by Rayen Belkhouja</p>
      </div>
    </footer>
  )
}

export default Footer