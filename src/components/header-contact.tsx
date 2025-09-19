import { Phone, Mail } from "lucide-react";

export function HeaderContact() {
  return (
    <div className="flex items-center space-x-6">
      <a href="mailto:podpora@novem.sk" className="hidden md:flex items-center space-x-2 text-sm">
        <Mail className="h-6 w-6 text-primary" />
        <h3 className="text-foreground text-xl font-bold">podpora@novem.sk</h3>
      </a>
      <a href="tel:+421220202222" className="hidden md:flex items-center space-x-2 text-sm">
        <Phone className="h-6 w-6 text-primary" />
        <h3 className="text-foreground text-xl font-bold">+421 2 20 20 22 22</h3>
      </a>
    </div>
  );
}
