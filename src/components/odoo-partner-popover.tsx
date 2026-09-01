"use client"

import { useId } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function OdooPartnerPopover() {
  const titleId = useId()
  const descriptionId = useId()

  return (
    <div className="fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="h-auto min-h-14 rounded-2xl border-primary/25 bg-background px-3.5 py-2.5 text-foreground shadow-xl shadow-slate-950/10 hover:border-primary/50 hover:bg-muted data-[state=open]:invisible"
            aria-label="Otvoriť informácie o Odoo službách NOVEM"
          >
            <span className="border-l-2 border-[#714b67] pl-3 text-left leading-tight">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">NOVEM × Odoo</span>
              <span className="mt-1 block text-sm font-semibold">ERP pre vašu firmu</span>
            </span>
            <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          side="top"
          sideOffset={10}
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          className="w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border-border bg-popover p-0 shadow-2xl shadow-slate-950/15"
        >
          <div className="relative isolate h-36 overflow-hidden bg-slate-900">
            <Image
              src="/novem-team.webp"
              alt="Tím NOVEM"
              fill
              sizes="(max-width: 640px) calc(100vw - 2rem), 384px"
              className="object-cover object-[center_42%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/10" aria-hidden="true" />
            <PopoverClose asChild>
              <Button variant="secondary" size="icon" className="absolute right-3 top-3 rounded-full bg-white/90 text-slate-950 hover:bg-white" aria-label="Zavrieť okno">
                <X data-icon="inline-start" aria-hidden="true" />
              </Button>
            </PopoverClose>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-white">
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl font-bold tracking-tight" translate="no">odoo</span>
                <span className="text-white/55">×</span>
                <span className="text-sm font-semibold tracking-wide">NOVEM</span>
              </div>
              <Badge variant="secondary" className="bg-white/90 text-slate-950">Odoo partner</Badge>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-5">
            <PopoverHeader className="gap-2">
              <PopoverTitle id={titleId} className="text-balance text-xl font-semibold tracking-tight text-foreground">
                Hľadáte ERP systém pre svoju firmu?
              </PopoverTitle>
              <PopoverDescription id={descriptionId} className="text-pretty text-sm leading-6">
                Pomôžeme vám vybrať a nasadiť ERP, ktoré spojí obchod, fakturáciu, sklad aj interné procesy.
              </PopoverDescription>
            </PopoverHeader>
            <Button asChild size="lg" className="h-11 w-full justify-between rounded-xl">
              <Link href="/odoo">
                Pozrieť riešenie NOVEM × Odoo
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
