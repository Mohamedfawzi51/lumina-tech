"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";

type PaymentMethod = "card" | "apple" | "cash";

const methods: { key: PaymentMethod; icon: string }[] = [
  { key: "card", icon: "credit_card" },
  { key: "apple", icon: "apps" },
  { key: "cash", icon: "payments" },
];

const inputClass =
  "w-full bg-surface-container-low border-b border-outline-variant py-3 px-1 text-on-surface transition-all input-focus-effect font-body-md";

export function PaymentForm() {
  const { messages } = useLocale();
  const { payment } = messages.checkout;
  const [method, setMethod] = useState<PaymentMethod>("card");

  const labels: Record<PaymentMethod, string> = {
    card: payment.creditCard,
    apple: payment.applePay,
    cash: payment.cash,
  };

  return (
    <section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center gap-4 mb-8">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md">
          2
        </span>
        <h2 className="font-headline-xl text-headline-xl text-on-surface">
          {payment.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {methods.map(({ key, icon }) => {
          const active = method === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setMethod(key)}
              className={`group flex flex-col items-center justify-center p-6 rounded-xl border transition-all duration-300 ${
                active
                  ? "border-primary bg-primary/5"
                  : "border-outline-variant hover:border-on-surface-variant"
              }`}
            >
              <Icon
                icon={icon}
                className={`text-3xl mb-2 ${
                  active
                    ? "text-primary"
                    : "text-on-surface-variant group-hover:text-on-surface"
                }`}
                size={32}
              />
              <span
                className={`font-label-md ${
                  active
                    ? "text-primary"
                    : "text-on-surface-variant group-hover:text-on-surface"
                }`}
              >
                {labels[key]}
              </span>
            </button>
          );
        })}
      </div>

      <div
        className={`glass-card rounded-xl p-8 space-y-6 overflow-hidden transition-all duration-500 ease-out ${
          method === "card"
            ? "max-h-[500px] opacity-100 mt-6"
            : "max-h-0 opacity-0 mt-0 pointer-events-none p-0 border-0"
        }`}
      >
        <div className="space-y-2">
          <label className="font-label-md text-on-surface-variant ms-1">
            {payment.cardNumber}
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder={payment.cardNumberPlaceholder}
              className={`${inputClass} pe-12`}
            />
            <Icon
              icon="credit_card"
              className="absolute end-2 top-1/2 -translate-y-1/2 text-on-surface-variant"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant ms-1">
              {payment.expiry}
            </label>
            <input
              type="text"
              placeholder={payment.expiryPlaceholder}
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant ms-1">
              {payment.cvv}
            </label>
            <input
              type="password"
              placeholder={payment.cvvPlaceholder}
              className={inputClass}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
