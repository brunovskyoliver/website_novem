import { t, type Locale } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactFormContent } from "./contact-form"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Monitor, Server, Shield, Wrench } from "lucide-react"
import { SupportButton } from "@/components/support-button"
import { CallButton } from "@/components/call-button"
import { ScrollSupportButton } from "@/components/scroll-support-button"
import { HeaderContact } from "@/components/header-contact"
import { OdooPartnerPopover } from "@/components/odoo-partner-popover"

export default function ITSupportPage({ locale = "sk" }: { locale?: Locale }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex w-36 shrink-0 items-center justify-center sm:w-50">
              <Image src="/logo.png" alt="NOVEM.sk" width={200} height={56} priority className="h-auto w-full" />
            </div>
            {/* <div>
              <h1 className="text-xl font-bold text-foreground">NOVEM.sk</h1>
              <p className="text-sm text-muted-foreground">{t(locale, "IT po novom")}</p>
            </div> */}
          </div>
          <div className="flex items-center gap-3"><HeaderContact /><LanguageSwitcher locale={locale} /></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                {t(locale, "Profesionálny IT servis")}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance text-center lg:text-left">
                {t(locale, "Potrebujete pomoc s Vašim IT vybavením?")}
              </h1>
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex-1 flex flex-col justify-center items-center">
              <h3 className="text-4xl font-extrabold text-foreground mb-8 text-center">{t(locale, "Kontaktujte nás")}</h3>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center w-full">
                <div className="flex items-center space-x-4 justify-center mb-6 md:mb-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-bold text-2xl text-foreground mb-1">Hotline 24/7</h3>
                    <p className="text-xl text-muted-foreground font-semibold">+421 2 20 20 22 22</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 justify-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-bold text-2xl text-foreground mb-1">Email</h3>
                    <p className="text-xl text-muted-foreground font-semibold">podpora@novem.sk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(locale, "V našej spoločnosti sme odborníci v oblasti IT servisu a správy serverov. Poskytujeme komplexné riešenia pre vaše podnikanie v oblasti IT infraštruktúry.")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CallButton locale={locale} />
                <ScrollSupportButton locale={locale} />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/img_novem.png"
                alt={t(locale, "Ilustrácia správy IT infraštruktúry")}
                width={961}
                height={609}
                priority
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t(locale, "S čím Vám pomôžeme?")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(locale, "Naše služby pokrývajú všetky aspekty IT podpory pre váš biznis")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{t(locale, "Servis a údržba")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {t(locale, "Komplexný servis počítačov, notebookov a IT zariadení")}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{t(locale, "Návrh, realizácia, monitoring")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {t(locale, "Návrh a implementácia IT infraštruktúry pre firmy, monitoring a správa serverov")}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{t(locale, "Bezpečnostné riešenia")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{t(locale, "Bezpečnostné riešenia, ochrana a záloha dát")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{t(locale, "Dizajn siete")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{t(locale, "Služby v oblasti návrhu a implementácie a monitoringu sieťovej infraštruktúry")}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Remote Support Section */}
      <section id="remote-support" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t(locale, "Vzdialená podpora")}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(locale, "Ak máte problém s IT technikou, naši kolegovia Vám radi pomôžu. Kliknite na tlačidlo nižšie pre spustenie vzdialenej podpory.")}
          </p>
          <div className="flex justify-center">
            <SupportButton locale={locale} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="scroll-mt-24 py-16 px-4">
        <div className="container mx-auto max-w-6xl flex justify-center">
          <div className="w-full max-w-xl">
            <Card>
              <CardHeader>
                <CardTitle>{t(locale, "Napíšte nám")}</CardTitle>
                <CardDescription>{t(locale, "Pošlite nám správu a my sa Vám ozveme čo najskôr")}</CardDescription>
              </CardHeader>
              <ContactFormContent locale={locale} />
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t(locale, "Kontaktné údaje")}</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left justify-center">
            <div className="space-y-2 flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-2">{t(locale, "Kontaktné údaje")}</h3>
              <p className="text-muted-foreground leading-tight">novem@novem.sk</p>
              <p className="text-muted-foreground leading-tight">+421 2 20 20 22 22</p>
              <div className="">
<br/>
<br/>
              <h3 className="text-xl font-semibold mb-2">{t(locale, "Centrála spoločnosti")}</h3>
                <p className="text-muted-foreground leading-tight">{t(locale, "NOVEM - Centrála")}</p>
                <p className="text-muted-foreground leading-tight">Reca 717</p>
                <p className="text-muted-foreground leading-tight">925 26 Reca</p>
                </div>
            </div>
            <div className="space-y-2 flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-2">{t(locale, "Fakturačné údaje")}</h3>
              <p className="text-muted-foreground leading-tight">NOVEM-IT, s.r.o.</p>
              <p className="text-muted-foreground leading-tight">{t(locale, "Sídlo: Lichnerova 35")}</p>
              <p className="text-muted-foreground leading-tight">903 01 Senec</p>
              <br></br>
              <p className="text-muted-foreground leading-tight">{t(locale, "IČO: 50 282 859")}</p>
              <p className="text-muted-foreground leading-tight">{t(locale, "DIČ: 2120427078")}</p>
              <p className="text-muted-foreground leading-tight">{t(locale, "IČ DPH: SK2120427078")}</p>
              <br></br>
              <div>
                
                

                <div className="mt-3">
                <p className="text-muted-foreground leading-tight">
                  {t(locale, "Zápis v Obchodnom registri Mestského súdu Bratislava 3 Vložka číslo 115272/B")}
                </p>
              </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-2">{t(locale, "Bankové údaje")}</h3>
              <p className="text-muted-foreground leading-tight">{t(locale, "Účet: 51 2520 7075 / 0900")}</p>
              <p className="text-muted-foreground leading-tight">IBAN: SK63 0900 0000 0051 2520 7075</p>
              <p className="text-muted-foreground leading-tight">SWIFT: GIBASKBX</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image className="h-8 w-8" alt="" src="/logo_.png" width={32} height={32} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">NOVEM.sk</h3>
                <p className="text-sm text-muted-foreground">{t(locale, "IT po novom")}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} NOVEM.sk. {t(locale, "Všetky práva vyhradené.")}
            </p>
          </div>
        </div>
      </footer>
      <OdooPartnerPopover locale={locale} />
    </div>
  )
}
