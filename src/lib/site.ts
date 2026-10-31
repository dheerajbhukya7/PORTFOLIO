export const person = {
  name: "Dheeraj Bhukya",
  role: "AI/ML Engineer",
  focus: "Generative AI · Agents · RAG",
  place: "Hyderabad",
  company: "Intenso Tech Solution",
  email: "dheerajbhukya1@gmail.com",
  phone: "+91 94921 41238",
  linkedin: "https://www.linkedin.com/in/dheerajbhukya/",
  github: "https://github.com/dheerajbhukya7",
};

export const principles = [
  "A model that never leaves the notebook is a thought experiment.",
  "Retrieval has to cite a page, not just sound confident.",
  "Agents get tools, limits, and a way for a person to stop them.",
  "If I cannot explain the system in plain language, I do not understand it yet.",
  "Simplicity survives handoff. Cleverness rarely does.",
];

export const work = [
  {
    title: "AI/ML Engineer",
    org: "Intenso Tech Solution Private Limited",
    when: "Apr 2024 — present",
    detail:
      "Generative AI on AWS Bedrock for content automation, assistants, and knowledge retrieval. Advanced RAG with semantic chunking, hybrid search, and reranking on Pinecone and ChromaDB. LangGraph multi-agent workflows and MCP tools into enterprise APIs, with Docker, Kubernetes, and CI/CD around them.",
  },
  {
    title: "Machine Learning Engineer",
    org: "Unizen Technologies",
    when: "May 2022 — Mar 2024",
    detail:
      "Recommendation systems, Kafka and Spark streaming for clickstream scoring, plus churn, lead scoring, and segmentation. Training and drift monitoring in MLflow, with real-time scoring on FastAPI.",
  },
];

export const study = [
  {
    title: "Bachelor of Technology",
    org: "Lovely Professional University",
    when: "2022 · Phagwara, Punjab",
  },
];

export const projects: {
  slug: string;
  title: string;
  year: string;
  href?: string;
  summary: string;
}[] = [
  {
    slug: "healthcare-rag",
    title: "Multimodal healthcare RAG",
    year: "Clinical documents",
    summary:
      "Advanced RAG over guidelines, prescriptions, discharge summaries, and lab reports. OCR and layout parsing, hybrid vector and BM25 search, cross-encoder reranking, and page-level citations. A LangGraph path for ingest, retrieval, summary, safety review, and escalation.",
  },
  {
    slug: "ops-copilot",
    title: "Enterprise multi-agent operations copilot",
    year: "Agents · MCP",
    summary:
      "A supervisor LangGraph system with planner, retrieval, analysis, action, and reviewer agents. MCP access to Postgres, REST, and ticketing, with RBAC and audit logs. Hybrid retrieval keeps high-impact actions behind a person.",
  },
  {
    slug: "multi-agent-research",
    title: "Multi-Agent Research System",
    year: "GitHub · Python",
    href: "https://github.com/dheerajbhukya7/Multi-Agent-Research-System",
    summary:
      "Search, read, write, critique, with a Streamlit UI. LangGraph, LangChain, Groq, Mistral, and Tavily.",
  },
  {
    slug: "city-intelligence",
    title: "City Intelligence Agent",
    year: "GitHub · Python",
    href: "https://github.com/dheerajbhukya7/city-intelligence-agent",
    summary:
      "Live weather and city news through tool calling. LangChain, Groq, Tavily, OpenWeatherMap, and Streamlit.",
  },
  {
    slug: "rag-book",
    title: "RAG Book Assistant",
    year: "GitHub · Python",
    href: "https://github.com/dheerajbhukya7/RAG-BOOK-ASSISTANT",
    summary: "Upload a PDF, search it with Chroma, and answer from the pages. Streamlit, LangChain, and Mistral.",
  },
  {
    slug: "movie-extractor",
    title: "Movie info extractor",
    year: "GitHub · Python",
    href: "https://github.com/dheerajbhukya7/movie-info-extractor",
    summary: "Structured movie facts with Mistral, LangChain, and Pydantic.",
  },
];

export type Note = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const notes: Note[] = [
  {
    slug: "cite-the-page",
    title: "Cite the page",
    date: "October 2026",
    excerpt: "A fluent answer that cannot point at a source is not finished.",
    body: [
      "Most of the systems I ship are retrieval problems wearing a chat interface. Clinical notes, enterprise docs, a knowledge base someone will argue with later.",
      "Hybrid search, a reranker, and a citation are the boring parts that decide whether the answer is usable. Semantic chunking helps. A page number helps more.",
      "At Intenso that work sits on Bedrock, Pinecone, and Chroma, with a reviewer step when the question is sensitive. The model is not the product. The grounded answer is.",
    ],
  },
  {
    slug: "ship-the-boring-version",
    title: "Ship the boring version",
    date: "September 2026",
    excerpt: "The interesting agent is rarely the one that should go out first.",
    body: [
      "There is a version of every agent project that is a diagram of five roles and a promise. There is another version that is an API, a log line, an allowlist, and a way for a person to stop it.",
      "I try to build the second one earlier than feels elegant. MCP tools, checkpointing, and a human gate on sensitive actions are less exciting than a new model name. They are what makes the system ownable.",
      "A simpler workflow you can monitor beats a clever one you cannot explain to the person who has to run it next month.",
    ],
  },
];

export function noteBySlug(slug: string) {
  return notes.find((n) => n.slug === slug);
}
