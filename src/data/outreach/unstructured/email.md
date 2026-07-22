Hi Brian,

Looking into Unstructured's infrastructure topology... one specific observation stood out.

Your stack relies on Python,  FastAPI,  OCR Engine. The pattern around Document partitioning OCR pipeline processing latency and PDF element extraction worker queue lag caught my attention. In high-throughput environments, heavy OCR model inference stalls document ingestion throughput for complex table layouts.

My interpretation could be off if your team has abstracted this persistence layer.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/unstructured

Open to your feedback if I've misread the public signals.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com