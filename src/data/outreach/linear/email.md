Hi Karri,

Evaluating Linear's platform architecture signals... one specific observation stood out.

Your stack relies on React,  MobX,  TypeScript. The pattern around local-first Sync Engine state synchronization and IndexedDB transaction lock contention during offline delta reconciliation caught my attention. In high-throughput environments, client-side transaction latencies can cascade into WebSocket broadcast drops under heavy workspace edits.

If this is an intentional design boundary within your current roadmap, ignore this note.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/linear

Interested in your thoughts if you have a moment.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com