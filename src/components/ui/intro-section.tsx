import { Star, Users, Shield, Clock } from "lucide-react";

const IntroSection = () => {
  const stats = [
    { icon: Users, label: "Peritos Qualificados", value: "6.000+" },
    { icon: Star, label: "Áreas de Atuação", value: "+70" },
    { icon: Shield, label: "Perícias realizadas", value: "+1.000" },
    { icon: Clock, label: "Tempo Médio de resposta", value: "2h" }
  ];

  return (
    <section id="sobre" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
                Por que Escolher a{" "}
                <span className="text-primary">Parceria AASP & SEUPERITO?</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A <strong className="text-primary">AASP</strong>, sempre comprometida em oferecer as melhores 
                  ferramentas e benefícios para o seu dia a dia profissional, tem o prazer de anunciar uma 
                  nova parceria estratégica.
                </p>
                
                <p>
                  Apresentamos a <strong className="text-primary">SEUPERITO</strong>, a plataforma que conecta 
                  advogados aos mais qualificados especialistas para suas necessidades periciais. Sabemos que 
                  encontrar o perito ideal pode ser crucial para o sucesso dos seus processos.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-bold text-secondary">Agilidade Garantida</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-4">
                    Encontre peritos qualificados em tempo recorde
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-bold text-secondary">Confiança Total</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-4">
                    Peritos verificados e com histórico comprovado
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats section */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-primary transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;