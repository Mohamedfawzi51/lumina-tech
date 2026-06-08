"use client";

import { useLocale } from "@/contexts/LocaleContext";

const inputClass =
  "w-full bg-surface-container-low border-b border-outline-variant py-3 px-1 text-on-surface transition-all input-focus-effect font-body-md";

export function ShippingForm() {
  const { messages } = useLocale();
  const { shipping } = messages.checkout;

  return (
    <section className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
      <div className="flex items-center gap-4 mb-8">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-container text-on-primary-container font-label-md">
          1
        </span>
        <h2 className="font-headline-xl text-headline-xl text-on-surface">
          {shipping.title}
        </h2>
      </div>

      <div className="glass-card rounded-xl p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant ms-1">
              {shipping.fullName}
            </label>
            <input
              type="text"
              placeholder={shipping.fullNamePlaceholder}
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant ms-1">
              {shipping.phone}
            </label>
            <input
              type="tel"
              placeholder={shipping.phonePlaceholder}
              className={inputClass}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-label-md text-on-surface-variant ms-1">
            {shipping.address}
          </label>
          <input
            type="text"
            placeholder={shipping.addressPlaceholder}
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant ms-1">
              {shipping.city}
            </label>
            <input
              type="text"
              placeholder={shipping.cityPlaceholder}
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant ms-1">
              {shipping.state}
            </label>
            <input
              type="text"
              placeholder={shipping.statePlaceholder}
              className={inputClass}
            />
          </div>
          <div className="space-y-2 col-span-2 md:col-span-1">
            <label className="font-label-md text-on-surface-variant ms-1">
              {shipping.postalCode}
            </label>
            <input
              type="text"
              placeholder={shipping.postalCodePlaceholder}
              className={inputClass}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
