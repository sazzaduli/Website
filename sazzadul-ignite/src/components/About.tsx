import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Brain, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: GraduationCap, label: "1st Class Honors", value: "Predicted", color: "primary" },
    { icon: Award, label: "AWS Certifications", value: "2+", color: "accent" },
    { icon: Brain, label: "AI Problems Designed", value: "1,000+", color: "primary" },
    { icon: TrendingUp, label: "Student Grade Improvement", value: "90%+", color: "accent" }
  ];

  const skills = {
    "Programming": ["Python", "R", "SQL", "C++", "MATLAB", "JavaScript", "OCaml"],
    "AI/ML Tools": ["TensorFlow", "PyTorch", "OpenAI API", "Apache Spark"],
    "Cloud & DevOps": ["AWS", "Docker", "Git/GitLab", "Linux"],
    "Data & Analytics": ["Power BI", "MongoDB", "Excel", "Flask"]
  };

  const certifications = [
    "AWS AI Practitioner",
    "AWS Machine Learning Associate", 
    "Introduction to Generative AI - Google"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate Mathematics student with a focus on AI and quantitative finance. 
            I combine theoretical mathematical knowledge with practical machine learning applications 
            to solve complex real-world problems.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 animate-slideInRight" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education & Background */}
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Education & Background</h3>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">University of Greenwich</h4>
                  <p className="text-primary font-medium mb-2">B.Sc. in Mathematics</p>
                  <p className="text-muted-foreground mb-4">Expected Graduation: May 2026</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Specializing in Machine Learning, Stochastic Processes, Linear Algebra, and Computational Mathematics
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-foreground">Certifications:</h5>
                    {certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-2 border-primary/30 text-primary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="animate-slideInRight">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={category} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;