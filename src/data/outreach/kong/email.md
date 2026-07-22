Hi Marco,

In analyzing Kong's backend infrastructure footprint... one specific observation stood out.

Your stack relies on Lua,  OpenResty,  Nginx. The pattern around OpenResty Lua worker thread blocking and Redis rate-limiting plugin synchronization at the gateway tier caught my attention. In high-throughput environments, blocking Lua scripts in the request pipeline increase tail latency across upstream microservices.

If your platform team has already factored this into your topology, feel free to disregard.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/kong

I'd appreciate your perspective when time permits.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com