import type { Metadata } from "next"

import { OdooLanding } from "@/components/odoo-landing"

export const metadata: Metadata = {
  title: "Odoo implementácia a podpora | NOVEM",
  description: "Odoo implementácia, technická podpora, siete a bezpečnosť od rodinnej IT firmy NOVEM.",
  alternates: {
    canonical: "https://novem.sk/odoo",
  },
  openGraph: {
    title: "Odoo implementácia a podpora | NOVEM",
    description: "Odoo zavádzame osobne a prepájame ho s podporou, sieťami a bezpečnosťou.",
    url: "https://novem.sk/odoo",
    siteName: "NOVEM.sk",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "https://novem.sk/novem-team.webp",
        width: 1600,
        height: 1200,
        alt: "Tím NOVEM",
      },
    ],
  },
}

export default function OdooPage() {
  return <OdooLanding />
}
