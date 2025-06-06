"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Programação", href: "#programacao" },
    { name: "Banca", href: "#banca" },
    { name: "Edições Anteriores", href: "#edicoes-anteriores" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-demoday-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-demoday-navy font-bold text-lg">L</span>
              </div>
              <span className="text-white font-bold text-xl">LINK</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-demoday-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-demoday-gold hover:bg-demoday-gold/90 text-black font-semibold px-6 py-2 rounded-full"
              asChild
            >
              <a
                href="https://www.sympla.com.br/evento/link-demoday-2025-1/2945571"
                target="_blank"
                rel="noopener noreferrer"
              >
                Garanta sua vaga
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-demoday-gold transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                className="bg-demoday-gold hover:bg-demoday-gold/90 text-black font-semibold px-6 py-2 rounded-full mt-4 w-fit"
                asChild
              >
                <a
                  href="https://www.sympla.com.br/evento/link-demoday-2025-1/2945571"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Garanta sua vaga
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
