Hi Lin,

While evaluating Fireworks AI's infrastructure signals... one specific observation stood out.

Your stack relies on C++,  Python,  CUDA. The pattern around multi-tenant LoRA adapter hot-swapping memory overhead and KV cache eviction policies caught my attention. In high-throughput environments, frequent LoRA adapter swaps introduce kernel launching overhead and CUDA memory fragmentation.

If your platform team has already factored this into your topology, feel free to disregard.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/fireworks-ai

I'd appreciate your perspective when time permits.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com