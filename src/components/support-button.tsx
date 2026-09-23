'use client';

import { t, type Locale } from "@/lib/i18n"

import { Button } from "@/components/ui/button"
import { Monitor } from "lucide-react"

export function SupportButton({ locale }: { locale: Locale }) {
  return (
    <Button
      variant="outline"
      size="lg"
      className="min-w-[200px] bg-transparent"
      onClick={() => window.open('https://podpora.novem.sk', '_blank')}
    >
      <Monitor className="h-5 w-5 mr-2" />
      {t(locale, "Spustiť podporu")}
    </Button>
  );
}
