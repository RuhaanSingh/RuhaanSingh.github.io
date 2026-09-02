import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/1eE34CASAzZmTSfcsAFcljDihq2N5WB87/view?usp=sharing";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "py-3" : "py-5")}>
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-2 transition-all duration-500",
            isScrolled
              ? "bg-background/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              : "bg-transparent border border-transparent"
          )}
        >
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold gradient-text transition-transform hover:scale-105"
          >
            RS
          </button>

          <div className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  active === s.id ? "text-primary" : "text-foreground/70 hover:text-foreground"
                )}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{s.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:inline-flex" asChild>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden mt-2 rounded-2xl bg-background/80 backdrop-blur-xl border border-white/10"
            >
              <div className="flex flex-col p-4 gap-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={cn(
                      "text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      active === s.id ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-white/5"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-center px-4 py-3 rounded-xl text-sm font-medium bg-primary/10 text-primary"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
