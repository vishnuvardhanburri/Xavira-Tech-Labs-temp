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