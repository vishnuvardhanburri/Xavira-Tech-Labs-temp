Hi Rishi,

While analyzing OakNorth's backend service boundaries, a critical failure mode stood out.

Your stack relies on AWS,  React Native,  Python. Specifically, the pattern surrounding React Native performance, AWS infrastructure scaling presents a significant risk under load. Under peak scaling surges, react native performance, aws infrastructure scaling introduces severe latency degradation and cascading worker backpressure.

If unmitigated during peak traffic spikes, this issue directly causes service degradation and SLA breaches.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/oaknorth

Let me know if you're available for a brief technical discussion to review our architectural solutions.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com