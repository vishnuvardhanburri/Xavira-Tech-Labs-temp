Hi Daniel,

Evaluating SumUp's backend services identified a critical throughput constraint in your current architecture.

Your stack relies on AWS,  Kubernetes,  Kotlin. Specifically, the pattern surrounding Kafka stream processing, Kubernetes pod scaling presents a significant risk under load. Under peak scaling surges, kafka stream processing, kubernetes pod scaling introduces severe latency degradation and cascading worker backpressure.

Without proper boundary isolation, this bottleneck degrades overall cluster throughput and inflates cloud infrastructure costs.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/sumup

Are you available for a 15-minute briefing to go over these findings with your platform team?

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com