"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { MaterialIcon } from "@/components/MaterialIcon";

export function ShopPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const { messages } = useLocale();
  const { demo } = messages;
  const { showToast } = useDemo();

  function goToPage(page: number) {
    setCurrentPage(page);
    showToast(demo.pageNavigation.replace("{page}", String(page)), "info");
  }

  function goPrev() {
    if (currentPage > 1) goToPage(currentPage - 1);
  }

  function goNext() {
    if (currentPage < 12) goToPage(currentPage + 1);
  }

  const pageButtons = [1, 2, 3, 12];

  return (
    <div className="mt-16 flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={goPrev}
        disabled={currentPage === 1}
        className="w-12 h-12 flex items-center justify-center rounded-xl border border-outline-variant hover:border-primary hover:text-primary transition-all group disabled:opacity-40 disabled:pointer-events-none"
      >
        <MaterialIcon
          icon="chevron_left"
          className="transition-transform group-active:-translate-x-1 rtl:rotate-180"
        />
      </button>

      <div className="flex items-center gap-2">
        {pageButtons.map((page, index) => (
          <span key={page} className="contents">
            {index === 3 && (
              <span className="px-2 text-on-surface-variant">...</span>
            )}
            <button
              type="button"
              onClick={() => goToPage(page)}
              className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all ${
                currentPage === page
                  ? "bg-primary text-on-primary-container font-bold"
                  : "hover:bg-surface-container-highest"
              }`}
            >
              {page}
            </button>
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={goNext}
        disabled={currentPage === 12}
        className="w-12 h-12 flex items-center justify-center rounded-xl border border-outline-variant hover:border-primary hover:text-primary transition-all group disabled:opacity-40 disabled:pointer-events-none"
      >
        <MaterialIcon
          icon="chevron_right"
          className="transition-transform group-active:translate-x-1 rtl:rotate-180"
        />
      </button>
    </div>
  );
}
