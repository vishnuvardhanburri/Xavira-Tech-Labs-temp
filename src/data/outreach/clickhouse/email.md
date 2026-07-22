Hi Alexey,

Looking into ClickHouse's infrastructure topology... one specific observation stood out.

Your stack relies on C++,  Linux,  Vectorized Engine. The pattern around sparse index MergeTree block compression CPU saturation and Keeper metadata synchronization overhead during heavy inserts caught my attention. In high-throughput environments, unoptimized block compression strategies saturate CPU cores during concurrent multi-part inserts.

My interpretation could be off if your team has abstracted this persistence layer.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/clickhouse

Open to your feedback if I've misread the public signals.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com