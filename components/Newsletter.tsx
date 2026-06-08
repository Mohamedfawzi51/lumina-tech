"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";

export function Newsletter() {
  const { messages } = useLocale();
  const { newsletter, demo } = messages;
  const { showToast } = useDemo();
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    showToast(demo.newsletterSubscribed);
    setEmail("");
  }

  return (
    <section className="py-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-primary-container text-on-primary-container rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute top-0 end-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -me-48 -mt-48" />

          <div className="relative z-10 max-w-xl">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-xl mb-4">
              {newsletter.title}
            </h2>
            <p className="text-on-primary-container/80 text-body-lg">
              {newsletter.description}
            </p>
          </div>

          <div className="relative z-10 w-full max-w-md">
            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={newsletter.placeholder}
                className="flex-grow px-6 py-4 bg-white/10 border border-white/20 rounded-xl placeholder:text-on-primary-container/50 text-on-primary-container focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-on-primary-container text-primary-container font-label-md rounded-xl hover:opacity-90 active:scale-95 transition-all"
              >
                {newsletter.subscribe}
              </button>
            </form>
            <p className="text-[10px] uppercase tracking-widest mt-4 opacity-60">
              {newsletter.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
