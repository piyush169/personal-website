import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { BlogSkeleton } from '@/components/Skeleton';
import { fetchBlogs } from '@/lib/api';
import { format } from 'date-fns';

export default function Blogs() {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  const sortedBlogs = blogs?.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <AnimatedSection>
          <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Blogs
          </h1>
        </AnimatedSection>

        {isLoading && (
          <AnimatedSection delay={100}>
            <BlogSkeleton />
          </AnimatedSection>
        )}

        {error && (
          <AnimatedSection delay={100}>
            <p className="font-mono text-muted-foreground">
              Unable to load blogs. Please try again later.
            </p>
          </AnimatedSection>
        )}

        {sortedBlogs && (
          <div className="space-y-8">
            {sortedBlogs.map((blog, index) => (
              <AnimatedSection key={blog.id} delay={100 + index * 100}>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="block group"
                >
                  <article className="space-y-2">
                    <h2 className="font-mono text-xl font-medium text-foreground group-hover:text-foreground/80 transition-colors relative inline-block">
                      {blog.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                    </h2>
                    <p className="font-mono text-sm text-muted-foreground">
                      {format(new Date(blog.createdAt), 'MMMM d, yyyy')}
                    </p>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        )}

        {sortedBlogs?.length === 0 && (
          <AnimatedSection delay={100}>
            <p className="font-mono text-muted-foreground">
              No blogs yet. Check back soon!
            </p>
          </AnimatedSection>
        )}
      </div>
    </Layout>
  );
}
