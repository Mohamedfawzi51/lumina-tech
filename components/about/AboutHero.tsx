"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { images } from "@/lib/images";
import { ROUTES } from "@/lib/navigation";

export function AboutHero() {
  const { messages } = useLocale();
  const { hero } = messages.about;

  useEffect(() => {
    function onScroll() {
      const heroImg = document.querySelector<HTMLImageElement>("[data-about-hero-img]");
      if (heroImg) {
        heroImg.style.transform = `scale(${1 + window.pageYOffset * 0.0001})`;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative min-h-[min(921px,90vh)] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-about-hero-img
          alt=""
          src={images.aboutHero}
          className="w-full h-full object-cover opacity-40 transition-transform duration-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="max-w-3xl">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">
            {hero.badge}
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8">
            {hero.title}{" "}
            <span className="text-primary">{hero.titleAccent}</span>{" "}
            {hero.titleSuffix}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#principles"
              className="bg-primary text-on-primary font-label-md px-8 py-4 rounded-xl hover:opacity-90 transition-all active:scale-95"
            >
              {hero.philosophy}
            </a>
            <Link
              href={ROUTES.smartphones}
              className="border border-outline-variant text-on-surface font-label-md px-8 py-4 rounded-xl hover:bg-surface-variant transition-all active:scale-95"
            >
              {hero.innovations}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
