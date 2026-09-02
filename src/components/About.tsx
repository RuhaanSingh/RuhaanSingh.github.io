import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, BookOpen, Code } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/effects/Reveal";
import TiltCard from "@/components/effects/TiltCard";
import CountUp from "@/components/effects/CountUp";
import { staggerContainer, scaleIn, fadeUp, viewportOnce } from "@/lib/motion";

const About = () => {
  const stats = [
    { icon: Trophy, label: "Awards Won", value: 15, suffix: "+" },
    { icon: Code, label: "Projects Built", value: 20, suffix: "+" },
    { icon: Users, label: "Leadership Roles", value: 3, suffix: "" },
    { icon: BookOpen, label: "Research Papers", value: 2, suffix: "" },
  ];

  const skillCategories = {
    "CV/Machine Learning": ["Python", "TensorFlow", "OpenCV", "PyTorch", "Jupyter", "MATLAB"],
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Angular", "Flutter"],
    "Backend": ["Node.js", "Python", "MongoDB", "MySQL", "Flask", "Django", "Java"],
    "Mobile": ["Android", "Kotlin", "Android Studio", "Flutter"],
    "Others": ["Git", "GitHub", "R", "RStudio", "VS Code", "Blender", "TypeScript"]
  };

  const apCourses = [
    "AP Computer Science A", "Artificial Intelligence 1&2 AV", "Mobile App Dev AV", "Web App Dev AV",
    "Computer Vision 1&2 AV", "AP Statistics", "AP Macro & Micro Economics", "AP Calculus AB",
    "AP Calculus BC", "AP US History", "AP Government", "AP Language", "AP Physics C ME&M"
  ];

  const academicHonors = [
    "Fairfax County Peace Award - Fairfax County School District",
    "AP Scholar with Distinction - College Board",
    "Outstanding Project Award: TJ Science Fair, advanced to Regional Science Fair",
    "Computer Vision Based early diagnosis of Parkinson Disease - Selected for Invention Virginia Northern Virginia Expo",
    "Biomedical Engineering Innovation Award by VTech",
    "Virginia State Finalist - Inventions Virginia"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate developer and researcher at Thomas Jefferson High School for Science and Technology,
              focused on creating AI-driven solutions that make a real-world impact.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Reveal direction="left">
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
            </Reveal>

            <Reveal direction="right">
              <h3 className="text-2xl font-semibold mb-6">Quick Stats</h3>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div key={index} variants={scaleIn}>
                      <TiltCard max={10}>
                        <Card className="card-hover bg-card/40 backdrop-blur-md border-white/5">
                          <CardContent className="p-6 text-center">
                            <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-primary mb-1">
                              <CountUp value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </CardContent>
                        </Card>
                      </TiltCard>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Reveal>
          </div>

          <div className="space-y-12">
            <div>
              <Reveal>
                <h3 className="text-2xl font-semibold mb-6 text-center">Academic Honors</h3>
              </Reveal>
              <motion.div
                className="grid md:grid-cols-2 gap-3"
                variants={staggerContainer(0.06)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                {academicHonors.map((honor, index) => (
                  <motion.div key={index} variants={fadeUp} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{honor}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <Reveal>
                <h3 className="text-2xl font-semibold mb-6 text-center">Advanced Placement Courses</h3>
              </Reveal>
              <motion.div
                className="flex flex-wrap justify-center gap-2"
                variants={staggerContainer(0.03)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                {apCourses.map((course, index) => (
                  <motion.div key={index} variants={scaleIn}>
                    <Badge
                      variant="secondary"
                      className="text-xs py-1 px-3 transition-colors hover:bg-primary/20 hover:text-primary"
                    >
                      {course}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <Reveal>
                <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
              </Reveal>
              <div className="space-y-6">
                {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
                  <Reveal key={categoryIndex} delay={categoryIndex * 0.05} className="text-center">
                    <h4 className="text-lg font-medium text-primary mb-3">{category}</h4>
                    <motion.div
                      className="flex flex-wrap justify-center gap-2"
                      variants={staggerContainer(0.03)}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewportOnce}
                    >
                      {skills.map((skill, skillIndex) => (
                        <motion.div key={skillIndex} variants={scaleIn}>
                          <Badge
                            variant="outline"
                            className="text-sm py-1 px-3 transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
