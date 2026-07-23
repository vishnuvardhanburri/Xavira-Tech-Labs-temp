Hi Hiroki,

An architectural review of GoCardless's platform stack surfaced a key operational bottleneck under load.

Your stack relies on Ruby on Rails,  Next.js,  Go. Specifically, the pattern surrounding Ruby on Rails monolithic scaling, PostgreSQL database locks presents a significant risk under load. Under peak scaling surges, ruby on rails monolithic scaling, postgresql database locks introduces severe latency degradation and cascading worker backpressure.

If unmitigated during peak traffic spikes, this issue directly causes service degradation and SLA breaches.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/gocardless

Let me know if you're available for a brief technical discussion to review our architectural solutions.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com