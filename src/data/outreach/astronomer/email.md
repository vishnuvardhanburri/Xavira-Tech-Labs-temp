Hi Julian,

A technical assessment of Astronomer's service topology indicates... one specific observation stood out.

Your stack relies on Python,  Airflow,  Kubernetes. The pattern around Airflow DAG file parsing overhead and Celery executor Redis queue contention across large DAG sets caught my attention. In high-throughput environments, frequent DAG re-parsing consumes scheduler CPU, leading to execution slot starvation.

This may already be an intentional architectural tradeoff to maintain system simplicity.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/astronomer

Curious whether I've interpreted this correctly.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com