Hi Dean,

During an examination of Axonius's core engineering layer... one specific observation stood out.

Your stack relies on AWS EC2,  OpenStack,  Threat Stack. The pattern around AWS EC2, OpenStack, Threat Stack (Needs technical diagnosis) caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

My interpretation could be off if your team has abstracted this persistence layer.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/axonius

Open to your feedback if I've misread the public signals.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com