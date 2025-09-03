'use client';

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, X } from "lucide-react";
import { toast } from 'sonner';

export function ContactFormContent() {
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
        loading: 'Odosielam správu...',
        success: () => (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Správa bola úspešne odoslaná!</span>
          </div>
        ),
        error: (err) => (
          <div className="flex items-center gap-2">
            <X className="h-4 w-4 text-red-500" />
            <span>{err.message || 'Nastala chyba pri odosielaní správy.'}</span>
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
            <Label htmlFor="firstName">Meno</Label>
            <Input name="firstName" id="firstName" placeholder="Vaše meno" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Priezvisko</Label>
            <Input name="lastName" id="lastName" placeholder="Vaše priezvisko" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" type="email" placeholder="vas@email.sk" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefón</Label>
          <Input name="phone" id="phone" type="tel" placeholder="+421 xxx xxx xxx" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Správa</Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Opíšte váš problém alebo požiadavku..."
            className="min-h-[100px]"
            required
          />
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          <CheckCircle className="h-4 w-4 mr-2" />
          Odoslať správu
        </Button>
      </form>
    </CardContent>
  );
}
