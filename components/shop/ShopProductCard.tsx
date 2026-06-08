"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";

type ShopProductCardProps = {
  image: string;
  name: string;
  specs: string;
  price: string;
  reviews: string;
  stars: number;
  badge?: "new" | "limited";
  showHoverActions?: boolean;
  href?: string;
  productId?: string;
};

export function ShopProductCard({
  image,
  name,
  specs,
  price,
  reviews,
  stars,
  badge,
  showHoverActions = true,
  href,
  productId,
}: ShopProductCardProps) {
  const { messages } = useLocale();
  const { shop } = messages;
  const { addToCart, toggleWishlist, isWishlisted } = useDemo();
  const id = productId ?? name.toLowerCase().replace(/\s+/g, "-");
  const wishlisted = isWishlisted(id);

  function handleWishlist(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(id, name);
  }

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ productName: name });
  }

  const card = (
    <div className="group relative flex flex-col glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 h-full">
      <div className="relative aspect-square overflow-hidden bg-surface-container-low">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={name}
          src={image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {badge && (
          <div className="absolute top-3 start-3 flex flex-col gap-2">
            <span
              className={`px-3 py-1 rounded-full text-label-sm uppercase tracking-wider font-bold ${
                badge === "new"
                  ? "bg-primary text-on-primary-container"
                  : "bg-secondary text-on-secondary"
              }`}
            >
              {shop.badges[badge]}
            </span>
          </div>
        )}

        <button
          type="button"
          onClick={handleWishlist}
          className="absolute top-3 end-3 p-2 rounded-full glass-card text-on-surface hover:text-error transition-colors"
        >
          <Icon
            icon="favorite"
            filled={wishlisted}
            className={`text-[20px] ${wishlisted ? "text-error" : ""}`}
          />
        </button>

        {showHoverActions && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
            <button
              type="button"
              onClick={handleQuickAdd}
              className="bg-white text-black px-6 py-2 rounded-full font-label-md font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Icon icon="shopping_bag" className="text-[18px]" />
              {shop.quickAdd}
            </button>
          </div>
        )}
      </div>

      <div className="p-5 grow flex flex-col">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h4 className="font-headline-lg text-[18px] text-on-surface leading-snug group-hover:text-primary transition-colors">
            {name}
          </h4>
          <span className="text-on-surface font-bold text-[18px] shrink-0">
            {price}
          </span>
        </div>
        <p className="text-on-surface-variant font-body-md text-sm line-clamp-1 mb-4">
          {specs}
        </p>
        <div className="mt-auto flex items-center gap-2">
          <div className="flex text-tertiary">
            {Array.from({ length: 5 }).map((_, i) => {
              if (i < Math.floor(stars)) {
                return (
                  <Icon key={i} icon="star" filled className="text-[14px]" />
                );
              }
              if (i === Math.floor(stars) && stars % 1 !== 0) {
                return (
                  <Icon
                    key={i}
                    icon="star_half"
                    filled
                    className="text-[14px]"
                  />
                );
              }
              return <Icon key={i} icon="star" className="text-[14px]" />;
            })}
          </div>
          <span className="text-on-surface-variant text-label-sm">{reviews}</span>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
