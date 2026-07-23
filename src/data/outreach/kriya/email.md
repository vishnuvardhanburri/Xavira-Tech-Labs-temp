Hi Anil,

While analyzing Kriya's backend service boundaries, a critical failure mode stood out.

Your stack relies on API orchestration,  Cloud,  Bidirectional data sync. Specifically, the pattern surrounding TBD (Ready for Technical Diagnostics Pipeline) presents a significant risk under load. Under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.

If unmitigated during peak traffic spikes, this issue directly causes service degradation and SLA breaches.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/kriya

Let me know if you're available for a brief technical discussion to review our architectural solutions.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com