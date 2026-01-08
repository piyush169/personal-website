import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Github, Twitter, FileText } from 'lucide-react';

const Index = () => {
  const skills = [
  "TypeScript", "Python", "Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB" , "Redis", 
  "Docker", "Kubernetes", "Terraform", "AWS", "Azure" , "Git", "Linux"];
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <AnimatedSection>
          <section className="min-h-[60vh] flex flex-col justify-center">
            <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm Piyush
            </h1>
            <p className="font-mono text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I am a Backend Developer and DevOps Engineer passionate about building resilient, scalable, and automated systems. With a strong foundation in backend, I specialize in creating high-performance backends integrated with modern infrastructure tools like Kubernetes, Docker, and Terraform.
              My approach combines traditional engineering with the future of technology. Whether I'm optimizing a multi-region traffic manager or deploying local AI models to a private server, my goal is to bridge the gap between complex code and seamless user experiences.
            </p>
          </section>
        </AnimatedSection>

        {/* Tech Stack Section */}
        <AnimatedSection delay={100}>
          <section className="py-20 scroll-mt-24">
            <h2 className="font-mono text-sm text-muted-foreground mb-8 uppercase tracking-widest">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-sm px-4 py-2 border border-red-600/50 bg-red-600/5 text-red-500 rounded-none transition-all duration-300 hover:bg-red-600/20 hover:border-red-500 hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Socials Section */}
        <AnimatedSection delay={200}>
          <section id="socials" className="py-20 scroll-mt-24">
            <h2 className="font-mono text-sm text-muted-foreground mb-8 uppercase tracking-widest">
              Connect
            </h2>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com/piyush169"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-mono text-foreground hover:text-foreground/80 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span className="relative">
                  GitHub
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
              
              <a
                href="https://x.com/piyu1219"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-mono text-foreground hover:text-foreground/80 transition-all duration-300 hover:scale-105"
              >
                <Twitter className="w-5 h-5" />
                <span className="relative">
                  X (Twitter)
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
              
              <a
                href="https://piyu.works/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-mono text-foreground hover:text-foreground/80 transition-all duration-300 hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                <span className="relative">
                  Resume
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Index;
