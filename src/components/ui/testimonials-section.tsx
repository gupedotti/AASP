import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Roberto Silva",
      role: "Advogado Associado AASP",
      content: "A parceria AASP & SEUPERITO revolucionou minha prática. Conseguir peritos qualificados nunca foi tão fácil, e o cashback de 15% é um benefício incrível!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dra. Marina Costa",
      role: "Especialista em Direito Civil",
      content: "O tempo que economizo com a SEUPERITO me permite focar no que realmente importa: meus clientes. A qualidade dos peritos é excepcional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b512fb45?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Advogado Criminalista",
      content: "Como associado AASP, ter acesso a essa rede de peritos com cashback garantido fez toda a diferença nos meus casos mais complexos.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              O que nossos associados estão dizendo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Depoimentos reais de advogados que já aproveitam os benefícios da nossa parceria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white shadow-card hover:shadow-primary transition-all duration-300 relative">
                <Quote className="w-8 h-8 text-primary-light mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-secondary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;