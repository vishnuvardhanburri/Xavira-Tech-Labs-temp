Hi Hiroki,

In analyzing GoCardless's backend infrastructure footprint... one specific observation stood out.

Your stack relies on Ruby on Rails,  Next.js,  Go. The pattern around Ruby on Rails monolithic scaling, PostgreSQL database locks caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

If your platform team has already factored this into your topology, feel free to disregard.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/gocardless

I'd appreciate your perspective when time permits.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com