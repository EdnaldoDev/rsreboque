import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from "react-icons/fa";
import MapaGoogle from "@/hooks/mapagoolge";
import { sendEmail } from "@/hooks/emailform";
import { title } from "process";
import { Description } from "@radix-ui/react-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    
    try{
      const res= await sendEmail(formData)
    // Simulate form submission
     if(res.status=200){
         toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });
      }
     
    }catch(err){
      toast({
        title:"Erro ao enviar o email",
        description:"Tente enviar o email novamente mais tarde"
      })
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999",
      subInfo: "Segunda a Sexta: 8h às 18h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contato@reboqueforte.com",
      subInfo: "Resposta em até 24h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua Industrial, 1234",
      subInfo: "São Paulo - SP, 01234-567"
    },
    {
      icon: FaWhatsapp,
      title: "Whatsapp",
      info: "24h",
      subInfo: "Resposta em até 24h"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Entre em Contato
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground-light))] max-w-3xl mx-auto">
            Solicite seu orçamento personalizado ou tire suas dúvidas. Nossa equipe 
            está pronta para atender suas necessidades com soluções sob medida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Solicitar Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-foreground">
                    Tipo de Serviço
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecione o serviço</option>
                    <option value="trailer-pesado">Trailer Pesado</option>
                    <option value="carteirinha">Carteirinha Utilitária</option>
                    <option value="reboque-personalizado">Reboque Personalizado</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva suas necessidades, especificações desejadas ou tire suas dúvidas..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>


            <MapaGoogle/>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => (
                <a href="https://api.whatsapp.com/send/?phone=5517996139290&text= Gostaria de saber, mais sobre os trailer e fazer um orçamentos&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <contact.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {contact.title}
                        </h3>
                        <p className="text-foreground font-medium">
                          {contact.info}
                        </p>
                        <p className="text-[hsl(var(--muted-foreground-light))] text-sm">
                          {contact.subInfo}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </a>
                
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[hsl(var(--muted-foreground-light))] mx-auto mb-2" />
                  <p className="text-muted-foreground>
                    Mapa da Localização
                  </p>
                  <p className="text-sm text-muted-foreground>
                    Rua Industrial, 1234 - São Paulo/SP
                  </p>
                </div>
              </div>
            </Card>

            <div className="bg-accent/10 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">
                💡 Dica Importante
              </h3>
              <p className="text-[hsl(var(--muted-foreground-light))] text-sm">
                Para um orçamento mais preciso, informe as dimensões desejadas, 
                capacidade de carga e uso pretendido do equipamento. Nossa equipe 
                fará uma análise detalhada e apresentará a melhor solução para você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;