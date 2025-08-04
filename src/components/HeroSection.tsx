import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Fabricação de
            <span className="block text-dark"> Trailers & Reboques</span>
            <span className="block"> de Qualidade</span>
          </h1>
          
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Especializados na fabricação de trailers, carteirinhas e reboques sob medida. 
            Qualidade garantida, durabilidade excepcional e entrega no prazo combinado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
              onClick={() => scrollToSection("contato")}
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => scrollToSection("galeria")}
            >
              Ver Nossos Trabalhos
            </Button>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-white/90">+15 anos de experiência</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-white/90">Materiais de qualidade</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-white/90">Garantia estendida</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;