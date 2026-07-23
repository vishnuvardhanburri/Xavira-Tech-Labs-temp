Hi Michel,

An architectural review of Airbyte's platform stack surfaced a key operational bottleneck under load.

Your stack relies on Java,  Micronaut,  Temporal. Specifically, the pattern surrounding connector Java/Python CDK serialization overhead and Temporal state persistence during long-tail ELT syncs presents a significant risk under load. Un-nested JSON record serialization causes out-of-memory heap panics on worker nodes.

If unmitigated during peak traffic spikes, this issue directly causes service degradation and SLA breaches.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/airbyte

Let me know if you're available for a brief technical discussion to review our architectural solutions.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com