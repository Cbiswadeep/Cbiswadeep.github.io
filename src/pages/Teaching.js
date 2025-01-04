import React from 'react';

const Teaching = () => {
  const teachingDetails = {
    title: "ECE 2020: Digital Systems Design for Industrial Engineering Majors",
    institution: "Georgia Tech",
    term: "Fall 2024",
    classSize: 35,
    description:
      "ECE 2020 introduces students to the many levels of abstraction in digital systems design. The course bridges foundational concepts with practical applications, tailored for Industrial Engineering majors.",
    objectives: [
      "Understand Boolean logic and represent logic functions in truth-table, schematic, and algebraic forms.",
      "Learn physical implementations of digital logic and analyze timing behavior.",
      "Understand digital building blocks (e.g., multiplexers, encoders) and their use in larger systems.",
      "Create finite state machines and understand basic processor operations.",
      "Write simple programs in assembly code."
    ],
    highlights: [
      "Served as the <strong>primary instructor</strong>, teaching and managing the class of <strong>35 students</strong>.",
      "Designed and graded all exams and assignments while conducting <strong>weekly office hours</strong> to support student learning.",
      "Developed hands-on labs and projects focusing on <strong>combinational and sequential logic circuits</strong>.",
      "Coordinated with a <strong>teaching assistant</strong> to supervise labs and facilitate smooth course operations."
    ],
  };

  const mentoringDetails = {
    philosophy:
      "Mentoring is a collaborative journey where mentor and mentee grow together. My approach fosters <strong>independence, critical thinking, and professional growth</strong>, tailored to each mentee's strengths and aspirations.",
    summary: "I have mentored <strong>over 10 students</strong>, including undergraduates and graduate researchers, across diverse topics like neuromorphic computing, RF signal modulation, and autonomous systems.",
    highlights: [
      {
        title: "Koopman-Based Learning for Autonomous Drones",
        description:
          "Guided a <strong>GT ECE/Robotics undergraduate student</strong> in developing a predictive control algorithm for drone navigation using Koopman operator theory, resulting in skills development in <strong>algorithmic design and control systems</strong>.",
      },
      {
        title: "Adaptive Autoencoder for RF Signal Modulation Recognition",
        description:
          "Supervised <strong>GT ECE undergraduate students</strong> in implementing <strong>noise-adaptive autoencoders</strong>, enhancing robust RF signal processing by integrating theoretical understanding with practical tasks.",
      },
      {
        title: "Simultaneous ANN-to-SNN Conversion and Pruning",
        description:
          "Mentored <strong>GT CS undergraduate students</strong> on designing <strong>energy-efficient AI models</strong> by optimizing neuronal timescales, reducing resource usage while maintaining performance.",
      },
      {
        title: "State Space Machines and Quantization Techniques",
        description:
          "Guided <strong>PhD students</strong> on topics like <strong>state space models, neuromorphic computing, and hardware design</strong>, resulting in publications at leading conferences.",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Teaching & Mentoring</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Sharing knowledge and empowering the next generation of engineers and researchers through teaching and mentorship.
        </p>
      </div>

      {/* Teaching Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Teaching</h2>
        <div className="bg-gray-50 p-6 rounded-md shadow-md border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-800">{teachingDetails.title}</h3>
          <p className="text-sm text-gray-500">
            {teachingDetails.institution} | {teachingDetails.term} | Class Size: {teachingDetails.classSize}
          </p>
          <p className="text-gray-600 mt-4">{teachingDetails.description}</p>

          <h4 className="text-lg font-bold text-gray-800 mt-6">Course Objectives</h4>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
            {teachingDetails.objectives.map((objective, idx) => (
              <li key={idx}>{objective}</li>
            ))}
          </ul>

          <h4 className="text-lg font-bold text-gray-800 mt-6">Highlights</h4>
          <ul
            className="list-disc pl-5 mt-2 space-y-2 text-gray-600"
            dangerouslySetInnerHTML={{
              __html: teachingDetails.highlights.join("</li><li>"),
            }}
          ></ul>
        </div>
      </div>

      {/* Mentoring Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Mentoring</h2>
        <p
          className="text-gray-600 leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: mentoringDetails.philosophy }}
        ></p>
        <p
          className="text-gray-600 leading-relaxed font-semibold mb-6"
          dangerouslySetInnerHTML={{ __html: mentoringDetails.summary }}
        ></p>
        <div className="space-y-8">
          {mentoringDetails.highlights.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-md shadow-md border-l-4 border-green-500"
            >
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p
                className="text-gray-600 mt-2"
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teaching;
