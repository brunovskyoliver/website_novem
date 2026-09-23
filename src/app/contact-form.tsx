'use client';

import { t, type Locale } from "@/lib/i18n"

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, X } from "lucide-react";
import { toast } from 'sonner';

export function ContactFormContent({ locale }: { locale: Locale }) {
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
      const formElement = event.currentTarget;
      
      const promise = async () => {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
        const result = await response.json();
        if (!response.ok) throw new Error(result.message);
        
        formElement.reset();
        return result;
      };

      toast.promise(promise(), {
        loading: t(locale, 'Odosielam správu...'),
        success: () => (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>{t(locale, "Správa bola úspešne odoslaná!")}</span>
          </div>
        ),
        error: () => (
          <div className="flex items-center gap-2">
            <X className="h-4 w-4 text-red-500" />
            <span>{t(locale, 'Nastala chyba pri odosielaní správy.')}</span>
          </div>
        ),
      });
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <CardContent>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">{t(locale, "Meno")}</Label>
            <Input name="firstName" id="firstName" placeholder={t(locale, "Vaše meno")} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">{t(locale, "Priezvisko")}</Label>
            <Input name="lastName" id="lastName" placeholder={t(locale, "Vaše priezvisko")} required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" type="email" placeholder="name@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t(locale, "Telefón")}</Label>
          <Input name="phone" id="phone" type="tel" placeholder="+421 900 000 000" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">{t(locale, "Správa")}</Label>
          <Textarea
            name="message"
            id="message"
            placeholder={t(locale, "Opíšte váš problém alebo požiadavku...")}
            className="min-h-[100px]"
            required
          />
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          <CheckCircle className="h-4 w-4 mr-2" />
          {t(locale, "Odoslať správu")}
        </Button>
      </form>
    </CardContent>
  );
}
