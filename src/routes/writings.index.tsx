import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Shell } from "@/components/shell";
import { notes } from "@/lib/site";

export const Route = createFileRoute("/writings/")({ component: Writings });

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

function Writings() {
  return (
    <Shell>
      {/* ── page header ── */}
      <Kicker>Writings</Kicker>
      <h1 className="font-display text-4xl font-medium tracking-tight" style={{ letterSpacing: "-.06em" }}>
        Notes from the work.
      </h1>
      <p className="mt-3 text-muted" style={{ maxWidth: 460, lineHeight: 1.8 }}>
        Short pieces on RAG, agents, and ML in production.
        Thinking in progress — replaced when it changes.
      </p>

      {/* ── tag legend ── */}
      <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
        {(["RAG", "Agents", "ML"] as const).map((tag) => (
          <span key={tag} style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "5px 12px",
            border: "1px solid var(--writing-tag-border)",
            borderRadius: 99,
            fontSize: 11, fontWeight: 650, letterSpacing: ".12em",
            color: "var(--writing-tag-fg)",
            background: "var(--writing-tag-bg)",
          }}>
            <span style={{ fontSize: 13, lineHeight: 1 }}>{GLYPH_MAP[tag]}</span>
            {tag}
          </span>
        ))}
      </div>

      {/* ── writings grid ── */}
      <ul style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
        gap: 16,
        marginTop: 40,
        padding: 0,
        listStyle: "none",
      }}>
        {notes.map((n, i) => {
          const tag = TAG_MAP[n.slug] ?? "ML";
          const glyph = GLYPH_MAP[tag];
          const featured = i === 0;
          return (
            <li key={n.slug} style={featured ? { gridColumn: "1 / -1" } : {}}>
              <Link
                to="/writings/$slug"
                params={{ slug: n.slug }}
                style={{ display: "block", height: "100%", textDecoration: "none" }}
              >
                <article
                  className="writing-card"
                  data-featured={featured ? "true" : undefined}
                  data-tag={tag}
                >
                  {/* glyph watermark */}
                  <span className="writing-card-glyph" aria-hidden="true">
                    {glyph}
                  </span>

                  <div className="writing-card-inner">
                    <header className="writing-card-header">
                      <span className="writing-tag-chip">
                        {glyph} {tag}
                      </span>
                      <span className="writing-date">{n.date}</span>
                    </header>

                    <h2 className="writing-card-title">{n.title}</h2>
                    <p className="writing-card-excerpt">{n.excerpt}</p>

                    <span className="writing-read-more">
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* ── inline styles ── */}
      <style>{`
        :root {
          --writing-tag-border: color-mix(in srgb, var(--color-olive) 38%, var(--color-line));
          --writing-tag-fg:     var(--color-olive);
          --writing-tag-bg:     color-mix(in srgb, var(--color-olive) 8%, transparent);
          --card-bg:            var(--color-paper-2);
          --card-border:        var(--color-line);
          --card-hover-border:  color-mix(in srgb, var(--color-olive) 55%, var(--color-line));
        }

        .writing-card {
          position: relative;
          height: 100%;
          overflow: hidden;
          border: 1px solid var(--card-border);
          border-radius: 18px;
          background: var(--card-bg);
          transition: transform .25s cubic-bezier(.2,.75,.25,1),
                      border-color .25s, box-shadow .25s;
          cursor: pointer;
        }
        .writing-card:hover {
          transform: translateY(-5px);
          border-color: var(--card-hover-border);
          box-shadow: 0 20px 60px rgba(0,0,0,.14),
                      0 0 0 1px color-mix(in srgb, var(--color-olive) 18%, transparent);
        }

        /* featured card — full-width hero row */
        .writing-card[data-featured] {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          min-height: 220px;
          background:
            radial-gradient(ellipse at 20% 60%, color-mix(in srgb, var(--color-olive) 9%, transparent), transparent 55%),
            var(--card-bg);
        }
        @media (max-width: 640px) {
          .writing-card[data-featured] {
            grid-template-columns: 1fr;
          }
        }

        /* glyph watermark (left panel on featured, absolute on normal) */
        .writing-card-glyph {
          display: grid;
          place-items: center;
          font-size: 90px;
          line-height: 1;
          color: color-mix(in srgb, var(--color-olive) 14%, transparent);
          user-select: none;
          pointer-events: none;
          transition: color .3s;
        }
        .writing-card:hover .writing-card-glyph {
          color: color-mix(in srgb, var(--color-olive) 22%, transparent);
        }
        /* normal cards: glyph is absolute top-right decoration */
        .writing-card:not([data-featured]) .writing-card-glyph {
          position: absolute;
          top: -10px; right: -8px;
          font-size: 96px;
          opacity: .08;
        }
        /* featured: glyph is a grid cell */
        .writing-card[data-featured] .writing-card-glyph {
          font-size: 120px;
          opacity: .55;
          padding: 24px;
          border-right: 1px solid var(--card-border);
        }
        @media (max-width: 640px) {
          .writing-card[data-featured] .writing-card-glyph { display: none; }
        }

        .writing-card-inner {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 26px 26px 22px;
        }
        .writing-card[data-featured] .writing-card-inner {
          justify-content: center;
        }

        .writing-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .writing-tag-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 10px;
          border-radius: 99px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--color-olive);
          background: color-mix(in srgb, var(--color-olive) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--color-olive) 28%, transparent);
        }

        .writing-date {
          font-size: 11px;
          color: var(--color-muted);
          opacity: .75;
          flex-shrink: 0;
        }

        .writing-card-title {
          margin: 0;
          font-size: 20px;
          font-weight: 650;
          line-height: 1.2;
          letter-spacing: -.04em;
          color: var(--color-ink);
        }
        .writing-card[data-featured] .writing-card-title {
          font-size: clamp(22px, 2.8vw, 30px);
        }

        .writing-card-excerpt {
          margin: 0;
          font-size: 13px;
          line-height: 1.75;
          color: var(--color-muted);
        }
        .writing-card[data-featured] .writing-card-excerpt {
          font-size: 14px;
          max-width: 480px;
        }

        .writing-read-more {
          display: inline-block;
          margin-top: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .06em;
          color: var(--color-olive);
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity .22s, transform .22s;
        }
        .writing-card:hover .writing-read-more {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </Shell>
  );
}
