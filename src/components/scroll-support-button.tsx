"use client";

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function ScrollSupportButton() {
  const scrollToSupport = () => {
    const element = document.getElementById('remote-support');
    if (element) {
      const headerOffset = 80; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Button 
      onClick={scrollToSupport}
      variant="outline"
      size="lg"
    >
      <ArrowDown className="h-5 w-5 mr-2" />
      Vzdialená podpora
    </Button>
  );
}
