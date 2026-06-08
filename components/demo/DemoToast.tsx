"use client";

import { Icon } from "@/components/Icon";
import { useDemo, type ToastType } from "@/contexts/DemoContext";

const iconByType: Record<ToastType, string> = {
  success: "check_circle",
  info: "help_outline",
};

export function DemoToast() {
  const { toasts, dismissToast } = useDemo();

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-6 end-6 z-[200] flex flex-col gap-3 max-w-sm w-full pointer-events-none"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl glass-morphism border border-outline-variant/40 shadow-2xl animate-fade-up"
        >
          <Icon
            icon={iconByType[toast.type]}
            className={`shrink-0 mt-0.5 ${
              toast.type === "success" ? "text-primary" : "text-on-surface-variant"
            }`}
            size={20}
          />
          <p className="text-sm text-on-surface font-label-md flex-1">
            {toast.message}
          </p>
          <button
            type="button"
            onClick={() => dismissToast(toast.id)}
            className="text-on-surface-variant hover:text-on-surface shrink-0 text-lg leading-none"
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
