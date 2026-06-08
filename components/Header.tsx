"use client";

import { SiteHeader } from "@/components/layout/SiteHeader";
import type { NavKey } from "@/lib/navigation";

export function Header({ activeNav }: { activeNav?: NavKey }) {
  return <SiteHeader activeNav={activeNav} />;
}
