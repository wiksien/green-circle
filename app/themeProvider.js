"use client"

import theme from ".";
import { ThemeProvider } from "@emotion/react";

export default function ThemeClient({
  children,
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
} 