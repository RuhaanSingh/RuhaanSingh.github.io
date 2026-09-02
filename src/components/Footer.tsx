import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/effects/Reveal";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="text-lg font-bold gradient-text mb-2">Ruhaan Singh</div>
              <p className="text-sm text-muted-foreground">
                Building the future through AI and innovation
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/ruhaansingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ruhaan-singh-19200a335/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ruhaansingh101@gmail.com"
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Ruhaan Singh. Built with passion and innovation.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
