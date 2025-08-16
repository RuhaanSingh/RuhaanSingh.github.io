import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, FileText } from "lucide-react";
import cropHealthImage from "@/assets/crophealth-ai.jpg";
import glaucoGuardImage from "@/assets/glaucoguard.jpg";
import ragChatbotImage from "@/assets/rag-chatbot.jpg";

const Projects = () => {
  const projects = [
    {
      title: "CropHealth AI",
      subtitle: "Portable Machine Learning for Sustainable Farming",
      description: "A portable machine learning platform for early detection of plant stress, disease, and nutrient deficiencies. Combines image classification (PyTorch CNNs) with real-time environmental data through API integration. Features an interactive dashboard for spatial visualization and analytics.",
      image: cropHealthImage,
      technologies: ["PyTorch", "Python", "Computer Vision", "API Integration", "macOS"],
      status: "Paper authored, pending publication",
      organization: "Virginia Tech Institute for Advanced Computing",
      type: "Summer Engineering Internship",
      links: {
        paper: "#"
      }
    },
    {
      title: "GlaucoGuard",
      subtitle: "Early Glaucoma Detection via Computer Vision",
      description: "An AI-driven tool for early, non-invasive diagnosis of glaucoma using computer vision and machine learning to analyze retinal imaging. Integrates CNN architectures with feature engineering to improve sensitivity and specificity for portable ophthalmology tools.",
      image: glaucoGuardImage,
      technologies: ["Computer Vision", "CNN", "Medical AI", "Python", "Image Processing"],
      status: "Prototype system developed; ongoing refinement",
      organization: "Independent Research Project",
      type: "Research",
      links: {
        github: "#"
      }
    },
    {
      title: "RAG Chatbot Optimization",
      subtitle: "TOC-Guided Retrieval for the Air Force",
      description: "Co-authored research improving RAG chatbot efficiency through novel TOC-driven methods: Keyword-First Pre-filtering (54% latency reduction, 87% memory reduction) and TOC Query Routing (32% latency reduction). Implemented with Apache Tika, ChromaDB, and Meta's LLaMA 3.",
      image: ragChatbotImage,
      technologies: ["LLaMA 3", "ChromaDB", "Apache Tika", "RAG", "NLP"],
      status: "Published in GMU Journal of Student Science Research",
      organization: "GMU ASSIP - AI4Gov Division",
      type: "Summer Internship",
      links: {
        paper: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Innovative AI and machine learning projects that tackle real-world challenges 
              in healthcare, agriculture, and technology optimization.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden card-hover bg-card/50 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-between">
                    <div>
                      <CardHeader className="p-0 mb-4">
                        <div className="text-sm text-primary font-medium mb-2">
                          {project.organization}
                        </div>
                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                        <div className="text-lg text-muted-foreground font-medium">
                          {project.subtitle}
                        </div>
                      </CardHeader>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="text-sm text-accent font-medium mb-6">
                        Status: {project.status}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {project.links.github && (
                        <Button variant="outline" size="sm">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                      {project.links.paper && (
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Paper
                        </Button>
                      )}
                      <Button size="sm" className="ml-auto">
                        Learn More
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;