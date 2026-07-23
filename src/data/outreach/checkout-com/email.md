Hi Guillaume,

Looking closely at Checkout.com's data pipeline topology, a clear system stability risk emerged.

Your stack relies on AWS,  DynamoDB,  Node.js. Specifically, the pattern surrounding DynamoDB hot partitions, Node.js memory leaks presents a significant risk under load. Under peak scaling surges, dynamodb hot partitions, node.js memory leaks introduces severe latency degradation and cascading worker backpressure.

Left unaddressed as tenant volume expands, this pattern creates recurring tail-latency anomalies and system instability.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/checkout-com

Are you open to reviewing our technical mitigations this week before this impacts production workloads?

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com