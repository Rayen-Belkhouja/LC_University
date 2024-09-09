import { Values } from '@/constants'
import Image from 'next/image'
import React from 'react'

const CultureAndValues = () => {
  return (
    <section className='max-container flex md:flex-row flex-col gap-16 mt-10'>
      <div className='flex-[40%] flex items-center justify-center relative'>
        <div className='bg-black absolute rounded-xl opacity-30 top-0 left-0 w-full h-full' />
        <Image src='/values.gif' alt='cultureAndValues' width={500} height={500} className='rounded-xl h-full w-full object-cover' />
      </div>
      <div className='flex-[60%] '>
        <ul className='grid sm:grid-cols-2  gap-y-10 gap-x-8 h-full grid-cols-1'>
          {Values.map((value) => (
            <div key={value.id} className='flex flex-col gap-2 sm:items-start items-center sm:my-0 my-5'>
              <div className='bg-university-yellow flex items-center justify-center rounded-full w-20 h-20'>
                <Image src={value.image} alt={value.title} width={80} color='white' height={80} className='h-14 w-10 '  />
              </div>
              <h2 className='thirdheader' >
                {value.title}
              </h2>
              <div className='parag'>
                {value.desc}

              </div>

            </div>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CultureAndValues