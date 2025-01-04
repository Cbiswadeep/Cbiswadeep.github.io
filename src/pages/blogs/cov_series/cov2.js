import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import {
  Atom,
  LineChart as ChartLine,
  Brain,
  Award
} from "lucide-react";
import "./CoV.css";


const EulerLagrangeDiagram = () => (
  <div className="optimization-diagrams">
    <h3 className="diagram-title">Geometric Interpretation of the First Variation</h3>
    <svg className="w-full h-auto" viewBox="0 0 800 400">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.8"/>
        </pattern>
      </defs>
      <rect width="800" height="400" fill="#ffffff"/>
      <rect width="800" height="400" fill="url(#grid)"/>
      
      {/* Optimal Path */}
      <g transform="translate(50,50)">
        <text x="150" y="-25" fill="#1a365d" fontSize="18" fontWeight="600">First Variation: ε-Neighborhood</text>
        
        {/* Axes */}
        <line x1="0" y1="300" x2="700" y2="300" stroke="#94a3b8" strokeWidth="1"/>
        <line x1="50" y1="0" x2="50" y2="350" stroke="#94a3b8" strokeWidth="1"/>
        
        {/* Original curve */}
        <path d="M 50 300 C 200 100, 400 200, 650 300" 
              stroke="#2563eb" strokeWidth="3" fill="none"/>
        
        {/* Variation curves */}
        <path d="M 50 300 C 200 80, 400 180, 650 300" 
              stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" fill="none"/>
        <path d="M 50 300 C 200 120, 400 220, 650 300" 
              stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" fill="none"/>
              
        {/* Labels */}
        <text x="350" y="330" fill="#64748b" fontSize="14">x</text>
        <text x="30" y="150" fill="#64748b" fontSize="14">y</text>
        <text x="670" y="330" fill="#64748b" fontSize="12">x₁</text>
        <text x="40" y="330" fill="#64748b" fontSize="12">x₀</text>
        
        {/* Variation labels */}
        <text x="250" y="150" fill="#64748b" fontSize="12">y(x) + εη(x)</text>
        <text x="250" y="250" fill="#2563eb" fontSize="12">y(x)</text>
        <text x="250" y="200" fill="#64748b" fontSize="12">y(x) - εη(x)</text>
      </g>
    </svg>
    <div className="text-center mt-6 text-gray-700">
      <p className="text-sm">The optimal path y(x) (blue) and nearby variations y(x) ± εη(x) (dashed)</p>
      <p className="text-sm mt-2">For an optimal solution, the first variation must vanish for all admissible variations η(x)</p>
    </div>
  </div>
);

const CoV2 = () => {
  return (
    <MathJaxContext>
      <div className="cov-container">
        <div className="content-wrapper">
          <h1 className="title">
            The Euler-Lagrange Equation: A Deep Dive
            <span className="title-subtitle">Understanding the Fundamental Tool of Variational Calculus</span>
          </h1>
          
          <section className="intro-section">
            <h2 className="section-title">From Intuition to Formalism</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In our previous discussion, we introduced the calculus of variations and encountered the Euler-Lagrange equation 
              as a fundamental tool. Today, we'll derive this equation from first principles, understand its geometric meaning, 
              and explore how it helps us solve various optimization problems.
            </p>

            <div className="math-block">
              <div className="math-content">
                <h3 className="text-xl text-gray-800 mb-4">The General Setup</h3>
                <p className="mb-4 text-gray-700">
                  We begin with a functional of the form:
                </p>
                <MathJax className="text-center text-xl my-4">
                  {`\\[
                  J[y] = \\int_{x_0}^{x_1} F(x, y(x), y'(x))\\,dx
                  \\]`}
                </MathJax>
                <p className="mb-4 text-gray-700">
                  Our goal is to find a function <MathJax inline>{'\\(y(x)\\)'}</MathJax> that minimizes or maximizes this functional, subject to fixed 
                  endpoints: <MathJax inline>{'\\(y(x_0) = y_0\\)'}</MathJax> and <MathJax inline>{'\\(y(x_1) = y_1\\)'}</MathJax>.
                </p>
              </div>
            </div>

            <EulerLagrangeDiagram />
          </section>

          <section className="derivation-section">
            <h2 className="section-title">Deriving the Euler-Lagrange Equation</h2>
            <div className="math-block">
              <div className="math-content">
                <h3 className="text-xl text-gray-800 mb-4">The First Variation</h3>
                <p className="mb-4 text-gray-700">
                  Consider a small variation of our optimal path:
                </p>
                <MathJax className="text-center text-xl my-4">
                  {`\\[
                  y_\\epsilon(x) = y(x) + \\epsilon\\eta(x)
                  \\]`}
                </MathJax>
                <p className="mb-4 text-gray-700">
                  where <MathJax inline>{'\\(\\eta(x)\\)'}</MathJax> is any smooth function that vanishes at the endpoints 
                  (<MathJax inline>{'\\(\\eta(x_0) = \\eta(x_1) = 0\\)'}</MathJax>), 
                  and <MathJax inline>{'\\(\\epsilon\\)'}</MathJax> is a small parameter.
                </p>
                <p className="mb-4 text-gray-700">
                  If <MathJax inline>{'\\(y(x)\\)'}</MathJax> is optimal, then the functional <MathJax inline>{'\\(J[y_\\epsilon]\\)'}</MathJax> must 
                  have a stationary value at <MathJax inline>{'\\(\\epsilon = 0\\)'}</MathJax>.
                </p>
              </div>
            </div>

            <div className="math-block">
              <div className="math-content">
                <p className="mb-4 text-gray-700">
                  Expanding this condition:
                </p>
                <MathJax className="text-center text-xl my-4">
                  {`\\[
                  \\begin{aligned}
                  0 &= \\int_{x_0}^{x_1} \\left(\\frac{\\partial F}{\\partial y}\\eta + \\frac{\\partial F}{\\partial y'}\\eta'\\right)\\,dx \\\\
                  &= \\int_{x_0}^{x_1} \\left(\\frac{\\partial F}{\\partial y} - \\frac{d}{dx}\\frac{\\partial F}{\\partial y'}\\right)\\eta\\,dx
                  \\end{aligned}
                  \\]`}
                </MathJax>
                <p className="mb-4 text-gray-700">
                  Since this must hold for any variation <MathJax inline>{'\\(\\eta(x)\\)'}</MathJax>, we obtain the Euler-Lagrange equation:
                </p>
                <MathJax className="text-center text-xl my-4">
                  {`\\[
                  \\frac{\\partial F}{\\partial y} - \\frac{d}{dx}\\frac{\\partial F}{\\partial y'} = 0
                  \\]`}
                </MathJax>
              </div>
            </div>
          </section>

          <section className="examples-section">
            <h2 className="section-title">Example: The Shortest Path Problem</h2>
            <div className="math-block">
              <div className="math-content">
                <p className="mb-4 text-gray-700">
                  Let's apply this to find the shortest path between two points. The arc length is given by:
                </p>
                <MathJax className="text-center text-xl my-4">
                  {`\\[
                  J[y] = \\int_{x_0}^{x_1} \\sqrt{1 + (y')^2}\\,dx
                  \\]`}
                </MathJax>
                <p className="mb-4 text-gray-700">
                  Here, <MathJax inline>{'\\(F(x,y,y\') = \\sqrt{1 + (y\')^2}\\)'}</MathJax>. The Euler-Lagrange equation gives:
                </p>
                <MathJax className="text-center text-xl my-4">
                  {`\\[
                  \\frac{\\partial F}{\\partial y} = 0, \\quad \\frac{d}{dx}\\frac{y'}{\\sqrt{1 + (y')^2}} = 0
                  \\]`}
                </MathJax>
                <p className="mb-4 text-gray-700">
                  This implies that <MathJax inline>{'\\(y\'\\)'}</MathJax> is constant, confirming that the shortest path is indeed a straight line!
                </p>
              </div>
            </div>
          </section>

          <section className="special-cases">
            <h2 className="section-title">Special Cases and Extensions</h2>
            <div className="math-block">
              <div className="math-content">
                <h3 className="text-xl text-gray-800 mb-4">Conservation Laws</h3>
                <p className="mb-4 text-gray-700">
                  When {`$F$`} doesn't depend explicitly on {`$x$`} or {`$y$`}, we get conservation laws:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li className="mb-2">
                    If {`$\\frac{\\partial F}{\\partial x} = 0$`}, then 
                    {`$F - y'\\frac{\\partial F}{\\partial y'}$`} is conserved
                  </li>
                  <li className="mb-2">
                    If {`$\\frac{\\partial F}{\\partial y} = 0$`}, then 
                    {`$\\frac{\\partial F}{\\partial y'}$`} is conserved
                  </li>
                </ul>
              </div>
            </div>

            <div className="math-block">
              <div className="math-content">
                <h3 className="text-xl text-gray-800 mb-4">Multiple Variables</h3>
                <p className="mb-4 text-gray-700">
                  For functionals with multiple dependent variables:
                </p>
                <MathJax className="text-center text-xl my-4">
                  {`\\[
                  J[y_1,...,y_n] = \\int_{x_0}^{x_1} F(x, y_1,...,y_n, y_1',...,y_n')\\,dx
                  \\]`}
                </MathJax>
                <p className="mb-4 text-gray-700">
                  We get a system of Euler-Lagrange equations:
                </p>
                <MathJax className="text-center text-xl my-4">
                  {`\\[
                  \\frac{\\partial F}{\\partial y_i} - \\frac{d}{dx}\\frac{\\partial F}{\\partial y_i'} = 0, 
                  \\quad i = 1,...,n
                  \\]`}
                </MathJax>
              </div>
            </div>
          </section>

          <section className="applications-section">
            <h2 className="section-title">Physical Applications</h2>
            <div className="applications-grid">
              <div className="application-card">
                <h3 className="card-title">
                  <Atom className="card-icon" />
                  Classical Mechanics
                </h3>
                <p className="text-gray-700">
                  Hamilton's principle states that the path a physical system takes minimizes the action integral. 
                  This leads to Lagrange's equations of motion, a special case of the Euler-Lagrange equations.
                </p>
              </div>
              
              <div className="application-card">
                <h3 className="card-title">
                  <ChartLine className="card-icon" />
                  Optics
                </h3>
                <p className="text-gray-700">
                  Fermat's principle of least time leads to Snell's law of refraction through the Euler-Lagrange equation, 
                  demonstrating the deep connection between variational principles and physical laws.
                </p>
              </div>

              <div className="application-card">
                <h3 className="card-title">
                  <Brain className="card-icon" />
                  Quantum Mechanics
                </h3>
                <p className="text-gray-700">
                  The path integral formulation uses variational principles to describe quantum systems, showing how 
                  particles take all possible paths with different probabilities.
                </p>
              </div>

              <div className="application-card">
                <h3 className="card-title">
                  <Award className="card-icon" />
                  Field Theory
                </h3>
                <p className="text-gray-700">
                  The Euler-Lagrange equations generalize to field theories, leading to fundamental equations like 
                  Maxwell's equations in electromagnetism and Einstein's field equations in general relativity.
                </p>
              </div>
            </div>
          </section>

          <section className="next-section">
            <div className="next-preview">
              <h2 className="section-title">Coming Up Next</h2>
              <ul>
                <li>Constrained variational problems and Lagrange multipliers</li>
                <li>The second variation and sufficient conditions for optimality</li>
                <li>Numerical methods for solving variational problems</li>
                <li>Advanced applications in optimal control theory</li>
              </ul>
            </div>
          </section>

          <footer className="blog-footer">
            <p className="text-gray-600">
              This is Part 2 of our series on Calculus of Variations and Optimal Control. 
              In this post, we've explored the Euler-Lagrange equation and its applications across various fields.
            </p>
            <div className="footer-navigation">
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500">← Previous: Introduction to Calculus of Variations</span>
                <span className="text-blue-600">Next: Constrained Variational Problems →</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default CoV2;