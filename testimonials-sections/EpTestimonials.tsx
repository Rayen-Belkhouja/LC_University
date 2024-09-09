import { CardStackDemo } from '@/components/EpCardsTestimonials'
import React from 'react'

const EpTestimonials = () => {
  return (
    <section id='epstestimonials' className='max-container flex md:flex-row flex-col gap-10 mt-20'>
        <div className='flex-1'>
            <CardStackDemo />
        </div>
        <div className='flex-1 flex flex-col gap-10'>
            <h1 className='semiheader text-university-yellow'>
            Our EPs Testimonials
            </h1>
            <p>Our EPs (Exchange Participants) testimonials offer valuable insights into their experiences and personal growth. These testimonials highlight the impact of the programs, showcasing how participants have gained new skills, broadened their perspectives, and made lasting connections. By sharing their stories, EPs provide a glimpse into the transformative journey and the positive outcomes of engaging in our initiatives.</p>
        </div>
    </section>
  )
}

export default EpTestimonials