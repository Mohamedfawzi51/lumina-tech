"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function ContactHero() {
  const { messages } = useLocale();
  const { hero } = messages.contact;

  return (
    <header className="relative py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-0 end-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 start-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-3xl">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
          {hero.title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          {hero.description}
        </p>
      </div>
    </header>
  );
}
