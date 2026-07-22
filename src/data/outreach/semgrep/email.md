Hi Isaac,

Evaluating Semgrep's platform architecture signals... one specific observation stood out.

Your stack relies on OCaml,  Python,  Go. The pattern around OCaml AST pattern matching memory footprint during deep interprocedural analysis on massive codebases caught my attention. In high-throughput environments, complex taint-tracking rules escalate heap allocation, increasing garbage collection pauses.

If this is an intentional design boundary within your current roadmap, ignore this note.

I documented the reasoning and potential scaling mitigations in an independent report here: https://www.xaviratechlabs.com/research/semgrep

Interested in your thoughts if you have a moment.

Vishnu Vardhan Burri
Director & Principal Architect
XAVIRA Technologies
https://www.xaviratechlabs.com