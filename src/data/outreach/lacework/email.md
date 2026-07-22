Hi CTO,

During an examination of Lacework's core engineering layer... one specific observation stood out.

Your stack relies on Go,  Java,  Snowflake. The pattern around Polygraph anomaly engine telemetry ingestion queue backpressure and Snowflake analytical query cost escalation caught my attention. In high-throughput environments, unfiltered runtime agent telemetry spikes ingestion buffer queues during infrastructure scaling.

My interpretation could be off if your team has abstracted this persistence layer.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/lacework

Open to your feedback if I've misread the public signals.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com