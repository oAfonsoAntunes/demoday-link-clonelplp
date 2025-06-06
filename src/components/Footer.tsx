export default function Footer() {
  const quickLinks = [
    { name: "Sobre o Evento", href: "#sobre" },
    { name: "Programação", href: "#programacao" },
    { name: "Banca", href: "#banca" },
    { name: "Projetos Anteriores", href: "#edicoes-anteriores" }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/linkschooledu",
      icon: "📸"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/school/link-school/",
      icon: "💼"
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@linkschoolofbusiness",
      icon: "📺"
    }
  ];

  return (
    <footer className="bg-demoday-navy text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-demoday-navy font-bold text-lg">L</span>
              </div>
              <span className="text-white font-bold text-xl">LINK</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A Link School of Business é uma escola de negócios focada em formar
              líderes e empreendedores para o mercado digital.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Powered by</span>
              <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                <span className="text-demoday-navy font-bold text-xs">H</span>
              </div>
              <span>tech</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-demoday-gold transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contato</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <div>
                  <p>Av. Brigadeiro Luís Antônio, 5083 -</p>
                  <p>Jardim Paulista, São Paulo - SP,</p>
                  <p>01402-002</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <a
                  href="mailto:linklabs@lsb.com.br"
                  className="hover:text-demoday-gold transition-colors duration-200"
                >
                  linklabs@lsb.com.br
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <span>📞</span>
                <a
                  href="tel:+5511941071484"
                  className="hover:text-demoday-gold transition-colors duration-200"
                >
                  (11) 94107-1484
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold">Redes Sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-demoday-gold/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                    title={social.name}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Link School of Business. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="https://lsb.edu.br/politica-de-privacidade/#:~:text=O%20usuário%20se%20compromete%20a,B)"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-demoday-gold transition-colors duration-200"
              >
                Política de Privacidade
              </a>
              <a
                href="https://lsb.edu.br/politica-de-privacidade/#:~:text=O%20usuário%20se%20compromete%20a,B)"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-demoday-gold transition-colors duration-200"
              >
                Termos de Uso
              </a>
              <a
                href="https://www.sympla.com.br/evento/link-demoday-2025-1/2945571"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-demoday-gold transition-colors duration-200"
              >
                Sympla
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
