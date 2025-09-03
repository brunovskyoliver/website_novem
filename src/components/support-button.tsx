'use client';

import { Button } from "@/components/ui/button"
import { Monitor } from "lucide-react"

export function SupportButton() {
  return (
    <Button
      variant="outline"
      size="lg"
      className="min-w-[200px] bg-transparent"
      onClick={() => window.open('https://podpora.novem.sk', '_blank')}
    >
      <Monitor className="h-5 w-5 mr-2" />
      Spustiť podporu
    </Button>
  );
}
