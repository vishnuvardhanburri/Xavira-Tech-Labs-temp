Hi Oliver,

Looking into Tide's infrastructure topology... one specific observation stood out.

Your stack relies on Pendo,  LaunchDarkly,  Segment. The pattern around TBD (Ready for Technical Diagnostics Pipeline) caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

My interpretation could be off if your team has abstracted this persistence layer.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/tide

Open to your feedback if I've misread the public signals.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com