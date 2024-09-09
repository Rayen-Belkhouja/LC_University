import { ThreeDCardDemo } from '@/components/Department'
import { departments } from '@/constants'
import React from 'react'

const DepartmentsContainer = () => {
    return (

        <section className='max-container mt-16 pb-24'>
            <div className='grid mx-auto items-center justify-center xl:grid-cols-2 grid-cols-1 gap-5'>
                {departments.map((department) => (
                    <div  key={department.id} id={department.id}>
                        <ThreeDCardDemo key={department.id} title={department.title} instalink={department.instalink} image={department.image} desc={department.desc} />
                    </div>

                ))}
            </div>

        </section>
    )
}

export default DepartmentsContainer