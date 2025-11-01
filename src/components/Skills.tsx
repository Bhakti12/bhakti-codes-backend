import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "TypeScript", "JavaScript", "Python", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Testing",
      skills: ["Jest", "EJS", "Git", "npm/yarn", "Swagger", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building robust and scalable backend systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border shadow-card hover:shadow-glow transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary transition-smooth border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
