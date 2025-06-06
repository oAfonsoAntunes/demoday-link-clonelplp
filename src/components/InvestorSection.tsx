import { Card, CardContent } from "@/components/ui/card";

export default function InvestorSection() {
  const investors = [
    {
      name: "Rubens Pereira",
      title: "CEO, General Manager, Business Unit Head, Board Member",
      company: "Ex-Gerdau",
      image: "https://ext.same-assets.com/2941481663/2723770922.svg",
      linkedin: "https://www.linkedin.com/in/rubens-pereira-3015018/"
    },
    {
      name: "Edson Rigonatti",
      title: "Investidor. Empreendedor. Eterno Aprendiz",
      company: "Astella",
      image: "https://ext.same-assets.com/2941481663/1245306566.svg",
      linkedin: "https://www.linkedin.com/in/edsonrigonatti/"
    },
    {
      name: "Carolina Strobel",
      title: "Sócia fundadora da Antler no Brasil",
      company: "Antler",
      image: "https://ext.same-assets.com/2941481663/3395060259.svg",
      linkedin: "https://www.linkedin.com/in/carolstrobel/"
    }
  ];

  return (
    <section id="banca" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-demoday-navy">
            Banca de Investidores
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Conheça os investidores que estarão avaliando os projetos e fornecendo feedback valioso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investors.map((investor, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-6">
                <a
                  href={investor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={investor.image}
                      alt={investor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-demoday-navy">
                    {investor.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {investor.title}
                  </p>
                  <p className="text-demoday-navy font-semibold">
                    {investor.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
