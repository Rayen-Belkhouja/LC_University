import { InfiniteMovingPartnersDemo } from '@/components/PartnersLoops'
import { Partner } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Partners = () => {
    return (
        <section className='max-container flex gap-10 flex-wrap justify-center'>
            <InfiniteMovingPartnersDemo />
        </section>
    )
}

export default Partners