"use client";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { ReactNode, useRef } from "react";
import { wrap } from "@motionone/utils";
import { useMediaQuery } from "react-responsive";

interface ParallaxProps {
  child: ReactNode[];
  baseVelocity?: number;
  imageTotalWidth: number;
}

export default function ParallaxBrand({
  child,
  baseVelocity = 5,
  imageTotalWidth,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => {
    return `${wrap(-100, 100, v)}%`;
  });

  const x2 = useTransform(baseX, (v) => {
    return `${wrap(-100, 100, v - 100)}%`;
  });

  const isSmall = useMediaQuery({ query: "(min-width: 960px)" });

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (isSmall) {
      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
    }

    baseX.set(baseX.get() + moveBy);
  });

  const totalWidth = imageTotalWidth + 40 * (child.length + 1);
  // the width of all iamge plus the length margin right(40px) of all items

  return (
    <div
      className="relative p-5 overflow-hidden mx-auto"
      style={{ width: totalWidth }}
    >
      <motion.div
        className="absolute [&>*]:mr-10 flex [&>*]:object-cover"
        style={{ x }}
      >
        {child}
      </motion.div>
      <motion.div className="[&>*]:mr-10 flex" style={{ x: x2 }}>
        {child}
      </motion.div>
    </div>
  );
}
