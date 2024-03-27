---
title: 'Calculus of Variations Post 10'
date: 2012-08-10
permalink: /posts/2014/08/calc_v-l10
tags:
  - cool posts
  - category1
  - category2
---



### Lecture Notes on Calculus of Variations: Second Order Conditions

#### Part 1: Wirtinger's Inequality

**Introduction**:
Wirtinger's Inequality is fundamental in the calculus of variations and analysis due to its applications in bounding norms of functions and their derivatives. It illustrates the relationship between a function and its first derivative in a precise, quantitative manner.

**Definition**:
Let $\xi: [0, \pi] \rightarrow \mathbb{R}^n$ be a $C^1$ curve with $\xi(0) = \xi(\pi) = 0$. Wirtinger's Inequality states that:
$$\int_{0}^{\pi} ||\xi(t)||^2 dt \leq \int_{0}^{\pi} ||\xi'(t)||^2 dt,$$
with equality if and only if $\xi(t) = v \sin(t)$ for some $v \in \mathbb{R}^n$.

**Extension to Odd Functions**:
To prove Wirtinger's Inequality, we extend $\xi$ to an odd function $\tilde{\xi}: [-\pi, \pi] \rightarrow \mathbb{R}^n$ by setting $\tilde{\xi}(t) = \xi(t)$ for $t \in [0, \pi]$ and $\tilde{\xi}(t) = -\xi(-t)$ for $t \in [-\pi, 0]$. This extension maintains the $C^1$ property and symmetry about the origin, simplifying the analysis through the use of Fourier series.

**Fourier Series Approach**:
The proof then leverages Fourier series, which represent $\tilde{\xi}$ as an infinite sum of sines and cosines. By analyzing the Fourier coefficients, we find that the inequality holds due to the Parseval equality and properties of Fourier coefficients of the derivative of a function.

**Jacobi's Theorem**:
Moving beyond Wirtinger's Inequality, we delve into Jacobi's theorem, which provides necessary and sufficient conditions for a function to be a local minimizer or maximizer of a functional. 

- **Jacobi's Necessary Condition**: If a function $\bar{\xi}$ is a local minimizer of a functional with fixed endpoints, then no point in the domain is conjugate to the initial point. Conjugate points are determined by solving the Jacobi equation, which involves second derivatives of the Lagrangian.
  
- **Jacobi's Sufficient Condition**: Conversely, if no conjugate points exist within the domain (excluding the endpoints), then the function $\bar{\xi}$ is a local minimizer.

These conditions are pivotal in understanding the stability of extremals in variational problems.

**Practical Implications and Examples**:
1. **Wirtinger's Inequality** provides a method to compare the average squared magnitude of a function to that of its derivative, pivotal in signal processing and harmonic analysis.

2. **Jacobi's Theorem** underpins stability analysis in mechanics and optimal control theory, where the absence of conjugate points indicates stable trajectories or control paths.

**Conclusion of Part 1**:
We've laid the groundwork by introducing Wirtinger's Inequality and discussing its proof through Fourier series. We've also begun exploring the rich territory of Jacobi's theorem, detailing the framework to understand the stability of solutions in variational problems. In subsequent sections, we will delve deeper into examples, applications, and further theoretical insights related to these foundational concepts.


#### Part 2: Application of Fourier Series in Wirtinger's Inequality

**Fourier Series Recap**:
Fourier series decompose a function into a sum of sines and cosines, allowing for a powerful analysis of periodic functions. Specifically, for a function $f: [-\pi, \pi] \rightarrow \mathbb{C}^n$, its Fourier coefficients are defined as:
$$a_k(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t)e^{-ikt} dt,$$
where $k$ ranges over all integers, capturing both the function's frequency components and their contributions to the overall shape.

**Wirtinger's Inequality Proof via Fourier Series**:
The proof relies on extending $\xi$ to $\tilde{\xi}$ and analyzing its Fourier coefficients. It exploits the properties that $\tilde{\xi}(t)$ is odd and its integral over $[-\pi, \pi]$ is zero, implying $a_0(\tilde{\xi}) = 0$. Leveraging Parseval's identity, which equates the squared $L^2$-norm of a function to the sum of the squares of its Fourier coefficients, we establish Wirtinger's Inequality by comparing the norms of $\tilde{\xi}$ and its derivative $\tilde{\xi}'$ through their Fourier coefficients.

**Jacobi's Theorem Expanded**:

- **Proof Outline for Jacobi's Necessary Condition**: If $\bar{\xi}$ is a local minimizer, we consider variations of $\bar{\xi}$ and analyze the second derivative of the associated functional. By constructing a specific functional involving the second derivatives of the Lagrangian (the so-called "accessory Lagrangian"), we link positive definiteness with the absence of conjugate points, using the properties of solutions to the Jacobi equation.

- **Exploring the Accessory Lagrangian**: The accessory Lagrangian, constructed from the second derivatives of the original Lagrangian with respect to its arguments, plays a central role in determining the stability of the extremal. It leads us to a new variational problem, where the absence of conjugate points indicates a local minimum.

- **Proof Sketch for Jacobi's Sufficient Condition**: The absence of conjugate points implies that any variation satisfying the boundary conditions does not decrease the value of the functional, thereby confirming the original function as a local minimizer. This part of the theorem ensures that if our variations lead to a higher value of the functional, our original extremal is indeed a minimum under the given constraints.

#### Practical Insights and Further Analysis

1. **Understanding Conjugate Points**: In physical terms, conjugate points represent instances where the system's stability changes. For example, in mechanics, they can signify the transition between stable and unstable orbits or paths.

2. **Significance of Accessory Lagrangian**: The accessory Lagrangian helps isolate the component of the variation that directly impacts the stability of the extremal. It encapsulates the second-order behavior of the functional around the extremal, providing a criterion for stability.

3. **Example Applications**:
   - In the theory of elasticity, Jacobi's conditions can predict the buckling of beams under various load conditions.
   - In optimal control, these concepts help in ensuring that the control strategy leads to the desired outcome without unintended deviations.

#### Conclusion of Part 2

In this section, we have detailed the application of Fourier series to prove Wirtinger's Inequality and delved deeper into the intricacies of Jacobi's theorem. The discussion highlighted the theorem's theoretical foundation and practical implications, particularly in understanding the stability of solutions to variational problems. The accessory Lagrangian and the concept of conjugate points were explored as critical tools in analyzing second-order conditions. In the final part of these lecture notes, we will examine specific examples, address applications in physics and engineering, and explore related mathematical constructs that further illuminate the calculus of variations' rich landscape.


#### Part 3: Completing the Picture: Jacobi's Sufficient Condition and Beyond

In the previous sections, we've discussed Wirtinger's Inequality and delved into Jacobi's Necessary Condition. Now, we explore the final pieces of our discussion on second-order conditions in the calculus of variations, focusing on Jacobi's Sufficient Condition and its implications.

#### Jacobi's Sufficient Condition for Local Minimizers

**Recap**: Jacobi's Necessary Condition tells us that for a function to be a local minimizer of a given functional, no point in its domain can be conjugate to the initial point, barring the endpoints. This condition, while necessary, is not alone sufficient to guarantee that a given function is a local minimizer.

**Statement of Jacobi's Sufficient Condition**: If a $C^2$ extremal $\bar{\xi}: [a, b] \rightarrow \mathbb{R}^n$ of a $C^3$ Lagrangian $L$ does not have any conjugate points in the interval $]a, b]$, then $\bar{\xi}$ is a local minimizer for the Lagrangian with fixed endpoints.

**Proof Sketch**:
The proof of Jacobi's Sufficient Condition involves constructing a comparison between the given extremal and nearby functions using the accessory Lagrangian. By examining variations around the extremal, we can show that the absence of conjugate points implies the positivity of the second variation of the functional, ensuring that the extremal indeed minimizes the functional locally.

This result is profound because it provides a constructive method to verify the local minimality of solutions to variational problems by examining the nature of the solutions to the associated Jacobi equation.

#### Wirtinger's Inequality Revisited

In the broader context of second-order conditions, Wirtinger's Inequality serves as a powerful tool for establishing bounds on functionals, particularly those involving norms of functions and their derivatives. Its implications extend to proving the stability and convergence of numerical methods in solving differential equations and optimization problems.

#### The Taylor-Lagrange Lemma

As we delve deeper into the intricacies of the calculus of variations, the Taylor-Lagrange Lemma offers critical insight into the behavior of functions and their approximations. This lemma provides a precise quantification of the error involved in approximating a function by its Taylor polynomial, underscoring the importance of second-order conditions in understanding function approximations.

**Statement**: For a $C^2$ function $f: [0, 1] \rightarrow \mathbb{R}$ with $f'(0) = 0$, there exists $\lambda \in (0, 1)$ such that
$$f(1) - f(0) = \frac{1}{2} f''(\lambda).$$
This result highlights the influence of the second derivative on the change in the function's value, further illustrating the critical role of second-order analysis in the calculus of variations and broader mathematical contexts.

#### Conclusion

Through our journey from Wirtinger's Inequality to Jacobi's Theorems and the Taylor-Lagrange Lemma, we have seen how second-order conditions form the backbone of the calculus of variations. These concepts not only provide a deeper understanding of the behavior of functionals and their extremals but also offer practical tools for analyzing and solving complex variational problems.

By applying these principles, one can navigate the intricate landscape of optimization, stability analysis, and beyond, armed with a robust mathematical framework to guide the way. As we conclude our exploration, it's clear that the calculus of variations, with its rich interplay of analysis, geometry, and applied mathematics, remains a fertile ground for discovery and innovation.