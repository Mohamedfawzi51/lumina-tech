"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const navKeys = [
  { key: "smartphones" as const, href: "/smartphones", active: true },
  { key: "laptops" as const, href: "#" },
  { key: "tablets" as const, href: "#" },
  { key: "accessories" as const, href: "#" },
];

export function ProductHeader() {
  const { messages } = useLocale();
  const { nav } = messages;
  const [cartCount] = useState(2);

  return (
    <header className="sticky top-0 w-full z-[100] flex items-center justify-between px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <Link
        href="/"
        className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold text-primary tracking-tight"
      >
        {nav.brand}
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navKeys.map(({ key, href, active }) => (
          <Link
            key={key}
            href={href}
            className={`font-label-md text-label-md transition-colors ${
              active
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {nav[key]}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2 md:gap-4">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <button
          type="button"
          className="p-2 text-on-surface-variant hover:opacity-80 transition-all"
        >
          <Icon icon="favorite" />
        </button>
        <Link href="/cart" className="relative p-2 text-on-surface-variant hover:opacity-80 transition-all">
          <Icon icon="shopping_cart" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -end-1 bg-primary text-on-primary-container text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
        <Link
          href="/dashboard"
          className="p-2 text-on-surface-variant hover:opacity-80 transition-all"
        >
          <Icon icon="account_circle" />
        </Link>
      </div>
    </header>
  );
}
