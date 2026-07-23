Hi Avery,

An architectural review of Tailscale's platform stack surfaced a key operational bottleneck under load.

Your stack relies on Go,  WireGuard,  DERP Relay. Specifically, the pattern surrounding DERP relay server connection state memory allocation and NAT traversal state sync latency under mobile roaming presents a significant risk under load. Frequent peer route re-keying increases control plane memory consumption and disrupts connection handshakes.

If unmitigated during peak traffic spikes, this issue directly causes service degradation and SLA breaches.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/tailscale

Let me know if you're available for a brief technical discussion to review our architectural solutions.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com