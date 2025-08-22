import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não perca essa chance!
          </h2>
          
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Recorra ao SEUPERITO e leve sua prática jurídica a um novo nível, com mais eficiência, 
            segurança e o apoio exclusivo que só a AASP e seus parceiros oferecem.
          </p>
          
          <a href="https://seuperito.com.br/" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary shadow-soft mb-6"
            >
              Aproveite seu benefício agora
            </Button>
          </a>
          
          <div className="flex items-center justify-center space-x-2 text-white/90">
            <span className="text-2xl">✨</span>
            <span className="font-bold">15% de cashback garantido para associados AASP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;