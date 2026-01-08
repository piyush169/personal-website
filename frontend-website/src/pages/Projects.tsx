import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ProjectSkeleton } from '@/components/Skeleton';
import { fetchProjects } from '@/lib/api';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  const sortedProjects = projects?.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <AnimatedSection>
          <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Projects
          </h1>
        </AnimatedSection>

        {isLoading && (
          <AnimatedSection delay={100}>
            <ProjectSkeleton />
          </AnimatedSection>
        )}

        {error && (
          <AnimatedSection delay={100}>
            <p className="font-mono text-muted-foreground">
              Unable to load projects. Please try again later.
            </p>
          </AnimatedSection>
        )}

        {sortedProjects && (
          <div className="space-y-12">
            {sortedProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={100 + index * 100}>
                <article className="group">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <Link
                      to={`/projects/${project.id}`}
                      className="font-mono text-xl font-medium text-foreground group-hover:text-foreground/80 transition-colors relative inline-block"
                    >
                      {project.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                    </Link>
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 shrink-0"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </a>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2 py-1 bg-muted/10 text-muted-foreground rounded border border-border/20 transition-colors hover:border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        )}

        {sortedProjects?.length === 0 && (
          <AnimatedSection delay={100}>
            <p className="font-mono text-muted-foreground">
              No projects yet. Check back soon!
            </p>
          </AnimatedSection>
        )}
      </div>
    </Layout>
  );
}
