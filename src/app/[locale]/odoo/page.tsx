import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { OdooLanding } from "@/components/odoo-landing"
import { isLocale, locales, t } from "@/lib/i18n"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return {
    title: t(locale, "Odoo implementácia a podpora | NOVEM"),
    description: t(locale, "Odoo implementácia, technická podpora, siete a bezpečnosť od rodinnej IT firmy NOVEM."),
    alternates: {
      canonical: `https://novem.sk/${locale}/odoo`,
      languages: Object.fromEntries(locales.map((lang) => [lang, `https://novem.sk/${lang}/odoo`])),
    },
    openGraph: {
      title: t(locale, "Odoo implementácia a podpora | NOVEM"),
      description: t(locale, "Odoo zavádzame osobne a prepájame ho s podporou, sieťami a bezpečnosťou."),
      url: `https://novem.sk/${locale}/odoo`,
      siteName: "NOVEM.sk",
      locale: { sk: "sk_SK", en: "en_US", de: "de_DE" }[locale],
      type: "website",
      images: [{ url: "https://novem.sk/novem-team.webp", width: 1600, height: 1200, alt: t(locale, "Tím NOVEM") }],
    },
  }
}

export default async function LocalizedOdoo({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <OdooLanding locale={locale} />
}
