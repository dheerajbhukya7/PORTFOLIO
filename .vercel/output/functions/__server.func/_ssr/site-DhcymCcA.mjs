//#region node_modules/.nitro/vite/services/ssr/assets/site-DhcymCcA.js
var person = {
	name: "Dheeraj Bhukya",
	role: "AI/ML Engineer",
	place: "Hyderabad",
	company: "Intenso Tech Solution",
	linkedin: "https://www.linkedin.com/in/dheerajbhukya/"
};
var principles = [
	"A model that never leaves the notebook is a thought experiment.",
	"Start from the constraint — data, latency, the person using it — not the architecture diagram.",
	"Mechanical training taught me to respect physics. Software taught me to respect the user.",
	"If I cannot explain the system in plain language, I do not understand it yet.",
	"Simplicity survives handoff. Cleverness rarely does."
];
var work = [
	{
		title: "AI/ML Engineer",
		org: "Intenso Tech Solution",
		when: "Hyderabad",
		detail: "Building applied machine-learning systems. The public profile describes five years of hands-on AI/ML work — models that have to run, not just score well offline."
	},
	{
		title: "Software Engineer",
		org: "Cognizant",
		when: "2022 —",
		detail: "Earlier software engineering work after moving out of a mechanical degree into IT and applied ML."
	},
	{
		title: "Sourcing Engineer",
		org: "Ancons International",
		when: "2023 —",
		detail: "Talent sourcing with a data habit: interviews, tracking, and weekly metrics used to make the team faster."
	}
];
var study = [
	{
		title: "B.Tech, Mechanical Engineering (Honours)",
		org: "Lovely Professional University",
		when: "2018 — 2022 · CGPA 7.43"
	},
	{
		title: "Higher secondary, MPC",
		org: "FIITJEE",
		when: "2016 — 2018 · 77%"
	},
	{
		title: "Secondary school",
		org: "Triveni Talent School",
		when: "92%"
	}
];
var projects = [
	{
		slug: "applied-ml",
		title: "Applied ML at Intenso",
		year: "Now",
		summary: "Production-minded machine learning: taking a messy problem, choosing a model that fits the data you actually have, and shipping something a teammate can run."
	},
	{
		slug: "fsae-cfd",
		title: "CFD on an FSAE car",
		year: "2021 — 2022",
		summary: "Computational fluid dynamics on the front and rear wings of a Formula SAE vehicle — downforce, drag, and the habit of checking a simulation against the car, not the plot."
	},
	{
		slug: "smart-dustbin",
		title: "Smart dustbin",
		year: "College",
		summary: "An Arduino and ultrasonic-sensor bin that opens when someone walks up. Small, physical, and a reminder that sensors lie until you calibrate them."
	},
	{
		slug: "ewaste-walker",
		title: "Walking robot from e-waste",
		year: "College",
		summary: "A walking robot built from discarded electronics. Reuse as a design constraint, not a slogan."
	}
];
var notes = [{
	slug: "from-the-workshop-to-the-model",
	title: "From the workshop to the model",
	date: "October 2026",
	excerpt: "I studied mechanical engineering. I build machine-learning systems. The useful part of the first career is still the second one.",
	body: [
		"I did not start in computer science. I spent four years on mechanics, fluids, and the particular humility of a simulation that looks beautiful and is still wrong.",
		"CFD on a Formula car taught me that before I trust a number. An Arduino dustbin taught me that hardware fails in boring ways. A robot made of e-waste taught me to work with what is actually on the table.",
		"Those habits transferred. Most ML work fails the same way a bad mesh fails: the input is not what you assumed, the metric rewards the wrong thing, and nobody asked whether a person can use the output.",
		"Hyderabad is where I practice that now — five years into AI and ML, still more interested in a system that runs on a Tuesday than in a leaderboard."
	]
}, {
	slug: "ship-the-boring-version",
	title: "Ship the boring version",
	date: "September 2026",
	excerpt: "The interesting model is rarely the one that should go out first.",
	body: [
		"There is a version of every ML project that is a notebook, a chart, and a promise. There is another version that is an API, a log line, and a way to turn it off.",
		"I try to build the second one earlier than feels elegant. A simpler model you can monitor beats a clever one you cannot explain to the person who has to own it next month.",
		"Mechanical design has the same rule. You do not start with the lightest possible wing. You start with a wing that does not fall off."
	]
}];
function noteBySlug(slug) {
	return notes.find((n) => n.slug === slug);
}
//#endregion
export { projects as a, principles as i, notes as n, study as o, person as r, work as s, noteBySlug as t };
