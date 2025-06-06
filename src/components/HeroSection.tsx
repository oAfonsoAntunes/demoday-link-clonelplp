"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-50 to-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-first grid that becomes side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content - Mobile centered, desktop left-aligned */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 max-w-2xl mx-auto lg:mx-0">
            {/* Solution Badge */}
            <Badge className="bg-blue-100 text-blue-700 font-medium px-3 py-1.5 text-sm w-fit mx-auto lg:mx-0">
              Solução Inteligente para Clínicas
            </Badge>

            {/* Main Title - Larger on desktop */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-gray-900">
                Reduza faltas e aumente consultas com IA no WhatsApp
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-sm text-gray-600">
                <span>Especialmente desenvolvido para</span>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-blue-600">clínicas médicas</span>
                  <span className="text-gray-400">| 2-5 médicos</span>
                </div>
              </div>
            </div>

            {/* Description - Better spacing and mobile optimization */}
            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Automatize o atendimento da sua clínica com nossa solução de IA que:
              </p>
              <ul className="space-y-3 text-gray-600 text-left">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-base sm:text-lg">Reduz faltas em até 70% com lembretes inteligentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-base sm:text-lg">Aumenta a taxa de remarcação em até 3x</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-base sm:text-lg">Atendimento 24/7 via WhatsApp para seus pacientes</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons - Stacked on mobile, side by side on larger screens */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full text-base sm:text-lg transition-colors"
                asChild
              >
                <a href="#agendar-demo" rel="noopener noreferrer">
                  Agendar demonstração
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full text-base sm:text-lg transition-colors"
                asChild
              >
                <a href="#como-funciona" rel="noopener noreferrer">
                  Como funciona
                </a>
              </Button>
            </div>
          </div>

          {/* Right content - Image with better mobile handling */}
          <div className="relative order-first lg:order-last">
            <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]">
                <img
                  src="/images/medical-whatsapp-dashboard.png"
                  alt="Dashboard da solução de WhatsApp para clínicas médicas"
                  className="w-full h-full object-cover"
                />
                {/* Stats overlay - More visible on mobile */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 sm:p-6">
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold">70%</div>
                      <div className="text-xs sm:text-sm text-gray-200">Menos faltas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold">3x</div>
                      <div className="text-xs sm:text-sm text-gray-200">Mais consultas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
