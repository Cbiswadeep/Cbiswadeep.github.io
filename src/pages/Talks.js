import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Talks = () => {
  const talks = [
    {
      year: 2024,
      title: "Brain-Inspired Spiking Neural Networks for Online Learning",
      location: "SRC TechCon, Austin, TX",
      events: ["Georgia Tech ECE Research Rally"],
    },
    {
      year: 2024,
      title: "Evolution Strategies in Heterogeneous Recurrent Spiking Neural Network for Dynamical Control",
      location: "Georgia Tech DCL Symposium, Atlanta, GA",
      events: [],
    },
    {
      year: 2023,
      title: "Dynamics in Diversity: Harnessing Heterogeneity in Neuronal and Synaptic Dynamics in SNNs",
      location: "SNUFA (Remote)",
      events: [],
      link: "https://example-link-to-snu-talk.com", // Replace with actual link
    },
    {
      year: 2023,
      title: "Learning to Predict Using Network of Spiking Neurons",
      location: "ICERM Workshop, Providence, RI",
      events: [],
      link: "https://example-link-to-icerm-talk.com", // Replace with actual link
    },
    {
      year: 2019,
      title: "Phase-Sensitive Common Spatial Pattern for EEG Classification",
      location: "IEEE International Conference on Systems, Man and Cybernetics (SMC), Bari, Italy",
      events: [],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Talks</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Highlighting my research through invited talks, conference presentations, and workshops.
        </p>
      </div>

      {/* Talks Section */}
      <div className="grid gap-8">
        {talks.map((talk, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">{talk.title}</h2>
              <div className="flex items-center text-gray-500">
                <Calendar className="w-5 h-5 mr-1" />
                <span>{talk.year}</span>
              </div>
            </div>
            <div className="flex items-center mt-2 text-gray-500">
              <MapPin className="w-5 h-5 mr-1" />
              <span>{talk.location}</span>
            </div>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
              {talk.events.map((event, idx) => (
                <li key={idx}>
                  {event}
                  {talk.link && idx === 0 && (
                    <a
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline ml-2 flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Details
                    </a>
                  )}
                </li>
              ))}
              {!talk.events.length && talk.link && (
                <li>
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 underline flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Details
                  </a>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Talks;
