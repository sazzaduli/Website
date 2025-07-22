import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Sazzaduli16@gmail.com",
      href: "mailto:Sazzaduli16@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 7308631346",
      href: "tel:+447308631346",
      color: "accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/sazzadul-islam",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/sazzadul-islam",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, collaborations, or innovative projects 
            in AI, mathematics, and quantitative finance. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fadeInUp">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 cursor-pointer group"
                    onClick={() => window.open(info.href, '_blank')}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${info.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className={`h-6 w-6 ${info.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">{info.label}</h4>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {info.value}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Location */}
            <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">London, United Kingdom</p>
                    <p className="text-sm text-muted-foreground mt-1">Available for remote work worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slideInRight">
            <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Have a question or want to work together? I'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your full name"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?"
                    className="bg-background/50 border-border/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="bg-background/50 border-border/50 resize-none"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your message will be sent directly to my email. I typically respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to collaborate on innovative projects?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're looking for AI expertise, mathematical modeling, or quantitative analysis, 
            I'm excited to discuss how we can work together to solve complex challenges.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              onClick={() => window.open('mailto:Sazzaduli16@gmail.com', '_blank')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={() => window.open('https://linkedin.com/in/sazzadul-islam', '_blank')}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;