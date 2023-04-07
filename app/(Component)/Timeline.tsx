"use client";

import clsx from "clsx";
import HistoryCard1 from "./HistoryCard1";
import HistoryCard from "./HistoryCard";
import { useMediaQuery } from "react-responsive";
import jiangnan from "@/public/history/jiangnan.jpg";
import kangqing from "@/public/history/kangqing.jpeg";
import kangying from "@/public/history/kangying.jpeg";
import xinhai from "@/public/history/xinhai.jpeg";
import biaoju from "@/public/history/biaoju.jpg";

interface TimelineItemProps {
  children: React.ReactNode;
  position: "left" | "right";
}

const TimelineItem = ({ children, position }: TimelineItemProps) => {
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
        "font-sans"
      )}
    >
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at
        tellus at urna condimentum mattis. Morbi tempus iaculis urna id volutpat
        lacus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras
        fermentum. Magna fringilla urna porttitor rhoncus. Venenatis lectus
        magna fringilla urna porttitor rhoncus dolor. Tempus egestas sed sed
        risus pretium quam. At urna condimentum mattis pellentesque id nibh.
        Proin nibh nisl condimentum id venenatis a condimentum vitae. Enim nec
        dui nunc mattis enim ut tellus elementum. Turpis tincidunt id aliquet
        risus feugiat in ante. Malesuada fames ac turpis egestas sed tempus.
        Proin libero nunc consequat interdum varius. Gravida neque convallis a
        cras semper auctor neque vitae tempus.
        <br />
        <br />
        Arcu vitae elementum curabitur vitae nunc sed. Tempus iaculis urna id
        volutpat lacus laoreet non curabitur gravida. Ipsum faucibus vitae
        aliquet nec ullamcorper sit amet risus. Elit eget gravida cum sociis
        natoque. Suscipit tellus mauris a diam maecenas sed. Posuere morbi leo
        urna molestie at elementum eu. Nunc congue nisi vitae suscipit tellus
        mauris. Commodo sed egestas egestas fringilla phasellus. Lectus proin
        nibh nisl condimentum. Non odio euismod lacinia at quis risus sed
        vulputate. In egestas erat imperdiet sed euismod nisi porta lorem.
        Lectus nulla at volutpat diam ut venenatis tellus. Felis donec et odio
        pellentesque diam volutpat commodo sed egestas. Odio facilisis mauris
        sit amet massa vitae tortor condimentum lacinia. Sodales neque sodales
        ut etiam sit. Eu ultrices vitae auctor eu augue ut lectus arcu.
        <br />
        <br />
        Et netus et malesuada fames ac turpis. Libero justo laoreet sit amet.
        Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Mattis
        ullamcorper velit sed ullamcorper morbi tincidunt. At augue eget arcu
        dictum varius duis at consectetur. Tortor posuere ac ut consequat semper
        viverra nam libero. Et sollicitudin ac orci phasellus egestas tellus
        rutrum tellus. Sit amet risus nullam eget felis eget. Auctor urna nunc
        id cursus metus aliquam eleifend mi in. Nisi scelerisque eu ultrices
        vitae auctor eu augue. Lectus mauris ultrices eros in cursus.
        <br />
        <br />
        Arcu non odio euismod lacinia. Dolor sit amet consectetur adipiscing
        elit. Nunc mi ipsum faucibus vitae. Arcu dictum varius duis at
        consectetur lorem donec massa. Nunc vel risus commodo viverra maecenas.
        Scelerisque purus semper eget duis. Volutpat commodo sed egestas egestas
        fringilla phasellus faucibus scelerisque. Dolor sit amet consectetur
        adipiscing elit ut aliquam purus. Enim diam vulputate ut pharetra sit
        amet aliquam id. Imperdiet massa tincidunt nunc pulvinar sapien. Elit
        duis tristique sollicitudin nibh sit amet. Amet volutpat consequat
        mauris nunc. Sagittis purus sit amet volutpat consequat mauris nunc
        congue.
      </span>
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
        <TimelineItem position="left">
          <HistoryCard1 dict={dict} />
        </TimelineItem>
        <TimelineItem position="right">
          <HistoryCard
            time={dict.history.events[0].year}
            event={dict.history.events[0].event}
            img={jiangnan}
            color="$blue300"
          />
        </TimelineItem>
        <TimelineItem position="left">
          <HistoryCard
            time={dict.history.events[1].year}
            event={dict.history.events[1].event}
            img={kangqing}
            color="$yellow300"
          />
        </TimelineItem>
        <TimelineItem position="right">
          <HistoryCard
            time={dict.history.events[2].year}
            event={dict.history.events[2].event}
            img={kangying}
            color="$gray300"
          />
        </TimelineItem>
        <TimelineItem position="left">
          <HistoryCard
            time={dict.history.events[3].year}
            event={dict.history.events[3].event}
            img={xinhai}
            color="$accents3"
          />
        </TimelineItem>
        <TimelineItem position="right">
          <HistoryCard
            time={dict.history.events[4].year}
            event={dict.history.events[4].event}
            img={biaoju}
            color="$cyan300"
          />
        </TimelineItem>
      </div>
    </section>
  );
};

export default Timeline;
