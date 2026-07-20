# Engineering Intelligence Report: Convex

## 1. Company Research
**Overview:** Convex is a reactive, serverless backend-as-a-service platform that eliminates infrastructure management for full-stack applications.
**Stack & Architecture:** Custom transactional database in Rust. TypeScript-first integration. Reactive execution model (queries are pure functions pushed to clients). Tantivy for full-text search, native auth, scheduling.
**Challenges:** Scaling a unified state management system while maintaining ACID guarantees and developer simplicity.

## 2. Recipient Research
**Name:** James Cowling, Co-founder & CEO (formerly CTO).
**Background:** PhD from MIT under Barbara Liskov. Ex-Dropbox senior engineer who led the migration off S3. Deep focus on distributed systems, exabyte-scale storage, and elegant abstractions for product developers.

## 3. Engineering Intelligence Summary
**Exec Summary:** Convex provides a strongly consistent, reactive backend via a custom Rust database and a unified TypeScript interface. 
**Architecture Signals:** Focus on eliminating backend glue code through seamless, reactive data syncing and serverless execution.

## 4. Outreach Email
Hi James,

I recently spent some time studying Convex's public engineering footprint. Your architectural choice to build a custom transactional database in Rust, combined with the reactive execution model for pure function queries, is a fascinating approach to eliminating backend glue code. Given your work migrating Dropbox off S3, it’s clear why Convex prioritizes elegant abstractions backed by rigorous distributed systems safety. 

I put together an Engineering Intelligence Report analyzing Convex’s stack and some observations on how high-performance infrastructure teams scale unified state management environments:
https://www.xaviratechlabs.com/research/convex

I’d welcome a 20-minute conversation to discuss these architectural patterns and explore if there are any mutual areas of engineering alignment. 

Best,
Vishnu Burri
Director & Principal Architect, XAVIRA Technologies

## 5. Sequences
**Subject Line:** Convex's Rust database architecture / Engineering Intelligence
**5-day Follow-up:** Hi James, just floating this to the top. I’d love to hear your thoughts on the report regarding Convex's reactive execution model.
**10-day Follow-up:** James - I'll stop reaching out here, but I’ll keep following Convex’s progress. The report link remains active if you’d like to review it later.
**LinkedIn Connection:** Hi James, I was researching Convex’s architecture and really appreciated your approach to building the custom Rust database. I wrote an engineering report on your stack and would love to connect.
**LinkedIn Follow-up:** Thanks for connecting. Here is the report on Convex's architecture I mentioned: https://www.xaviratechlabs.com/research/convex. Let me know if you’d like to chat.

## 6. Scoring
- Personalization: 10/10
- Credibility: 10/10
- Technical Relevance: 10/10
- Executive Tone: 10/10
- Spam Risk: 1/10
- Reply Probability: 9/10

## Sources
- https://convex.dev
- https://jamescowling.dev
- Software Engineering Daily / Grokipedia Summaries
