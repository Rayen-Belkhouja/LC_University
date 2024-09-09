import { InfiniteMovingCardsDemo } from '@/components/AlumniLoop'
import React from 'react'

const Alumni = () => {
  return (
    <section  className='max-container mt-10'  id='alumnitestimonials'>
      <h1 className='text-center semiheader text-university-yellow mb-4'>
        Our Alumni's Testimonials
      </h1>
      <div>
        <InfiniteMovingCardsDemo />
      </div>
    </section>
  )
}

export default Alumni