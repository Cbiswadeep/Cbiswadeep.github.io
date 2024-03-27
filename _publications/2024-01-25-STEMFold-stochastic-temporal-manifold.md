---
title: "STEMFold: Stochastic Temporal Manifold for Multi-Agent Interactions in the Presence of Hidden Agents"
collection: publications
permalink: /publication/2024-01-25-STEMFold-stochastic-temporal-manifold
excerpt: 'STEMFold introduces a spatiotemporal attention-based generative model designed to predict the unmeasured dynamics of multi-agent systems from observations of visible agents. Leveraging a novel spatiotemporal graph with time anchors, it maps observations to a stochastic manifold without prior knowledge of the interaction graph topology, demonstrating superior performance in predicting complex multi-agent interactions in the presence of hidden agents.'
date: 2024-01-25
venue: 'arXiv preprint arXiv:2401.14522'
paperurl: 'https://arxiv.org/abs/2401.14522'
citation: 'Hemant Kumawat, Biswadeep Chakraborty, Saibal Mukhopadhyay. (2024). "STEMFold: Stochastic Temporal Manifold for Multi-Agent Interactions in the Presence of Hidden Agents." arXiv preprint arXiv:2401.14522.'
---

In many real-world systems, from physical to social domains, understanding and predicting the dynamics of multiple interacting agents is essential. However, these systems often involve incomplete observations, where only a subset of agents is known and observable, leaving the interactions with and behaviors of unobserved agents hidden. Traditional approaches to modeling such systems struggle without access to the full state of all agents.

STEMFold addresses this challenge by proposing a groundbreaking spatiotemporal attention-based generative model capable of learning a stochastic manifold. This manifold serves to predict the underlying dynamics of multi-agent systems based solely on the observations of visible agents. The novelty of STEMFold lies in its use of a spatiotemporal graph with time anchors, which effectively bridges the gap between observed agent dynamics and the unobserved, enabling accurate prediction of complex interactions without prior knowledge of the system's interaction graph topology.

Our method's effectiveness is demonstrated through empirical evaluation across both simulations and real-world datasets, showcasing its ability to outperform existing networks in predicting multi-agent interactions, even when many agents remain unobserved. This work not only represents a significant advancement in the field of dynamic systems modeling but also opens new avenues for research into multi-agent systems with partial observability.
