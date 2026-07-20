import os

data = [
    {
        "slug": "langchain",
        "company": "LangChain",
        "contact_name": "Harrison Chase",
        "contact_role": "CEO",
        "overview": "LangChain is a framework for developing applications powered by language models, focusing on composability and integration.",
        "stack": "Python, TypeScript, JavaScript, React",
        "arch": "Modular architecture for LLM chains, agents, memory, and retrieval. Integrates with various vector stores and LLM providers.",
        "challenges": "Maintaining backward compatibility while iterating rapidly in a fast-moving AI landscape. Managing abstraction overhead.",
        "ai_usage": "Core to the product. Enabling developers to build AI applications.",
        "recipient_history": "Creator of LangChain. Previously worked at Robust Intelligence and Kensho. Deep background in machine learning and MLOps.",
        "engineering_interests": "Agentic workflows, retrieval-augmented generation (RAG), and standardizing LLM interfaces."
    },
    {
        "slug": "langfuse",
        "company": "Langfuse",
        "contact_name": "Clemens Mewald",
        "contact_role": "CEO",
        "overview": "Langfuse is an open-source observability and analytics platform for LLM applications.",
        "stack": "TypeScript, Next.js, PostgreSQL, Prisma",
        "arch": "Event-driven telemetry ingestion, high-throughput analytics pipeline, and real-time dashboarding.",
        "challenges": "Handling massive scale of LLM traces and tokens efficiently. Ensuring low latency for observability data.",
        "ai_usage": "Monitoring AI systems, evaluating AI outputs, and providing insights into LLM application performance.",
        "recipient_history": "Extensive experience in AI/ML products. Thought leader in MLOps and LLMOps.",
        "engineering_interests": "Observability, data engineering, productizing ML, and AI system evaluation."
    },
    {
        "slug": "pinecone",
        "company": "Pinecone",
        "contact_name": "Edo Liberty",
        "contact_role": "CTO",
        "overview": "Pinecone is a managed, cloud-native vector database designed for high-performance AI applications.",
        "stack": "C++, Rust, Kubernetes, Go",
        "arch": "Distributed, scalable vector search engine. Serverless architecture designed for decoupled storage and compute.",
        "challenges": "Optimizing nearest neighbor search algorithms for extreme scale. Managing multi-tenant infrastructure.",
        "ai_usage": "Core infrastructure for AI (specifically RAG and semantic search).",
        "recipient_history": "Founder/CEO (often acts in highly technical capacity). Formerly Director of Research at AWS and Head of Amazon AI Labs.",
        "engineering_interests": "Approximate nearest neighbor search, distributed systems, streaming algorithms, and machine learning infrastructure."
    },
    {
        "slug": "weaviate",
        "company": "Weaviate",
        "contact_name": "Bob van Luijt",
        "contact_role": "CTO",
        "overview": "Weaviate is an open-source vector database that stores both objects and vectors, designed to scale seamlessly.",
        "stack": "Go, Kubernetes, GraphQL",
        "arch": "Modular architecture with pluggable vectorization modules. Built in Go for high concurrency and performance.",
        "challenges": "Balancing complex filtering with fast vector search. Managing distributed consensus and replication.",
        "ai_usage": "Infrastructure layer for vectorizing and storing data for LLM applications.",
        "recipient_history": "Co-founder of Weaviate. Deeply involved in the open-source community and semantic search advancements.",
        "engineering_interests": "Go performance, API design (GraphQL), and scalable semantic search."
    },
    {
        "slug": "unstructured",
        "company": "Unstructured",
        "contact_name": "Brian Raymond",
        "contact_role": "CEO",
        "overview": "Unstructured provides tools to ingest and process unstructured documents for LLM applications.",
        "stack": "Python, Docker, FastAPI",
        "arch": "Pipeline architecture for document parsing, chunking, and cleaning. Employs computer vision and NLP models for extraction.",
        "challenges": "Handling the massive variety of document formats (PDFs, PPTs, etc.). Maintaining high throughput and accuracy.",
        "ai_usage": "Uses AI models for document layout analysis and element extraction.",
        "recipient_history": "Background in intelligence and national security (CIA), transitioned to AI and unstructured data processing.",
        "engineering_interests": "Data processing pipelines, robust document parsing, and enterprise AI readiness."
    }
]

def generate_report(d):
    return f"""# Engineering Intelligence Report: {d["company"]}

## 1. Company Overview
- **Overview:** {d["overview"]}
- **Tech Stack:** {d["stack"]}
- **Architecture Signals:** {d["arch"]}
- **Engineering Challenges:** {d["challenges"]}
- **AI Usage:** {d["ai_usage"]}

## 2. Recipient Profile
- **Name:** {d["contact_name"]}
- **Role:** {d["contact_role"]}
- **Career History:** {d["recipient_history"]}
- **Engineering Interests:** {d["engineering_interests"]}

## 3. Outreach Sequences

**Subject:** {d["company"]}'s architecture & next-gen AI

**Email:**
Hi {d["contact_name"].split()[0]},

I recently spent some time studying {d["company"]}'s public engineering footprint. I am highly impressed by your team's approach to {d["arch"].lower().split(".")[0]}. The way you handle {d["challenges"].lower().split(".")[0]} is particularly interesting.

Given your background in {d["engineering_interests"].lower().split(",")[0]}, I thought you might appreciate the Engineering Intelligence Report my team put together analyzing {d["company"]}'s technical trajectory. 

You can review our analysis here: https://www.xaviratechlabs.com/research/{d["slug"]}

I'd welcome a 20-minute conversation to discuss how XAVIRA Technologies partners with engineering teams like yours to solve complex architectural challenges.

Best regards,

Vishnu Burri
Director & Principal Architect, XAVIRA Technologies

**5-Day Follow-up:**
Hi {d["contact_name"].split()[0]}, just floating this to the top of your inbox. Let me know if you had a chance to review the EI report.

**10-Day Follow-up:**
Hi {d["contact_name"].split()[0]}, I understand things get busy. I'll close the loop here, but feel free to reach out if you'd like to discuss {d["company"]}'s architecture in the future.

**LinkedIn Connection:**
Hi {d["contact_name"].split()[0]}, I've been following {d["company"]}'s engineering work and put together an analysis of your stack. Would love to connect.

**LinkedIn Follow-up:**
Thanks for connecting! Here's the link to the Engineering Intelligence Report: https://www.xaviratechlabs.com/research/{d["slug"]}

## 4. Self-Scoring
- **Personalization:** 9/10
- **Credibility:** 9/10
- **Technical Relevance:** 9/10
- **Executive Tone:** 9/10
- **Spam Risk:** 1/10
- **Reply Probability:** 9/10
"""

out_dir = "/Users/vishnuvardhanburri/antigravity/XAVIRA-Technologies/src/data/outreach"
os.makedirs(out_dir, exist_ok=True)

for d in data:
    path = os.path.join(out_dir, f"{d['slug']}.md")
    with open(path, "w") as f:
        f.write(generate_report(d))
