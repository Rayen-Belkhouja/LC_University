import Alumni from '@/testimonials-sections/Alumni'
import EpTestimonials from '@/testimonials-sections/EpTestimonials'
import { ImagesSliderDemoTestimonials } from '@/testimonials-sections/Hero'
import ParallexPictures from '@/testimonials-sections/ParallexPictures'
import React from 'react'

const Testimonials = () => {
  return (
    <main>
      <ImagesSliderDemoTestimonials />
      <Alumni />
      <EpTestimonials />
      <ParallexPictures />
    </main>
  )
}

export default Testimonials