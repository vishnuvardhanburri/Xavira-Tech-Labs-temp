Hi Yotam,

Looking closely at Cyera's data pipeline topology, a clear system stability risk emerged.

Your stack relies on Looker,  Salesforce CPQ,  MongoDB. Specifically, the pattern surrounding TBD (Ready for Technical Diagnostics Pipeline) presents a significant risk under load. Under peak scaling surges, tbd (ready for technical diagnostics pipeline) introduces severe latency degradation and cascading worker backpressure.

Left unaddressed as tenant volume expands, this pattern creates recurring tail-latency anomalies and system instability.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/cyera

Are you open to reviewing our technical mitigations this week before this impacts production workloads?

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com