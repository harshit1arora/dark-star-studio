import { useState, useEffect } from 'react';
import { Starfield } from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Shield, Sparkles, Heart, ShoppingCart, Zap, Target, Rocket, Users } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
      icon: Heart,
      story: `It started with a simple question: "Could we make healthcare monitoring more accessible?" While researching remote health monitoring, I discovered the fascinating concept of photoplethysmography - detecting blood flow changes through subtle skin color variations. Most solutions required expensive hardware, but I wondered if we could leverage something everyone has: a webcam.

The challenge was immense - extracting a heartbeat signal from noisy video data felt like finding a whisper in a hurricane. I spent weeks diving into signal processing, learning about Fourier transforms, and experimenting with different color spaces. The breakthrough came when I implemented Gaussian pyramids to handle varying light conditions and bandpass filtering to isolate the 0.8-2 Hz frequency range of human heartbeats.

Seeing that first clean heartbeat waveform appear on my screen after weeks of debugging was magical. This project taught me that complex problems often have elegant solutions hidden in the intersection of different domains.`,
      challenge: 'Extracting subtle physiological signals from noisy video data with consumer-grade webcams'
    },
    {
      title: 'WalSpectra - Phantom Inventory Loss Detector',
      description: 'Architected a scalable phantom inventory detection system for Walmart\'s 4,700+ stores worldwide with ₹4,700 crores projected annual impact. Engineered ML-driven hotspot mapping with real-time analytics dashboard and automated recovery mechanisms.',
      achievement: 'Integrated multi-source data pipelines with anomaly detection algorithms',
      tech: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB', 'AWS'],
      icon: ShoppingCart,
      story: `During a retail analytics case study, I stumbled upon a staggering statistic: phantom inventory (items that show in-stock but are physically missing) costs retailers billions annually. The problem resonated with me - it's like a store slowly bleeding without knowing where the cuts are.

I imagined a store manager dealing with frustrated customers who can't find products that the system claims are available. The ripple effect: lost sales, damaged customer trust, and operational inefficiencies. WalSpectra was born from this empathy for both retailers and shoppers.

Building this was like solving a massive puzzle. I had to integrate sales data, inventory logs, supplier information, and even weather patterns (yes, weather affects shopping behavior!). The most rewarding moment was when my anomaly detection algorithm identified a pattern of systematic inventory discrepancies that traditional methods had missed for months.`,
      challenge: 'Identifying invisible inventory gaps across 4,700+ stores with varying data quality and formats'
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Starfield />
      <Navbar />
      
      <div className="relative z-10">
        {/* Hero Section - Balanced sizing */}
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-28 relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Animated gradient orbs */}
          <div 
            className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
            style={{ 
              left: `${mousePosition.x / 20}px`,
              top: `${mousePosition.y / 20}px`,
              transition: 'all 0.5s ease-out'
            }}
          />
          <div 
            className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
            style={{ 
              right: `${mousePosition.x / 30}px`,
              bottom: `${mousePosition.y / 30}px`,
              transition: 'all 0.7s ease-out',
              animationDelay: '1s'
            }}
          />
          
          <div 
            className="text-center max-w-4xl relative z-10"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <div className="mb-8 inline-block" data-aos="fade-down" data-aos-delay="300">
              <Badge variant="outline" className="px-6 py-3 text-base border-primary/50 text-primary animate-pulse-glow backdrop-blur-sm bg-primary/5">
                <Sparkles className="w-4 h-4 inline mr-2" />
                Open to Opportunities
              </Badge>
            </div>
            
            {/* Balanced name font size */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight" data-aos="fade-up" data-aos-delay="400">
              <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                Harshit Arora
              </span>
            </h1>
            
            <p className="text-2xl sm:text-3xl text-foreground mb-8 font-light tracking-wide" data-aos="fade-up" data-aos-delay="500">
              Aspiring Software Developer
            </p>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="600">
              Turning complex problems into elegant solutions through 
              <span className="text-primary font-semibold"> code</span>,
              <span className="text-primary font-semibold"> research</span>, and
              <span className="text-primary font-semibold"> innovation</span>
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center" data-aos="fade-up" data-aos-delay="700">
              <Button 
                size="lg" 
                className="magnetic-button hover-glow group px-8 py-6 text-lg shadow-elegant hover:shadow-intense"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get in Touch
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="magnetic-button hover-glow border-primary/50 px-8 py-6 text-lg backdrop-blur-sm bg-primary/5"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Hire Me Section - General version */}
        <section className="py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold mb-16 text-center" data-aos="fade-up" data-aos-delay="300">
              <span className="gradient-text">Why Hire Me?</span>
            </h2>
            <Card className="glass-card hover-glow shadow-elegant" data-aos="zoom-in" data-aos-delay="400">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Rocket className="w-8 h-8 text-primary" />
                  What I Bring to Your Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-foreground/90">
                <div className="space-y-6">
                  <div className="flex gap-4" data-aos="fade-right" data-aos-delay="500">
                    <Target className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Problem-First Mindset</h3>
                      <p className="leading-relaxed">
                        I don't just write code—I solve problems. Whether it's detecting heart rates through webcam analysis 
                        or identifying phantom inventory losses, I start by deeply understanding the problem space before 
                        architecting solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4" data-aos="fade-left" data-aos-delay="600">
                    <Code2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Full-Stack Versatility</h3>
                      <p className="leading-relaxed">
                        From machine learning with TensorFlow to building React dashboards and deploying on AWS, 
                        I thrive across the entire stack. I'm comfortable jumping between different technologies 
                        and learning what's needed to deliver complete solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4" data-aos="fade-right" data-aos-delay="700">
                    <Users className="w-6 h-6 text-accent-purple shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Collaborative Learner</h3>
                      <p className="leading-relaxed">
                        As an open-source contributor and Google Student Ambassador, I've learned that the best 
                        solutions come from collaboration. I'm quick to adapt, eager to learn from seniors, and 
                        always ready to share knowledge with peers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4" data-aos="fade-left" data-aos-delay="800">
                    <Zap className="w-6 h-6 text-accent-cyan shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Impact-Driven Approach</h3>
                      <p className="leading-relaxed">
                        From correcting errors that impacted 25,000+ students to building systems with crore-level 
                        financial impact, I focus on work that matters. I understand that great code should translate 
                        to real-world value.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6 mt-6" data-aos="fade-up" data-aos-delay="900">
                  <p className="text-lg font-medium text-foreground">
                    I'm looking for a team where I can grow, contribute, and help build solutions that make a difference. 
                    If you value curiosity, craftsmanship, and collaborative problem-solving, let's talk about how I can add value to your organization.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section - Balanced sizing */}
        <section id="about" className="py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold mb-16 text-center" data-aos="fade-up" data-aos-delay="300">
              <span className="gradient-text">About Me</span>
            </h2>
            <Card className="glass-card hover-glow shadow-elegant" data-aos="zoom-in" data-aos-delay="400">
              <CardContent className="pt-6 text-foreground/90 leading-relaxed space-y-4">
                <p data-aos="fade-up" data-aos-delay="500">
                  I'm a computer science student at Vellore Institute of Technology, Bhopal with a passion for solving real-world problems through code. 
                  When I'm not optimizing algorithms or debugging late into the night, I'm diving deep into research-driven projects, like the time I figured 
                  out how to detect heart rates through a webcam by analyzing subtle skin color changes.
                </p>
                <p data-aos="fade-up" data-aos-delay="600">
                  My summer at MathonGo wasn't a typical internship. I reviewed over 2,500 community solutions and meticulously corrected more than 1,000 
                  errors in JEE Chemistry books, directly impacting 25,000+ students preparing for competitive exams. It's the kind of detailed work that requires 
                  both technical precision and genuine care for the end users.
                </p>
                <p data-aos="fade-up" data-aos-delay="700">
                  As an open-source contributor with GirlScript Summer of Code, I've merged pull requests from across the globe, squashed critical bugs, 
                  and built features that actually make a difference, like dynamic ride pricing algorithms that cut response times by 30%. My project portfolio 
                  ranges from real-time heart rate detection to WalSpectra, a phantom inventory system designed to save Walmart billions in lost revenue.
                </p>
                <p data-aos="fade-up" data-aos-delay="800">
                  What sets me apart isn't just my 80+ certificates from Google, Microsoft, and Amazon, or my 250+ solved competitive programming problems—it's 
                  my ability to bridge the gap between complex technical concepts and practical solutions. Whether I'm representing Google as a Student Ambassador 
                  or designing user-centered interfaces in Figma, I approach every challenge with curiosity and a learner's mindset.
                </p>
                <p className="font-medium text-foreground" data-aos="fade-up" data-aos-delay="900">
                  Currently pursuing my B.Tech, I'm always looking for the next problem worth solving.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section - Balanced sizing */}
        <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold mb-16 text-center" data-aos="fade-up" data-aos-delay="300">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <Card className="glass-card shadow-elegant" data-aos="zoom-in" data-aos-delay="400">
              <CardContent className="pt-8">
                <div className="flex flex-wrap gap-4 justify-center">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="skill-badge px-5 py-3 text-base magnetic-button cursor-default bg-secondary/50 border border-primary/20 hover:border-primary hover:bg-primary/10"
                      data-aos="zoom-in"
                      data-aos-delay={500 + index * 30}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section - Balanced sizing */}
        <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold mb-16 text-center" data-aos="fade-up" data-aos-delay="300">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="project-card glass-card hover-glow shadow-elegant group cursor-pointer border-2 border-transparent hover:border-primary/30"
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 150}
                >
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <project.icon className="w-8 h-8 text-primary" />
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-foreground/70 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {/* Project Story */}
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 group-hover:border-primary/20 transition-all duration-300">
                      <h4 className="text-base font-semibold text-primary mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        The Story Behind It
                      </h4>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        {project.story}
                      </p>
                    </div>

                    {/* Main Challenge */}
                    <div className="p-4 bg-accent/5 rounded-lg border border-accent/10">
                      <p className="text-sm text-foreground/90 font-medium">
                        🎯 <span className="font-semibold">Main Challenge:</span> {project.challenge}
                      </p>
                    </div>

                    {/* Achievement */}
                    <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-glow">
                      <p className="text-base text-foreground/90 font-semibold">
                        ✨ {project.achievement}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-primary/50 text-primary hover:bg-primary/10 transition-colors duration-300 px-3 py-1 text-sm"
                        >
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

        {/* Contact Section - Balanced sizing */}
        <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold mb-16" data-aos="fade-up" data-aos-delay="300">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <Card className="glass-card hover-glow shadow-elegant" data-aos="zoom-in" data-aos-delay="400">
              <CardContent className="pt-8 pb-8">
                <p className="text-xl text-foreground/80 mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="500">
                  Always open to discussing new opportunities, collaborations, or just talking tech!
                </p>
                <div className="flex flex-wrap gap-6 justify-center" data-aos="fade-up" data-aos-delay="600">
                  <Button 
                    size="lg" 
                    className="magnetic-button hover-glow group px-8 py-6 text-lg shadow-elegant hover:shadow-intense" 
                    asChild
                  >
                    <a href="mailto:harshitarora1065@gmail.com" className="flex items-center gap-3">
                      <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      Email Me
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="magnetic-button hover-glow border-primary/50 group px-8 py-6 text-lg backdrop-blur-sm bg-primary/5" 
                    asChild
                  >
                    <a href="https://github.com/harshit1arora" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      GitHub
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="magnetic-button hover-glow border-primary/50 group px-8 py-6 text-lg backdrop-blur-sm bg-primary/5" 
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/harshit10arora/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-primary/20 bg-gradient-to-b from-transparent to-primary/5">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground text-lg mb-3">
              © 2025 Harshit Arora. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-base text-primary/80">
              Crafted with precision and passion ✨
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
