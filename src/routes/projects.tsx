import { createFileRoute } from "@tanstack/react-router";
import { Kicker, Shell } from "@/components/shell";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/projects")({ component: Projects });

function Projects() {
  return (
    <Shell>
      <Kicker>Projects</Kicker>
      <h1 className="font-display text-4xl font-medium tracking-tight">Things I've built</h1>
      <p className="mt-3 text-muted">
        Public repositories on GitHub. Wording follows each repo’s own description.
      </p>
      <ul className="mt-10 space-y-8">
        {projects.map((p) => (
          <li key={p.slug} className="border-t border-line pt-6">
            <div className="flex items-baseline justify-between gap-4">
              {p.href ? (
                <a href={p.href} className="font-display text-2xl font-medium hover:underline">
                  {p.title}
                </a>
              ) : (
                <h2 className="font-display text-2xl font-medium">{p.title}</h2>
              )}
              <span className="shrink-0 text-sm text-muted">{p.year}</span>
            </div>
            <p className="mt-2 text-muted">{p.summary}</p>
          </li>
        ))}
      </ul>
    </Shell>
  );
}
