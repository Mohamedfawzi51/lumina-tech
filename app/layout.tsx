import type { Metadata } from "next";
import { Inter, Geist, Noto_Sans_Arabic } from "next/font/google";
import { ThemeScript } from "@/components/ThemeScript";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LuminaTech | Premium Consumer Electronics",
  description:
    "Pioneering the next era of high-end consumer electronics with precision and passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${inter.variable} ${geist.variable} ${notoArabic.variable} bg-background text-on-background font-body-md selection:bg-primary/30 selection:text-primary min-h-screen flex flex-col overflow-x-hidden antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
