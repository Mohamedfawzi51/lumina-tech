"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { images } from "@/lib/images";
import { ShopProductCard } from "./ShopProductCard";

const products = [
  {
    key: "zenithPro" as const,
    image: images.shopZenithPro,
    stars: 5,
    badge: "new" as const,
    href: "/smartphones/lumina-x1-pro",
  },
  {
    key: "nebula" as const,
    image: images.shopNebula,
    stars: 4,
  },
  {
    key: "titanFold" as const,
    image: images.shopTitanFold,
    stars: 4.5,
    badge: "limited" as const,
  },
  {
    key: "zenithMini" as const,
    image: images.shopZenithMini,
    stars: 4,
  },
  {
    key: "aether" as const,
    image: images.shopAether,
    stars: 4,
    showHoverActions: false,
  },
  {
    key: "vision" as const,
    image: images.shopVision,
    stars: 4,
    showHoverActions: false,
  },
];

export function ShopProductGrid() {
  const { messages } = useLocale();
  const { shop } = messages;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(({ key, image, stars, badge, showHoverActions, href }) => {
        const product = shop.products[key];
        return (
          <ShopProductCard
            key={key}
            image={image}
            name={product.name}
            specs={product.specs}
            price={product.price}
            reviews={product.reviews}
            stars={stars}
            badge={badge}
            showHoverActions={showHoverActions}
            href={href}
          />
        );
      })}
    </div>
  );
}
