import { Card } from "@/components/ui/card";
import { Code2, Database, Server } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Migration",
      description: "Successfully migrated legacy systems from PHP (CodeIgniter) to modern Node.js architecture"
    },
    {
      icon: Database,
      title: "Database Integration",
      description: "Expertise in MySQL, PostgreSQL, and MongoDB with optimized query performance"
    },
    {
      icon: Server,
      title: "Scalable APIs",
      description: "Built RESTful APIs serving thousands of requests with robust logging and monitoring"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="animate-slide-in">
            <Card className="p-8 bg-card border-border shadow-card hover:shadow-glow transition-smooth h-full">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Backend developer with 2.10 years of hands-on experience in designing and implementing 
                scalable server-side applications. Specialized in Node.js ecosystem with a strong foundation 
                in multiple database systems and modern development practices.
              </p>
            </Card>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: "0.1s" }}>
            <Card className="p-8 bg-card border-border shadow-card hover:shadow-glow transition-smooth h-full">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Experience Highlights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Led backend migration from PHP to Node.js, improving system performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Implemented centralized logging with Dynatrace and Grail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  <span>Integrated AWS CloudWatch for comprehensive system monitoring</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-smooth hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
