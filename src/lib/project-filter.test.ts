import { test } from "node:test";
import assert from "node:assert/strict";
import { filterProjects } from "./project-filter.ts";

const sample = [
  { title: "PDF Assistant", summary: "FAISS retrieval", year: "Python", href: "https://example.com" },
  { title: "Private case study", summary: "Agent orchestration", year: "2026" },
];

test("search ignores case and outer whitespace", () => {
  assert.deepEqual(filterProjects(sample, "  faiss  ", "all"), [sample[0]]);
});
test("filters public repositories and case studies", () => {
  assert.deepEqual(filterProjects(sample, "", "public"), [sample[0]]);
  assert.deepEqual(filterProjects(sample, "", "case-studies"), [sample[1]]);
});
test("no results for a mismatched query or scope", () => {
  assert.deepEqual(filterProjects(sample, "FAISS", "case-studies"), []);
  assert.deepEqual(filterProjects(sample, "not present", "all"), []);
});
