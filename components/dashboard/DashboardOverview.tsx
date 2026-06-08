"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";

export function DashboardOverview() {
  const { messages } = useLocale();
  const { welcome, upgrade } = messages.dashboard;
  const { demo } = messages;
  const { showToast } = useDemo();

  const stats = [
    { label: welcome.orders, value: welcome.ordersCount },
    { label: welcome.wishlist, value: welcome.wishlistCount },
    {
      label: welcome.points,
      value: welcome.pointsCount,
      accent: true,
      hiddenMobile: false,
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div className="md:col-span-8 glass-panel rounded-3xl p-8 relative overflow-hidden group">
        <div className="absolute top-0 end-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
          <Icon icon="bolt" filled size={120} className="text-primary" />
        </div>
        <div className="relative z-10">
          <h3 className="font-headline-lg text-headline-lg text-primary mb-2">
            {welcome.title}
          </h3>
          <p className="text-on-surface-variant max-w-md mb-8">
            {welcome.subtitle}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-surface-container p-4 rounded-2xl border border-outline-variant/30 ${
                  index === 2 ? "hidden sm:block" : ""
                }`}
              >
                <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                  {stat.label}
                </p>
                <p
                  className={`text-headline-lg font-headline-lg ${
                    stat.accent ? "text-secondary" : "text-on-surface"
                  }`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:col-span-4 bg-primary-container rounded-3xl p-8 flex flex-col justify-between text-on-primary-container">
        <div>
          <h4 className="font-headline-lg text-headline-lg mb-4">
            {upgrade.title}
          </h4>
          <p className="text-body-md opacity-80">{upgrade.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={() => showToast(demo.upgradeInitiated)}
          className="mt-8 bg-on-primary-container text-primary-container px-6 py-3 rounded-full font-label-md hover:scale-105 transition-transform w-full"
        >
          {upgrade.cta}
        </button>
      </div>
    </section>
  );
}
