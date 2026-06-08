export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeConfig: Record<
  Locale,
  { label: string; dir: "ltr" | "rtl"; nativeName: string }
> = {
  en: { label: "EN", dir: "ltr", nativeName: "English" },
  ar: { label: "AR", dir: "rtl", nativeName: "العربية" },
};

export function isRtl(locale: Locale): boolean {
  return localeConfig[locale].dir === "rtl";
}

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
