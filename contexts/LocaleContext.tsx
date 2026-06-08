"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  defaultLocale,
  isValidLocale,
  localeConfig,
  type Locale,
} from "@/lib/i18n";
import { getMessages, type Messages } from "@/lib/messages";

const STORAGE_KEY = "lumina-locale";

type LocaleContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  messages: Messages;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const localeListeners = new Set<() => void>();

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored && isValidLocale(stored) ? stored : defaultLocale;
}

function subscribeLocale(onStoreChange: () => void) {
  localeListeners.add(onStoreChange);
  return () => localeListeners.delete(onStoreChange);
}

function notifyLocaleChange() {
  localeListeners.forEach((listener) => listener());
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    readStoredLocale,
    () => defaultLocale,
  );

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem(STORAGE_KEY, next);
    notifyLocaleChange();
  }, []);

  const dir = localeConfig[locale].dir;
  const messages = getMessages(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const value = useMemo(
    () => ({ locale, dir, messages, setLocale }),
    [locale, dir, messages, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
