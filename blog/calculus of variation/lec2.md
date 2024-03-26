### Lecture Notes on Calculus of Variations: Existence of Minimizers and Euler Equation I

#### Part 1: Introduction to Existence Theorems and Preliminary Concepts


In today's lecture, we delve deeper into the calculus of variations, focusing on the existence of minimizers and the foundational Euler Equation. This journey will guide us through critical assumptions necessary for the existence of minimizers and introduce us to the condition that any potential minimizer must satisfy.

**1. Setting the Stage**

We commence with a quick recap of the foundational setup for variational problems:

- We consider a closed interval \([a, b] \subset \mathbb{R}\) and closed, non-empty subsets \(S_a, S_b \subset \mathbb{R}^n\).
- The set of admissible arcs is defined as \(A = \{\xi \in C^*_1([a, b]; \mathbb{R}^n) : \xi(a) \in S_a, \xi(b) \in S_b\}\), where \(C^*_1\) denotes piecewise continuously differentiable curves.
- The functional \(J\) over \(A\) is given by \(J(\xi) = \int_a^b L(t, \xi(t), \xi'(t))dt + \phi_a(\xi(a)) + \phi_b(\xi(b))\), incorporating the Lagrangian \(L\), initial cost \(\phi_a\), and terminal cost \(\phi_b\).

**2. The Minimization Problem**

We aim to minimize the functional \(J(\xi)\) over \(\xi \in A\), seeking to find \(\min \{J(\xi) | \xi \in A\}\). This task involves finding a curve \(\xi^*\) such that \(J(\xi^*) \leq J(\xi)\) for all \(\xi \in A\).

**3. Necessary Assumptions for the Existence of Minimizers**

To ensure the existence of a minimizer, certain conditions must be satisfied by \(L\), \(\phi_a\), and \(\phi_b\):

- \(L\) must be in \(C^1([a, b] \times \mathbb{R}^n \times \mathbb{R}^n)\), and \(\phi_a, \phi_b \in C^1(\mathbb{R}^n)\).
- However, these conditions alone are insufficient to guarantee the existence of minimizers.

**4. Tonelli Conditions**

L. Tonelli provided stronger assumptions, now known as the Tonelli conditions, under which minimizers exist:

- **(E0):** \(\phi_a, \phi_b \in C^1(\mathbb{R}^n)\) and \(L \in C^1\), with \(\phi_a, \phi_b \geq -c\) for some \(c \in \mathbb{R}_+\).
- **(E1): Superlinearity of \(L\)** - \(L(t, x, q) \geq \theta(\|q\|) - c\), where \(\theta: [0, +\infty[ \rightarrow [0, +\infty[\) increases to \(+\infty\) as \(r \rightarrow +\infty\).
- **(E2): \(C^2\)-strict convexity** - The second partial derivative of \(L\) with respect to \(q\), \(\frac{\partial^2 L}{\partial q^2}(t, x, q) > 0\), indicating strict convexity in \(q\).

**5. Tonelli’s Theorem**

Tonelli's Theorem asserts the existence of at least one minimizer \(\xi^* : [a, b] \rightarrow \mathbb{R}^n\) under the Tonelli conditions, given that either \(S_a\) or \(S_b\) is bounded.

**6. Importance of Tonelli Conditions**

- The superlinearity condition (E1) ensures that \(L\) grows faster than any linear function in \(q\), critical for preventing the functional from approaching \(-\infty\).
- Condition (E2) ensures that \(L\) is strictly convex with respect to \(q\), a vital condition for the uniqueness of the minimizer.

**7. Examples and Remarks**

We explored examples illustrating the necessity of each Tonelli condition. Particularly, we showed that failure to satisfy superlinearity (E1) or \(C^2\)-strict convexity (E2) can lead to the absence of minimizers, emphasizing the critical role these conditions play in variational problems.



### Lecture Notes on Calculus of Variations: Existence of Minimizers and Euler Equation I

#### Part 2: Euler Equation and Necessary Conditions for Minimizers

As we delve deeper into the intricacies of the calculus of variations, we reach the pivotal discussion of the Euler Equation, a necessary condition for local minimizers. This equation not only provides a method for identifying potential minimizers but also lays the foundation for further analysis in variational problems.

**1. Euler Equation: The Gateway to Extremals**

The Euler Equation emerges as a critical tool in identifying candidate minimizers, known as extremals. It is derived from considering variations of the functional \(J\) and applying first-order necessary conditions for optimality.

- **Definition (Euler Equation):** Given a Lagrangian \(L \in C^1([a, b] \times \mathbb{R}^n \times \mathbb{R}^n)\), an arc \(\xi^*\) is said to satisfy the Euler Equation if, for every \(t \in [a, b]\),

\[ \frac{d}{dt} \left( \frac{\partial L}{\partial q} (t, \xi^*(t), \xi^{*'}(t)) \right) = \frac{\partial L}{\partial x} (t, \xi^*(t), \xi^{*'}(t)). \]

This equation ensures that \(\xi^*\) is a stationary point of the functional \(J\), though not necessarily a minimizer.

**2. Fundamental Lemma of the Calculus of Variations**

The Fundamental Lemma of the calculus of variations plays a crucial role in deriving the Euler Equation. It essentially states that if an integral of a certain form vanishes for all admissible variations, then the integrand must satisfy specific conditions, leading directly to the Euler Equation.

- **Lemma (Fundamental Lemma):** Let \(f, g \in C^0([a, b]; \mathbb{R}^n)\). If for all \( \eta \in C^1([a, b]; \mathbb{R}^n)\) with \( \eta(a) = \eta(b) = 0\), it holds that

\[ \int_a^b \langle f(t), \eta(t) \rangle + \langle g(t), \eta'(t) \rangle dt = 0, \]

then \(g\) is continuously differentiable, and \(g'(t) = f(t)\) for all \(t \in [a, b]\).

**3. Application to the Euler Equation**

The application of the Fundamental Lemma to the calculus of variations leads directly to the derivation of the Euler Equation. By considering variations of the functional \(J\) along admissible directions, we conclude that any local minimizer must satisfy the Euler Equation.

**4. Transversality Conditions**

In problems where one or both endpoints are free, additional conditions known as transversality conditions arise. These conditions complement the Euler Equation, providing necessary boundary conditions that candidate minimizers must satisfy.

- **Example:** For a variational problem with a free initial point and fixed terminal point, the transversality condition at the initial point is given by

\[ \frac{\partial L}{\partial q} (a, \xi^*(a), \xi^{*'}(a)) = D\phi_a (\xi^*(a)), \]

where \(D\phi_a\) denotes the derivative of the initial cost function \(\phi_a\).

**5. The Role of Euler Equation and Transversality Conditions**

Together, the Euler Equation and transversality conditions form a set of necessary conditions that any local minimizer must satisfy. These conditions are instrumental in narrowing down the set of candidate minimizers from the broader class of admissible functions.

**Conclusion of Part 2**

The discussion on the Euler Equation and transversality conditions marks a crucial step in our exploration of the calculus of variations. By establishing necessary conditions for local minimizers, we set the stage for further analysis and solution methods for variational problems. As we move forward, these foundational concepts will serve as the backbone for our understanding and application of variational principles to a wide array of problems.




### Lecture Notes on Calculus of Variations: Existence of Minimizers and Euler Equation I

#### Part 3: Exploring Examples and Implications

In this final section, we delve into practical examples that illustrate the application of the Euler Equation and explore the broader implications of the conditions we've established for the existence of minimizers.

**1. Demonstrating the Euler Equation through Examples**

To solidify our understanding, let's apply the Euler Equation to specific variational problems. These examples showcase how the equation guides us toward potential minimizers.

- **Example 1: The Shortest Path Problem**
  - **Problem:** Find the shortest path between two points in a plane, a fundamental problem in calculus of variations.
  - **Lagrangian:** For this problem, the Lagrangian is simply \(L(x, q) = \sqrt{1 + q^2}\), reflecting the length of a curve.
  - **Euler Equation Application:** Since \(L\) does not explicitly depend on \(x\), the Euler Equation simplifies, indicating that the paths of constant slope (straight lines) are extremals. This example elegantly demonstrates how the Euler Equation leads to intuitive solutions for classical problems.

- **Example 2: The Brachistochrone Problem**
  - **Problem:** Find the curve of quickest descent under gravity between two points, not necessarily at the same vertical level.
  - **Lagrangian Analysis:** This problem's complexity showcases the Euler Equation's power in handling non-trivial dynamics, with the Lagrangian involving both position and velocity.
  - **Insight:** The solution, a cycloid, emerges from the Euler Equation, underscoring its critical role in identifying the path that minimizes the descent time.

**2. Implications of the Transversality Conditions**

The transversality conditions extend our toolkit beyond the Euler Equation, particularly in problems with free boundary points. They ensure that any extremal adheres to the prescribed boundary behavior, whether through specified end points or through a relationship with the cost function at the boundary.

- **Broadening the Scope:** These conditions are crucial for problems where the end points are not fixed, allowing for a more comprehensive exploration of potential minimizers within a wider set of boundary conditions.

**3. Insights and Further Directions**

The Euler Equation and transversality conditions offer a robust framework for approaching variational problems. They not only help identify candidate minimizers but also inspire deeper inquiries into the nature of these problems.

- **Beyond First Order Conditions:** While the Euler Equation provides necessary conditions for extremals, it's essential to explore second-order conditions and beyond for a complete analysis regarding the minimality of solutions.
- **Interdisciplinary Applications:** The principles discussed extend beyond mathematics, finding applications in physics, engineering, economics, and beyond. The calculus of variations serves as a bridge between abstract mathematical theory and practical problem-solving across disciplines.

**4. Concluding Remarks**

As we conclude this lecture, remember that the journey through the calculus of variations is one of discovery and application. The Euler Equation and transversality conditions are not merely mathematical artifacts but tools that guide us toward understanding the optimal configurations of systems governed by variational principles.


