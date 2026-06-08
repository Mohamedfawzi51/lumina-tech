"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";
import { images } from "@/lib/images";
import { ROUTES } from "@/lib/navigation";

const summaryItems = [
  { key: "laptop" as const, image: images.checkoutLaptop },
  { key: "headphones" as const, image: images.checkoutHeadphones },
] as const;

const securityBadges = [
  { icon: "verified_user", labelKey: "pci" as const },
  { icon: "shield_locked", labelKey: "ssl" as const },
  { icon: "gpp_maybe", labelKey: "secure" as const },
];

export function CheckoutSummary() {
  const router = useRouter();
  const { messages } = useLocale();
  const { checkout } = messages;
  const { summary, items, badges } = checkout;

  function handlePlaceOrder() {
    router.push(ROUTES.dashboard);
  }

  return (
    <aside
      className="lg:col-span-4 sticky top-28 animate-fade-up"
      style={{ animationDelay: "0.3s" }}
    >
      <div className="glass-card rounded-xl p-8 border-primary/20 bg-primary-container/5">
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6">
          {summary.title}
        </h3>

        <div className="space-y-4 mb-8">
          {summaryItems.map(({ key, image }) => {
            const item = items[key];
            return (
              <div key={key} className="flex gap-4">
                <div className="h-16 w-16 rounded-lg bg-surface-container-highest overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={item.name}
                    src={image}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grow min-w-0">
                  <p className="font-label-md text-on-surface">{item.name}</p>
                  <p className="text-sm text-on-surface-variant">
                    {item.variant}
                  </p>
                  <p className="font-label-md text-primary mt-1">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-3 py-6 border-t border-outline-variant">
          <div className="flex justify-between text-on-surface-variant font-label-md">
            <span>{summary.subtotal}</span>
            <span>{summary.subtotalValue}</span>
          </div>
          <div className="flex justify-between text-on-surface-variant font-label-md">
            <span>{summary.shipping}</span>
            <span className="text-primary">{summary.free}</span>
          </div>
          <div className="flex justify-between text-on-surface-variant font-label-md">
            <span>{summary.tax}</span>
            <span>{summary.taxValue}</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-outline-variant mb-8">
          <span className="font-headline-lg text-on-surface">
            {summary.total}
          </span>
          <span className="font-headline-lg text-primary">
            {summary.totalValue}
          </span>
        </div>

        <button
          type="button"
          onClick={handlePlaceOrder}
          className="w-full py-4 bg-primary text-on-primary-container font-label-md rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mb-6 shadow-xl shadow-primary/20"
        >
          {summary.placeOrder}
          <Icon icon="lock" />
        </button>

        <div className="flex items-center justify-center gap-6 opacity-60">
          {securityBadges.map(({ icon, labelKey }) => (
            <div key={labelKey} className="flex flex-col items-center gap-1">
              <Icon
                icon={icon}
                className="text-on-surface-variant text-xl"
                size={20}
              />
              <span className="text-[10px] font-label-sm uppercase tracking-widest">
                {badges[labelKey]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
