import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ContactFormContent } from "./contact-form"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Monitor, Server, Shield, Wrench, Clock, CheckCircle } from "lucide-react"
import { SupportButton } from "@/components/support-button"
import { CallButton } from "@/components/call-button"

export default function ITSupportPage() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Správa bola úspešne odoslaná!');
        event.currentTarget.reset();
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      alert('Prepáčte, nastala chyba pri odosielaní správy. Skúste to prosím neskôr.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Monitor className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">NOVEM.sk</h1>
              <p className="text-sm text-muted-foreground">IT po novom</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+421220202222" className="hidden md:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">+421 2 20 20 22 22</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                Profesionálny IT servis
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Potrebujete pomoc s opravou PC?
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                V našej spoločnosti sme odborníci v oblasti IT servisu a správy serverov. Poskytujeme komplexné riešenia
                pre vaše podnikanie v oblasti IT infraštruktúry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CallButton />
              </div>
            </div>
            <div className="relative">
              <img
                src="/img_novem.png"
                alt="IT Support Services"
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
            <h2 className="text-3xl font-bold text-foreground mb-4">S čím Vám pomôžeme?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Naše služby pokrývajú všetky aspekty IT podpory pre váš biznis
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Servis a údržba</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Komplexný servis počítačov, notebookov a IT zariadení
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Návrh, realizácia, správa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Návrh a implementácia IT infraštruktúry pre firmy
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Návrh, realizácia, správa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">Bezpečnostné riešenia a ochrana dát</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Návrh, realizácia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">Serverových riešení a sieťovej infraštruktúry</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Remote Support Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Vzdialená podpora</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ak máte problém s podporou, naši technickí pracovníci Vám vedia pomôcť aj na diaľku. Kliknite na tlačidlo nižšie pre spustenie vzdialenej podpory.
          </p>
          <div className="flex justify-center">
            <SupportButton />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Kontaktujte nás</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Hotline 24/7</h3>
                    <p className="text-muted-foreground">+421 2 20 20 22 22</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">podpora@novem.sk</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Napíšte nám</CardTitle>
                <CardDescription>Pošlite nám správu a my sa Vám ozveme čo najskôr</CardDescription>
              </CardHeader>
              <ContactFormContent />
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Kontaktné údaje</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-2">Kontaktné údaje</h3>
              <p className="text-muted-foreground leading-tight">novem@novem.sk</p>
              <p className="text-muted-foreground leading-tight">+421 2 20 20 22 22</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-2">Fakturačné údaje</h3>
              <p className="text-muted-foreground leading-tight">NOVEM-IT, s.r.o.</p>
              <p className="text-muted-foreground leading-tight">Sídlo: Lichnerova 35</p>
              <p className="text-muted-foreground leading-tight">903 01 Senec</p>
              <p className="text-muted-foreground leading-tight">IČO: 50 282 859</p>
              <p className="text-muted-foreground leading-tight">DIČ: 2120427078</p>
              <p className="text-muted-foreground leading-tight">DPH: SK2120427078</p>
              <div className="mt-3">
                <p className="text-muted-foreground leading-tight">NOVEM - Centrála</p>
                <p className="text-muted-foreground leading-tight">Reca 717</p>
                <p className="text-muted-foreground leading-tight">925 26 Reca</p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-2">Bankové údaje</h3>
              <p className="text-muted-foreground leading-tight">Účet: 51 2520 7075 / 0900</p>
              <p className="text-muted-foreground leading-tight">IBAN: SK63 0900 0000 0051 2520 7075</p>
              <p className="text-muted-foreground leading-tight">SWIFT: GIBASKBX</p>
              <div className="mt-3">
                <p className="text-muted-foreground leading-tight">
                  Zápis v Obchodnom registri Mestského súdu Bratislava 3 Vložka číslo 115272/B
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Monitor className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">NOVEM.sk</h3>
                <p className="text-sm text-muted-foreground">IT po novom</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © 2024 NOVEM.sk. Všetky práva vyhradené.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
