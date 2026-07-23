Hi Daniel,

Examining Metro Bank's core infrastructure topology revealed an urgent scaling bottleneck.

Your stack relies on Temenos T24,  scikit-learn,  ServiceNow. Specifically, the pattern surrounding Temenos T24 legacy integration, NoSQL data consistency presents a significant risk under load. Under peak scaling surges, temenos t24 legacy integration, nosql data consistency introduces severe latency degradation and cascading worker backpressure.

Left unaddressed as tenant volume expands, this pattern creates recurring tail-latency anomalies and system instability.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/metro-bank

Are you open to reviewing our technical mitigations this week before this impacts production workloads?

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com