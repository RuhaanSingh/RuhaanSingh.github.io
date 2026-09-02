import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, FileText, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/effects/Magnetic";
import TiltCard from "@/components/effects/TiltCard";
import { staggerContainer, fadeUp } from "@/lib/motion";

const heroImage = "/lovable-uploads/26ba7305-56a5-4c0c-8916-4ec3a23e1068.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent)",
        }}
      />

      <motion.div
        className="container mx-auto px-6 py-20 relative z-10"
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} className="mb-8 flex justify-center">
            <TiltCard className="rounded-full" max={14}>
              <motion.img
                src={heroImage}
                alt="Ruhaan Singh"
                className="w-32 h-32 rounded-full mx-auto border-4 border-primary/20 shadow-2xl"
                style={{ boxShadow: "var(--shadow-glow)" }}
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </TiltCard>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for Opportunities
            </Badge>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Ruhaan Singh</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer & AI Researcher
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Junior at Thomas Jefferson High School for Science and Technology,
            passionate about building innovative solutions that bridge technology and real-world impact.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Magnetic>
              <Button size="lg" className="glow-effect" onClick={() => scrollToSection("projects")}>
                View My Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                Get In Touch
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="secondary" size="lg" asChild>
                <a
                  href="https://drive.google.com/file/d/1eE34CASAzZmTSfcsAFcljDihq2N5WB87/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                  <FileText className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center space-x-6">
            <a
              href="https://github.com/ruhaansingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ruhaan-singh-19200a335/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ruhaansingh101@gmail.com"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
};

export default Hero;
