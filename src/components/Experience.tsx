import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Activities Coordinator",
      organization: "TJ Namaste",
      period: "2023 - Present",
      location: "TJHSST",
      type: "Leadership",
      description: "Officer for TJHSST's Indian culture and dance club, organizing weekly meetings and teaching Indian dance. Help organize INite, an event featuring cultural performances for 1000+ attendees. Earned the 2024 FCPS Peace Award for building community through cultural understanding.",
      achievements: [
        "2024 FCPS Peace Award recipient",
        "Organized events for 1000+ attendees",
        "Led weekly cultural education sessions"
      ],
      icon: Users
    },
    {
      role: "VP of Technology",
      organization: "TJ Mobile Apps Development Club",
      period: "2023 - Present",
      location: "TJHSST",
      type: "Technical Leadership",
      description: "Responsible for planning and executing hackathon events, designing club merchandise, and developing the club's website. Lead technical initiatives and mentor fellow students in mobile app development.",
      achievements: [
        "Planned major hackathon events",
        "Designed and developed club website",
        "Created club merchandise and branding"
      ],
      icon: Users
    },
    {
      role: "Award-Winning Delegate & Judge",
      organization: "TJ Model United Nations",
      period: "2022 - Present",
      location: "Various Conferences",
      type: "Competition",
      description: "Award-winning Model UN delegate and experienced judge. Judged at TECHMUN 2023 & 2024. Won awards at prestigious conferences including ILMUNC, WMHSMUN, NAIMUN, VIMUNC, MCMUNC, and CHMUN.",
      achievements: [
        "Judge at TECHMUN 2023 & 2024",
        "Awards at 6+ major conferences",
        "Leadership in diplomatic simulation"
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