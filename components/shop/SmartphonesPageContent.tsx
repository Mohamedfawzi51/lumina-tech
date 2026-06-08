"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { MaterialIcon } from "@/components/MaterialIcon";
import { ShopFilters } from "@/components/shop/ShopFilters";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ShopPagination } from "@/components/shop/ShopPagination";
import { ShopProductGrid } from "@/components/shop/ShopProductGrid";

export function SmartphonesPageContent() {
  const { messages } = useLocale();
  const { shop, demo } = messages;
  const { showToast } = useDemo();

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const labels: Record<string, string> = {
      newest: shop.sort.newest,
      priceLow: shop.sort.priceLow,
      priceHigh: shop.sort.priceHigh,
      popularity: shop.sort.popularity,
    };
    showToast(
      demo.sortApplied.replace("{sort}", labels[e.target.value] ?? e.target.value),
      "info",
    );
  }

  return (
    <>
      <SiteHeader activeNav="smartphones" showSearch />

      <main className="grow max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-8">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <nav className="flex items-center gap-2 mb-2 text-on-surface-variant font-label-sm flex-wrap">
              <Link href="/" prefetch={false} className="hover:text-primary">
                {shop.breadcrumbs.home}
              </Link>
              <MaterialIcon
                icon="chevron_right"
                className="text-[14px] rtl:rotate-180"
              />
              <Link href="/smartphones" prefetch={false} className="hover:text-primary">
                {shop.breadcrumbs.shop}
              </Link>
              <MaterialIcon
                icon="chevron_right"
                className="text-[14px] rtl:rotate-180"
              />
              <span className="text-on-surface">
                {shop.breadcrumbs.smartphones}
              </span>
            </nav>
            <h2 className="font-display-lg-mobile md:text-headline-xl font-bold tracking-tight">
              {shop.title}
            </h2>
            <p className="text-on-surface-variant font-body-md mt-1">
              {shop.subtitle}
            </p>
          </div>

          <div className="relative group">
            <select
              defaultValue="newest"
              onChange={handleSortChange}
              className="appearance-none bg-surface-container border-none rounded-xl ps-4 pe-10 py-3 font-label-md text-on-surface focus:ring-2 focus:ring-primary min-w-[180px] cursor-pointer w-full md:w-auto"
            >
              <option value="newest">{shop.sort.newest}</option>
              <option value="priceLow">{shop.sort.priceLow}</option>
              <option value="priceHigh">{shop.sort.priceHigh}</option>
              <option value="popularity">{shop.sort.popularity}</option>
            </select>
            <MaterialIcon
              icon="expand_more"
              className="absolute end-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-gutter">
          <ShopFilters />

          <section className="grow min-w-0">
            <ShopProductGrid />
            <ShopPagination />
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
