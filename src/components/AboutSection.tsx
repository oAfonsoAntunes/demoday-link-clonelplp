import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const features = [
    {
      icon: "https://ext.same-assets.com/2941481663/3774264250.svg",
      title: "Apresentações de Startups",
      description: "Conheça 10 startups promissoras em diferentes estágios: (5) Early-Stage e (5) Traction."
    },
    {
      icon: "https://ext.same-assets.com/2941481663/1953275166.png",
      title: "Presença de investidores",
      description: "Fundos de Venture Capital, investidores anjo e líderes do mercado."
    },
    {
      icon: "https://ext.same-assets.com/2941481663/483194274.svg",
      title: "Networking Premium",
      description: "Oportunidade de se conectar com investidores, professores, alunos e representantes de grandes empresas."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-demoday-navy">
            Sobre o Evento
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            O Demo Day é o momento mais aguardado do ano na Link School of Business,
            onde as melhores startups apresentam seus projetos para investidores e
            líderes do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-demoday-navy rounded-full flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 filter invert brightness-0"
                  />
                </div>
                <h3 className="text-xl font-bold text-demoday-navy">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
