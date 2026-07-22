Hi TS,

During an examination of Monzo's core engineering layer... one specific observation stood out.

Your stack relies on Go,  Cassandra,  Kafka. The pattern around Cassandra scaling, Kafka message queues, Go microservices latency caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

My interpretation could be off if your team has abstracted this persistence layer.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/monzo

Open to your feedback if I've misread the public signals.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com