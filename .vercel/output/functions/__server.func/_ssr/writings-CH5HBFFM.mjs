import { n as notes } from "./site-DhcymCcA.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Shell, t as Kicker } from "./shell-Dzj-pJf7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/writings-CH5HBFFM.js
var import_jsx_runtime = require_jsx_runtime();
function Writings() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Writings" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-medium tracking-tight",
			children: "Notes"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted",
			children: "Short pieces. Replace them whenever the thinking changes."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-10 divide-y divide-line border-y border-line",
			children: notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/writings/$slug",
				params: { slug: n.slug },
				className: "block py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: n.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 text-sm text-muted",
						children: n.date
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: n.excerpt
				})]
			}) }, n.slug))
		})
	] });
}
//#endregion
export { Writings as component };
