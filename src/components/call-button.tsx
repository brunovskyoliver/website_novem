'use client';

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CallButton() {
  return (
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90"
      asChild
    >
      <a href="tel:+421220202222">
        <Phone className="h-5 w-5 mr-2" />
        Zavolať
      </a>
    </Button>
  );
}
