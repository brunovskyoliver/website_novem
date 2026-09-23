import { headers } from "next/headers";
import { isLocale } from "@/lib/i18n";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastProvider } from "@/components/toast-provider";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOVEM-IT, s.r.o. | IT Servis",
  description: "NOVEM-IT, s.r.o. | IT Servis",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localeHeader = (await headers()).get("x-novem-locale") ?? "sk";
  const locale = isLocale(localeHeader) ? localeHeader : "sk";
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ToastProvider />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
