import { Award, Users, Wrench, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Utilizamos apenas materiais de primeira linha e seguimos rigorosos padrões de qualidade."
    },
    {
      icon: Users,
      title: "Equipe Especializada", 
      description: "Profissionais com mais de 15 anos de experiência no setor de fabricação industrial."
    },
    {
      icon: Wrench,
      title: "Projetos Sob Medida",
      description: "Desenvolvemos soluções personalizadas para atender às necessidades específicas de cada cliente."
    },
    // {
    //   icon: Shield,
    //   title: "Garantia Estendida",
    //   description: "Oferecemos garantia estendida em todos os nossos produtos para sua tranquilidade."
    // }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Sobre a RS reboques
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Chegamos para fazer a diferença!
          A RS-Reboques já nasceu com um compromisso claro: fabricar trailers, carretinhas e reboques com qualidade, resistência e confiança.
          Oferecemos soluções modernas e seguras para quem precisa transportar com tranquilidade e eficiência.
          </p>
        </div>
{/* 
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Nossa História
            </h3>
            <div className="space-y-4 text-muted-foreground>
              <p>
                Fundada em 2008, a ReboqueForte nasceu da paixão pela metalurgia e 
                do compromisso em oferecer produtos de qualidade superior. Começamos 
                como uma pequena oficina e hoje somos uma das principais empresas 
                do setor na região.
              </p>
              <p>
                Nossa trajetória é marcada pela constante busca pela inovação e 
                aperfeiçoamento dos nossos processos produtivos. Investimos em 
                tecnologia de ponta e capacitação contínua da nossa equipe.
              </p>
              <p>
                Atendemos desde pequenos produtores rurais até grandes empresas 
                de logística, sempre mantendo o mesmo padrão de excelência e 
                compromisso com a satisfação do cliente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground>Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground>Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground>Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground>Suporte Técnico</div>
            </div>
          </div>
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-foreground text-sm text-bold">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;