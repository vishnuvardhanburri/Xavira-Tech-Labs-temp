Hi Karri,

A technical evaluation of Linear's distributed system footprint surfaced a severe concurrency vulnerability.

Your stack relies on React,  MobX,  TypeScript. Specifically, the pattern surrounding local-first Sync Engine state synchronization and IndexedDB transaction lock contention during offline delta reconciliation presents a significant risk under load. Client-side transaction latencies cascade into WebSocket broadcast drops and state desynchronization under heavy workspace edits.

As query concurrency scales, this design flaw escalates into cascading worker failures and unpredictable latency spikes.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/linear

Would you be open to evaluating our architectural recommendations before this bottleneck hits your enterprise clients?

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com