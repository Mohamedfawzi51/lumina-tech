"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useLocale } from "@/contexts/LocaleContext";
import { MaterialIcon } from "./MaterialIcon";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const { messages } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={messages.theme.toggle}
      title={theme === "dark" ? messages.theme.light : messages.theme.dark}
      className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-all duration-300 active:scale-95"
    >
      <MaterialIcon icon={theme === "dark" ? "light_mode" : "dark_mode"} />
    </button>
  );
}
