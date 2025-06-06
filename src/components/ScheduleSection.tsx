export default function ScheduleSection() {
  const scheduleItems = [
    {
      time: "16:30",
      title: "Credenciamento",
      description: "Recepção dos convidados.",
      icon: "https://ext.same-assets.com/2941481663/3914865134.svg",
      color: "bg-yellow-500"
    },
    {
      time: "17:00",
      title: "Abertura Early Stage",
      description: "Abertura e apresentação da banca avaliadora.",
      icon: "https://ext.same-assets.com/2941481663/3513869131.svg",
      color: "bg-demoday-navy"
    },
    {
      time: "17:15",
      title: "Pitch das Startups",
      description: "Pitches das startups Early-Stage.",
      icon: "https://ext.same-assets.com/2941481663/3456872134.svg",
      color: "bg-amber-500"
    },
    {
      time: "18:30",
      title: "Premiação Early Stage",
      description: "Anúncio da startup vencedora Early-Stage.",
      icon: "https://ext.same-assets.com/2941481663/1953275166.png",
      color: "bg-demoday-navy"
    },
    {
      time: "19:00",
      title: "Networking",
      description: "Momento de interação entre participantes, investidores e empreendedores.",
      icon: "https://ext.same-assets.com/2941481663/483194274.svg",
      color: "bg-yellow-500"
    },
    {
      time: "20:00",
      title: "Abertura Traction",
      description: "Abertura oficial e apresentação da banca avaliadora.",
      icon: "https://ext.same-assets.com/2941481663/3513869131.svg",
      color: "bg-demoday-navy"
    },
    {
      time: "20:15",
      title: "Pitch das Startups",
      description: "Pitches das startups Traction.",
      icon: "https://ext.same-assets.com/2941481663/3456872134.svg",
      color: "bg-amber-500"
    },
    {
      time: "21:30",
      title: "Premiação Traction",
      description: "Anúncio da startup vencedora Demoday Link.",
      icon: "https://ext.same-assets.com/2941481663/1953275166.png",
      color: "bg-blue-800"
    },
    {
      time: "21:45",
      title: "Celebração",
      description: "Encerramento do semestre com música e celebração dos resultados alcançados.",
      icon: "https://ext.same-assets.com/2941481663/360592737.svg",
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="programacao" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-demoday-navy">
            Programação do Evento
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Confira a programação completa do Demo Day 2025 e não perca nenhum momento especial.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {scheduleItems.map((item, index) => (
              <div key={index} className="relative flex items-center mb-12 last:mb-0">
                {/* Mobile layout */}
                <div className="md:hidden flex w-full">
                  <div className="flex-shrink-0 mr-6">
                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center relative z-10`}>
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-8 h-8 filter invert brightness-0"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-demoday-navy">{item.time}</span>
                      </div>
                      <h3 className="text-lg font-bold text-demoday-navy mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex w-full items-center">
                  {index % 2 === 0 ? (
                    // Left side
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="bg-gray-50 rounded-lg p-6">
                          <h3 className="text-lg font-bold text-demoday-navy mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex-shrink-0 relative z-10">
                        <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center`}>
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-8 h-8 filter invert brightness-0"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 pl-8">
                        <span className="text-2xl font-bold text-demoday-navy">{item.time}</span>
                      </div>
                    </>
                  ) : (
                    // Right side
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <span className="text-2xl font-bold text-demoday-navy">{item.time}</span>
                      </div>
                      <div className="flex-shrink-0 relative z-10">
                        <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center`}>
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-8 h-8 filter invert brightness-0"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 pl-8">
                        <div className="bg-gray-50 rounded-lg p-6">
                          <h3 className="text-lg font-bold text-demoday-navy mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
