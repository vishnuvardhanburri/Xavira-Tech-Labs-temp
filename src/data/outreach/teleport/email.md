Hi Ev,

Analyzing the service boundaries across Teleport's stack... one specific observation stood out.

Your stack relies on Go,  Rust,  WebAuthn. The pattern around Audit session recording stream disk I/O serialization and certificate authority key rotation overhead caught my attention. In high-throughput environments, unbuffered session log disk writes create I/O bottlenecks during concurrent admin SSH sessions.

If this is an intentional design boundary within your current roadmap, ignore this note.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/teleport

Interested in your thoughts if you have a moment.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com