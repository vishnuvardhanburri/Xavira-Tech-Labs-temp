Hi Ce,

A review of Together AI's distributed system signals highlighted... one specific observation stood out.

Your stack relies on Python,  C++,  CUDA. The pattern around FlashAttention kernel memory allocation and GPU cluster inter-node communication bandwidth bottlenecks caught my attention. In high-throughput environments, inter-node tensor parallelism communication latency reduces GPU compute utilization during training.

If this is an intentional design boundary within your current roadmap, ignore this note.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/together-ai

Interested in your thoughts if you have a moment.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com