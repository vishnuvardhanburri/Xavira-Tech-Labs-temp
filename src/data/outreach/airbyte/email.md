Hi Michel,

While reviewing Airbyte's public system footprint... one specific observation stood out.

Your stack relies on Java,  Micronaut,  Temporal. The pattern around connector Java/Python CDK serialization overhead and Temporal state persistence during long-tail ELT syncs caught my attention. In high-throughput environments, high record volume serialization creates worker memory pressure during un-nested JSON syncs.

If your platform team has already factored this into your topology, feel free to disregard.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/airbyte

I'd appreciate your perspective when time permits.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com