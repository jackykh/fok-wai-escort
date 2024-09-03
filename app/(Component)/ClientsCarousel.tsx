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
import { useRef } from "react";
import { wrap } from "@motionone/utils";
import { useMediaQuery } from "react-responsive";
import { DictionaryType } from "@/dictionaries/dictionaries";
import Image, { StaticImageData } from "next/image";
import { v4 } from "uuid";

interface ParallaxProps {
  baseVelocity?: number;
  images: StaticImageData[];
}

function ParallaxBrand({ images, baseVelocity = 5 }: ParallaxProps) {
  let imageTotalWidth = images.reduce((acc, cur) => acc + cur.width, 0);

  const logoImages = images.map((src) => {
    return (
      <Image key={v4()} src={src} alt="logo" className="invert dark:invert-0" />
    );
  });

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

  const totalWidth = imageTotalWidth + 40 * (images.length + 1);
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
        {logoImages}
      </motion.div>
      <motion.div className="[&>*]:mr-10 flex" style={{ x: x2 }}>
        {logoImages}
      </motion.div>
    </div>
  );
}

export default function ClientsCarousel({
  dict,
  images,
}: {
  dict: DictionaryType;
  images: StaticImageData[];
}) {
  return (
    <section className="mt-12 [&>*]:mb-12">
      <div className="flex justify-center ">
        <h1 className="text-2xl xs:text-3xl lg:text-4xl font-sans">
          {dict.ourClients}
        </h1>
      </div>
      <div className="px-10">
        <div className="w-full overflow-hidden">
          <ParallaxBrand images={images} />
        </div>
      </div>
    </section>
  );
}
