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
    summary: "Upload a PDF, search its FAISS index, and generate answers from retrieved passages. Streamlit, LangChain, and Mistral.",
  },
  {
    slug: "jobhunt",
    title: "JobHunt",
    year: "GitHub · Python",
    href: "https://github.com/dheerajbhukya7/JOBHUNT",
    summary: "AI-assisted job discovery, resume matching and human-reviewed application drafts.",
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
  {
    slug: "chunking-is-not-splitting",
    title: "Chunking is not splitting",
    date: "August 2026",
    excerpt: "How you cut a document is as important as which model reads it.",
    body: [
      "Early on I split documents by token count and called it chunking. The retrieval numbers were mediocre and I blamed the embeddings. The embeddings were fine. The chunks were wrong.",
      "A clinical guideline has sections. A legal contract has clauses. A chat transcript has turns. Splitting across those boundaries breaks the semantic unit the model needs to reason over. The chunk boundary is the first place retrieval fails.",
      "Semantic chunking — splitting on heading changes, paragraph boundaries, and sentence coherence scores — costs more at ingest time and pays back at query time. On the healthcare RAG system I moved from fixed-size to layout-aware parsing with a sliding window for overlap, and top-5 precision went up measurably without touching the retrieval stack.",
      "If retrieval is underperforming, look at the chunks before you tune the query.",
    ],
  },
  {
    slug: "reranking-earns-its-cost",
    title: "Reranking earns its cost",
    date: "July 2026",
    excerpt: "Approximate nearest-neighbour gets you candidates. A cross-encoder picks the answer.",
    body: [
      "Vector search is fast and approximate. It finds chunks that are near the query in embedding space, which is not the same as chunks that answer the question. The top result by cosine similarity is often the right topic but the wrong paragraph.",
      "A cross-encoder reranker reads the query and each candidate together and scores relevance directly. It is slower by an order of magnitude, which is why you run it over 20 candidates and return 3, not over the whole index.",
      "On every production RAG system I have shipped, adding a reranker after retrieval improved answer quality more than switching embedding models did. The retrieval stack is retrieval plus reranking. Treating them as one step is a common mistake.",
      "Cohere Rerank and BGE cross-encoders are both solid. The right choice depends on latency budget and whether you need a hosted API or a local model.",
    ],
  },
  {
    slug: "agents-need-a-stop-button",
    title: "Agents need a stop button",
    date: "June 2026",
    excerpt: "Autonomy without a brake is not a feature. It is a liability.",
    body: [
      "A multi-agent system that can read a database, call an API, and open a ticket can also do all three in the wrong order on the wrong record. The question is not whether that will happen. It is whether the person running the system can stop it when it does.",
      "Every agent I ship now has three things: a structured log of what it decided and why, an allowlist of actions it can take without asking, and a human gate for anything outside that list. The gate is not a fallback. It is part of the design.",
      "LangGraph makes checkpointing straightforward. MCP makes the tool boundary explicit. Neither is magic. They give you natural places to pause and ask before continuing.",
      "The teams that resist adding a stop button because it slows the agent down are the same teams that rebuild the system after it runs unchecked. Build the brake first.",
    ],
  },
  {
    slug: "rag-is-an-architecture-not-a-feature",
    title: "RAG is an architecture, not a feature",
    date: "May 2026",
    excerpt: "Bolting retrieval onto a prompt is not the same as building a retrieval system.",
    body: [
      "I have seen RAG described as 'just add a vector search call before the prompt'. That framing produces systems that work in demos and fail in production. The retrieval is the hard part.",
      "A real retrieval architecture has an ingest pipeline that handles format diversity — PDF, HTML, structured data — and produces clean, well-chunked, correctly embedded documents. It has a query layer with hybrid search, filters, and a reranker. It has observability so you know which queries fail and why.",
      "The model at the end is the smallest piece of work. I have shipped systems where swapping the LLM made almost no difference to answer quality because the retrieval was already well-tuned. I have also shipped systems where a better model did nothing for a broken retrieval layer.",
      "Design the retrieval first. The model can come later.",
    ],
  },
  {
    slug: "embeddings-have-a-vocabulary",
    title: "Embeddings have a vocabulary",
    date: "April 2026",
    excerpt: "A model trained on web text does not automatically understand your domain.",
    body: [
      "General-purpose embedding models are trained on broad corpora. They are good at general semantic similarity and worse at domain-specific terminology where a word means something precise — a drug name, a contract clause, a system error code.",
      "On the healthcare project, early retrieval missed queries that used clinical shorthand because the embeddings mapped those terms near unrelated general uses. Adding a domain-adapted model — fine-tuned on a small set of in-domain pairs — closed most of the gap.",
      "Fine-tuning embeddings is not always necessary. Hybrid search with BM25 handles exact and rare terms well and is often enough. But knowing where your embedding model was trained and what its vocabulary covers is not optional knowledge. It shapes every retrieval decision downstream.",
      "Test your embeddings on the actual queries your users will ask, not a generic benchmark. The benchmark measures a different vocabulary.",
    ],
  },
  {
    slug: "mlflow-is-not-optional",
    title: "MLflow is not optional",
    date: "March 2026",
    excerpt: "If you cannot reproduce a run, you cannot trust the result.",
    body: [
      "Early in my career I kept experiment results in a spreadsheet. Run number, parameters, metric. It worked until the spreadsheet had forty rows and I could not remember which code version matched run 23.",
      "MLflow stores the run, the parameters, the metrics, and the artifact together. When a model in production degrades and you need to roll back or retrain, you do not guess which checkpoint to use. You look it up.",
      "At Unizen I added drift monitoring on top: a scheduled job that scores recent predictions against a held-out slice and logs the result as a new MLflow run. When the metric crosses a threshold, an alert fires. The model does not silently get worse.",
      "Tracking is not overhead. It is the difference between a system you operate and one you merely hope is still working.",
    ],
  },
];

export function noteBySlug(slug: string) {
  return notes.find((n) => n.slug === slug);
}
