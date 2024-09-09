"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import SliderCard from "./SliderCard";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="semiheader lg:px-[100px] md:px-[50px] px-[15px] text-university-yellow">
      Discover the Yearly routines of our LC
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "Local Conference",
    title: "ULDS",
    src: "/hero.gif",
    content: <SliderCard title="hello" parag='this is parag' image='/hero.gif' />,
  },
  {
    category: "National Conference",
    title: "TULDS",
    src: "/hero.gif",
    content: <SliderCard title="hello2" parag='this is parag' image='/hero.gif' />,
  },
  {
    category: "EwA Initiative",
    title: "Youth Speak Forum",
    src: "/hero.gif",
    content: <SliderCard title="hello3" parag='this is parag' image='/hero.gif' />,
  },

  {
    category: "iGV Project",
    title: "HAVANA",
    src: "/hero.gif",
    content: <SliderCard title="hello" parag='this is parag' image='/hero.gif' />,
  },
  {
    category: "iGV Project",
    title: "IMPACT",
    src: "/hero.gif",
    content: <SliderCard title="hello" parag='this is parag' image='/hero.gif' />,
  },
  {
    category: "National Conference",
    title: "Lead & Lead",
    src: "/hero.gif",
    content: <SliderCard title="hello" parag='this is parag' image='/hero.gif' />,
  },
  {
    category: "Local Conference",
    title: "LMS",
    src: "/hero.gif",
    content: <SliderCard title="hello" parag='this is parag' image='/hero.gif' />,
  },
  {
    category: "BD Project",
    title: "Cypher Out",
    src: "/hero.gif",
    content: <SliderCard title="hello" parag='this is parag' image='/hero.gif' />,
  },
  {
    category: "National Conference",
    title: "Nat'Co",
    src: "/hero.gif",
    content: <SliderCard title="hello" parag='this is parag' image='/hero.gif' />,
  },
  {
    category: "Local Conference",
    title: "ULC",
    src: "/hero.gif",
    content: <SliderCard title="hello" parag='this is parag' image='/hero.gif' />,
  },

  
];
