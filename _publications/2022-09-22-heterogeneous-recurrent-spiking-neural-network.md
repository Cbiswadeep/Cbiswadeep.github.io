---
title: "Heterogeneous Recurrent Spiking Neural Network for Spatio-Temporal Classification"
collection: publications
permalink: /publication/2022-09-22-heterogeneous-recurrent-spiking-neural-network
excerpt: 'This paper presents a heterogeneous recurrent spiking neural network (HRSNN) with unsupervised learning for spatio-temporal classification of video activity recognition tasks. Achieving high accuracy across various datasets, the HRSNN model introduces a novel combination of architecture and learning method heterogeneity, offering performance comparable to supervised SNNs with fewer resources.'
date: 2022-09-22
venue: 'Frontiers in Neuroscience'
paperurl: 'https://doi.org/10.3389/fnins.2023.99451'
citation: 'Biswadeep Chakraborty, Saibal Mukhopadhyay. (2022). "Heterogeneous Recurrent Spiking Neural Network for Spatio-Temporal Classification." <i>Frontiers in Neuroscience</i>.'
---

Spiking Neural Networks (SNNs) are heralded as the next wave in brain-inspired learning models, aiming to mimic more closely the neural dynamics of the human brain. Despite their promise, the challenge of achieving high accuracy with unsupervised learning in SNNs has been significant. This study introduces a novel heterogeneous recurrent spiking neural network (HRSNN) that addresses this challenge head-on, achieving remarkable accuracy in video activity recognition tasks across multiple datasets including KTH, UCF11, UCF101, and the event-based DVS128 Gesture.

The breakthrough of the HRSNN lies in its architecture and learning mechanisms. Unlike traditional SNNs that use homogeneous neurons and learning rules, the HRSNN incorporates a diversity of neuron types with varying firing and relaxation dynamics within its recurrent layer. This heterogeneity extends to the learning mechanism, employing spike-time-dependent-plasticity (STDP) rules that vary across synapses, tailoring the learning process more closely to the dynamics of each neuron.

This innovative approach not only achieves accuracy levels comparable to those of supervised SNNs trained with backpropagation but does so with significantly lower computational demands and less training data. By demonstrating that unsupervised learning in SNNs can reach new heights of performance with careful architectural and methodological design, this paper makes a significant contribution to the field of artificial intelligence and neural network research.
