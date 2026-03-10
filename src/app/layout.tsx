import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: { default: "Air Fryer Oven Guide — Best Picks & Reviews (2026)", template: "%s | Air Fryer Oven Guide" },
  description: "Expert air fryer toaster oven reviews and buying guides for 2026. Find the best countertop convection oven for your kitchen.",
  metadataBase: new URL("https://airfryerovenguide.com"),
  openGraph: { siteName: "Air Fryer Oven Guide", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={inter.className}>{children}</body></html>);
}
