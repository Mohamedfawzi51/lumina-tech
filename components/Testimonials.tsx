"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { images } from "@/lib/images";
import { MaterialIcon } from "./MaterialIcon";

const testimonialKeys = ["marcus", "sarah", "david"] as const;
const testimonialImages = {
  marcus: images.marcus,
  sarah: images.sarah,
  david: images.david,
};
const starCounts = { marcus: 5, sarah: 5, david: 4 } as const;

export function Testimonials() {
  const { messages } = useLocale();
  const { testimonials } = messages;

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h2 className="font-headline-xl text-headline-xl text-on-surface mb-12">
          {testimonials.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialKeys.map((key, index) => {
            const item = testimonials.items[key];
            const stars = starCounts[key];
            const isFeatured = index === 1;

            return (
              <div
                key={key}
                className={`glass-card p-8 rounded-3xl text-start relative ${
                  isFeatured
                    ? "md:scale-105 border-primary/20 shadow-xl z-10"
                    : ""
                }`}
              >
                <MaterialIcon
                  icon="format_quote"
                  className="text-primary absolute top-6 end-8 opacity-20 text-6xl !text-[4rem] leading-none"
                />

                <div className="flex gap-1 text-tertiary mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <MaterialIcon key={i} icon="star" filled className="text-sm" />
                  ))}
                  {stars < 5 && (
                    <MaterialIcon icon="star_half" filled className="text-sm" />
                  )}
                </div>

                <p className="text-body-lg text-on-surface-variant italic mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={item.name}
                    src={testimonialImages[key]}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-label-md text-on-surface">{item.name}</h5>
                    <p className="text-label-sm text-on-surface-variant">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
