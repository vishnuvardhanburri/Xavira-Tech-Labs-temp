Hi Rob,

In reviewing Coder's system architecture footprint... one specific observation stood out.

Your stack relies on Go,  TypeScript,  Terraform. The pattern around Workspace provisioning agent WebSocket connection heartbeat timeouts and SSH proxy multiplexing overhead caught my attention. In high-throughput environments, multiplexed SSH connection drops disrupt remote IDE session persistence.

You may already have mitigated this at the proxy or caching tier.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/coder

Happy to be corrected if my reading of your architecture is off.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com