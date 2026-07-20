# Engineering Intelligence Report: Together AI

## 1. Executive Summary
Together AI is a research-driven cloud platform that enables developers to train, fine-tune, and run open-source AI models efficiently. They focus on providing fast, cost-effective inference and training infrastructure.

## 2. Recipient Profile
**Name**: Ce Zhang (CTO & Co-founder)
**Background**: Associate Professor in CS (ETH Zurich), extensive research in decentralized machine learning, databases, and systems for AI.

## 3. Tech Stack & Architecture Signals
**Tech Stack**: CUDA, C++, Python, PyTorch, Ray, Custom Kernel Optimizations, FlashAttention.
**Architecture Signals**: Focus on highly optimized inference engines, distributed training across heterogeneous GPU clusters, and decentralized computing architectures.
**Challenges**: Maximizing GPU utilization (MFU), minimizing latency for massive parameter models, and handling network bottlenecks in distributed training.

## 4. Outreach Email
**Subject**: Optimizing distributed inference for Together AI

Hi Ce,

I recently spent some time studying Together AI's public engineering footprint, particularly your work on custom CUDA kernels and distributed inference architecture.

Maximizing Model FLOPs Utilization (MFU) across decentralized and heterogeneous GPU clusters is an incredibly hard systems problem, especially when minimizing latency for MoE models. At XAVIRA, we specialize in low-level systems engineering and distributed cluster optimization, dealing with the exact network and memory bandwidth bottlenecks you tackle.

I've put together an Engineering Intelligence Report on Together AI's infrastructure:
https://www.xaviratechlabs.com/research/together-ai

Would you be open to a 20-minute conversation to discuss optimizing your inference layer?

Best,
Vishnu Burri
Director & Principal Architect, XAVIRA Technologies

## 5. Follow-ups
**5-day follow-up**: Hi Ce, following up on my note. We have some specific insights in the report regarding memory management in multi-node inference that might interest your infrastructure team.
**10-day follow-up**: Hi Ce, I'll step back here. I know you're busy optimizing state-of-the-art models. The report will remain available at the link.
**LinkedIn connection**: Hi Ce, I've been following your research at ETH and your systems engineering work at Together AI. Would love to connect.
**LinkedIn follow-up**: Thanks for connecting, Ce! We published an architectural analysis of Together AI's infrastructure: https://www.xaviratechlabs.com/research/together-ai

## 6. Self-Scoring
Personalization: 10/10
Credibility: 9/10
Technical Relevance: 10/10
Executive Tone: 10/10
Spam Risk: 10/10
Reply Probability: 9/10

## 7. Sources
- Together AI Blog and Research Papers
- Ce Zhang's academic publications
- Together AI open-source contributions
