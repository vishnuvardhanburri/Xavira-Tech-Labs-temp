Hi Carlo,

Evaluating Soldo's platform architecture signals... one specific observation stood out.

Your stack relies on AWS,  Kubernetes,  Cloud-native. The pattern around TBD (Ready for Technical Diagnostics Pipeline) caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

If this is an intentional design boundary within your current roadmap, ignore this note.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/soldo

Interested in your thoughts if you have a moment.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com