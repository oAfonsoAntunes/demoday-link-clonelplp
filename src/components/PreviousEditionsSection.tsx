import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PreviousEditionsSection() {
  const winners = [
    {
      place: "1º Lugar",
      edition: "Edição 2024/1",
      name: "Lumo Robotics",
      description: "Empresa de robótica que está transformando o setor de serviços em usinas solares com robôs.",
      sector: "Engenharia robótica",
      founders: "Gabriel Batista, Renato Pereda, Renato Yoshizaki",
      image: "https://ext.same-assets.com/2941481663/959507861.jpeg"
    },
    {
      place: "1º Lugar",
      edition: "Edição 2024/2",
      name: "Gaio",
      description: "Gaio é um software que ajuda marcas e creators como a Desinchá e a Livia Brasil a aumentar engajamento e vendas no Instagram, através de estratégias de automação e conteúdo.",
      sector: "Tecnologia",
      founders: "Tiago W. Salles, Bernardo Rodela, Marcos Varotti",
      image: "https://ext.same-assets.com/2941481663/463854514.jpeg"
    }
  ];

  return (
    <section id="edicoes-anteriores" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-demoday-navy">
            Edições Anteriores
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Conheça as startups vencedoras das últimas edições do Demo Day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {winners.map((winner, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <div className="h-64 bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-demoday-gold text-black font-semibold">
                    {winner.place}
                  </Badge>
                  <Badge variant="secondary" className="bg-black/50 text-white">
                    {winner.edition}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-demoday-navy">
                    {winner.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {winner.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      SETOR:
                    </span>
                    <p className="text-gray-700">{winner.sector}</p>
                  </div>

                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      FUNDADORES:
                    </span>
                    <p className="text-gray-700">{winner.founders}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
