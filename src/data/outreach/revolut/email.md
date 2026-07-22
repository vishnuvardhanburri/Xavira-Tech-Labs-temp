Hi Nik,

While evaluating Revolut's infrastructure signals... one specific observation stood out.

Your stack relies on Java,  GCP,  PostgreSQL. The pattern around PostgreSQL scaling, GCP Kubernetes management caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

If your platform team has already factored this into your topology, feel free to disregard.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/revolut

I'd appreciate your perspective when time permits.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com