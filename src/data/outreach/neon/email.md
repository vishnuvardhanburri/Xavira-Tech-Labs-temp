Hi Nikita,

Looking closely at Neon's data pipeline topology, a clear system stability risk emerged.

Your stack relies on Rust,  PostgreSQL,  C. Specifically, the pattern surrounding compute-storage separation L2 page server cache misses and WAL streaming latency during cold branch initialization presents a significant risk under load. Page server cache misses force synchronous WAL fetches over the network, spiking p99 query latency above 2,000ms.

Left unaddressed as tenant volume expands, this pattern creates recurring tail-latency anomalies and system instability.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/neon

Are you open to reviewing our technical mitigations this week before this impacts production workloads?

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com