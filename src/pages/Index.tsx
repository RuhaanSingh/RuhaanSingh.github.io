import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParallaxBlobs from "@/components/effects/ParallaxBlobs";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollProgress from "@/components/effects/ScrollProgress";
import NoiseOverlay from "@/components/effects/NoiseOverlay";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParallaxBlobs />
      <NoiseOverlay />
      <CursorGlow />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
