"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { MaterialIcon } from "@/components/MaterialIcon";

const categoryItems = [
  { key: "flagship" as const, icon: "smartphone", count: 42 },
  { key: "foldables" as const, icon: "folder_delete", count: 12 },
  { key: "gaming" as const, icon: "family_star", count: 8 },
] as const;

const brandKeys = [
  "apple",
  "samsung",
  "google",
  "nothing",
  "xiaomi",
  "sony",
] as const;

export function ShopFilters() {
  const { messages } = useLocale();
  const { shop, demo } = messages;
  const { filters, brands } = shop;
  const { showToast } = useDemo();
  const [priceMax, setPriceMax] = useState(1800);
  const [selectedBrand, setSelectedBrand] = useState("google");
  const [selectedCategory, setSelectedCategory] = useState<string>("flagship");

  function selectBrand(key: string) {
    setSelectedBrand(key);
    showToast(
      demo.filterBrand.replace("{brand}", brands[key as keyof typeof brands]),
      "info",
    );
  }

  function selectCategory(key: string, label: string) {
    setSelectedCategory(key);
    showToast(demo.filterCategory.replace("{category}", label), "info");
  }

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-24 space-y-8">
        <div>
          <h3 className="font-label-md text-on-surface-variant uppercase tracking-widest mb-4">
            {filters.category}
          </h3>
          <div className="space-y-3">
            {categoryItems.map(({ key, icon, count }) => (
              <button
                key={key}
                type="button"
                onClick={() => selectCategory(key, filters[key])}
                className={`flex items-center justify-between group w-full text-start rounded-lg px-2 py-1 transition-colors ${
                  selectedCategory === key
                    ? "bg-primary/10 text-primary"
                    : "hover:text-primary"
                }`}
              >
                <span className="flex items-center gap-2 text-on-surface group-hover:text-primary transition-colors">
                  <MaterialIcon icon={icon} className="text-[18px]" />
                  {filters[key]}
                </span>
                <span className="text-on-surface-variant text-label-sm">
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-outline-variant/30" />

        <div>
          <h3 className="font-label-md text-on-surface-variant uppercase tracking-widest mb-4">
            {filters.brand}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {brandKeys.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => selectBrand(key)}
                className={`px-3 py-2 rounded-lg border text-label-md transition-all text-start ${
                  selectedBrand === key
                    ? "bg-primary-container text-on-primary-container border-primary"
                    : "bg-surface-container-high border-outline-variant hover:border-primary hover:text-primary"
                }`}
              >
                {brands[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-outline-variant/30" />

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-label-md text-on-surface-variant uppercase tracking-widest">
              {filters.priceRange}
            </h3>
            <span className="text-primary font-label-md">${priceMax}</span>
          </div>
          <input
            type="range"
            min={200}
            max={2500}
            step={50}
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            onMouseUp={() =>
              showToast(
                demo.filterCategory.replace(
                  "{category}",
                  `≤ $${priceMax}`,
                ),
                "info",
              )
            }
            onTouchEnd={() =>
              showToast(
                demo.filterCategory.replace(
                  "{category}",
                  `≤ $${priceMax}`,
                ),
                "info",
              )
            }
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-label-sm text-on-surface-variant mt-2">
            <span>$200</span>
            <span>$2,500+</span>
          </div>
        </div>

        <div className="h-px bg-outline-variant/30" />

        <div>
          <h3 className="font-label-md text-on-surface-variant uppercase tracking-widest mb-4">
            {filters.rating}
          </h3>
          <div className="space-y-2">
            {[4, 3, 2].map((stars) => (
              <button
                key={stars}
                type="button"
                onClick={() =>
                  showToast(
                    demo.filterCategory.replace(
                      "{category}",
                      `${stars}+ ${filters.rating}`,
                    ),
                    "info",
                  )
                }
                className="flex items-center gap-2 w-full text-start hover:text-primary transition-colors"
              >
                <div className="flex text-tertiary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <MaterialIcon
                      key={i}
                      icon="star"
                      filled={i < stars}
                      className="text-[14px]"
                    />
                  ))}
                </div>
                <span className="text-on-surface-variant text-label-sm">
                  {filters.ratingUp}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-outline-variant/30" />

        <div className="flex items-center justify-between">
          <span className="font-label-md text-on-surface-variant uppercase tracking-widest">
            {filters.inStock}
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              onChange={(e) =>
                showToast(
                  demo.filterCategory.replace(
                    "{category}",
                    e.target.checked ? filters.inStock : "All products",
                  ),
                  "info",
                )
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
          </label>
        </div>
      </div>
    </aside>
  );
}
