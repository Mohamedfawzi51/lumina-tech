"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { locales, localeConfig, type Locale } from "@/lib/i18n";
import { MaterialIcon } from "./MaterialIcon";

export function LanguageSwitcher() {
  const { locale, setLocale, messages } = useLocale();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={messages.language.switch}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 p-2 text-on-surface-variant hover:text-primary transition-all duration-300 active:scale-95"
      >
        <MaterialIcon icon="language" />
        <span className="hidden sm:inline font-label-md text-label-md">
          {localeConfig[locale].label}
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={messages.language.select}
          className="absolute top-full mt-2 end-0 min-w-[140px] rounded-xl bg-surface-container-high border border-outline-variant shadow-xl overflow-hidden z-[200]"
        >
          {locales.map((code) => (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={locale === code}
              onClick={() => handleSelect(code)}
              className={`w-full px-4 py-3 text-start font-label-md text-label-md transition-colors hover:bg-surface-variant/50 ${
                locale === code
                  ? "text-primary bg-primary/10"
                  : "text-on-surface-variant"
              }`}
            >
              {localeConfig[code].nativeName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
