import React from 'react';
import { 
  BrainCog, 
  Network, 
  Cpu, 
  ChevronRight,
  AlertTriangle,
  Clock,
  RefreshCcw,
  Zap,
  Workflow,
  GitBranch 
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import './ResearchStatement.css';

const ResearchStatement = () => {
  const problems = [
    {
      title: "Hardware Failures",
      icon: Cpu,
      description: "Radiation damage causes unpredictable chip failures. Current systems lack self-repair capabilities.",
      type: "hardware"
    },
    {
      title: "Environmental Changes",
      icon: AlertTriangle,
      description: "Weather patterns affect forest fire behavior in unpredictable manner. Current AI Systems struggle to adapt to changes.",
      type: "environmental"
    },
    {
      title: "Resource Constraints",
      icon: Clock,
      description: "Unknown environments lack training data. Not easy to retrain in scenarios with limited computational resources.",
      type: "resource"
    }
  ];

  const comparison = {
    traditional: {
      title: "Current AI Models",
      points: [
        "Fixed architecture unable to adapt to new scenarios",
        "Requires complete retraining for new conditions",
        "Performance degrades with shifts in data"
      ]
    },
    adaptive: {
      title: "Neuro-Adaptive Dynamical AI",
      points: [
        "Continuously evolves with changing conditions",
        "Real-time adaptation without explicit retraining",
        "Self-regulating stability under perturbation"
      ]
    }
  };

  const researchThrusts = [
    {
      title: "Learning Algorithms as Adaptive Control Systems",
      icon: BrainCog,
      description: "Real-time adaptation without computationally intensive retraining by embedding adaptive control within learning algorithms",
      projects: [
        {
          title: "Heterogeneous Recurrent SNNs",
          description: "Introducing heterogeneous dynamics within neurons and synapses for enhanced memory retention and reduced spiking activity",
          technologies: "Dynamical Systems Theory",
          metrics: "Efficient Temporal Processing"
        },
        {
          title: "Lyapunov Noise Pruning",
          description: "Task-agnostic pruning leveraging stability theory for dynamic sparsification while maintaining performance",
          technologies: "Stability Theory & Control",
          metrics: "57% Neuron, 50% Synapse Sparsity"
        },
        {
          title: "RoboKoop Framework",
          description: "Enhanced off-policy control using Koopman operators for robust visual-dynamic representations",
          technologies: "Koopman Operator Theory",
          metrics: "Improved Stability & Efficiency"
        }
      ]
    },
    {
      title: "Dynamic Model Architecture",
      icon: Network,
      description: "Bridging theoretical expressiveness and hardware constraints through efficient, scalable neural architectures",
      projects: [
        {
          title: "Neuro-Dynamic SSMs",
          description: "Novel state space model variants optimized for event-based computing and temporal precision",
          technologies: "State-Space Model Dynamics",
          metrics: "70× FLOP Reduction (Celex-HAR)"
        },
        {
          title: "Dynamic Graph Networks",
          description: "Addressing oversmoothing through stability-preserving information flow in deep GNNs",
          technologies: "Stability Theory for GNNs",
          metrics: "Enhanced Deep GNN Stability"
        },
        {
          title: "Hardware Co-Design",
          description: "Specialized compute-in-memory architecture for efficient implementation of SSM operations",
          technologies: "Silicon-Optimized Design",
          metrics: "268 TOPS/W Efficiency"
        }
      ]
    }
  ];

  return (
    <div className="research-container">
      <header className="research-header">
        <h1 className="text-3xl font-bold mb-4">Research Statement</h1>
        <p className="text-xl opacity-90">
          My research introduces a fundamentally new perspective: treating AI as a dynamical system that 
          naturally evolves and adapts, enabling continuous learning and self-sustaining operation in complex environments.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-bold mb-6">Why Current Models Fail</h2>
        <div className="problem-section">
          {problems.map((problem, index) => (
            <Card key={index} className={`problem-card ${problem.type}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <problem.icon className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">{problem.title}</h3>
                </div>
                <p className="text-gray-600">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">A New Perspective</h2>
        <div className="comparison-section">
          <div className="comparison-card traditional">
            <h3 className="text-xl font-bold mb-4 text-red-600">
              {comparison.traditional.title}
            </h3>
            <ul className="space-y-2">
              {comparison.traditional.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <RefreshCcw className="w-5 h-5 mt-1 text-red-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="comparison-card adaptive">
            <h3 className="text-xl font-bold mb-4 text-green-600">
              {comparison.adaptive.title}
            </h3>
            <ul className="space-y-2">
              {comparison.adaptive.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Zap className="w-5 h-5 mt-1 text-green-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Research Thrusts</h2>
        {researchThrusts.map((thrust, index) => (
          <div key={index} className="research-thrust">
            <div className="thrust-header">
              <div className="thrust-icon">
                <thrust.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{thrust.title}</h3>
                <p className="text-gray-600 mt-1">{thrust.description}</p>
              </div>
            </div>
            <div className="projects-grid">
              {thrust.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="project-card">
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Workflow className="w-4 h-4" />
                    {project.technologies}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <GitBranch className="w-4 h-4" />
                    {project.metrics}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default ResearchStatement;