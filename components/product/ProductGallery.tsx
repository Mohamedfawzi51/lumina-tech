"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { images } from "@/lib/images";

const galleryImages = [
  images.productThumb1,
  images.productThumb2,
  images.productThumb3,
];

export function ProductGallery() {
  const { messages } = useLocale();
  const { product } = messages;
  const [activeIndex, setActiveIndex] = useState(0);

  const mainImage =
    activeIndex === 0 ? images.productMain : galleryImages[activeIndex];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-6">
      <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible hide-scrollbar">
        {galleryImages.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 cursor-pointer transition-all hover:opacity-90 shrink-0 ${
              activeIndex === index
                ? "border-primary"
                : "border-outline-variant hover:border-primary"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={`${product.title} ${index + 1}`}
              src={src}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="flex-1 bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/30 relative aspect-square flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={product.title}
          src={mainImage}
          className="w-full h-full object-contain p-8 md:p-12"
        />
        <div className="absolute top-6 start-6 flex flex-col gap-2">
          <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-sm text-label-sm tracking-wide">
            {product.badge}
          </span>
        </div>
      </div>
    </div>
  );
}
