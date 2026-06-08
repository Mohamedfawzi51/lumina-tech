"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";
import { ROUTES } from "@/lib/navigation";

type DashboardSidebarProps = {
  open: boolean;
  onClose: () => void;
  activeNav?: string;
};

const mainNav = [
  { key: "overview" as const, icon: "dashboard", href: "/dashboard" },
  { key: "orders" as const, icon: "shopping_bag", href: "#" },
  { key: "wishlist" as const, icon: "favorite", href: "#" },
  { key: "addresses" as const, icon: "location_on", href: "#" },
  { key: "profile" as const, icon: "person", href: "#" },
];

export function DashboardSidebar({
  open,
  onClose,
  activeNav = "overview",
}: DashboardSidebarProps) {
  const { messages } = useLocale();
  const { nav, dashboard } = messages;

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-[105] bg-black/60 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 start-0 z-[110] flex flex-col p-gutter w-80 bg-surface-container-highest transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full rtl:translate-x-full"
        }`}
      >
        <div className="mb-10 px-4">
          <Link href="/" onClick={onClose}>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              {nav.brand}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              {dashboard.tagline}
            </p>
          </Link>
        </div>

        <nav className="flex-1 space-y-2">
          {mainNav.map(({ key, icon, href }) => {
            const active = activeNav === key;
            return (
              <Link
                key={key}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-4 rounded-xl p-4 transition-all duration-300 group ${
                  active
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface-variant hover:bg-surface-variant"
                }`}
              >
                <Icon
                  icon={icon}
                  filled={false}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-label-md">{dashboard.nav[key]}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-outline-variant/30 pt-6 space-y-2">
          <Link
            href={ROUTES.contact}
            onClick={onClose}
            className="flex items-center gap-4 text-on-surface-variant p-4 hover:bg-surface-variant rounded-xl transition-all duration-300"
          >
            <Icon icon="help_outline" />
            <span className="font-label-md">{dashboard.nav.help}</span>
          </Link>
          <Link
            href="/login"
            onClick={onClose}
            className="flex items-center gap-4 text-error p-4 hover:bg-error-container/20 rounded-xl transition-all duration-300"
          >
            <Icon icon="logout" />
            <span className="font-label-md">{dashboard.nav.signOut}</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
