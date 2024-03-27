---
title: 'Calculus of Variations Post 4'
date: 2012-08-04
permalink: /posts/2014/08/calc_v-l4
tags:
  - cool posts
  - category1
  - category2
---


### Calculus of Variations: Regularity

### Part 1: Introduction to the Calculus of Variations and Necessary Conditions for Extremal

In this lecture, we delve into the fundamentals of the calculus of variations, focusing on regularity and the necessary conditions for extremals in optimization problems. Our starting point is a Lagrangian $L$ that is a continuously differentiable function ($C^1$) over the domain $[a, b] \times \mathbb{R}^n \times \mathbb{R}^n; \mathbb{R}$ and an initial cost function $\phi_a \in C^1(\mathbb{R}^n; \mathbb{R})$.

#### Optimization Problems:

We consider two primary problems:

1. **Fixed Endpoint Minimization Problem**: For given endpoints $\xi_a, \xi_b \in \mathbb{R}^n$, find the curve that minimizes the integral of $L$ over $[a, b]$, subject to $\xi(a) = \xi_a$ and $\xi(b) = \xi_b$. This is formally expressed as:

$$ \min \int_{a}^{b} L(t, \xi(t), \xi'(t)) \,dt \quad | \quad \xi \in C^*_1([a, b]; \mathbb{R}^n), \xi(a) = \xi_a, \xi(b) = \xi_b $$

2. **Bolza Problem with Fixed Terminal Point**: For a given $\xi_b \in \mathbb{R}^n$, find the curve that minimizes the integral of $L$ plus an initial cost $\phi_a(\xi(a))$, subject to $\xi(b) = \xi_b$. It is written as:

$$ \min \int_{a}^{b} L(t, \xi(t), \xi'(t)) \,dt + \phi_a(\xi(a)) \quad | \quad \xi \in C^*_1([a, b]; \mathbb{R}^n), \xi(b) = \xi_b $$

#### Necessary Conditions for Local Minimizers:

For a curve $\xi \in C^*_1$ that locally minimizes either problem, there exists a constant vector $c \in \mathbb{R}^n$ satisfying for all $t \in [a, b]$:

$$ \frac{\partial L}{\partial q}(t, \xi(t), \xi'(t)) = c + \int_{a}^{t} \frac{\partial L}{\partial x}(s, \xi(s), \xi'(s)) \,ds $$

This equation is known as the **Integral Euler Equation**. Any curve $\xi \in C^*_1$ solving this equation for some $c \in \mathbb{R}^n$ is termed a $C^*_1$ extremal for the Lagrangian $L$.

Furthermore, if $\xi$ is a local minimizer for the $C^*_1$ Bolza problem, it must also satisfy the transversality condition:

$$ \frac{\partial L}{\partial q}(a, \xi(a), \xi'(a)) = D\phi_a(\xi(a)) $$

These conditions are crucial for understanding the behavior of solutions to the optimization problems outlined.

#### Convexity and Global Minimizers:

When the Lagrangian $L$ is convex with respect to both $x$ and $q$, any $C^*_1$ extremal for $L$ is a global minimizer for the fixed endpoint problem. This is a significant result as it links the concepts of convexity, extremals, and global optimization in a coherent framework.

In the next part, we will further explore the implications of these conditions, especially in the context of specific forms of Lagrangians, and delve into the proofs and applications of these foundational concepts in the calculus of variations.


### Part 2: Integral Euler Equation and Global Minimizers

In our exploration of the calculus of variations, a pivotal concept is the Integral Euler equation, which serves as a necessary condition for a function to be an extremal of the Lagrangian $L$. This equation emerges from the variational problems we consider, which involve minimizing an integral involving $L$ subject to certain boundary conditions.

#### Integral Euler Equation
For a Lagrangian $L \in C^1([a, b] \times \mathbb{R}^n \times \mathbb{R}^n; \mathbb{R})$, and considering a function $\xi \in C^*_1$ that locally minimizes the action, we derive that there exists a constant vector $c \in \mathbb{R}^n$ satisfying:
$$
\frac{\partial L}{\partial q}(t, \xi(t), \xi'(t)) = c + \int_a^t \frac{\partial L}{\partial x}(s, \xi(s), \xi'(s)) ds
$$
This equation indicates that the rate of change of the Lagrangian with respect to the trajectory's velocity $q$ is determined by a constant vector $c$ plus an integral involving the partial derivative of $L$ with respect to the trajectory's position $x$.

#### Global Minimizers and Convexity
A noteworthy result arises when the Lagrangian $L$ is convex in both the position $x$ and velocity $q$ variables. In this case, any $C^*_1$ extremal of $L$ is not merely a local but a global minimizer for problems with fixed endpoints. This property underscores the significance of convexity in variational calculus, offering a robust criterion for identifying global minimizers.

#### Special Case: Lagrangian Independent of $t$ and $x$
A particularly interesting scenario arises when $L$ depends solely on the velocity $q$, simplifying our Integral Euler equation. In this context, linear or affine trajectories become extremals, reflecting a fundamental principle: straight-line motions (or affine paths in the multi-dimensional case) minimize the action when the Lagrangian is independent of both time and position.

#### Convexity and the Hopf Formula
The convexity of $L$ in $q$ brings us to the Hopf formula, offering a direct method to compute the minimum value of the action for problems with fixed endpoints. This formula, derived from the convexity and independence of $L$ from $t$ and $x$, highlights the optimality of straight-line (or affine) paths in such scenarios.

#### Variational Problems with Initial Costs
Expanding our discussion to include initial costs, we examine variational problems where the initial point is free but comes with an associated cost. The analysis of such problems underlines the influence of initial costs on the determination of optimal paths, even when the Lagrangian remains convex in $q$.

#### Coercivity and Existence of Minimizers
Coercivity, a concept related to the behavior of functions at infinity, plays a crucial role in ensuring the existence of minimizers for variational problems. By examining the conditions under which a Lagrangian $L$, convex and coercive in $q$, guarantees the existence of a global minimizer, we gain deeper insights into the criteria for solvability of variational problems.

This part of the lecture has laid the groundwork for understanding the intricate relationships between the Lagrangian's properties, the formulation of the Integral Euler equation, and the conditions under which global minimizers exist. Through this analysis, we appreciate the profound impact of convexity and coercivity on the solutions to variational problems, setting the stage for further exploration of regularity conditions and the unique solutions to these fascinating mathematical challenges.



### Part 3: Regularity and Uniqueness of Solutions in Variational Problems

The calculus of variations not only focuses on finding extremals or minimizing curves but also delves into the regularity of these solutions. Regularity concerns the smoothness and continuity properties of the solutions to variational problems. This part of the lecture covers the essential criteria and conditions under which extremals exhibit higher regularity and when they are unique.

#### Strict Convexity and Unique Extremals

A significant aspect of variational calculus is understanding the conditions under which a problem admits a unique solution. Strict convexity of the Lagrangian $L$ with respect to the velocity $q$ ensures the uniqueness of the extremal. If $L$ is strictly convex, then the extremal, if it exists, is the only curve that satisfies the necessary conditions for an extremum. This property is instrumental in proving the uniqueness of solutions to variational problems, emphasizing the power of convexity beyond merely ensuring existence.

#### Regularity Conditions

The regularity of extremals, or solutions, is a critical area of study. We establish that if an extremal satisfies certain regularity conditions, it can be classified into smoother categories, such as $C^1$ or even higher $C^k$. For instance, if for any $t$ in the domain, the map $q \mapsto \frac{\partial L}{\partial q}(t, \xi(t), q)$ is injective, then the extremal $\xi$ is not just piecewise $C^1$ but belongs to $C^1$ over the entire interval $[a, b]$. This criterion, underlined by the injectivity of the partial derivative of $L$ with respect to $q$, helps in identifying solutions with better regularity properties.

#### The Classical Euler-Lagrange Equation

For extremals that satisfy higher regularity conditions, we can derive the classical Euler-Lagrange equation, which provides a more refined characterization of extremals than the Integral Euler equation. This equation forms a cornerstone in the calculus of variations, offering a differential equation whose solutions directly correspond to the extremals of the variational problem.

#### Conservation Laws

Autonomous Lagrangians, i.e., those independent of time, lead to conservation laws. A prominent example is the conservation of energy, which emerges from the autonomy of the Lagrangian. For extremals of such Lagrangians, the energy function, defined by $E(x, q) = q \cdot \frac{\partial L}{\partial q}(x, q) - L(x, q)$, remains constant along the trajectory. This principle is a manifestation of the more general Noether's theorem, which links symmetries of the action to conservation laws.

#### Uniqueness and Regularity for Specific Lagrangians

The discussion extends to specific forms of Lagrangians, illustrating how the general principles of convexity, coercivity, and regularity conditions apply to concrete examples. By considering Lagrangians that are strictly convex in $q$, we show how these lead to unique, global minimizers and discuss the implications of these properties for the regularity of solutions.

#### Conclusion

The exploration of regularity and uniqueness in variational problems enriches our understanding of the solutions to these problems, extending beyond mere existence to the quality and properties of the solutions. Through strict convexity, coercivity, and specific regularity conditions, we gain deeper insights into the behavior of extremals, paving the way for solving more complex and nuanced problems in the calculus of variations. This understanding is crucial for applications across physics, engineering, and economics, where optimal solutions must not only exist but also exhibit desirable smoothness and uniqueness properties.
