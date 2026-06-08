"use client";

import { useState } from "react";
import { DashboardFooter } from "@/components/dashboard/DashboardFooter";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { WishlistGrid } from "@/components/dashboard/WishlistGrid";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="md:ms-80 min-h-screen transition-all duration-300">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <div className="p-margin-mobile md:p-margin-desktop space-y-12 max-w-container-max mx-auto">
          <DashboardOverview />
          <RecentOrders />
          <WishlistGrid />
        </div>

        <DashboardFooter />
      </main>
    </div>
  );
}
