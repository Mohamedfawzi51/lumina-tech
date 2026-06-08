"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { images } from "@/lib/images";
import { ROUTES } from "@/lib/navigation";

export function Hero() {
  const { messages } = useLocale();
  const { hero, demo } = messages;
  const { showToast } = useDemo();

  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter items-center relative z-10">
        <div className="space-y-6">
          <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full font-label-sm text-label-sm uppercase tracking-widest">
            {hero.badge}
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            {hero.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href={ROUTES.product}
              className="px-10 py-4 bg-primary text-on-primary font-label-md rounded-xl hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] transition-all active:scale-95"
            >
              {hero.preorder}
            </Link>
            <button
              type="button"
              onClick={() => showToast(demo.trailerPlaying, "info")}
              className="px-10 py-4 border border-outline text-on-surface font-label-md rounded-xl hover:bg-surface-variant/30 transition-all active:scale-95"
            >
              {hero.trailer}
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={hero.title}
            src={images.heroPhone}
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
