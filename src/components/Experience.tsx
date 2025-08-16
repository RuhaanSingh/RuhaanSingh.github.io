import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "AI Research Intern (Co-Author)",
      organization: "GMU ASSIP – AI4Gov, Air Force CyberWorx",
      period: "Summer 2024",
      location: "George Mason University",
      type: "Academic Research",
      description: "Co-authored pending publication on TOC-driven RAG chatbot optimization for Air Force policy search; reduced latency 54%, memory use 87%. 15 hours/week for 8 weeks.",
      achievements: [
        "54% latency reduction achieved",
        "87% memory usage reduction",
        "Pending publication co-authored"
      ],
      icon: Award
    },
    {
      role: "ML Research Intern (Author)",
      organization: "Virginia Tech – Institute for Advanced Computing",
      period: "Summer 2024",
      location: "Virginia Tech",
      type: "Academic Research",
      description: "Authored pending publication on CropHealth AI, a portable ML system integrating vision + geospatial data for early plant disease detection. 15 hours/week for 8 weeks.",
      achievements: [
        "Authored pending research publication",
        "Developed portable ML system",
        "Integrated vision and geospatial data"
      ],
      icon: Award
    },
    {
      role: "Cancer Research Intern",
      organization: "Johns Hopkins School of Medicine",
      period: "Summer 2024",
      location: "Johns Hopkins",
      type: "Academic Research",
      description: "Conducted PCR and DNA methylation assays; analyzed biomarker data to support cancer diagnostics research in NABi oncology lab. 15 hours/week for 6 weeks.",
      achievements: [
        "Conducted PCR and DNA methylation assays",
        "Analyzed biomarker data",
        "Supported cancer diagnostics research"
      ],
      icon: Award
    },
    {
      role: "Competitive Dancer & Instructor",
      organization: "Virginia School of Bhangra",
      period: "2021 - Present",
      location: "Virginia",
      type: "Arts & Performance",
      description: "Won 3rd at 2023 & 2025, 2nd at 2024 international competitions; toured in 3 countries; instructed 20+ juniors weekly; performed with celebrity singers. 15 hours/week year-round.",
      achievements: [
        "Multiple international competition placements",
        "Toured in 3 countries",
        "Instructed 20+ junior dancers weekly"
      ],
      icon: Users
    },
    {
      role: "President & Choreographer",
      organization: "TJ Namaste Club",
      period: "2021 - Present",
      location: "TJHSST",
      type: "Cultural Leadership",
      description: "Led largest school event (2K attendees); raised $5K annually; managed 400+ participants; earned FCPS Peace Award for cultural bridge-building. 15 hours/week during school year.",
      achievements: [
        "FCPS Peace Award recipient",
        "Led events with 2K+ attendees",
        "Raised $5K annually for club activities"
      ],
      icon: Users
    },
    {
      role: "VP of Technology",
      organization: "TJ Mobile Apps Development Club",
      period: "2021 - Present",
      location: "TJHSST",
      type: "Technical Leadership",
      description: "Taught mobile/web dev to 30+ peers weekly; led community app projects; coded Android tuning app for Indian instruments. 4 hours/week during school year.",
      achievements: [
        "Taught 30+ students weekly",
        "Led community app development projects",
        "Developed Android tuning application"
      ],
      icon: Users
    },
    {
      role: "Volunteer STEM Instructor",
      organization: "Human Hope Foundation & Robotics Camps",
      period: "2021 - 2024",
      location: "Various Locations",
      type: "STEM Outreach",
      description: "Taught Python, robotics, and engineering to 350+ underserved youth; co-created hands-on curricula for rockets, AI, and web dev. 15 hours/week during breaks.",
      achievements: [
        "Taught 350+ underserved students",
        "Co-created STEM curricula",
        "Covered Python, robotics, and AI"
      ],
      icon: Users
    },
    {
      role: "Conference Director",
      organization: "TJ Model UN Club",
      period: "2021 - Present",
      location: "TJHSST & Conferences",
      type: "Academic Competition",
      description: "Directed 400-delegate conference; mentored novices; won 10+ awards (2× Best Delegate) at Ivy League & national-level competitions. 6 hours/week during school year.",
      achievements: [
        "Directed 400-delegate conference",
        "Won 10+ competition awards",
        "2× Best Delegate at major conferences"
      ],
      icon: Award
    },
    {
      role: "Project Lead – Computer Vision",
      organization: "TJ Computer Vision Club",
      period: "2022 - 2024",
      location: "TJHSST",
      type: "Academic Project",
      description: "Led ASL-to-text recognition project (88% accuracy); used CNN + LSTM; improved generalization 23% via custom augmentation pipeline. 3 hours/week during school year.",
      achievements: [
        "88% accuracy in ASL recognition",
        "23% improvement in generalization",
        "Implemented CNN + LSTM architecture"
      ],
      icon: Users
    },
    {
      role: "Developer & Researcher",
      organization: "Independent Projects",
      period: "2021 - Present",
      location: "Independent",
      type: "Research & Development",
      description: "Built AACHOO.ai (air quality health app), GlaucoGuard (early glaucoma detection), and AI Parkinson's detection (91.6% accuracy). 4 hours/week year-round.",
      achievements: [
        "91.6% accuracy in Parkinson's detection",
        "Developed multiple health AI applications",
        "Created air quality prediction platform"
      ],
      icon: Award
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leadership & <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Active involvement in school organizations, cultural leadership, 
              and competitive academic activities that shape my collaborative and leadership skills.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{exp.role}</CardTitle>
                          <div className="text-lg text-primary font-medium">
                            {exp.organization}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="font-medium mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;