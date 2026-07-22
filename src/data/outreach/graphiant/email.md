Hi Ali,

In examining Graphiant's core backend configuration... one specific observation stood out.

Your stack relies on HashiCorp Consul,  Amazon CloudFront,  Angular. The pattern around HashiCorp Consul, Amazon CloudFront, Angular, jQuery, Go (Needs technical diagnosis) caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

You may already have mitigated this at the proxy or caching tier.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/graphiant

Happy to be corrected if my reading of your architecture is off.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com