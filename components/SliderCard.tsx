import React from 'react'

const SliderCard = ({ title, parag, image}: {title:string; parag:string; image:string;}) => {
  return (
    <div>
        {title}
        {parag}
        <img src={image} alt="" />
        {image}
    </div>
  )
}

export default SliderCard