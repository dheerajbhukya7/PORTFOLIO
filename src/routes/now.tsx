import { createFileRoute } from "@tanstack/react-router";
import { Kicker, Shell } from "@/components/shell";
import { person } from "@/lib/site";

export const Route = createFileRoute("/now")({ component: Now });

function Now() {
  return (
    <Shell>
      <Kicker>Now</Kicker>
      <h1 className="font-display text-4xl font-medium tracking-tight">What I'm doing</h1>
      <p className="mt-2 text-sm text-muted">Updated October 2026</p>
      <div className="mt-8 space-y-4">
        <p>
          {person.role} at {person.company} since April 2024. The current work is generative AI on AWS Bedrock:
          assistants, knowledge retrieval, LangGraph agents, and MCP connections into enterprise systems.
        </p>
        <p className="text-muted">
          Retrieval precision and review gates matter more than a new model name this quarter. Sensitive actions
          stay behind a person.
        </p>
        <p className="text-muted">
          Reach me at {person.email} or on LinkedIn.
        </p>
      </div>
    </Shell>
  );
}
