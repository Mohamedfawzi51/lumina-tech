"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { images } from "@/lib/images";

const sellerKeys = ["laptop", "watch", "earbuds", "monitor", "charger"] as const;
const sellerImages = {
  laptop: images.luminaBook,
  watch: images.zenithWatch,
  earbuds: images.sonicBuds,
  monitor: images.titanDisplay,
  charger: images.fluxCharge,
};

export function BestSellers() {
  const { messages } = useLocale();
  const { bestSellers } = messages;
  const { addToCart } = useDemo();

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <h2 className="font-headline-xl text-headline-xl text-on-surface">
          {bestSellers.title}
        </h2>
        <p className="text-on-surface-variant">{bestSellers.subtitle}</p>
      </div>

      <div className="flex gap-6 overflow-x-auto px-margin-mobile md:px-margin-desktop pb-8 hide-scrollbar snap-x snap-mandatory">
        {sellerKeys.map((key) => {
          const product = bestSellers.products[key];

          return (
            <div key={key} className="flex-none w-[300px] snap-start">
              <div className="bg-surface-container rounded-3xl p-6 h-[450px] flex flex-col justify-between group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={product.name}
                  src={sellerImages[key]}
                  className="w-full h-48 object-contain mb-6 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h4 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                    {product.name}
                  </h4>
                  <p className="text-on-surface-variant text-label-sm mb-4">
                    {product.description}
                  </p>
                  <span className="text-primary font-headline-lg">
                    {product.price}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    addToCart({ productName: product.name, navigate: true })
                  }
                  className="w-full py-3 bg-surface-variant text-on-surface rounded-xl hover:bg-primary hover:text-on-primary transition-all font-label-md"
                >
                  {bestSellers.addToCart}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
