Hi Blythe,

A review of FNZ's distributed system signals highlighted... one specific observation stood out.

Your stack relies on .NET,  SOAP,  Jaspersoft. The pattern around Legacy .NET/SOAP integration issues, deployment bottlenecks caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

If this is an intentional design boundary within your current roadmap, ignore this note.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/fnz

Interested in your thoughts if you have a moment.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com