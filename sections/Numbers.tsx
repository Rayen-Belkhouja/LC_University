import { GlobeDemo } from '@/components/GlobeContainer';
import { MovingBorderDemo } from '@/components/MovingBorderButton'
import React from 'react'
import { FaListCheck } from "react-icons/fa6";

const Numbers = () => {
    return (
        <section className=' max-container md:ml-10 flex-col flex items-center lg:gap-10 lg:flex-row '>
            <div className='flex-1 flex flex-col gap-10'>
                <div className='flex items-center gap-5'>
                    <h2 className='semiheader text-university-yellow'>Our Reality Check</h2>
                </div>
                <p className='text-black parag' >With over 150 approvals, there’s strong support for the initiatives. More than 20 international relations have been established, connecting with a global network. These achievements highlight the growing influence and commitment to building meaningful global connections.</p>
                <div className='flex'>
                    <div className='flex flex-1 flex-col gap-2'>
                        <h2 className='semiheader text-gray-700'>150+</h2>
                        <p className='text-black'>Approvals</p>
                    </div>
                    <div className='flex flex-1 flex-col gap-2'>
                        <h2 className='semiheader text-gray-700'>20+</h2>
                        <p className='text-black'>International Relations</p>
                    </div>
                </div>
                <div>
                    <a href="mailto:rayen.belkhoujaa@gmail.com">
                        <MovingBorderDemo />
                    </a>
                </div>
            </div>
            <div className='flex-1 w-full'>
                <GlobeDemo />
            </div>
        </section>
    )
}

export default Numbers
