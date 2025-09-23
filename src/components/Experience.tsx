import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "education",
      title: "Master's of Science in Mathematics & Statistics",
      company: "East Tennessee State Univerisity",
      period: "Aug 2022 - Dec 2024",
      description: "Advanced my knowledge of Analytics & Operation Research",
      technologies: [],
      current: false
    },
    {
      type: "work",
      title: "Fullstack Web and Mobile Developer",
      company: "Confidential Software Development Agency",
      period: "Sep 2019 - Jul 2022",
      description: "Developed a diverse portfolio of consumer-facing applications in a fast-paced agency setting.Engineered multi-platform applications including a legal services marketplace, a logistics mobile app, and a data scraping service with Elasticsearch. ",
      technologies: ["React", "React Native", "NestJS", "AWS", "Python", "AWS", "Elasticsearch", "Ubuntu", "Linux"],
      current: false
    },
    {
      type: "work",
      title: "Software Engineer ",
      company: "Tek Experts",
      period: "Mar 2017 - Aug 2019",
      description: "Engineered a centralized, full-stack operations dashboard for a large company to monitor real-time daily operations. The application aggregated and visualized complex data from different sources, enabling users to track, monitor,and analyze productivity metrics, and generate financial reports. This project involved building scalable backend services and a responsive frontend to translate industrial data into actionable business intelligence.",
      technologies: ["React", "Typescript", "Nodejs/Express", "NestJs", "Prisma ORM", "Docker", "PostgreSQL"],
      current: false
    },
    {
      type: "work",
      title: "Software Engineer Intern",
      company: "Union Bank",
      period: "Jul 2016 - May 2016",
      description: "Gained foundational experience in enterprise software development by contributing to an internal banking application. On the backend, I assisted in creating Data Transfer Objects (DTOs) and services using Java and Spring Boot to structure API data. For the frontend, I learned React on the job, applying it to build dynamic user interfaces and views that consumed and displayed data from RESTful endpoints, gaining practical insight into full-stack integration within a regulated environment.",
      technologies: ["React", "Frontend Development", "Java", "Spring Boot", "TypeScript", "Backend Development", "Rest APIs", "MySQL", "Git"],
      current: false
    },
    {
      type: "education",
      title: "Bachelor's of Science in Mathematics",
      company: "Lagos State University",
      period: "2011 - 2016",
      description: "Specialized in Linear, Abstract Algebra, Modern statistics and Game Theory.",
      technologies: ["Python", "R", "Algorithms", "Database Design", "Data Analytics"],
      current: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous growth and learning in software development, 
            from academic foundations to professional expertise.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <Card className="md:ml-16 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-primary rounded-lg">
                          {exp.type === 'work' ? (
                            <Briefcase className="h-5 w-5 text-primary-foreground" />
                          ) : (
                            <GraduationCap className="h-5 w-5 text-primary-foreground" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                        {exp.current && (
                          <Badge variant="skill" className="text-xs mt-1">Current</Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}