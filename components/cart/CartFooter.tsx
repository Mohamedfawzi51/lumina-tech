"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";

export function CartFooter() {
  const { messages } = useLocale();
  const { nav, footer, cart } = messages;

  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant mt-auto">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="md:col-span-1">
          <span className="font-headline-xl text-headline-xl text-on-surface">
            {nav.brand}
          </span>
          <p className="mt-4 text-on-surface-variant font-body-md">
            {cart.footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-widest">
            {cart.footer.shop}
          </h4>
          <nav className="flex flex-col gap-2">
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
              {footer.customerSupport}
            </a>
            <a
              href="#"
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              {footer.privacyPolicy}
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-widest">
            {cart.footer.services}
          </h4>
          <nav className="flex flex-col gap-2">
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
            <a
              href="#"
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              {cart.footer.premiumWarranty}
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-widest">
            {cart.footer.newsletter}
          </h4>
          <form
            className="relative"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={cart.footer.emailPlaceholder}
              className="w-full bg-surface-container border-b border-outline-variant py-2 pe-10 focus:border-primary outline-none transition-colors"
            />
            <button
              type="submit"
              className="absolute end-0 top-1/2 -translate-y-1/2 text-primary"
            >
              <Icon icon="east" className="rtl:rotate-180" />
            </button>
          </form>
          <div className="flex gap-4">
            <button type="button" className="text-on-surface-variant hover:text-primary">
              <Icon icon="language" />
            </button>
            <button type="button" className="text-on-surface-variant hover:text-primary">
              <Icon icon="help_outline" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant/50 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          {footer.copyright}
        </p>
        <div className="flex gap-6">
          <Icon icon="hub" className="text-on-surface-variant text-[20px]" />
          <Icon
            icon="auto_awesome"
            className="text-on-surface-variant text-[20px]"
          />
        </div>
      </div>
    </footer>
  );
}
