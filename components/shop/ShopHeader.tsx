"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MaterialIcon } from "@/components/MaterialIcon";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const navKeys = [
  { key: "smartphones" as const, href: "/smartphones", active: true },
  { key: "laptops" as const, href: "#" },
  { key: "tablets" as const, href: "#" },
  { key: "accessories" as const, href: "#" },
];

export function ShopHeader() {
  const { messages } = useLocale();
  const { nav, shop } = messages;

  return (
    <header className="sticky top-0 w-full z-[100] flex items-center justify-between px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <div className="flex items-center gap-4 lg:gap-8 min-w-0">
        <Link
          href="/"
          className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold text-primary tracking-tight shrink-0"
        >
          {nav.brand}
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navKeys.map(({ key, href, active }) => (
            <Link
              key={key}
              href={href}
              className={`font-label-md text-label-md transition-colors whitespace-nowrap ${
                active
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {nav[key]}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <div className="relative hidden md:block">
          <MaterialIcon
            icon="search"
            className="absolute start-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]"
          />
          <input
            type="text"
            placeholder={shop.searchPlaceholder}
            className="bg-surface-container-low border-none rounded-full ps-10 pe-4 py-2 text-label-md focus:ring-1 focus:ring-primary w-48 lg:w-64 transition-all"
          />
        </div>

        <LanguageSwitcher />
        <ThemeSwitcher />

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="p-2 rounded-full hover:bg-surface-variant transition-all"
          >
            <MaterialIcon icon="favorite" />
          </button>
          <Link
            href="/cart"
            className="p-2 rounded-full hover:bg-surface-variant transition-all relative"
          >
            <MaterialIcon icon="shopping_cart" />
            <span className="absolute top-1 end-1 w-2 h-2 bg-primary rounded-full" />
          </Link>
          <Link
            href="/dashboard"
            className="p-2 rounded-full hover:bg-surface-variant transition-all"
          >
            <MaterialIcon icon="account_circle" />
          </Link>
        </div>
      </div>
    </header>
  );
}
