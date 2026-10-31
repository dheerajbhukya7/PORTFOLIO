import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Shell } from "@/components/shell";
import { notes } from "@/lib/site";

export const Route = createFileRoute("/writings")({ component: Writings });

function Writings() {
  return (
    <Shell>
      <Kicker>Writings</Kicker>
      <h1 className="font-display text-4xl font-medium tracking-tight">Notes</h1>
      <p className="mt-3 text-muted">Short pieces. Replace them whenever the thinking changes.</p>
      <ul className="mt-10 divide-y divide-line border-y border-line">
        {notes.map((n) => (
          <li key={n.slug}>
            <Link to="/writings/$slug" params={{ slug: n.slug }} className="block py-5">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl font-medium">{n.title}</h2>
                <span className="shrink-0 text-sm text-muted">{n.date}</span>
              </div>
              <p className="mt-2 text-muted">{n.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Shell>
  );
}
