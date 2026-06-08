"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { images } from "@/lib/images";
import { ROUTES } from "@/lib/navigation";
import { MaterialIcon } from "./MaterialIcon";

function ExploreLink({
  label,
  onClick,
  href,
}: {
  label: string;
  onClick?: () => void;
  href?: string;
}) {
  const className =
    "text-primary font-label-md flex items-center gap-2 group/link";

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
        <MaterialIcon
          icon="arrow_forward"
          className="group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform"
        />
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {label}
      <MaterialIcon
        icon="arrow_forward"
        className="group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform"
      />
    </button>
  );
}

export function CategoriesGrid() {
  const { messages } = useLocale();
  const { categories, nav } = messages;
  const { browseCategory } = useDemo();

  return (
    <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
        <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container h-[400px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={categories.laptops.title}
            src={images.laptops}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-8 start-8">
            <h3 className="font-headline-xl text-headline-xl text-on-surface mb-2">
              {categories.laptops.title}
            </h3>
            <p className="text-on-surface-variant mb-4">
              {categories.laptops.subtitle}
            </p>
            <ExploreLink
              label={categories.laptops.explore}
              onClick={() => browseCategory(nav.laptops)}
            />
          </div>
        </div>

        <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container h-[400px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={categories.smartphones.title}
            src={images.smartphones}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-8 start-8">
            <h3 className="font-headline-xl text-headline-xl text-on-surface mb-2">
              {categories.smartphones.title}
            </h3>
            <ExploreLink
              label={categories.smartphones.explore}
              href={ROUTES.smartphones}
            />
          </div>
        </div>

        <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container h-[400px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={categories.tablets.title}
            src={images.tablets}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-8 start-8">
            <h3 className="font-headline-xl text-headline-xl text-on-surface mb-2">
              {categories.tablets.title}
            </h3>
            <ExploreLink
              label={categories.tablets.explore}
              onClick={() => browseCategory(nav.tablets)}
            />
          </div>
        </div>

        <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container h-[400px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={categories.accessories.title}
            src={images.accessories}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-8 start-8">
            <h3 className="font-headline-xl text-headline-xl text-on-surface mb-2">
              {categories.accessories.title}
            </h3>
            <p className="text-on-surface-variant mb-4">
              {categories.accessories.subtitle}
            </p>
            <ExploreLink
              label={categories.accessories.explore}
              onClick={() => browseCategory(nav.accessories)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
