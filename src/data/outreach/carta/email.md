Hi Henry,

A technical assessment of Carta's service topology indicates... one specific observation stood out.

Your stack relies on ReactJS,  Java,  Python. The pattern around Data scaling issues, secondary sales infrastructure caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

This may already be an intentional architectural tradeoff to maintain system simplicity.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/carta

Curious whether I've interpreted this correctly.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com