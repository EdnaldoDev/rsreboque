import { Truck, Package, Wrench, ArrowRight, Ship,Settings  } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Ship,
      title: "Carretas Náuticas",
      description: "Carretas especializadas para transporte de embarcações, com sistema de lançamento seguro.",
      features: [
        "Estrutura em aço galvanizado",
        "Sistema de freios pneumáticos",
        "Suspensão reforçada"
      ]
    },
    {
      icon: Settings,
      title: "Suspensões Especializadas",
      description: "Sistemas de suspensão elétrica, hidráulica, mecânica e pneumática para diferentes necessidades.",
      features: [
        "Sistema elétrico",
        "Sistema de freios pneumáticos",
        "Suspensão reforçada"
      ]
    },
    {
      icon: Truck,
      title: "Trailers Pesados",
      description: "Fabricação de trailers para transporte de cargas pesadas, com estrutura reforçada e acabamento de qualidade superior.",
      features: [
        "Estrutura em aço galvanizado",
        "Sistema de freios pneumáticos",
        "Suspensão reforçada"
      ]
    },
    {
      icon: Package,
      title: "Carretinhas Utilitárias",
      description: "Reboques leves e versáteis para transporte de cargas menores, ideais para uso urbano e rural.",
      features: [
        "Designs compactos e funcionais",
        "Facilidade de manobra",
        "Múltiplas opções de tamanho",
        "Acabamento resistente"
      ]
    },
    {
      icon: Wrench,
      title: "Reboques Personalizados",
      description: "Desenvolvimento de reboques sob medida para atender necessidades específicas do seu negócio.",
      features: [
        "Projeto personalizado",
        "Consultoria técnica especializada",
        "Materiais premium"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de soluções em fabricação de equipamentos para transporte, 
            sempre com foco na qualidade, durabilidade e eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20 text-muted-foreground"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-secondary-foreground transition-colors text-foreground"
                  onClick={scrollToContact}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Serviços Adicionais */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Serviços Adicionais
            </h3>
            <p className="text-foreground">
              Além da fabricação, oferecemos serviços completos para manter seus equipamentos sempre em perfeitas condições.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-accent rounded-full flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Manutenção</h4>
              <p className="text-sm text-foreground">
                Serviços de manutenção preventiva e corretiva
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-accent rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Peças</h4>
              <p className="text-sm text-foreground">
                Fornecimento de peças originais e acessórios
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-accent rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Entrega</h4>
              <p className="text-sm text-foreground">
                Entregamos em toda a região metropolitana
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-accent rounded-full flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Consultoria</h4>
              <p className="text-sm text-foreground">
                Orientação técnica especializada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
