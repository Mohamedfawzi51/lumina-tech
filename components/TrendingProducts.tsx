"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { images } from "@/lib/images";
import { ROUTES } from "@/lib/navigation";
import { MaterialIcon } from "./MaterialIcon";

const productKeys = ["keyboard", "headphones", "watch", "camera"] as const;
const productImages = {
  keyboard: images.keyboard,
  headphones: images.headphones,
  watch: images.watch,
  camera: images.camera,
};
const productBadges: Partial<Record<(typeof productKeys)[number], "hot" | "new">> = {
  keyboard: "hot",
  watch: "new",
};

export function TrendingProducts() {
  const { messages } = useLocale();
  const { trending } = messages;
  const { addToCart } = useDemo();

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-2">
              {trending.title}
            </h2>
            <p className="text-on-surface-variant">{trending.subtitle}</p>
          </div>
          <Link
            href={ROUTES.smartphones}
            className="text-primary font-label-md hover:underline flex items-center gap-2"
          >
            {trending.viewAll}
            <MaterialIcon icon="chevron_right" className="rtl:rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {productKeys.map((key) => {
            const product = trending.products[key];
            const badge = productBadges[key];

            return (
              <div
                key={key}
                className="glass-card rounded-2xl p-4 group transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-container-high mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={product.name}
                    src={productImages[key]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {badge && (
                    <span
                      className={`absolute top-3 start-3 text-[10px] font-bold px-2 py-1 rounded uppercase ${
                        badge === "hot"
                          ? "bg-primary text-on-primary"
                          : "bg-secondary-container text-on-secondary-container"
                      }`}
                    >
                      {trending.badges[badge]}
                    </span>
                  )}
                </div>
                <h4 className="font-headline-lg text-headline-lg text-on-surface mb-1">
                  {product.name}
                </h4>
                <p className="text-on-surface-variant font-label-sm mb-4">
                  {product.category}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-headline-lg">
                    {product.price}
                  </span>
                  <button
                    type="button"
                    onClick={() => addToCart({ productName: product.name })}
                    className="w-10 h-10 flex items-center justify-center bg-surface-container text-primary rounded-full hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    <MaterialIcon icon="add_shopping_cart" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
