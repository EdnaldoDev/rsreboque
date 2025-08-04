import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Backpack,  } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';



import Logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b" style={{backgroundColor:'#5c95d6ff'}}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 bg-brand">
            <img src={Logo} alt="Logo do site: RS reboques" width={100} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
               <a 
                  rel="noopener noreferrer"
                  target="_blank" 
                  href="https://api.whatsapp.com/send/?phone=5517996139290&text=ola gostaria de saber, mais sobre os trailers&type=phone_number&app_absent=0" className="flex items-center text-foreground">
                  <FaWhatsapp color="white" size={40}/>
                  <span>(17) 99613-9290</span>
              </a>
                
              </div>
              <div className="flex items-center space-x-1 text-foreground">
                <Mail className="w-4 h-4" />
                <span>rsreboque@gmail.com</span>
              </div>


            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection("contato")}
              className="hidden md:flex"
            >
              Orçamento
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection("sobre")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection("servicos")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection("galeria")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <div className="pt-4 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection("contato")}
                  className="w-full"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;