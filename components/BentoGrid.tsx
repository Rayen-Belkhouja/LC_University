import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGridItemTrackers, BentoGridTrackers } from "./ui/bento-grid-trackers";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="mx-auto auto-rows-[25rem] md:auto-rows-[25rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={item.className}
          image={item.image}
        />
      ))}
    </BentoGrid>
  );
}

export function BentoGridSecondDemoForTrackers() {
  return (
    <BentoGridTrackers className="mx-auto auto-rows-[25rem] md:auto-rows-[25rem]">
      {itemsTrackers.map((item, i) => (
        <BentoGridItemTrackers
          key={i}
          title={item.title}
          description={item.description}
          className={item.className}
          image={item.image}
          link={item.link}
          id={item.id}
        />
      ))}
    </BentoGridTrackers>
  );
}

const itemsTrackers = [
  {
    title: "UNIVERSITY Dashboard",
    description: "The AIESEC UNIVERSITY Dashboard is designed to showcase our overall performance and growth toward achieving our LC goals. It provides an overview of the current state of the LC, including membership and partnerships with our faculties. The dashboard also highlights the OC experiences we've had during the term. Additionally, it features our LC activities such as meetings, bootcamps, and conferences. ",
    image: '/trackers/university-dashboard.png',
    className: "md:col-span-3 overflow-hidden",
    link: "https://docs.google.com/spreadsheets/d/1jFdLRVFQCYIsc-YySA69M_x-2JFtvTMzA_2qZXSQrL4/edit?usp=sharing",
    id:"university-dashboard",
  },
  {
    title: "University Contact List",
    description: "This is the official updated version of the Contact List for the Membership of LC University for the term 24.25. You can find it also in the official facebook group of the LC “UN’s HQ”",
    image: '/soft-skills.gif',
    className: "md:col-span-3 overflow-hidden",
    link: "https://docs.google.com/spreadsheets/d/1VlGIWLppbZ1kuHBDMJ2Wif-JNT2ts3aKQj8tWCFPe54/edit?copiedFromTrash=&gid=0#gid=0",
    id:"university-contact-list",
  },
  
];

const items = [
  {
    title: "Leadership Development Opportunities",
    description: "Creating environments for transformative leadership experiences that build confidence and inspire innovation.",
    image: '/leadership-development.gif',
    className: "md:col-span-2 overflow-hidden",
  },
  {
    title: "Soft-skills",
    description: "Building soft skills to improve communication, teamwork, and problem-solving.",
    image: '/soft-skills.gif',
    className: "md:col-span-1 overflow-hidden",
  },
  {
    title: "Networking",
    description: "Creating opportunities for youth to meet, learn, and grow together through networking.",
    image: '/networking.gif',
    className: "md:col-span-1 overflow-hidden",
  },
  {
    title: "Career Boost",
    description:
      "Providing a career boost through valuable opportunities for growth and development.",
    image: '/careerboost.gif',
    className: "md:col-span-2 overflow-hidden",
  },
  
];
