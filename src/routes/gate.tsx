import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Kicker, Shell } from "@/components/shell";

export const Route = createFileRoute("/gate")({ component: Gate });

type Case = {
  id: string;
  ask: string;
  pages: { id: string; label: string; score: number; quote: string }[];
  draft: string;
  cite: string;
};

const cases: Case[] = [
  {
    id: "clinic",
    ask: "Can this discharge note support a same-day dose change?",
    pages: [
      { id: "p4", label: "p.4 guideline", score: 0.91, quote: "Dose changes require a documented renal panel within 24 hours." },
      { id: "p11", label: "p.11 summary", score: 0.62, quote: "Patient discharged on the prior regimen. Follow-up in one week." },
      { id: "p2", label: "p.2 labs", score: 0.44, quote: "Creatinine last drawn three days before discharge." },
    ],
    draft: "Not on this note. The guideline wants a renal panel inside 24 hours, and the last creatinine is three days old. Hold the change and escalate.",
    cite: "Guideline p.4 · labs p.2",
  },
  {
    id: "ops",
    ask: "Close the billing ticket and refund the duplicate charge?",
    pages: [
      { id: "t88", label: "ticket 88", score: 0.87, quote: "Duplicate capture confirmed. Refunds over $500 need a named approver." },
      { id: "pol", label: "policy 3.2", score: 0.71, quote: "Agents may draft the refund. They may not submit it." },
      { id: "log", label: "ledger", score: 0.38, quote: "Charge posted twice at 09:14 and 09:14:02." },
    ],
    draft: "The duplicate is real. I drafted the refund and stopped. Policy 3.2 says a person submits anything over $500.",
    cite: "Ticket 88 · policy 3.2",
  },
  {
    id: "kb",
    ask: "Which region owns the after-hours pager this week?",
    pages: [
      { id: "rot", label: "rota", score: 0.94, quote: "Week 44: Hyderabad primary, Austin secondary." },
      { id: "old", label: "old rota", score: 0.33, quote: "Week 12: Austin primary." },
      { id: "chat", label: "slack", score: 0.21, quote: "Someone said Austin, without a date." },
    ],
    draft: "Hyderabad is primary this week. The Austin line is last quarter’s rota, and the chat message has no date. I would not page Austin first.",
    cite: "Rota week 44",
  },
];

const stations = ["Planner", "Retrieve", "Rerank", "Draft", "You"];

function Gate() {
  const [caseId, setCaseId] = useState(cases[0].id);
  const [step, setStep] = useState(0);
  const [held, setHeld] = useState(false);
  const [verdict, setVerdict] = useState<"open" | "pass" | "back" | null>(null);
  const current = cases.find((c) => c.id === caseId) ?? cases[0];

  useEffect(() => {
    if (held || verdict) return;
    if (step >= 4) {
      setHeld(true);
      return;
    }
    const t = window.setTimeout(() => setStep((s) => s + 1), 700);
    return () => window.clearTimeout(t);
  }, [step, held, verdict, caseId]);

  function pick(id: string) {
    setCaseId(id);
    setStep(0);
    setHeld(false);
    setVerdict(null);
  }

  function decide(next: "pass" | "back") {
    setVerdict(next);
    setHeld(false);
  }

  const ranked = [...current.pages].sort((a, b) => b.score - a.score);

  return (
    <Shell wide>
      <Kicker>The review gate</Kicker>
      <h1 className="font-display text-4xl font-medium tracking-tight">You are the last agent.</h1>
      <p className="mt-3 max-w-xl text-muted">
        A question moves through a planner, a search, a reranker, and a draft. It cannot leave until you pass
        it or send it back. Nothing here calls a model. The pages are fixed. The stop is real.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {cases.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => pick(c.id)}
            className={`rounded-pill border px-3 py-2 text-left text-sm ${
              c.id === caseId ? "border-olive bg-olive-soft text-ink" : "border-line text-muted"
            }`}
          >
            {c.ask}
          </button>
        ))}
      </div>

      <ol className="mt-8 grid grid-cols-5 gap-2">
        {stations.map((name, i) => {
          const on = step >= i;
          const here = (held && i === 4 && !verdict) || (!held && step === i);
          return (
            <li
              key={name}
              className={`rounded-2xl border px-2 py-3 text-center text-xs tracking-wide uppercase ${
                here ? "border-olive bg-olive-soft text-ink" : on ? "border-line text-ink" : "border-line text-muted"
              }`}
            >
              {name}
            </li>
          );
        })}
      </ol>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <section className="rounded-2xl border border-line bg-paper-2 p-4">
          <p className="text-xs tracking-[0.16em] text-muted uppercase">Pages in play</p>
          <ul className="mt-3 space-y-3">
            {ranked.map((page, i) => {
              const show = step >= 2;
              const winner = step >= 3 && i === 0;
              return (
                <li key={page.id} className={show ? "opacity-100" : "opacity-30"}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className={winner ? "text-olive" : ""}>{page.label}</span>
                    <span className="text-muted">{show ? page.score.toFixed(2) : "—"}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-pill bg-line">
                    <div
                      className="h-full bg-olive transition-all duration-500"
                      style={{ width: show ? `${page.score * 100}%` : "0%" }}
                    />
                  </div>
                  {winner && <p className="mt-2 text-sm text-muted">{page.quote}</p>}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="flex flex-col rounded-2xl border border-line p-4">
          <p className="text-xs tracking-[0.16em] text-muted uppercase">Draft</p>
          <p className="mt-3 flex-1 leading-relaxed">
            {step >= 4 ? current.draft : "Waiting on a page the reranker will stand behind."}
          </p>
          <p className="mt-4 text-sm text-olive">{step >= 3 ? current.cite : "No citation yet"}</p>
        </section>
      </div>

      <div className="mt-4 flex min-h-14 flex-wrap items-center gap-3">
        {held && !verdict && (
          <>
            <p className="text-sm text-muted">The draft is at the gate. It does not send itself.</p>
            <button
              type="button"
              onClick={() => decide("pass")}
              className="h-11 rounded-pill bg-olive px-4 text-sm font-medium text-paper"
            >
              Pass it
            </button>
            <button
              type="button"
              onClick={() => decide("back")}
              className="h-11 rounded-pill border border-line px-4 text-sm"
            >
              Send it back
            </button>
          </>
        )}
        {verdict === "pass" && (
          <p>Released, with {current.cite} attached. The log shows your name on the approval, not the model’s.</p>
        )}
        {verdict === "back" && (
          <p>Sent back. The writer does not get to outvote the reviewer. Run it again when the pages change.</p>
        )}
        {verdict && (
          <button type="button" onClick={() => pick(caseId)} className="h-11 rounded-pill border border-line px-4 text-sm">
            Run again
          </button>
        )}
      </div>
    </Shell>
  );
}
