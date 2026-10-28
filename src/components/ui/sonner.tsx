"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "#111111",
          "--normal-text": "#f2f1ef",
          "--normal-border": "#333333",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
