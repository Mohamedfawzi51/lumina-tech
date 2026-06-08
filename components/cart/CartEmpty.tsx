"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";

export function CartEmpty() {
  const { messages } = useLocale();
  const { cart } = messages;

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center max-w-lg mx-auto">
      <div className="w-48 h-48 mb-8 relative">
        <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <Icon
            icon="shopping_cart_off"
            className="text-[84px] text-primary"
            size={84}
          />
        </div>
      </div>
      <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
        {cart.empty.title}
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-10">
        {cart.empty.description}
      </p>
      <Link
        href="/smartphones"
        className="inline-flex items-center gap-3 bg-surface-container-high text-primary border border-primary/30 px-8 py-4 rounded-full font-label-md hover:bg-primary hover:text-on-primary transition-all duration-300"
      >
        {cart.empty.continueShopping}
        <Icon icon="arrow_forward" className="text-[18px] rtl:rotate-180" />
      </Link>
    </div>
  );
}
