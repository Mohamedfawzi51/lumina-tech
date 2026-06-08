"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { mainNavItems, ROUTES, type NavKey } from "@/lib/navigation";

type SiteHeaderProps = {
  activeNav?: NavKey;
  showSearch?: boolean;
  searchPlaceholder?: string;
};

const NAV_PREFETCH = process.env.NODE_ENV === "production";

function resolveActiveNav(
  pathname: string,
  explicit?: NavKey,
): NavKey | undefined {
  if (explicit) return explicit;
  if (pathname.startsWith("/smartphones")) return "smartphones";
  if (pathname === ROUTES.about) return "about";
  if (pathname === ROUTES.contact) return "contact";
  return undefined;
}

export function SiteHeader({
  activeNav: activeNavProp,
  showSearch = false,
  searchPlaceholder,
}: SiteHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { messages } = useLocale();
  const { nav, shop } = messages;
  const { cartCount } = useDemo();
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeNav = resolveActiveNav(pathname, activeNavProp);
  const placeholder = searchPlaceholder ?? shop.searchPlaceholder;

  const closeMore = useCallback(() => setMoreOpen(false), []);

  useEffect(() => {
    closeMore();
    setMobileSearchOpen(false);
  }, [pathname, closeMore]);

  useEffect(() => {
    const root = document.documentElement;
    if (moreOpen) {
      root.classList.add("nav-menu-open");
    } else {
      root.classList.remove("nav-menu-open");
    }
    return () => root.classList.remove("nav-menu-open");
  }, [moreOpen]);

  useEffect(() => {
    if (!activeNav || !navTrackRef.current) return;
    const activeEl = navTrackRef.current.querySelector<HTMLElement>(
      `[data-nav-key="${activeNav}"]`,
    );
    activeEl?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeNav]);

  function navLabel(key: NavKey) {
    if (key === "about") return nav.aboutUs;
    if (key === "contact") return nav.contactUs;
    return nav[key];
  }

  function pillClass(key: NavKey) {
    const isActive = activeNav === key;
    return `snap-start shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-nav font-label-md transition-all duration-200 active:scale-95 ${
      isActive
        ? "bg-primary text-on-primary shadow-[0_2px_12px_rgba(173,198,255,0.35)] font-semibold"
        : "bg-surface-container text-on-surface-variant border border-outline-variant/40 hover:border-primary/40 hover:text-primary"
    }`;
  }

  function desktopLinkClass(key: NavKey) {
    const isActive = activeNav === key;
    return `font-label-md text-nav py-1 transition-colors whitespace-nowrap ${
      isActive
        ? "text-primary border-b-2 border-primary pb-0.5"
        : "text-on-surface-variant hover:text-primary"
    }`;
  }

  function handleNavClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    if (pathname === href) {
      e.preventDefault();
      return;
    }
    closeMore();
  }

  const iconBtnClass =
    "flex items-center justify-center size-10 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-variant/80 transition-all active:scale-95";

  return (
    <header className="sticky top-0 w-full z-[100] bg-surface/95 backdrop-blur-xl border-b border-outline-variant/25 shadow-[0_1px_0_rgba(255,255,255,0.04)]">
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 py-2.5 min-h-[3.25rem]">
          <Link
            href={ROUTES.home}
            prefetch={NAV_PREFETCH}
            className="font-bold text-brand text-primary tracking-tight shrink-0 hover:opacity-90 transition-opacity"
          >
            {nav.brand}
          </Link>

          <div className="hidden xl:flex items-center justify-center gap-5 flex-1 px-6 min-w-0">
            {mainNavItems.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                prefetch={NAV_PREFETCH}
                className={desktopLinkClass(key)}
              >
                {navLabel(key)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-0.5 shrink-0">
            {showSearch && (
              <button
                type="button"
                aria-label={placeholder}
                onClick={() => setMobileSearchOpen((v) => !v)}
                className={`${iconBtnClass} lg:hidden`}
              >
                <Icon icon="search" size={20} />
              </button>
            )}

            <div className="hidden lg:flex items-center gap-0.5">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>

            <Link
              href={ROUTES.dashboard}
              prefetch={NAV_PREFETCH}
              className={`${iconBtnClass} hidden sm:flex`}
              title={nav.wishlist}
            >
              <Icon icon="favorite" size={20} />
            </Link>

            <Link
              href={ROUTES.cart}
              prefetch={NAV_PREFETCH}
              className={`${iconBtnClass} relative`}
              title="Cart"
            >
              <Icon icon="shopping_cart" size={20} />
              {cartCount > 0 && (
                <span className="absolute top-1 end-1 min-w-[1.125rem] h-[1.125rem] px-0.5 flex items-center justify-center rounded-full bg-primary text-on-primary-container text-[10px] font-bold ring-2 ring-surface">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              href={ROUTES.dashboard}
              prefetch={NAV_PREFETCH}
              className={`${iconBtnClass} hidden sm:flex`}
              title={nav.account}
            >
              <Icon icon="account_circle" size={20} />
            </Link>

            <Link
              href={ROUTES.login}
              prefetch={NAV_PREFETCH}
              className="hidden md:inline-flex items-center px-4 py-2 ms-1 bg-primary-container text-on-primary-container font-label-md text-nav rounded-full hover:opacity-90 transition-all active:scale-95 whitespace-nowrap"
            >
              {nav.login}
            </Link>

            <button
              type="button"
              aria-label={nav.more}
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((open) => !open)}
              className={`${iconBtnClass} xl:hidden relative z-10`}
            >
              <Icon icon="settings" size={20} />
            </button>
          </div>
        </div>

        {/* Mobile & tablet — always-visible category tabs */}
        <div className="xl:hidden border-t border-outline-variant/20 pb-2.5">
          <p className="sr-only">{nav.browse}</p>
          <div className="mobile-nav-fade -mx-margin-mobile px-margin-mobile pt-2">
            <div
              ref={navTrackRef}
              className="mobile-nav-track flex items-center gap-2 overflow-x-auto pe-1"
              role="tablist"
              aria-label={nav.browse}
            >
              {mainNavItems.map(({ key, href, icon }) => (
                <Link
                  key={key}
                  href={href}
                  prefetch={false}
                  data-nav-key={key}
                  role="tab"
                  aria-selected={activeNav === key}
                  onClick={(e) => handleNavClick(e, href)}
                  className={pillClass(key)}
                >
                  <Icon
                    icon={icon}
                    size={16}
                    className={activeNav === key ? "opacity-90" : "opacity-70"}
                  />
                  <span>{navLabel(key)}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Search row */}
        {showSearch && (
          <div
            className={`pb-3 ${
              mobileSearchOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="relative w-full">
              <Icon
                icon="search"
                className="absolute start-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
                size={18}
              />
              <input
                type="search"
                placeholder={placeholder}
                className="w-full bg-surface-container-low border border-outline-variant/40 rounded-2xl ps-10 pe-4 py-2.5 text-body-md focus:ring-2 focus:ring-primary/25 focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/55"
              />
            </div>
          </div>
        )}
      </nav>

      {mounted &&
        moreOpen &&
        createPortal(
          <>
            <button
              type="button"
              aria-label="Close"
              className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-[2px] xl:hidden"
              onClick={closeMore}
            />
            <div
              className="fixed inset-x-0 bottom-0 z-[210] xl:hidden mobile-sheet-enter pointer-events-none"
              role="dialog"
              aria-modal="true"
              aria-label={nav.more}
            >
              <div className="pointer-events-auto mx-2 mb-2 rounded-3xl bg-surface-container-highest border border-outline-variant/40 shadow-2xl overflow-hidden">
                <div className="flex justify-center pt-3 pb-1">
                  <span className="w-10 h-1 rounded-full bg-outline-variant/60" />
                </div>

                <div className="px-4 pb-2 grid grid-cols-4 gap-2">
                  <Link
                    href={ROUTES.dashboard}
                    prefetch={false}
                    onClick={closeMore}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl hover:bg-surface-variant/50 transition-colors"
                  >
                    <span className="size-11 flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon icon="favorite" size={20} />
                    </span>
                    <span className="text-[11px] font-label-md text-on-surface-variant text-center leading-tight">
                      {nav.wishlist}
                    </span>
                  </Link>
                  <Link
                    href={ROUTES.dashboard}
                    prefetch={false}
                    onClick={closeMore}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl hover:bg-surface-variant/50 transition-colors"
                  >
                    <span className="size-11 flex items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                      <Icon icon="account_circle" size={20} />
                    </span>
                    <span className="text-[11px] font-label-md text-on-surface-variant text-center leading-tight">
                      {nav.account}
                    </span>
                  </Link>
                  <div className="flex flex-col items-center gap-1.5 p-3 rounded-2xl">
                    <span className="size-11 flex items-center justify-center rounded-2xl bg-surface-variant/80">
                      <LanguageSwitcher />
                    </span>
                    <span className="text-[11px] font-label-md text-on-surface-variant text-center leading-tight">
                      {messages.language.switch}
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 p-3 rounded-2xl">
                    <span className="size-11 flex items-center justify-center rounded-2xl bg-surface-variant/80">
                      <ThemeSwitcher />
                    </span>
                    <span className="text-[11px] font-label-md text-on-surface-variant text-center leading-tight">
                      {messages.theme.toggle}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-outline-variant/25 mx-4" />

                <div className="p-3 flex flex-col gap-1 max-h-[40vh] overflow-y-auto">
                  {mainNavItems.map(({ key, href, icon }) => (
                    <Link
                      key={key}
                      href={href}
                      prefetch={false}
                      onClick={(e) => {
                        if (pathname === href) {
                          e.preventDefault();
                          closeMore();
                          return;
                        }
                        e.preventDefault();
                        closeMore();
                        router.push(href);
                      }}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-colors ${
                        activeNav === key
                          ? "bg-primary/10 text-primary"
                          : "text-on-surface hover:bg-surface-variant/60"
                      }`}
                    >
                      <Icon icon={icon} size={20} />
                      <span className="font-label-md text-body-md flex-1">
                        {navLabel(key)}
                      </span>
                      <Icon
                        icon="chevron_right"
                        size={16}
                        className="opacity-40 rtl:rotate-180"
                      />
                    </Link>
                  ))}
                </div>

                <div className="p-4 pt-2 border-t border-outline-variant/25">
                  <Link
                    href={ROUTES.login}
                    prefetch={false}
                    onClick={(e) => {
                      if (pathname === ROUTES.login) {
                        e.preventDefault();
                        closeMore();
                        return;
                      }
                      e.preventDefault();
                      closeMore();
                      router.push(ROUTES.login);
                    }}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-on-primary font-label-md rounded-2xl hover:opacity-90 transition-opacity active:scale-[0.98]"
                  >
                    <Icon icon="lock" size={18} />
                    {nav.login}
                  </Link>
                </div>
              </div>
            </div>
          </>,
          document.body,
        )}
    </header>
  );
}
