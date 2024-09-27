"use client";
import { CardStack } from "../components/ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[20rem]  flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Malak Ben Mabrouk",
    designation: "OGTa",
    content: (
      <p>
        I went to <Highlight>India</Highlight> with my classmate, where we made friends from different countries, learned a lot about Indian culture, and gained valuable experience from the IT internship we completed.
      </p>
    ),
  },
  {
    id: 1,
    name: "Aziz Ben Nessir",
    designation: "OGV",
    content: (
      <p>
        <Highlight>Bursa</Highlight> was a beautiful city that I plan to revisit in the winter. I met wonderful people in Turkey, including my host, with whom I’m still in contact.
      </p>
    ),
  },
  {
    id: 2,
    name: "Mariam Khan",
    designation: "IGV Global Classroom",
    content: (
      <p>
        I <Highlight>arrived in Tunis</Highlight> on August 20th, unsure of what to expect. Having lived in <Highlight>Pakistan and Germany,</Highlight> Tunisia strikes me as a balanced blend of religion and modernity. The locals have been very helpful despite the language barrier. Through AIESEC, I’ve explored Tunis, Bizerte, and Kelibia, and I’m excited to teach Tunisian kids as preparation for my future as an English teacher.
      </p>
    ),
  },
  {
    id: 3,
    name: "Jihed Boukhris",
    designation: "oGTe LC Chandigarh",
    content: (
      <p>
Last year, I had the incredible opportunity to teach English in <Highlight>India </Highlight> through an AIESEC exchange program, and it was unforgettable. I loved connecting with students, sharing knowledge, and embracing the vibrant culture. The experience was both enriching and fun, helping me grow personally. I highly recommend it!
</p>
    ),
  },
  {
    id: 4,
    name: "ali jemai",
    designation: "oGV",
    content: (
      <p>
        Volunteering in <Highlight>Egypt</Highlight> with AIESEC was an incredible experience beyond just teaching English and French to children. I explored the country, met amazing people, and enjoyed a rich cultural exchange. The friendships I made and the memories I created left a lasting impact on me.
</p>
    ),
  },
  
  
  
];
