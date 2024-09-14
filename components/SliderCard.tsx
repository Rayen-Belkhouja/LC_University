import Image from 'next/image';
import React from 'react'

const SliderCard = ({ desc1, pic1, pic2, desc2, desc3, pic3 }: {
  desc1?: string;
  pic1?: string;
  pic2?: string;
  history?: string;
  desc2?: string;
  opportunity?: string;
  desc3?: string;
  pic3?: string;

}) => {
  return (
    <section className='flex flex-col gap-10'>
      <div className='flex flex-col gap-3'>
        <p className='parag'>{desc1}</p>
        <div className='flex gap-5 overflow-hidden w-full'>
          <div>
            <img src={pic1} alt="picture" className='rounded-lg' />

          </div>
          <div>
            <img src={pic2} alt="picture" className='rounded-lg'/>
          </div>

        </div>
      </div>
      <div>
       <h2 className='text-2xl font-lato font-bold'>History</h2>
        <p>{desc2}</p>
      </div>
      <div>
        <h2 className='text-2xl font-lato font-bold'>Opportunity it has</h2>
        <p>{desc3}</p>
      </div>
      <div>
        <img src={pic3} alt="taswira 3" />
      </div>



    </section>
  )
}

export default SliderCard