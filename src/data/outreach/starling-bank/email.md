Hi Raman,

Looking closely at Starling Bank's data pipeline layout... one specific observation stood out.

Your stack relies on AWS,  Java,  PostgreSQL. The pattern around AWS cloud scaling, PostgreSQL database tuning caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

My interpretation could be off if your team has abstracted this persistence layer.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/starling-bank

Open to your feedback if I've misread the public signals.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com