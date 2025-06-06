"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="min-h-screen hero-gradient flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            {/* Event Info Badge */}
            <Badge className="bg-demoday-gold text-black font-semibold px-4 py-2 text-sm w-fit">
              10/06 - 19h | Rooftop 6° andar
            </Badge>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="font-display text-6xl lg:text-8xl font-bold leading-none">
                DEMODAY
              </h1>
              <div className="flex items-center space-x-2 text-sm">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                    <span className="text-demoday-navy font-bold text-xs">L</span>
                  </div>
                  <span className="font-bold">LINK</span>
                  <span className="text-gray-300">| School of Business</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-200 max-w-md leading-relaxed">
              O palco onde as melhores startups da Link se encontram com investidores
              e líderes do mercado, e onde conexões valiosas acontecem.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-demoday-gold hover:bg-demoday-gold/90 text-black font-semibold px-8 py-3 rounded-full text-lg"
              asChild
            >
              <a
                href="https://www.sympla.com.br/evento/link-demoday-2025-1/2945571"
                target="_blank"
                rel="noopener noreferrer"
              >
                Garanta seu ingresso agora
              </a>
            </Button>
          </div>

          {/* Right content - Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="video-container aspect-[9/16] bg-black/20 rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/api/placeholder/300/600"
                >
                  <source src="https://ext.same-assets.com/2941481663/1279543713.mp4" type="video/mp4" />
                  {/* Fallback content */}
                  <div className="w-full h-full bg-gradient-to-b from-blue-900 to-purple-900 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <h3 className="text-white text-2xl font-bold">
                        VOCÊ TAMBÉM PODE ESTAR AQUI
                      </h3>
                      <p className="text-gray-200">
                        Video promocional do evento
                      </p>
                    </div>
                  </div>
                </video>

                {/* Overlay text on video */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-bold mb-2">
                      VOCÊ TAMBÉM
                    </h3>
                    <h3 className="text-xl font-bold">
                      PODE ESTAR AQUI
                    </h3>
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
