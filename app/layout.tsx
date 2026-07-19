import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BND Travel & Tours",
  description:
    "Join our guided tours for an unforgettable adventure. Experience the landscapes, culture, and history with a local's perspective.",
  keywords: "BND Travel, tours, travel packages, Philippines, adventure",
  openGraph: {
    title: "BND Travel & Tours",
    description:
      "Join our guided tours for an unforgettable adventure through the Philippines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>{children}</body>
    </html>
  );
}
