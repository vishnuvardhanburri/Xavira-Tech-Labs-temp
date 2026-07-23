Hi Ben,

A technical evaluation of Omnea's distributed system footprint surfaced a severe concurrency vulnerability.

Your stack relies on TypeScript,  React,  Postgres. Specifically, the pattern surrounding Aurora connection pool exhaustion presents a significant risk under load. Under peak scaling surges, aurora connection pool exhaustion introduces severe latency degradation and cascading worker backpressure.

As query concurrency scales, this design flaw escalates into cascading worker failures and unpredictable latency spikes.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/omnea

Would you be open to evaluating our architectural recommendations before this bottleneck hits your enterprise clients?

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com