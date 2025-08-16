import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, FileText } from "lucide-react";
import heroImage from "@/assets/ruhaan-portrait.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="mb-8 floating-animation">
            <img
              src={heroImage}
              alt="Ruhaan Singh"
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary/20 shadow-2xl"
            />
          </div>

          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Available for Opportunities
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Ruhaan Singh</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer & AI Researcher
          </p>

          <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Junior at Thomas Jefferson High School for Science and Technology, 
            passionate about building innovative solutions that bridge technology and real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="glow-effect"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
              <Mail className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              asChild
            >
              <a href="https://drive.google.com/file/d/1Tpx8YnDSqDA0LXEMRgIghpRDH8WIniqr/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Resume
                <FileText className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ruhaansingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/ruhaan-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ruhaansingh102@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;