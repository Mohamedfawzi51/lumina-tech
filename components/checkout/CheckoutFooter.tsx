"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";

export function CheckoutFooter() {
  const { messages } = useLocale();
  const { nav, footer, checkout } = messages;

  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto bg-surface-container-lowest border-t border-outline-variant mt-auto">
      <div className="md:col-span-1">
        <div className="font-headline-xl text-headline-xl text-on-surface mb-4">
          {nav.brand}
        </div>
        <p className="text-on-surface-variant font-body-md pe-4">
          {checkout.footer.tagline}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="font-label-md text-on-surface mb-2">
          {checkout.footer.shop}
        </h4>
        <Link
          href="/smartphones"
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          {nav.smartphones}
        </Link>
        <a
          href="#"
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          {nav.laptops}
        </a>
        <a
          href="#"
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          {nav.accessories}
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="font-label-md text-on-surface mb-2">
          {checkout.footer.support}
        </h4>
        <a
          href="#"
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          {footer.customerSupport}
        </a>
        <a
          href="#"
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          {footer.shippingReturns}
        </a>
        <a
          href="#"
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          {footer.securePayment}
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="font-label-md text-on-surface mb-2">
          {checkout.footer.company}
        </h4>
        <a
          href="#"
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          {footer.aboutUs}
        </a>
        <a
          href="#"
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          {footer.privacyPolicy}
        </a>
        <div className="mt-4 flex gap-4 text-on-surface-variant">
          <button type="button" className="hover:text-primary transition-colors">
            <Icon icon="language" />
          </button>
          <button type="button" className="hover:text-primary transition-colors">
            <Icon icon="help_outline" />
          </button>
        </div>
      </div>

      <div className="md:col-span-4 pt-12 border-t border-outline-variant/30 text-center text-on-surface-variant font-label-sm">
        {footer.copyright}
      </div>
    </footer>
  );
}
