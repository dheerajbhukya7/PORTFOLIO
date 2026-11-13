import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { person } from "@/lib/site";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Work" },
  { to: "/writings", label: "Writing" },
  { to: "/now", label: "Now" },
] as const;

export function Shell({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const useDark = saved ? saved === "dark" : true;
    document.documentElement.classList.toggle("dark", useDark);
    setDark(useDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <div className="site-shell min-h-screen">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <Link to="/" className="brand-mark" onClick={() => setMenuOpen(false)}>
            <span className="brand-symbol">D</span>
            <span>{person.name.split(" ")[0]}<span className="brand-period">.</span></span>
          </Link>
          <div id="main-navigation-links" className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            {links.map((l) => {
              const active = path === l.to || path.startsWith(`${l.to}/`);
              return (
                <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}
                  className={`nav-link ${active ? "nav-link-active" : ""}`}>
                  {l.label}
                </Link>
              );
            })}
            <a href={`mailto:${person.email}`} className="nav-contact">
              Let's talk <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="nav-actions">
            <button type="button" onClick={toggleTheme} className="theme-toggle"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen} aria-controls="main-navigation-links"
              aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1} className={`site-main ${wide ? "site-main-wide" : ""}`}>{children}</main>
      <footer className="site-footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} {person.name}</span>
          <span className="footer-note">Built with curiosity <span className="brand-period">✳</span></span>
          <div className="flex items-center gap-4">
            <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
            <a href={person.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Rule() {
  return <hr className="section-rule" />;
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
