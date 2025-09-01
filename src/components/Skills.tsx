import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Vue.js", "Next.js", "Tailwind CSS", "SCSS", "Redux", "Recoil"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Nest.js", "Express.js", "Java", "Spring Boot", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase", "Supabase"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "AWS", "Git", "Linux", "Nginx", "Postman"]
    },
    {
      category: "Mobile & Others",
      skills: ["React Native", "ionic", "PWA", "WebSockets", "Microservices", "Agile", "TDD", "CI/CD"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in modern web development.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="skill"
                    className="text-sm py-2 px-4 transition-smooth hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Always exploring new technologies and frameworks to stay at the forefront of web development. 
            Currently diving deeper into system architecture and advanced Java enterprise patterns.
          </p>
        </div>
      </div>
    </section>
  );
}