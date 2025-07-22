import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Trophy, Target, TrendingUp, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Mathematical Olympiad - Progress Prize 2",
      subtitle: "Kaggle Competition Team Member",
      period: "Feb 2024 – Apr 2025",
      description: "Developing AI solvers that combine large language models (LLMs), symbolic reasoning, and formal proof generation to solve national-level math problems.",
      achievements: [
        "Improved AI solver accuracy by 28% through innovative LLM integration",
        "Built end-to-end ML pipelines integrating symbolic logic and LaTeX parsing",
        "Deployed scalable Python solution using OpenAI API and custom parsing algorithms"
      ],
      technologies: ["Python", "OpenAI API", "LLMs", "Symbolic Logic", "LaTeX", "NumPy"],
      icon: Trophy,
      status: "Ongoing",
      featured: true,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Predictive Modelling for Financial Markets",
      subtitle: "Jane Street Competition - Solo Project",
      period: "Oct 2024 – Jan 2025",
      description: "Built a comprehensive ML pipeline to predict short-term market behavior using historical financial features and time-series data.",
      achievements: [
        "Implemented Gradient Boosting Regressor for fat-tailed distributions",
        "Achieved 17% improvement over competition baseline using weighted R²",
        "Optimized for non-stationary time series challenges in financial data"
      ],
      technologies: ["Python", "pandas", "NumPy", "scikit-learn", "joblib", "Time Series Analysis"],
      icon: TrendingUp,
      status: "Completed",
      featured: true,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Mathematical AI Problem Generator",
      subtitle: "DataAnnotation Project",
      period: "Nov 2023 – Present",
      description: "Large-scale AI training project focused on generating and evaluating mathematical problems for LLM training datasets.",
      achievements: [
        "Designed and refined 1,000+ mathematical problems",
        "Improved model accuracy through structured feedback systems",
        "Enhanced dataset quality through systematic error identification"
      ],
      technologies: ["Python", "LaTeX", "Machine Learning", "Data Annotation", "Quality Assurance"],
      icon: Brain,
      status: "Ongoing",
      featured: false,
      githubUrl: "#"
    },
    {
      title: "Algorithmic Trading Bot",
      subtitle: "Jane Street Electronic Trading Challenge",
      period: "Apr 2024",
      description: "Developed a Python-based trading bot implementing arbitrage strategies and algorithmic trading principles for high-frequency trading simulation.",
      achievements: [
        "Successfully implemented arbitrage detection algorithms",
        "Optimized for low-latency trading decisions",
        "Applied quantitative methods in real-time market simulations"
      ],
      technologies: ["Python", "Algorithmic Trading", "Arbitrage", "Market Making", "OCaml"],
      icon: Target,
      status: "Completed",
      featured: false,
      githubUrl: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ongoing': return 'text-accent';
      case 'Completed': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'Ongoing': return 'bg-accent/10 border-accent/30';
      case 'Completed': return 'bg-primary/10 border-primary/30';
      default: return 'bg-muted/10 border-muted/30';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in artificial intelligence, quantitative finance, and mathematical modeling. 
            Each project demonstrates practical applications of advanced mathematical concepts.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 animate-slideInRight ${
                project.featured ? 'ring-2 ring-primary/20 shadow-[var(--shadow-glow)]' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${project.featured ? 'bg-primary/10' : 'bg-accent/10'}`}>
                      <project.icon className={`h-6 w-6 ${project.featured ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                        <Badge 
                          variant="outline" 
                          className={`${getStatusBg(project.status)} ${getStatusColor(project.status)}`}
                        >
                          {project.status}
                        </Badge>
                        {project.featured && (
                          <Badge className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-2">{project.subtitle}</p>
                      <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-secondary/50 text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;