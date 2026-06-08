export const ROUTES = {
  home: "/",
  smartphones: "/smartphones",
  product: "/smartphones/lumina-x1-pro",
  cart: "/cart",
  checkout: "/checkout",
  login: "/login",
  dashboard: "/dashboard",
  about: "/about",
  contact: "/contact",
} as const;

export type NavKey =
  | "smartphones"
  | "laptops"
  | "tablets"
  | "accessories"
  | "about"
  | "contact";

export const mainNavItems: {
  key: NavKey;
  href: string;
  icon: string;
}[] = [
  { key: "smartphones", href: ROUTES.smartphones, icon: "smartphone" },
  { key: "laptops", href: ROUTES.smartphones, icon: "laptop_mac" },
  { key: "tablets", href: ROUTES.smartphones, icon: "display_settings" },
  { key: "accessories", href: ROUTES.smartphones, icon: "shopping_bag" },
  { key: "about", href: ROUTES.about, icon: "public" },
  { key: "contact", href: ROUTES.contact, icon: "mail" },
];

export function getNavHref(key: NavKey): string {
  const item = mainNavItems.find((n) => n.key === key);
  return item?.href ?? ROUTES.home;
}

export const categoryNavKeys = ["laptops", "tablets", "accessories"] as const;

export const DEMO_CART_COUNT = 2;
