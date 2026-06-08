"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";

const navKeys = [
  "smartphones",
  "laptops",
  "tablets",
  "accessories",
] as const;

const supportKeys = [
  "customerSupport",
  "privacyPolicy",
  "shippingReturns",
  "securePayment",
] as const;

export function ProductFooter() {
  const { messages } = useLocale();
  const { nav, footer, product } = messages;

  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant mt-auto">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="flex flex-col gap-6">
          <div className="font-headline-xl text-headline-xl text-on-surface">
            {nav.brand}
          </div>
          <p className="text-on-surface-variant font-body-md">
            {product.footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h6 className="font-headline-lg text-on-surface">
            {product.footer.navigation}
          </h6>
          <nav className="flex flex-col gap-2 font-label-sm text-label-sm">
            {navKeys.map((key) => (
              <Link
                key={key}
                href={key === "smartphones" ? "/smartphones" : "#"}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                {nav[key]}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h6 className="font-headline-lg text-on-surface">
            {footer.company}
          </h6>
          <nav className="flex flex-col gap-2 font-label-sm text-label-sm">
            {supportKeys.map((key) => (
              <a
                key={key}
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                {footer[key]}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <h6 className="font-headline-lg text-on-surface">
            {product.footer.connect}
          </h6>
          <div className="flex gap-4">
            {["public", "share", "chat"].map((icon) => (
              <button
                key={icon}
                type="button"
                className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary-container transition-all"
              >
                <Icon icon={icon} className="text-[20px]" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant font-label-sm text-label-sm">
        <span>{footer.copyright}</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-on-surface transition-colors">
            {footer.termsOfService}
          </a>
          <a href="#" className="hover:text-on-surface transition-colors">
            {footer.cookiePolicy}
          </a>
        </div>
      </div>
    </footer>
  );
}
