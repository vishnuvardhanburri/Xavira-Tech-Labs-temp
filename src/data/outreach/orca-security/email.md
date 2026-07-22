Hi CTO,

Examining the platform deployment model at Orca Security... one specific observation stood out.

Your stack relies on Python,  Go,  Cloud Side-Scanning. The pattern around Side-Scanning snapshot volume mount serialization and out-of-band disk image parsing throughput caught my attention. In high-throughput environments, concurrent cloud snapshot parsing delays vulnerability detection SLA reporting.

This may already be an intentional architectural tradeoff to maintain system simplicity.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/orca-security

Curious whether I've interpreted this correctly.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com