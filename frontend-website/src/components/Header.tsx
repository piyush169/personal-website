import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const socialsSection = document.getElementById('socials');
      socialsSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border/10">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="font-mono text-xl font-bold tracking-tight text-foreground hover:text-foreground/80 transition-colors"
        >
          PIYUSH
        </Link>
        
        <div className="flex items-center gap-8">
          <Link
            to="/blogs"
            className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
          >
            Blogs
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/projects"
            className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
