Hi Paul,

Looking into Supabase's infrastructure topology... one specific observation stood out.

Your stack relies on PostgreSQL,  Elixir,  Go. The pattern around PgBouncer connection pool limits and Realtime Elixir WebSocket broadcast memory allocation during peak tenant surges caught my attention. In high-throughput environments, connection pool saturation on multi-tenant Postgres clusters degrades REST and GraphQL gateway response times.

My interpretation could be off if your team has abstracted this persistence layer.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/supabase

Open to your feedback if I've misread the public signals.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com