import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ConstructuionSign.module.css";
import clsx from "clsx";

const ConstructionSign = ({ content }: { content: string }) => {
  return (
    <section className="h-screen w-full bg-blue-100 dark:bg-[#3A3F42] relative flex justify-center items-center">
      <div className={clsx(classes.stripe, "absolute top-0 z-0")} />
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center relative">
          <svg width="250" height="250" viewBox="-50 -50 300 300">
            <polygon
              className={classes.triangle}
              stroke-linejoin="round"
              points="100,0 0,200 200,200"
            />
          </svg>
          <FontAwesomeIcon
            icon={faPersonDigging}
            className="h-16 w-16 absolute top-1/2 text-black"
          />
        </div>
        <h2 className="text-center">{content}</h2>
      </div>

      <div className={clsx(classes.stripe, "absolute bottom-0 z-0")} />
    </section>
  );
};

export default ConstructionSign;
