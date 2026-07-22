Hi Robert,

During an examination of Anyscale's core engineering layer... one specific observation stood out.

Your stack relies on Python,  C++,  Ray Core. The pattern around Ray actor state object store memory spill latency and multi-node worker task scheduling overhead caught my attention. In high-throughput environments, Object store memory spilling to disk degrades distributed task execution speed.

My interpretation could be off if your team has abstracted this persistence layer.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/anyscale

Open to your feedback if I've misread the public signals.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com