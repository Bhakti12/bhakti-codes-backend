import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Legacy System Migration",
      description: "Led the migration of a monolithic PHP (CodeIgniter) application to a modern Node.js microservices architecture, improving system performance by 40% and reducing deployment time.",
      tech: ["Node.js", "Express.js", "MySQL", "TypeScript"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Scalable RESTful API Platform",
      description: "Designed and developed a comprehensive RESTful API serving 10,000+ daily requests with JWT authentication, rate limiting, and comprehensive error handling.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "Jest"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      title: "Multi-Database Integration System",
      description: "Built a unified backend service integrating MySQL, PostgreSQL, and MongoDB, implementing database abstraction layer and optimized query patterns.",
      tech: ["Node.js", "MySQL", "PostgreSQL", "MongoDB"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Centralized Logging Infrastructure",
      description: "Implemented comprehensive logging system using Dynatrace and Grail, integrating AWS CloudWatch for real-time monitoring and alerting across distributed services.",
      tech: ["Node.js", "Dynatrace", "AWS CloudWatch", "Grail"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Authentication & Authorization Service",
      description: "Developed a secure authentication microservice with role-based access control, session management, and OAuth2.0 integration for third-party providers.",
      tech: ["Node.js", "Express.js", "JWT", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      title: "Data Processing Pipeline",
      description: "Created an automated data processing pipeline handling large-scale ETL operations with error recovery, data validation, and comprehensive testing suite.",
      tech: ["Node.js", "TypeScript", "MongoDB", "Jest"],
      github: "https://github.com",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of backend systems and APIs built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex}
                    variant="outline"
                    className="text-xs border-primary/30"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10 transition-smooth"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
