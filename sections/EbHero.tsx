import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-[91vh] relative'>
      <div className='absolute left-0 right-0 top-0 h-full bg-black z-10 opacity-40' />
      <div className='absolute left-0 right-0 top-0 h-full'>
        <Image src='/eb/ebedited.gif' alt='hero' fill className='object-cover'/>
      </div>
      <div className='absolute bottom-20 left-10 max-w-[700px] z-20 flex flex-col pr-10  gap-5'>
        <h1 className='header font-extrabold text-white '>EB TRIDEN<span className='text-university-yellow'>'Z</span></h1>
        <p className='text-gray-200 parag'>"Triden'Z" merges the strength of the Trident with the unity of the Triquetra, representing our Generation Z spirit. The DNA symbol beneath the spear signifies our inherent bond with this community. The inclusion of "Z" proudly marks our belonging to Generation Z. The number 37 reflects spiritual harmony and interconnectedness. Together, Triden’Z stands for strength, unity, and a commitment to preserving our generation's legacy.
        </p>
      </div>
    </section>
  )
}

export default Hero