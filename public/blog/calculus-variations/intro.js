import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from '@matejmazur/react-katex';
import "./intro.css";


const MathEquation = ({ equation, isBlock = false }) => {
  const Component = isBlock ? BlockMath : InlineMath;
  return (
    <div className="overflow-x-auto">
      <Component>{equation}</Component>
    </div>
  );
};

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Calculus of Variations and Optimal Control
          </h1>
          <p className="text-xl opacity-90">
            A Journey Through Mathematical Optimization (Part 1)
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-4xl py-12">
        <article className="prose lg:prose-xl">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Imagine you're standing at the base of a hill, holding a marble. You want to release this marble 
              so it reaches a specific point at the bottom of the hill in the shortest possible time. What path 
              should the marble take? This is the famous brachistochrone problem, one of the earliest challenges 
              in the calculus of variations.
            </p>
          </section>

          {/* Mathematical Foundation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Mathematical Foundation</h2>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <p className="text-gray-600 mb-4">
                In regular calculus, we optimize functions like:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <MathEquation 
                  equation="f(x) = x^2 + 2x + 1" 
                  isBlock={true}
                />
              </div>
              <p className="text-gray-600 mb-4">
                But in calculus of variations, we optimize functionals:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <MathEquation 
                  equation="J[y] = \int_0^1 \left(\frac{dy}{dt}\right)^2 + y^2\, dt" 
                  isBlock={true}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">The Euler-Lagrange Equation</h3>
              <p className="text-gray-600 mb-4">
                The fundamental equation in calculus of variations is the Euler-Lagrange equation:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <MathEquation 
                  equation="\frac{\partial F}{\partial y} - \frac{d}{dx}\frac{\partial F}{\partial y'} = 0" 
                  isBlock={true}
                />
              </div>
              <p className="text-gray-600 mt-4">
                Where <InlineMath>F(x, y, y')</InlineMath> is the integrand of our functional.
              </p>
            </div>
          </section>

          {/* Example: Shortest Path */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Example: The Shortest Path</h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-gray-600 mb-4">
                For the shortest path problem, our functional is:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <MathEquation 
                  equation="L[y] = \int_0^1 \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\, dx" 
                  isBlock={true}
                />
              </div>
              <p className="text-gray-600 mb-4">
                Applying the Euler-Lagrange equation leads to:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <MathEquation 
                  equation="\frac{d^2y}{dx^2} = 0" 
                  isBlock={true}
                />
              </div>
              <p className="text-gray-600 mt-4">
                This results in <InlineMath>y = mx + b</InlineMath>, confirming that the shortest path is indeed a straight line!
              </p>
            </div>
          </section>

          {/* Next in Series */}
          <section className="bg-indigo-50 rounded-xl p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What's Coming Next?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                <span className="text-gray-600">Deep dive into the Euler-Lagrange equation derivation</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                <span className="text-gray-600">The brachistochrone problem solution</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                <span className="text-gray-600">Introduction to optimal control theory</span>
              </li>
            </ul>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-400">
            Part 1 of the Calculus of Variations and Optimal Control series.
            Follow along for weekly updates as we explore this fascinating field of mathematics.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;