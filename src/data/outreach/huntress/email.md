Hi Kyle,

Looking into the technical stack at Huntress... one specific observation stood out.

Your stack relies on Microsoft Defender,  EDR,  SIEM. The pattern around Microsoft Defender, EDR, SIEM (Needs technical diagnosis) caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

You may already have mitigated this at the proxy or caching tier.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/huntress

Happy to be corrected if my reading of your architecture is off.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com