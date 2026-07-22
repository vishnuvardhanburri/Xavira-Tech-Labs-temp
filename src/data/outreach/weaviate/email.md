Hi Bob,

Evaluating Weaviate's platform architecture signals... one specific observation stood out.

Your stack relies on Go,  C++,  HNSW. The pattern around Vector HNSW index memory compaction pauses and GraphQL object payload serialization overhead caught my attention. In high-throughput environments, memory compaction during batch imports introduces search query stutter.

If this is an intentional design boundary within your current roadmap, ignore this note.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/weaviate

Interested in your thoughts if you have a moment.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com