import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "olamideoluwatobiadebiyi@gmail.com",
      href: "mailto:olamideoluwatobiadebiyi@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (443) 742-8232",
      href: "tel:+14437428232"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kingsport, TN",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/devolamide", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/adebiyi-oluwatobi-727000192/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your next project to life? I'm always excited to discuss 
            new opportunities and collaborate on innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{item.label}</h3>
                <a 
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-8">
            <a href="mailto:olamideoluwatobiadebiyi@gmail.com">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth glow mr-4">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </a>
            <a href="tel:+14437428232">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                Schedule Call
              </Button>
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-smooth hover:bg-primary/10"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-6 w-6" />
                </a>
              </Button>
            ))}
          </div>

          <p className="text-muted-foreground">
            Available for full-time, part-time and contractor opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}