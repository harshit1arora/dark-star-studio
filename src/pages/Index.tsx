import { useState, useEffect } from 'react';
import { Starfield } from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Shield } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    'C++', 'Java', 'Python', 'JavaScript', 'HTML/CSS', 'SQL',
    'TensorFlow', 'OpenCV', 'React', 'Node.js', 'MongoDB',
    'AWS', 'Google Cloud', 'Git', 'Figma', 'Adobe XD',
    'REST API', 'Machine Learning', 'UI/UX Design'
  ];

  const projects = [
    {
      title: 'Real-Time Heart Rate Detection using Webcam',
      description: 'Developed a research-driven real-time application to estimate heart rate by detecting and amplifying subtle skin color changes through video analysis. Utilized Gaussian pyramids and Fourier transforms for advanced signal processing with bandpass filtering to isolate relevant frequency ranges.',
      achievement: 'Achieved efficient face detection and processed video streams at 15 FPS with optimized performance',
      tech: ['Python', 'OpenCV', 'NumPy', 'cvzone'],
    },
    {
      title: 'WalSpectra - Phantom Inventory Loss Detector',
      description: 'Architected a scalable phantom inventory detection system for Walmart\'s 4,700+ stores worldwide with ₹4,700 crores projected annual impact. Engineered ML-driven hotspot mapping with real-time analytics dashboard and automated recovery mechanisms.',
      achievement: 'Integrated multi-source data pipelines with anomaly detection algorithms',
      tech: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB', 'AWS'],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Starfield />
      <Navbar />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
          <div 
            className="text-center max-w-4xl animate-fade-in"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <div className="mb-6 inline-block">
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary/50 text-primary animate-pulse-glow">
                Open to Opportunities
              </Badge>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-float">
              Harshit Arora
            </h1>
            <p className="text-2xl sm:text-3xl text-muted-foreground mb-8">
              Aspiring Software Developer
            </p>
            <p className="text-lg sm:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Turning complex problems into elegant solutions through code, research, and innovation
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="hover-glow group">
                <a href="#contact" className="flex items-center gap-2">
                  Get in Touch
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="hover-glow border-primary/50">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Rubrik Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
              Why Rubrik?
            </h2>
            <Card className="glass-card hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  Perfect Alignment with Rubrik's Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-foreground/90">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Database className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Data-Centric Problem Solver</h3>
                      <p className="leading-relaxed">
                        My WalSpectra project directly addresses phantom inventory challenges at enterprise scale—processing multi-source data pipelines, 
                        detecting anomalies, and building recovery mechanisms. This experience translates perfectly to Rubrik's data security and management challenges, 
                        where protecting and optimizing data across hybrid environments is mission-critical.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Code2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Full-Stack Innovation</h3>
                      <p className="leading-relaxed">
                        From ML-driven analytics to React dashboards and AWS deployments, I've built end-to-end solutions that mirror Rubrik's comprehensive 
                        approach to data protection. My experience with cloud platforms (AWS, Google Cloud), databases (MongoDB, SQL), and modern frameworks 
                        positions me to contribute across Rubrik's technology stack immediately.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <ExternalLink className="w-6 h-6 text-accent-purple shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Research-Driven Mindset</h3>
                      <p className="leading-relaxed">
                        Whether it's detecting heart rates through webcam analysis or optimizing competitive programming solutions (250+ problems solved), 
                        I approach every challenge with curiosity and precision. This research-oriented approach aligns with Rubrik's commitment to solving 
                        complex data resilience problems through innovative technology, not quick fixes.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-accent-cyan shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Impact at Scale</h3>
                      <p className="leading-relaxed">
                        My MathonGo internship impacted 25,000+ students through meticulous error correction work—demonstrating my ability to deliver 
                        quality at scale while maintaining attention to detail. At Rubrik, this translates to building reliable data protection solutions 
                        that thousands of enterprises can trust with their most critical assets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6 mt-6">
                  <p className="text-lg font-medium text-foreground">
                    I'm not just looking for a job—I'm seeking a team where I can apply my technical skills, research mindset, and passion for solving 
                    real-world problems to help organizations secure and optimize their most valuable asset: their data. Rubrik's mission resonates with 
                    my drive to build solutions that matter.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
              About Me
            </h2>
            <Card className="glass-card hover-glow">
              <CardContent className="pt-6 text-foreground/90 leading-relaxed space-y-4">
                <p>
                  Harshit is a computer science student at Vellore Institute of Technology, Bhopal with a passion for solving real-world problems through code. 
                  When he's not optimizing algorithms or debugging late into the night, he's diving deep into research-driven projects, like the time he figured 
                  out how to detect heart rates through a webcam by analyzing subtle skin color changes.
                </p>
                <p>
                  His summer at MathonGo wasn't a typical internship. Harshit reviewed over 2,500 community solutions and meticulously corrected more than 1,000 
                  errors in JEE Chemistry books, directly impacting 25,000+ students preparing for competitive exams. It's the kind of detailed work that requires 
                  both technical precision and genuine care for the end users.
                </p>
                <p>
                  As an open-source contributor with GirlScript Summer of Code, Harshit has merged pull requests from across the globe, squashed critical bugs, 
                  and built features that actually make a difference, like dynamic ride pricing algorithms that cut response times by 30%. His project portfolio 
                  ranges from real-time heart rate detection to WalSpectra, a phantom inventory system designed to save Walmart billions in lost revenue.
                </p>
                <p>
                  What sets Harshit apart isn't just his 80+ certificates from Google, Microsoft, and Amazon, or his 250+ solved competitive programming problems—it's 
                  his ability to bridge the gap between complex technical concepts and practical solutions. Whether he's representing Google as a Student Ambassador 
                  or designing user-centered interfaces in Figma, he approaches every challenge with curiosity and a learner's mindset.
                </p>
                <p className="font-medium text-foreground">
                  Currently grinding through his B.Tech, Harshit is always looking for the next problem worth solving.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
              Technical Arsenal
            </h2>
            <Card className="glass-card">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm hover-glow cursor-default bg-secondary/50 border border-primary/20"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="glass-card hover-glow"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-foreground/70 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="text-sm text-foreground/80 font-medium">
                        {project.achievement}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent/50 text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 gradient-text">
              Let's Connect
            </h2>
            <Card className="glass-card hover-glow">
              <CardContent className="pt-6">
                <p className="text-lg text-foreground/80 mb-8">
                  Always open to discussing new opportunities, collaborations, or just talking tech!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="hover-glow group" asChild>
                    <a href="mailto:harshitarora1065@gmail.com" className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Email Me
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="hover-glow border-primary/50 group" asChild>
                    <a href="https://github.com/harshit1arora" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="hover-glow border-primary/50 group" asChild>
                    <a href="https://www.linkedin.com/in/harshit10arora/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2025 Harshit Arora. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Crafted with precision and passion ✨
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
