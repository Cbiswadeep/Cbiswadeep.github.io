import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Book, Rocket, ChartLine, Brain, Award, Code } from "lucide-react";
import "./CoV.css";

const OptimizationDiagrams = () => (
  <div className="optimization-diagrams">
    <h3 className="diagram-title">Visual Intuition: Classical Optimization Problems</h3>
    <svg className="w-full h-auto" viewBox="0 0 800 400">
      {/* Enhanced diagrams with more detail */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.8"/>
        </pattern>
      </defs>
      <rect width="800" height="400" fill="#ffffff"/>
      <rect width="800" height="400" fill="url(#grid)"/>
      
      {/* Brachistochrone */}
      <g transform="translate(50,50)">
        <text x="150" y="-25" fill="#1a365d" fontSize="18" fontWeight="600">Brachistochrone Problem</text>
        
        {/* Axes with labels */}
        <line x1="0" y1="0" x2="300" y2="0" stroke="#94a3b8" strokeWidth="1"/>
        <line x1="0" y1="0" x2="0" y2="250" stroke="#94a3b8" strokeWidth="1"/>
        <text x="-20" y="125" fill="#64748b" fontSize="12">y</text>
        <text x="150" y="270" fill="#64748b" fontSize="12">x</text>
        
        {/* Curves */}
        <path d="M 0 0 Q 150 0 300 250" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" fill="none"/>
        <path d="M 0 0 Q 100 150 300 250" stroke="#2563eb" strokeWidth="3" fill="none"/>
        <path d="M 0 0 L 300 250" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" fill="none"/>
        
        {/* Points with labels */}
        <circle cx="0" cy="0" r="4" fill="#1e40af"/>
        <circle cx="300" cy="250" r="4" fill="#1e40af"/>
        <text x="-15" y="-10" fill="#64748b" fontSize="12">A</text>
        <text x="310" y="260" fill="#64748b" fontSize="12">B</text>
      </g>
      
      {/* Shortest Path */}
      <g transform="translate(450,50)">
        <text x="150" y="-25" fill="#1a365d" fontSize="18" fontWeight="600">Shortest Path Problem</text>
        
        {/* Axes with labels */}
        <line x1="0" y1="0" x2="300" y2="0" stroke="#94a3b8" strokeWidth="1"/>
        <line x1="0" y1="0" x2="0" y2="250" stroke="#94a3b8" strokeWidth="1"/>
        <text x="-20" y="125" fill="#64748b" fontSize="12">y</text>
        <text x="150" y="270" fill="#64748b" fontSize="12">x</text>
        
        {/* Curves */}
        <path d="M 0 0 C 100 100 200 100 300 250" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" fill="none"/>
        <path d="M 0 0 L 300 250" stroke="#2563eb" strokeWidth="3" fill="none"/>
        <path d="M 0 0 Q 150 300 300 250" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" fill="none"/>
        
        {/* Points with labels */}
        <circle cx="0" cy="0" r="4" fill="#1e40af"/>
        <circle cx="300" cy="250" r="4" fill="#1e40af"/>
        <text x="-15" y="-10" fill="#64748b" fontSize="12">A</text>
        <text x="310" y="260" fill="#64748b" fontSize="12">B</text>
      </g>
    </svg>
    <div className="text-center mt-6 text-gray-700">
      <p className="text-sm mb-2">Left: The brachistochrone curve (blue) provides the fastest descent path between points A and B under gravity</p>
      <p className="text-sm">Right: The straight line (blue) provides the shortest geometric path between points A and B</p>
    </div>
  </div>
);

const CoV1 = () => {
  return (
    <MathJaxContext>
      <div className="cov-container">
        <div className="content-wrapper">
          <h1 className="title">
            Calculus of Variations and Optimal Control
            <span className="title-subtitle">A Journey Through Mathematical Optimization</span>
          </h1>
          
          <section className="intro-section">
            <h2 className="section-title">Introduction</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Imagine you're standing at the base of a hill, holding a marble. You want to release this marble so it reaches 
              a specific point at the bottom of the hill in the shortest possible time. What path should the marble take? 
              This is the famous brachistochrone problem, one of the earliest challenges in the calculus of variations, first posed by Johann Bernoulli in 1696.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The solution to this problem led to the development of an entirely new field of mathematics: the calculus of variations. 
              Unlike regular calculus, which deals with finding maxima and minima of functions, the calculus of variations focuses on 
              finding optimal functions themselves—functions that minimize or maximize certain quantities called functionals.
            </p>

            <OptimizationDiagrams />
          </section>

          <section className="theory-section">
            <h2 className="section-title">Mathematical Foundations</h2>
            <div className="math-block">
              <div className="math-content">
                <p className="mb-4 text-gray-700">
                  To understand the distinction between regular calculus and the calculus of variations, let's start with a simple comparison:
                </p>
                
                <p className="mb-4 text-gray-700">
                  In regular calculus, we optimize simple functions. For example, finding the minimum of a quadratic function:
                </p>
                <MathJax className="text-center text-xl my-4">
                  {`\\[
                  f(x) = x^2 + 2x + 1
                  \\]`}
                </MathJax>
                <p className="mb-6 text-gray-700">
                  Here, we're looking for a single number <MathJax inline>{'\\(x\\)'}</MathJax> that minimizes <MathJax inline>{'\\(f(x)\\)'}</MathJax>. We can find this by setting <MathJax inline>{'\\(f\'(x) = 0\\)'}</MathJax> 
                  and solving for <MathJax inline>{'\\(x\\)'}</MathJax>.
                </p>

                <p className="mb-4 text-gray-700">
                  But in calculus of variations, we optimize functionals—functions that take entire functions as inputs and return numbers. 
                  A classic example is minimizing the arc length between two points:
                </p>
                <MathJax className="text-center text-xl my-4">
                  {`\\[
                  J[y] = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}\\, dx
                  \\]`}
                </MathJax>
                <p className="mb-6 text-gray-700">
                  Here, we're looking for an entire function <MathJax inline>{'\\(y(x)\\)'}</MathJax> that minimizes the length <MathJax inline>{'\\(J[y]\\)'}</MathJax>. The square brackets in <MathJax inline>{'\\(J[y]\\)'}</MathJax> 
                  indicate that <MathJax inline>{'\\(J\\)'}</MathJax> is a functional—it takes a function <MathJax inline>{'\\(y(x)\\)'}</MathJax> as input and returns a number (the arc length).
                </p>
              </div>
            </div>

            <div className="math-block">
              <div className="math-content">
                <h3 className="text-xl text-gray-800 mb-4">The Euler-Lagrange Equation</h3>
                <p className="mb-4 text-gray-700">
                  The fundamental tool for solving variational problems is the Euler-Lagrange equation:
                </p>
                <MathJax className="text-center text-xl my-4">
                  {`\\[
                  \\frac{\\partial F}{\\partial y} - \\frac{d}{dx}\\left(\\frac{\\partial F}{\\partial y'}\\right) = 0
                  \\]`}
                </MathJax>
                <p className="mb-4 text-gray-700">
                  where <MathJax inline>{'\\(F(x,y,y\')\\)'}</MathJax> is the integrand of our functional <MathJax inline>{'\\(J[y] = \\int F(x,y,y\')\\,dx\\)'}</MathJax>. This equation plays a role 
                  analogous to setting derivatives to zero in regular calculus.
                </p>
                <p className="text-gray-700">
                  For the brachistochrone problem, applying this equation leads to a cycloid as the optimal solution—a surprising result 
                  that Johann Bernoulli and others discovered through ingenious geometric reasoning.
                </p>
              </div>
            </div>
          </section>

          <section className="applications-section">
            <h2 className="section-title">Modern Applications</h2>
            <div className="applications-grid">
              <div className="application-card">
                <h3 className="card-title">
                  <Rocket className="card-icon" />
                  Aerospace Engineering
                </h3>
                <p className="text-gray-700">
                  Optimal trajectory design for spacecraft and aircraft, minimizing fuel consumption while meeting mission constraints. 
                  This includes launch vehicle trajectory optimization, satellite orbital transfers, and atmospheric reentry paths.
                </p>
              </div>
              
              <div className="application-card">
                <h3 className="card-title">
                  <ChartLine className="card-icon" />
                  Economics
                </h3>
                <p className="text-gray-700">
                  Dynamic optimization of economic policies, investment strategies, and resource allocation. Applications include optimal 
                  control in growth theory, dynamic pricing strategies, and natural resource management.
                </p>
              </div>

              <div className="application-card">
                <h3 className="card-title">
                  <Award className="card-icon" />
                  Robotics
                </h3>
                <p className="text-gray-700">
                  Path planning and control optimization for robotic systems, including manipulator trajectory planning, mobile robot navigation, 
                  and multi-robot coordination. These techniques enable smooth, efficient, and collision-free motion.
                </p>
              </div>

              <div className="application-card">
                <h3 className="card-title">
                  <Brain className="card-icon" />
                  Machine Learning
                </h3>
                <p className="text-gray-700">
                  Optimization of neural network architectures, reinforcement learning policies, and training algorithms. The calculus of 
                  variations provides theoretical foundations for deep learning optimization and policy gradient methods.
                </p>
              </div>
            </div>
          </section>

          <section className="prerequisites-section">
            <h2 className="section-title">Prerequisites</h2>
            <div className="prerequisites">
              <ul>
                <li>Strong foundation in single-variable and multivariable calculus (derivatives, integrals, partial derivatives)</li>
                <li>Basic understanding of linear algebra (vectors, matrices, eigenvalues)</li>
                <li>Familiarity with ordinary differential equations (basic solutions methods, boundary value problems)</li>
                <li>Some exposure to physics concepts (mechanics, energy conservation)</li>
                <li>Mathematical maturity and comfort with abstract reasoning</li>
              </ul>
            </div>
          </section>

          <section className="next-section">
            <div className="next-preview">
              <h2 className="section-title">Coming Up Next</h2>
              <ul>
                <li>In-depth exploration of the Euler-Lagrange equation and its derivation</li>
                <li>First and second variations: necessary and sufficient conditions for optimality</li>
                <li>Constraints and Lagrange multipliers in variational problems</li>
                <li>Connection to Hamiltonian mechanics and conservation laws</li>
                <li>Advanced applications in physics and engineering</li>
              </ul>
            </div>
          </section>

          <footer className="blog-footer">
            <p className="text-gray-600">
              This is Part 1 of a comprehensive series on Calculus of Variations and Optimal Control. 
              Follow along as we explore this fascinating field of mathematics that bridges pure theory and practical applications.
            </p>
            <div className="footer-navigation">
              <span>Next Post: The Euler-Lagrange Equation: A Deep Dive →</span>
            </div>
          </footer>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default CoV1;