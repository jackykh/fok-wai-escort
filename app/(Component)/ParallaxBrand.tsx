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

interface ParallaxProps {
  child: ReactNode[];
  baseVelocity?: number;
}

export default function ParallaxBrand({
  child,
  baseVelocity = 5,
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

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

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

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative p-5" style={{ minWidth: child.length * 300 }}>
      <motion.div className="absolute [&>*]:mr-10 flex" style={{ x }}>
        {child}
      </motion.div>
      <motion.div className="[&>*]:mr-10 flex" style={{ x: x2 }}>
        {child}
      </motion.div>
    </div>
  );
}
