"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const navKeys = [
  { key: "smartphones" as const, href: "/smartphones" },
  { key: "laptops" as const, href: "#" },
  { key: "tablets" as const, href: "#" },
  { key: "accessories" as const, href: "#" },
];

export function CartHeader({ cartCount = 2 }: { cartCount?: number }) {
  const { messages } = useLocale();
  const { nav } = messages;

  return (
    <header className="sticky top-0 w-full z-[100] flex items-center justify-between px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <div className="flex items-center gap-gutter min-w-0">
        <Link
          href="/"
          className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold text-primary tracking-tight shrink-0"
        >
          {nav.brand}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navKeys.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
            >
              {nav[key]}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <button
          type="button"
          className="p-2 hover:opacity-80 transition-all"
        >
          <Icon icon="favorite" className="text-primary" />
        </button>
        <Link
          href="/cart"
          className="p-2 hover:opacity-80 transition-all relative"
        >
          <Icon icon="shopping_cart" className="text-primary" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -end-1 bg-primary text-on-primary text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              {cartCount}
            </span>
          )}
        </Link>
        <Link
          href="/dashboard"
          className="p-2 hover:opacity-80 transition-all"
        >
          <Icon icon="account_circle" className="text-primary" />
        </Link>
      </div>
    </header>
  );
}
