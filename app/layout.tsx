import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finansx - Güncel Döviz ve Altın Uygulaması",
  description:
    "Güncel döviz kurları, altın fiyatları ve finansal analizlerle her zaman bir adım önde olun.",
  icons: {
    icon: "/finansx-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
