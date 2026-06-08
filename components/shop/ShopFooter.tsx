"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { MaterialIcon } from "@/components/MaterialIcon";

export function ShopFooter() {
  const { messages } = useLocale();
  const { nav, footer, shopFooter } = messages;

  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant mt-auto">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="space-y-6">
          <h3 className="font-headline-xl text-headline-xl text-on-surface">
            {nav.brand}
          </h3>
          <p className="text-on-surface-variant font-body-md">
            {shopFooter.tagline}
          </p>
          <div className="flex gap-4">
            {["alternate_email", "public", "smartphone"].map((icon) => (
              <button
                key={icon}
                type="button"
                className="p-2 rounded-lg bg-surface-container hover:bg-primary/20 transition-all"
              >
                <MaterialIcon icon={icon} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-6">
            {shopFooter.explore}
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/smartphones"
                className="text-on-surface-variant hover:text-primary transition-colors font-label-sm"
              >
                {nav.smartphones}
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors font-label-sm"
              >
                {nav.laptops}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors font-label-sm"
              >
                {shopFooter.audioSound}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors font-label-sm"
              >
                {shopFooter.smartHome}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-6">
            {shopFooter.support}
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors font-label-sm"
              >
                {shopFooter.helpCenter}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors font-label-sm"
              >
                {footer.shippingReturns}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors font-label-sm"
              >
                {footer.privacyPolicy}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors font-label-sm"
              >
                {shopFooter.warranty}
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-label-md text-on-surface uppercase tracking-widest">
            {shopFooter.newsletterTitle}
          </h4>
          <p className="text-on-surface-variant font-label-sm">
            {shopFooter.newsletterSubtitle}
          </p>
          <form
            className="flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={shopFooter.emailPlaceholder}
              className="bg-surface-container-high border-none rounded-xl px-4 py-3 text-label-md grow focus:ring-1 focus:ring-primary min-w-0"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary-container px-6 py-3 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shrink-0"
            >
              {shopFooter.join}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant font-label-sm">{footer.copyright}</p>
        <div className="flex gap-6">
          {["credit_card", "account_balance_wallet", "contactless"].map(
            (icon) => (
              <MaterialIcon
                key={icon}
                icon={icon}
                className="text-on-surface-variant"
              />
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
