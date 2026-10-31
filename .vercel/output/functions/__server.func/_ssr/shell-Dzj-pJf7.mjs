import { i as __toESM } from "../_runtime.mjs";
import { r as person } from "./site-DhcymCcA.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Sun, r as Moon } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-Dzj-pJf7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/writings",
		label: "Writings"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/now",
		label: "Now"
	}
];
function Shell({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const [dark, setDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setDark(document.documentElement.classList.contains("dark"));
	}, []);
	function toggleTheme() {
		const next = !document.documentElement.classList.contains("dark");
		document.documentElement.classList.toggle("dark", next);
		localStorage.setItem("theme", next ? "dark" : "light");
		setDark(next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 px-4 pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-xl items-center gap-2 rounded-pill border border-line bg-paper/90 px-2 py-1.5 shadow-sm backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "shrink-0 px-2 font-display text-lg font-medium tracking-tight",
						children: person.name.split(" ")[0]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto text-sm",
						children: links.map((l) => {
							const active = path === l.to || path.startsWith(`${l.to}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: `rounded-pill px-2.5 py-1.5 ${active ? "bg-olive-soft text-ink" : "text-muted hover:text-ink"}`,
								children: l.label
							}, l.to);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-xl px-5 pb-24 pt-12",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mx-auto flex max-w-xl items-center justify-between gap-4 px-5 pb-10 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hyderabad" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: toggleTheme,
					"aria-label": dark ? "Switch to light mode" : "Switch to dark mode",
					className: "grid size-11 place-items-center rounded-pill border border-line bg-paper-2 text-ink",
					children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 16 })
				})]
			})
		]
	});
}
function Rule() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "my-10 border-line" });
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-3 text-xs font-semibold tracking-[0.16em] text-muted uppercase",
		children
	});
}
//#endregion
export { Rule as n, Shell as r, Kicker as t };
