import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='h-[91vh] relative'>
            <div className='absolute left-0 right-0 top-0 h-full bg-black z-10 opacity-[40%]' />
            <div className='absolute left-0 right-0 top-0 h-full'>
                <Image src='/departments.gif' alt='hero' fill className='object-cover' />
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-5'>
            <h1 className='header text-white -mt-5'>How We <span className='text-university-yellow'>Function</span></h1>
            </div>
        </section>
    )
}

export default Hero