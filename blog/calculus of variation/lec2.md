# Calculus of Variations: Existence of Minimizers and the Euler Equation

## Lecture Notes for the Second Class

Welcome back! Today, we delve deeper into the calculus of variations, focusing on the existence of minimizers and the pivotal Euler equation. Our journey will be more detailed, reflecting on the mathematical rigour while keeping it accessible.

## Recalling the Setting

We begin by revisiting the general setting for the calculus of variations problem. Given a closed interval $[a, b] \subset \mathbb{R}$ and closed, non-empty sets $S_a, S_b \subset \mathbb{R}^n$, we define the set of admissible arcs as

$$
A = \{\xi \in C^*_1([a, b]; \mathbb{R}^n) : \xi(a) \in S_a, \xi(b) \in S_b\}
$$

where $C^*_1$ denotes the class of piecewise continuously differentiable curves. The functional $J$ over $A$ is defined by

$$
J(\xi) = \int_a^b L(t, \xi(t), \xi'(t))dt + \phi_a(\xi(a)) + \phi_b(\xi(b)),
$$

with $L$, $\phi_a$, and $\phi_b$ representing the Lagrangian (or running cost), initial cost, and terminal cost, respectively.

## Existence of Minimizers: Tonelli's Theorem

The existence of a minimizer for the functional $J$ is not guaranteed without further assumptions on $L$, $\phi_a$, and $\phi_b$. The Tonelli conditions provide a crucial set of assumptions under which the existence of minimizers can be assured:

- **(E0):** The functions $\phi_a$, $\phi_b$, and $L$ are continuously differentiable ($C^1$), and $\phi_a$, $\phi_b$ are bounded from below.
- **(E1) Superlinearity:** $L(t, x, q) \geq \theta(\|q\|) - c$, with $\theta(r)/r \rightarrow +\infty$ as $r \rightarrow +\infty$.
- **(E2) Convexity:** $L$ is strictly convex in $q$, meaning the second partial derivative of $L$ with respect to $q$, $\partial^2 L/\partial q^2$, is positive definite.

Tonelli's Theorem asserts that if $L$, $\phi_a$, and $\phi_b$ satisfy these conditions and either $S_a$ or $S_b$ is bounded, then a minimizer $\xi^*$ exists.

## The Euler Equation: A Necessary Condition for Minimizers

Local minimizers must satisfy specific necessary conditions, one of the most important being the Euler equation. If $\xi^*$ is a local minimizer, it must hold that

$$
\frac{d}{dt} \frac{\partial L}{\partial \xi'}(t, \xi^*(t), \xi^{*'}(t)) = \frac{\partial L}{\partial \xi}(t, \xi^*(t), \xi^{*'}(t))
$$

for all $t \in [a, b]$. This equation, known as the Euler equation, provides a critical point of the functional $J$, though not necessarily a minimum.

## The Transversality Condition

In problems with free end conditions, the Euler equation comes accompanied by the transversality condition, providing criteria for the optimization problem's boundary. For a problem with a free initial point and a fixed endpoint, the transversality condition at the initial point is

$$
\frac{\partial L}{\partial \xi'}(a, \xi^*(a), \xi^{*'}(a)) = D\phi_a(\xi^*(a)),
$$

indicating how the choice of the initial point influences the minimization problem's solution.

## Conclusion and Remarks

The calculus of variations hinges on understanding how to find functions that minimize or maximize certain quantities, described by functionals. Through the existence theorems and necessary conditions like the Euler equation and transversality conditions, we lay the groundwork for solving a wide range of problems in physics, engineering, and beyond.

In our upcoming lectures, we will explore the implications of these conditions, solve specific problems, and understand how these concepts apply to real-world scenarios. Stay curious and ready to dive deeper into the beautiful world of calculus of variations!