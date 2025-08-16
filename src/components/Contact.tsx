import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ExternalLink, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ruhaan@example.com",
      href: "mailto:ruhaan@example.com",
      primary: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ruhaansingh",
      href: "https://github.com/ruhaansingh"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ruhaan-singh",
      href: "https://linkedin.com/in/ruhaan-singh"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborations, 
              or interesting projects. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-in-left">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-4">
                        <a
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group"
                        >
                          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium flex items-center gap-2">
                              {method.label}
                              {method.primary && (
                                <Badge className="text-xs">Primary</Badge>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                              {method.value}
                            </div>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-medium mb-2">Current Status</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  I'm currently open to summer internship opportunities and research collaborations 
                  in AI, machine learning, and software development.
                </p>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Available for Opportunities
                </Badge>
              </div>
            </div>

            <div className="slide-in-right">
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="Let's collaborate!" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full glow-effect">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;