Hi Erik,

In analyzing Modal's backend infrastructure footprint... one specific observation stood out.

Your stack relies on Python,  Rust,  C++. The pattern around serverless Python micro-VM container image layer caching and GPU CUDA stream initialization overhead caught my attention. In high-throughput environments, cold-start latency on GPU worker allocations impacts real-time inference workloads.

If your platform team has already factored this into your topology, feel free to disregard.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/modal

I'd appreciate your perspective when time permits.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com