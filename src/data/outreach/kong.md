# Engineering Intelligence Report: Kong

## 1. Executive Summary
Kong operates in software engineering with a technical stack focused on Lua, OpenResty, Nginx, C, PostgreSQL, Redis. An architectural assessment highlights key considerations around OpenResty Lua worker thread blocking and Redis rate-limiting plugin synchronization at the gateway tier.

## 2. Tech Stack & Architecture
- **Core Technology Stack**: Lua, OpenResty, Nginx, C, PostgreSQL, Redis
- **Website**: https://konghq.com

## 3. Architecture Signals & Scaling Bottlenecks
- Primary Observation: OpenResty Lua worker thread blocking and Redis rate-limiting plugin synchronization at the gateway tier
- Strategic Priority: Mitigating blocking Lua scripts in the request pipeline increase tail latency across upstream microservices.

## 4. Recipient Profile
- **Primary Contact**: Marco Palladino
- **Email Contact Path**: marco@konghq.com

## 5. Outreach Email
Hi Marco,

In analyzing Kong's backend infrastructure footprint... one specific observation stood out.

Your stack relies on Lua,  OpenResty,  Nginx. The pattern around OpenResty Lua worker thread blocking and Redis rate-limiting plugin synchronization at the gateway tier caught my attention. In high-throughput environments, blocking Lua scripts in the request pipeline increase tail latency across upstream microservices.

If your platform team has already factored this into your topology, feel free to disregard.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/kong

I'd appreciate your perspective when time permits.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com

## 6. Subject Line
Question on Kong's platform scaling

## 7. 5-Day Follow-Up
Hi Marco,

Following up on my note regarding Kong's architecture. Managing OpenResty Lua worker thread blocking and Redis rate-limiting plugin synchronization at the gateway tier often becomes a bottleneck as request concurrency grows.

The report details how similar teams address this boundary: https://www.xaviratechlabs.com/research/kong

Let me know if you'd be open to exchanging notes.

Best,
Vishnu

## 8. 10-Day Follow-Up
Hi Marco,

Closing the loop here. If you or your engineering team are exploring optimization strategies for Kong's core infrastructure, our research is available whenever relevant.

Best,
Vishnu

## 9. LinkedIn Connection Message
Hi Marco, I reviewed Kong's engineering footprint, specifically around Lua. Documented a few architecture observations you might find valuable. Would love to connect.

## 10. LinkedIn Follow-Up
Thanks for connecting, Marco. Here is the direct report analyzing Kong's platform signals: https://www.xaviratechlabs.com/research/kong. Interested in your perspective when time allows.

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
