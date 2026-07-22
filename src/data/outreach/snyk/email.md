Hi CTO,

A review of Snyk's distributed system signals highlighted... one specific observation stood out.

Your stack relies on TypeScript,  Go,  Java. The pattern around Vulnerability AST parsing memory overhead and real-time dependency graph traversal across enterprise monorepos caught my attention. In high-throughput environments, deep dependency graph resolution consumes high memory during concurrent CI pipeline checks.

If this is an intentional design boundary within your current roadmap, ignore this note.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/snyk

Interested in your thoughts if you have a moment.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com