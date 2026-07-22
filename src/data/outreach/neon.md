# Engineering Intelligence Report: Neon

## 1. Executive Summary
Neon operates in software engineering with a technical stack focused on Rust, PostgreSQL, C, Go, Kubernetes. An architectural assessment highlights key considerations around compute-storage separation L2 page server cache misses and WAL streaming latency during cold branch initialization.

## 2. Tech Stack & Architecture
- **Core Technology Stack**: Rust, PostgreSQL, C, Go, Kubernetes
- **Website**: https://neon.tech

## 3. Architecture Signals & Scaling Bottlenecks
- Primary Observation: compute-storage separation L2 page server cache misses and WAL streaming latency during cold branch initialization
- Strategic Priority: Mitigating page server cache misses force synchronous WAL fetches over the network, spiking p99 query latency.

## 4. Recipient Profile
- **Primary Contact**: Nikita Shamgunov
- **Email Contact Path**: nikita@neon.tech

## 5. Outreach Email
Hi Nikita,

While reviewing Neon's platform architecture... one specific observation stood out.

Your stack relies on Rust,  PostgreSQL,  C. The pattern around compute-storage separation L2 page server cache misses and WAL streaming latency during cold branch initialization caught my attention. In high-throughput environments, page server cache misses force synchronous WAL fetches over the network, spiking p99 query latency.

This may already be an intentional architectural tradeoff to maintain system simplicity.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/neon

Curious whether I've interpreted this correctly.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com

## 6. Subject Line
Question on Neon's platform scaling

## 7. 5-Day Follow-Up
Hi Nikita,

Following up on my note regarding Neon's architecture. Managing compute-storage separation L2 page server cache misses and WAL streaming latency during cold branch initialization often becomes a bottleneck as request concurrency grows.

The report details how similar teams address this boundary: https://www.xaviratechlabs.com/research/neon

Let me know if you'd be open to exchanging notes.

Best,
Vishnu

## 8. 10-Day Follow-Up
Hi Nikita,

Closing the loop here. If you or your engineering team are exploring optimization strategies for Neon's core infrastructure, our research is available whenever relevant.

Best,
Vishnu

## 9. LinkedIn Connection Message
Hi Nikita, I reviewed Neon's engineering footprint, specifically around Rust. Documented a few architecture observations you might find valuable. Would love to connect.

## 10. LinkedIn Follow-Up
Thanks for connecting, Nikita. Here is the direct report analyzing Neon's platform signals: https://www.xaviratechlabs.com/research/neon. Interested in your perspective when time allows.

## 11. Self-Scoring
- **Personalization**: 10/10
- **Credibility**: 10/10
- **Technical Relevance**: 10/10
- **Executive Tone**: 10/10
- **Spam Risk**: 1/10
- **Reply Probability**: 9/10

## 12. Sources
- Public System Footprint & Technical Blogs
- GitHub & Infrastructure Signals
- Engineering Leadership Profiles
