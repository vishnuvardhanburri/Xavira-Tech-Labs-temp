Hi Daniel,

In reviewing SumUp's system architecture footprint... one specific observation stood out.

Your stack relies on AWS,  Kubernetes,  Kotlin. The pattern around Kafka stream processing, Kubernetes pod scaling caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

You may already have mitigated this at the proxy or caching tier.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/sumup

Happy to be corrected if my reading of your architecture is off.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com