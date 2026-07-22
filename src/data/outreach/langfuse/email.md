Hi Clemens,

While reviewing Langfuse's public system footprint... one specific observation stood out.

Your stack relies on TypeScript,  Next.js,  PostgreSQL. The pattern around LLM observability trace ingestion queue backpressure and ClickHouse log aggregation batch flushes caught my attention. In high-throughput environments, high-frequency span ingestion buffers stall API Gateway throughput under heavy LLM production traffic.

If your platform team has already factored this into your topology, feel free to disregard.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/langfuse

I'd appreciate your perspective when time permits.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com