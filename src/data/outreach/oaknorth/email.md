Hi Rishi,

While reviewing OakNorth's public system footprint... one specific observation stood out.

Your stack relies on AWS,  React Native,  Python. The pattern around React Native performance, AWS infrastructure scaling caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

If your platform team has already factored this into your topology, feel free to disregard.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/oaknorth

I'd appreciate your perspective when time permits.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com