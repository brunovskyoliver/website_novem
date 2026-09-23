import { notFound } from "next/navigation"
import type { Metadata } from "next"

import ITSupportPage from "@/app/page"
import { isLocale, locales, t, type Locale } from "@/lib/i18n"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const title = t(locale, "NOVEM-IT, s.r.o. | IT Servis")
  return {
    title,
    description: title,
    alternates: {
      canonical: `https://novem.sk/${locale}`,
      languages: Object.fromEntries(locales.map((lang) => [lang, `https://novem.sk/${lang}`])),
    },
  }
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <ITSupportPage locale={locale as Locale} />
}
