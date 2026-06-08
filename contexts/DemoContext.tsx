"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import { ROUTES } from "@/lib/navigation";

export type ToastType = "success" | "info";

type Toast = {
  id: number;
  message: string;
  type: ToastType;
};

type AddToCartOptions = {
  productName?: string;
  navigate?: boolean;
};

type DemoContextValue = {
  cartCount: number;
  setCartCount: Dispatch<SetStateAction<number>>;
  addToCart: (options?: AddToCartOptions) => void;
  wishlistIds: Set<string>;
  toggleWishlist: (id: string, productName?: string) => boolean;
  isWishlisted: (id: string) => boolean;
  toasts: Toast[];
  showToast: (message: string, type?: ToastType) => void;
  dismissToast: (id: number) => void;
  copyShareLink: () => void;
  browseCategory: (category: string) => void;
  showLegal: (kind: "terms" | "privacy" | "cookies") => void;
};

const DemoContext = createContext<DemoContextValue | null>(null);

let toastId = 0;

function interpolate(template: string, vars: Record<string, string>) {
  return Object.entries(vars).reduce(
    (text, [key, value]) => text.replace(`{${key}}`, value),
    template,
  );
}

export function DemoProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { messages } = useLocale();
  const { demo } = messages;

  const [cartCount, setCartCount] = useState(2);
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(
    () => new Set(["lumina-x1-pro", "wishlist-tablet", "wishlist-watch"]),
  );
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType = "success") => {
      const id = ++toastId;
      setToasts((prev) => [...prev.slice(-2), { id, message, type }]);
      window.setTimeout(() => dismissToast(id), 3500);
    },
    [dismissToast],
  );

  const addToCart = useCallback(
    (options?: AddToCartOptions) => {
      setCartCount((c) => c + 1);
      const message = options?.productName
        ? interpolate(demo.addedToCart, { product: options.productName })
        : demo.addedToCartGeneric;
      showToast(message);
      if (options?.navigate) {
        window.setTimeout(() => router.push(ROUTES.cart), 600);
      }
    },
    [demo.addedToCart, demo.addedToCartGeneric, router, showToast],
  );

  const toggleWishlist = useCallback(
    (id: string, productName?: string) => {
      let added = false;
      setWishlistIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
          added = false;
        } else {
          next.add(id);
          added = true;
        }
        return next;
      });

      if (added) {
        showToast(
          productName
            ? interpolate(demo.addedToWishlist, { product: productName })
            : demo.addedToWishlistGeneric,
        );
      } else {
        showToast(
          productName
            ? interpolate(demo.removedFromWishlist, { product: productName })
            : demo.removedFromWishlistGeneric,
        );
      }
      return added;
    },
    [
      demo.addedToWishlist,
      demo.addedToWishlistGeneric,
      demo.removedFromWishlist,
      demo.removedFromWishlistGeneric,
      showToast,
    ],
  );

  const isWishlisted = useCallback(
    (id: string) => wishlistIds.has(id),
    [wishlistIds],
  );

  const copyShareLink = useCallback(() => {
    const url = typeof window !== "undefined" ? window.location.origin : "";
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    showToast(demo.shareCopied);
  }, [demo.shareCopied, showToast]);

  const browseCategory = useCallback(
    (category: string) => {
      showToast(interpolate(demo.categoryBrowse, { category }), "info");
      router.push(ROUTES.smartphones);
    },
    [demo.categoryBrowse, router, showToast],
  );

  const showLegal = useCallback(
    (kind: "terms" | "privacy" | "cookies") => {
      const map = {
        terms: demo.legalTerms,
        privacy: demo.legalPrivacy,
        cookies: demo.legalCookies,
      };
      showToast(map[kind], "info");
    },
    [demo.legalCookies, demo.legalPrivacy, demo.legalTerms, showToast],
  );

  const value = useMemo(
    () => ({
      cartCount,
      setCartCount,
      addToCart,
      wishlistIds,
      toggleWishlist,
      isWishlisted,
      toasts,
      showToast,
      dismissToast,
      copyShareLink,
      browseCategory,
      showLegal,
    }),
    [
      cartCount,
      addToCart,
      wishlistIds,
      toggleWishlist,
      isWishlisted,
      toasts,
      showToast,
      dismissToast,
      copyShareLink,
      browseCategory,
      showLegal,
    ],
  );

  return (
    <DemoContext.Provider value={value}>{children}</DemoContext.Provider>
  );
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) {
    throw new Error("useDemo must be used within DemoProvider");
  }
  return ctx;
}
