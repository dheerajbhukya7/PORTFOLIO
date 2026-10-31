import { a as projects, i as principles, n as notes, r as person } from "./site-DhcymCcA.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as Rule, r as Shell, t as Kicker } from "./shell-Dzj-pJf7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BUVlvk0J.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const latest = notes[0];
	const project = projects[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-5xl leading-none font-medium tracking-tight",
			children: person.name
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-muted",
			children: [
				person.role,
				" · ",
				person.place
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-lg leading-relaxed",
			children: "I build machine-learning systems that have to survive contact with real work."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-muted",
			children: [
				"I came up through mechanical engineering, then software, and landed in AI/ML. These days that means",
				" ",
				person.company,
				" in Hyderabad — models, data, and the unglamorous part where something actually ships."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: "I like problems that start physical and end computational: wings, sensors, scrap, then the models people ask to trust."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "How I think" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: principles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-olive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
			}, p))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Right now" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"In ",
			person.place,
			", working as an ",
			person.role.toLowerCase(),
			" at ",
			person.company,
			". Reading less about new model names and more about whether the last one is still correct."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/now",
			className: "mt-3 inline-flex items-center gap-1 text-olive underline-offset-4 hover:underline",
			children: ["What I'm doing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Latest note" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/writings",
				className: "text-sm text-muted hover:text-ink",
				children: "All writings"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/writings/$slug",
			params: { slug: latest.slug },
			className: "group block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium group-hover:underline",
					children: latest.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: latest.date
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: latest.excerpt
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "A project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/projects",
				className: "text-sm text-muted hover:text-ink",
				children: "All projects"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl font-medium",
			children: project.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted",
			children: project.summary
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Connect" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "LinkedIn is the reliable door. I read messages there." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: person.linkedin,
			className: "mt-4 inline-flex h-11 items-center rounded-pill border border-line bg-paper-2 px-4 text-sm font-medium",
			children: "LinkedIn"
		})
	] });
}
//#endregion
export { Home as component };
