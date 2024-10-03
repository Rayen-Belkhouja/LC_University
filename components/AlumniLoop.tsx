"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}



const testimonials = [
  {
    testimonial:
      "Represents wisdom, inequinty, intelligence and patience. These are the personality traits I discovered during my journey in AIESEC and they did develop the right way.",
    name: "Med Aziz Boukhris",
    position: "LCP 21.22",
    image:"/testimonials/alumnispdp/boukhris.png",
  },
  {
    testimonial:
      "Dragons in Chinese culture symbolize POWER, GOOD LUCK, and STRENGTH. I discovered the energy of the Dragon during my AIESEC journey, I started developing this energy because I genuinely believe that Dragon energy represent who I am.",
    name: "Skander Bouricha",
    position: "LCVP Marketing",
    image:"/testimonials/alumnispdp/ska.png",
  },
  

];
