"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { images } from "@/lib/images";

const milestones = [
  { year: "2009", color: "text-primary", key: "2009" as const },
  { year: "2016", color: "text-secondary", key: "2016" as const },
  { year: "2024", color: "text-tertiary", key: "2024" as const },
];

export function JourneySection() {
  const { messages } = useLocale();
  const { journey } = messages.about;

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[240px]">
          <div className="md:col-span-6 md:row-span-1 flex flex-col justify-center">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
              {journey.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {journey.description}
            </p>
          </div>

          <div className="md:col-span-6 md:row-span-2 rounded-3xl overflow-hidden relative group min-h-[280px] md:min-h-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src={images.aboutTeam}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-6 start-6 glass-morphism p-4 rounded-xl border border-white/10">
              <p className="font-label-sm text-label-sm text-primary">
                {journey.hqLabel}
              </p>
            </div>
          </div>

          <div className="md:col-span-3 md:row-span-1 bg-surface-container rounded-3xl flex flex-col items-center justify-center border border-outline-variant/30 p-6">
            <span className="font-display-lg text-primary text-display-lg-mobile">
              15+
            </span>
            <p className="font-label-md text-on-surface-variant text-center">
              {journey.years}
            </p>
          </div>

          <div className="md:col-span-3 md:row-span-1 bg-surface-container rounded-3xl flex flex-col items-center justify-center border border-outline-variant/30 p-6">
            <span className="font-display-lg text-secondary text-display-lg-mobile">
              240
            </span>
            <p className="font-label-md text-on-surface-variant text-center">
              {journey.patents}
            </p>
          </div>

          {milestones.map(({ year, color, key }) => (
            <div
              key={key}
              className="md:col-span-4 md:row-span-1 bg-surface-variant p-8 rounded-3xl flex flex-col justify-between border border-outline-variant/30"
            >
              <span className={`font-headline-lg ${color}`}>{year}</span>
              <p className="font-body-md text-on-surface">
                {journey.milestones[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
