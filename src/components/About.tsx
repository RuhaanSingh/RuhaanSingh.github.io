import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, BookOpen, Code } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Trophy, label: "Awards Won", value: "15+" },
    { icon: Code, label: "Projects Built", value: "20+" },
    { icon: Users, label: "Leadership Roles", value: "3" },
    { icon: BookOpen, label: "Research Papers", value: "2" },
  ];

  const skills = [
    "Python", "JavaScript", "TypeScript", "React", "Next.js",
    "PyTorch", "TensorFlow", "Node.js", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "Git", "Machine Learning", "Computer Vision"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate developer and researcher at Thomas Jefferson High School for Science and Technology, 
              focused on creating AI-driven solutions that make a real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="slide-in-left">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Currently a junior at TJHSST, I've been immersed in the world of technology 
                  and innovation from an early age. My passion lies at the intersection of 
                  artificial intelligence and practical applications that can solve real-world problems.
                </p>
                <p>
                  From developing AI systems for agricultural sustainability to creating 
                  medical diagnostic tools, I believe in technology's power to create 
                  positive change. My research has been published and I continue to 
                  explore new frontiers in machine learning and computer vision.
                </p>
                <p>
                  Beyond coding, I'm actively involved in leadership roles at school, 
                  organizing cultural events, leading hackathons, and mentoring fellow students 
                  in technology and programming.
                </p>
              </div>
            </div>

            <div className="slide-in-right">
              <h3 className="text-2xl font-semibold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-6 text-center">
                        <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;