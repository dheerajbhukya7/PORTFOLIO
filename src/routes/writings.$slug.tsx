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

const TAG_MAP: Record<string, string> = {
  "cite-the-page":           "RAG",
  "ship-the-boring-version": "Agents",
  "chunking-is-not-splitting": "RAG",
  "reranking-earns-its-cost":  "RAG",
  "agents-need-a-stop-button": "Agents",
  "rag-is-an-architecture-not-a-feature": "RAG",
  "embeddings-have-a-vocabulary": "ML",
  "mlflow-is-not-optional":    "ML",
};

const GLYPH_MAP: Record<string, string> = {
  "RAG":    "⬡",
  "Agents": "◈",
  "ML":     "◎",
};

function NotePage() {
  const note = Route.useLoaderData();
  const tag   = TAG_MAP[note.slug] ?? "ML";
  const glyph = GLYPH_MAP[tag];

  return (
    <Shell>
      {/* back link */}
      <Link
        to="/writings"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 12,
          fontWeight: 650,
          letterSpacing: ".06em",
          color: "var(--color-muted)",
          marginBottom: 36,
          transition: "color .2s",
        }}
        className="note-back-link"
      >
        ← Writings
      </Link>

      {/* header */}
      <header style={{ position: "relative" }}>
        {/* faint glyph behind title */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -20, right: -10,
            fontSize: 130,
            lineHeight: 1,
            color: "var(--color-olive)",
            opacity: .07,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {glyph}
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            padding: "4px 11px",
            borderRadius: 99,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--color-olive)",
            background: "color-mix(in srgb, var(--color-olive) 10%, transparent)",
            border: "1px solid color-mix(in srgb, var(--color-olive) 28%, transparent)",
          }}>
            {glyph} {tag}
          </span>
          <span style={{ fontSize: 11, color: "var(--color-muted)", opacity: .75 }}>
            {note.date}
          </span>
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(34px, 5.5vw, 58px)",
            fontWeight: 650,
            lineHeight: 1.05,
            letterSpacing: "-.07em",
            maxWidth: 760,
          }}
        >
          {note.title}
        </h1>
      </header>

      {/* divider */}
      <div style={{
        margin: "36px 0",
        height: 1,
        background: "linear-gradient(90deg, var(--color-olive), var(--color-line) 60%, transparent)",
        opacity: .5,
      }} />

      {/* body */}
      <article style={{ maxWidth: 640 }}>
        {note.body.map((p, i) => (
          <p
            key={i}
            style={{
              margin: 0,
              marginTop: i > 0 ? "1.6em" : 0,
              fontSize: 16,
              lineHeight: 1.9,
              color: i === 0 ? "var(--color-ink)" : "var(--color-muted)",
              fontWeight: i === 0 ? 450 : 400,
            }}
          >
            {p}
          </p>
        ))}
      </article>

      {/* footer nav */}
      <div style={{
        marginTop: 72,
        paddingTop: 28,
        borderTop: "1px solid var(--color-line)",
      }}>
        <Link
          to="/writings"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            fontWeight: 650,
            color: "var(--color-olive)",
          }}
        >
          ← All writings
        </Link>
      </div>

      <style>{`
        .note-back-link:hover { color: var(--color-ink) !important; }
      `}</style>
    </Shell>
  );
}
