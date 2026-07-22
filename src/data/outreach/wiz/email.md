Hi Ami,

In reviewing Wiz's system architecture footprint... one specific observation stood out.

Your stack relies on Go,  Python,  React. The pattern around cloud asset relationship graph traversal query latency and multi-tenant security event correlation caught my attention. In high-throughput environments, deep graph traversals across millions of cloud resources introduce query timeouts in security dashboards.

You may already have mitigated this at the proxy or caching tier.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/wiz

Happy to be corrected if my reading of your architecture is off.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com