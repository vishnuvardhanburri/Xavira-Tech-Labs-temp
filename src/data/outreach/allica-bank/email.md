Hi Richard,

Reviewing Allica Bank's system deployment architecture highlighted an unmitigated operational risk.

Your stack relies on Azure,  Spring Boot,  Kotlin. Specifically, the pattern surrounding Azure Spring Cloud scaling, Kotlin/Spring Boot performance presents a significant risk under load. Under peak scaling surges, azure spring cloud scaling, kotlin/spring boot performance introduces severe latency degradation and cascading worker backpressure.

Without proper boundary isolation, this bottleneck degrades overall cluster throughput and inflates cloud infrastructure costs.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/allica-bank

Are you available for a 15-minute briefing to go over these findings with your platform team?

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com