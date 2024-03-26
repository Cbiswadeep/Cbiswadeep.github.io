### Lecture Notes on Calculus of Variations: Jacobi Sufficient Condition and Applications

#### Part 1: Jacobi Sufficient Condition

**Introduction**:
The Jacobi Sufficient Condition is a crucial result in the calculus of variations, offering a method to confirm whether a given extremal (a solution to the Euler-Lagrange equation) is a local minimizer for a specific functional. It builds on understanding the behavior of variations around an extremal and provides insights into stability and optimality.

**The Jacobi Sufficient Condition** states that for a $C^3$ Lagrangian $L: [a, b] \times \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}$, and a $C^2$ extremal $\bar{\xi}: [a, b] \rightarrow \mathbb{R}$ which makes the matrix $P(t) = L_{qq}(\bar{\xi}(t), \bar{\xi}'(t))$ positive definite for all $t \in [a, b]$, if no conjugate points exist within the interval $(a, b]$, then $\bar{\xi}$ is a local minimizer for $L$ with fixed endpoints.

**Derivation and Proof**:
The proof relies on a meticulous examination of the variations around the extremal $\bar{\xi}$ and employs a version of the Taylor expansion to relate the second variation of the action integral to the original functional's behavior near $\bar{\xi}$.

1. **Variational Setting**: Consider variations $\eta$ of the form $\eta(t) = \bar{\xi}(t) + \lambda \psi(t)$, where $\psi$ is a perturbation with $\psi(a) = \psi(b) = 0$. The goal is to show that for sufficiently small perturbations, the action $J(\bar{\xi} + \eta)$ is greater than $J(\bar{\xi})$, ensuring that $\bar{\xi}$ is a local minimizer.

2. **Jacobi Equation and Conjugate Points**: The absence of conjugate points is tied to the properties of solutions to the Jacobi equation, a second-order linear differential equation derived from the second variation of $J$. Conjugate points indicate where certain variations can lead to lower values of $J$, hence their absence is crucial for minimality.

3. **Technical Lemma and Estimates**: A lemma establishes conditions under which the second derivative of the action with respect to the variation parameter $\lambda$ is non-negative, ensuring that the action is minimized at $\lambda = 0$. This involves bounds on the difference $g''_{\eta}(\lambda) - g''_{\eta}(0)$, where $g_{\eta}(\lambda) = J(\bar{\xi} + \lambda\eta)$, by employing properties of $L$ and its derivatives.

**Applications and Examples**:

- **Evans Monopolistic Model**: An economic model where the objective is to find a price strategy that minimizes a cost function. The Jacobi Sufficient Condition confirms that the extremal solution found is indeed a local minimizer of the cost, providing a stable pricing strategy.

- **Action Minimization Problem**: In classical mechanics, the problem translates to finding the path of a particle that minimizes the action integral. The condition aids in determining when such paths represent stable motion under small perturbations, crucial for understanding physical systems' dynamics.

**Conclusion of Part 1**:
This introduction to the Jacobi Sufficient Condition lays out the theoretical underpinnings and its significance in identifying local minimizers of functionals. The condition's application to real-world models showcases its utility across various disciplines, from economics to physics. Subsequent parts will delve deeper into mathematical proofs, further examples, and implications of the condition in the calculus of variations and beyond.

#### Part 2: Detailed Proof of the Jacobi Sufficient Condition

**Estimation of Second Variation**: 
The crux of proving the Jacobi Sufficient Condition lies in demonstrating that the second variation of the functional, denoted as $g''_{\eta}(\lambda)$, remains non-negative for variations $\eta$ around the extremal $\bar{\xi}$, particularly under small perturbations.

1. **Key Steps in the Estimation**:
   - The difference $g''_{\eta}(\lambda) - g''_{\eta}(0)$ is carefully examined. The terms $A(t)$, $B(t)$, and $C(t)$ represent differences in the second partial derivatives of the Lagrangian $L$ with respect to its arguments, evaluated at the perturbed path versus the extremal.
   - By leveraging the smoothness assumptions on $L$ (specifically, its $C^3$ nature), bounds are established for $A(t)$, $B(t)$, and $C(t)$ in terms of the maximum norms of $\eta$ and $\eta'$, denoted as $\|\eta\|_{\infty}$ and $\|\eta'\|_{\infty}^*$, respectively.

2. **Application of Wirtinger's Inequality**:
   - A critical step involves applying a version of Wirtinger's Inequality to relate the integrated square of $\eta$ and its derivative to just the integrated square of the derivative, providing a bound that incorporates the length of the interval $[a, b]$ and ensuring that the action is minimized at the extremal.

3. **Selection of $\epsilon$**: 
   - A suitable $\epsilon > 0$ is chosen, ensuring that $(P(t) - \epsilon)\eta'^2(t) + Q(t)\eta^2(t) \geq 0$ for all permissible $\eta$. This condition directly ties the absence of conjugate points to the guarantee of local minimization.

**Proof of the Lemma**:
- The lemma posited within the proof underscores that for sufficiently small $\epsilon$, a linear second-order differential equation related to the Jacobi equation has nontrivial solutions, ensuring that the conditions for the Jacobi Sufficient Condition are met.

#### Practical Implications and Interpretations

- **Strict Local Minimizers**:
  - The proof not only establishes that certain extremals are local minimizers but also strengthens this to strict local minimization, indicating a genuine increase in the functional's value for non-zero perturbations close to the extremal.
  
- **Role of the Lemma**:
  - The lemma acts as a bridge, linking the abstract conditions on the sign-definiteness of the second variation to concrete differential equations whose solutions can be explicitly studied and understood.




Given the complex and detailed nature of the Jacobi Sufficient Condition and its proof, let's break down the proof with full mathematical equations and details. This explanation will focus on ensuring clarity and rigor in understanding the proof's structure and its implications.

### Jacobi Sufficient Condition Proof

The **Jacobi Sufficient Condition** aims to establish that, under certain conditions, an extremal (solution to the Euler-Lagrange equation) $\bar{\xi}$ is a local minimizer of the action functional.

#### Step 1: Setting Up the Variation Problem

Consider a Lagrangian $L: [a, b] \times \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}$ that is $C^3$ (three times continuously differentiable), and an extremal $\bar{\xi}: [a, b] \rightarrow \mathbb{R}$ such that the matrix $P(t) = L_{qq}(\bar{\xi}(t), \bar{\xi}'(t))$ is positive definite. We investigate small perturbations $\eta$ around $\bar{\xi}$, where $\eta(a) = \eta(b) = 0$, aiming to show $J(\bar{\xi} + \eta) \geq J(\bar{\xi})$ for these perturbations, implying local minimization.

#### Step 2: Analyzing the Second Variation

The second variation's behavior is central to understanding whether $\bar{\xi}$ minimizes $J$. We examine $g''_{\eta}(\lambda)$, where $g_{\eta}(\lambda) = J(\bar{\xi} + \lambda\eta)$, focusing on showing that $g''_{\eta}(\lambda) \geq 0$.

To do this, we analyze the difference:

$$g''_{\eta}(\lambda) - g''_{\eta}(0) = \int_a^b [A(t)\eta^2(t) + B(t)\eta'^2(t) + 2C(t)\eta(t)\eta'(t)] dt$$

where $A(t), B(t), C(t)$ represent the differences in second partial derivatives of $L$ evaluated at the perturbed path versus at the extremal. We seek to bound these differences in terms of the norms $\|\eta\|_{\infty}$ and $\|\eta'\|_{\infty}^*$.

#### Step 3: Application of Wirtinger's Inequality and Selection of $\epsilon$

By applying a form of Wirtinger's Inequality, we can relate $\eta$ and $\eta'$ in a way that emphasizes the role of $\eta'$, facilitating the analysis. Choosing a small $\epsilon > 0$, we ensure that the modified second variation expression incorporating $\epsilon$ remains non-negative, leveraging the positivity of $P(t)$.

#### Step 4: Lemma and the Existence of a Solution to a Modified ODE

A critical lemma within the proof posits that for small $\epsilon$, a related, modified second-order linear differential equation admits a non-zero solution $u_{\epsilon}$ across $[a, b]$. This step is pivotal, linking abstract conditions on the positivity of the second variation to the existence of specific solutions to differential equations.

#### Step 5: Conclusion and Implications

The final part of the proof consolidates the findings from the analysis of $g''_{\eta}(\lambda)$, the application of the lemma, and the implications of the chosen $\epsilon$ to affirm that $\bar{\xi}$ is indeed a local minimizer of $J$. This is achieved by showing that the second variation, adjusted by a small $\epsilon$, remains positive for all admissible $\eta$, indicating stability and minimization.

### Mathematical Rigor and Equations

The proof's mathematical rigor comes from precisely establishing bounds for $A(t), B(t), C(t)$, judiciously applying Wirtinger's Inequality, and carefully selecting $\epsilon$ to maintain the non-negativity of the second variation. The lemma’s proof, often involving delicate estimates and leveraging the smoothness of $L$, is crucial for bridging the gap between abstract variational principles and concrete differential equations.

The equations and inequalities used throughout the proof serve not only to navigate through the technical landscape of the calculus of variations but also to illuminate the conditions under which an extremal becomes a genuine local minimizer, enriching our understanding of the variational problems' solution structure.


#### Applications Continued

- **Mechanical Systems**: 
  - For classical mechanical problems, the condition delineates when the paths of particles or systems in potential fields are stable to perturbations, grounding the principle of least action in physical reality.

- **Economic Models**:
  - In economic or other optimization models, the condition provides a method to verify the optimality and stability of solutions derived from variational principles, ensuring they represent feasible, stable strategies or configurations.



This section has delved into the nuts and bolts of proving the Jacobi Sufficient Condition, illuminating the mathematical rigor and steps involved. Through the estimation of second variations and strategic applications of integral inequalities, the proof weaves together a narrative of stability and minimality around extremals. The lemma within the proof, and the subsequent interpretation of strict local minimizers, extends the theoretical insights into practical domains, offering a robust toolkit for validating solutions in variational problems across physics and economics. The next part will explore further ramifications and related concepts in the calculus of variations.