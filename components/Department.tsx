"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import { RiInstagramLine } from "react-icons/ri";

export function ThreeDCardDemo({title, desc, image, instalink} : {title?:string; desc?:string; image?:string; instalink?:string}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 mb-5 flex flex-col justify-between h-[550px] relative group/card   border-black/[0.1] w-auto  2xl:w-[40rem] lg:w-[32rem] rounded-xl p-5 border  ">
        <CardItem
          translateZ="50"
          className="text-4xl text-university-yellow font-bold "
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="parag mt-2 "
        >
          {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full h-full mt-4">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-full max-h-[330px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
            translateZ={20}
            as="button"
            className="p-2 rounded-full bg-university-yellow  text-white text-xs font-bold"
          >
            <a href={instalink} target="_blank">
              <RiInstagramLine color='white' size={25} />
            </a>
            
          </CardItem>
        
      </CardBody>
    </CardContainer>
  );
}
