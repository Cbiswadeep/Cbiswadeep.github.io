---
title: 'Calculus of Variations Post 5'
date: 2012-08-05
permalink: /posts/2014/08/calc_v-l5
tags:
  - cool posts
  - category1
  - category2
---



## Examples

### Part 1: Introduction to Regularity of Extremals and Classical Euler Equation

#### Regularity of Extremals

In our last session, we delved into the regularity properties of extremals for a given Lagrangian. A key outcome was establishing a criterion for the $C^1$ regularity of extremals, pivotal for understanding the behavior of solutions to variational problems.

**Proposition (C1 Regularity Criterion):** Consider a $C^1$ Lagrangian $L: [a, b] \times \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}$. If $\xi: [a, b] \rightarrow \mathbb{R}^n$ is a $C^1$ extremal for $L$, and for any $t \in (a, b)$, the map $q \in \mathbb{R}^n \rightarrow \partial_q L(t, \xi(t), q)$ is injective, then $\xi$ is in $C^1([a, b]; \mathbb{R}^n)$ and satisfies the classical Euler Equation:

$$
\frac{d}{dt} \partial_q L(t, \xi(t), \xi'(t)) = \partial_x L(t, \xi(t), \xi'(t)).
$$

This proposition underpins the analysis of extremals, ensuring that under certain conditions, solutions exhibit smoothness and adhere to the fundamental Euler equation.

#### Euler Equation and Energy Conservation

A noteworthy consequence of the Euler equation for autonomous Lagrangians (those not explicitly depending on time) is the conservation of energy. For a $C^1$ autonomous Lagrangian $L: \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}$ and a $C^2$ extremal $\xi: [a, b] \rightarrow \mathbb{R}^n$, the energy function $E: \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}$ defined by

$$
E(x, q) = \partial_q L(x, q) \cdot q - L(x, q)
$$

remains constant along the speed curve $t \rightarrow (\xi(t), \xi'(t))$. Mathematically, this implies there exists a constant $k \in \mathbb{R}$ such that

$$
E(\xi(t), \xi'(t)) = \partial_q L(\xi(t), \xi'(t)) \cdot \xi'(t) - L(\xi(t), \xi'(t)) = k
$$

for all $t \in [a, b]$. This theorem highlights a profound interplay between the dynamics of the system (captured by the Euler equation) and its energetic properties.

#### The Role of the Lagrangian in Variational Problems

The Lagrangian's role extends beyond defining the dynamics; it encapsulates the physical system's total energy (kinetic minus potential energy for mechanical systems). The regularity conditions and energy conservation laws derived from the Lagrangian offer deep insights into the solution's nature and behavior of variational problems. 

In essence, these mathematical formulations and theorems provide a robust framework for analyzing and solving a wide range of problems in the calculus of variations, emphasizing the intricate relationship between the smoothness of solutions and the fundamental principles governing their behavior, such as the conservation of energy.



### Part 2: Autonomous Lagrangians and Energy Conservation

#### Introduction to Autonomous Lagrangians

In the study of the calculus of variations, **autonomous Lagrangians** play a crucial role, especially because of their time-independence. This characteristic simplifies the analysis of the system's behavior and leads to the profound principle of energy conservation.

An autonomous Lagrangian is one that does not explicitly depend on the independent variable (often time), denoted as $L: \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}$. The energy associated with such a Lagrangian, defined as 

$$
E(x, q) = \partial_q L(x, q) \cdot q - L(x, q),
$$

provides a scalar function capturing the system's total energy at any point along the extremal path.

#### Energy Conservation Theorem

For a $C^1$ autonomous Lagrangian $L$, if $\xi: [a, b] \rightarrow \mathbb{R}^n$ is a $C^2$ extremal, the energy function $E$ remains constant along the trajectory of $\xi$. Mathematically, this translates to there existing a constant $k$ such that 

$$
E(\xi(t), \xi'(t)) = k,
$$

for all $t \in [a, b]$. This theorem, a cornerstone in the study of dynamical systems, underscores a fundamental property of conservative systems: the total energy remains invariant under time evolution.

#### The Significance of Energy Conservation

The conservation of energy principle provides not just an essential check for solutions obtained via the Euler-Lagrange equations but also a powerful tool for reducing the problem's complexity. In systems described by autonomous Lagrangians, knowing the energy's conservation allows for a deeper understanding of the system's possible configurations and behaviors without solving the Euler-Lagrange equation directly.

#### Practical Implications and Examples

The implications of these principles are far-reaching, influencing the modeling and analysis of physical systems in classical mechanics, optics, and beyond. For instance, in mechanical systems, the conservation of energy allows for the prediction of a particle's position and velocity at any time, given its initial conditions. This property is instrumental in the analysis of planetary orbits, the motion of pendulums, and the behavior of waves, to name a few.

The concept extends to fields beyond physics, including economics and biology, wherever systems can be modeled to conserve a certain "energy" or analogous quantity over time. The analytical simplicity provided by the autonomous nature of the Lagrangian, coupled with the powerful implication of energy conservation, makes this approach invaluable across disciplines.

In summary, Part 2 has highlighted the significance of autonomous Lagrangians and the conservation of energy in the calculus of variations. These concepts not only simplify the analysis of variational problems but also unveil the inherent symmetries and conservation laws governing the dynamics of diverse systems. The next part will further explore these themes, delving into specific examples and applications to solidify understanding.

