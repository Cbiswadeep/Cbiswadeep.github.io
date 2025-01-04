import React from 'react';
import { 
  BrainCircuit, 
  Cpu, 
  Network, 
  Zap,
  Globe,
  Shield
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ResearchStatement = () => {
  const researchThemes = [
    {
      title: "Thrust 1: Adaptive Learning Algorithms",
      icon: BrainCircuit,
      color: "bg-purple-600",
      description: "Developing learning systems that can autonomously adapt to changing environments without extensive retraining.",
      projects: [
        {
          name: "Heterogeneous Recurrent Spiking Neural Networks",
          venue: "Frontiers in Neuroscience 2023",
          impact: "Enhanced temporal memory retention through neuronal diversity"
        },
        {
          name: "Lyapunov Noise Pruning",
          venue: "ICLR 2024",
          impact: "57% neuron sparsity while maintaining high performance"
        },
        {
          name: "RoboKoop Framework",
          venue: "Conference on Robot Learning 2024",
          impact: "Improved robotic system stability through adaptive control"
        }
      ]
    },
    {
      title: "Thrust 2: Dynamic Model Architectures",
      icon: Network,
      color: "bg-blue-600", 
      description: "Creating scalable, efficient neural architectures that can operate effectively in resource-constrained environments.",
      projects: [
        {
          name: "SPLR Neural Network",
          venue: "ICLR 2025 (submitted)",
          impact: "70× FLOP reduction for long-range temporal learning"
        },
        {
          name: "μDARTS",
          venue: "IEEE Access 2021",
          impact: "Model uncertainty-aware architecture search"
        },
        {
          name: "Hybrid Spiking Neural Platforms",
          venue: "Frontiers in Neuroscience 2022",
          impact: "Processing-in-memory hardware for energy-efficient neural networks"
        }
      ]
    }
  ];

  const comparisonData = [
    { name: 't1', traditional: 92.5, adaptive: 92.3 },
    { name: 't2', traditional: 90.2, adaptive: 92.1 },
    { name: 't3', traditional: 88.7, adaptive: 91.8 },
    { name: 't4', traditional: 87.1, adaptive: 91.5 },
    { name: 't5', traditional: 85.6, adaptive: 91.2 },
    { name: 't6', traditional: 84.2, adaptive: 90.9 }
  ];



  const thrustDetails = [
    {
      description:
        "This thrust focuses on developing learning systems that autonomously adapt to changing environments without extensive retraining. These systems leverage neuronal diversity and dynamic adaptability to achieve robust performance.",
      image: "/research/thrust1.svg",
      keyResult: "Achieved 57% neuron sparsity while maintaining high accuracy using Lyapunov Noise Pruning.",
      resultImage: "/research/th1_results.svg",
      publications: [
        { title: "Sparse Spiking Neural Network: Exploiting Heterogeneity in Timescales for Pruning Recurrent SNN.", venue: "ICLR 2024" },
        { title: "Heterogeneous Neuronal and Synaptic Dynamics for Spike-Efficient Unsupervised Learning.", venue: "ICLR 2023" },
        { title: "Topological Representations of Heterogeneous Learning Dynamics.", venue: "IEEE IJCNN 2024 [Oral]" },
        { title: "Heterogeneous Recurrent Spiking Neural Network for Spatio-Temporal Classification.", venue: "Frontiers in Neuroscience 2022" },
        { title: "Characterization of Generalizability of STDP-trained SNNs.", venue: "Frontiers in Neuroscience 2021" },
        { title: "Online Relational Inference for Evolving Multi-agent Interacting Systems.", venue: "NeurIPS 2024" }
      ],
    },
    {
      description:
        "This thrust emphasizes scalable, efficient architectures designed for resource-constrained environments. These models balance computational efficiency with performance, enabling applications in robotics and beyond.",
      image: "/research/thrust2.svg",
      keyResult: "Achieved 70× FLOP reduction with SPLR Neural Network for long-range temporal learning.",
      resultImage: "/research/th2_results.svg",
      publications: [
        { title: "A Fully Spiking Hybrid Neural Network for Energy-Efficient Object Detection.", venue: "IEEE Transactions on Image Processing 2021" },
        { title: "Brain-Inspired Spatiotemporal Processing Algorithms for Efficient Event-Based Perception.", venue: "DATE 2023" },
        { title: "μDARTS: Model Uncertainty-Aware Differentiable Architecture Search.", venue: "IEEE Access 2022" },
        { title: "Unsupervised 3D Object Learning through Neuron Activity Aware Plasticity.", venue: "ICLR 2023" },
        { title: "Self-Organizing Spiking Neural Network for Continual Time Series Prediction.", venue: "IEEE IJCNN 2023" }
      ],
    },
  ];


  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Neuro-Adaptive Dynamical AI Research</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Developing autonomous, resilient AI systems that can continuously adapt to complex, unpredictable environments.
        </p>
        <div className="max-w-4xl mx-auto mb-8">
          <img 
            src="/research/Slide5.svg" 
            alt="Research Overview" 
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>




      <div className="mt-16">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-3xl font-bold text-gray-800">Limitations of Current AI Models</h2>
    <div className="h-1 bg-gray-300 flex-grow ml-6"></div>
  </div>
  <p className="text-gray-600 mb-8">
    Traditional AI models face significant challenges in adapting to dynamic, unpredictable environments. Let's examine the key reasons why these static models fall short.
  </p>

  <div className="grid grid-cols-2 gap-8">
    <div>
      <h3 className="text-2xl font-bold mb-4 text-red-600">Rigid Optimization Surface</h3>
      <img src="research/current_AI_1.svg" alt="Current AI Models" className="mb-4" style={{ maxWidth: '80%', height: 'auto' }}/>
      <p className="text-gray-600">
        Traditional AI models rely on a fixed optimization surface that fails to adapt to environmental changes. This rigid approach requires complete retraining to handle new scenarios, leading to performance degradation as the data shifts over time.
      </p>
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-4 text-red-600">Lack of Adaptation</h3>
      <img src="research/current_AI_2.svg" alt="Static Optimization" className="mb-4" style={{ maxWidth: '80%', height: 'auto' }}/>
      <p className="text-gray-600">
        The static nature of these models means they cannot continuously evolve and adjust to unforeseen circumstances, making them brittle and inflexible. As a result, their performance degrades as the data and environment change.
      </p>
    </div>
  </div>
</div>

<div className="mt-16">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-3xl font-bold text-gray-800">A New Dynamical Systems Approach</h2>
    <div className="h-1 bg-gray-300 flex-grow ml-6"></div>
  </div>
  <p className="text-gray-600 mb-8">
    To overcome the limitations of current AI models, the researcher has developed a novel "Neuro-Adaptive Dynamical AI" approach that fundamentally changes how these systems adapt and evolve.
  </p>

  <div className="grid grid-cols-2 gap-8">
    <div>
      <h3 className="text-2xl font-bold mb-4 text-green-600">Dynamic Adaptation</h3>
      <img src="research/Nadya1.svg" alt="Neuro-Adaptive Dynamical AI Models" className="mb-4" style={{ maxWidth: '80%', height: 'auto' }}/>
      <p className="text-gray-600">
        The researcher's "Neuro-Adaptive Dynamical AI" models utilize a dynamic surface that continuously adapts to changing conditions. This enables real-time adaptation without the need for explicit retraining, allowing the models to maintain performance and remain resilient under perturbation.
      </p>
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-4 text-green-600">Autonomous Evolution</h3>
      <img src="research/Nadya2.svg" alt="Dynamic Adaptation" className="mb-4" style={{ maxWidth: '80%', height: 'auto' }}/>
      <p className="text-gray-600">
        The dynamic nature of these models means they can autonomously evolve and self-regulate, continuously adjusting to new environments and challenges. This fundamental shift in approach allows for much more robust and adaptable AI systems that can thrive in complex, unpredictable settings.
      </p>
    </div>
  </div>
</div>


      {/* Research Themes */}
      <div className="grid md:grid-cols-2 gap-8">
        {researchThemes.map((theme, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className={`p-4 rounded-lg inline-block mb-4 ${theme.color}`}>
                <theme.icon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">{theme.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">{theme.description}</p>
              <div className="space-y-4">
                {theme.projects.map((project, projIndex) => (
                  <div 
                    key={projIndex} 
                    className="border-l-4 border-gray-200 pl-4 hover:border-blue-500 transition-colors"
                  >
                    <h3 className="font-semibold text-lg">{project.name}</h3>
                    <p className="text-sm text-gray-500">{project.venue}</p>
                    <p className="text-sm text-gray-600">{project.impact}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>











      {/* Detailed Thrusts Section */}
      <div className="mt-16">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
      Detailed Exploration of Research Thrusts
    </h2>

    {thrustDetails.map((thrust, index) => (
      <div
        key={index}
        className="mb-16"
        style={{ borderLeft: `4px solid ${index === 0 ? '#009193' : '#8B3EC8'}` }}
      >
        {/* Summary Block */}
        <div className="mb-8">
          <img
            src={thrust.image}
            alt={`Summary figure for Thrust ${index + 1}`}
            style={{ maxWidth: '80%', height: 'auto' }}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">{thrust.description}</p>
          <p
            className="font-semibold"
            style={{ color: index === 0 ? '#009193' : '#8B3EC8' }}
          >
            {thrust.keyResult}
          </p>
        </div>

        {/* Result Figure Block */}
        <div className="mt-8">
          <h3
            className="text-xl font-bold text-center mb-4"
            style={{ color: index === 0 ? '#009193' : '#8B3EC8' }}
          >
            Key Result
          </h3>
          <img
            src={thrust.resultImage}
            alt={`Key result figure for Thrust ${index + 1}`}
            style={{ maxWidth: '60%', height: 'auto' }}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>

        {/* Combined Publications Block */}
        <div
          className="mt-8 bg-gray-50 p-6 rounded-md shadow-md"
          style={{
            borderLeft: `4px solid ${index === 0 ? '#009193' : '#8B3EC8'}`,
          }}
        >
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: index === 0 ? '#009193' : '#8B3EC8' }}
          >
            Publications
          </h3>
          <ol className="list-decimal pl-6 space-y-3 text-gray-800 text-base leading-relaxed">
            {thrust.publications.map((pub, pubIndex) => (
              <li key={pubIndex}>
                <span className="font-medium">{pub.title}</span>
                <span
                  className="ml-2 px-2 py-1 rounded-md text-white text-sm font-bold"
                  style={{
                    backgroundColor: index === 0 ? '#009193' : '#8B3EC8',
                  }}
                >
                  {pub.venue}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
  ))}
</div>



    </div>
  );
};

export default ResearchStatement;