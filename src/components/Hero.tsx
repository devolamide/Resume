import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "../assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Full Stack</span><br />
            Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            4+ years of experience crafting scalable web applications with modern technologies.
            Expert in MVP development with NestJs, React and modern React Patterns.
            Recently specialized in api development using Spring Boot through intensive internship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href={"mailto:olamideoluwatobiadebiyi@gmail.com"}>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth glow">
                <Mail className="mr-2 h-5 w-5"/>
                Get In Touch
              </Button>
            </a>
            <a
              href={"https://docs.google.com/document/d/e/2PACX-1vSTH3CMNf-Yb5VuHUDPXEkGtZRJsiD8BJ9-Xnx_Lc5wKcNQSr0nnFHKIiAHD4oXbwzYhNC2zSgoozAV/pub"}
              target={"_blank"}
            >
              <Button variant="outline" size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Download className="mr-2 h-5 w-5"/>
                Download CV
              </Button>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/devolamide" target={"_blank"}>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="h-6 w-6"/>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/adebiyi-oluwatobi-727000192/" target={"_blank"}>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="h-6 w-6"/>
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}