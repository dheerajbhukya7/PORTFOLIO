import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MoveUpRight } from "lucide-react";
import { Kicker, Shell } from "@/components/shell";
import { person, principles, projects, work } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

const stack = ["Python", "LangGraph", "AWS Bedrock", "RAG", "FastAPI", "Pinecone", "ChromaDB", "MCP", "Docker", "Kubernetes"];

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <Shell wide>
      <section className="hero-section">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> AI/ML ENGINEER <span className="availability-divider">·</span> HYDERABAD, INDIA</div>
          <h1 className="hero-title">Engineering AI<br /><span className="hero-accent">that earns trust.</span></h1>
          <p className="hero-intro">
            I'm {person.name.split(" ")[0]}, an AI/ML engineer focused on generative AI, intelligent agents, and retrieval systems that people can actually trust.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="button-primary">Explore my work <ArrowUpRight size={17} /></Link>
            <a href={`mailto:${person.email}`} className="button-secondary"><Mail size={16} /> Get in touch</a>
          </div>
          <div className="hero-socials">
            <a href={person.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            <a href={person.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
            <span className="hero-location">Based in {person.place}</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract generative AI visual">
          <div className="art-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="art-core"><span>AI</span><i>✳</i></div>
          <div className="art-label art-label-top">SYSTEMS / 01</div>
          <div className="art-label art-label-bottom">THINK · BUILD · SHIP</div>
          <div className="art-cross">+</div>
        </div>
        <a href="#selected-work" className="scroll-cue"><ArrowDownRight size={16} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-strip">
        <div className="intro-index">01 / THE APPROACH</div>
        <p>I turn complex problems into <span>useful, grounded AI systems</span> — from the first retrieval experiment to production workflows with guardrails, observability, and humans in control.</p>
      </section>

      <section id="selected-work" className="content-section">
        <div className="section-heading">
          <div><Kicker>Selected work</Kicker><h2 className="section-title">Things I've been <span>building.</span></h2></div>
          <Link to="/projects" className="text-link">View all projects <ArrowUpRight size={16} /></Link>
        </div>
        <div className="project-grid">
          {featured.map((p, i) => (
            <article className="project-card" key={p.slug}>
              <div className={`project-visual project-visual-${i + 1}`}>
                <span className="project-number">0{i + 1}</span>
                <div className="project-visual-mark">{i === 0 ? "⌘" : i === 1 ? "◎" : "↗"}</div>
                <span className="project-visual-caption">{i === 0 ? "RETRIEVAL / KNOWLEDGE" : i === 1 ? "AGENTS / AUTOMATION" : "RESEARCH / INTELLIGENCE"}</span>
              </div>
              <div className="project-card-body">
                <div className="project-meta"><span>{p.year}</span><span>FEATURED</span></div>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                {p.href ? <a href={p.href} target="_blank" rel="noreferrer" className="card-link">Explore project <MoveUpRight size={15} /></a> : <Link to="/projects" className="card-link">Project details <MoveUpRight size={15} /></Link>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section expertise-section">
        <div className="section-heading">
          <div><Kicker>Toolbox</Kicker><h2 className="section-title">My everyday <span>stack.</span></h2></div>
          <p className="section-aside">The tools are only as good as the problems they help solve.</p>
        </div>
        <div className="stack-cloud">{stack.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="content-section experience-section">
        <div className="section-heading">
          <div><Kicker>Experience</Kicker><h2 className="section-title">Where I've <span>worked.</span></h2></div>
          <Link to="/about" className="text-link">More about me <ArrowUpRight size={16} /></Link>
        </div>
        <div className="experience-list">
          {work.map((item, i) => (
            <article className="experience-row" key={item.org}>
              <span className="experience-count">0{i + 1}</span>
              <div className="experience-main"><h3>{item.title}</h3><p>{item.org}</p><span>{item.detail}</span></div>
              <time>{item.when}</time>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-panel">
        <div><Kicker>What I believe</Kicker><h2 className="section-title">Good engineering<br /><span>earns trust.</span></h2></div>
        <ul>{principles.slice(0, 4).map((p) => <li key={p}><span>↗</span>{p}</li>)}</ul>
      </section>

      <section className="contact-panel">
        <div><Kicker>Have a problem worth solving?</Kicker><h2>Let's build something<br /><span>that matters.</span></h2></div>
        <a href={`mailto:${person.email}`} className="contact-button">Start a conversation <ArrowUpRight size={18} /></a>
        <span className="contact-orbit">✳</span>
      </section>
    </Shell>
  );
}
