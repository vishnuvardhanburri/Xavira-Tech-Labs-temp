Hi Mark,

While evaluating ClearBank's infrastructure signals... one specific observation stood out.

Your stack relies on Hotjar,  Tableau,  Azure Active Directory. The pattern around TBD (Ready for Technical Diagnostics Pipeline) caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

If your platform team has already factored this into your topology, feel free to disregard.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/clearbank

I'd appreciate your perspective when time permits.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com