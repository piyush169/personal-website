import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Skeleton } from '@/components/Skeleton';
import { fetchProject } from '@/lib/api';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  const { data: project, isLoading, error } = useQuery({
    queryKey: ['project', id],
    queryFn: () => fetchProject(id!),
    enabled: !!id,
  });

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <AnimatedSection>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to projects
          </Link>
        </AnimatedSection>

        {isLoading && (
          <AnimatedSection delay={100}>
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <div className="flex gap-2">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-16" />
              </div>
              <div className="pt-4 space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          </AnimatedSection>
        )}

        {error && (
          <AnimatedSection delay={100}>
            <p className="font-mono text-muted-foreground">
              Unable to load this project. Please try again later.
            </p>
          </AnimatedSection>
        )}

        {project && (
          <>
            <AnimatedSection delay={100}>
              <header className="mb-8">
                <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {project.title}
                </h1>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2 py-1 bg-muted/10 text-muted-foreground rounded border border-border/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-sm text-foreground hover:text-foreground/80 transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-sm text-foreground hover:text-foreground/80 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </header>
            </AnimatedSection>

            {project.image && (
              <AnimatedSection delay={200}>
                <div className="mb-8 overflow-hidden rounded-lg border border-border/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </AnimatedSection>
            )}

            <AnimatedSection delay={300}>
              <article className="font-mono text-foreground/90 leading-relaxed whitespace-pre-wrap">
                {project.description}
              </article>
            </AnimatedSection>
          </>
        )}
      </div>
    </Layout>
  );
}
