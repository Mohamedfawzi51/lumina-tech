"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";
import { ROUTES } from "@/lib/navigation";

export function DashboardFooter() {
  const { messages } = useLocale();
  const { nav, footer, dashboard, demo } = messages;
  const { browseCategory, showToast, showLegal } = useDemo();

  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
        <div className="md:col-span-1">
          <h5 className="font-headline-xl text-headline-xl text-on-surface mb-6">
            {nav.brand}
          </h5>
          <p className="text-on-surface-variant font-label-sm max-w-xs">
            {dashboard.footer.tagline}
          </p>
        </div>

        <div>
          <h6 className="font-label-md text-primary uppercase mb-6 tracking-widest">
            {dashboard.footer.shop}
          </h6>
          <ul className="space-y-3">
            {(["smartphones", "laptops", "tablets", "accessories"] as const).map(
              (key) => (
                <li key={key}>
                  {key === "smartphones" ? (
                    <Link
                      href={ROUTES.smartphones}
                      className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {nav[key]}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => browseCategory(nav[key])}
                      className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {nav[key]}
                    </button>
                  )}
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h6 className="font-label-md text-primary uppercase mb-6 tracking-widest">
            {dashboard.footer.account}
          </h6>
          <ul className="space-y-3">
            <li>
              <button
                type="button"
                onClick={() => showToast(demo.orderDetails.replace("{id}", "profile"), "info")}
                className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {dashboard.footer.myProfile}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => showToast(demo.orderDetails.replace("{id}", "all"), "info")}
                className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {dashboard.footer.orderHistory}
              </button>
            </li>
            <li>
              <Link
                href={ROUTES.checkout}
                className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {dashboard.footer.shippingDetails}
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => showLegal("privacy")}
                className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {dashboard.footer.privacySettings}
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-label-md text-primary uppercase mb-6 tracking-widest">
            {dashboard.footer.support}
          </h6>
          <ul className="space-y-3">
            <li>
              <Link
                href={ROUTES.contact}
                className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {dashboard.footer.contactSupport}
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => showToast(demo.legalTerms, "info")}
                className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {dashboard.footer.returnPolicy}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => showToast(demo.customerSupport, "info")}
                className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {footer.securePayment}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant/30 gap-4">
        <p className="font-label-sm text-on-surface-variant">
          {footer.copyright}
        </p>
        <div className="flex gap-6">
          <button
            type="button"
            onClick={() => showToast(demo.customerSupport, "info")}
            className="text-on-surface-variant hover:text-primary cursor-pointer"
          >
            <Icon icon="language" />
          </button>
          <Link
            href={ROUTES.contact}
            className="text-on-surface-variant hover:text-primary cursor-pointer"
          >
            <Icon icon="help_outline" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
