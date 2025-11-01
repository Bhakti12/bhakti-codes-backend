import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Resume = () => {
  const handleDownload = () => {
    // Actual Google Drive direct download URL
    const driveFileId = "1JYImh1tyRhTKfbHQ5yHCXQ4kJqhtoAva";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

    // Open the file in a new tab to download
    window.open(downloadUrl, "_blank");

    toast({
      title: "Resume Download",
      description: "Your resume download has started successfully.",
    });
  };

  return (
    <section id="resume" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Resume</h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto"></div>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border shadow-card hover:shadow-glow transition-smooth text-center animate-fade-in">
          <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Download My Resume</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get a comprehensive overview of my experience, skills, and achievements in backend development.
          </p>
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV (PDF)
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
