import { Card, CardContent } from "./ui/card";
import { Code, Database, Server, Smartphone } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Excellence",
      description: "React, TypeScript, Vue.js with modern styling frameworks"
    },
    {
      icon: Server,
      title: "Backend Mastery",
      description: "Node.js, Spring Boot with microservices architecture"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "SQL, NoSQL, Redis with optimized query performance"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Progressive Web Apps, responsive design"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer  with 6+ years of experience building web and mobile applications.
            Recently completed a masters degree in Statistics at the East Tennessee State University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Results-oriented Software Engineer with experience across diverse domains, including finance, industrial operations, and logistics.
            Proven ability to design, develop, and deploy full-stack applications using NestJs, Java, Spring Boot, and React.
            Expert in building data-intensive platforms, from operational dashboards for large enterprises to multi-sided marketplaces and data aggregation services leveraging Elasticsearch.
            Hands-on experience with the entire software lifecycle, including deployment and management on Linux/Ubuntu servers.
            A versatile team player eager to tackle complex challenges and deliver robust, scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
}