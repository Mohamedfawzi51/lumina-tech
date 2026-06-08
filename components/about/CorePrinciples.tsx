"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";

const cards = [
  {
    icon: "precision_manufacturing",
    iconBg: "bg-primary-container/20",
    iconColor: "text-primary",
    key: "precision" as const,
  },
  {
    icon: "eco",
    iconBg: "bg-secondary-container/20",
    iconColor: "text-secondary",
    key: "sustainability" as const,
  },
  {
    icon: "diversity_1",
    iconBg: "bg-tertiary-container/20",
    iconColor: "text-tertiary",
    key: "design" as const,
  },
];

export function CorePrinciples() {
  const { messages } = useLocale();
  const { principles } = messages.about;

  return (
    <section id="principles" className="py-24 md:py-32 bg-surface-container-lowest scroll-mt-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
              {principles.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {principles.subtitle}
            </p>
          </div>
          <div className="text-primary font-display-lg opacity-20 hidden md:block">
            {principles.sectionLabel}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(({ icon, iconBg, iconColor, key }) => {
            const item = principles[key];
            return (
              <div
                key={key}
                className="group p-8 rounded-3xl bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-6`}
                >
                  <Icon icon={icon} className={`${iconColor} text-3xl`} size={28} />
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
