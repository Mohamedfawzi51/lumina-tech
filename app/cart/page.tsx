"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";
import { CartEmpty } from "@/components/cart/CartEmpty";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CartItem } from "@/components/cart/CartItem";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { images } from "@/lib/images";

type CartLine = {
  id: string;
  image: string;
  nameKey: "laptop" | "headphones";
  quantity: number;
};

const initialItems: CartLine[] = [
  { id: "laptop", image: images.cartLaptop, nameKey: "laptop", quantity: 1 },
  {
    id: "headphones",
    image: images.cartHeadphones,
    nameKey: "headphones",
    quantity: 1,
  },
];

export default function CartPage() {
  const { messages } = useLocale();
  const { cart } = messages;
  const [items, setItems] = useState(initialItems);
  const { setCartCount, showToast } = useDemo();
  const { demo } = messages;

  function removeItem(id: string) {
    setItems((prev) => {
      const removed = prev.find((item) => item.id === id);
      if (removed) {
        setCartCount((c) => Math.max(0, c - removed.quantity));
      }
      return prev.filter((item) => item.id !== id);
    });
    showToast(demo.removedFromCart, "info");
  }

  function updateQuantity(id: string, delta: number) {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const nextQty = Math.max(1, item.quantity + delta);
        setCartCount((c) => c + (nextQty - item.quantity));
        return { ...item, quantity: nextQty };
      }),
    );
  }

  const isEmpty = items.length === 0;

  return (
    <>
      <SiteHeader />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 grow w-full">
        <div className="mb-12">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-2">
            {cart.title}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {cart.subtitle}
          </p>
        </div>

        {isEmpty ? (
          <CartEmpty />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              {items.map((item) => {
                const product = cart.items[item.nameKey];
                return (
                  <CartItem
                    key={item.id}
                    image={item.image}
                    name={product.name}
                    variant={product.variant}
                    price={product.price}
                    quantity={item.quantity}
                    onIncrease={() => updateQuantity(item.id, 1)}
                    onDecrease={() => updateQuantity(item.id, -1)}
                    onRemove={() => removeItem(item.id)}
                  />
                );
              })}

              <div className="flex items-center gap-4 p-4 rounded-xl border border-primary/20 bg-primary/5">
                <Icon icon="local_shipping" className="text-primary shrink-0" />
                <p className="font-body-md text-body-md text-on-surface">
                  {cart.shippingNotice}{" "}
                  <span className="text-primary font-bold">
                    {cart.freeShipping}
                  </span>{" "}
                  {cart.shippingSuffix}
                </p>
              </div>
            </div>

            <OrderSummary />
          </div>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
