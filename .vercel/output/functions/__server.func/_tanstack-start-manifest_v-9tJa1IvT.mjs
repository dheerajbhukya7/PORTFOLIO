//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-9tJa1IvT.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/about",
			"/now",
			"/projects",
			"/writings"
		],
		preloads: ["/assets/index-jQgHo57u.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-jQgHo57u.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: ["/assets/routes-Bo_lJL4N.js", "/assets/shell-CI5Xzk_x.js"]
	},
	"/about": {
		filePath: "/workspace/src/routes/about.tsx",
		children: void 0,
		preloads: ["/assets/about-h6ijx7YK.js", "/assets/shell-CI5Xzk_x.js"]
	},
	"/now": {
		filePath: "/workspace/src/routes/now.tsx",
		children: void 0,
		preloads: ["/assets/now-1qdDKW1k.js", "/assets/shell-CI5Xzk_x.js"]
	},
	"/projects": {
		filePath: "/workspace/src/routes/projects.tsx",
		children: void 0,
		preloads: ["/assets/projects-Bqpxuqu4.js", "/assets/shell-CI5Xzk_x.js"]
	},
	"/writings": {
		filePath: "/workspace/src/routes/writings.tsx",
		children: ["/writings/$slug"],
		preloads: ["/assets/writings-D-xlWjKr.js", "/assets/shell-CI5Xzk_x.js"]
	},
	"/writings/$slug": {
		filePath: "/workspace/src/routes/writings.$slug.tsx",
		children: void 0,
		preloads: ["/assets/writings._slug-Dme8ndyh.js", "/assets/writings._slug-OtLGwF6j.js"]
	}
} });
//#endregion
export { tsrStartManifest };
