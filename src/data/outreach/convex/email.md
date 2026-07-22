Hi James,

A review of Convex's distributed system signals highlighted... one specific observation stood out.

Your stack relies on TypeScript,  Rust,  Node.js. The pattern around deterministic TypeScript mutation engine transaction retries under heavy write contention caught my attention. In high-throughput environments, optimistic concurrency control retries escalate CPU overhead when multiple clients write to the same table keys.

If this is an intentional design boundary within your current roadmap, ignore this note.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/convex

Interested in your thoughts if you have a moment.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com