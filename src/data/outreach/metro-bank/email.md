Hi Daniel,

A technical assessment of Metro Bank's service topology indicates... one specific observation stood out.

Your stack relies on Temenos T24,  scikit-learn,  ServiceNow. The pattern around Temenos T24 legacy integration, NoSQL data consistency caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

This may already be an intentional architectural tradeoff to maintain system simplicity.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/metro-bank

Curious whether I've interpreted this correctly.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com