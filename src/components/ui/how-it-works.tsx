import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-primary-light relative overflow-hidden">

      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
              Outros Programas
            </h2>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto leading-relaxed">
              A parceria entre AASP e SEUPERITO oferece múltiplas soluções para 
              otimizar sua prática jurídica e maximizar seus resultados.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Programa de Capacitação</h3>
                    <p className="text-secondary/70">
                      Treinamentos especializados para maximizar o uso da plataforma e otimizar resultados.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Suporte Personalizado</h3>
                    <p className="text-secondary/70">
                      Atendimento dedicado para associados AASP com suporte técnico especializado.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Rede de Networking</h3>
                    <p className="text-secondary/70">
                      Acesso exclusivo a eventos e networking com outros profissionais do setor.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button variant="default" size="lg" className="w-full sm:w-auto">
                Ver Detalhes
              </Button>
            </div>
            
            {/* Right content - Card */}
            <div className="relative">
              <Card className="bg-secondary text-white p-8 rounded-2xl shadow-card">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">SEUPERITO Corporate</h3>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <p className="text-white/80 leading-relaxed">
                    Solução corporativa completa para escritórios de advocacia de grande porte, 
                    com gestão centralizada e relatórios avançados.
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                      Saiba Mais
                    </Button>
                    <Button className="bg-primary hover:bg-primary-dark">
                      Contratar
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;