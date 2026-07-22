Hi Sunil,

Looking closely at Oso's data pipeline layout... one specific observation stood out.

Your stack relies on Rust,  Polar Engine,  Python. The pattern around Polar policy engine query evaluation latency and application database authorization filter rewriting caught my attention. In high-throughput environments, complex RBAC/ReBAC policy evaluations spike latency when dynamically rewritten into SQL queries.

My interpretation could be off if your team has abstracted this persistence layer.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/oso

Open to your feedback if I've misread the public signals.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com