"use client";

import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

export default function ClientComponent(props: { lang: string }) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <>
      <p>
        The current theme is: {type}; The current lang is {props.lang}
      </p>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
      <div className="w-[10rem] h-[10rem] bg-slate-500 dark:bg-black"> </div>
    </>
  );
}
