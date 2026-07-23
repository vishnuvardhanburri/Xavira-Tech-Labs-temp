Hi Rob,

Evaluating Coder's backend services identified a critical throughput constraint in your current architecture.

Your stack relies on Go,  TypeScript,  Terraform. Specifically, the pattern surrounding Workspace provisioning agent WebSocket connection heartbeat timeouts and SSH proxy multiplexing overhead presents a significant risk under load. Multiplexed SSH connection drops forcefully terminate remote IDE sessions.

Without proper boundary isolation, this bottleneck degrades overall cluster throughput and inflates cloud infrastructure costs.

I documented the exact failure mechanism and our recommended persistence isolation strategies in an independent Engineering Intelligence report: https://www.xaviratechlabs.com/research/coder

Are you available for a 15-minute briefing to go over these findings with your platform team?

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com