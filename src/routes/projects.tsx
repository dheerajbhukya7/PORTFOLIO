import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";
import { Kicker, Shell } from "@/components/shell";
import { projects } from "@/lib/site";
import { filterProjects, type ProjectScope } from "@/lib/project-filter";

export const Route = createFileRoute("/projects")({ component: Projects });

function Projects() {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<ProjectScope>("all");
  const visible = filterProjects(projects, query, scope);

  return (
    <Shell wide>
      <Kicker>Project library</Kicker>
      <h1 className="section-title">Explore my <span>work.</span></h1>
      <p className="mt-3 max-w-2xl text-muted">
        Explore public repositories and engineering case studies across AI, retrieval, agents and machine learning.
      </p>
      <div className="project-library-tools">
        <div className="project-filter-group" role="group" aria-label="Project type">
          {([["all", "All projects"], ["public", "Public repositories"], ["case-studies", "Case studies"]] as const).map(([value, label]) => (
            <button key={value} type="button" aria-pressed={scope === value}
              className="project-filter" onClick={() => setScope(value)}>{label}</button>
          ))}
        </div>
        <label className="project-search">
          <Search size={17} aria-hidden="true" />
          <input type="search" aria-label="Search projects" placeholder="Search projects or technologies"
            value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
      </div>
      <p className="project-result-count" aria-live="polite">{visible.length} {visible.length === 1 ? "project" : "projects"}</p>
      <div className="project-grid project-library">
        {visible.map((p, i) => (
          <article key={p.slug} className="project-card">
            <div className={`project-visual project-visual-${i % 3 + 1}`} aria-hidden="true">
              <span className="project-number">{String(i + 1).padStart(2, "0")}</span>
              <div className="project-visual-mark">{p.href ? "↗" : "◎"}</div>
              <span className="project-visual-caption">{p.href ? "PUBLIC REPOSITORY" : "CASE STUDY"}</span>
            </div>
            <div className="project-card-body">
              <div className="project-meta"><span>{p.year}</span></div>
              <h2 className="project-library-title">{p.title}</h2>
              <p>{p.summary}</p>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noreferrer" className="card-link">View source <ArrowUpRight size={16} /></a>
              ) : <span className="project-result-count">Case study · source not public</span>}
            </div>
          </article>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="project-empty">
          <h2>No matching projects</h2>
          <p>Try a different technology or clear the filters.</p>
          <button type="button" className="button-secondary" onClick={() => { setQuery(""); setScope("all"); }}>Reset filters</button>
        </div>
      )}
    </Shell>
  );
}
