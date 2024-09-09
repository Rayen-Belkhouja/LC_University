import { DirectionAwareHoverDemo } from '@/sections/EbContainer'
import EbHero from '@/sections/EbHero'
import React from 'react'

const EB = () => {
  return (
    <div>
      <EbHero />
      <div className='max-container'>
        <DirectionAwareHoverDemo />
      </div>
    </div>
  )
}

export default EB