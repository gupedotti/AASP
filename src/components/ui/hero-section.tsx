import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-gradient-hero py-20 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary-light rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent rounded-full opacity-15 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-40 left-1/4 w-16 h-16 bg-primary rounded-full opacity-10 animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <a href="https://seuperito.com.br/" target="_blank" rel="noopener noreferrer">
              <img 
              className="h-16 object-contain ml-0 mb-4" 
              src="/lovable-uploads/38d7e4e4-73e9-404c-b47a-59754bb01e2e.png" 
              alt="SEUPERITO Logo" 
            />
            </a>
          <div className="inline-flex items-center bg-primary-light/20 text-primary px-8 py-4 rounded-full text-lg font-medium">
            🎯 Parceria Exclusiva AASP
          </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Sua Advocacia com{" "}
              <span className="text-primary">Mais Expertise</span>{" "}
              e Retorno Financeiro!
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              A parceria AASP & SEUPERITO oferece acesso exclusivo aos melhores peritos 
              com <strong className="text-primary">15% de cashback</strong> garantido para associados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://seuperito.com.br/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="shadow-primary">
                  Aproveite seu benefício agora
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main circular image container */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-card rounded-full shadow-soft"></div>
                <div className="absolute inset-4 bg-white rounded-full shadow-card overflow-hidden">
                  <img 
                    src="/lovable-uploads/38d7e4e4-73e9-404c-b47a-59754bb01e2e.png" 
                    alt="SEUPERITO - Conectando Advogados a Peritos Qualificados" 
                    className="w-full h-full object-contain p-8"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-primary animate-float">
                15% Cashback
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white border-2 border-primary-light rounded-full p-3 shadow-card animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              
              <div className="absolute top-1/4 -right-8 bg-white border-2 border-primary-light rounded-full p-2 shadow-card animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              
              <div className="absolute top-1/2 -left-6 bg-white border-2 border-primary-light rounded-full p-2 shadow-card animate-float" style={{ animationDelay: "2s" }}>
                <div className="w-5 h-5 bg-primary rounded-full"></div>
              </div>
              
              <div className="absolute bottom-1/3 -right-6 bg-white border-2 border-primary-light rounded-full p-3 shadow-card animate-float" style={{ animationDelay: "2.5s" }}>
                <div className="w-7 h-7 bg-accent rounded-full"></div>
              </div>
              
              <div className="absolute top-3/4 right-1/4 bg-white border-2 border-primary-light rounded-full p-2 shadow-card animate-float" style={{ animationDelay: "3s" }}>
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;