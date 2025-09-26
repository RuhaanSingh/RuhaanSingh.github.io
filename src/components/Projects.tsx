import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, FileText } from "lucide-react";
import cropHealthImage from "@/assets/crophealth-ai.jpg";

const glaucoGuardImage = "/lovable-uploads/37160d22-e23b-4a6c-a490-97113824d979.png";
const ragChatbotImage = "/lovable-uploads/9a6508fd-b402-4b22-be7a-1cbafe778228.png";
const aachooImage = "/lovable-uploads/af8634bb-2ccf-4d04-9a7f-fe2630aedc96.png";
const parkinsonsImage = "/lovable-uploads/24b87b8c-2a82-4a79-8aea-6dbc61d721bb.png";

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
        paper: "https://vt-scienceengineering.blogspot.com/2025/09/crophealth-ai-portable-ml-system-for.html#more"
      }
    },
    {
      title: "GlaucoGuard",
      subtitle: "Early Glaucoma Detection via Computer Vision",
      description: "An AI-driven tool for early, non-invasive diagnosis of glaucoma using computer vision and machine learning to analyze retinal imaging. Integrates CNN architectures with feature engineering to improve sensitivity and specificity for portable ophthalmology tools.",
      image: glaucoGuardImage,
      technologies: ["Computer Vision", "CNN", "Medical AI", "Python", "Image Processing"],
      status: "Live system deployed",
      organization: "Independent Research Project",
      type: "Research",
      links: {
        github: "https://github.com/RuhaanSingh/GlaucoGuard",
        demo: "https://glaucoguard.netlify.app/"
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
        paper: "https://docs.google.com/document/d/1U0RFuI6RLt4gZm6gy3zYEOKHILus_9ajevpYTuGvg3k/edit?tab=t.0#heading=h.f1l8ljw7ngre",
        poster: "https://docs.google.com/presentation/d/1k7BA6qxHX4d1mWpWEwymfJG4C5VapDzHCNm9uUFmdf8/edit?usp=sharing",
        github: "https://github.com/RuhaanSingh/Leveraging-the-Table-of-Contents-to-Improve-Efficiency-in-an-RAG-Powered-Chatbot-",
        publication: "https://journals.gmu.edu/jssr/article/view/5163"
      }
    },
    {
      title: "AACHOO.AI",
      subtitle: "AI-Powered Air Quality Health Platform",
      description: "Developed a web-based AI platform to analyze air quality data and predict potential allergic reactions for travelers based on pollutant levels. The system leveraged geolocation data and real-time air quality metrics to deliver personalized health insights, enhancing user safety during travel.",
      image: aachooImage,
      technologies: ["JavaScript", "AI/ML", "Geolocation", "API Integration", "Health Analytics"],
      status: "Deployed web application",
      organization: "Independent Project",
      type: "Full Stack Development",
      links: {
        github: "https://github.com/RuhaanSingh/AACHOO.AI"
      }
    },
    {
      title: "Parkinson's Disease Early Detection",
      subtitle: "Handwriting & Spiral Test Analysis",
      description: "Developed an AI-driven system utilizing computer vision and kinematic analysis to detect early Parkinson's disease markers through digital assessment of spiral drawings and handwriting patterns. Achieved 91.6% accuracy using a Stacked Ensemble framework with MLP meta-learner.",
      image: parkinsonsImage,
      technologies: ["Computer Vision", "CNN", "SVM", "Random Forest", "Medical AI", "Python"],
      status: "Research completed, 91.6% accuracy achieved",
      organization: "Independent Research Project",
      type: "Medical AI Research",
      links: {
        github: "https://github.com/RuhaanSingh/ParkinsonsPoster"
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

                    <div className="flex gap-3 flex-wrap">
                      {project.links.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.links.paper && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                            <FileText className="h-4 w-4 mr-2" />
                            Paper
                          </a>
                        </Button>
                      )}
                      {project.links.poster && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.links.poster} target="_blank" rel="noopener noreferrer">
                            <FileText className="h-4 w-4 mr-2" />
                            Poster
                          </a>
                        </Button>
                      )}
                      {project.links.publication && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.links.publication} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Publication
                          </a>
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button size="sm" asChild>
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </Button>
                      )}
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