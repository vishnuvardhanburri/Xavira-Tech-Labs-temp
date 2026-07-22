Hi Christophe,

Looking into the technical stack at Camber Health... one specific observation stood out.

Your stack relies on Node.js,  TypeScript,  React. The pattern around PostgreSQL query overloads caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

You may already have mitigated this at the proxy or caching tier.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/camber-health

Happy to be corrected if my reading of your architecture is off.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com