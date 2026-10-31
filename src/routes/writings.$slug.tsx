import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { noteBySlug } from "@/lib/site";

export const Route = createFileRoute("/writings/$slug")({
  loader: ({ params }) => {
    const note = noteBySlug(params.slug);
    if (!note) throw notFound();
    return note;
  },
  component: NotePage,
  notFoundComponent: () => (
    <Shell>
      <p>That note is not here.</p>
      <Link to="/writings" className="mt-4 inline-block text-olive">
        Back to writings
      </Link>
    </Shell>
  ),
});

function NotePage() {
  const note = Route.useLoaderData();
  return (
    <Shell>
      <Link to="/writings" className="text-sm text-muted hover:text-ink">
        Writings
      </Link>
      <h1 className="mt-4 font-display text-4xl leading-tight font-medium tracking-tight">{note.title}</h1>
      <p className="mt-2 text-sm text-muted">{note.date}</p>
      <article className="mt-8 space-y-5">
        {note.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </article>
    </Shell>
  );
}
