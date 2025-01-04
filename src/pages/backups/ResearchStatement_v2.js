// First, we group all imports at the top of the file
import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { 
  BrainCog, 
  Network, 
  Cpu, 
  ChevronRight,
  AlertTriangle,
  Clock,
  RefreshCcw,
  Zap,
} from 'lucide-react';
import './ResearchStatement.css';

// Next, we define our components, starting with the smaller, reusable ones
const ComparisonVisualization = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gray-50 rounded-xl p-8">
      {/* Using the updated SVG with more detailed visualization */}
      <svg className="w-full h-full" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid meet">
        {/* Background */}
        <rect width="1000" height="700" fill="#ffffff"/>
        
        {/* Traditional AI Section */}
        <g transform="translate(50,50)">
            {/* Title */}
            <text x="150" y="30" className="font-sans text-lg font-bold" fill="#333">Traditional AI Model</text>
            <text x="80" y="50" className="font-sans text-sm" fill="#666">Requires retraining after system changes</text>
            
            {/* Coordinate system */}
            <line x1="0" y1="250" x2="400" y2="250" stroke="#666" strokeWidth="2"/> {/* x-axis */}
            <line x1="0" y1="50" x2="0" y2="450" stroke="#666" strokeWidth="2"/> {/* y-axis */}
            
            {/* System changes visualization */}
            <path d="M0,250 Q25,200 50,220 T100,200" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="5,5"/>
            <path d="M100,200 Q125,350 150,320 T200,350" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="5,5"/>
            <path d="M200,350 Q225,150 250,180 T300,150" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="5,5"/>
            <path d="M300,150 Q325,300 350,280 T400,300" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="5,5"/>
            
            {/* Traditional AI performance line */}
            <path d="M0,250 L100,220" fill="none" stroke="#ff6b6b" strokeWidth="3"/>
            <path d="M100,220 L100,400 L150,320" fill="none" stroke="#ff6b6b" strokeWidth="3"/>
            <path d="M200,320 L200,450 L250,180" fill="none" stroke="#ff6b6b" strokeWidth="3"/>
            <path d="M300,180 L300,400 L350,280" fill="none" stroke="#ff6b6b" strokeWidth="3"/>
            
            {/* Retraining points with labels */}
            {[
              { cx: 100, cy: 400, text: "Retraining needed", tx: 60, ty: 420 },
              { cx: 200, cy: 450, text: "Retraining needed", tx: 160, ty: 470 },
              { cx: 300, cy: 400, text: "Retraining needed", tx: 260, ty: 420 }
            ].map((point, index) => (
              <g key={`retraining-${index}`}>
                <circle cx={point.cx} cy={point.cy} r="5" fill="#ff6b6b"/>
                <text x={point.tx} y={point.ty} className="font-sans text-xs" fill="#666">{point.text}</text>
              </g>
            ))}

            {/* System change indicators */}
            {[100, 200, 300].map((x, index) => (
              <g key={`change-${index}`}>
                <path d={`M${x},100 L${x},400`} stroke="#666" strokeWidth="1" strokeDasharray="5,5"/>
                <text x={x-15} y="90" className="font-sans text-xs" fill="#666">System</text>
                <text x={x-15} y="105" className="font-sans text-xs" fill="#666">Change</text>
              </g>
            ))}
        </g>

        {/* Neuro-Adaptive AI Section */}
        <g transform="translate(500,50)">
            {/* Title */}
            <text x="150" y="30" className="font-sans text-lg font-bold" fill="#333">Neuro-Adaptive Dynamical AI</text>
            <text x="80" y="50" className="font-sans text-sm" fill="#666">Rapidly adapts to system changes</text>
            
            {/* Coordinate system */}
            <line x1="0" y1="250" x2="400" y2="250" stroke="#666" strokeWidth="2"/>
            <line x1="0" y1="50" x2="0" y2="450" stroke="#666" strokeWidth="2"/>
            
            {/* System changes - same pattern */}
            <path d="M0,250 Q25,200 50,220 T100,200" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="5,5"/>
            <path d="M100,200 Q125,350 150,320 T200,350" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="5,5"/>
            <path d="M200,350 Q225,150 250,180 T300,150" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="5,5"/>
            <path d="M300,150 Q325,300 350,280 T400,300" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="5,5"/>
            
            {/* Adaptive AI response curve */}
            <path d="M0,250 Q25,200 50,220 T100,200" fill="none" stroke="#4CAF50" strokeWidth="3"/>
            <path d="M100,200 C110,230 120,260 130,320 C140,350 150,330 160,325 C170,320 180,340 200,350" fill="none" stroke="#4CAF50" strokeWidth="3"/>
            <path d="M200,350 C210,300 220,200 230,180 C240,170 250,175 260,170 C270,165 280,155 300,150" fill="none" stroke="#4CAF50" strokeWidth="3"/>
            <path d="M300,150 C310,180 320,250 330,280 C340,290 350,285 360,290 C370,295 380,298 400,300" fill="none" stroke="#4CAF50" strokeWidth="3"/>

            {/* Adaptation points with labels */}
            {[
              { x: 105, y: 230 },
              { x: 205, y: 320 },
              { x: 305, y: 180 }
            ].map((point, index) => (
              <g key={`adapt-${index}`} transform={`translate(${point.x},${point.y})`}>
                <path d="M-5,-5 C0,-15 10,-15 15,-5" fill="none" stroke="#4CAF50" strokeWidth="2"/>
                <circle cx="15" cy="-5" r="2" fill="#4CAF50"/>
                <text x="20" y="0" className="font-sans text-xs" fill="#4CAF50">Rapid</text>
                <text x="20" y="12" className="font-sans text-xs" fill="#4CAF50">Adaptation</text>
              </g>
            ))}

            {/* System change indicators */}
            {[100, 200, 300].map(x => (
              <path key={`change-line-${x}`} d={`M${x},100 L${x},400`} stroke="#666" strokeWidth="1" strokeDasharray="5,5"/>
            ))}
        </g>

        {/* Legend */}
        <g transform="translate(50,520)">
            <text x="450" y="0" className="font-sans text-base" fill="#666" textAnchor="middle">System Changes Example Scenarios</text>
            <rect x="100" y="20" width="700" height="80" rx="5" fill="#fff" stroke="#666"/>
            <text x="120" y="45" className="font-sans text-sm" fill="#333">• Unexpected Weather: Autonomous vehicles adapting to severe weather conditions</text>
            <text x="120" y="70" className="font-sans text-sm" fill="#333">• Hardware Changes: Robots adjusting to sensor degradation or failures</text>
            <text x="120" y="95" className="font-sans text-sm" fill="#333">• Environmental Shifts: Space exploration systems handling new terrain conditions</text>
        </g>
      </svg>
    </div>
  );
};
const MotivationSection = () => {
  const challenges = [
    {
      title: "Hardware Failures",
      icon: Cpu,
      description: "Current systems lack self-repair capabilities when facing unpredictable radiation damage and chip failures in extreme environments.",
      image: "/images/hardware-challenge.svg",
      color: "border-yellow-500"
    },
    {
      title: "Environmental Changes",
      icon: AlertTriangle,
      description: "Traditional AI struggles to adapt to rapidly changing conditions like weather patterns affecting forest fire behavior.",
      image: "/images/environment-challenge.svg",
      color: "border-red-500"
    },
    {
      title: "Resource Constraints",
      icon: Clock,
      description: "Limited training data and computational resources make retraining impractical in many real-world scenarios.",
      image: "/images/resource-challenge.svg",
      color: "border-blue-500"
    }
  ];

  return (
    <section className="space-y-8">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Why Current AI Systems Fall Short</h2>
        <p className="text-gray-700 leading-relaxed">
          While current AI systems excel in controlled environments, they struggle with the unpredictable dynamics 
          of real-world settings. Traditional autonomous systems rely on periodic retraining and human intervention, 
          making them brittle when facing environmental shifts.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <Card key={challenge.title} className={`border-l-4 ${challenge.color}`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <challenge.icon className="w-6 h-6" />
                <h3 className="font-semibold text-lg">{challenge.title}</h3>
              </div>
              <p className="text-gray-600">{challenge.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

const NewPerspectiveSection = () => {
  return (
    <section className="mt-16 space-y-8">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">A New Perspective: Neuro-Adaptive Dynamical AI</h2>
        <p className="text-gray-700 leading-relaxed">
          My research introduces a fundamentally new perspective: treating AI as a dynamical system that naturally 
          evolves and adapts. This framework embeds adaptability and resilience within the model's core, enabling 
          continuous, asynchronous learning and self-sustaining operation.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <Card className="flex-1 bg-red-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg text-red-700 mb-4">Current AI Models</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <RefreshCcw className="w-5 h-5 mt-1 text-red-500" />
                <span>Fixed architecture unable to adapt to new scenarios</span>
              </li>
              <li className="flex items-start gap-2">
                <RefreshCcw className="w-5 h-5 mt-1 text-red-500" />
                <span>Requires complete retraining for new conditions</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-green-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg text-green-700 mb-4">Neuro-Adaptive Approach</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Zap className="w-5 h-5 mt-1 text-green-500" />
                <span>Continuously evolves with changing conditions</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-5 h-5 mt-1 text-green-500" />
                <span>Real-time adaptation without explicit retraining</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm">
        <ComparisonVisualization />
      </div>
    </section>
  );
};

const TechnicalApproachSection = () => {
  const researchThrusts = [
    {
      title: "Learning as Control Systems",
      icon: BrainCog,
      description: "Embedding adaptive control within learning algorithms for real-time adaptation",
      achievements: [
        "Heterogeneous Recurrent SNNs with enhanced memory retention",
        "Lyapunov Noise Pruning achieving 57% neuron sparsity",
        "RoboKoop framework for enhanced stability"
      ]
    },
    {
      title: "Dynamic Model Architecture",
      icon: Network,
      description: "Creating efficient, scalable neural architectures for resource-constrained settings",
      achievements: [
        "70× FLOP reduction with SPLR",
        "Enhanced deep GNN stability",
        "268 TOPS/W efficiency with hardware co-design"
      ]
    }
  ];

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-4">Technical Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {researchThrusts.map((thrust, index) => (
          <Card key={index} className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-600">
                  <thrust.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{thrust.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{thrust.description}</p>
              <ul className="space-y-2">
                {thrust.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

// Finally, we define our main component that brings everything together
const ResearchStatement = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-8 text-white mb-16">
        <h1 className="text-3xl font-bold mb-6">Research Statement</h1>
        <p className="text-xl opacity-90">
          Developing adaptive, resilient AI systems that can thrive in complex, unpredictable environments
          through the mathematics of dynamical systems.
        </p>
      </div>

      <MotivationSection />
      <NewPerspectiveSection />
      <TechnicalApproachSection />
    </div>
  );
};

export default ResearchStatement;