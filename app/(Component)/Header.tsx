"use client";
import bg from "@/public/Background_with_line_wave_pattern_4.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Header({ dict }: { dict: any }) {
  return (
    <section className="relative h-[30rem] lg:h-[40rem]">
      <Image
        src={bg}
        alt="bg"
        className="absolute z-0 h-full w-full object-cover dark:invert"
      />
      <div className="px-4">
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 z-10">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            {dict.brand.slogan}
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            {dict.brand.subtitle}
          </p>
          <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
            <Button color="secondary" auto>
              {dict.contactUs}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
