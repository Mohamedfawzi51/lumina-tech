import type { Locale } from "./i18n";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export type Messages = typeof en;

const messages: Record<Locale, Messages> = { en, ar };

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
