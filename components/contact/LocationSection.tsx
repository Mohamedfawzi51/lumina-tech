"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";
import { images } from "@/lib/images";
import { ROUTES } from "@/lib/navigation";

export function LocationSection() {
  const { messages } = useLocale();
  const { location } = messages.contact;

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-12">
        <h2 className="font-headline-xl text-headline-xl mb-4">
          {location.title}
        </h2>
        <p className="text-on-surface-variant">{location.address}</p>
      </div>

      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden glass-card">
        <div className="absolute inset-0 bg-surface-container-highest flex items-center justify-center map-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={images.contactMap}
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 animate-pulse flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-[0_0_30px_rgba(173,198,255,0.6)]">
                <Icon icon="location_on" className="text-on-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 start-8 glass-card p-6 rounded-xl max-w-xs hidden md:block">
          <h3 className="font-headline-lg text-headline-lg mb-2 text-primary">
            {location.hqTitle}
          </h3>
          <p className="text-body-md text-on-surface-variant mb-4">
            {location.hqDescription}
          </p>
          <Link
            href={ROUTES.contact}
            className="text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-4 transition-all"
          >
            {location.directions}
            <Icon icon="arrow_forward" className="text-sm rtl:rotate-180" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
