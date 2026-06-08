"use client";

import { DemoProvider } from "@/contexts/DemoContext";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { DemoToast } from "@/components/demo/DemoToast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <DemoProvider>
          {children}
          <DemoToast />
        </DemoProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
