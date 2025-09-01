import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Co-workspace Management System",
      description: "Full-stack multi-tenant coworking space management system built with React frontend, Nest.js backend. Features include real-time analytics, customization, payment processing, and admin dashboard.",
      technologies: ["React", "Nest.js", "PostgreSQL", "Prisma", "Redis", "Docker", "AWS"],
      github: "#",
      live: "https://www.cliquetech.io/products/hubx",
      featured: true
    },
    /**
    {
      title: "Task Management API",
      description: "RESTful API built with Java Spring Boot during internship. Implements JWT authentication, role-based access control, and comprehensive project management features.",
      technologies: ["Java", "Spring Boot", "MySQL", "JWT", "Maven", "JUnit"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-powered chat app with React frontend and Node.js backend. Features include private messaging, group chats, file sharing, and online status indicators.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
      github: "#",
      live: "#",
      featured: false
    },
     */
    {
      title: "Google Flights UI Clone",
      description: "Created a copy of google flights using React, implemented features like theme toggle, data fetching, responsiveness.",
      technologies: ["React", "Typescript", "Vite", "MUI", "PostgreSQL"],
      github: "https://github.com/devolamide/google-flights-ui-clone",
      live: "https://google-flights-ui-clone-ybhz.vercel.app/",
      featured: false
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across 
            the full technology stack and problem-solving capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Badge variant="skill" className="text-xs">Featured</Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90 transition-smooth">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}