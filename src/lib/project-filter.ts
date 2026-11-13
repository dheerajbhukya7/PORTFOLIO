export type ProjectScope = "all" | "public" | "case-studies";
type SearchableProject = { title: string; summary: string; year: string; href?: string };

export function filterProjects<T extends SearchableProject>(projects: T[], query: string, scope: ProjectScope): T[] {
  const normalized = query.trim().toLowerCase();
  return projects.filter((p) => {
    const matchesScope = scope === "all" || (scope === "public" ? Boolean(p.href) : !p.href);
    return matchesScope && [p.title, p.summary, p.year].join(" ").toLowerCase().includes(normalized);
  });
}
