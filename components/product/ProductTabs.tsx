"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";

const tabKeys = ["specifications", "reviews", "shipping"] as const;

const specItems = [
  { key: "chip" as const, icon: "memory", span: 1 },
  { key: "display" as const, icon: "display_settings", span: 2 },
  { key: "camera" as const, icon: "camera", span: 1 },
  { key: "battery" as const, icon: "battery_charging_full", span: 1 },
  { key: "durability" as const, icon: "verified_user", span: 1 },
] as const;

export function ProductTabs() {
  const { messages } = useLocale();
  const { product } = messages;
  const [activeTab, setActiveTab] =
    useState<(typeof tabKeys)[number]>("specifications");

  return (
    <section className="mb-32">
      <div className="flex gap-6 md:gap-12 border-b border-outline-variant mb-12 overflow-x-auto hide-scrollbar">
        {tabKeys.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveTab(key)}
            className={`pb-4 font-headline-lg whitespace-nowrap relative transition-colors shrink-0 ${
              activeTab === key
                ? "text-primary"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {product.tabs[key]}
            {activeTab === key && (
              <div className="absolute bottom-0 start-0 w-full h-1 bg-primary rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {activeTab === "specifications" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specItems.map(({ key, icon, span }) => {
            const spec = product.specs[key];
            return (
              <div
                key={key}
                className={`bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 flex flex-col items-center text-center ${
                  span === 2 ? "md:col-span-2" : ""
                }`}
              >
                <Icon icon={icon} className="text-primary w-10 h-10 mb-4" />
                <h4 className="font-headline-lg text-on-surface mb-2">
                  {spec.title}
                </h4>
                <p className="text-on-surface-variant font-body-md">
                  {spec.description}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === "reviews" && (
        <p className="text-on-surface-variant font-body-lg text-center py-16">
          {product.reviews}
        </p>
      )}

      {activeTab === "shipping" && (
        <p className="text-on-surface-variant font-body-lg text-center py-16">
          {product.inStock}
        </p>
      )}
    </section>
  );
}
