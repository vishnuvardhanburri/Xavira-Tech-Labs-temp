Hi Brian,

Examining the platform deployment model at Corelight... one specific observation stood out.

Your stack relies on Vue.js,  Kotlin,  Laravel. The pattern around Vue.js, Kotlin, Laravel, Goober, Oracle Cloud, Red Hat (Needs technical diagnosis) caught my attention. In high-throughput environments, managing throughput boundaries under scaling team volume requires careful isolation.

This may already be an intentional architectural tradeoff to maintain system simplicity.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/corelight

Curious whether I've interpreted this correctly.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com