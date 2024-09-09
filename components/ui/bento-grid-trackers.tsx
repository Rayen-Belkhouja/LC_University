import { cn } from "@/lib/utils";

export const BentoGridTrackers = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItemTrackers = ({
  className,
  title,
  description,
  image,
  link,

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string
  link?: string
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div>
        <div className="bg-black absolute top-0 left-0 h-full w-full z-30 opacity-30 rounded-xl" />
        <img src={image} alt="" className="absolute top-0 left-0 rounded-xl h-full w-full object-cover z-20" />
        <div className="group-hover/bento:translate-x-2 transition duration-200 absolute bottom-10 z-40">
          <div className="semiheader mb-2 mt-2 text-white">
            {title}
          </div>
          <div className="parag text-gray-300">
            {description}
          </div>
          <div>
            <a href={link} target="_blank" className="font-bold mt-2 underline text-yellow-200">Visit</a>
          </div>
        </div>

      </div>

    </div>
  );
};
