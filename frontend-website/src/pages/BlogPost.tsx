import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Skeleton } from '@/components/Skeleton';
import { fetchBlog } from '@/lib/api';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  const { data: blog, isLoading, error } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchBlog(id!),
    enabled: !!id,
  });

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <AnimatedSection>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to blogs
          </Link>
        </AnimatedSection>

        {isLoading && (
          <AnimatedSection delay={100}>
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-1/4" />
              <div className="pt-8 space-y-3">
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
              Unable to load this blog post. Please try again later.
            </p>
          </AnimatedSection>
        )}

        {blog && (
          <>
            <AnimatedSection delay={100}>
              <header className="mb-12">
                <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {blog.title}
                </h1>
                <p className="font-mono text-sm text-muted-foreground">
                  {format(new Date(blog.createdAt), 'MMMM d, yyyy')}
                </p>
              </header>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <article className="font-mono text-foreground/90 leading-relaxed whitespace-pre-wrap">
                {blog.content}
              </article>
            </AnimatedSection>
          </>
        )}
      </div>
    </Layout>
  );
}
