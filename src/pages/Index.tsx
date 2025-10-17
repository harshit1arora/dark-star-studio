import { useState, useEffect } from 'react';
import { Starfield } from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Shield, Sparkles, Heart, ShoppingCart, Zap } from 'lucide-react';

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
        {/* Hero Section - Enhanced with larger text and better spacing */}
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative overflow-hidden"
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
            className="text-center max-w-6xl relative z-10"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <div className="mb-12 inline-block" data-aos="fade-down" data-aos-delay="300">
              <Badge variant="outline" className="px-8 py-4 text-lg border-primary/50 text-primary animate-pulse-glow backdrop-blur-sm bg-primary/5">
                <Sparkles className="w-5 h-5 inline mr-3" />
                Open to Software Engineering Opportunities
              </Badge>
            </div>
            
            {/* Larger name font size */}
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black mb-10 tracking-tight" data-aos="fade-up" data-aos-delay="400">
              <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                Harshit
              </span>
              <br />
              <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300 cursor-default mt-2">
                Arora
              </span>
            </h1>
            
            <p className="text-4xl sm:text-5xl text-foreground mb-12 font-light tracking-wide" data-aos="fade-up" data-aos-delay="500">
              Software Engineer & Problem Solver
            </p>
            
            <p className="text-2xl sm:text-3xl text-muted-foreground mb-20 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="600">
              Transforming complex challenges into 
              <span className="text-primary font-semibold"> elegant solutions</span> through code, 
              <span className="text-primary font-semibold"> research</span>, and 
              <span className="text-primary font-semibold"> innovation</span>
            </p>
            
            <div className="flex flex-wrap gap-8 justify-center" data-aos="fade-up" data-aos-delay="700">
              <Button 
                size="lg" 
                className="magnetic-button hover-glow group px-10 py-7 text-xl shadow-elegant hover:shadow-intense"
                asChild
              >
                <a href="#contact" className="flex items-center gap-3">
                  Start Conversation
                  <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="magnetic-button hover-glow border-primary/50 px-10 py-7 text-xl backdrop-blur-sm bg-primary/5"
                asChild
              >
                <a href="#projects">Explore My Work</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Rubrik Section - Increased spacing */}
        <section className="py-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-6xl font-bold mb-20 text-center" data-aos="fade-up" data-aos-delay="300">
              <span className="gradient-text">Why Rubrik?</span>
            </h2>
            <Card className="glass-card hover-glow shadow-elegant" data-aos="zoom-in" data-aos-delay="400">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl flex items-center gap-4">
                  <Shield className="w-10 h-10 text-primary" />
                  Perfect Alignment with Rubrik's Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 text-foreground/90 text-lg">
                <div className="space-y-8">
                  <div className="flex gap-6" data-aos="fade-right" data-aos-delay="500">
                    <Database className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">Data-Centric Problem Solver</h3>
                      <p className="leading-relaxed">
                        My WalSpectra project directly addresses phantom inventory challenges at enterprise scale—processing multi-source data pipelines, 
                        detecting anomalies, and building recovery mechanisms. This experience translates perfectly to Rubrik's data security and management challenges, 
                        where protecting and optimizing data across hybrid environments is mission-critical.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6" data-aos="fade-left" data-aos-delay="600">
                    <Code2 className="w-8 h-8 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">Full-Stack Innovation</h3>
                      <p className="leading-relaxed">
                        From ML-driven analytics to React dashboards and AWS deployments, I've built end-to-end solutions that mirror Rubrik's comprehensive 
                        approach to data protection. My experience with cloud platforms (AWS, Google Cloud), databases (MongoDB, SQL), and modern frameworks 
                        positions me to contribute across Rubrik's technology stack immediately.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6" data-aos="fade-right" data-aos-delay="700">
                    <Zap className="w-8 h-8 text-accent-purple shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">Research-Driven Mindset</h3>
                      <p className="leading-relaxed">
                        Whether it's detecting heart rates through webcam analysis or optimizing competitive programming solutions (250+ problems solved), 
                        I approach every challenge with curiosity and precision. This research-oriented approach aligns with Rubrik's commitment to solving 
                        complex data resilience problems through innovative technology, not quick fixes.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6" data-aos="fade-left" data-aos-delay="800">
                    <Shield className="w-8 h-8 text-accent-cyan shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">Impact at Scale</h3>
                      <p className="leading-relaxed">
                        My MathonGo internship impacted 25,000+ students through meticulous error correction work—demonstrating my ability to deliver 
                        quality at scale while maintaining attention to detail. At Rubrik, this translates to building reliable data protection solutions 
                        that thousands of enterprises can trust with their most critical assets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8 mt-8" data-aos="fade-up" data-aos-delay="900">
                  <p className="text-xl font-medium text-foreground leading-relaxed">
                    I'm not just looking for a job—I'm seeking a team where I can apply my technical skills, research mindset, and passion for solving 
                    real-world problems to help organizations secure and optimize their most valuable asset: their data. Rubrik's mission resonates with 
                    my drive to build solutions that matter.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section - Enhanced spacing */}
        <section id="about" className="py-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-6xl font-bold mb-20 text-center" data-aos="fade-up" data-aos-delay="300">
              <span className="gradient-text">My Journey</span>
            </h2>
            <Card className="glass-card hover-glow shadow-elegant" data-aos="zoom-in" data-aos-delay="400">
              <CardContent className="pt-8 text-foreground/90 leading-relaxed space-y-6 text-lg">
                <p data-aos="fade-up" data-aos-delay="500">
                  Harshit is a computer science student at Vellore Institute of Technology, Bhopal with a passion for solving real-world problems through code. 
                  When he's not optimizing algorithms or debugging late into the night, he's diving deep into research-driven projects, like the time he figured 
                  out how to detect heart rates through a webcam by analyzing subtle skin color changes.
                </p>
                <p data-aos="fade-up" data-aos-delay="600">
                  His summer at MathonGo wasn't a typical internship. Harshit reviewed over 2,500 community solutions and meticulously corrected more than 1,000 
                  errors in JEE Chemistry books, directly impacting 25,000+ students preparing for competitive exams. It's the kind of detailed work that requires 
                  both technical precision and genuine care for the end users.
                </p>
                <p data-aos="fade-up" data-aos-delay="700">
                  As an open-source contributor with GirlScript Summer of Code, Harshit has merged pull requests from across the globe, squashed critical bugs, 
                  and built features that actually make a difference, like dynamic ride pricing algorithms that cut response times by 30%. His project portfolio 
                  ranges from real-time heart rate detection to WalSpectra, a phantom inventory system designed to save Walmart billions in lost revenue.
                </p>
                <p data-aos="fade-up" data-aos-delay="800">
                  What sets Harshit apart isn't just his 80+ certificates from Google, Microsoft, and Amazon, or his 250+ solved competitive programming problems—it's 
                  his ability to bridge the gap between complex technical concepts and practical solutions. Whether he's representing Google as a Student Ambassador 
                  or designing user-centered interfaces in Figma, he approaches every challenge with curiosity and a learner's mindset.
                </p>
                <p className="font-medium text-foreground text-xl mt-8" data-aos="fade-up" data-aos-delay="900">
                  Currently grinding through his B.Tech, Harshit is always looking for the next problem worth solving.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section - Enhanced spacing */}
        <section id="skills" className="py-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-6xl font-bold mb-20 text-center" data-aos="fade-up" data-aos-delay="300">
              <span className="gradient-text">Technical Arsenal</span>
            </h2>
            <Card className="glass-card shadow-elegant" data-aos="zoom-in" data-aos-delay="400">
              <CardContent className="pt-10">
                <div className="flex flex-wrap gap-5 justify-center">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="skill-badge px-6 py-4 text-lg magnetic-button cursor-default bg-secondary/50 border border-primary/20 hover:border-primary hover:bg-primary/10"
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

        {/* Projects Section - Enhanced with stories */}
        <section id="projects" className="py-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-6xl font-bold mb-20 text-center" data-aos="fade-up" data-aos-delay="300">
              <span className="gradient-text">Projects with Purpose</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="project-card glass-card hover-glow shadow-elegant group cursor-pointer border-2 border-transparent hover:border-primary/30"
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 150}
                >
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <project.icon className="w-10 h-10 text-primary" />
                      <CardTitle className="text-3xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-foreground/70 leading-relaxed text-lg">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Project Story */}
                    <div className="p-6 bg-primary/5 rounded-xl border border-primary/10 group-hover:border-primary/20 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        The Story Behind It
                      </h4>
                      <p className="text-foreground/80 text-base leading-relaxed">
                        {project.story}
                      </p>
                    </div>

                    {/* Main Challenge */}
                    <div className="p-5 bg-accent/5 rounded-lg border border-accent/10">
                      <p className="text-sm text-foreground/90 font-medium">
                        🎯 <span className="font-semibold">Main Challenge:</span> {project.challenge}
                      </p>
                    </div>

                    {/* Achievement */}
                    <div className="p-5 bg-primary/10 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-glow">
                      <p className="text-lg text-foreground/90 font-semibold">
                        ✨ {project.achievement}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-primary/50 text-primary hover:bg-primary/10 transition-colors duration-300 px-4 py-2 text-sm"
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

        {/* Contact Section - Enhanced spacing */}
        <section id="contact" className="py-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-6xl font-bold mb-20" data-aos="fade-up" data-aos-delay="300">
              <span className="gradient-text">Let's Build Together</span>
            </h2>
            <Card className="glass-card hover-glow shadow-elegant" data-aos="zoom-in" data-aos-delay="400">
              <CardContent className="pt-12 pb-10">
                <p className="text-2xl text-foreground/80 mb-16 leading-relaxed" data-aos="fade-up" data-aos-delay="500">
                  Always open to discussing new opportunities, collaborations, or just talking tech!
                  <br />
                  <span className="text-primary font-semibold">Let's create something amazing together.</span>
                </p>
                <div className="flex flex-wrap gap-8 justify-center" data-aos="fade-up" data-aos-delay="600">
                  <Button 
                    size="lg" 
                    className="magnetic-button hover-glow group px-12 py-8 text-xl shadow-elegant hover:shadow-intense" 
                    asChild
                  >
                    <a href="mailto:harshitarora1065@gmail.com" className="flex items-center gap-4">
                      <Mail className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
                      Email Me
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="magnetic-button hover-glow border-primary/50 group px-12 py-8 text-xl backdrop-blur-sm bg-primary/5" 
                    asChild
                  >
                    <a href="https://github.com/harshit1arora" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                      <Github className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
                      GitHub
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="magnetic-button hover-glow border-primary/50 group px-12 py-8 text-xl backdrop-blur-sm bg-primary/5" 
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/harshit10arora/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                      <Linkedin className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/20 bg-gradient-to-b from-transparent to-primary/5">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xl text-muted-foreground mb-4">
              © 2025 Harshit Arora. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-lg text-primary/80">
              Crafted with precision and passion ✨
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
