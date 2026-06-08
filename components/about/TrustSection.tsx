"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";

const awards = [
  { icon: "verified_user", key: "iso" as const },
  { icon: "workspace_premium", key: "redDot" as const },
  { icon: "energy_savings_leaf", key: "carbon" as const },
  { icon: "security", key: "gdpr" as const },
];

export function TrustSection() {
  const { messages } = useLocale();
  const { trust } = messages.about;

  return (
    <section className="py-24 md:py-32 bg-surface-container-low border-y border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-2">
            {trust.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {trust.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center opacity-60">
          {awards.map(({ icon, key }) => (
            <div
              key={key}
              className="flex flex-col items-center gap-4 group hover:opacity-100 transition-all"
            >
              <Icon
                icon={icon}
                className="text-5xl text-on-surface-variant group-hover:text-primary transition-colors"
                size={48}
              />
              <p className="font-label-md text-on-surface text-center">
                {trust[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
