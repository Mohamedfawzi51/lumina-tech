"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";

const colorKeys = [
  "titaniumBlue",
  "midnightSilver",
  "solarGold",
  "obsidianBlack",
] as const;

const colorSwatches: Record<(typeof colorKeys)[number], string> = {
  titaniumBlue: "#1e293b",
  midnightSilver: "#475569",
  solarGold: "#92400e",
  obsidianBlack: "#0f172a",
};

const storageKeys = ["128", "256", "512", "1tb"] as const;

export function ProductInfo() {
  const { messages } = useLocale();
  const { product } = messages;
  const { addToCart, toggleWishlist, isWishlisted } = useDemo();
  const [selectedColor, setSelectedColor] =
    useState<(typeof colorKeys)[number]>("titaniumBlue");
  const [selectedStorage, setSelectedStorage] =
    useState<(typeof storageKeys)[number]>("128");
  const [added, setAdded] = useState(false);
  const wishlisted = isWishlisted("lumina-x1-pro");

  function handleAddToCart() {
    setAdded(true);
    addToCart({ productName: product.title, navigate: true });
  }

  function handleWishlist() {
    toggleWishlist("lumina-x1-pro", product.title);
  }

  return (
    <div className="flex flex-col">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex text-tertiary">
          {Array.from({ length: 4 }).map((_, i) => (
            <Icon key={i} icon="star" filled className="text-[18px]" />
          ))}
          <Icon icon="star_half" filled className="text-[18px]" />
        </div>
        <span className="text-on-surface-variant font-label-sm text-label-sm">
          {product.reviews}
        </span>
      </div>

      <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">
        {product.title}
      </h1>
      <p className="text-on-surface-variant font-body-lg text-body-lg mb-8 max-w-lg">
        {product.description}
      </p>

      <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-12">
        <span className="text-primary font-display-lg text-headline-xl">
          {product.price}
        </span>
        <span className="text-on-surface-variant line-through font-headline-lg text-headline-lg">
          {product.originalPrice}
        </span>
        <span className="bg-error-container text-on-error-container px-4 py-1 rounded-lg font-label-md text-label-md">
          {product.discount}
        </span>
      </div>

      <div className="space-y-10 mb-12">
        <div>
          <span className="block font-label-md text-label-md mb-4 text-on-surface uppercase tracking-widest">
            {product.selectColor}{" "}
            <span className="text-primary normal-case">
              {product.colors[selectedColor]}
            </span>
          </span>
          <div className="flex gap-4 flex-wrap">
            {colorKeys.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedColor(key)}
                aria-label={product.colors[key]}
                className={`w-10 h-10 rounded-full border-2 transition-all ${
                  selectedColor === key
                    ? "border-primary scale-110 ring-2 ring-primary/30"
                    : "border-transparent hover:scale-105"
                }`}
                style={{ backgroundColor: colorSwatches[key] }}
              />
            ))}
          </div>
        </div>

        <div>
          <span className="block font-label-md text-label-md mb-4 text-on-surface uppercase tracking-widest">
            {product.storageCapacity}
          </span>
          <div className="flex flex-wrap gap-4">
            {storageKeys.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedStorage(key)}
                className={`px-6 md:px-8 py-3 rounded-xl border-2 font-label-md text-label-md transition-all ${
                  selectedStorage === key
                    ? "border-primary text-primary bg-primary/5"
                    : "border-outline-variant text-on-surface-variant hover:border-primary/50"
                }`}
              >
                {product.storage[key]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          type="button"
          onClick={handleAddToCart}
          className={`flex-1 h-16 rounded-2xl font-headline-lg flex items-center justify-center gap-3 transition-all hover:opacity-90 active:scale-95 ${
            added
              ? "bg-on-primary-container text-primary-container"
              : "bg-primary text-on-primary-container"
          }`}
        >
          <Icon icon="shopping_cart" />
          {added ? product.added : product.addToCart}
        </button>
        <button
          type="button"
          onClick={handleWishlist}
          className={`w-16 h-16 border rounded-2xl flex items-center justify-center hover:bg-surface-variant transition-all active:scale-90 shrink-0 ${
            wishlisted
              ? "border-error text-error bg-error/10"
              : "border-outline-variant text-on-surface"
          }`}
        >
          <Icon icon="favorite" filled={wishlisted} />
        </button>
      </div>

      <div className="flex items-center gap-3 text-on-surface-variant">
        <Icon icon="inventory_2" className="text-tertiary" />
        <span className="font-label-md text-label-md">{product.inStock}</span>
      </div>
    </div>
  );
}
