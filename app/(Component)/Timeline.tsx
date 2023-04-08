"use client";

import clsx from "clsx";
import HistoryCard1 from "./HistoryCard1";
import HistoryCard from "./HistoryCard";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import jiangnan from "@/public/history/jiangnan.jpg";
import kangqing from "@/public/history/kangqing.jpeg";
import kangying from "@/public/history/kangying.jpeg";
import xinhai from "@/public/history/xinhai.jpeg";
import biaoju from "@/public/history/biaoju.jpg";

interface TimelineItemProps {
  children: React.ReactNode;
  position: "left" | "right";
  description: string;
}

const TimelineItem = ({
  children,
  position,
  description,
}: TimelineItemProps) => {
  const isSmall = useMediaQuery({ query: "(min-width: 960px)" });

  let isLeft;
  let isRight;
  ///If samller than Small screen (960px), all items are put on the right side.
  if (isSmall) {
    isLeft = position === "left";
    isRight = position === "right";
  } else {
    isRight = true;
  }

  /// TailwindCSS className for Creating "after:" or "before:" pseudoElements to show the "Knot"
  /// (which attached at the right or left side of the children element) on the timeline
  const pseudoElClassNames = {
    left: [
      "after:content-['']",
      "after:absolute",
      "after:top-1/2",
      "after:w-7",
      "after:h-7",
      "after:bg-white",
      "after:dark:bg-black",
      "after:border-4",
      "after:border-slate-400",
      "after:rotate-45",
      "after:translate-y-[-50%]",
      "after:left-full",
      "after:translate-x-[-50%]",
      "after:rounded-full",
    ],
    right: [
      "before:content-['']",
      "before:absolute",
      "before:top-1/2",
      "before:w-7",
      "before:h-7",
      "before:bg-white",
      "before:dark:bg-black",
      "before:border-4",
      "before:border-slate-400",
      "before:rotate-45",
      "before:translate-y-[-50%]",
      "before:right-full",
      "before:translate-x-[50%]",
      "before:rounded-full",
    ],
  };
  const text = (
    <div
      className={clsx(
        "flex-1",
        isRight && "mr-10",
        isLeft && "ml-10",
        "font-sans",
        "min-h-screen"
      )}
    >
      <motion.span
        dangerouslySetInnerHTML={{ __html: description }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: "linear",
        }}
        viewport={{ once: true }}
      />
    </div>
  );

  return (
    <div
      className={clsx(
        "flex",
        isSmall ? "p-10" : "py-6 pr-6",
        isLeft && "justify-start",
        isRight && "justify-end",
        "relative"
      )}
    >
      {isRight && isSmall && text}
      <div
        className={clsx(
          isSmall ? "w-1/2" : "w-full",
          isLeft && "pr-10",
          isRight && isSmall ? "pl-10" : "pl-6",
          !isSmall && "ml-1",
          "h-[20rem]",
          isSmall && "sticky top-24"
        )}
      >
        <div
          className={clsx(
            pseudoElClassNames[isLeft ? "left" : "right"],
            isSmall && "mb-6"
          )}
        >
          {children}
        </div>
      </div>
      {isLeft && isSmall && text}
    </div>
  );
};

const des = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Adipiscing tristique risus nec feugiat in fermentum posuere. Porttitor leo a diam sollicitudin. Nulla facilisi cras fermentum odio. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Purus faucibus ornare suspendisse sed nisi. Nulla at volutpat diam ut venenatis tellus in.
<br/>
<br/>
Libero volutpat sed cras ornare arcu dui. Ornare aenean euismod elementum nisi quis. Arcu cursus vitae congue mauris rhoncus aenean. Pretium vulputate sapien nec sagittis aliquam. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Eget nunc lobortis mattis aliquam. Sed elementum tempus egestas sed. Sed arcu non odio euismod. Morbi tristique senectus et netus et malesuada fames ac turpis. In fermentum et sollicitudin ac orci. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Semper viverra nam libero justo laoreet sit.
<br/>
<br/>
Mattis enim ut tellus elementum sagittis vitae. Dolor purus non enim praesent. Mattis pellentesque id nibh tortor id aliquet. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Diam vulputate ut pharetra sit amet. At urna condimentum mattis pellentesque id. Nulla facilisi cras fermentum odio eu. Sed vulputate odio ut enim blandit volutpat maecenas. Nunc consequat interdum varius sit. Donec adipiscing tristique risus nec feugiat. In est ante in nibh mauris.`;

const Timeline = ({ dict }: { dict: any }) => {
  return (
    <section className="my-10">
      <div className="flex justify-center px-10">
        <h1 className="text-2xl xs:text-3xl lg:text-4xl font-sans">
          {dict.history.title}
        </h1>
      </div>
      <div className="w-full p-10 relative">
        <div className="absolute w-2 h-full bg-slate-400 sm:right-1/2 sm:translate-x-1/2 "></div>
        <AnimatePresence>
          <TimelineItem position="left" description={dict.history.origin}>
            <HistoryCard1 dict={dict} />
          </TimelineItem>
          <TimelineItem position="right" description={des}>
            <HistoryCard
              time={dict.history.events[0].year}
              event={dict.history.events[0].event}
              img={jiangnan}
              color="$blue300"
            />
          </TimelineItem>
          <TimelineItem position="left" description={des}>
            <HistoryCard
              time={dict.history.events[1].year}
              event={dict.history.events[1].event}
              img={kangqing}
              color="$yellow300"
            />
          </TimelineItem>
          <TimelineItem position="right" description={des}>
            <HistoryCard
              time={dict.history.events[2].year}
              event={dict.history.events[2].event}
              img={kangying}
              color="$gray300"
            />
          </TimelineItem>
          <TimelineItem position="left" description={des}>
            <HistoryCard
              time={dict.history.events[3].year}
              event={dict.history.events[3].event}
              img={xinhai}
              color="$accents3"
            />
          </TimelineItem>
          <TimelineItem position="right" description={des}>
            <HistoryCard
              time={dict.history.events[4].year}
              event={dict.history.events[4].event}
              img={biaoju}
              color="$cyan300"
            />
          </TimelineItem>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Timeline;
