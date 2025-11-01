import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // simple stagger container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* blurred bg image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
          opacity: 0.2,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 z-10 text-center"
      >
        {/* shimmer gradient text */}
        <motion.h1
          variants={item}
          className="relative inline-block text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent"
        >
          <span className="animate-gradient-move bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-primary">
            Bhakti Sanghani
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-muted-foreground mb-4"
        >
          Backend Developer · Node.js · TypeScript
        </motion.p>

        <motion.p
          variants={item}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Designing and deploying high-performance backend systems with
          Node.js, Express.js, and optimized SQL / NoSQL architectures.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-primary/50 hover:bg-primary/10"
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="flex gap-6 justify-center mb-4"
        >
          <a
            href="https://github.com/Bhakti12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/bhakti-s-722215216/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:bhaktisanghani2002@gmail.com"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* bouncing chevron */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
