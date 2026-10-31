import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Shell } from "./shell-Dzj-pJf7.mjs";
import { n as Route } from "./router-BOA_psFI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/writings._slug-CsfD1SJ7.js
var import_jsx_runtime = require_jsx_runtime();
function NotePage() {
	const note = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/writings",
			className: "text-sm text-muted hover:text-ink",
			children: "Writings"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-4 font-display text-4xl leading-tight font-medium tracking-tight",
			children: note.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: note.date
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: "mt-8 space-y-5",
			children: note.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
		})
	] });
}
//#endregion
export { NotePage as component };
