export interface KnowledgeChunk {
  id: string
  content: string
}

export const KNOWLEDGE_CHUNKS: KnowledgeChunk[] = [
  {
    id: 'arcai-company',
    content: `ArcAI is a company that helps small and medium-sized enterprises (SMEs) deploy powerful, customized AI assistants — from intelligent chatbots to full workflow automation — without the enterprise price tag. Founded on the belief that powerful AI should not be exclusive to large enterprises. Small and medium-sized businesses deserve the same capabilities without the six-figure consulting bill.`,
  },
  {
    id: 'arcai-mission-values',
    content: `ArcAI's mission: make enterprise-grade AI accessible and practical for every SME — safe, accurate, and genuinely useful from day one. Core values: (1) Built for real businesses — tools that work in the messy reality of SME operations, not idealized enterprise scenarios. (2) Safety first — guardrails prevent hallucinations, protect sensitive data, keep AI behavior predictable and auditable. (3) Radical simplicity — configure in hours, maintained by anyone on the team without an AI background. (4) Honest partnerships — we tell clients when AI is not the right tool.`,
  },
  {
    id: 'arcbot-family-overview',
    content: `ArcBot is ArcAI's flagship conversational AI product, available in three editions: ArcBot Basic (available now), ArcBot Mega (coming soon), and ArcBot Agent (coming soon). All editions share the same battle-tested RAG core. ArcBot handles customer inquiries, internal support tickets, and knowledge retrieval with precision and safety for SMEs.`,
  },
  {
    id: 'arcbot-basic-overview',
    content: `ArcBot Basic is available now. It is a production-grade AI chatbot built on a rigorously evaluated RAG pipeline, designed for SMEs. It deploys on your company knowledge base — FAQs, product manuals, internal wikis, HR policies — and returns accurate, source-grounded answers. Supports customer service, internal help desk, and sales assistant use cases.`,
  },
  {
    id: 'arcbot-basic-hybrid-search',
    content: `ArcBot Basic uses Hybrid Search — combining Dense Search (semantic vector embeddings that find conceptually similar content) with Sparse Search (BM25 keyword matching that excels at exact terms). Neither method alone is sufficient: dense search misses precise keywords; BM25 misses semantic meaning. Combining both produces best-of-both-worlds retrieval that never misses relevant content.`,
  },
  {
    id: 'arcbot-basic-reranking',
    content: `ArcBot Basic performs Cross-Encoder Reranking after the initial retrieval step. The hybrid search retrieves the top 50–100 candidate chunks. A Cross-Encoder model — BGE-Reranker or Cohere Rerank — then re-evaluates every candidate chunk against the exact user query. This reranking step dramatically improves answer relevance by promoting the most precisely matching passages and demoting noisy ones before generation.`,
  },
  {
    id: 'arcbot-basic-graphrag',
    content: `ArcBot Basic uses GraphRAG — a Knowledge Graph layer on top of vector search. While flat vector search treats every chunk independently, GraphRAG maps entity relationships and document structure. This enables multi-hop reasoning: answering questions that require connecting information from multiple documents, sections, or concepts. For example, understanding that a policy change affects a specific role, which is referenced in a separate onboarding document.`,
  },
  {
    id: 'arcbot-basic-safety',
    content: `ArcBot Basic includes multi-layer Safety & Guardrails: (1) content moderation to block harmful outputs, (2) prompt injection detection to prevent adversarial manipulation, (3) PII redaction to protect personal data, (4) hallucination suppression that grounds every answer in retrieved source documents. Every response is on-brand and factually grounded. Off-topic or unsafe requests are handled gracefully without exposing system internals.`,
  },
  {
    id: 'arcbot-basic-security-scale',
    content: `ArcBot Basic provides Enterprise Security & Scale: AES-256 encryption at rest and in transit, strict tenant data isolation (your data is never mixed with other clients), SOC-2-aligned audit logging for compliance reporting, and horizontal scaling to handle millions of document chunks. Suitable for businesses with large document repositories and strict regulatory or compliance requirements.`,
  },
  {
    id: 'arcbot-basic-accuracy-evaluation',
    content: `ArcBot Basic is benchmarked with RAGAS (Retrieval Augmented Generation Assessment) before every deployment: Answer Correctness measures factual accuracy of responses, Context Recall measures whether all relevant information was retrieved, Faithfulness measures whether the answer is grounded in retrieved context without hallucination. Clients receive these benchmark scores before go-live — measurable evidence the system works, not just a demo.`,
  },
  {
    id: 'arcbot-mega',
    content: `ArcBot Mega is coming soon. It includes everything in ArcBot Basic, plus: multi-format document ingestion (PDF, Word, Excel, HTML, scanned images via OCR, and more), domain-specific fine-tuning on specialized industry vocabulary (legal, medical, finance, manufacturing), custom embedding models trained per client for maximum domain accuracy, optimized vector stores for million-document scale, and a state-of-the-art LLM backbone at the highest capability tier. Ideal for enterprises with diverse document formats and specialized terminology.`,
  },
  {
    id: 'arcbot-agent',
    content: `ArcBot Agent is coming soon. It includes everything in ArcBot Mega, plus full agentic capabilities: autonomous multi-step planning and task execution, tool use (web search, REST API calls, code execution, database queries), real-time external data retrieval beyond the static knowledge base, human-in-the-loop escalation controls for sensitive decisions, and a full immutable audit trail of every agent action for compliance. Ideal for complex workflows requiring AI to take actions, not just answer questions.`,
  },
  {
    id: 'arcflow-overview-features',
    content: `ArcFlow is ArcAI's AI workflow automation platform (coming soon). It connects CRM, email, Slack, ERP, and other business tools, then orchestrates multi-step automated processes. Features: visual workflow builder with branching conditional logic, pre-built connectors for Salesforce, HubSpot, Gmail, Slack, Notion, Jira, and 100+ tools, smart triggers (schedules, webhooks, email events, form submissions, AI-detected signals), role-based access control, automatic retries and fallback paths, human-in-the-loop escalation, and real-time performance analytics.`,
  },
  {
    id: 'use-cases',
    content: `ArcBot use cases: Customer Service (replace tier-1 support, resolves 80% of queries instantly, 24/7), Internal Help Desk (employees instantly query HR policies, IT procedures, company guidelines), Sales Assistant (qualify leads, answer product questions, book demo calls automatically). ArcFlow use cases: lead nurturing automation, invoice data extraction and approval routing, employee onboarding account provisioning and task assignment.`,
  },
  {
    id: 'pricing-contact',
    content: `ArcAI pricing is customized per business based on data scale, document volume, number of users, and required features. There is no fixed public pricing — each engagement is scoped to the client's specific needs and budget. To get a quote or explore options, contact ArcAI at hello@arcai.io (typical reply under 24 hours) or fill out the contact form at /contact. ArcAI works closely with every client to build a solution that fits their reality.`,
  },
]
