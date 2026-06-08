"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";

export function ContactForm() {
  const { messages } = useLocale();
  const { form } = messages.contact;
  const { demo } = messages;
  const { showToast } = useDemo();
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    showToast(demo.contactSuccess);
    (e.target as HTMLFormElement).reset();
  }

  const fields = [
    {
      id: "name",
      label: form.fullName,
      placeholder: form.fullNamePlaceholder,
      type: "text",
    },
    {
      id: "email",
      label: form.email,
      placeholder: form.emailPlaceholder,
      type: "email",
    },
  ];

  return (
    <div className="glass-card rounded-xl p-8 md:p-12">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map(({ id, label, placeholder, type }) => (
            <div key={id} className="space-y-2">
              <label
                className={`font-label-md text-label-md transition-colors ${
                  focused === id ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                {label}
              </label>
              <input
                type={type}
                placeholder={placeholder}
                required
                onFocus={() => setFocused(id)}
                onBlur={() => setFocused(null)}
                className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface px-0 py-3 transition-colors placeholder:text-outline-variant input-focus-effect"
              />
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label
            className={`font-label-md text-label-md transition-colors ${
              focused === "subject" ? "text-primary" : "text-on-surface-variant"
            }`}
          >
            {form.subject}
          </label>
          <input
            type="text"
            placeholder={form.subjectPlaceholder}
            required
            onFocus={() => setFocused("subject")}
            onBlur={() => setFocused(null)}
            className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface px-0 py-3 transition-colors placeholder:text-outline-variant input-focus-effect"
          />
        </div>

        <div className="space-y-2">
          <label
            className={`font-label-md text-label-md transition-colors ${
              focused === "message" ? "text-primary" : "text-on-surface-variant"
            }`}
          >
            {form.message}
          </label>
          <textarea
            rows={5}
            placeholder={form.messagePlaceholder}
            required
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface px-0 py-3 transition-colors resize-none placeholder:text-outline-variant input-focus-effect"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-12 py-4 bg-primary text-on-primary-container font-label-md text-label-md rounded-lg hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest"
        >
          {form.submit}
        </button>
      </form>
    </div>
  );
}
