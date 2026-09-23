"use client"

import { usePathname } from "next/navigation"
import { Globe2 } from "lucide-react"

import { isLocale, type Locale } from "@/lib/i18n"

const languageNames: Record<Locale, string> = { sk: "Slovenčina", en: "English", de: "Deutsch" }

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()

  function changeLanguage(nextLocale: string) {
    if (!isLocale(nextLocale)) return
    document.cookie = `novem_locale=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`
    const segments = pathname.split("/")
    if (isLocale(segments[1])) segments[1] = nextLocale
    else segments.splice(1, 0, nextLocale)
    window.location.assign(`${segments.join("/")}${window.location.search}${window.location.hash}`)
  }

  return (
    <label className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border border-current/15 bg-white/75 px-3 text-sm font-medium text-foreground shadow-sm focus-within:ring-2 focus-within:ring-primary/40 sm:h-11">
      <Globe2 className="size-4 text-primary" aria-hidden="true" />
      <span className="sr-only">{locale === "sk" ? "Jazyk" : locale === "de" ? "Sprache" : "Language"}</span>
      <select
        aria-label={locale === "sk" ? "Jazyk" : locale === "de" ? "Sprache" : "Language"}
        value={locale}
        onChange={(event) => changeLanguage(event.target.value)}
        className="max-w-[7rem] cursor-pointer appearance-none bg-transparent pr-1 outline-none sm:max-w-none"
      >
        {Object.entries(languageNames).map(([code, name]) => <option key={code} value={code}>{name}</option>)}
      </select>
    </label>
  )
}
