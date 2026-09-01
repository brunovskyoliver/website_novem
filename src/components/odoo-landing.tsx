import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const references: { name: string; href?: string }[] = [
  { name: "4ka", href: "https://www.4ka.sk/" },
  { name: "AKMN Legal", href: "https://www.akmnlegal.sk/" },
  { name: "AquaThermal Senec", href: "https://www.aquaparksenec.sk/" },
  { name: "Chestreal", href: "https://www.chestreal.sk/" },
  { name: "Corwell", href: "https://www.corwell.sk/" },
  { name: "Country Saloon Senec", href: "https://www.countrysaloon.sk/" },
  { name: "EHN Group" },
  { name: "e-Net", href: "https://www.e-net.sk/" },
  { name: "Hotel Kúria Červený Majer", href: "https://cervenymajer.sk/" },
  { name: "Hotel Marathon", href: "https://hotelmarathon.sk/sk/" },
  { name: "Hotel Senec", href: "https://www.hotelsenec.sk/" },
  { name: "Hotel Vyhne", href: "https://www.termalvyhne.sk/" },
  { name: "Hotel Wartberg" },
  { name: "L+L Autobusová doprava", href: "https://www.lplusl.sk/" },
  { name: "Lumax", href: "https://www.lumax.sk/" },
  { name: "Merch", href: "https://merch.sk/" },
  { name: "NOVEM", href: "/" },
  { name: "Odemat", href: "http://www.odemat.sk/" },
  { name: "Olpharm" },
  { name: "Pneumo Alergo Centrum", href: "https://pneumoalergo.sk/" },
  { name: "ranch13", href: "https://www.ranch13.sk/" },
  { name: "SWAN", href: "https://www.swan.sk/" },
  { name: "TENENET", href: "https://www.tenenet.sk/" },
  { name: "Trinity Hotels", href: "https://www.trinityhotels.sk/" },
  { name: "Veolia", href: "https://www.veolia.sk/" },
  { name: "Vitacare", href: "https://www.vitacare.sk/" },
]

function BrandLockup() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-11 items-center rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
      aria-label="NOVEM.sk, späť na hlavnú stránku"
    >
      <Image
        src="/logo.png"
        alt="NOVEM.sk"
        width={190}
        height={50}
        priority
        className="h-auto w-[152px] sm:w-[178px]"
        style={{ height: "auto" }}
      />
    </Link>
  )
}

function ContactLink() {
  return (
    <Button asChild size="lg" className="h-12 rounded-full px-6">
      <Link href="/#kontakt">
        Dohodnúť konzultáciu
        <ArrowRight data-icon="inline-end" aria-hidden="true" />
      </Link>
    </Button>
  )
}

function ReferenceLink({ name, href }: { name: string; href?: string }) {
  if (!href) return <span>{name}</span>

  const content = (
    <>
      <span>{name}</span>
      {href !== "/" && (
        <>
          <span className="sr-only"> (otvorí sa v novej karte)</span>
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 shrink-0 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </>
      )}
    </>
  )

  const className = "group inline-flex min-h-11 items-center gap-1.5 rounded-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/40"

  if (href === "/") return <Link href={href} className={className}>{content}</Link>

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {content}
    </a>
  )
}

export function OdooLanding() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-[#f4f1eb] text-[#18202a]">
      <a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-slate-950 px-4 py-3 text-sm font-semibold text-white focus:translate-y-0 focus:outline-none focus:ring-4 focus:ring-sky-400">
        Preskočiť na obsah
      </a>

      <header className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-slate-900/15 py-5">
          <BrandLockup />
          <Button asChild variant="outline" className="h-11 rounded-full border-slate-900/20 bg-transparent">
            <Link href="/#kontakt">Porozprávať sa</Link>
          </Button>
        </div>
      </header>

      <main id="main-content">
        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
              <div>
                <div className="mb-8 flex items-center gap-4"><span className="text-3xl font-bold tracking-tight text-[#714b67] sm:text-4xl" translate="no">odoo</span><span className="text-xl font-light text-slate-400 sm:text-2xl">×</span><span className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">NOVEM</span></div>
                <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-7xl lg:text-[5.6rem]">
                  Odoo zavádzame tak, ako vedieme firmu. Osobne.
                </h1>
                <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600">
                  Sme rodinná firma Juríčkovcov. Od roku 2016 riešime technológie našich klientov a od roku 2025 aj Odoo, ktoré sme si najprv poctivo nasadili u seba.
                </p>
              </div>
              <figure className="relative isolate aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#183544] text-white shadow-xl shadow-slate-900/10">
                <Image src="/novem-team.webp" alt="Tím NOVEM v kancelárii" fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent" aria-hidden="true" />
                <Badge className="absolute left-5 top-5 border-white/25 bg-white/90 text-slate-950 shadow-sm hover:bg-white/90">Tím NOVEM</Badge>
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="max-w-md text-balance text-2xl font-medium leading-tight sm:text-3xl">Nie sme korporát. Klient pozná ľudí, ktorí jeho riešenie naozaj robia.</p>
                </figcaption>
              </figure>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ContactLink />
              <Button asChild size="lg" variant="ghost" className="h-12 rounded-full px-6">
                <a href="#pribeh">Prečítať náš príbeh <ArrowRight data-icon="inline-end" aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
        </section>

        <section id="pribeh" className="scroll-mt-20 border-y border-slate-900/15 bg-white/45 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.72fr_1.28fr]">
            <div><p className="font-mono text-sm text-primary">2016 → dnes</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">Technický partner, ktorý zostáva pri stole.</h2></div>
            <ol className="border-l border-slate-900/20">
              {[
                ["2016", "Začíname ako rodinná IT firma", "Budujeme prax v podpore, sieťach, bezpečnosti a outsourcingu technológií."],
                ["2025", "Odoo nasadzujeme pre NOVEM", "Procesy si overujeme na vlastnej firme skôr, než ich ponúkneme klientom."],
                ["Dnes", "Odoo prepájame s celým IT", "Implementáciu nekončíme odovzdaním. Na riešenie nadväzuje technická podpora a bezpečná prevádzka."],
              ].map(([year, title, text]) => (
                <li key={year} className="relative pb-12 pl-8 last:pb-0">
                  <span className="absolute -left-1.5 top-1 size-3 rounded-full border-2 border-[#f4f1eb] bg-primary" />
                  <p className="font-mono text-sm text-primary">{year}</p><h3 className="mt-2 text-2xl font-semibold">{title}</h3><p className="mt-3 max-w-2xl leading-7 text-slate-600">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="tim" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Ľudia za riešením</p><h2 className="mt-3 text-4xl font-semibold tracking-tight">Malý tím. Jasné kompetencie.</h2></div>
            <div className="grid gap-x-8 sm:grid-cols-3">
              {[
                ["2", "certifikovaní Odoo špecialisti", "Ovládame najnovšie funkcie a možnosti platformy Odoo."],
                ["4", "technici zákazníckej podpory", "Každodenná pomoc pri prevádzke a incidentoch."],
                ["2", "špecialisti na siete a bezpečnosť", "Infraštruktúra, monitoring a ochrana dát."],
              ].map(([value, title, detail]) => (
                <article key={title} className="border-t border-slate-900/30 py-6">
                  <div className="grid grid-cols-[3rem_1fr] gap-5">
                    <p className="font-mono text-4xl font-medium leading-none text-primary tabular-nums">{value}</p>
                    <div className="min-w-0"><h3 className="text-lg font-semibold leading-6">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="referencie" className="scroll-mt-20 bg-[#183544] px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.6fr_1.4fr]">
            <div><p className="text-sm text-sky-200">Dlhodobá IT prax</p><h2 className="mt-3 text-4xl font-semibold tracking-tight">Referencie</h2></div>
            <div className="grid grid-cols-2 gap-x-8 border-t border-white/20 sm:grid-cols-3">
              {references.map((reference, index) => <div key={reference.name} className="flex min-h-14 items-center border-b border-white/15 py-1 text-sm"><span className="mr-3 font-mono text-[10px] text-sky-300 tabular-nums">{String(index + 1).padStart(2, "0")}</span><ReferenceLink {...reference} /></div>)}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-b border-slate-900/15 pb-20 sm:flex-row sm:items-end">
            <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Dobré ERP sa začína normálnym rozhovorom o tom, ako firma funguje.</h2>
            <ContactLink />
          </div>
        </section>
      </main>
    </div>
  )
}
