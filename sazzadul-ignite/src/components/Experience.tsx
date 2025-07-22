import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Users, TrendingUp, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Mathematics AI Trainer",
      company: "DataAnnotation",
      location: "London, UK",
      period: "Nov 2023 – Present",
      type: "Full-time",
      description: [
        "Designed, evaluated, and refined 1,000+ AI-generated math and logic problems using Python and LaTeX",
        "Trained and fine-tuned large language models by delivering structured feedback on mathematical reasoning",
        "Collaborated with distributed team to identify dataset inconsistencies, improving data quality and model performance"
      ],
      skills: ["Python", "LaTeX", "LLMs", "Data Quality", "Mathematical Reasoning"],
      icon: Building,
      highlight: true
    },
    {
      title: "Mathematics Tutor",
      company: "Excel Tutor",
      location: "London, UK", 
      period: "Sep 2023 – Jun 2024",
      type: "Part-time",
      description: [
        "Delivered bespoke 1-to-1 and small-group tuition in GCSE and A-Level Mathematics",
        "Achieved 90%+ student grade improvement rate within one academic term",
        "Developed data-driven lesson plans aligned with exam specifications",
        "Improved overall class pass rates by 25% through adaptive teaching methods"
      ],
      skills: ["Teaching", "Curriculum Development", "Data Analysis", "Student Assessment"],
      icon: Users,
      highlight: false
    },
    {
      title: "UK Masterclass, Technology",
      company: "IMC Trading",
      location: "London, UK",
      period: "Oct 2024",
      type: "Workshop",
      description: [
        "Gained hands-on experience solving algorithmic optimization problems in C++/Java",
        "Simulated real-world high-frequency trading systems",
        "Networked with IMC software engineers, gaining insights into HFT architecture and system design"
      ],
      skills: ["C++", "Java", "Algorithmic Trading", "System Design", "HFT"],
      icon: TrendingUp,
      highlight: false
    },
    {
      title: "FTTP (First Year Trading and Technology Program)",
      company: "Jane Street",
      location: "London, UK",
      period: "Apr 2024",
      type: "Program",
      description: [
        "Applied quantitative methods in real-time trading simulations and market-making games",
        "Participated in Estimathon, placing 4th out of 20+ teams (score improved from 38,000 to under 2,000)",
        "Built Python-based trading bot for Electronic Trading Challenge using arbitrage strategies"
      ],
      skills: ["OCaml", "Python", "Quantitative Methods", "Trading Algorithms", "Market Making"],
      icon: Award,
      highlight: true
    },
    {
      title: "Volunteer (Event Coordinator)",
      company: "Darul Arqam Muslim Community Centre",
      location: "London, UK",
      period: "Mar 2023 – Present",
      type: "Volunteer",
      description: [
        "Coordinated monthly youth engagement events and charity fundraisers",
        "Successfully raised over £10,000 in funds for community initiatives",
        "Enhanced digital presence through social media management, increasing engagement by 25%",
        "Handled front-desk administration and communication tasks"
      ],
      skills: ["Event Management", "Fundraising", "Social Media", "Community Engagement"],
      icon: Users,
      highlight: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From AI training to quantitative finance, my diverse experience spans mathematics education, 
            machine learning, and financial technology.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-slideInRight ${
                exp.highlight ? 'ring-2 ring-primary/20 shadow-[var(--shadow-glow)]' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${exp.highlight ? 'bg-primary/10' : 'bg-accent/10'}`}>
                      <exp.icon className={`h-6 w-6 ${exp.highlight ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2 text-foreground">{exp.title}</CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{exp.period}</span>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-secondary/50 text-secondary-foreground"
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
    </section>
  );
};

export default Experience;