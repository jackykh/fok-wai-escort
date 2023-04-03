"use client";

import { createTheme, NextUIProvider, useSSR } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const { isBrowser } = useSSR();
  const lightTheme = createTheme({
    type: "light",
    theme: {
      colors: {},
    },
    className: "light",
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {},
    },
    className: "dark",
  });

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      {isBrowser && <NextUIProvider>{children}</NextUIProvider>}
    </NextThemesProvider>
  );
}
