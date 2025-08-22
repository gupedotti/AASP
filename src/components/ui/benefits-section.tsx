import { Card } from "@/components/ui/card";
import { Shield, Users, CreditCard, Clock } from "lucide-react";

const BenefitsSection = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Acesse o site SeuPerito",
      description: "Escolha a área da demanda e siga o passo a passo",
      features: ["Peritos em todo o Brasil", "receba até 8 orçamentos", "Publicação gratuita"],
      bgColor: "bg-[hsl(var(--primary))]",
      textColor: "text-white"
    },
    {
      icon: <Shield className="w-12 h-12 text-secondary" />,
      title: "Negocie diretamente pela plataforma",
      description: "Converse e negocie diretamente com diversos Peritos Assistentes.",
      features: ["Chat interno", "Visualização de propostas", "Controle de demandas"],
      bgColor: "bg-white",
      textColor: "text-secondary"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-secondary" />,
      title: "Pagamento seguro",
      description: "Negociando dentro da plataforma, você pode pagar com segurança e receber CASHBACK.",
      features: ["Segurança em pagamento", "Cashback", "Transferência"],
      bgColor: "bg-white",
      textColor: "text-secondary"
    },
    
  ];

  return (
    <section id="beneficios" className="py-20 bg-section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
            Como usufruir dos benefícios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra todas as soluções que a parceria AASP & SEUPERITO oferece para sua advocacia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`p-8 rounded-2xl shadow-card hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer ${service.bgColor} border-2 border-transparent`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-3 ${service.textColor}`}>
                    {service.title}
                  </h3>
                  <p className={`mb-4 leading-relaxed ${service.textColor === 'text-white' ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className={`text-sm flex items-center ${service.textColor === 'text-white' ? 'text-white/80' : 'text-muted-foreground'}`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 group-hover:scale-150 transition-all duration-300 ${service.textColor === 'text-white' ? 'bg-white' : 'bg-black'}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;