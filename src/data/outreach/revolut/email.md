Hi Nik,

An architectural review of Revolut's platform stack surfaced a key operational bottleneck under load.

Your stack relies on Java,  GCP,  PostgreSQL. Specifically, the pattern surrounding PostgreSQL scaling, GCP Kubernetes management presents a significant risk under load. Under peak scaling surges, postgresql scaling, gcp kubernetes management introduces severe latency degradation and cascading worker backpressure.

If unmitigated during peak traffic spikes, this issue directly causes service degradation and SLA breaches.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/revolut

Let me know if you're available for a brief technical discussion to review our architectural solutions.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com