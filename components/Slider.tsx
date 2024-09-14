"use client";
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
    content: <SliderCard desc1="ULDS stands for 'University Leadership Development Seminar,' and it is our LC's first local conference of the term, typically held in February. The conference is primarily focused on integrating the new members recruited in February. It also serves as the occasion for the EB to present their goals for the first semester. " pic1='/hero.gif' pic2="/hero.gif" history='History' desc2="ULDS is the oldest local conference in our LC, with over 15 years since its first edition. Over the years, it has become a key tradition, deeply embedded in the rituals and culture of our LC. ULDS has long been recognized as a major factor in energizing our membership, boosting morale and productivity. There's no better way to start the term than with a local conference that brings everyone together and fosters connections with our newest members." desc3="ULDS is the first of many internal opportunities in our LC for self-development. It is typically organized by an Organizing Committee, offering a chance to develop a wide range of skills, from sales and content creation to money and budget management. Like any AIESEC conference, it also provides an opportunity for our members to connect, bond, and network with new people. " pic3="/hero.gif" />,
  },
  {
    category: "National Conference",
    title: "TULDS",
    src: "/hero.gif",
    content: <SliderCard desc1="hello" pic1="/hero.gif" pic2="" history='/hero.gif' desc2=""  desc3="" pic3="/testimonials/hero/1.gif" />,
  },
  {
    category: "EwA Initiative",
    title: "Youth Speak Forum",
    src: "/hero.gif",
    content: <SliderCard desc1="hello" pic1='this is parag' pic2="" history='/hero.gif' desc2=""  desc3="" pic3="" />,
  },

  {
    category: "iGV Project",
    title: "HAVANA",
    src: "/hero.gif",
    content: <SliderCard desc1="hello" pic1='this is parag' pic2="" history='/hero.gif' desc2=""  desc3="" pic3="" />,
  },
  {
    category: "iGV Project",
    title: "IMPACT",
    src: "/hero.gif",
    content: <SliderCard desc1="hello" pic1='this is parag' pic2="" history='/hero.gif' desc2=""  desc3="" pic3="" />,
  },
  {
    category: "National Conference",
    title: "Lead & Lead",
    src: "/hero.gif",
    content: <SliderCard desc1="hello" pic1='this is parag' pic2="" history='/hero.gif' desc2=""  desc3="" pic3="" />,
  },
  {
    category: "Local Conference",
    title: "LMS",
    src: "/hero.gif",
    content: <SliderCard desc1="hello" pic1='this is parag' pic2="" history='/hero.gif' desc2=""  desc3="" pic3="" />,
  },
  {
    category: "BD Project",
    title: "Cypher Out",
    src: "/hero.gif",
    content: <SliderCard desc1="hello" pic1='this is parag' pic2="" history='/hero.gif' desc2="" desc3="" pic3="" />,
  },
  {
    category: "National Conference",
    title: "Nat'Co",
    src: "/hero.gif",
    content: <SliderCard desc1="hello" pic1='this is parag' pic2="" history='/hero.gif' desc2=""  desc3="" pic3="" />,
  },
  {
    category: "Local Conference",
    title: "ULC",
    src: "/hero.gif",
    content: <SliderCard desc1="hello" pic1='this is parag' pic2="" history='/hero.gif' desc2="" opportunity="" desc3="" pic3="" />,
  },

  
];
