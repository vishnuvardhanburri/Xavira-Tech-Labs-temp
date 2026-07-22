Hi Samar,

Analyzing the service boundaries across Temporal's stack... one specific observation stood out.

Your stack relies on Go,  Java,  TypeScript. The pattern around workflow execution history event payload accumulation and persistence layer write amplification caught my attention. In high-throughput environments, bloated event histories spike workflow cache eviction rates and increase persistence latency.

If this is an intentional design boundary within your current roadmap, ignore this note.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/temporal

Interested in your thoughts if you have a moment.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com