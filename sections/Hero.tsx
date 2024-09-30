import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-[91vh] relative'>
      <div className='absolute left-0 right-0 top-0 h-full bg-black z-10 opacity-[60%]' />
      <div className='absolute left-0 right-0 top-0 h-full'>
        <Image src='/hero.gif' alt='hero' fill className='object-cover' />
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-5'>
        <h1 className='header text-white text-center '>UNIVERSITY <span className='text-university-yellow whitespace-nowrap font-amiri font-extrabold'> ما يهزك ريح</span></h1>
        <p className='text-center parag text-gray-200 '>LC UNIVERSITY, established in 11/11/1987 in Campus El Manar. This year marks the 37th year of its existence as part of AIESEC in Tunisia. It is located in "FST" in Campus El Manar.</p>
      </div>
    </section>
  )
}

export default Hero