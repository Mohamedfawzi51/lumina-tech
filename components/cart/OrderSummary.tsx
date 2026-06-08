"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";

export function OrderSummary() {
  const { messages } = useLocale();
  const { cart, demo } = messages;
  const { summary } = cart;
  const { showToast } = useDemo();
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  function handleApplyPromo() {
    if (!promo.trim()) {
      showToast(demo.promoEmpty, "info");
      return;
    }
    setPromoApplied(true);
    showToast(demo.promoApplied);
  }

  return (
    <div className="lg:col-span-4 sticky top-28">
      <div className="glass-card rounded-2xl p-8 flex flex-col gap-8">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          {summary.title}
        </h2>

        <div className="flex flex-col gap-4 border-b border-outline-variant pb-8">
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant">{summary.subtotal}</span>
            <span className="text-on-surface font-medium">
              {summary.subtotalValue}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant">{summary.shipping}</span>
            <span className="text-primary font-medium">{summary.free}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant">{summary.tax}</span>
            <span className="text-on-surface font-medium">
              {summary.taxValue}
            </span>
          </div>
          {promoApplied && (
            <div className="flex justify-between items-center text-primary">
              <span>{summary.promoCode}</span>
              <span>-10%</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
            {summary.promoCode}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              placeholder={summary.promoPlaceholder}
              className="grow bg-surface-container border border-outline-variant rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline min-w-0"
            />
            <button
              type="button"
              onClick={handleApplyPromo}
              className="bg-surface-variant text-on-surface px-6 py-3 rounded-lg hover:bg-outline-variant transition-colors font-label-md shrink-0"
            >
              {summary.apply}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-4">
          <div className="flex justify-between items-center">
            <span className="font-headline-lg text-headline-lg text-on-surface">
              {summary.total}
            </span>
            <span className="font-headline-xl text-headline-xl text-primary">
              {summary.totalValue}
            </span>
          </div>
          <Link
            href="/checkout"
            className="w-full bg-primary text-on-primary-container font-headline-lg py-5 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150 shadow-lg shadow-primary/20 flex items-center justify-center"
          >
            {summary.checkout}
          </Link>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Icon icon="credit_card" className="text-on-surface-variant" />
            <Icon icon="contactless" className="text-on-surface-variant" />
            <Icon
              icon="account_balance_wallet"
              className="text-on-surface-variant"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-4 p-4 text-on-surface-variant">
        <Icon icon="verified_user" className="text-[20px] mt-1 text-primary shrink-0" />
        <p className="font-label-sm text-label-sm">{cart.secureNote}</p>
      </div>
    </div>
  );
}
