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
        “I went to <Highlight>India</Highlight> with my classmate, where we made friends from different countries, learned a lot about Indian culture, and gained valuable experience from the IT internship we completed.”
      </p>
    ),
  },
  {
    id: 1,
    name: "Aziz Ben Nessir",
    designation: "OGV",
    content: (
      <p>
        “<Highlight>Bursa</Highlight> was a beautiful city that I plan to revisit in the winter. I met wonderful people in Turkey, including my host, with whom I’m still in contact.”
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
  
  
  
];
