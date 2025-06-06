"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set event date to June 10, 2025 at 19:00 (7 PM)
    const eventDate = new Date('2025-06-10T19:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const shareLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/?text=Não%20perca%20o%20DemoDay%20Link%202025!%20Vagas%20limitadas%3A%20https%3A%2F%2Fwww.sympla.com.br%2Fevento%2Flink-demoday-2025-1%2F2945571",
      icon: "📱"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.sympla.com.br%2Fevento%2Flink-demoday-2025-1%2F2945571",
      icon: "💼"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/linkschooledu?igsh=MTNyb3ZzejZjdzkzeg==",
      icon: "📸"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.sympla.com.br%2Fevento%2Flink-demoday-2025-1%2F2945571&text=Não%20perca%20o%20DemoDay%20Link%202025!%20Vagas%20limitadas!&via=seuTwitterHandle",
      icon: "🐦"
    }
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Fire icon */}
          <div className="text-6xl">🔥</div>

          {/* Main heading */}
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold text-white">
              Vagas <span className="text-demoday-gold">LIMITADAS!</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              O DemoDay Link 2025 está chegando! Não perca a oportunidade de conhecer as
              startups mais promissoras e se conectar com os principais nomes do ecossistema
              de inovação.
            </p>
          </div>

          {/* Countdown */}
          <div className="space-y-6">
            <p className="text-xl text-white">O evento começa em:</p>
            <div className="flex justify-center gap-4 lg:gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-white">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="text-sm lg:text-base text-gray-300 uppercase tracking-wide">
                  DIAS
                </div>
              </div>
              <div className="text-4xl lg:text-6xl font-bold text-white self-start">:</div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-white">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-sm lg:text-base text-gray-300 uppercase tracking-wide">
                  HORAS
                </div>
              </div>
              <div className="text-4xl lg:text-6xl font-bold text-white self-start">:</div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-white">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm lg:text-base text-gray-300 uppercase tracking-wide">
                  MINUTOS
                </div>
              </div>
              <div className="text-4xl lg:text-6xl font-bold text-white self-start">:</div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-white">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm lg:text-base text-gray-300 uppercase tracking-wide">
                  SEGUNDOS
                </div>
              </div>
            </div>
          </div>

          {/* CTA and QR Code */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <Button
              size="lg"
              className="bg-demoday-gold hover:bg-demoday-gold/90 text-black font-bold px-12 py-4 rounded-full text-xl"
              asChild
            >
              <a
                href="https://www.sympla.com.br/evento/link-demoday-2025-1/2945571"
                target="_blank"
                rel="noopener noreferrer"
              >
                GARANTA SUA VAGA
              </a>
            </Button>

            {/* QR Code placeholder */}
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
              <div className="text-xs text-center text-gray-600 p-2">
                QR Code
                <br />
                Sympla
              </div>
            </div>
          </div>

          {/* Social sharing */}
          <div className="space-y-4">
            <p className="text-white">Compartilhe:</p>
            <div className="flex justify-center gap-4">
              {shareLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                  title={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
