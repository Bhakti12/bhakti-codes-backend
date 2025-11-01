import { Card } from "@/components/ui/card";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <div className="h-1 w-20 bg-gradient-primary mx-auto mb-8"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          A showcase of backend systems and APIs built with modern technologies
        </p>

        <Card className="p-12 bg-card border-border shadow-card hover:shadow-glow transition-smooth">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3 animate-pulse">
            Coming Soon...
          </h3>
          <p className="text-muted-foreground">
            Exciting backend projects are in progress. Check back soon for live demos and code repositories.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
