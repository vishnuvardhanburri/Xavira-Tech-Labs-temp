Hi Sunil,

Analyzing Oso's infrastructure signals highlighted a high-stakes bottleneck in your execution engine.

Your stack relies on Rust,  Polar Engine,  Python. Specifically, the pattern surrounding Polar policy engine query evaluation latency and application database authorization filter rewriting presents a significant risk under load. Complex RBAC/ReBAC policy evaluations spike tail latency when dynamically rewritten into SQL queries.

Unmitigated at your current growth trajectory, this constraint will force emergency architectural refactoring.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/oso

Are you open to a brief technical review to discuss how leading teams resolve this specific failure mode?

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com