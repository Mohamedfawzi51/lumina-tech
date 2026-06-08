"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { images } from "@/lib/images";

const relatedItems = [
  { key: "buds" as const, image: images.relatedBuds },
  { key: "tab" as const, image: images.relatedTab },
  { key: "book" as const, image: images.relatedBook },
  { key: "watch" as const, image: images.relatedWatch },
] as const;

export function RelatedProducts() {
  const { messages } = useLocale();
  const { product } = messages;
  const { addToCart } = useDemo();
  const [addedKey, setAddedKey] = useState<string | null>(null);

  function handleAdd(key: string, name: string) {
    setAddedKey(key);
    addToCart({ productName: name, navigate: true });
  }

  return (
    <section className="mb-24">
      <h2 className="font-headline-xl text-headline-xl text-on-surface mb-12">
        {product.relatedTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {relatedItems.map(({ key, image }) => {
          const item = product.related[key];
          const isAdded = addedKey === key;

          return (
            <div
              key={key}
              className="group bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/30 transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="aspect-square bg-surface-container p-8 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={item.name}
                  src={image}
                  className="w-full h-full object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h5 className="font-headline-lg text-on-surface mb-2">
                  {item.name}
                </h5>
                <p className="text-primary font-label-md text-label-md mb-4">
                  {item.price}
                </p>
                <button
                  type="button"
                  onClick={() => handleAdd(key, item.name)}
                  className={`w-full py-3 rounded-xl font-label-md text-label-md transition-all ${
                    isAdded
                      ? "bg-on-primary-container text-primary-container"
                      : "bg-surface-variant text-on-surface group-hover:bg-primary group-hover:text-on-primary-container"
                  }`}
                >
                  {isAdded ? product.added : product.addToCart}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
