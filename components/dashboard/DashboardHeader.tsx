"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { images } from "@/lib/images";

type DashboardHeaderProps = {
  onMenuClick: () => void;
};

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const { messages } = useLocale();
  const { dashboard, demo } = messages;
  const { showToast } = useDemo();

  return (
    <header className="sticky top-0 w-full z-[100] flex items-center justify-between px-margin-mobile md:px-margin-desktop py-6 glass-panel">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="md:hidden p-2 text-on-surface"
        >
          <Icon icon="menu" />
        </button>
        <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          {dashboard.title}
        </h2>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="hidden md:flex items-center bg-surface-container-low border border-outline-variant/30 rounded-full px-4 py-2 w-64">
          <Icon icon="search" className="text-on-surface-variant text-sm" size={16} />
          <input
            type="text"
            placeholder={dashboard.searchPlaceholder}
            className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-full ms-2 outline-none"
          />
        </div>
        <LanguageSwitcher />
        <ThemeSwitcher />
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => showToast(demo.noNotifications, "info")}
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <Icon icon="notifications" />
          </button>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary overflow-hidden border-2 border-outline-variant">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Profile"
              src={images.dashboardAvatar}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
