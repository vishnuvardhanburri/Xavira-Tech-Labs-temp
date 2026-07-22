Hi Avery,

While evaluating Tailscale's infrastructure signals... one specific observation stood out.

Your stack relies on Go,  WireGuard,  DERP Relay. The pattern around DERP relay server connection state memory allocation and NAT traversal state sync latency under mobile roaming caught my attention. In high-throughput environments, frequent peer route re-keying increases control plane state sync overhead.

If your platform team has already factored this into your topology, feel free to disregard.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/tailscale

I'd appreciate your perspective when time permits.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com