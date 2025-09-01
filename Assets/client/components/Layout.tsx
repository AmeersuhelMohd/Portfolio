import { Link, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-foreground">
      <Header />
      <main className="container py-10 md:py-12 lg:py-14"><Outlet /></main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className={cn(
      "sticky top-0 z-40 w-full border-b border-border/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    )}>
      <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-primary" aria-hidden />
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="shrink-0">
          <span className="text-lg font-extrabold tracking-tight text-primary">Ameer Suhel Mohammed</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#overview" className="text-muted-foreground hover:text-foreground transition-colors">Overview</a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
          <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors">Education</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
          <a href="#certifications" className="text-muted-foreground hover:text-foreground transition-colors">Certifications</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Print
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white/70">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Ameer Suhel Mohammed · Built with React & TailwindCSS
        </p>
      </div>
    </footer>
  );
}
