import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-md"></div>
              <span className="text-xl font-bold">ReboqueForte</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Especialistas em fabricação de trailers, carteirinhas e reboques há mais de 15 anos. 
              Qualidade, durabilidade e confiança em cada projeto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("inicio")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("sobre")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicos")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("galeria")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contato")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Trailers Pesados</li>
              <li>Carteirinhas Utilitárias</li>
              <li>Reboques Personalizados</li>
              <li>Manutenção e Reparo</li>
              <li>Consultoria Técnica</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">(17) 99613-9290</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">rsreboque@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Professor Nelson pires, 75<br />
                  Catanduva - SP, 15802-341
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 rs-reboques. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/80 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;