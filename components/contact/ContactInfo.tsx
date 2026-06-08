"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";

export function ContactInfo() {
  const { messages } = useLocale();
  const { support, hours } = messages.contact;
  const { demo } = messages;
  const { showToast } = useDemo();

  return (
    <div className="space-y-gutter">
      <div className="glass-card rounded-xl p-8 flex flex-col gap-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center text-primary shrink-0">
            <Icon icon="alternate_email" />
          </div>
          <div>
            <h4 className="font-headline-lg text-headline-lg mb-1">
              {support.emailTitle}
            </h4>
            <a
              href={`mailto:${support.email}`}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {support.email}
            </a>
            <p className="font-label-sm text-label-sm mt-2 opacity-60 uppercase">
              {support.emailResponse}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center text-secondary shrink-0">
            <Icon icon="call" />
          </div>
          <div>
            <h4 className="font-headline-lg text-headline-lg mb-1">
              {support.phoneTitle}
            </h4>
            <a
              href="tel:+18882345864"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {support.phone}
            </a>
            <p className="font-label-sm text-label-sm mt-2 opacity-60 uppercase">
              {support.phoneHours}
            </p>
          </div>
        </div>

        <div className="pt-4 mt-auto">
          <button
            type="button"
            onClick={() => showToast(demo.liveChat, "info")}
            className="w-full flex items-center justify-center gap-3 px-8 py-5 border border-primary text-primary font-label-md text-label-md rounded-lg hover:bg-primary/5 transition-all"
          >
            <Icon icon="forum" />
            {support.liveChat}
          </button>
        </div>
      </div>

      <div className="bg-surface-container-high rounded-xl p-8 border border-outline-variant/30">
        <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-4">
          {hours.title}
        </h4>
        <div className="space-y-3 font-body-md">
          <div className="flex justify-between gap-4">
            <span className="text-on-surface-variant">{hours.weekdays}</span>
            <span className="text-on-surface">{hours.weekdaysHours}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-on-surface-variant">{hours.saturday}</span>
            <span className="text-on-surface">{hours.saturdayHours}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-on-surface-variant">{hours.sunday}</span>
            <span className="text-on-surface">{hours.closed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
