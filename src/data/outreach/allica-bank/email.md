Hi Richard,

In examining Allica Bank's core backend configuration... one specific observation stood out.

Your stack relies on Azure,  Spring Boot,  Kotlin. The pattern around Azure Spring Cloud scaling, Kotlin/Spring Boot performance caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

You may already have mitigated this at the proxy or caching tier.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/allica-bank

Happy to be corrected if my reading of your architecture is off.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com