"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";
import { ROUTES } from "@/lib/navigation";

type SiteFooterProps = {
  tagline?: string;
  variant?: "default" | "about" | "contact";
};

const shopLinks = [
  { key: "smartphones" as const, href: ROUTES.smartphones },
  { key: "laptops" as const },
  { key: "tablets" as const },
  { key: "accessories" as const },
];

export function SiteFooter({ tagline, variant = "default" }: SiteFooterProps) {
  const { messages } = useLocale();
  const { nav, footer } = messages;
  const { copyShareLink, browseCategory, showLegal, showToast } = useDemo();
  const { demo } = messages;

  const description =
    tagline ??
    (variant === "about"
      ? messages.about.footer.tagline
      : variant === "contact"
        ? messages.contact.footer.tagline
        : footer.tagline);

  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto border-t border-outline-variant bg-surface-container-lowest mt-auto">
      <div className="col-span-1">
        <Link href={ROUTES.home}>
          <div className="font-headline-xl text-headline-xl text-on-surface mb-6">
            {nav.brand}
          </div>
        </Link>
        <p className="text-on-surface-variant text-label-md mb-8">{description}</p>
        <div className="flex gap-4">
          <Link
            href={ROUTES.contact}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-primary hover:text-on-primary transition-colors"
          >
            <Icon icon="public" className="text-sm" />
          </Link>
          <a
            href="mailto:support@lumina-tech.com"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-primary hover:text-on-primary transition-colors"
          >
            <Icon icon="mail" className="text-sm" />
          </a>
          <button
            type="button"
            onClick={copyShareLink}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-primary hover:text-on-primary transition-colors"
          >
            <Icon icon="share" className="text-sm" />
          </button>
        </div>
      </div>

      <div>
        <h4 className="font-label-md text-on-surface mb-6 uppercase tracking-wider">
          {footer.shopping}
        </h4>
        <ul className="space-y-4">
          {shopLinks.map(({ key, href }) => (
            <li key={key}>
              {href ? (
                <Link
                  href={href}
                  className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {nav[key]}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => browseCategory(nav[key])}
                  className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {nav[key]}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-label-md text-on-surface mb-6 uppercase tracking-wider">
          {footer.company}
        </h4>
        <ul className="space-y-4">
          <li>
            <Link
              href={ROUTES.about}
              className={`font-label-sm text-label-sm transition-colors ${
                variant === "about"
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {footer.aboutUs}
            </Link>
          </li>
          <li>
            <Link
              href={ROUTES.contact}
              className={`font-label-sm text-label-sm transition-colors ${
                variant === "contact"
                  ? "text-primary underline"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {footer.contactUs}
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => showToast(demo.customerSupport, "info")}
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              {footer.customerSupport}
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => showLegal("privacy")}
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              {footer.privacyPolicy}
            </button>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-label-md text-on-surface mb-6 uppercase tracking-wider">
          {footer.contact}
        </h4>
        <p className="text-on-surface-variant text-label-sm mb-4">
          {footer.address}
          <br />
          {footer.city}
        </p>
        <p className="text-on-surface-variant text-label-sm mb-2">
          {footer.email}
        </p>
        <p className="text-on-surface-variant text-label-sm">{footer.phone}</p>
      </div>

      <div className="col-span-1 md:col-span-4 flex flex-col md:flex-row items-center justify-between border-t border-outline-variant pt-8 mt-4 gap-4">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          {footer.copyright}
        </p>
        <div className="flex gap-8">
          <button
            type="button"
            onClick={() => showLegal("terms")}
            className="text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {footer.termsOfService}
          </button>
          <button
            type="button"
            onClick={() => showLegal("cookies")}
            className="text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {footer.cookiePolicy}
          </button>
        </div>
      </div>
    </footer>
  );
}
