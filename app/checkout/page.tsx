"use client";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary";
import { PaymentForm } from "@/components/checkout/PaymentForm";
import { ShippingForm } from "@/components/checkout/ShippingForm";

export default function CheckoutPage() {
  return (
    <>
      <SiteHeader />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-12">
            <ShippingForm />
            <PaymentForm />
          </div>
          <CheckoutSummary />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
