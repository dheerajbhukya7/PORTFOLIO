import { r as person } from "./site-DhcymCcA.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Shell, t as Kicker } from "./shell-Dzj-pJf7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/now-Dj09Lw5Y.js
var import_jsx_runtime = require_jsx_runtime();
function Now() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Now" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-medium tracking-tight",
			children: "What I'm doing"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "Updated October 2026"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Living in ",
					person.place,
					". Working as an ",
					person.role.toLowerCase(),
					" at ",
					person.company,
					". The job, in one line, is turning machine learning into something a team can run without me in the room."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Outside of that I keep one hardware project in my head at a time — usually something small enough to finish on a weekend — and I write when a week teaches me a rule I do not want to relearn."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "If you want to talk about applied ML, hiring, or a system that is stuck between a notebook and production, LinkedIn is the place."
				})
			]
		})
	] });
}
//#endregion
export { Now as component };
