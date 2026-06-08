"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductTabs } from "@/components/product/ProductTabs";
import { RelatedProducts } from "@/components/product/RelatedProducts";

export default function LuminaX1ProPage() {
  const { messages } = useLocale();
  const { product } = messages;

  return (
    <>
      <SiteHeader activeNav="smartphones" showSearch />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 grow w-full">
        <nav className="flex items-center gap-2 mb-8 text-on-surface-variant font-label-sm text-label-sm flex-wrap">
          <Link href="/" className="hover:text-primary">
            {product.breadcrumbs.home}
          </Link>
          <Icon icon="chevron_right" className="text-[14px] rtl:rotate-180" />
          <Link href="/smartphones" className="hover:text-primary">
            {product.breadcrumbs.smartphones}
          </Link>
          <Icon icon="chevron_right" className="text-[14px] rtl:rotate-180" />
          <span className="text-on-surface">{product.breadcrumbs.product}</span>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-24">
          <ProductGallery />
          <ProductInfo />
        </section>

        <ProductTabs />
        <RelatedProducts />
      </main>

      <SiteFooter />
    </>
  );
}
