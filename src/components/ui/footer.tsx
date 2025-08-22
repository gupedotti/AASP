const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-8">
          {/* Logo and description */}
          <div className="space-y-6 text-center">
            <a href="https://seuperito.com.br/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/lovable-uploads/logo-horizontal-white.png" 
                alt="SEUPERITO Logo" 
                className="h-10 object-contain mx-auto"
              />
            </a>
            <p className="text-white/80 text-sm leading-relaxed">
              A parceria que conecta advogados aos melhores peritos especializados, 
              oferecendo benefícios exclusivos para associados AASP.
            </p>
          </div>
          

          
          {/* Select Course */}

          

        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; 2025 SEUPERITO. Todos os direitos reservados.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="https://seuperito.com.br/politica-de-privacidade/" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="https://seuperito.com.br/termos-e-condicoes/" className="hover:text-primary transition-colors">Termos de Uso</a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;