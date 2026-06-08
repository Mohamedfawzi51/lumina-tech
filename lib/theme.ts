export const themes = ["dark", "light"] as const;
export type Theme = (typeof themes)[number];

export const defaultTheme: Theme = "dark";
export const THEME_STORAGE_KEY = "lumina-theme";

export function isValidTheme(value: string): value is Theme {
  return themes.includes(value as Theme);
}
