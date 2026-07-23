Hi TS,

Inspecting Monzo's runtime infrastructure revealed a performance degradation boundary that requires immediate attention.

Your stack relies on Go,  Cassandra,  Kafka. Specifically, the pattern surrounding Cassandra scaling, Kafka message queues, Go microservices latency presents a significant risk under load. Under peak scaling surges, cassandra scaling, kafka message queues, go microservices latency introduces severe latency degradation and cascading worker backpressure.

Unmitigated at your current growth trajectory, this constraint will force emergency architectural refactoring.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/monzo

Are you open to a brief technical review to discuss how leading teams resolve this specific failure mode?

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com