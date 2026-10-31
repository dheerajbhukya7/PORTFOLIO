
import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Shell } from "@/components/shell";
import { notes } from "@/lib/site";

export const Route = createFileRoute("/writings/")({
  component: Writings,
});

const TAG_MAP: Record<string, string> = {
  "cite-the-page": "RAG",
  "ship-the-boring-version": "Agents",
  "chunking-is-not-splitting": "RAG",
  "reranking-earns-its-cost": "RAG",
  "agents-need-a-stop-button": "Agents",
  "rag-is-an-architecture-not-a-feature": "RAG",
  "embeddings-have-a-vocabulary": "ML",
  "mlflow-is-not-optional": "ML",
};

const GLYPH_MAP: Record<string, string> = {
  RAG: "◈",
  Agents: "⌘",
  ML: "∿",
};

function Writings() {
  return (
    <Shell>
      <section className="writing-page">
        <div className="writing-intro">
          <Kicker>Writing / Field Notes</Kicker>
          <h1 className="writing-heading">
            Ideas worth
            <span> thinking about.</span>
          </h1>
          <p className="writing-description">
            Notes from building intelligent systems — RAG, autonomous agents,
            machine learning, and the engineering decisions behind them.
          </p>
          <div className="writing-count">
            <span className="writing-count-dot" />
            {String(notes.length).padStart(2, "0")} NOTES
            <span className="writing-count-divider">/</span>
            ENGINEERING JOURNAL
          </div>
        </div>

        <div className="writing-legend">
          {(["RAG", "Agents", "ML"] as const).map((tag) => (
            <span className="writing-filter" key={tag}>
              <span>{GLYPH_MAP[tag]}</span>
              {tag}
            </span>
          ))}
        </div>

        <div className="writing-grid">
          {notes.map((note, index) => {
            const tag = TAG_MAP[note.slug] ?? "ML";
            const glyph = GLYPH_MAP[tag];
            const featured = index === 0;

            return (
              <Link
                key={note.slug}
                to="/writings/$slug"
                params={{ slug: note.slug }}
                className={`writing-link ${featured ? "featured" : ""}`}
              >
                <article className="writing-card">
                  <div className="writing-card-top">
                    <span className="writing-index">
                      NOTE_{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="writing-date">{note.date}</span>
                  </div>

                  <div className="writing-symbol" aria-hidden="true">
                    {glyph}
                  </div>

                  <div className="writing-card-content">
                    <span className="writing-tag">
                      <span>{glyph}</span>
                      {tag}
                    </span>

                    <h2>{note.title}</h2>
                    <p>{note.excerpt}</p>

                    <span className="writing-read">
                      Explore note <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      <style>{`
        .writing-page {
          --writing-violet: #a78bfa;
          --writing-aqua: #67e8f9;
          --writing-panel: rgba(255,255,255,.035);
          --writing-border: rgba(167,139,250,.17);
          padding-bottom: 70px;
        }

        .writing-intro {
          max-width: 720px;
          padding: 22px 0 12px;
        }

        .writing-heading {
          margin: 18px 0 0;
          font-size: clamp(42px, 7vw, 76px);
          line-height: .99;
          font-weight: 650;
          letter-spacing: -.065em;
          color: var(--color-ink);
        }

        .writing-heading span {
          display: block;
          background: linear-gradient(100deg, var(--writing-violet), var(--writing-aqua));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .writing-description {
          max-width: 520px;
          margin-top: 24px;
          color: var(--color-muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .writing-count {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          color: var(--color-muted);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .16em;
        }

        .writing-count-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--writing-aqua);
          box-shadow: 0 0 12px var(--writing-aqua);
        }

        .writing-count-divider {
          color: var(--writing-violet);
        }

        .writing-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin: 34px 0 20px;
        }

        .writing-filter {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 13px;
          border: 1px solid var(--writing-border);
          border-radius: 99px;
          background: var(--writing-panel);
          color: var(--color-ink);
          font-size: 11px;
          letter-spacing: .04em;
        }

        .writing-filter span {
          color: var(--writing-aqua);
        }

        .writing-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .writing-link {
          display: block;
          min-width: 0;
          color: inherit;
          text-decoration: none;
        }

        .writing-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 265px;
          height: 100%;
          overflow: hidden;
          padding: 23px;
          border: 1px solid var(--writing-border);
          border-radius: 18px;
          background:
            radial-gradient(ellipse at 100% 0%, rgba(103,232,249,.07), transparent 48%),
            linear-gradient(145deg, rgba(167,139,250,.055), transparent 65%),
            var(--writing-panel);
          transition: transform .25s ease, border-color .25s ease,
            box-shadow .25s ease;
        }

        .writing-link:hover .writing-card {
          transform: translateY(-5px);
          border-color: rgba(103,232,249,.42);
          box-shadow: 0 18px 48px rgba(0,0,0,.2),
            0 0 25px rgba(167,139,250,.08);
        }

        .writing-card-top {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
        }

        .writing-index, .writing-date {
          color: var(--color-muted);
          font-size: 10px;
          letter-spacing: .12em;
        }

        .writing-symbol {
          position: absolute;
          top: 48px;
          right: 22px;
          color: rgba(167,139,250,.10);
          font-size: 90px;
          line-height: 1;
          pointer-events: none;
          transition: color .25s ease, transform .25s ease;
        }

        .writing-link:hover .writing-symbol {
          color: rgba(103,232,249,.16);
          transform: rotate(-8deg) scale(1.08);
        }

        .writing-card-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 38px;
        }

        .writing-tag {
          display: inline-flex;
          gap: 7px;
          align-items: center;
          padding: 5px 9px;
          border: 1px solid rgba(167,139,250,.22);
          border-radius: 99px;
          color: var(--writing-violet);
          background: rgba(167,139,250,.07);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .writing-card h2 {
          max-width: 430px;
          margin: 17px 0 0;
          color: var(--color-ink);
          font-size: clamp(19px, 2.3vw, 25px);
          font-weight: 650;
          line-height: 1.2;
          letter-spacing: -.045em;
        }

        .writing-card p {
          max-width: 470px;
          margin: 12px 0 20px;
          color: var(--color-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .writing-read {
          display: inline-flex;
          gap: 9px;
          align-items: center;
          margin-top: auto;
          color: var(--writing-aqua);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .07em;
        }

        .writing-read span {
          transition: transform .2s ease;
        }

        .writing-link:hover .writing-read span {
          transform: translate(3px, -3px);
        }

        .writing-link.featured {
          grid-column: 1 / -1;
        }

        .writing-link.featured .writing-card {
          min-height: 285px;
          background:
            radial-gradient(ellipse at 85% 20%, rgba(167,139,250,.15), transparent 50%),
            radial-gradient(ellipse at 10% 100%, rgba(103,232,249,.08), transparent 45%),
            var(--writing-panel);
        }

        .writing-link.featured .writing-card-content {
          max-width: 650px;
        }

        .writing-link.featured h2 {
          font-size: clamp(25px, 3.5vw, 36px);
        }

        @media (max-width: 640px) {
          .writing-grid {
            grid-template-columns: 1fr;
          }

          .writing-link.featured {
            grid-column: auto;
          }

          .writing-card {
            min-height: 245px;
            padding: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .writing-card, .writing-symbol, .writing-read span {
            transition: none;
          }
        }
      `}</style>
    </Shell>
  );
}
