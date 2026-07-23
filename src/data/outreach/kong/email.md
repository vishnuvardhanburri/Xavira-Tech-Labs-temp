Hi Marco,

While analyzing Kong's backend service boundaries, a critical failure mode stood out.

Your stack relies on Lua,  OpenResty,  Nginx. Specifically, the pattern surrounding OpenResty Lua worker thread blocking and Redis rate-limiting plugin synchronization at the gateway tier presents a significant risk under load. Blocking Lua scripts in the request execution pipeline introduce severe tail latency across upstream microservices.

If unmitigated during peak traffic spikes, this issue directly causes service degradation and SLA breaches.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/kong

Let me know if you're available for a brief technical discussion to review our architectural solutions.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com