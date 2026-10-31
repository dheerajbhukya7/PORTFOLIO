import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Kicker, Rule, Shell } from "@/components/shell";
import { person, study, work } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <Shell>
      <Kicker>About</Kicker>
      <h1 className="font-display text-4xl font-medium tracking-tight">Generative AI, Agentic AI.</h1>
      <div className="mt-6 space-y-4 text-muted">
        <p>
          I'm {person.name}, an {person.role.toLowerCase()} at {person.company}. I work on large language
          models, LangGraph agents, and retrieval systems that have to cite their sources.
        </p>
        <p>
          Before Intenso I was a machine learning engineer at Unizen Technologies, building recommendations,
          streaming scoring, and models for churn and lead scoring. I studied at Lovely Professional University
          and finished a B.Tech in 2022.
        </p>
        <p>
          The stack I use in production is Python, FastAPI, AWS Bedrock, Pinecone, Chroma, Docker, and
          Kubernetes. Agents get typed tools, an audit trail, and a person in the loop when the action matters.
        </p>
      </div>

      <Rule />
      <Kicker>Work</Kicker>
      <ul className="space-y-6">
        {work.map((w) => (
          <li key={w.org}>
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-medium">{w.title}</h2>
              <span className="text-sm text-muted">{w.when}</span>
            </div>
            <p className="text-sm text-olive">{w.org}</p>
            <p className="mt-1 text-muted">{w.detail}</p>
          </li>
        ))}
      </ul>

      <Rule />
      <Kicker>Study</Kicker>
      <ul className="space-y-4">
        {study.map((s) => (
          <li key={s.title}>
            <h2 className="font-medium">{s.title}</h2>
            <p className="text-sm text-muted">
              {s.org} · {s.when}
            </p>
          </li>
        ))}
      </ul>

      <Rule />
      <Kicker>Connect</Kicker>
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href={person.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition hover:border-olive hover:text-olive"
          style={{ background: "var(--color-paper-2)", borderColor: "var(--color-line)", color: "var(--color-ink)" }}
        >
          <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
        </a>
        <a
          href={person.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition hover:border-olive hover:text-olive"
          style={{ background: "var(--color-paper-2)", borderColor: "var(--color-line)", color: "var(--color-ink)" }}
        >
          <Github size={16} /> GitHub <ArrowUpRight size={14} />
        </a>
        <a
          href={`mailto:${person.email}`}
          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition hover:border-olive hover:text-olive"
          style={{ background: "var(--color-paper-2)", borderColor: "var(--color-line)", color: "var(--color-ink)" }}
        >
          <Mail size={16} /> Email <ArrowUpRight size={14} />
        </a>
      </div>
    </Shell>
  );
}
