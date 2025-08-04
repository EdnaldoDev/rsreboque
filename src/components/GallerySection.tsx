import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryTrailer1 from "@/assets/gallery-trailer-1.jpg";
import galleryTrailer2 from "@/assets/gallery-trailer-2.jpg";
import galleryParts from "@/assets/gallery-parts.jpg";
import vid1 from'@/assets/fotosTrailer/vid1.mp4'
import f1 from "@/assets/fotosTrailer/f1.jpg";
import f2 from "@/assets/fotosTrailer/f2.jpg";
import f3 from "@/assets/fotosTrailer/f3.jpg";
import f4 from "@/assets/fotosTrailer/f4.jpg";
import f5 from "@/assets/fotosTrailer/f5.jpg";
import f6 from "@/assets/fotosTrailer/f6.jpg";
import f7 from "@/assets/fotosTrailer/f7.jpg";
import f8 from "@/assets/fotosTrailer/f8.jpg";
import f9 from "@/assets/fotosTrailer/f9.jpg";
import f10 from "@/assets/fotosTrailer/f10.jpg";
import f11 from "@/assets/fotosTrailer/f11.jpg";
import f12 from "@/assets/fotosTrailer/f12.jpg";
import f13 from "@/assets/fotosTrailer/f13.jpg";
import f14 from "@/assets/fotosTrailer/f14.jpg";
import f15 from "@/assets/fotosTrailer/f15.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

 const galleryImages = [
  {
    src: f1,
    title: "Trailer Pesado - 40 Toneladas",
    description: "Trailer reforçado para transporte de cargas pesadas com sistema de freios pneumático."
  },
  {
    src: f2,
    title: "Carretinha Utilitária",
    description: "Reboque leve e versátil para uso urbano e rural, com acabamento premium."
  },
  {
    src: f3,
    title: "Acessórios e Componentes",
    description: "Linha completa de acessórios e componentes de alta qualidade."
  },
  {
    src: f5,
    title: "Reboque Industrial",
    description: "Solução robusta para transporte industrial com garantia estendida."
  },
  {
    src: f6,
    title: "Detalhes de Acabamento",
    description: "Atenção aos detalhes em cada projeto, garantindo qualidade superior."
  },
  {
    src: f7,
    title: "Transporte Agrícola",
    description: "Ideal para movimentação de implementos e colheitas no campo."
  },
  {
    src: f8,
    title: "Engate Rápido",
    description: "Facilidade e segurança no acoplamento ao veículo."
  },
  {
    src: f9,
    title: "Carretinha Multiuso",
    description: "Design compacto e funcional para o dia a dia."
  },
  {
    src: f10,
    title: "Chassi Reforçado",
    description: "Estrutura construída com aço de alta resistência."
  },
  {
    src: f11,
    title: "Sistema de Iluminação LED",
    description: "Tecnologia LED para maior visibilidade e economia."
  },
  {
    src: f12,
    title: "Caçamba Basculante",
    description: "Facilidade na descarga de materiais com acionamento hidráulico."
  },
  {
    src: f13,
    title: "Pintura Eletrostática",
    description: "Acabamento durável e resistente à corrosão."
  },
  {
    src: f15,
    title: "Reboques para Barcos",
    description: "Projetados para navegação com segurança e facilidade."
  }
];



  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <section id="galeria" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Galeria de Projetos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Confira alguns dos nossos trabalhos realizados. Cada projeto é desenvolvido 
              com cuidado e atenção aos detalhes, garantindo a satisfação do cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <video src={vid1} controls></video>
            </div>
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => openModal(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Interessado em ver mais projetos ou solicitar um orçamento personalizado?
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contato");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="bg-background rounded-lg overflow-hidden">
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-muted-foreground">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
