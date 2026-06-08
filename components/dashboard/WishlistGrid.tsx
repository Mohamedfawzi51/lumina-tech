"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";
import { images } from "@/lib/images";

const wishlistItems = [
  { key: "tablet" as const, image: images.wishlistTablet, id: "wishlist-tablet" },
  { key: "headphones" as const, image: images.wishlistHeadphones, id: "wishlist-headphones" },
  { key: "watch" as const, image: images.wishlistWatch, id: "wishlist-watch" },
  { key: "laptop" as const, image: images.wishlistLaptop, id: "wishlist-laptop" },
];

export function WishlistGrid() {
  const { messages } = useLocale();
  const { wishlist } = messages.dashboard;
  const { demo } = messages;
  const { addToCart, toggleWishlist, isWishlisted, showToast } = useDemo();

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-lg text-headline-lg text-on-surface">
          {wishlist.title}
        </h3>
        <button
          type="button"
          onClick={() => showToast(demo.wishlistManaged, "info")}
          className="text-primary font-label-md flex items-center gap-2 hover:underline"
        >
          {wishlist.manage}
          <Icon icon="settings" className="text-sm" size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {wishlistItems.map(({ key, image, id }) => {
          const item = wishlist.items[key];
          const saved = isWishlisted(id);

          if (!saved) return null;

          return (
            <div
              key={key}
              className="glass-panel rounded-3xl p-4 group cursor-pointer hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-square rounded-2xl bg-surface-container-low mb-4 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={item.name}
                  src={image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button
                  type="button"
                  onClick={() => toggleWishlist(id, item.name)}
                  className="absolute top-3 end-3 h-8 w-8 bg-surface-container/80 backdrop-blur-md rounded-full flex items-center justify-center text-error"
                >
                  <Icon icon="favorite" filled className="text-sm" size={16} />
                </button>
              </div>
              <h4 className="font-label-md text-on-surface mb-1 truncate">
                {item.name}
              </h4>
              <p className="text-primary font-label-md">{item.price}</p>
              <button
                type="button"
                onClick={() => addToCart({ productName: item.name, navigate: true })}
                className="w-full mt-4 py-2 border border-outline-variant/30 rounded-xl text-xs font-label-sm hover:bg-primary hover:text-on-primary-container transition-colors"
              >
                {wishlist.addToCart}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
