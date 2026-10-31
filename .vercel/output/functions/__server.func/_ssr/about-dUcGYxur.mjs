import { o as study, r as person, s as work } from "./site-DhcymCcA.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Rule, r as Shell, t as Kicker } from "./shell-Dzj-pJf7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-dUcGYxur.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "About" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-medium tracking-tight",
			children: "A mechanical start, an ML practice."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-4 text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"I'm ",
					person.name,
					". I live in ",
					person.place,
					". The short version on LinkedIn is an AI/ML engineer with about five years of hands-on work, currently with ",
					person.company,
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The longer version starts in Manuguru and a mechanical engineering degree at Lovely Professional University. Formula wings, ANSYS, an Arduino bin, a robot built from scrap. Then software — Cognizant — and a stretch of sourcing work where the interesting part was the metrics, not the inbox." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I still think like someone who had to stand next to the thing they simulated. If a model cannot be explained, monitored, or turned off, it is not finished." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Work" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-6",
			children: work.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-medium",
						children: w.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: w.when
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-olive",
					children: w.org
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted",
					children: w.detail
				})
			] }, w.org))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Study" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-4",
			children: study.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-medium",
				children: s.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					s.org,
					" · ",
					s.when
				]
			})] }, s.title))
		})
	] });
}
//#endregion
export { About as component };
